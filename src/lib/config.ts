export const siteConfig = {
  name: "Viliha Web Services",
  description: "Viliha empowers startups & AI companies with custom software development, DevOps solutions, cloud migration, and responsive web/mobile development. Trusted by businesses across USA, UK, Europe, Australia, and Asia.",
  url: "https://www.viliha.com",
  cdnUrl: "https://ik.imagekit.io/viliha/images",

  // SEO Configuration
  seo: {
    siteName: "Viliha Web Services",
    title: "Custom Software Development for Startups & AI Companies | Viliha",
    keywords: [
      "custom software development",
      "AI software development",
      "startup software solutions",
      "DevOps services",
      "cloud migration",
      "web application development",
      "mobile app development",
      "software development company USA",
      "software development company UK",
      "software development company Europe",
      "software development company Australia",
      "software development company Singapore",
      "software development company Malaysia",
      "software development company Vietnam",
      "AI integration services",
      "machine learning development",
      "SaaS development",
      "MVP development for startups",
      "enterprise software solutions",
      "API development",
      "cloud solutions",
      "dedicated development teams",
    ],
    author: "Viliha Web Services",
    ogImage: "https://ik.imagekit.io/viliha/images/og-image.jpg",
    twitterHandle: "@viliha",
    locale: "en_US",
    alternateLocales: ["en_GB", "en_AU", "en_SG"],
    targetRegions: [
      { code: "US", name: "United States" },
      { code: "GB", name: "United Kingdom" },
      { code: "DE", name: "Germany" },
      { code: "FR", name: "France" },
      { code: "AU", name: "Australia" },
      { code: "SG", name: "Singapore" },
      { code: "MY", name: "Malaysia" },
      { code: "VN", name: "Vietnam" },
    ],
  },

  // Business Information for JSON-LD
  business: {
    type: "SoftwareCompany",
    foundingDate: "2020",
    email: "hello@viliha.com",
    telephone: "+1-XXX-XXX-XXXX",
    address: {
      streetAddress: "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/viliha",
      "https://twitter.com/viliha",
      "https://github.com/viliha",
    ],
    services: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Cloud Solutions",
      "DevOps Services",
      "AI & Machine Learning Integration",
      "API Development",
      "UX/UI Design",
    ],
  },

  // reCAPTCHA v3
  recaptchaSiteKey: "6Lfp93QrAAAAAKKxShtL7B4EJjaU16e_uN7DB-lj",

  // Abstract API for email verification
  abstractApiKey: process.env.ABSTRACT_API_KEY || "6db0b5c93c2444a38435337db3622afa",
  abstractApiUrl: "https://emailreputation.abstractapi.com/v1/",

  // EmailJS (legacy)
  emailjs: {
    serviceId: "service_l8b23vd",
    templateIdCustomer: "template_u5v3z1a",
    templateIdViliha: "template_6uq3gfq",
    userId: "vB13cSMPfCxIjEKME",
  },

  // Resend Email Configuration
  email: {
    fromEmail: "getintouch@viliha.com",
    fromName: "Viliha Web Application Development Services",
    notificationEmail: "getintouch@viliha.com",
  },
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "About Us", href: "/about-us" },
  ],
  megaMenu: [
    {
      title: "Software Development",
      links: [
        { name: "Custom Software Solutions", href: "/services/custom-software-development" },
        { name: "Web Application Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "UX/UI Design Services", href: "/services/ux-ui-design" },
        { name: "E-commerce & Enterprise", href: "/services/ecommerce-solutions" },
      ],
    },
    {
      title: "Infrastructure & Teams",
      links: [
        { name: "Cloud Solutions & Infrastructure", href: "/services/cloud-solutions" },
        { name: "Software QA & Testing", href: "/services/qa-and-testing" },
        { name: "API Development & Integration", href: "/services/api-development" },
        { name: "Dedicated Development Teams", href: "/services/dedicated-development-teams" },
        { name: "Ongoing Support & Maintenance", href: "/services/ongoing-support" },
      ],
    },
  ],
  footer: {
    services: [
      { name: "Custom Software Solutions", href: "/services/custom-software-development" },
      { name: "Web Application Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "UX/UI Design Services", href: "/services/ux-ui-design" },
      { name: "E-commerce & Enterprise", href: "/services/ecommerce-solutions" },
    ],
    migration: [
      { name: "Cloud Solutions & Infrastructure", href: "/services/cloud-solutions" },
      { name: "Software QA & Testing", href: "/services/qa-and-testing" },
      { name: "API Development & Integration", href: "/services/api-development" },
      { name: "Dedicated Development Teams", href: "/services/dedicated-development-teams" },
      { name: "Ongoing Support & Maintenance", href: "/services/ongoing-support" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
};
