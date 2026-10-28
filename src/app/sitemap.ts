import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllServiceSlugs } from "@/content/services";
import { getAllLocationSlugs } from "@/content/locations";

// Required for static export (GitHub Pages)
export const dynamic = "force-static";

// No lastModified: a date that changes on every deploy gets ignored by Google

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Location landing pages
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/software-development/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
