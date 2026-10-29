import { siteConfig } from "@/lib/config";

// Required for static export (GitHub Pages)
export const dynamic = "force-static";

// RFC 9116. Expires is a year from the build, so any deploy within the year keeps it valid.
export function GET() {
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();
  const body = `Contact: mailto:${siteConfig.email.contactEmail}
Expires: ${expires}
Preferred-Languages: en
Canonical: ${siteConfig.url}/.well-known/security.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
