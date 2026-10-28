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
    metaTitle: "Custom Software Development Services | Viliha",
    description:
      "Custom software built around your workflows: scalable architecture, SQL/NoSQL database design, API integration and CI/CD. Discuss your project with Viliha.",
    intro: {
      pageTitle: "Custom Software Development",
      mainTitle: "Bespoke Software Solutions, Engineered for Your Exact Needs",
      paragraph: "Bespoke Software Solutions, Engineered for Your Exact Needs",
      buttonText: "Discuss Your Custom Software Project",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Custom-Software-development.png`,
      imageAlt: "A diagram showing a custom software development lifecycle.",
    },
    sections: [
      {
        tabTitle: "Our Process",
        id: "process",
        type: "interactive_list",
        title: "A Structured Path to Success",
        paragraph:
          "Our development process is transparent, collaborative, and designed to deliver results efficiently.",
        items: [
          {
            buttonText: "Overview",
            targetId: "Overview",
            title: "Purpose-Built Software for Growth",
            content:
              "At Viliha, we specialize in custom software development tailored to your exact business needs. Our bespoke applications are crafted to eliminate inefficiencies, improve user experience, and support business automation across various industries. Off-the-shelf tools often fail to meet the complex, evolving requirements of modern businesses—our custom-built platforms offer the flexibility and performance needed to scale and thrive.",
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
              "We provide end-to-end software development services, guiding you from initial idea to final deployment—and beyond. Our agile teams follow a proven process that combines innovation with reliability, ensuring your software aligns with business goals and scales over time.",
            listBlocks: [
              {
                listSubtitle: "Our development cycle includes:",
                listItems: [
                  "In-depth discovery and technical consultation",
                  "UI/UX design with responsive, user-centric layouts",
                  "Seamless integration with your existing systems and workflows",
                  "Scalable architecture with microservices or modular design",
                  "Database modeling and optimization (SQL/NoSQL)",
                  "API development and third-party integration",
                  "CI/CD pipeline setup, testing, and automated deployment",
                ],
                listAfterPara:
                  "Each solution is backed by DevOps automation, ensuring continuous delivery, security updates, and seamless maintenance post-launch.",
              },
              {
                listSubtitle: "Seamless Integration & Migration",
                listSubtitlePara:
                  "Our systems are designed to fit into your existing infrastructure—no disruptions, just results.",
                listItems: [
                  "Connecting with tools like Salesforce, SAP, HubSpot, Stripe",
                  "Migrating from legacy platforms to modern architectures",
                  "Custom middleware development",
                  "Secure data synchronization and transformation",
                  "Enhancing interoperability between cloud and on-premise systems",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Viliha",
            targetId: "process-development",
            title: "Tailored, Transparent, Trusted",
            content:
              "Viliha doesn't believe in one-size-fits-all. Every project we take on is uniquely built to match your internal operations, customer expectations, and industry standards.",
            listBlocks: [
              {
                listSubtitle: "What sets us apart:",
                listItems: [
                  "100% custom-built solutions—no templates",
                  "Cross-platform compatibility for web, mobile, and cloud",
                  "Rich experience in automation, DevOps, and secure APIs",
                  "Strict adherence to compliance (HIPAA, GDPR, PCI)",
                  "Transparent project management with agile sprints",
                ],
                listAfterPara:
                  "We keep you in the loop at every step. Our teams use tools like Jira, Trello, and Slack to collaborate with clients, share progress, and adjust in real time.",
              },
              {
                listSubtitle: "Industry-Focused Expertise:",
                listSubtitlePara:
                  "Our experienced developers and engineers have delivered solutions for companies in:",
                listItems: [
                  "Healthcare – EMR/EHR systems, patient portals, telehealth apps",
                  "Finance – Fintech dashboards, KYC automation, secure transactions",
                  "Retail & E-commerce – Inventory tracking, POS systems, marketplace integrations",
                  "Education – LMS platforms, e-learning tools, school management",
                  "ERP/CRM – Custom dashboards, reporting tools, data pipelines",
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
    metaTitle: "Responsive Web Development Services | Viliha",
    description:
      "Fast, secure, responsive web apps built with React, Vue, Node.js, Laravel, .NET or Django, with SEO-friendly structure. Plan your web project with Viliha.",
    intro: {
      pageTitle: "Responsive Web Development",
      mainTitle: "Engaging Websites, Flawless on Every Screen",
      paragraph: "Engaging Websites, Flawless on Every Screen",
      buttonText: "Get Your Responsive Website",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Web-Application.png`,
      imageAlt: "A responsive website shown on a desktop, tablet, and mobile device.",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "approach",
        type: "interactive_list",
        title: "A Strategic Approach to Web Excellence",
        paragraph:
          "We build digital assets that drive business growth. Our approach combines technical excellence with strategic thinking.",
        items: [
          {
            buttonText: "Overview",
            targetId: "web-overview",
            title: "Build Smart, Fast & Secure",
            content:
              "At Viliha, we craft responsive, SEO-optimized websites and web applications that help your business grow. Our websites are more than just visually appealing—they're built for performance, accessibility, and scalability across all devices. Whether you need a corporate site, SaaS dashboard, or full web portal, we deliver secure, standards-compliant platforms that serve both users and business goals.",
            listBlocks: [
              {
                listAfterPara:
                  "We specialize in web solutions tailored to specific industries like retail, education, finance, and healthcare, ensuring functionality meets compliance and user expectations. Our frontend and backend developers build on modern frameworks like React, Vue.js, Laravel, and Next.js, enabling faster load times, seamless navigation, and robust scalability.",
              },
              {
                listSubtitle: "Why brands choose custom web development:",
                listItems: [
                  "Complete control over UI/UX and branding",
                  "Faster performance and optimized SEO scores",
                  "Custom backend logic and database integration",
                  "Full compatibility with mobile and tablet devices",
                  "Enhanced security and compliance readiness",
                ],
              },
            ],
          },
          {
            buttonText: "Our Solutions",
            targetId: "web-solutions",
            title: "Full-Stack Web Development",
            content:
              "We provide end-to-end web development services designed to deliver scalable, maintainable, and modern platforms that engage users and drive conversions.",
            listBlocks: [
              {
                listSubtitle: "Our web development capabilities include:",
                listItems: [
                  "Custom front-end development using React, Vue, HTML5/CSS3",
                  "Backend systems in Node.js, Laravel, .NET Core, Django",
                  "Cross-browser and cross-device responsive layouts",
                  "Admin dashboards, CMS integrations, and web portals",
                  "SEO-friendly structure, page speed optimization & schema",
                ],
              },
              {
                listSubtitle: "System Integration & Web APIs",
                listAfterPara:
                  "Your website should connect seamlessly with tools your business relies on. We integrate third-party platforms and internal systems.",
                listItems: [
                  "Payment gateways (Stripe, PayPal, Razorpay)",
                  "CRM/ERP integration (Salesforce, HubSpot, Zoho, SAP)",
                  "Booking engines, chatbots, and cloud storage",
                  "API and webhook development for custom workflows",
                ],
              },
            ],
          },
          {
            buttonText: "Why Choose Viliha",
            targetId: "web-why-viliha",
            title: "Experts in Purpose-Driven Web Platforms",
            content:
              "Viliha is your trusted partner for building custom web platforms that scale with your business. We go beyond just front-end visuals; we create backend frameworks that support complex business logic, user role management, and automation.",
            listBlocks: [
              {
                listSubtitle: "Why choose us for web development:",
                listItems: [
                  "Deep expertise in building e-commerce stores, LMS platforms, and B2B web portals",
                  "Mobile-first design approach ensuring full responsiveness",
                  "Strong understanding of web performance optimization, Core Web Vitals, and Google ranking factors",
                  "Agile project delivery with full transparency and collaborative sprint planning",
                  "Post-launch support for feature additions, monitoring, and A/B testing",
                ],
                listAfterPara:
                  "We've helped healthcare firms streamline appointment booking, education providers scale LMS platforms, and retailers boost online conversions—all through tailored web experiences.",
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
    metaTitle: "Mobile App Development for iOS & Android | Viliha",
    description:
      "Native iOS (Swift) and Android (Kotlin) apps, or cross-platform with React Native and Flutter, from discovery to app store launch. Build your app with Viliha.",
    intro: {
      pageTitle: "Mobile App Development",
      mainTitle: "Native & Cross-Platform Mobile Solutions",
      paragraph: "Native & Cross-Platform Mobile Solutions",
      buttonText: "Develop Your Mobile App",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Mobile-App-Development.png`,
      imageAlt: "Mobile app development illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "mobile-approach",
        type: "interactive_list",
        title: "Mobile-First Development",
        paragraph: "We build mobile apps that deliver exceptional user experiences across all devices.",
        items: [
          {
            buttonText: "Overview",
            targetId: "mobile-overview",
            title: "Apps That Users Love",
            content:
              "At Viliha, we create mobile applications that combine stunning design with powerful functionality. Whether you need a native iOS app, Android app, or cross-platform solution, our team delivers apps that engage users and drive business results.",
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
              "From concept to launch, we handle every aspect of mobile app development to ensure your app succeeds in the marketplace.",
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
            buttonText: "Why Choose Viliha",
            targetId: "mobile-why-viliha",
            title: "Your Mobile Partner",
            content:
              "We bring years of experience in mobile development across industries including healthcare, finance, retail, and education.",
            listBlocks: [
              {
                listSubtitle: "What sets us apart:",
                listItems: [
                  "Expertise in both native and cross-platform development",
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
    metaTitle: "UX/UI Design for Web, Mobile & SaaS Products | Viliha",
    description:
      "User research, wireframes, prototypes, visual design and design systems for web, mobile and SaaS products, validated by usability testing. Start with Viliha.",
    intro: {
      pageTitle: "UX/UI Design",
      mainTitle: "Design That Delights and Converts",
      paragraph: "Design That Delights and Converts",
      buttonText: "Design Your Experience",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/UI.png`,
      imageAlt: "UX/UI design illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "design-approach",
        type: "interactive_list",
        title: "User-Centered Design",
        paragraph: "Our expert UX/UI design ensures exceptional engagement and effortless navigation.",
        items: [
          {
            buttonText: "Overview",
            targetId: "design-overview",
            title: "Design with Purpose",
            content:
              "We create digital experiences that are both beautiful and functional. Our design process is rooted in user research, ensuring every element serves a purpose and contributes to your business goals.",
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
            title: "Comprehensive Design Services",
            content:
              "From initial concept to final implementation, we provide end-to-end design services that transform your vision into reality.",
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
            buttonText: "Why Choose Viliha",
            targetId: "design-why-viliha",
            title: "Design Excellence",
            content:
              "Our design team combines creativity with strategic thinking to deliver experiences that users love and businesses benefit from.",
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
    metaTitle: "API Development & Integration Services | Viliha",
    description:
      "REST and GraphQL API development plus integration with Stripe, Salesforce, HubSpot, SAP, Twilio and AWS, with security and documentation. Talk to Viliha.",
    intro: {
      pageTitle: "API Development",
      mainTitle: "Connect, Integrate, Scale",
      paragraph: "Connect, Integrate, Scale",
      buttonText: "Integrate Your Systems",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/API-Development.png`,
      imageAlt: "API development illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "api-approach",
        type: "interactive_list",
        title: "API Excellence",
        paragraph: "Enhance your software's functionality and streamline data flow across your digital ecosystem.",
        items: [
          {
            buttonText: "Overview",
            targetId: "api-overview",
            title: "Seamless System Integration",
            content:
              "We design and build APIs that connect your systems, automate workflows, and enable new capabilities. Our APIs are secure, scalable, and well-documented.",
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
              "We integrate with a wide range of platforms and services to extend your system's capabilities.",
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
            buttonText: "Why Choose Viliha",
            targetId: "api-why-viliha",
            title: "API Expertise",
            content:
              "Our team has extensive experience building and integrating APIs across various industries and platforms.",
            listBlocks: [
              {
                listSubtitle: "What we offer:",
                listItems: [
                  "Secure and scalable API architecture",
                  "Comprehensive documentation",
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
    metaTitle: "Cloud Solutions on AWS, Azure & GCP | Viliha",
    description:
      "Cloud migration, infrastructure as code, Kubernetes, serverless and cost optimization across AWS, Azure, GCP and DigitalOcean. Plan your cloud with Viliha.",
    intro: {
      pageTitle: "Cloud Solutions",
      mainTitle: "Scale Your Infrastructure in the Cloud",
      paragraph: "Scale Your Infrastructure in the Cloud",
      buttonText: "Optimize Your Cloud",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Cloud-infrastructure.png`,
      imageAlt: "Cloud solutions illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "cloud-approach",
        type: "interactive_list",
        title: "Cloud-First Strategy",
        paragraph: "We ensure high availability, cost-efficiency, and peak performance for your applications.",
        items: [
          {
            buttonText: "Overview",
            targetId: "cloud-overview",
            title: "Modern Cloud Infrastructure",
            content:
              "We help businesses leverage cloud technologies to improve scalability, reduce costs, and enhance security. Our cloud solutions are designed for performance and reliability.",
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
            title: "Multi-Cloud Expertise",
            content:
              "We work with all major cloud providers to deliver the best solution for your needs.",
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
            buttonText: "Why Choose Viliha",
            targetId: "cloud-why-viliha",
            title: "Cloud Expertise",
            content:
              "Our certified cloud architects help you build and maintain robust cloud infrastructure.",
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
    metaTitle: "Software QA & Testing Services | Viliha",
    description:
      "Manual, automated, performance, security, API and mobile testing, plus regression and UAT built into your CI pipeline. Improve your release quality with Viliha.",
    intro: {
      pageTitle: "QA & Testing",
      mainTitle: "Quality Assurance for Reliable Software",
      paragraph: "Quality Assurance for Reliable Software",
      buttonText: "Ensure Quality",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Software-qa-testing.png`,
      imageAlt: "QA testing illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "qa-approach",
        type: "interactive_list",
        title: "Comprehensive Testing",
        paragraph: "We cover rigorous manual, automated, and performance testing for optimal quality assurance.",
        items: [
          {
            buttonText: "Overview",
            targetId: "qa-overview",
            title: "Quality at Every Stage",
            content:
              "Our QA team ensures your software meets the highest standards of quality, performance, and reliability. We integrate testing throughout the development lifecycle.",
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
              "We use industry-leading tools and methodologies to ensure comprehensive test coverage.",
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
            buttonText: "Why Choose Viliha",
            targetId: "qa-why-viliha",
            title: "QA Excellence",
            content:
              "Our experienced QA engineers bring rigorous attention to detail and comprehensive testing expertise.",
            listBlocks: [
              {
                listSubtitle: "What we deliver:",
                listItems: [
                  "Reduced defects and bugs",
                  "Improved user experience",
                  "Faster time to market",
                  "Cost savings through early bug detection",
                  "Comprehensive test documentation",
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
    metaTitle: "Dedicated Development Teams & Staff Augmentation | Viliha",
    description:
      "Full-stack, mobile, DevOps, QA and UI/UX specialists as a dedicated team, team augmentation or project-based team. Scale your engineering capacity with Viliha.",
    intro: {
      pageTitle: "Dedicated Teams",
      mainTitle: "Scale Your Team with Expert Developers",
      paragraph: "Scale Your Team with Expert Developers",
      buttonText: "Scale Your Team",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/team.png`,
      imageAlt: "Dedicated teams illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "teams-approach",
        type: "interactive_list",
        title: "Flexible Team Solutions",
        paragraph: "Get flexible talent and deep expertise to accelerate projects and drive innovation.",
        items: [
          {
            buttonText: "Overview",
            targetId: "teams-overview",
            title: "Your Extended Team",
            content:
              "Our dedicated development teams integrate seamlessly with your organization, providing the skills and capacity you need to achieve your goals.",
            listBlocks: [
              {
                listSubtitle: "Team capabilities:",
                listItems: [
                  "Full-stack developers",
                  "Frontend and backend specialists",
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
              "We offer flexible engagement models to match your needs and budget.",
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
            buttonText: "Why Choose Viliha",
            targetId: "teams-why-viliha",
            title: "Trusted Partnership",
            content:
              "We build long-term relationships based on trust, transparency, and shared success.",
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
    metaTitle: "E-commerce & Enterprise Software Development | Viliha",
    description:
      "Custom e-commerce, Shopify, WooCommerce and Magento builds, marketplaces, payment integration, ERP and CRM systems and analytics dashboards. Build with Viliha.",
    intro: {
      pageTitle: "E-commerce Solutions",
      mainTitle: "E-commerce & Enterprise Platforms",
      paragraph: "E-commerce & Enterprise Platforms",
      buttonText: "Build Your Platform",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/E-Commerce.png`,
      imageAlt: "E-commerce illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "ecommerce-approach",
        type: "interactive_list",
        title: "Commerce Excellence",
        paragraph: "We design for growth, security, and seamless management.",
        items: [
          {
            buttonText: "Overview",
            targetId: "ecommerce-overview",
            title: "Scalable Commerce Solutions",
            content:
              "We build e-commerce platforms that drive sales and provide exceptional shopping experiences. From startups to enterprise, we deliver solutions that scale.",
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
              "We build enterprise solutions that streamline operations and drive efficiency.",
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
            buttonText: "Why Choose Viliha",
            targetId: "ecommerce-why-viliha",
            title: "Commerce Expertise",
            content:
              "Our team has deep experience in building successful e-commerce and enterprise solutions.",
            listBlocks: [
              {
                listSubtitle: "What we offer:",
                listItems: [
                  "Conversion-focused design",
                  "Secure payment processing",
                  "Scalable architecture",
                  "SEO optimization",
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
    metaTitle: "Software Support & Maintenance Services | Viliha",
    description:
      "Monitoring, bug fixes, security updates, performance tuning and feature work, on business-hours, extended or 24/7 enterprise plans. Keep your software healthy.",
    intro: {
      pageTitle: "Ongoing Support",
      mainTitle: "Reliable Support & Maintenance",
      paragraph: "Reliable Support & Maintenance",
      buttonText: "Get Support",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/services/Support_new.png`,
      imageAlt: "Support illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "support-approach",
        type: "interactive_list",
        title: "Continuous Support",
        paragraph: "We provide continuous support to keep your applications secure and up-to-date.",
        items: [
          {
            buttonText: "Overview",
            targetId: "support-overview",
            title: "Always There for You",
            content:
              "Our support team ensures your software runs smoothly, stays secure, and evolves with your business needs.",
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
              "We offer flexible support plans to match your needs and budget.",
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
            buttonText: "Why Choose Viliha",
            targetId: "support-why-viliha",
            title: "Reliable Partnership",
            content:
              "We're committed to your long-term success with responsive, proactive support.",
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
    metaTitle: "SEO Services: Technical, On-Page & Local SEO | Viliha",
    description:
      "Technical SEO audits, keyword research, on-page and content optimization, local SEO, link building and site speed work. Grow your organic traffic with Viliha.",
    intro: {
      pageTitle: "SEO Services",
      mainTitle: "Search Engine Optimization",
      paragraph: "Search Engine Optimization",
      buttonText: "Boost Your Rankings",
      buttonUrl: "/contact",
      image: `${siteConfig.cdnUrl}/icons/Custom Web Development.svg`,
      imageAlt: "SEO illustration",
    },
    sections: [
      {
        tabTitle: "Our Approach",
        id: "seo-approach",
        type: "interactive_list",
        title: "SEO Excellence",
        paragraph: "We help you rank higher and attract more qualified traffic.",
        items: [
          {
            buttonText: "Overview",
            targetId: "seo-overview",
            title: "Data-Driven SEO",
            content:
              "Our SEO services are built on data and best practices to deliver measurable results. We focus on sustainable growth, not quick fixes.",
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
            title: "Comprehensive SEO",
            content:
              "We provide full-service SEO to improve your visibility across all search engines.",
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
            buttonText: "Why Choose Viliha",
            targetId: "seo-why-viliha",
            title: "SEO Expertise",
            content:
              "Our SEO team stays current with algorithm updates and industry best practices.",
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
