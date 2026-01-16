import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocationBySlug, getAllLocationSlugs } from "@/content/locations";
import { services } from "@/content/services";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

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

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `${siteConfig.url}/software-development/${slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.url}/software-development/${slug}`,
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: location.heroTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Select featured services (first 6)
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Software Development", href: "/services" },
          { label: location.country },
        ]}
      />

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
            src="https://ik.imagekit.io/viliha/images/viliha-banner_image.webp"
            alt={`Software Development Services for ${location.country}`}
            width={500}
            height={400}
            className="max-w-full h-auto"
            priority
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
              Why {location.country} Businesses Choose Viliha
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of {location.region} businesses and deliver
              tailored solutions that drive real results.
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
              Comprehensive software development services tailored for {location.region} businesses.
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
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
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
              Our proven process ensures seamless collaboration regardless of location.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start with a free consultation to understand your requirements, goals, and timeline.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Our team creates a detailed roadmap, tech stack recommendations, and project timeline.",
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular updates, demos, and continuous feedback integration.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Thorough testing, deployment support, and ongoing maintenance to ensure success.",
              },
            ].map((item, index) => (
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
              We leverage modern technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            {[
              { name: "React", img: "https://ik.imagekit.io/viliha/images/technologies/React.png" },
              { name: "Node.js", img: "https://ik.imagekit.io/viliha/images/technologies/Nodejs.png" },
              { name: "Python", img: "https://ik.imagekit.io/viliha/images/technologies/Python.png" },
              { name: "AWS", img: "https://ik.imagekit.io/viliha/images/technologies/AWS.png" },
              { name: "Flutter", img: "https://ik.imagekit.io/viliha/images/technologies/Flutter.png" },
              { name: "PostgreSQL", img: "https://ik.imagekit.io/viliha/images/technologies/PostgreSQL.png" },
            ].map((tech) => (
              <Image
                key={tech.name}
                src={tech.img}
                alt={tech.name}
                width={60}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A3176] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join {location.testimonialRegion} who trust Viliha for their software development needs.
            Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#0058EE] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="mailto:getintouch@viliha.com"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `Viliha - Software Development ${location.country}`,
            description: location.metaDescription,
            url: `${siteConfig.url}/software-development/${slug}`,
            areaServed: {
              "@type": "Country",
              name: location.country,
            },
            serviceType: [
              "Custom Software Development",
              "Web Development",
              "Mobile App Development",
              "Cloud Solutions",
              "DevOps Services",
            ],
            provider: {
              "@type": "Organization",
              name: "Viliha Web Services",
              url: siteConfig.url,
            },
          }),
        }}
      />
    </>
  );
}
