import { navigation } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#121828] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 lg:py-14">
        {/* Mobile Layout (< 768px) - Same as desktop */}
        <div className="md:hidden">
          {/* Logo Section - Centered */}
          <div className="text-center mb-8">
            <Link prefetch={false} href="/" className="inline-block mb-3">
              <Image
                src={siteConfig.logoUrl}
                alt={`${siteConfig.name} logo`}
                width={160}
                height={64}
                className="rounded-lg mx-auto bg-white"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Web Development Company for Startups and Growing Businesses
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 mb-8"></div>

          {/* 2 Column Menu Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2.5">
                {navigation.footer.services.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                Web Development by Region
              </h3>
              <ul className="space-y-2.5">
                {navigation.footer.locations.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                Company
              </h3>
              <ul className="space-y-2.5">
                {navigation.footer.company.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                Contact
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email.contactEmail}`}
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors break-all"
                  >
                    {siteConfig.email.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="pt-2">
                  <Link prefetch={false}
                    href="/contact"
                    className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white text-xs font-medium py-2 px-4 rounded-full transition-colors"
                  >
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-6 gap-6">
            {/* Logo Column */}
            <div className="col-span-2">
              <Link prefetch={false} href="/" className="inline-block mb-4">
                <Image
                  src={siteConfig.logoUrl}
                  alt={`${siteConfig.name} logo`}
                  width={160}
                  height={64}
                  className="rounded-lg bg-white"
                />
              </Link>
              <p className="text-sm text-gray-400 mb-2">
                Web Development for Startups and Growing Businesses
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2.5">
                {navigation.footer.services.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-white">
                Web Development by Region
              </h3>
              <ul className="space-y-2.5">
                {navigation.footer.locations.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-white">Company</h3>
              <ul className="space-y-2.5">
                {navigation.footer.company.map((link) => (
                  <li key={link.name}>
                    <Link prefetch={false}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-white">Contact</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email.contactEmail}`}
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors break-all"
                  >
                    {siteConfig.email.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout (>= 1024px) - 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-10">
          {/* Logo Column */}
          <div>
            <Link prefetch={false} href="/" className="inline-block mb-4">
              <Image
                src={siteConfig.logoUrl}
                alt={`${siteConfig.name} logo`}
                width={145}
                height={58}
                className="rounded-lg bg-white"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-2">
              Web Development Company for Startups and Growing Businesses
            </p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} {siteConfig.legal.name || siteConfig.name}. All Rights Reserved.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {navigation.footer.services.map((link) => (
                <li key={link.name}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {navigation.footer.locations.map((link) => (
                <li key={link.name}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Company</h3>
            <ul className="space-y-2.5">
              {navigation.footer.company.map((link) => (
                <li key={link.name}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email.contactEmail}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.email.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link prefetch={false}
                  href="/contact"
                  className="inline-block bg-[#0058EE] hover:bg-[#00358f] text-white text-sm font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Mobile & Tablet only */}
      <div className="border-t border-gray-700/50 lg:hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-5">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {siteConfig.legal.name || siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
