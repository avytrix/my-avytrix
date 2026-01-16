import { siteConfig } from "@/lib/config";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: "https://ik.imagekit.io/viliha/images/logos/viliha-d.jpg",
      width: 120,
      height: 40,
    },
    description: siteConfig.description,
    email: siteConfig.business.email,
    foundingDate: siteConfig.business.foundingDate,
    sameAs: siteConfig.business.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.business.email,
      availableLanguage: ["English"],
      areaServed: siteConfig.seo.targetRegions.map((r) => r.code),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const softwareCompanySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: "https://ik.imagekit.io/viliha/images/logos/viliha-d.jpg",
    image: siteConfig.seo.ogImage,
    description: siteConfig.description,
    email: siteConfig.business.email,
    priceRange: "$$",
    areaServed: siteConfig.seo.targetRegions.map((region) => ({
      "@type": "Country",
      name: region.name,
    })),
    serviceType: siteConfig.business.services,
    knowsAbout: [
      "Custom Software Development",
      "AI Software Development",
      "Machine Learning",
      "Web Development",
      "Mobile App Development",
      "Cloud Computing",
      "DevOps",
      "Startup Technology Solutions",
      "Enterprise Software",
      "API Development",
      "SaaS Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: siteConfig.business.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          description: `Professional ${service} services for startups and AI companies`,
        },
        position: index + 1,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareCompanySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
