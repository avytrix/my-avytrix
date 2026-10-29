import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocationBySlug, getAllLocationSlugs } from "@/content/locations";
import { services } from "@/content/services";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { orgRef, pageMetadata, pageUrl, type Crumb } from "@/lib/seo";
import type { LocationData } from "@/content/locations";
import { siteConfig } from "@/lib/config";

const steps = [
  { step: "01", title: "Discovery", description: "We start with a free consultation to understand your requirements, goals and timeline." },
  { step: "02", title: "Planning", description: "We draw up a roadmap, recommend a tech stack and agree on a timeline with you." },
  { step: "03", title: "Development", description: "We build in short agile cycles, with regular updates, demos and room for your feedback." },
  { step: "04", title: "Delivery", description: "We test thoroughly, help you launch and stay on for maintenance after go-live." },
];

// Answers restate facts already shown on the page, so the FAQ schema stays truthful
const locationFaq = (location: LocationData, serviceTitles: string[]) => [
  {
    question: `Do you work in ${location.region} business hours?`,
    answer: location.benefits[0].description,
  },
  {
    question: `What web development services do you offer ${location.country} businesses?`,
    answer: `${serviceTitles.join(", ")}. See every service on our services page.`,
  },
  {
    question: "How does a project start?",
    answer: steps.map((s) => s.description).join(" "),
  },
];

const locationSeo = (location: LocationData) => ({
  path: `/web-development/${location.slug}`,
  title: location.metaTitle,
  description: location.metaDescription,
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return pageMetadata(locationSeo(location));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Select featured services (first 6)
  const featuredServices = services.slice(0, 6);

  const crumbs: Crumb[] = [{ label: "Web Development", href: "/services/web-development" }, { label: location.country }];
  const seo = locationSeo(location);
  const faq = locationFaq(location, featuredServices.map((service) => service.title));

  return (
    <>
      <JsonLd
        {...seo}
        crumbs={crumbs}
        extra={[
          {
            "@type": "Service",
            "@id": `${pageUrl(seo.path)}#service`,
            name: location.heroTitle,
            description: location.metaDescription,
            serviceType: featuredServices.map((service) => service.title),
            areaServed: location.country, // text, since "Europe" is not a Country
            provider: orgRef,
          },
          {
            "@type": "FAQPage",
            "@id": `${pageUrl(seo.path)}#faq`,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <Breadcrumb items={crumbs} />

      {/* Hero Section - Consistent with homepage */}
      <section className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between pt-2 pb-10 lg:pt-4 lg:pb-20 px-4">
        <div className="hero-content flex-1 z-10 py-6 lg:py-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{location.flag}</span>
            <span className="text-sm font-medium bg-[#0058EE]/10 text-[#0058EE] px-3 py-1 rounded-full">
              {location.region}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[40px] lg:leading-[56px]">
            {location.heroTitle}
          </h1>
          <p className="text-xl font-medium text-[#0058EE] my-4">{location.heroSubtitle}</p>
          <p className="text-base text-gray-600 max-w-lg">{location.heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-[#0058EE] text-[#0058EE] font-medium py-3 px-8 rounded-full hover:bg-[#0058EE]/5 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
        <div className="hero-image lg:flex flex-1 justify-center py-6 lg:py-0">
          <Image
            src={`${siteConfig.cdnUrl}/hero/web-development-company-hero.png`}
            alt={`Web development services for ${location.country}`}
            width={500}
            height={400}
            className="max-w-full h-auto"
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 90vw, 500px"
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#0058EE]">50+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#0058EE]">98%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#0058EE]">5+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#0058EE]">24/7</p>
              <p className="text-sm text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Region */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why {location.country} Businesses Choose Avytrix Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We know how {location.region} businesses work and build websites and software that fit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {location.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0058EE]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#0058EE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Services for {location.country} Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Web and software development services for {location.region} businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Image
                  src={service.intro.image}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0058EE] font-semibold hover:underline"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work with {location.region} Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple four-step process that works across time zones.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0058EE] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern, proven tools for websites and applications that are fast, secure and easy to scale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            {[
              { name: "React", img: `${siteConfig.cdnUrl}/technologies/react-logo.png` },
              { name: "Node.js", img: `${siteConfig.cdnUrl}/technologies/nodejs-logo.png` },
              { name: "Python", img: `${siteConfig.cdnUrl}/technologies/python-logo.png` },
              { name: "AWS", img: `${siteConfig.cdnUrl}/technologies/aws-logo.png` },
              { name: "Flutter", img: `${siteConfig.cdnUrl}/technologies/flutter-logo.png` },
              { name: "PostgreSQL", img: `${siteConfig.cdnUrl}/technologies/postgresql-logo.png` },
            ].map((tech) => (
              <Image
                key={tech.name}
                src={tech.img}
                alt={`${tech.name} logo`}
                width={60}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Web Development for {location.country}: Common Questions
          </h2>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A3176] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join the {location.testimonialRegion} that work with Avytrix Technologies on their websites and software.
            Book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#0058EE] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href={`mailto:${siteConfig.email.contactEmail}`}
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
