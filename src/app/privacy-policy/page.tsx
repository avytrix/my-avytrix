import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

const seo = {
  path: "/privacy-policy",
  title: "Privacy Policy | Viliha",
  description:
    `Read how ${siteConfig.name} collects, uses and protects your personal information when you use this website, and how to contact us about your data.`,
};

export const metadata: Metadata = pageMetadata(seo);

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Privacy Policy" }]} />
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 mx-4 bg-[#0A3176]">
          <div className="flex items-center justify-center">
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">
              Privacy Policy for {siteConfig.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
            information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="text-gray-600 mb-8">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
            collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Interpretation</h3>
          <p className="text-gray-600 mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or in
            plural.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Definitions</h3>
          <p className="text-gray-600 mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to {siteConfig.name}.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
            <li>
              <strong>Website</strong> refers to {siteConfig.name}, accessible from{" "}
              <Link href="/" className="text-[#0058EE] underline">
                Viliha
              </Link>
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable
              individual.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Types of Data Collected</h3>
          <p className="text-gray-600 mb-4">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that
            can be used to contact or identify You. Personally identifiable information may include, but is not limited
            to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Your Personal Data</h2>
          <p className="text-gray-600 mb-4">The Company may use Personal Data for the following purposes:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
            <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
            <li>
              For the performance of a contract: the development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any other contract with Us through the
              Service.
            </li>
            <li>
              To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic
              communication.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
            Privacy Policy on this page.
          </p>
          <p className="text-gray-600 mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, You can contact us via{" "}
            <Link href="/contact" className="text-[#0058EE] underline">
              the Viliha contact form
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
