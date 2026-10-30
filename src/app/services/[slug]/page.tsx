import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services";
import ServiceTabs from "@/components/ServiceTabs";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { navigation } from "@/lib/config";
import { orgRef, pageMetadata, pageUrl, type Crumb } from "@/lib/seo";
import type { Service } from "@/content/services";

const serviceSeo = (service: Service) => ({
  path: `/services/${service.slug}`,
  title: service.metaTitle,
  description: service.description,
});

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

  return pageMetadata(serviceSeo(service));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { intro, sections } = service;

  const parentGroup = navigation.megaMenu.find((group) =>
    group.links.some((link) => link.href === `/services/${slug}`)
  );

  const crumbs: Crumb[] = [...(parentGroup ? [{ label: parentGroup.title }] : []), { label: intro.pageTitle }];
  const seo = serviceSeo(service);

  return (
    <>
      <JsonLd
        {...seo}
        crumbs={crumbs}
        extra={[
          {
            "@type": "Service",
            "@id": `${pageUrl(seo.path)}#service`,
            name: service.title,
            description: service.description,
            provider: orgRef,
          },
        ]}
      />
      <Breadcrumb items={crumbs} />

      {/* Hero/Intro Section */}
      <section className="py-4">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center py-6 md:py-0">
          <div className="content">
            <h1 className="text-3xl md:text-4xl font-semibold leading-[46px]">{intro.pageTitle}</h1>
            <p className="text-lg text-gray-600 mt-2">{intro.paragraph}</p>
            <Link prefetch={false}
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
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 448px"
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
            Tell us about your project and we will explain how our {service.title.replace(/ services$/i, "").toLowerCase()} services can help.
          </p>
          <Link prefetch={false}
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
