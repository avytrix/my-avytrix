import { siteConfig } from "@/lib/config";
export const homeContent = {
  hero: {
    heading: "Web Development Company for Startups and Growing Businesses",
    subheading: "Web development services for clients in the USA, Europe and Australia",
    paragraph:
      "We design and build websites, web applications, AI features and custom software with dedicated remote teams. Whether you need an MVP or a platform that serves thousands of users, we take it from first sketch to launch and keep it running after.",
    buttonText: "Get a Free Consultation",
    buttonUrl: "/contact",
    image: `${siteConfig.cdnUrl}/hero/web-development-company-hero.png`,
  },

  aiHighlight: {
    eyebrow: "New",
    heading: "AI Development and MCP Servers",
    subheading:
      "Put AI to work in your product, and let AI assistants such as Claude and ChatGPT use your systems safely.",
    items: [
      {
        title: "AI Development",
        content:
          "LLM-powered assistants, RAG search over your own data, AI agents and workflow automation, built with testing and guardrails.",
        icon: `${siteConfig.cdnUrl}/icons/ai-development-icon.svg`,
        href: "/services/ai-development",
        cta: "Explore AI development",
      },
      {
        title: "MCP Server Development",
        content:
          "Model Context Protocol servers that connect Claude, ChatGPT, Cursor and other AI assistants to your APIs, databases and tools.",
        icon: `${siteConfig.cdnUrl}/icons/mcp-server-development-icon.svg`,
        href: "/services/mcp-server-development",
        cta: "Explore MCP servers",
      },
    ],
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
        imageLink: `${siteConfig.cdnUrl}/icons/custom-software-development-icon.svg`,
        buttonUrl: "/services/custom-software-development",
      },
      {
        title: "Web Application Development",
        content:
          "Fast, secure websites and web apps built with React, Vue, Node.js and other proven tools. They work on every screen and are easy for search engines to read.",
        imageLink: `${siteConfig.cdnUrl}/icons/web-development-icon.svg`,
        buttonUrl: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        content:
          "Native iOS and Android apps, or one cross-platform app for both. Designed to be simple to use and ready for the app stores.",
        imageLink: `${siteConfig.cdnUrl}/icons/mobile-app-development-icon.svg`,
        buttonUrl: "/services/mobile-app-development",
      },
      {
        title: "User Experience (UX/UI) Design",
        content:
          "Research, wireframes and clean interface design that make your product easy to understand and pleasant to use.",
        imageLink: `${siteConfig.cdnUrl}/icons/ui-ux-design-icon.svg`,
        buttonUrl: "/services/ux-ui-design",
      },
      {
        title: "API Development & Integration",
        content:
          "Reliable REST and GraphQL APIs, plus integrations that connect your payment, CRM and internal systems so data flows without manual work.",
        imageLink: `${siteConfig.cdnUrl}/icons/api-development-icon.svg`,
        buttonUrl: "/services/api-development",
      },
      {
        title: "Cloud Solutions & Infrastructure",
        content:
          "Secure cloud setups on AWS, Google Cloud or Azure that stay online, scale with traffic and keep hosting costs in check.",
        imageLink: `${siteConfig.cdnUrl}/icons/cloud-solutions-icon.svg`,
        buttonUrl: "/services/cloud-solutions",
      },
      {
        title: "Software QA & Testing",
        content:
          "Manual, automated and performance testing that catches problems before your users do.",
        imageLink: `${siteConfig.cdnUrl}/icons/qa-testing-icon.svg`,
        buttonUrl: "/services/qa-and-testing",
      },
      {
        title: "Dedicated Development Teams",
        content:
          "Add experienced developers to your team, or hand us a whole project. You choose the size and change it as your needs change.",
        imageLink: `${siteConfig.cdnUrl}/icons/dedicated-development-team-icon.svg`,
        buttonUrl: "/services/dedicated-development-teams",
      },
      {
        title: "E-commerce & Enterprise Solutions",
        content:
          "Online stores and business systems such as ERP and CRM, built to handle growth and simple for your staff to manage.",
        imageLink: `${siteConfig.cdnUrl}/icons/ecommerce-development-icon.svg`,
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
          { image: `${siteConfig.cdnUrl}/technologies/react-logo.png`, title: "React" },
          { image: `${siteConfig.cdnUrl}/technologies/angular-logo.png`, title: "Angular" },
          { image: `${siteConfig.cdnUrl}/technologies/vuejs-logo.png`, title: "Vue.js" },
          { image: `${siteConfig.cdnUrl}/technologies/html5-logo.png`, title: "HTML5" },
          { image: `${siteConfig.cdnUrl}/technologies/css3-logo.png`, title: "CSS3" },
        ],
      },
      {
        name: "Backend",
        id: "tech-backend",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/nodejs-logo.png`, title: "Node.js" },
          { image: `${siteConfig.cdnUrl}/technologies/python-logo.png`, title: "Python" },
          { image: `${siteConfig.cdnUrl}/technologies/dotnet-logo.png`, title: ".NET" },
          { image: `${siteConfig.cdnUrl}/technologies/go-logo.png`, title: "Go" },
        ],
      },
      {
        name: "Mobile",
        id: "tech-mobile",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/swift-logo.png`, title: "Swift" },
          { image: `${siteConfig.cdnUrl}/technologies/kotlin-logo.png`, title: "Kotlin" },
          { image: `${siteConfig.cdnUrl}/technologies/react-logo.png`, title: "React Native" },
          { image: `${siteConfig.cdnUrl}/technologies/flutter-logo.png`, title: "Flutter" },
        ],
      },
      {
        name: "Databases",
        id: "tech-databases",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/mysql-logo.png`, title: "MySQL" },
          { image: `${siteConfig.cdnUrl}/technologies/postgresql-logo.png`, title: "PostgreSQL" },
          { image: `${siteConfig.cdnUrl}/technologies/mongodb-logo.png`, title: "MongoDB" },
          { image: `${siteConfig.cdnUrl}/technologies/oracle-logo.png`, title: "Oracle" },
          { image: `${siteConfig.cdnUrl}/technologies/microsoft-sql-server-logo.png`, title: "MS SQL" },
        ],
      },
      {
        name: "Cloud",
        id: "tech-cloud",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/aws-logo.png`, title: "AWS" },
          { image: `${siteConfig.cdnUrl}/technologies/google-cloud-logo.png`, title: "Google Cloud" },
          { image: `${siteConfig.cdnUrl}/technologies/microsoft-azure-logo.png`, title: "Microsoft Azure" },
        ],
      },
      {
        name: "DevOps",
        id: "tech-devops",
        items: [
          { image: `${siteConfig.cdnUrl}/technologies/docker-logo.png`, title: "Docker" },
          { image: `${siteConfig.cdnUrl}/technologies/kubernetes-logo.png`, title: "Kubernetes" },
          { image: `${siteConfig.cdnUrl}/technologies/jenkins-logo.png`, title: "Jenkins" },
        ],
      },
    ],
  },

  digitalInnovation: {
    title: "Why Clients Work With Us",
    image: `${siteConfig.cdnUrl}/illustrations/trusted-web-development-partner.png`,
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
    buttonText: `Start Your Project with ${siteConfig.name}`,
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
        image: `${siteConfig.cdnUrl}/case-studies/kelley-blue-book-microservices-migration.png`,
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
        image: `${siteConfig.cdnUrl}/case-studies/criteo-self-service-advertising-platform.png`,
      },
    ],
  },
};
