import { siteConfig } from "@/lib/config";
export const homeContent = {
  hero: {
    heading: "Web Development Company for Startups and Growing Businesses",
    subheading: "Web development services for clients in the USA, Europe and Australia",
    paragraph:
      "We design and build websites, web applications and custom software with dedicated remote teams. Whether you need an MVP or a platform that serves thousands of users, we take it from first sketch to launch and keep it running after.",
    buttonText: "Get a Free Consultation",
    buttonUrl: "/contact",
    image: `${siteConfig.cdnUrl}/avytrix-banner_image.png`,
  },

  servicesOverview: {
    heading: "Web and Software Development Services",
    subheading:
      "Pick one service or combine several. Every project gets the same care for speed, security and room to grow.",
    services: [
      {
        title: "Custom Software Development",
        content:
          "Software built from scratch around how your business actually works, so your team spends less time on workarounds.",
        imageLink: `${siteConfig.cdnUrl}/icons/Support.svg`,
        buttonUrl: "/services/custom-software-development",
      },
      {
        title: "Web Application Development",
        content:
          "Fast, secure websites and web apps built with React, Vue, Node.js and other proven tools. They work on every screen and are easy for search engines to read.",
        imageLink: `${siteConfig.cdnUrl}/icons/Custom_Web_Development.svg`,
        buttonUrl: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        content:
          "Native iOS and Android apps, or one cross-platform app for both. Designed to be simple to use and ready for the app stores.",
        imageLink: `${siteConfig.cdnUrl}/icons/App_Code.svg`,
        buttonUrl: "/services/mobile-app-development",
      },
      {
        title: "User Experience (UX/UI) Design",
        content:
          "Research, wireframes and clean interface design that make your product easy to understand and pleasant to use.",
        imageLink: `${siteConfig.cdnUrl}/icons/UI_Design.svg`,
        buttonUrl: "/services/ux-ui-design",
      },
      {
        title: "API Development & Integration",
        content:
          "Reliable REST and GraphQL APIs, plus integrations that connect your payment, CRM and internal systems so data flows without manual work.",
        imageLink: `${siteConfig.cdnUrl}/icons/API.svg`,
        buttonUrl: "/services/api-development",
      },
      {
        title: "Cloud Solutions & Infrastructure",
        content:
          "Secure cloud setups on AWS, Google Cloud or Azure that stay online, scale with traffic and keep hosting costs in check.",
        imageLink: `${siteConfig.cdnUrl}/icons/Cloud.svg`,
        buttonUrl: "/services/cloud-solutions",
      },
      {
        title: "Software QA & Testing",
        content:
          "Manual, automated and performance testing that catches problems before your users do.",
        imageLink: `${siteConfig.cdnUrl}/icons/QA_Testing.svg`,
        buttonUrl: "/services/qa-and-testing",
      },
      {
        title: "Dedicated Development Teams",
        content:
          "Add experienced developers to your team, or hand us a whole project. You choose the size and change it as your needs change.",
        imageLink: `${siteConfig.cdnUrl}/icons/Dedicated_Team.svg`,
        buttonUrl: "/services/dedicated-development-teams",
      },
      {
        title: "E-commerce & Enterprise Solutions",
        content:
          "Online stores and business systems such as ERP and CRM, built to handle growth and simple for your staff to manage.",
        imageLink: `${siteConfig.cdnUrl}/icons/E-commerce.svg`,
        buttonUrl: "/services/ecommerce-solutions",
      },
    ],
  },

  techStack: {
    title: "Technologies We Use",
    paragraph: "We pick tools for the job at hand, so your website or app stays fast, secure and easy to extend.",
    categories: [
      {
        name: "Frontend",
        id: "tech-frontend",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/React.png`, title: "React" },
          { image: `${siteConfig.cdnUrl}/technologies/Angular.png`, title: "Angular" },
          { image: `${siteConfig.cdnUrl}/technologies/Vuejs.png`, title: "Vue.js" },
          { image: `${siteConfig.cdnUrl}/technologies/HTML5.png`, title: "HTML5" },
          { image: `${siteConfig.cdnUrl}/technologies/CSS3.png`, title: "CSS3" },
        ],
      },
      {
        name: "Backend",
        id: "tech-backend",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/Nodejs.png`, title: "Node.js" },
          { image: `${siteConfig.cdnUrl}/technologies/Python.png`, title: "Python" },
          { image: `${siteConfig.cdnUrl}/technologies/NET.png`, title: ".NET" },
          { image: `${siteConfig.cdnUrl}/technologies/Go.png`, title: "Go" },
        ],
      },
      {
        name: "Mobile",
        id: "tech-mobile",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/Swift.png`, title: "Swift" },
          { image: `${siteConfig.cdnUrl}/technologies/Kotlin.png`, title: "Kotlin" },
          { image: `${siteConfig.cdnUrl}/technologies/React.png`, title: "React Native" },
          { image: `${siteConfig.cdnUrl}/technologies/Flutter.png`, title: "Flutter" },
        ],
      },
      {
        name: "Databases",
        id: "tech-databases",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/MySQL.png`, title: "MySQL" },
          { image: `${siteConfig.cdnUrl}/technologies/PostgreSQL.png`, title: "PostgreSQL" },
          { image: `${siteConfig.cdnUrl}/technologies/MongoDB.png`, title: "MongoDB" },
          { image: `${siteConfig.cdnUrl}/technologies/Oracle.png`, title: "Oracle" },
          { image: `${siteConfig.cdnUrl}/technologies/MSSql.png`, title: "MS SQL" },
        ],
      },
      {
        name: "Cloud",
        id: "tech-cloud",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/AWS.png`, title: "AWS" },
          { image: `${siteConfig.cdnUrl}/technologies/Google_Cloud.png`, title: "Google Cloud" },
          { image: `${siteConfig.cdnUrl}/technologies/Microsoft_Azure.png`, title: "Microsoft Azure" },
        ],
      },
      {
        name: "DevOps",
        id: "tech-devops",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/Docker.png`, title: "Docker" },
          { image: `${siteConfig.cdnUrl}/technologies/Kubernetes.png`, title: "Kubernetes" },
          { image: `${siteConfig.cdnUrl}/technologies/Jenkins.png`, title: "Jenkins" },
        ],
      },
    ],
  },

  digitalInnovation: {
    title: "Why Clients Work With Us",
    image: `${siteConfig.cdnUrl}/trusted_partner.png`,
    faqItems: [
      {
        question: "Expert Problem Solvers",
        answer:
          "We turn complicated requirements into software that is simple to use, drawing on experience across many industries, including regulated ones.",
      },
      {
        question: "Trusted Technology Partner",
        answer:
          "You always know where your project stands. We communicate openly, deliver on the dates we agree and aim to work with you for the long term.",
      },
      {
        question: "Agile & Efficient Delivery",
        answer:
          "We work in short agile cycles, so you see working software early and can change direction without losing weeks.",
      },
      {
        question: "Quality First",
        answer:
          "Code reviews, automated tests and modern tools keep what we build secure, stable and ready to scale.",
      },
    ],
    buttonText: "Start Your Project with Avytrix Technologies",
    buttonUrl: "/contact",
  },

  caseStudies: {
    heading: "Selected Work",
    subheading:
      "Two examples of large platforms our engineers have helped modernize and grow.",
    studies: [
      {
        client: "Kelley Blue Book (KBB.COM)",
        challenge:
          "Modernize a monolithic platform so it could scale, load faster and serve millions of users.",
        solution:
          "Moved the monolith to microservices, tuned the AWS and GCP setup, tightened security and worked on performance end to end.",
        keyResults: [
          "50%+ faster average page loads and API responses.",
          "30% lower infrastructure costs year over year.",
          "A more scalable, resilient platform serving millions of U.S. users.",
        ],
        image: `${siteConfig.cdnUrl}/Kelley_Blue_Book.png`,
      },
      {
        client: "Criteo",
        challenge:
          "Build a self-service web application that makes campaign management simpler for publishers and marketers.",
        solution:
          "Built the core features: campaign setup, registration, catalog management, integration monitoring and campaign controls with detailed performance analytics.",
        keyResults: [
          "40%+ less time for users to onboard and set up campaigns.",
          "Advertisers could run campaigns end to end on their own, which lifted platform adoption.",
          "Helped build a self-service advertising platform that scales.",
        ],
        image: `${siteConfig.cdnUrl}/Criteo.png`,
      },
    ],
  },
};
