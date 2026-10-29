import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

const seo = {
  path: "/terms-conditions",
  title: "Terms and Conditions | Avytrix Technologies",
  description:
    `Read the terms and conditions that apply when you use the ${siteConfig.name} website and services, including limits of liability and the governing law.`,
};

export const metadata: Metadata = pageMetadata(seo);

export default function TermsConditionsPage() {
  return (
    <>
      <JsonLd {...seo} crumbs={[{ label: "Terms and Conditions" }]} />
      <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="py-20 mx-4 bg-[#0A3176]">
          <div className="flex items-center justify-center">
            <h1 className="text-[28px] lg:text-[36px] font-bold text-center text-white">Terms and Conditions</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Please read these terms and conditions carefully before using Our Service.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Acknowledgment</h2>
          <p className="text-gray-600 mb-4">
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between
            You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding
            the use of the Service.
          </p>
          <p className="text-gray-600 mb-4">
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms
            and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the
            Service.
          </p>
          <p className="text-gray-600 mb-4">
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with
            any part of these Terms and Conditions then You may not access the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
          <p className="text-gray-600 mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the
            Company.
          </p>
          <p className="text-gray-600 mb-4">
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
            practices of any third party web sites or services. You further acknowledge and agree that the Company shall
            not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused
            by or in connection with the use of or reliance on any such content, goods or services available on or
            through any such web sites or services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
            suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be
            limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased
            anything through the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-600 mb-4">
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the
            Service. Your use of the Application may also be subject to other local, state, national, or international
            laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms and Conditions</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
            material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms
            taking effect.
          </p>
          <p className="text-gray-600 mb-4">
            By continuing to access or use Our Service after those revisions become effective, You agree to be bound by
            the revised terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms and Conditions, You can contact us via{" "}
            <Link href="/contact" className="text-[#0058EE] underline">
              our contact page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
