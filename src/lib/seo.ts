import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export interface PageSeo {
  path: string; // "" for home, "/about-us" otherwise
  title: string; // full <title>, max 60 chars including "| ${siteConfig.name}"
  description: string; // 140-160 chars
  image?: { url: string; width: number; height: number };
}

export interface Crumb {
  label: string;
  href?: string;
}

export const pageUrl = (path: string) => `${siteConfig.url}${path}`;
export const orgRef = { "@id": `${siteConfig.url}/#organization` };

const defaultImage = { url: siteConfig.seo.ogImage, width: 1200, height: 630 };

export function pageMetadata({ path, title, description, image = defaultImage }: PageSeo): Metadata {
  const url = pageUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.seo.locale,
      siteName: siteConfig.seo.siteName,
      url,
      title,
      description,
      images: [{ ...image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

// One @graph per page (standard 5.3). Only facts visible on the site go in here (section 0).
export function pageGraph({ path, title, description, crumbs = [], extra = [] }: PageSeo & {
  crumbs?: Crumb[];
  extra?: Record<string, unknown>[];
}) {
  const origin = siteConfig.url;
  const url = pageUrl(path);
  const org = orgRef;

  // Home first, current page last, drop crumbs without a URL and any URL already listed (5.4)
  const trail = [{ label: "Home", href: "/" }, ...crumbs.slice(0, -1), { label: crumbs.at(-1)?.label ?? "", href: path }]
    .filter((c) => c.href !== undefined)
    .filter((c, i, all) => all.findIndex((o) => o.href === c.href) === i);
  const hasTrail = path !== "" && crumbs.length > 0;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        ...org,
        name: siteConfig.name,
        url: origin,
        logo: { "@type": "ImageObject", "@id": `${origin}/#logo`, url: siteConfig.logoUrl },
        email: siteConfig.email.contactEmail,
        ...(siteConfig.social.length > 0 && { sameAs: siteConfig.social.map((p) => p.url) }),
        ...(siteConfig.legal.name && { legalName: siteConfig.legal.name }),
        ...(siteConfig.legal.taxId && { taxID: siteConfig.legal.taxId }),
        ...(siteConfig.contact.address && { address: siteConfig.contact.address }),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email.contactEmail,
          telephone: siteConfig.contact.phone,
          url: `${origin}/contact`,
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: siteConfig.name,
        publisher: org,
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${origin}/#website` },
        about: org,
        ...(hasTrail && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      },
      ...(hasTrail
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: trail.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.label,
                item: pageUrl(c.href === "/" ? "" : c.href!),
              })),
            },
          ]
        : []),
      ...extra,
    ],
  };
}
