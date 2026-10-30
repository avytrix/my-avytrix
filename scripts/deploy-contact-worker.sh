#!/bin/sh
# Deploys the contact form Worker (worker/) to Cloudflare with values from .env.local:
#   domain   <- host of NEXT_PUBLIC_CONTACT_API_URL
#   vars     <- NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_EMAIL_FROM_NAME/EMAIL_FROM, NEXT_PUBLIC_NOTIFICATION_EMAIL, CONTACT_EXTRA_ORIGINS
#   secrets  <- RESEND_API_KEY, RECAPTCHA_SECRET_KEY, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
# Needs `wrangler login` once. Ignores CLOUDFLARE_API_TOKEN/ACCOUNT_ID from the shell (they may belong to another project).
set -eu
cd "$(dirname "$0")/.."
set -a; . ./.env.local; set +a

domain=$(printf '%s' "$NEXT_PUBLIC_CONTACT_API_URL" | sed -E 's#^https?://([^/]+).*#\1#')
wrangler() { env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_ACCOUNT_ID npx -y wrangler@4 "$@"; }

# Secrets go through a private temp file, never argv or the terminal
secrets=$(mktemp); trap 'rm -f "$secrets"' EXIT; chmod 600 "$secrets"
python3 -c 'import json, os; print(json.dumps({k: os.environ[k] for k in ["RESEND_API_KEY", "RECAPTCHA_SECRET_KEY", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"]}))' > "$secrets"

cd worker
wrangler deploy --domain "$domain" \
  --var "SITE_URL:$NEXT_PUBLIC_SITE_URL" \
  --var "EXTRA_ORIGINS:${CONTACT_EXTRA_ORIGINS:-}" \
  --var "EMAIL_FROM:$NEXT_PUBLIC_EMAIL_FROM_NAME <$NEXT_PUBLIC_EMAIL_FROM>" \
  --var "NOTIFICATION_EMAIL:$NEXT_PUBLIC_NOTIFICATION_EMAIL"
wrangler secret bulk "$secrets"
