import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
// Contact form disabled: GitHub Pages can't run its API routes. Re-enable with a backend.
// import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

const seo = {
  path: "/contact",
  title: "Contact Us: Start Your Project | Avytrix Technologies",
  description:
    "Contact Avytrix Technologies about a website, web app or custom software project. Email or call our team to describe what you are building and book a free call.",
};

export const metadata: Metadata = pageMetadata(seo);

const contactContent = {
  infoHeading: "Let's Discuss Your Project",
  infoParagraph:
    "We would like to hear about your idea. Whether you have a project ready to go, want a consultation or just have questions, get in touch.",
  expectHeading: "What to Expect Next",
  expectParagraph:
    "Email or call us with a short description of your project, and one of our specialists will reply within 24 to 48 business hours.",
  directHeading: "Contact Us Directly",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Contact" }]} />
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 mx-4 bg-[#0A3176]">
          <div className="flex items-center justify-center text-3xl font-semibold w-full">
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">Contact Avytrix Technologies</h1>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div id="premium-contact-page" className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8 pt-4">
            <div>
              <h2 className="text-3xl font-semibold">{contactContent.infoHeading}</h2>
              <p className="mt-4 text-sm">{contactContent.infoParagraph}</p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold">{contactContent.expectHeading}</h2>
              <p className="mt-4 text-sm">{contactContent.expectParagraph}</p>
            </div>
          </div>

          {/* Form Column (disabled, see import note)
          <div className="lg:col-span-2 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
          */}

          {/* Direct Contact Column */}
          <div className="lg:col-span-2 bg-gray-50 p-6 lg:p-10 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8">{contactContent.directHeading}</h2>
            <address className="not-italic space-y-6 text-lg">
              <p className="flex items-center gap-4">
                <User className="w-6 h-6 text-[#0058EE] flex-shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold">{contact.name}</span>
                  <span className="block text-sm text-gray-600">
                    {siteConfig.name}
                    {siteConfig.legal.name && <>, operated by {siteConfig.legal.name}</>}
                  </span>
                  {siteConfig.legal.taxId && (
                    <span className="block text-sm text-gray-600">Tax code: {siteConfig.legal.taxId}</span>
                  )}
                </span>
              </p>
              <p className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#0058EE] flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email.contactEmail}`} className="text-[#0058EE] hover:underline">
                  {siteConfig.email.contactEmail}
                </a>
              </p>
              <p className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#0058EE] flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-[#0058EE] hover:underline">
                  {contact.phone}
                </a>
              </p>
              {contact.secondary.name && (
                <p className="flex items-center gap-4">
                  <User className="w-6 h-6 text-[#0058EE] flex-shrink-0" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">{contact.secondary.name}</span>
                    {contact.secondary.phone && (
                      <a
                        href={`tel:${contact.secondary.phone.replace(/\s/g, "")}`}
                        className="block text-base text-[#0058EE] hover:underline"
                      >
                        {contact.secondary.phone}
                      </a>
                    )}
                  </span>
                </p>
              )}
              {contact.address && (
                <p className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0058EE] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="whitespace-pre-line">{contact.address}</span>
                </p>
              )}
            </address>
            {siteConfig.social.length > 0 && (
              <p className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
                Also find us on{" "}
                {siteConfig.social.map((url, i) => (
                  <span key={url}>
                    {i > 0 && " and "}
                    <a href={url} className="text-[#0058EE] hover:underline" rel="me noopener" target="_blank">
                      {url.includes("linkedin") ? "LinkedIn" : url.includes("facebook") ? "Facebook" : url}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
