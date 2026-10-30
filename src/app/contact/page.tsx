import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";
import Breadcrumb from "@/components/Breadcrumb";

const seo = {
  path: "/contact",
  title: `Contact Us: Start Your Project | ${siteConfig.name}`,
  description:
    `Contact ${siteConfig.name} about a website, web app or custom software project. Tell our team what you are building and book a free consultation.`,
};

export const metadata: Metadata = pageMetadata(seo);

const contactContent = {
  infoHeading: "Let's Discuss Your Project",
  infoParagraph:
    "We would like to hear about your idea. Whether you have a project ready to go, want a consultation or just have questions, get in touch.",
  expectHeading: "What to Expect Next",
  expectParagraph:
    "Send us a short description of your project with the form, and one of our specialists will reply within 24 to 48 business hours.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Contact" }]} />
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 mx-4 bg-[#0A3176]">
          <div className="flex items-center justify-center text-3xl font-semibold w-full">
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">Contact {siteConfig.name}</h1>
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

          {/* Form posts to the contact Worker; hidden if NEXT_PUBLIC_CONTACT_API_URL is unset */}
          {siteConfig.contactApiUrl && (
            <div className="lg:col-span-2 bg-gray-50 p-4 lg:p-10 rounded-lg">
              <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
