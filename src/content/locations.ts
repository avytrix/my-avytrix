export interface LocationData {
  slug: string;
  country: string;
  region: string;
  flag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  testimonialRegion: string;
}

export const locations: LocationData[] = [
  {
    slug: "usa",
    country: "United States",
    region: "USA",
    flag: "🇺🇸",
    heroTitle: "Software Development Services in the USA",
    heroSubtitle: "Your Trusted Remote Development Partner for American Businesses",
    heroDescription:
      "Viliha delivers custom software solutions for US-based startups and enterprises. Our remote development teams work in your timezone, providing seamless collaboration and world-class results.",
    metaTitle: "Software Development Company for US Businesses | Viliha",
    metaDescription:
      "Custom software, web and mobile apps, cloud and dedicated remote teams for US startups and enterprises, with EST and PST overlap. Get a free consultation.",
    keywords: [
      "software development USA",
      "software development company USA",
      "remote developers USA",
      "hire developers USA",
      "custom software development United States",
      "web development company USA",
      "mobile app development USA",
      "offshore development team for USA",
      "US software outsourcing",
      "American startup software development",
    ],
    benefits: [
      {
        title: "US Timezone Overlap",
        description:
          "Our teams maintain significant overlap with EST and PST timezones, ensuring real-time collaboration and quick turnaround on feedback.",
      },
      {
        title: "Cost-Effective Excellence",
        description:
          "Get Silicon Valley quality at competitive rates. Save 40-60% compared to local US development agencies without compromising on quality.",
      },
      {
        title: "Startup Expertise",
        description:
          "We've helped numerous US startups build MVPs, scale products, and secure funding with robust, investor-ready technology solutions.",
      },
      {
        title: "Enterprise Compliance",
        description:
          "Our processes align with US business standards including SOC 2 awareness, HIPAA-conscious development, and secure coding practices.",
      },
    ],
    testimonialRegion: "US companies",
  },
  {
    slug: "uk",
    country: "United Kingdom",
    region: "UK",
    flag: "🇬🇧",
    heroTitle: "Software Development Services in the UK",
    heroSubtitle: "Premier Remote Development Partner for British Businesses",
    heroDescription:
      "Viliha provides bespoke software solutions for UK startups and enterprises. Our dedicated teams deliver exceptional quality with seamless GMT timezone collaboration.",
    metaTitle: "Software Development Company for UK Businesses | Viliha",
    metaDescription:
      "Custom software, web and mobile apps, cloud and dedicated remote teams for UK startups and enterprises, working in UK business hours. Get a free consultation.",
    keywords: [
      "software development UK",
      "software development company UK",
      "remote developers UK",
      "hire developers UK",
      "custom software development United Kingdom",
      "web development company UK",
      "mobile app development UK",
      "offshore development team for UK",
      "British startup software development",
      "London software development",
    ],
    benefits: [
      {
        title: "GMT Timezone Alignment",
        description:
          "Excellent timezone overlap with UK business hours ensures productive daily standups and real-time collaboration throughout your workday.",
      },
      {
        title: "Post-Brexit Flexibility",
        description:
          "As a non-EU partner, we offer simplified engagement without EU regulatory complexities while maintaining world-class delivery standards.",
      },
      {
        title: "Fintech & Startup Focus",
        description:
          "Extensive experience with UK fintech startups, e-commerce platforms, and innovative tech companies across London and beyond.",
      },
      {
        title: "Quality-First Approach",
        description:
          "British businesses expect excellence. Our rigorous QA processes and attention to detail align perfectly with UK quality standards.",
      },
    ],
    testimonialRegion: "UK companies",
  },
  {
    slug: "australia",
    country: "Australia",
    region: "Australia",
    flag: "🇦🇺",
    heroTitle: "Software Development Services in Australia",
    heroSubtitle: "Your Dedicated Remote Development Partner in APAC",
    heroDescription:
      "Viliha delivers premium software solutions for Australian businesses. Our teams provide excellent timezone coverage and deep understanding of the ANZ market.",
    metaTitle: "Software Development Company for Australia | Viliha",
    metaDescription:
      "Custom software, web and mobile apps, cloud and dedicated remote teams for Australian businesses, aligned with AEST/AEDT hours. Get a free consultation.",
    keywords: [
      "software development Australia",
      "software development company Australia",
      "remote developers Australia",
      "hire developers Australia",
      "custom software development Australia",
      "web development company Australia",
      "mobile app development Australia",
      "offshore development team for Australia",
      "Sydney software development",
      "Melbourne software development",
    ],
    benefits: [
      {
        title: "APAC Timezone Coverage",
        description:
          "Strong timezone alignment with AEST/AEDT ensures productive collaboration during Australian business hours with our APAC-based teams.",
      },
      {
        title: "ANZ Market Understanding",
        description:
          "We understand the unique needs of Australian businesses, from compliance requirements to local market expectations.",
      },
      {
        title: "Scalable Teams",
        description:
          "Quickly scale your development capacity without the challenges of local talent shortages in the Australian tech market.",
      },
      {
        title: "Competitive Advantage",
        description:
          "Access world-class development talent at rates significantly lower than Australian market rates while maintaining premium quality.",
      },
    ],
    testimonialRegion: "Australian companies",
  },
  {
    slug: "europe",
    country: "Europe",
    region: "EU",
    flag: "🇪🇺",
    heroTitle: "Software Development Services in Europe",
    heroSubtitle: "Trusted Remote Development Partner for European Enterprises",
    heroDescription:
      "Viliha empowers European businesses with custom software solutions. Our teams deliver GDPR-aware development with excellent CET timezone collaboration.",
    metaTitle: "Software Development Company for Europe | Viliha",
    metaDescription:
      "Custom software, web and mobile apps and remote teams for European businesses, with CET overlap and GDPR built into development. Get a free consultation.",
    keywords: [
      "software development Europe",
      "software development company Europe",
      "remote developers Europe",
      "hire developers EU",
      "custom software development Europe",
      "web development company Europe",
      "mobile app development Europe",
      "offshore development team for Europe",
      "German software development",
      "GDPR compliant development",
    ],
    benefits: [
      {
        title: "CET Timezone Compatibility",
        description:
          "Substantial overlap with Central European Time ensures smooth collaboration with teams across Germany, France, Netherlands, and beyond.",
      },
      {
        title: "GDPR-Aware Development",
        description:
          "Our development practices incorporate GDPR considerations from the ground up, ensuring your software meets EU data protection requirements.",
      },
      {
        title: "Multilingual Capabilities",
        description:
          "Experience building applications for diverse European markets with multi-language support and localization expertise.",
      },
      {
        title: "EU Business Standards",
        description:
          "We understand European business culture and deliver with the precision, documentation, and professionalism EU clients expect.",
      },
    ],
    testimonialRegion: "European companies",
  },
  {
    slug: "singapore",
    country: "Singapore",
    region: "Singapore",
    flag: "🇸🇬",
    heroTitle: "Software Development Services in Singapore",
    heroSubtitle: "Your Strategic Development Partner in Southeast Asia",
    heroDescription:
      "Viliha provides cutting-edge software solutions for Singapore-based businesses. Our regional presence ensures seamless collaboration and deep APAC market understanding.",
    metaTitle: "Software Development Company for Singapore | Viliha",
    metaDescription:
      "Custom software, web and mobile apps and remote teams for Singapore businesses, delivered from Vietnam, one hour behind Singapore time. Get a free consultation.",
    keywords: [
      "software development Singapore",
      "software development company Singapore",
      "remote developers Singapore",
      "hire developers Singapore",
      "custom software development Singapore",
      "web development company Singapore",
      "mobile app development Singapore",
      "offshore development team Singapore",
      "Singapore startup development",
      "APAC software development",
    ],
    benefits: [
      {
        title: "Same Timezone (SGT)",
        description:
          "Our Vietnam-based teams operate in the same timezone as Singapore, enabling real-time collaboration throughout your entire workday.",
      },
      {
        title: "Regional Proximity",
        description:
          "Just a short flight away, we can meet in person when needed. Our teams understand Southeast Asian business culture intimately.",
      },
      {
        title: "Fintech & Enterprise Ready",
        description:
          "Extensive experience with Singapore's thriving fintech ecosystem and enterprise clients across banking, logistics, and e-commerce.",
      },
      {
        title: "Cost Optimization",
        description:
          "Significantly reduce development costs compared to Singapore rates while maintaining the high standards your business demands.",
      },
    ],
    testimonialRegion: "Singapore companies",
  },
  {
    slug: "germany",
    country: "Germany",
    region: "Germany",
    flag: "🇩🇪",
    heroTitle: "Software Development Services in Germany",
    heroSubtitle: "Precision Engineering for German Businesses",
    heroDescription:
      "Viliha delivers hochwertige software solutions for German enterprises. Our teams combine technical excellence with the precision and reliability German businesses expect.",
    metaTitle: "Software Development Company for Germany | Viliha",
    metaDescription:
      "Custom software, web and mobile apps and remote teams for German SMEs and Mittelstand firms, with full German business-hour overlap. Get a free consultation.",
    keywords: [
      "software development Germany",
      "Softwareentwicklung Deutschland",
      "software development company Germany",
      "remote developers Germany",
      "hire developers Germany",
      "custom software development Germany",
      "web development company Germany",
      "offshore development team Germany",
      "Berlin software development",
      "Munich software development",
    ],
    benefits: [
      {
        title: "CET Timezone Match",
        description:
          "Full overlap with German business hours enables productive daily collaboration, sprint reviews, and real-time communication.",
      },
      {
        title: "Engineering Excellence",
        description:
          "We match German standards for precision, thorough documentation, and systematic development processes.",
      },
      {
        title: "DSGVO/GDPR Compliance",
        description:
          "Our development practices ensure your software meets strict German and EU data protection requirements from day one.",
      },
      {
        title: "Mittelstand Experience",
        description:
          "We understand the unique needs of German SMEs and Mittelstand companies, delivering solutions that drive digital transformation.",
      },
    ],
    testimonialRegion: "German companies",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
