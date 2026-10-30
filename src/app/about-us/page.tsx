import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

const seo = {
  path: "/about-us",
  title: `About Our Web Development Team | ${siteConfig.name}`,
  description:
    `Meet ${siteConfig.name}, a remote web and software development team working with startups and growing businesses in the USA, Europe, the UK and Australia.`,
};

export const metadata: Metadata = pageMetadata(seo);

const aboutContent = {
  banner: {
    heading: `About ${siteConfig.name}`,
    tagline:
      "We are a team of strategists, designers and developers who build websites, web applications and software that help businesses grow and solve real problems.",
    buttonText: "Start a Project With Us",
    buttonLink: "/contact",
  },
  twoColumn: {
    heading: "Our Story",
    content:
      `${siteConfig.name} started with a simple goal: to be a software partner businesses around the world can rely on as technology keeps changing. We care about technology and about shipping high-quality products that grow with our clients and make a real difference to how they work.`,
    image: `${siteConfig.cdnUrl}/illustrations/remote-development-team-video-call.jpg`,
  },
  mission: [
    {
      title: "Our Vision",
      content:
        "To be the software partner businesses trust. That goal shapes every project we take on. We want long working relationships built on trust, openness and shared success.",
    },
    {
      title: "Our Team",
      content:
        `${siteConfig.name} is a team of experienced developers and strategists who care about technology and about our clients doing well. Our skills vary, but we share the same high standards.`,
    },
  ],
  coreValues: {
    heading: "Our Values",
    intro:
      "These principles shape our culture and how we work with every client.",
    items: [
      {
        icon: `${siteConfig.cdnUrl}/icons/dedicated-development-team-icon.svg`,
        title: "Quality",
        content:
          "We build secure, scalable software that lasts. High quality is our normal standard, not a special effort.",
      },
      {
        icon: `${siteConfig.cdnUrl}/icons/responsive-design-icon.svg`,
        title: "Transparency",
        content:
          "We communicate clearly and openly from start to finish. You will always know where your project stands.",
      },
      {
        icon: `${siteConfig.cdnUrl}/icons/ecommerce-development-icon.svg`,
        title: "Efficiency",
        content:
          "A lean process and an experienced team mean fast, reliable delivery without cutting corners. We respect your time and your budget.",
      },
      {
        icon: `${siteConfig.cdnUrl}/icons/dedicated-development-team-icon.svg`,
        title: "Innovation",
        content:
          "We enjoy using modern technology and fresh thinking to solve hard problems.",
      },
      {
        icon: `${siteConfig.cdnUrl}/icons/responsive-design-icon.svg`,
        title: "Affordability",
        content:
          "Good work at fair prices, so you get real value for what you spend.",
      },
      {
        icon: `${siteConfig.cdnUrl}/icons/ecommerce-development-icon.svg`,
        title: "On-Time Delivery",
        content:
          "Deadlines matter. We deliver every project as promised.",
      },
    ],
  },
  whyUs: {
    image: `${siteConfig.cdnUrl}/illustrations/global-business-partnership.webp`,
    title: `Why Partner with ${siteConfig.name}?`,
    para: `When you work with ${siteConfig.name}, you get a partner focused on your success. Here is what makes us different:`,
    faqItems: [
      {
        question: "Global Collaboration, Local Understanding",
        answer:
          "We work smoothly with clients around the world and hold every project to EU-grade quality standards at a competitive cost.",
      },
      {
        question: "Agile, Open Delivery",
        answer:
          "We work in agile sprints, report on each one and give you a live view of progress. When your needs change, we adjust.",
      },
      {
        question: "Industry Experience",
        answer:
          "We have specialist experience building secure, compliant software for many industries.",
      },
      {
        question: "Commitment to Your Goals",
        answer:
          "We take the time to understand your business, so what we build fits your goals.",
      },
    ],
    buttonText: `Start Your Project with ${siteConfig.name}`,
    buttonUrl: "/contact",
  },
};

export default function AboutPage() {
  const { banner, twoColumn, mission, coreValues, whyUs } = aboutContent;

  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "About Us" }]} />
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
                alt={`${siteConfig.name} remote development team on a video call`}
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
                <Image src={item.icon} alt="" aria-hidden="true" width={48} height={48} className="mb-4" />
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
                alt="Two business partners shaking hands in front of a globe"
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
