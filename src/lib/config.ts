export const siteConfig = {
  name: "Viliha Web Services",
  url: "https://viliha.com",
  cdnUrl: "https://ik.imagekit.io/viliha/images",

  // SEO Configuration
  seo: {
    siteName: "Viliha Web Services",
    author: "Viliha Web Services",
    // ponytail: ImageKit pads the hero banner to 1200x630; swap for a designed card when one exists
    ogImage: "https://ik.imagekit.io/viliha/images/viliha-banner_image.webp?tr=w-1200,h-630,cm-pad_resize,bg-FFFFFF,f-jpg",
    locale: "en_US",
  },

  // reCAPTCHA v3
  recaptchaSiteKey: "6Lfp93QrAAAAAKKxShtL7B4EJjaU16e_uN7DB-lj",

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
    infrastructure: [
      { name: "Cloud Solutions & Infrastructure", href: "/services/cloud-solutions" },
      { name: "Software QA & Testing", href: "/services/qa-and-testing" },
      { name: "API Development & Integration", href: "/services/api-development" },
      { name: "Dedicated Development Teams", href: "/services/dedicated-development-teams" },
      { name: "Ongoing Support & Maintenance", href: "/services/ongoing-support" },
    ],
    locations: [
      { name: "USA", href: "/software-development/usa" },
      { name: "United Kingdom", href: "/software-development/uk" },
      { name: "Australia", href: "/software-development/australia" },
      { name: "Europe", href: "/software-development/europe" },
      { name: "Singapore", href: "/software-development/singapore" },
      { name: "Germany", href: "/software-development/germany" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
};
