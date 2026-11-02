import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata, pageUrl, orgRef } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { projects, practices } from "@/content/projects";
import { locations } from "@/content/locations";

const seo = {
  path: "/our-work",
  title: `Our Work: Products and Open Source | ${siteConfig.name}`,
  description: `Products ${siteConfig.name} builds and runs: Pulse for AI shopping agents, the Viliha admin theme and Nestjs Drizzle, an open-source NestJS library.`,
};

export const metadata: Metadata = pageMetadata(seo);

// One ItemList of the products, each with only the facts shown on this page
const projectList = {
  "@type": "ItemList",
  "@id": `${pageUrl(seo.path)}#projects`,
  name: `Products built by ${siteConfig.name}`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": project.schemaType,
      name: project.name,
      description: project.tagline,
      url: project.url,
      ...(project.schemaType === "SoftwareSourceCode"
        ? {
            codeRepository: project.links.find((l) => l.href.startsWith("https://github.com/"))?.href,
            programmingLanguage: "TypeScript",
            license: "https://opensource.org/licenses/MIT",
          }
        : { applicationCategory: "DeveloperApplication" }),
      creator: orgRef,
    },
  })),
};

export default function OurWorkPage() {
  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Our Work" }]} extra={[projectList]} />
      <Breadcrumb items={[{ label: "Our Work" }]} />

      {/* Hero Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#0A3176] to-[#0058EE]">
        <div className="container mx-auto max-w-[1200px] text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Build and Run</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            {siteConfig.name} builds its own software, not only client work. Pulse, Viliha and Nestjs Drizzle
            are products our team designed, built and maintains, and each one shows the skills we bring to your
            project: AI agents and MCP servers, design systems across six frameworks, and production NestJS APIs.
          </p>
          <Link prefetch={false}
            href="/contact"
            className="inline-block bg-white text-[#0058EE] font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start a Project With Us
          </Link>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* One section per product */}
        {projects.map((project, index) => (
          <section key={project.slug} id={project.slug} className="py-16 border-b border-gray-100 last:border-0">
            <div className="grid lg:grid-cols-5 gap-10">
              <div className={`lg:col-span-3 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={project.logo.src}
                  alt={`${project.name} logo`}
                  width={project.logo.width}
                  height={project.logo.height}
                  className="h-12 w-auto object-contain"
                />
                <h2 className="text-3xl font-semibold mt-6">{project.name}</h2>
                <p className="text-lg font-medium text-[#0058EE] mt-2">{project.tagline}</p>
                <p className="text-gray-600 mt-4">{project.problem}</p>

                <h3 className="text-xl font-semibold mt-8">What we built</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-600">
                  {project.built.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-block border border-[#0058EE] text-[#0058EE] hover:bg-[#0058EE] hover:text-white text-sm font-medium py-2 px-4 rounded-full transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <aside className={`lg:col-span-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold">At a glance</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {project.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-gray-500">{fact.label}</dt>
                        <dd className="font-medium">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <h3 className="font-semibold mt-8">Expertise it shows</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.expertise.map((skill) => (
                      <li key={skill.href}>
                        <Link prefetch={false}
                          href={skill.href}
                          className="inline-block bg-white border border-gray-200 hover:border-[#0058EE] text-sm py-1 px-3 rounded-full transition-colors"
                        >
                          {skill.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link prefetch={false}
                    href="/contact"
                    className="inline-block mt-8 text-sm font-semibold text-[#0058EE] hover:underline"
                  >
                    Need something like {project.name}? Talk to us &rarr;
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        ))}

        {/* How we build */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center">How We Build</h2>
          <p className="text-center max-w-3xl mx-auto mt-4 text-gray-600">
            The same practices run through all three products, and we bring them to client work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {practices.map((practice) => (
              <div key={practice.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">{practice.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{practice.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Call to action */}
      <section className="bg-gradient-to-r from-[#0A3176] to-[#0058EE] py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold">Want a Team That Ships Products Like These?</h2>
          <p className="max-w-2xl mx-auto mt-4 opacity-90">
            We work with startups and growing businesses in{" "}
            {locations.map((location, i) => (
              <span key={location.slug}>
                {i > 0 && (i === locations.length - 1 ? " and " : ", ")}
                <Link prefetch={false} href={`/web-development/${location.slug}`} className="underline hover:no-underline">
                  {location.country}
                </Link>
              </span>
            ))}
            .
          </p>
          <Link prefetch={false}
            href="/contact"
            className="mt-8 inline-block bg-white text-[#0058EE] font-medium py-3 px-12 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Your Project with {siteConfig.name}
          </Link>
        </div>
      </section>
    </>
  );
}
