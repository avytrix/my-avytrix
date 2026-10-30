import { siteConfig } from "@/lib/config";
export interface ServiceItem {
  buttonText: string;
  targetId: string;
  title: string;
  content: string;
  listBlocks?: {
    listSubtitle?: string;
    listSubtitlePara?: string;
    listItems?: string[];
    listAfterPara?: string;
  }[];
}

export interface ServiceSection {
  tabTitle: string;
  id: string;
  type: string;
  title: string;
  paragraph: string;
  items: ServiceItem[];
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: {
    pageTitle: string;
    mainTitle: string;
    paragraph: string;
    buttonText: string;
    buttonUrl: string;
    image: string;
    imageAlt: string;
  };
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Services | Avytrix Technologies",
    description:
      "Custom software built around your workflows: scalable architecture, SQL/NoSQL database design, API integration and CI/CD. Talk to Avytrix Technologies.",
    intro: {
      pageTitle: "Custom Software Development",
      mainTitle: "Software Built Around How Your Business Works",
      paragraph:
        "Custom software development means building an application from scratch for your business instead of bending an off-the-shelf tool to fit. We handle discovery, design, architecture, databases, APIs, testing and automated deployment, then keep the software maintained after launch.",
      buttonText: "Discuss Your Custom Software Project",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/custom-software-development-services.png`,
      imageAlt: "Custom software development lifecycle diagram",
    },
    sections: [
      {
        tabTitle: "Our Process",
        id: "process",
        type: "interactive_list",
        title: "How We Build Custom Software",
        paragraph:
          "A clear, collaborative process that gets working software into your hands quickly.",
        items: [
          {
            buttonText: "Overview",
            targetId: "Overview",
            title: "Software Built for Your Business",
            content:
              "Avytrix Technologies builds custom software around the way your business runs. Our applications remove manual work, make life easier for your users and automate routine processes. Off-the-shelf tools often cannot keep up with complex or changing requirements. Custom software gives you the flexibility and performance to grow.",
            listBlocks: [
              {
                listSubtitle: "Why businesses choose custom software:",
                listItems: [
                  "Solve unique operational challenges",
                  "Replace outdated legacy systems",
                  "Improve workflow automation and integration",
                  "Meet industry-specific compliance standards",
                  "Gain full control over software features and updates",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "process-design",
            title: "Full-Cycle Development",
            content:
              "We take your software from first idea to deployment and keep supporting it afterwards. Our agile teams follow a tested process, so the software matches your business goals and can grow with you.",
            listBlocks: [
              {
                listSubtitle: "Our development cycle includes:",
                listItems: [
                  "In-depth discovery and technical consultation",
                  "UI/UX design with responsive layouts built around your users",
                  "Integration with your existing systems and workflows",
                  "Scalable architecture with microservices or modular design",
                  "Database modeling and optimization (SQL/NoSQL)",
                  "API development and third-party integration",
                  "CI/CD pipeline setup, testing, and automated deployment",
                ],
                listAfterPara:
                  "DevOps automation supports every project, so releases, security updates and maintenance after launch run smoothly.",
              },
              {
                listSubtitle: "Integration and Migration",
                listSubtitlePara:
                  "We design new systems to fit into your existing infrastructure without disrupting your business.",
                listItems: [
                  "Connecting tools such as Salesforce, SAP, HubSpot and Stripe",
                  "Migrating from legacy platforms to modern architectures",
                  "Custom middleware development",
                  "Secure data synchronization and transformation",
                  "Getting cloud and on-premise systems to work together",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "process-development",
            title: "Built for You, With You",
            content:
              "We do not do one-size-fits-all. Every project is built to match your operations, your customers and the standards of your industry.",
            listBlocks: [
              {
                listSubtitle: "What sets us apart:",
                listItems: [
                  "100% custom-built, no templates",
                  "Works across web, mobile and cloud",
                  "Wide experience in automation, DevOps and secure APIs",
                  "Careful compliance with HIPAA, GDPR and PCI",
                  "Open project management in agile sprints",
                ],
                listAfterPara:
                  "You stay informed at every step. We use Jira, Trello and Slack to share progress with you and adjust as we go.",
              },
              {
                listSubtitle: "Industry Experience:",
                listSubtitlePara:
                  "Our developers and engineers have built software for companies in:",
                listItems: [
                  "Healthcare: EMR/EHR systems, patient portals, telehealth apps",
                  "Finance: fintech dashboards, KYC automation, secure transactions",
                  "Retail and e-commerce: inventory tracking, POS systems, marketplace integrations",
                  "Education: LMS platforms, e-learning tools, school management",
                  "ERP/CRM: custom dashboards, reporting tools, data pipelines",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Development Services | Avytrix Technologies",
    description:
      "Web development services for startups and businesses in the USA, Europe and Australia: fast, secure websites and web apps built with React, Vue and Node.js.",
    intro: {
      pageTitle: "Web Development Services",
      mainTitle: "Websites and Web Apps That Work on Every Screen",
      paragraph:
        "Web development services cover everything needed to put a website or web application online: design, front-end and back-end development, integrations, SEO-friendly structure and launch. We build with React, Vue, Next.js, Node.js, Laravel, .NET and Django for clients in the USA, Europe and Australia.",
      buttonText: "Plan Your Website or Web App",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/web-application-development-services.png`,
      imageAlt: "Responsive website on desktop, tablet and mobile",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "approach",
        type: "interactive_list",
        title: "How We Approach Web Development",
        paragraph:
          "We build websites and web apps that earn their keep: technically sound and planned around your business goals.",
        items: [
          {
            buttonText: "Overview",
            targetId: "web-overview",
            title: "Build Smart, Fast & Secure",
            content:
              "Avytrix Technologies builds responsive, SEO-friendly websites and web applications that help your business grow. They look good, but they are also fast, accessible and ready to scale on any device. Whether you need a company website, a SaaS dashboard or a full web portal, we deliver secure, standards-compliant platforms that serve your users and your goals.",
            listBlocks: [
              {
                listAfterPara:
                  "We build for industries such as retail, education, finance and healthcare, where features have to meet both compliance rules and user expectations. Our front-end and back-end developers work with React, Vue.js, Laravel and Next.js for fast load times, smooth navigation and room to scale.",
              },
              {
                listSubtitle: "Why brands choose custom web development:",
                listItems: [
                  "Complete control over UI/UX and branding",
                  "Faster pages and better SEO scores",
                  "Custom backend logic and database integration",
                  "Full compatibility with mobile and tablet devices",
                  "Stronger security, ready for compliance checks",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "web-solutions",
            title: "Full-Stack Web Development",
            content:
              "We cover the full web development process and deliver modern platforms that are easy to maintain, keep users engaged and turn visitors into customers.",
            listBlocks: [
              {
                listSubtitle: "Our web development capabilities include:",
                listItems: [
                  "Custom front-end development with React, Vue and HTML5/CSS3",
                  "Back-end systems in Node.js, Laravel, .NET Core and Django",
                  "Cross-browser and cross-device responsive layouts",
                  "Admin dashboards, CMS integrations and web portals",
                  "SEO-friendly structure, page speed work and schema markup",
                ],
              },
              {
                listSubtitle: "System Integration and Web APIs",
                listAfterPara:
                  "Your website should talk to the tools your business already uses. We connect it to third-party platforms and internal systems.",
                listItems: [
                  "Payment gateways (Stripe, PayPal, Razorpay)",
                  "CRM/ERP integration (Salesforce, HubSpot, Zoho, SAP)",
                  "Booking engines, chatbots and cloud storage",
                  "API and webhook development for custom workflows",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "web-why-avytrix",
            title: "Web Platforms Built Around Your Business",
            content:
              "Avytrix Technologies builds custom web platforms that grow with your business. We do more than the visible front end: we build the back end that handles complex business logic, user roles and automation.",
            listBlocks: [
              {
                listSubtitle: "Why choose us for web development:",
                listItems: [
                  "Experience building e-commerce stores, LMS platforms and B2B web portals",
                  "Mobile-first design, fully responsive",
                  "Solid knowledge of web performance, Core Web Vitals and Google ranking factors",
                  "Agile delivery with open, shared sprint planning",
                  "Support after launch for new features, monitoring and A/B testing",
                ],
                listAfterPara:
                  "We have helped healthcare firms simplify appointment booking, education providers scale their LMS platforms and retailers sell more online, each with a website built for them.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "iOS & Android App Development | Avytrix Technologies",
    description:
      "Native iOS (Swift) and Android (Kotlin) apps, or cross-platform React Native and Flutter, from discovery to app store launch. Build with Avytrix Technologies.",
    intro: {
      pageTitle: "Mobile App Development",
      mainTitle: "Native and Cross-Platform Mobile Apps",
      paragraph:
        "Mobile app development is designing, building and launching apps for iPhone and Android phones. We build native apps in Swift and Kotlin, cross-platform apps in React Native and Flutter, and Progressive Web Apps, then handle app store submission and support after launch.",
      buttonText: "Develop Your Mobile App",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/mobile-app-development-services.png`,
      imageAlt: "Mobile app development on iOS and Android",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "mobile-approach",
        type: "interactive_list",
        title: "Mobile-First Development",
        paragraph: "We build mobile apps that are easy and pleasant to use on any device.",
        items: [
          {
            buttonText: "Overview",
            targetId: "mobile-overview",
            title: "Apps That Users Love",
            content:
              "Avytrix Technologies builds mobile apps that look good and do their job well. Whether you need a native iOS app, an Android app or one cross-platform app, we build something your users will come back to.",
            listBlocks: [
              {
                listSubtitle: "Our mobile development services:",
                listItems: [
                  "Native iOS development (Swift, SwiftUI)",
                  "Native Android development (Kotlin, Java)",
                  "Cross-platform development (React Native, Flutter)",
                  "Progressive Web Apps (PWA)",
                  "App maintenance and updates",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "mobile-solutions",
            title: "End-to-End Mobile Development",
            content:
              "We handle every part of mobile app development, from the first concept to launch day and beyond.",
            listBlocks: [
              {
                listSubtitle: "Our process includes:",
                listItems: [
                  "Discovery and strategy planning",
                  "UI/UX design and prototyping",
                  "Agile development sprints",
                  "Quality assurance and testing",
                  "App store submission and optimization",
                  "Post-launch support and analytics",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "mobile-why-avytrix",
            title: "Your Mobile Partner",
            content:
              "We have years of mobile development experience in healthcare, finance, retail and education.",
            listBlocks: [
              {
                listSubtitle: "What sets us apart:",
                listItems: [
                  "Experience in both native and cross-platform development",
                  "Focus on performance and user experience",
                  "Agile methodology for faster delivery",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ux-ui-design",
    title: "UX/UI Design Services",
    metaTitle: "UX/UI Design for Web & Mobile | Avytrix Technologies",
    description:
      "User research, wireframes, prototypes, visual design and design systems for web, mobile and SaaS, tested with real users. Start with Avytrix Technologies.",
    intro: {
      pageTitle: "UX/UI Design",
      mainTitle: "Design People Enjoy Using",
      paragraph:
        "UX/UI design shapes how a website or app works (UX) and how it looks (UI). We start with user research, then move through information architecture, wireframes, prototypes, visual design and usability testing, and hand developers a design system they can build from.",
      buttonText: "Design Your Experience",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/ui-ux-design-services.png`,
      imageAlt: "UX/UI design for web and mobile apps",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "design-approach",
        type: "interactive_list",
        title: "User-Centered Design",
        paragraph: "Good design keeps people engaged and makes your product easy to find your way around.",
        items: [
          {
            buttonText: "Overview",
            targetId: "design-overview",
            title: "Design with Purpose",
            content:
              "We design products that look good and work well. Every project starts with user research, so each element has a reason to be there and supports your business goals.",
            listBlocks: [
              {
                listSubtitle: "Our design services include:",
                listItems: [
                  "User research and persona development",
                  "Information architecture",
                  "Wireframing and prototyping",
                  "Visual design and branding",
                  "Usability testing",
                  "Design system creation",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "design-solutions",
            title: "Design Services",
            content:
              "We take your idea from first concept to a finished design that developers can build.",
            listBlocks: [
              {
                listSubtitle: "What we deliver:",
                listItems: [
                  "Web and mobile app design",
                  "Dashboard and data visualization design",
                  "E-commerce and marketplace design",
                  "SaaS product design",
                  "Design audits and improvements",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "design-why-avytrix",
            title: "How We Design",
            content:
              "Our designers pair creativity with business sense, so the result works for your users and for you.",
            listBlocks: [
              {
                listSubtitle: "Why work with us:",
                listItems: [
                  "User-centered design approach",
                  "Cross-functional collaboration with developers",
                  "Focus on conversion and engagement",
                  "Modern design tools and methodologies",
                  "Iterative process with client feedback",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "api-development",
    title: "API Development & Integration",
    metaTitle: "API Development & Integration | Avytrix Technologies",
    description:
      "REST and GraphQL APIs plus integration with Stripe, Salesforce, HubSpot, SAP, Twilio and AWS, with security and documentation. Talk to Avytrix Technologies.",
    intro: {
      pageTitle: "API Development",
      mainTitle: "Connect Your Systems",
      paragraph:
        "API development is building the interfaces that let software systems exchange data. We design and build secure, documented REST and GraphQL APIs and connect your software to payment gateways, CRMs, ERPs, cloud services and communication platforms such as Stripe, Salesforce, SAP and Twilio.",
      buttonText: "Integrate Your Systems",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/api-development-services.png`,
      imageAlt: "API development and system integration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "api-approach",
        type: "interactive_list",
        title: "How We Build APIs",
        paragraph: "Add features to your software and let data move between your systems without manual work.",
        items: [
          {
            buttonText: "Overview",
            targetId: "api-overview",
            title: "System Integration",
            content:
              "We design and build APIs that connect your systems, automate workflows and open up new features. Every API is secure, scales with demand and comes with clear documentation.",
            listBlocks: [
              {
                listSubtitle: "Our API services:",
                listItems: [
                  "RESTful API development",
                  "GraphQL API development",
                  "Third-party API integration",
                  "API documentation and testing",
                  "API security and authentication",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "api-solutions",
            title: "Integration Capabilities",
            content:
              "We connect your software to the platforms and services you rely on.",
            listBlocks: [
              {
                listSubtitle: "Common integrations:",
                listItems: [
                  "Payment gateways (Stripe, PayPal, Square)",
                  "CRM systems (Salesforce, HubSpot)",
                  "ERP systems (SAP, Oracle)",
                  "Cloud services (AWS, Azure, GCP)",
                  "Communication platforms (Twilio, SendGrid)",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "api-why-avytrix",
            title: "API Experience",
            content:
              "Our team has built and integrated APIs for many industries and platforms.",
            listBlocks: [
              {
                listSubtitle: "What we offer:",
                listItems: [
                  "Secure and scalable API architecture",
                  "Complete documentation",
                  "Performance optimization",
                  "Ongoing maintenance and support",
                  "Compliance with industry standards",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions & Infrastructure",
    metaTitle: "Cloud Solutions on AWS, Azure & GCP | Avytrix Technologies",
    description:
      "Cloud migration, infrastructure as code, Kubernetes, serverless and cost optimization on AWS, Azure, GCP and DigitalOcean. Plan it with Avytrix Technologies.",
    intro: {
      pageTitle: "Cloud Solutions",
      mainTitle: "Infrastructure That Scales in the Cloud",
      paragraph:
        "Cloud solutions move and run your applications on platforms such as AWS, Microsoft Azure, Google Cloud and DigitalOcean. We plan migrations, write infrastructure as code, run containers with Docker and Kubernetes, build serverless setups, and keep costs and security under control.",
      buttonText: "Optimize Your Cloud",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/cloud-solutions-infrastructure.png`,
      imageAlt: "Cloud infrastructure on AWS, Azure and Google Cloud",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "cloud-approach",
        type: "interactive_list",
        title: "How We Approach the Cloud",
        paragraph: "Your applications stay available and fast, and your hosting bill stays reasonable.",
        items: [
          {
            buttonText: "Overview",
            targetId: "cloud-overview",
            title: "Modern Cloud Infrastructure",
            content:
              "We help businesses use the cloud to scale more easily, spend less and improve security. Every setup we build is designed to be fast and reliable.",
            listBlocks: [
              {
                listSubtitle: "Our cloud services:",
                listItems: [
                  "Cloud migration and strategy",
                  "Infrastructure as Code (IaC)",
                  "Container orchestration (Kubernetes, Docker)",
                  "Serverless architecture",
                  "Cloud security and compliance",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "cloud-solutions",
            title: "Multi-Cloud Experience",
            content:
              "We work with all the major cloud providers and pick the one that fits your needs.",
            listBlocks: [
              {
                listSubtitle: "Platforms we work with:",
                listItems: [
                  "Amazon Web Services (AWS)",
                  "Microsoft Azure",
                  "Google Cloud Platform (GCP)",
                  "DigitalOcean",
                  "Hybrid and multi-cloud solutions",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "cloud-why-avytrix",
            title: "Cloud Expertise",
            content:
              "Our certified cloud architects help you build and run dependable cloud infrastructure.",
            listBlocks: [
              {
                listSubtitle: "Our approach:",
                listItems: [
                  "Cost optimization and resource management",
                  "24/7 monitoring and support",
                  "Disaster recovery planning",
                  "Security best practices",
                  "Performance optimization",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "qa-and-testing",
    title: "Software QA & Testing",
    metaTitle: "Software QA & Testing Services | Avytrix Technologies",
    description:
      "Manual, automated, performance, security, API and mobile testing, plus regression and UAT built into your CI pipeline. Ship better with Avytrix Technologies.",
    intro: {
      pageTitle: "QA & Testing",
      mainTitle: "Quality Assurance for Reliable Software",
      paragraph:
        "Software QA and testing checks that an application works as intended before your users find the problems. We run manual, automated, performance, security, API and mobile tests, build them into your CI pipeline, and cover regression and user acceptance testing.",
      buttonText: "Talk to Our QA Team",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/software-qa-testing-services.png`,
      imageAlt: "Software QA and testing",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "qa-approach",
        type: "interactive_list",
        title: "How We Test",
        paragraph: "Thorough manual, automated and performance testing, so you release with confidence.",
        items: [
          {
            buttonText: "Overview",
            targetId: "qa-overview",
            title: "Quality at Every Stage",
            content:
              "Our QA team makes sure your software is solid, fast and reliable. Testing runs through the whole development process, not just the end.",
            listBlocks: [
              {
                listSubtitle: "Our testing services:",
                listItems: [
                  "Manual testing",
                  "Automated testing",
                  "Performance testing",
                  "Security testing",
                  "Mobile app testing",
                  "API testing",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "qa-solutions",
            title: "Testing Methodologies",
            content:
              "We use proven tools and methods to cover your software thoroughly.",
            listBlocks: [
              {
                listSubtitle: "Our approach includes:",
                listItems: [
                  "Test planning and strategy",
                  "Test case development",
                  "Continuous integration testing",
                  "Regression testing",
                  "User acceptance testing (UAT)",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "qa-why-avytrix",
            title: "Why Our QA Works",
            content:
              "Our QA engineers are experienced, careful and thorough.",
            listBlocks: [
              {
                listSubtitle: "What we deliver:",
                listItems: [
                  "Fewer defects and bugs",
                  "Improved user experience",
                  "Faster time to market",
                  "Cost savings through early bug detection",
                  "Complete test documentation",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dedicated-development-teams",
    title: "Dedicated Development Teams",
    metaTitle: "Dedicated Development Teams | Avytrix Technologies",
    description:
      "Full-stack, mobile, DevOps, QA and UI/UX specialists as a dedicated team, team augmentation or project-based team. Scale up with Avytrix Technologies.",
    intro: {
      pageTitle: "Dedicated Teams",
      mainTitle: "Grow Your Team With Experienced Developers",
      paragraph:
        "A dedicated development team is a group of developers who work only on your product, as an extension of your own staff. We provide full-stack, front-end, back-end, mobile, DevOps, QA and UI/UX specialists as a full-time team, as extra hands for your team, or for a single project.",
      buttonText: "Build Your Team",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/dedicated-development-teams.png`,
      imageAlt: "Dedicated remote development team",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "teams-approach",
        type: "interactive_list",
        title: "Flexible Teams",
        paragraph: "Experienced people you can add or remove as your projects change.",
        items: [
          {
            buttonText: "Overview",
            targetId: "teams-overview",
            title: "Your Extended Team",
            content:
              "Our developers join your organization as part of your team and bring the skills and capacity you are missing.",
            listBlocks: [
              {
                listSubtitle: "Team capabilities:",
                listItems: [
                  "Full-stack developers",
                  "Front-end and back-end specialists",
                  "Mobile developers",
                  "DevOps engineers",
                  "QA engineers",
                  "UI/UX designers",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "teams-solutions",
            title: "Engagement Models",
            content:
              "Choose the way of working that fits your needs and budget.",
            listBlocks: [
              {
                listSubtitle: "Options include:",
                listItems: [
                  "Dedicated team (full-time)",
                  "Team augmentation",
                  "Project-based teams",
                  "Managed services",
                  "Hybrid models",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "teams-why-avytrix",
            title: "A Long-Term Partner",
            content:
              "We aim for long working relationships built on trust and openness.",
            listBlocks: [
              {
                listSubtitle: "Our commitment:",
                listItems: [
                  "Carefully vetted talent",
                  "Transparent communication",
                  "Agile methodology",
                  "Cultural alignment",
                  "Competitive rates",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce & Enterprise Solutions",
    metaTitle: "E-commerce & Enterprise Software | Avytrix Technologies",
    description:
      "Custom e-commerce, Shopify, WooCommerce and Magento builds, marketplaces, payments, ERP and CRM systems and dashboards. Build with Avytrix Technologies.",
    intro: {
      pageTitle: "E-commerce Solutions",
      mainTitle: "E-commerce and Enterprise Platforms",
      paragraph:
        "E-commerce development is building online stores and marketplaces, with payments and inventory behind them. We build custom stores, customize Shopify, WooCommerce and Magento, and develop enterprise systems such as ERP, CRM, business process automation and analytics dashboards.",
      buttonText: "Build Your Platform",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/ecommerce-development-services.png`,
      imageAlt: "E-commerce website development",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "ecommerce-approach",
        type: "interactive_list",
        title: "How We Build for Commerce",
        paragraph: "Built to grow, stay secure and be easy to manage.",
        items: [
          {
            buttonText: "Overview",
            targetId: "ecommerce-overview",
            title: "Online Stores That Scale",
            content:
              "We build online stores that sell and are pleasant to shop in. They work for a new startup and keep working as you grow to enterprise size.",
            listBlocks: [
              {
                listSubtitle: "Our e-commerce services:",
                listItems: [
                  "Custom e-commerce development",
                  "Platform customization (Shopify, WooCommerce, Magento)",
                  "Marketplace development",
                  "Payment gateway integration",
                  "Inventory management systems",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "ecommerce-solutions",
            title: "Enterprise Capabilities",
            content:
              "We build business systems that simplify your operations and save your team time.",
            listBlocks: [
              {
                listSubtitle: "Enterprise solutions:",
                listItems: [
                  "ERP system development",
                  "CRM customization",
                  "Business process automation",
                  "Data analytics dashboards",
                  "Legacy system modernization",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "ecommerce-why-avytrix",
            title: "Commerce Experience",
            content:
              "Our team has built many successful e-commerce and enterprise systems.",
            listBlocks: [
              {
                listSubtitle: "What we offer:",
                listItems: [
                  "Conversion-focused design",
                  "Secure payment processing",
                  "Scalable architecture",
                  "Search engine optimization",
                  "Ongoing support and optimization",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ongoing-support",
    title: "Ongoing Support & Maintenance",
    metaTitle: "Software Support & Maintenance | Avytrix Technologies",
    description:
      "Monitoring, bug fixes, security updates, performance tuning and feature work, on business-hours, extended or 24/7 enterprise plans. Keep your software healthy.",
    intro: {
      pageTitle: "Ongoing Support",
      mainTitle: "Reliable Support and Maintenance",
      paragraph:
        "Software support and maintenance keeps an application secure and working after launch. We monitor it, fix bugs, apply security updates, tune performance and add features, on business-hours, extended-hours or 24/7 enterprise plans, or on demand.",
      buttonText: "Talk About Support",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/software-support-maintenance-services.png`,
      imageAlt: "Software support and maintenance",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "support-approach",
        type: "interactive_list",
        title: "Continuous Support",
        paragraph: "Ongoing support that keeps your applications secure and up to date.",
        items: [
          {
            buttonText: "Overview",
            targetId: "support-overview",
            title: "We Keep Things Running",
            content:
              "Our support team keeps your software running smoothly and securely, and updates it as your business changes.",
            listBlocks: [
              {
                listSubtitle: "Support services:",
                listItems: [
                  "24/7 monitoring and alerting",
                  "Bug fixes and patches",
                  "Security updates",
                  "Performance optimization",
                  "Feature enhancements",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "support-solutions",
            title: "Support Plans",
            content:
              "Pick the support plan that fits your needs and budget.",
            listBlocks: [
              {
                listSubtitle: "Plan options:",
                listItems: [
                  "Essential support (business hours)",
                  "Premium support (extended hours)",
                  "Enterprise support (24/7)",
                  "On-demand support",
                  "Managed services",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "support-why-avytrix",
            title: "Support You Can Count On",
            content:
              "We respond quickly and spot problems before they reach your users.",
            listBlocks: [
              {
                listSubtitle: "Our commitment:",
                listItems: [
                  "Fast response times",
                  "Proactive monitoring",
                  "Regular reporting",
                  "Dedicated support contacts",
                  "Continuous improvement",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO Services",
    metaTitle: "Technical, On-Page & Local SEO | Avytrix Technologies",
    description:
      "Technical SEO audits, keyword research, on-page and content optimization, local SEO, link building and site speed work. Grow traffic with Avytrix Technologies.",
    intro: {
      pageTitle: "SEO Services",
      mainTitle: "Search Engine Optimization",
      paragraph:
        "SEO (search engine optimization) is the work that helps your website rank in Google and other search engines for the terms your customers search. Our SEO services cover technical audits, keyword research, on-page and content optimization, local SEO, link building, site speed and mobile optimization.",
      buttonText: "Improve Your Rankings",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/seo-services.png`,
      imageAlt: "SEO services: search rankings, keyword growth, site speed and local SEO",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "seo-approach",
        type: "interactive_list",
        title: "How We Do SEO",
        paragraph: "We help you rank higher and attract more qualified traffic.",
        items: [
          {
            buttonText: "Overview",
            targetId: "seo-overview",
            title: "Data-Driven SEO",
            content:
              "Our SEO work is based on data and proven practice, and we report results you can measure. We go for lasting growth, not quick tricks.",
            listBlocks: [
              {
                listSubtitle: "Our SEO services:",
                listItems: [
                  "Technical SEO audits",
                  "On-page optimization",
                  "Content strategy",
                  "Link building",
                  "Local SEO",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "seo-solutions",
            title: "Full-Service SEO",
            content:
              "We handle every part of SEO to make your site easier to find in every search engine.",
            listBlocks: [
              {
                listSubtitle: "Our approach includes:",
                listItems: [
                  "Keyword research and strategy",
                  "Competitor analysis",
                  "Content optimization",
                  "Site speed optimization",
                  "Mobile optimization",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Avytrix Technologies",
            targetId: "seo-why-avytrix",
            title: "SEO Experience",
            content:
              "Our SEO team keeps up with algorithm updates and current best practice.",
            listBlocks: [
              {
                listSubtitle: "What we deliver:",
                listItems: [
                  "Improved search rankings",
                  "Increased organic traffic",
                  "Better conversion rates",
                  "Transparent reporting",
                  "Long-term results",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
