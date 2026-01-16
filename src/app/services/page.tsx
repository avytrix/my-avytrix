import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Software Development Services for Startups & AI Companies",
  description:
    "Explore Viliha's comprehensive software development services: custom software, web & mobile development, AI integration, cloud solutions, DevOps, and dedicated teams for startups worldwide.",
  keywords: [
    "software development services",
    "custom software development",
    "web development services",
    "mobile app development",
    "AI software development",
    "cloud solutions",
    "DevOps services",
    "startup software services",
    "enterprise software solutions",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Software Development Services | Viliha",
    description: "Comprehensive software solutions for startups and AI companies worldwide.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Services" }]} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 mx-4 bg-[#0A3176]">
          <div className="flex items-center justify-center">
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">Our Services</h1>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Solutions Engineered for Your Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver precisely what you need. Straightforward, powerful digital solutions designed for performance and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block p-6 bg-white rounded-lg border hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Image
                src={service.intro.image}
                alt={service.title}
                width={48}
                height={48}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A3176] py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help transform your ideas into reality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0058EE] font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
