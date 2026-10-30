import { navigation } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import SocialLinks from "@/components/SocialLinks";

// One responsive layout: separate mobile/tablet/desktop copies put every heading and link
// in the HTML three times, which crawlers report as duplicate headings and anchor text.
const columns = [
  { title: "Services", links: navigation.footer.services },
  { title: "Web Development by Region", links: navigation.footer.locations },
  { title: "Company", links: navigation.footer.company },
];

const heading = "font-semibold text-sm uppercase tracking-wider lg:normal-case lg:tracking-normal lg:text-base mb-4 text-white";
const linkClass = "text-sm text-gray-400 hover:text-white transition-colors";
const copyright = `© ${new Date().getFullYear()} ${siteConfig.legal.name || siteConfig.name}. All Rights Reserved.`;

export default function Footer() {
  return (
    <footer className="bg-[#121828] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 lg:py-14">
        {/* Mobile: brand on top, lists in 2 inset columns. Tablet: 4 columns. Desktop: 5 centered columns. */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-4 sm:px-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-10 lg:px-0 lg:text-center">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 text-center pb-8 border-b border-gray-700/50 lg:pb-0 lg:border-0">
            <Link prefetch={false} href="/" className="inline-block mb-3">
              <Image
                src={siteConfig.logoUrl}
                alt={`${siteConfig.name} logo`}
                width={160}
                height={64}
                className="rounded-lg mx-auto bg-white"
              />
            </Link>
            <p className="text-sm text-gray-400 lg:mb-2">Web Development Company for Startups and Growing Businesses</p>
            <SocialLinks className="justify-center my-4" />
            <p className="hidden lg:block text-xs text-gray-400">{copyright}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className={heading}>{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false} href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className={heading}>Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${siteConfig.email.contactEmail}`} className={`${linkClass} break-all`}>
                  {siteConfig.email.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className={linkClass}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  prefetch={false}
                  href="/contact"
                  className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white text-sm font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright sits in the brand column on desktop */}
      <div className="border-t border-gray-700/50 lg:hidden">
        <p className="max-w-[1200px] mx-auto px-4 py-5 text-center text-sm text-gray-400">{copyright}</p>
      </div>
    </footer>
  );
}
