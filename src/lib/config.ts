// All environment-specific values come from .env (see .env.example).
// NEXT_PUBLIC_ values are inlined at build time, so each must be read as a literal process.env.X.
function env(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Missing environment variable ${name} (see .env.example)`);
  return value;
}

const cdnUrl = env(process.env.NEXT_PUBLIC_CDN_URL, "NEXT_PUBLIC_CDN_URL");
const name = env(process.env.NEXT_PUBLIC_SITE_NAME, "NEXT_PUBLIC_SITE_NAME");

export const siteConfig = {
  name,
  url: env(process.env.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL"),
  cdnUrl,

  // SEO Configuration
  seo: {
    siteName: name,
    author: name,
    // ponytail: ImageKit pads the hero banner to 1200x630; swap for a designed card when one exists
    ogImage: `${cdnUrl}/avytrix-banner_image.png?tr=w-1200,h-630,cm-pad_resize,bg-FFFFFF,f-jpg`,
    locale: "en_US",
  },

  // Official profiles (schema.org sameAs); unset ones are skipped
  social: [process.env.NEXT_PUBLIC_LINKEDIN_URL, process.env.NEXT_PUBLIC_FACEBOOK_URL].filter(
    (url): url is string => !!url
  ),

  // reCAPTCHA v3
  recaptchaSiteKey: env(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, "NEXT_PUBLIC_RECAPTCHA_SITE_KEY"),

  // Resend Email Configuration
  email: {
    contactEmail: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "NEXT_PUBLIC_CONTACT_EMAIL"),
    fromEmail: env(process.env.NEXT_PUBLIC_EMAIL_FROM, "NEXT_PUBLIC_EMAIL_FROM"),
    fromName: env(process.env.NEXT_PUBLIC_EMAIL_FROM_NAME, "NEXT_PUBLIC_EMAIL_FROM_NAME"),
    notificationEmail: env(process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL, "NEXT_PUBLIC_NOTIFICATION_EMAIL"),
  },

  // Legal entity operating the site (optional; shown on /contact, footer, privacy policy and schema)
  legal: {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
    taxId: process.env.NEXT_PUBLIC_TAX_ID ?? "",
  },

  // Contact person shown on /contact and in emails; address is optional
  contact: {
    name: env(process.env.NEXT_PUBLIC_CONTACT_NAME, "NEXT_PUBLIC_CONTACT_NAME"),
    phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE, "NEXT_PUBLIC_CONTACT_PHONE"),
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
    // Optional second person, shown after the primary contact on /contact
    secondary: {
      name: process.env.NEXT_PUBLIC_CONTACT2_NAME ?? "",
      phone: process.env.NEXT_PUBLIC_CONTACT2_PHONE ?? "",
    },
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
      title: "Web & Software Development",
      links: [
        { name: "Custom Software Solutions", href: "/services/custom-software-development" },
        { name: "Web Development Services", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "UX/UI Design Services", href: "/services/ux-ui-design" },
        { name: "E-commerce & Enterprise", href: "/services/ecommerce-solutions" },
        { name: "SEO Services", href: "/services/seo" },
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
      { name: "Web Development Services", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "UX/UI Design Services", href: "/services/ux-ui-design" },
      { name: "E-commerce & Enterprise", href: "/services/ecommerce-solutions" },
      { name: "SEO Services", href: "/services/seo" },
    ],
    infrastructure: [
      { name: "Cloud Solutions & Infrastructure", href: "/services/cloud-solutions" },
      { name: "Software QA & Testing", href: "/services/qa-and-testing" },
      { name: "API Development & Integration", href: "/services/api-development" },
      { name: "Dedicated Development Teams", href: "/services/dedicated-development-teams" },
      { name: "Ongoing Support & Maintenance", href: "/services/ongoing-support" },
    ],
    locations: [
      { name: "USA", href: "/web-development/usa" },
      { name: "United Kingdom", href: "/web-development/uk" },
      { name: "Australia", href: "/web-development/australia" },
      { name: "Europe", href: "/web-development/europe" },
      { name: "Singapore", href: "/web-development/singapore" },
      { name: "Germany", href: "/web-development/germany" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
};
