import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#121828] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 lg:py-14">

        {/* Mobile Layout (< 768px) - Same as desktop */}
        <div className="md:hidden">
          {/* Logo Section - Centered */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="https://ik.imagekit.io/viliha/images/logos/viliha-footer-logo.jpg"
                alt="Viliha Web Services Logo"
                width={160}
                height={53}
                className="rounded-lg mx-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">Remote Software Development for Startups & AI Companies</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 mb-8"></div>

          {/* 2 Column Menu Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Services</h3>
              <ul className="space-y-2.5">
                {navigation.footer.services.map((link) => (
                  <li key={link.name}>
                    <Link
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
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Locations</h3>
              <ul className="space-y-2.5">
                {navigation.footer.locations.map((link) => (
                  <li key={link.name}>
                    <Link
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
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Company</h3>
              <ul className="space-y-2.5">
                {navigation.footer.company.map((link) => (
                  <li key={link.name}>
                    <Link
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
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Contact</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:getintouch@viliha.com"
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors break-all"
                  >
                    getintouch@viliha.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+84915193536"
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                  >
                    +84 915 193 536
                  </a>
                </li>
                <li className="pt-2">
                  <Link
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
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="https://ik.imagekit.io/viliha/images/logos/viliha-footer-logo.jpg"
                  alt="Viliha Web Services Logo"
                  width={160}
                  height={53}
                  className="rounded-lg"
                />
              </Link>
              <p className="text-sm text-gray-400 mb-2">Remote Software Development for Startups</p>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-white">Services</h3>
              <ul className="space-y-2.5">
                {navigation.footer.services.map((link) => (
                  <li key={link.name}>
                    <Link
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
              <h3 className="font-semibold text-sm mb-4 text-white">Locations</h3>
              <ul className="space-y-2.5">
                {navigation.footer.locations.map((link) => (
                  <li key={link.name}>
                    <Link
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
                    <Link
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
                    href="mailto:getintouch@viliha.com"
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors break-all"
                  >
                    getintouch@viliha.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+84915193536"
                    className="text-sm text-gray-400 hover:text-[#0058EE] transition-colors"
                  >
                    +84 915 193 536
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
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://ik.imagekit.io/viliha/images/logos/viliha-footer-logo.jpg"
                alt="Viliha Web Services Logo"
                width={144}
                height={48}
                className="rounded-lg"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-2">Remote Software Development for Startups & AI Companies</p>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Viliha. All Rights Reserved.</p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Services</h3>
            <ul className="space-y-2.5">
              {navigation.footer.services.map((link) => (
                <li key={link.name}>
                  <Link
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
            <h3 className="font-semibold text-base mb-4 text-white">Locations</h3>
            <ul className="space-y-2.5">
              {navigation.footer.locations.map((link) => (
                <li key={link.name}>
                  <Link
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
                  <Link
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
                  href="mailto:getintouch@viliha.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  getintouch@viliha.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+84915193536"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +84 915 193 536
                </a>
              </li>
              <li className="pt-2">
                <Link
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
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Viliha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
