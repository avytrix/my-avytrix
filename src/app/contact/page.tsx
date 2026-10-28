import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";

const seo = {
  path: "/contact",
  title: "Contact Viliha: Start Your Software Project | Viliha",
  description:
    "Contact Viliha about custom software, AI, DevOps or cloud projects. Tell us which service you need and what you are building to request a free consultation.",
};

export const metadata: Metadata = pageMetadata(seo);

const contactContent = {
  infoHeading: "Let's Discuss Your Project",
  infoParagraph:
    "We're excited to learn about your ideas. Whether you have a specific project in mind, need a consultation, or just want to learn more, our team is ready to connect with you.",
  expectHeading: "What to Expect Next",
  expectParagraph:
    "Once you submit the form, one of our specialists will review your message and get back to you within 24-48 business hours. We look forward to exploring how we can create impactful digital solutions together.",
  formHeading: "Send Us a Message",
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
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">Contact</h1>
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

          {/* Form Column */}
          <div className="lg:col-span-2 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-3xl font-semibold mb-8">{contactContent.formHeading}</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
