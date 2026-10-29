import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import TechStackTabs from "@/components/TechStackTabs";
import FaqAccordion from "@/components/FaqAccordion";

const seo = {
  path: "",
  title: "Web Development Company for Startups | Avytrix Technologies",
  description:
    "Avytrix Technologies is a web development company building websites, web apps and custom software for startups and businesses in the USA, Europe and Australia.",
};

export const metadata: Metadata = pageMetadata(seo);

export default function HomePage() {
  const { hero, servicesOverview, techStack, digitalInnovation, caseStudies } = homeContent;

  return (
    <div>
      <JsonLd {...seo} />
      {/* Hero Section */}
      <section className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between py-10 lg:py-36 px-4 md:h-[600px]">
        <div className="hero-content flex-1 z-10 py-6 lg:py-0">
          <h1 className="text-4xl md:text-5xl font-semibold leading-[40px] lg:leading-[56px]">{hero.heading}</h1>
          <p className="text-xl font-medium text-[#0058EE] my-4">{hero.subheading}</p>
          <p className="text-base text-gray-600 max-w-lg">{hero.paragraph}</p>
          <Link
            href={hero.buttonUrl}
            className="mt-8 inline-block bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-12 rounded-full transition-colors"
          >
            {hero.buttonText}
          </Link>
        </div>
        <div className="hero-image lg:flex flex-1 justify-center py-6 lg:py-0">
          <Image
            src={hero.image}
            alt="Avytrix Technologies web developer at work"
            width={500}
            height={400}
            className="max-w-full h-auto"
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 90vw, 500px"
          />
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Services Overview */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center">{servicesOverview.heading}</h2>
          <p className="text-center max-w-xl mx-auto mt-4 text-gray-600">{servicesOverview.subheading}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {servicesOverview.services.map((service) => (
              <Link
                key={service.title}
                href={service.buttonUrl}
                className="service-card block p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl"
              >
                {service.imageLink && (
                  <Image
                    src={service.imageLink}
                    alt=""
                    aria-hidden="true"
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-6 object-contain"
                  />
                )}
                <h3 className="text-xl font-semibold py-3">{service.title}</h3>
                <p className="text-sm text-gray-600 my-4">{service.content}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="technologies-section py-16">
          <h2 className="text-3xl font-semibold text-center">{techStack.title}</h2>
          <p className="text-center max-w-xl mx-auto mt-4 text-gray-600">{techStack.paragraph}</p>
          <TechStackTabs categories={techStack.categories} />
        </section>

        {/* Digital Innovation / Why Choose Us */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center">{digitalInnovation.title}</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="image-wrapper">
              <Image
                src={digitalInnovation.image}
                alt="Two business partners shaking hands"
                width={500}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="content space-y-4">
              <FaqAccordion items={digitalInnovation.faqItems} />
              <div className="text-center mt-10">
                <Link
                  href={digitalInnovation.buttonUrl}
                  className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-8 rounded-full transition-colors"
                >
                  {digitalInnovation.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center">{caseStudies.heading}</h2>
          <p className="text-center max-w-3xl mx-auto mt-4 text-gray-600">{caseStudies.subheading}</p>

          <div className="space-y-20 mt-12">
            {caseStudies.studies.map((study, index) => (
              <div key={study.client} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`content order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="py-8 px-2 lg:px-8 rounded-lg">
                    <h3 className="text-2xl font-semibold">{study.client}</h3>
                    <p className="mt-4 text-sm">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="mt-2 text-sm">
                      <strong>Our Solution:</strong> {study.solution}
                    </p>
                    <p className="mt-4 text-sm">
                      <strong>Key Results:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                      {study.keyResults.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`image-wrapper order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={study.image}
                    alt={`${study.client} case study`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

