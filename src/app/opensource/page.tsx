import { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { pageMetadata, pageUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { openSourceProjects, docsPath, projectSchema, sponsorUrl } from "@/content/projects";
import { openSourceContent as content } from "@/content/opensource";

const seo = {
  path: "/opensource",
  title: `Open Source: NestJS and GitLab Tools | ${siteConfig.name}`,
  description: `Open source by ${siteConfig.name}: Nestjs Drizzle adds CRUD to NestJS and Drizzle ORM, and vela adds folder and file permissions to GitLab CE.`,
};

export const metadata: Metadata = pageMetadata(seo);

// One ItemList of the open-source projects; url is each project's docs on this site
const projectList = {
  "@type": "ItemList",
  "@id": `${pageUrl(seo.path)}#projects`,
  name: `Open-source projects by ${siteConfig.name}`,
  itemListElement: openSourceProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: projectSchema(project),
  })),
};

const button = "inline-block text-sm font-medium py-2 px-4 rounded-full transition-colors";
const outline = `${button} border border-[#0058EE] text-[#0058EE] hover:bg-[#0058EE] hover:text-white`;

export default function OpenSourcePage() {
  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Open Source" }]} extra={[projectList]} />
      <Breadcrumb items={[{ label: "Open Source" }]} />

      {/* Hero Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#0A3176] to-[#0058EE]">
        <div className="container mx-auto max-w-[1200px] text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">{content.hero.paragraph}</p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Why we publish */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center">Why We Publish Open Source</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {content.reasons.map((reason) => (
              <div key={reason.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{reason.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* One card per project */}
        <section className="pb-16">
          <h2 className="text-3xl font-semibold text-center">Our Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {openSourceProjects.map((project) => (
              <article
                key={project.slug}
                id={project.slug}
                className="flex flex-col border border-gray-200 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-lg font-medium text-[#0058EE] mt-2">{project.tagline}</p>
                <p className="text-gray-600 mt-4">{project.problem}</p>

                <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm bg-gray-50 rounded-lg p-5">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-gray-500">{fact.label}</dt>
                      <dd className="font-medium">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-wrap gap-3 mt-auto pt-8">
                  {/* Plain <a>: the docs are a separate app, not a route of this one */}
                  <a
                    href={docsPath(project.openSource)}
                    className={`${button} bg-[#0058EE] text-white hover:bg-[#0A3176]`}
                  >
                    {project.name} documentation
                  </a>
                  <a href={project.openSource.repo} target="_blank" rel="noopener" className={outline}>
                    GitHub
                  </a>
                  {project.openSource.npm && (
                    <a href={project.openSource.npm} target="_blank" rel="noopener" className={outline}>
                      npm
                    </a>
                  )}
                  <a href={sponsorUrl} target="_blank" rel="noopener" className={outline}>
                    Sponsor
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            See how they fit with the products we run on{" "}
            <Link prefetch={false} href="/our-work" className="text-[#0058EE] underline hover:no-underline">
              Our Work
            </Link>
            .
          </p>
        </section>
      </div>

      {/* Call to action */}
      <section className="bg-gradient-to-r from-[#0A3176] to-[#0058EE] py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold">{content.cta.title}</h2>
          <p className="max-w-2xl mx-auto mt-4 opacity-90">{content.cta.paragraph}</p>
          <Link
            prefetch={false}
            href="/contact"
            className="mt-8 inline-block bg-white text-[#0058EE] font-medium py-3 px-12 rounded-full hover:bg-gray-100 transition-colors"
          >
            {content.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
