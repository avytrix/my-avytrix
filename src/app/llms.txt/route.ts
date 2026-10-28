import { siteConfig } from "@/lib/config";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { homeContent } from "@/content/home";

// Required for static export (GitHub Pages)
export const dynamic = "force-static";

// /llms.txt for answer engines (standard section 7). Built from site content so it cannot drift.
export function GET() {
  const url = siteConfig.url;
  const tech = [...new Set(homeContent.techStack.categories.flatMap((c) => c.items.map((i) => i.title)))];

  const body = `# ${siteConfig.name}

> ${siteConfig.name} is a remote software development company${siteConfig.legal.name ? ` operated by ${siteConfig.legal.name}` : ""}. It builds custom software, web and mobile applications, APIs, and cloud infrastructure for startups, AI companies and enterprises, and it supplies dedicated development teams. Clients are served remotely in ${locations.map((l) => l.country).join(", ")}. To start a project, use ${url}/contact or email ${siteConfig.email.contactEmail}.

Key facts, each one stated on this site:
- Services: ${services.map((s) => s.title).join(", ")}.
- Technologies: ${tech.join(", ")}.
- Engagement models: a full-time dedicated team, team augmentation, project-based teams, or managed services.
- Support plans: business hours, extended hours, or 24/7 enterprise support.

What this site does not state:
- It publishes no prices or hourly rates. Every engagement starts with a free consultation.
- It names no clients and publishes no case-study metrics.

## Services
${services.map((s) => `- [${s.intro.pageTitle}](${url}/services/${s.slug}): ${s.description}`).join("\n")}
- [All services](${url}/services): overview of every service.

## Regions
${locations.map((l) => `- [${l.country}](${url}/software-development/${l.slug}): ${l.metaDescription}`).join("\n")}

## Company
- [About ${siteConfig.name}](${url}/about-us): mission, values, and approach.
- [Contact](${url}/contact): request a free consultation.
- [Privacy Policy](${url}/privacy-policy)
- [Terms and Conditions](${url}/terms-conditions)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
