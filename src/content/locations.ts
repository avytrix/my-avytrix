import { siteConfig } from "@/lib/config";

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
    heroTitle: "Web Development Company for US Businesses",
    heroSubtitle: "Remote web and software development on US hours",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for US startups and enterprises. Our remote teams overlap with Eastern and Pacific time, so you get answers during your workday.`,
    metaTitle: `Web Development Company for the USA | ${siteConfig.name}`,
    metaDescription:
      "Web development for US startups and enterprises: websites, web apps, custom software and remote teams with EST and PST overlap. Free consultation.",
    keywords: [
      "web development company USA",
      "web development services USA",
      "custom web application development USA",
      "hire web developers USA",
      "remote web development team USA",
      "software development company USA",
      "custom software development United States",
      "offshore web development for US companies",
      "website development for startups USA",
      "mobile app development USA",
    ],
    benefits: [
      {
        title: "US Time Zone Overlap",
        description:
          "Our working hours overlap with EST and PST, so feedback gets answered the same day and calls fit into your schedule.",
      },
      {
        title: "Lower Cost, Same Quality",
        description:
          "Silicon Valley quality at a lower price: save 40 to 60% compared with local US development agencies, without cutting corners.",
      },
      {
        title: "Startup Experience",
        description:
          "We have helped many US startups build MVPs, scale their products and raise funding with technology investors can trust.",
      },
      {
        title: "Enterprise Compliance",
        description:
          "Our processes follow US business standards, with SOC 2 awareness, HIPAA-conscious development and secure coding practices.",
      },
    ],
    testimonialRegion: "US companies",
  },
  {
    slug: "uk",
    country: "United Kingdom",
    region: "UK",
    flag: "🇬🇧",
    heroTitle: "Web Development Company for UK Businesses",
    heroSubtitle: "A remote web development partner on UK business hours",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for UK startups and established companies. Our teams overlap with GMT, so daily stand-ups and quick calls are easy.`,
    metaTitle: `Web Development Company for the UK | ${siteConfig.name}`,
    metaDescription:
      "Web development for UK startups and companies: websites, web apps, custom software and remote teams on UK business hours. Free consultation.",
    keywords: [
      "web development company UK",
      "web development services UK",
      "web design and development UK",
      "hire web developers UK",
      "remote web development team UK",
      "software development company UK",
      "custom software development United Kingdom",
      "London web development",
      "offshore web development for UK companies",
      "mobile app development UK",
    ],
    benefits: [
      {
        title: "GMT Time Zone Overlap",
        description:
          "Our hours overlap with the UK working day, so stand-ups, reviews and quick questions happen in real time.",
      },
      {
        title: "Post-Brexit Simplicity",
        description:
          "As a non-EU partner, we keep engagements simple and free of EU regulatory overhead, without lowering our delivery standards.",
      },
      {
        title: "Fintech and Startup Focus",
        description:
          "We have worked with UK fintech startups, e-commerce platforms and tech companies in London and beyond.",
      },
      {
        title: "Quality First",
        description:
          "Thorough QA and close attention to detail, to the standard UK businesses expect.",
      },
    ],
    testimonialRegion: "UK companies",
  },
  {
    slug: "australia",
    country: "Australia",
    region: "Australia",
    flag: "🇦🇺",
    heroTitle: "Web Development Company for Australian Businesses",
    heroSubtitle: "A remote web development partner in your region",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for Australian businesses. Our APAC-based teams work during Australian business hours and understand the ANZ market.`,
    metaTitle: `Web Development for Australia | ${siteConfig.name}`,
    metaDescription:
      "Web development for Australian businesses: websites, web apps, custom software and remote teams working AEST and AEDT hours. Free consultation.",
    keywords: [
      "web development company Australia",
      "web development services Australia",
      "web design and development Australia",
      "hire web developers Australia",
      "remote web development team Australia",
      "software development company Australia",
      "custom software development Australia",
      "Sydney web development",
      "Melbourne web development",
      "offshore web development for Australian companies",
    ],
    benefits: [
      {
        title: "APAC Time Zone Coverage",
        description:
          "Our APAC-based teams line up with AEST and AEDT, so collaboration happens during your business hours.",
      },
      {
        title: "ANZ Market Knowledge",
        description:
          "We know what Australian businesses need, from compliance requirements to what local customers expect.",
      },
      {
        title: "Scalable Teams",
        description:
          "Grow your development capacity quickly, without competing for scarce local tech talent.",
      },
      {
        title: "Better Value",
        description:
          "Experienced developers at rates well below the Australian market, with no drop in quality.",
      },
    ],
    testimonialRegion: "Australian companies",
  },
  {
    slug: "europe",
    country: "Europe",
    region: "EU",
    flag: "🇪🇺",
    heroTitle: "Web Development Company for European Businesses",
    heroSubtitle: "A remote web development partner with GDPR built in",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for European businesses. Our teams overlap with CET and build GDPR requirements into every project.`,
    metaTitle: `Web Development Company for Europe | ${siteConfig.name}`,
    metaDescription:
      "Web development for European businesses: websites, web apps, custom software and remote teams with CET overlap and GDPR built in. Free consultation.",
    keywords: [
      "web development company Europe",
      "web development services Europe",
      "web development agency Europe",
      "hire web developers EU",
      "remote web development team Europe",
      "software development company Europe",
      "custom software development Europe",
      "GDPR compliant web development",
      "multilingual website development",
      "offshore web development for European companies",
    ],
    benefits: [
      {
        title: "CET Time Zone Overlap",
        description:
          "Our hours overlap with Central European Time, so working with teams in Germany, France, the Netherlands and beyond is straightforward.",
      },
      {
        title: "GDPR-Aware Development",
        description:
          "We plan for GDPR from the start, so your software meets EU data protection requirements.",
      },
      {
        title: "Multilingual Websites",
        description:
          "We have built multi-language websites and applications for different European markets.",
      },
      {
        title: "European Business Standards",
        description:
          "Clear documentation, precise delivery and the professional working style EU clients expect.",
      },
    ],
    testimonialRegion: "European companies",
  },
  {
    slug: "singapore",
    country: "Singapore",
    region: "Singapore",
    flag: "🇸🇬",
    heroTitle: "Web Development Company for Singapore Businesses",
    heroSubtitle: "Your development partner in Southeast Asia",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for Singapore businesses. We work from Vietnam, one hour behind Singapore, and know the APAC market well.`,
    metaTitle: `Web Development for Singapore | ${siteConfig.name}`,
    metaDescription:
      "Web development for Singapore businesses: websites, web apps and custom software from Vietnam, one hour behind Singapore. Free consultation.",
    keywords: [
      "web development company Singapore",
      "web development services Singapore",
      "hire web developers Singapore",
      "remote web development team Singapore",
      "software development company Singapore",
      "custom software development Singapore",
      "offshore web development Singapore",
      "APAC web development",
    ],
    benefits: [
      {
        title: "One Hour Behind Singapore",
        description:
          "Our Vietnam-based team works one hour behind Singapore time (UTC+7 vs UTC+8), so almost the whole working day overlaps for real-time collaboration.",
      },
      {
        title: "Close By",
        description:
          "A short flight away, so we can meet in person when it helps. Our teams know Southeast Asian business culture well.",
      },
      {
        title: "Fintech and Enterprise Ready",
        description:
          "We have worked in Singapore's fintech scene and with enterprise clients in banking, logistics and e-commerce.",
      },
      {
        title: "Lower Development Costs",
        description:
          "Development costs well below Singapore rates, held to the standards your business expects.",
      },
    ],
    testimonialRegion: "Singapore companies",
  },
  {
    slug: "germany",
    country: "Germany",
    region: "Germany",
    flag: "🇩🇪",
    heroTitle: "Web Development Company for German Businesses",
    heroSubtitle: "Careful engineering for German businesses",
    heroDescription:
      `${siteConfig.name} builds websites, web applications and custom software for German companies. Our teams pair solid engineering with the precision and reliability German businesses expect.`,
    metaTitle: `Web Development Company for Germany | ${siteConfig.name}`,
    metaDescription:
      "Web development for German SMEs and Mittelstand firms: websites, web apps, custom software and remote development teams. Free consultation.",
    keywords: [
      "web development company Germany",
      "Webentwicklung Agentur",
      "Softwareentwicklung Deutschland",
      "web development services Germany",
      "hire web developers Germany",
      "remote web development team Germany",
      "custom software development Germany",
      "Berlin web development",
      "Munich web development",
      "offshore web development for German companies",
    ],
    benefits: [
      {
        title: "CET Time Zone Match",
        description:
          "Full overlap with German business hours for daily collaboration, sprint reviews and real-time communication.",
      },
      {
        title: "Engineering Standards",
        description:
          "Precise work, thorough documentation and a systematic development process.",
      },
      {
        title: "DSGVO/GDPR Compliance",
        description:
          "We build to strict German and EU data protection rules from day one.",
      },
      {
        title: "Mittelstand Experience",
        description:
          "We understand what German SMEs and Mittelstand companies need to go digital, and we build it.",
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
