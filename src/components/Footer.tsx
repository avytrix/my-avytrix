import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#121828] text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        {/* Logo Column */}
        <div className="footer-column col-span-2 md:col-span-1">
          <Link href="/" className="mb-4 inline-block">
            <Image
              src="https://ik.imagekit.io/viliha/images/logos/viliha-footer-logo.jpg"
              alt="Viliha Web Services Logo"
              width={144}
              height={48}
              className="rounded-lg w-[120px] sm:w-[144px]"
            />
          </Link>
          <p className="text-xs sm:text-sm opacity-70">Architecting Your Digital Future.</p>
          <div className="mt-3 sm:mt-4 text-xs opacity-50">© {new Date().getFullYear()} Viliha. All Rights Reserved.</div>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Services</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {navigation.footer.services.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Migration Services Column */}
        <div className="footer-column">
          <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Infrastructure</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {navigation.footer.migration.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column">
          <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {navigation.footer.company.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
