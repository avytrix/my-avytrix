import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services";
import ServiceTabs from "@/components/ServiceTabs";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const keywords = [
    service.title.toLowerCase(),
    `${service.title.toLowerCase()} services`,
    `${service.title.toLowerCase()} for startups`,
    `${service.title.toLowerCase()} company`,
    "software development",
    "AI companies",
    "startup solutions",
  ];

  return {
    title: service.metaTitle,
    description: service.description,
    keywords,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      url: `${siteConfig.url}/services/${slug}`,
      type: "website",
      images: [
        {
          url: service.intro.image,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.description,
      images: [service.intro.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { intro, sections } = service;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: intro.pageTitle }]} />

      {/* Hero/Intro Section */}
      <section className="py-4">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center py-6 md:py-0">
          <div className="content">
            <h1 className="text-3xl md:text-4xl font-semibold leading-[46px]">{intro.pageTitle}</h1>
            <p className="text-lg text-gray-600 mt-2">{intro.paragraph}</p>
            <Link
              href={intro.buttonUrl}
              className="mt-8 inline-block bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-4 lg:px-8 rounded-full transition-colors"
            >
              {intro.buttonText}
            </Link>
          </div>
          <div className="image-wrapper flex justify-center">
            <Image
              src={intro.image}
              alt={intro.imageAlt}
              width={400}
              height={300}
              className="max-w-sm md:max-w-md w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Content Sections with Sidebar Navigation */}
      {sections.length > 0 && <ServiceTabs sections={sections} />}

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
