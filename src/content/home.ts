import { siteConfig } from "@/lib/config";
export const homeContent = {
  hero: {
    heading: "Remote Software Development for Startups & AI Companies",
    subheading: "Trusted by Businesses in USA, UK, Europe & Australia",
    paragraph:
      "We provide custom software solutions with dedicated remote development teams. From MVP to enterprise scale, our skilled tech talent delivers world-class results for startups and growing businesses.",
    buttonText: "Let's Build Your Solution",
    buttonUrl: "/contact",
    image: `${siteConfig.cdnUrl}/avytrix-banner_image.png`,
  },

  servicesOverview: {
    heading: "Solutions Engineered for Your Ambition",
    subheading:
      "We deliver precisely what you need. Straightforward, powerful digital solutions designed for performance and scalability.",
    services: [
      {
        title: "Custom Software Development",
        content:
          "Get tailored, high-performance software solutions built from scratch to perfectly match your unique business requirements and drive operational efficiency.",
        imageLink: `${siteConfig.cdnUrl}/icons/Support.svg`,
        buttonUrl: "/services/custom-software-development",
      },
      {
        title: "Responsive Web Development",
        content:
          "We build secure, scalable, and responsive websites and web applications using cutting-edge technologies that guarantee user engagement and business growth.",
        imageLink: `${siteConfig.cdnUrl}/icons/Custom_Web_Development.svg`,
        buttonUrl: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        content:
          "Launch intuitive native and cross-platform mobile apps. We design captivating user experiences that expand your brand's reach on any device.",
        imageLink: `${siteConfig.cdnUrl}/icons/App_Code.svg`,
        buttonUrl: "/services/mobile-app-development",
      },
      {
        title: "User Experience (UX/UI) Design",
        content:
          "Transform ideas into visually stunning, user-friendly digital products. Our expert UX/UI design ensures exceptional engagement and effortless navigation for your users.",
        imageLink: `${siteConfig.cdnUrl}/icons/UI_Design.svg`,
        buttonUrl: "/services/ux-ui-design",
      },
      {
        title: "API Development & Integration",
        content:
          "Build robust APIs and seamlessly integrate diverse systems. Enhance your software's functionality and streamline data flow across your entire digital ecosystem.",
        imageLink: `${siteConfig.cdnUrl}/icons/API.svg`,
        buttonUrl: "/services/api-development",
      },
      {
        title: "Cloud Solutions & Infrastructure",
        content:
          "Optimize with scalable, secure cloud architecture (e.g., AWS). We ensure high availability, cost-efficiency, and peak performance for your applications.",
        imageLink: `${siteConfig.cdnUrl}/icons/Cloud.svg`,
        buttonUrl: "/services/cloud-solutions",
      },
      {
        title: "Software QA & Testing",
        content:
          "Ensure flawless, reliable software with our comprehensive QA. We cover rigorous manual, automated, and performance testing for optimal quality assurance.",
        imageLink: `${siteConfig.cdnUrl}/icons/QA_Testing.svg`,
        buttonUrl: "/services/qa-and-testing",
      },
      {
        title: "Dedicated Development Teams",
        content:
          "Augment your capacity with our skilled, agile development teams. Get flexible talent and deep expertise to accelerate projects and drive innovation.",
        imageLink: `${siteConfig.cdnUrl}/icons/Dedicated_Team.svg`,
        buttonUrl: "/services/dedicated-development-teams",
      },
      {
        title: "E-commerce & Enterprise Solutions",
        content:
          "Build powerful e-commerce platforms or custom enterprise web solutions (ERP/CRM focus). We design for growth, security, and seamless management.",
        imageLink: `${siteConfig.cdnUrl}/icons/E-commerce.svg`,
        buttonUrl: "/services/ecommerce-solutions",
      },
    ],
  },

  techStack: {
    title: "Powered by Modern Technology",
    paragraph: "We select the best tools for the job to ensure your website is fast, secure, and scalable.",
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
    title: "Your Trusted Partner in Digital Innovation",
    image: `${siteConfig.cdnUrl}/trusted_partner.png`,
    faqItems: [
      {
        question: "Expert Problem Solvers",
        answer:
          "We transform complex challenges into elegant, effective digital solutions with deep technical expertise across diverse industries, including regulated sectors.",
      },
      {
        question: "Trusted Technology Partner",
        answer:
          "Count on us for transparent communication, on-time delivery, and a commitment to building long-term, successful partnerships based on mutual trust.",
      },
      {
        question: "Agile & Efficient Delivery",
        answer:
          "Our agile methodologies and streamlined processes ensure the rapid, reliable delivery of high-quality software, keeping you ahead of the curve.",
      },
      {
        question: "Innovation & Quality Focused",
        answer:
          "We leverage cutting-edge technology and a relentless focus on quality to deliver robust, scalable, and secure solutions that drive real results for your business.",
      },
    ],
    buttonText: "Start Your Project with Avytrix Technologies",
    buttonUrl: "/contact",
  },

  caseStudies: {
    heading: "Proven Success in Action",
    subheading:
      "We empower businesses worldwide by transforming complex challenges into high-impact digital solutions. See how we've helped industry leaders achieve their goals.",
    studies: [
      {
        client: "Kelley Blue Book (KBB.COM)",
        challenge:
          "Modernize a monolithic platform to enhance scalability, performance, and user support for millions.",
        solution:
          "Executed a full monolith to microservices migration, including cloud optimization (AWS/GCP), enhanced security integration, and performance engineering.",
        keyResults: [
          "50%+ Decrease in average page load time and API response latency.",
          "30% Year-over-year reduction in infrastructure costs.",
          "Improved platform scalability and resilience, seamlessly supporting millions of U.S. users.",
        ],
        image: `${siteConfig.cdnUrl}/Kelley_Blue_Book.png`,
      },
      {
        client: "Criteo",
        challenge:
          "Develop a self-service web application to streamline campaign management for publishers and marketers.",
        solution:
          "Developed core features for campaign configuration, registration, catalog management, integration monitoring, and comprehensive campaign controls with detailed performance analytics.",
        keyResults: [
          "40%+ Reduction in onboarding and campaign setup time for users.",
          "Enabled independent advertising lifecycle management, boosting platform adoption.",
          "Contributed to a scalable, self-service advertising ecosystem.",
        ],
        image: `${siteConfig.cdnUrl}/Criteo.png`,
      },
    ],
  },
};
