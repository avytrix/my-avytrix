import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { openSourceProjects, docsPath } from "@/content/projects";

// Required for static export (GitHub Pages)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    // This site's sitemap first (the SEO gate checks it), then each docs app's own
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      ...openSourceProjects.map((p) => `${siteConfig.url}${docsPath(p.openSource)}/sitemap.xml`),
    ],
  };
}
