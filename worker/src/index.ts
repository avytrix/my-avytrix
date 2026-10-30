import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis/cloudflare";
import { contactSchema, isDisposableEmail } from "../../src/lib/contact-schema";

interface Env {
  // vars (from .env.local via the deploy script)
  SITE_URL: string; // the only origin, and the only reCAPTCHA hostname, accepted
  EMAIL_FROM: string; // "Name <address>"
  NOTIFICATION_EMAIL: string;
  TIMEZONE: string; // IANA zone for the team email timestamp, e.g. Asia/Ho_Chi_Minh
  // secrets
  RESEND_API_KEY: string;
  RECAPTCHA_SECRET_KEY: string;
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
}

const RECAPTCHA_ACTION = "contact_submit"; // must match grecaptcha.execute in ContactForm
const MIN_SCORE = 0.5;

// Template values are inserted as raw HTML by Resend, so visitor input is escaped here
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? "";
    const site = new URL(env.SITE_URL);
    const cors: Record<string, string> = origin === site.origin
      ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type", Vary: "Origin" }
      : {};
    const json = (body: object, status = 200) => Response.json(body, { status, headers: cors });

    if (request.method === "OPTIONS") return new Response(null, { status: cors["Access-Control-Allow-Origin"] ? 204 : 403, headers: cors });
    if (new URL(request.url).pathname !== "/contact") return json({ success: false, error: "Not found" }, 404);
    if (request.method !== "POST") return json({ success: false, error: "Method not allowed" }, 405);
    if (!cors["Access-Control-Allow-Origin"]) return json({ success: false, error: "Origin not allowed" }, 403);

    // Origin can be faked outside a browser, so throttle each IP before calling Google.
    // (Cloudflare's built-in rate limiter is approximate per location and did not engage in testing.)
    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const redis = new Redis({ url: env.UPSTASH_REDIS_REST_URL, token: env.UPSTASH_REDIS_REST_TOKEN });
    const burst = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5, "1 m"), prefix: "contact_burst" });
    if (!(await burst.limit(`ip:${ip}`)).success) {
      return json({ success: false, error: "Too many requests. Please wait a minute." }, 429);
    }

    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success || typeof body?.token !== "string") {
      return json({ success: false, error: "Validation failed", details: parsed.error?.issues }, 400);
    }
    const { name, email, company, service, message } = parsed.data;
    if (isDisposableEmail(email)) return json({ success: false, error: "Please use a business email address" }, 400);

    // reCAPTCHA v3: same request as the data, so nothing is sent without a passing token
    const verify = (await (
      await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: new URLSearchParams({ secret: env.RECAPTCHA_SECRET_KEY, response: body.token, remoteip: ip }),
      })
    ).json()) as { success: boolean; score?: number; action?: string; hostname?: string };
    // hostname: the token must come from the live site, not from the public site key used elsewhere (e.g. localhost)
    if (!verify.success || (verify.score ?? 0) < MIN_SCORE || verify.action !== RECAPTCHA_ACTION || verify.hostname !== site.hostname) {
      return json({ success: false, error: "reCAPTCHA verification failed" }, 403);
    }

    // One enquiry per day per IP and per email
    const limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(1, "1 d"),
      prefix: "contact_form",
    });
    for (const key of [`ip:${ip}`, `email:${email.toLowerCase()}`]) {
      if (!(await limiter.limit(key)).success) {
        return json({ success: false, error: "You have already sent an enquiry today. Please try again tomorrow." }, 429);
      }
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const customer = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: email,
      template: { id: "contact-confirmation", variables: { NAME: escape(name) } },
    });
    if (customer.error) {
      console.error("confirmation email failed", customer.error);
      return json({ success: false, error: "Email could not be sent" }, 502);
    }

    const team = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: env.NOTIFICATION_EMAIL,
      replyTo: email,
      template: {
        id: "contact-team-notification",
        variables: {
          NAME: escape(name),
          VISITOR_EMAIL: escape(email),
          COMPANY: escape(company),
          SERVICE: escape(service),
          MESSAGE: escape(message).replace(/\n/g, "<br>"),
          SUBMITTED_AT: new Date().toLocaleString("en-US", { timeZone: env.TIMEZONE, dateStyle: "full", timeStyle: "long" }),
        },
      },
    });
    // The visitor already has their confirmation; a team-email failure is logged, not shown to them
    if (team.error) console.error("team notification failed", team.error);

    return json({ success: true });
  },
};

export default worker;
