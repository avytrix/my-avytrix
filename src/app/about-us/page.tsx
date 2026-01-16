import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us - Your Trusted Software Development Partner",
  description:
    "Viliha is a trusted software development company serving startups and AI companies across USA, UK, Europe, Australia, Singapore, Malaysia & Vietnam. Expert DevOps, automation, and digital transformation.",
  keywords: [
    "software development company",
    "about Viliha",
    "software development partner",
    "trusted software company",
    "DevOps experts",
    "digital transformation company",
    "startup technology partner",
    "AI company partner",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
  openGraph: {
    title: "About Viliha - Your Software Development Partner",
    description: "Trusted software development partner for startups and AI companies worldwide.",
    url: `${siteConfig.url}/about-us`,
  },
};

const aboutContent = {
  banner: {
    bgImage: "https://ik.imagekit.io/viliha/images/About-us-hero-banner-image.webp",
    heading: "Your Partner in Digital Innovation",
    tagline:
      "We are a passionate team of strategists, designers, and developers dedicated to crafting exceptional digital experiences that drive growth and solve real-world challenges.",
    buttonText: "Let's Build Your Digital Future, Together",
    buttonLink: "/contact",
  },
  twoColumn: {
    heading: "Our Story: Powering Digital Futures",
    content:
      "Viliha Services was founded with a clear mission: to be a trusted software partner for businesses worldwide, helping them navigate and thrive in the ever-evolving digital landscape. Our journey is driven by a passion for technology and a commitment to delivering scalable, high-quality products that make a real impact. We believe in harnessing modern tools not just to build software, but to architect brighter digital futures for our clients.",
    image: "https://ik.imagekit.io/viliha/images/virtual-meeting 2.jpg",
  },
  mission: [
    {
      title: "Our Vision",
      content:
        "To be a trusted software partner for businesses. This vision guides every project we undertake and every solution we deliver. We aim to build lasting relationships based on trust, transparency, and mutual success.",
    },
    {
      title: "Meet Our Driving Force (Our Team)",
      content:
        "At the heart of Viliha Services is a team of experienced developers and strategists passionate about technology and client success. While our skills are diverse, we are united by a shared commitment to excellence and innovation.",
    },
  ],
  coreValues: {
    heading: "Our Core Values: The Foundation of Our Work",
    intro:
      "Our values are the bedrock of our company culture and the principles that define our approach to every client engagement.",
    items: [
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/Dedicated Team.svg",
        title: "Quality",
        content:
          "We are committed to delivering robust, scalable, and secure solutions that stand the test of time. Excellence is not just an aspiration; it's our standard.",
      },
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/Responsive.svg",
        title: "Transparency",
        content:
          "We believe in clear, open communication and providing full visibility throughout the project lifecycle. You'll always know where things stand.",
      },
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/E-commerce.svg",
        title: "Efficiency",
        content:
          "Our streamlined processes and experienced team ensure fast, reliable delivery without compromising on quality. We value your time and investment.",
      },
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/Dedicated Team.svg",
        title: "Innovation",
        content:
          "We thrive on leveraging modern technologies and creative thinking to develop cutting-edge solutions that address complex challenges.",
      },
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/Responsive.svg",
        title: "Affordability",
        content:
          "We provide effective, high-impact digital solutions at fair and reasonable prices, ensuring you receive exceptional value.",
      },
      {
        icon: "https://ik.imagekit.io/viliha/images/icons/E-commerce.svg",
        title: "On-Time Delivery",
        content:
          "We understand the importance of deadlines and are dedicated to delivering every project as promised.",
      },
    ],
  },
  whyUs: {
    image: "https://ik.imagekit.io/viliha/images/why-partner-with-viliha.webp",
    title: "Why Partner with Viliha?",
    para: "Choosing Viliha means choosing a partner dedicated to your success. Here's what sets us apart:",
    faqItems: [
      {
        question: "Global Collaboration, Local Understanding",
        answer:
          "We offer seamless collaboration for a global clientele, bringing EU-grade quality standards to every project with competitive cost efficiency.",
      },
      {
        question: "Agile & Transparent Delivery",
        answer:
          "Experience a flexible, agile approach with real-time project visibility and sprint-based reporting. We adapt to your evolving needs.",
      },
      {
        question: "Strong Domain Expertise",
        answer:
          "We bring specialized experience to the table, particularly in delivering compliant and secure solutions for various industries.",
      },
      {
        question: "Commitment to Your Goals",
        answer:
          "We invest time in understanding your business to deliver solutions that truly align with your objectives.",
      },
    ],
    buttonText: "Start Your Project with Viliha",
    buttonUrl: "/contact",
  },
};

export default function AboutPage() {
  const { banner, twoColumn, mission, coreValues, whyUs } = aboutContent;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#0A3176] to-[#0058EE]">
        <div className="container mx-auto max-w-[1200px] text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{banner.heading}</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">{banner.tagline}</p>
          <Link
            href={banner.buttonLink}
            className="inline-block bg-white text-[#0058EE] font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            {banner.buttonText}
          </Link>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Our Story */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">{twoColumn.heading}</h2>
              <p className="text-gray-600">{twoColumn.content}</p>
            </div>
            <div>
              <Image
                src={twoColumn.image}
                alt="Viliha team collaborating"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {mission.map((item) => (
              <div key={item.title} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-4">{coreValues.heading}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{coreValues.intro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.items.map((item) => (
              <div key={item.title} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Image src={item.icon} alt={item.title} width={48} height={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Partner with Us */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-4">{whyUs.title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{whyUs.para}</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={whyUs.image}
                alt="Why Partner with Viliha"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <FaqAccordion items={whyUs.faqItems} />
              <div className="mt-8">
                <Link
                  href={whyUs.buttonUrl}
                  className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-8 rounded-full transition-colors"
                >
                  {whyUs.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
