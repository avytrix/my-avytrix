"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header id="navbar" className="fixed top-0 left-0 w-full bg-white z-[999] border-b border-gray-200">
      <div className="container mx-auto h-[54px] flex justify-between items-center px-4 max-w-[1200px]">
        {/* Logo */}
        <Link
          href="/"
          className="block w-[120px] h-[40px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteConfig.logoUrl}?tr=w-240)` }}
          aria-label={siteConfig.name}
          onClick={closeMenu}
        />

        {/* Main Navigation */}
        <div id="menubar" className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1">
              {navigation.main.map((item) =>
                item.hasDropdown ? (
                  <li key={item.name} className="group relative">
                    <a
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium hover:text-[#0058EE] flex items-center gap-2 mt-1"
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                    {/* Mega Menu Dropdown */}
                    <div className="sub-menu absolute top-full left-[-150%] w-[700px] bg-white border border-gray-200 rounded-md shadow-lg mt-0 px-12 py-5 pb-12 gap-6 hidden group-hover:flex transition-all duration-300 opacity-0 group-hover:opacity-100">
                      {navigation.megaMenu.map((column) => (
                        <div key={column.title} className="mega-menu-column flex-1 pr-6 border-r border-gray-300 last:border-r-0">
                          <p className="font-medium text-sm mb-4 pb-2 opacity-90">{column.title}</p>
                          <ul className="space-y-2">
                            {column.links.map((link) => (
                              <li key={link.name}>
                                <Link href={link.href} className="text-sm hover:text-[#0058EE] py-4 opacity-70">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link href={item.href} className="px-4 py-2 text-sm font-medium hover:text-[#0058EE]">
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/contact"
              className="ml-6 bg-[#0058EE] hover:bg-[#00358f] text-white text-sm font-medium py-2 px-5 rounded-full transition-colors"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[54px] bg-black/20 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[54px] left-0 right-0 bg-white z-50 transform transition-all duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 max-h-[calc(100vh-54px)]"
            : "-translate-y-4 opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <nav className="p-4">
          {/* Main Menu Items */}
          <ul className="space-y-1">
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-[#0058EE]/10 text-[#0058EE]"
                    : "hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li>
              <MobileDropdown closeMenu={closeMenu} pathname={pathname} />
            </li>

            {/* About Us */}
            <li>
              <Link
                href="/about-us"
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/about-us"
                    ? "bg-[#0058EE]/10 text-[#0058EE]"
                    : "hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                About Us
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-6 px-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-[#0058EE] hover:bg-[#00358f] text-white font-semibold py-3.5 rounded-full transition-colors shadow-lg shadow-[#0058EE]/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileDropdown({ closeMenu, pathname }: { closeMenu: () => void; pathname: string }) {
  const [open, setOpen] = useState(false);
  const isServicePage = pathname.startsWith("/services");

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
          isServicePage ? "bg-[#0058EE]/10 text-[#0058EE]" : "hover:bg-gray-50"
        }`}
      >
        <span className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          Services
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pt-2 pb-2">
          {navigation.megaMenu.map((column) => (
            <div key={column.title} className="mb-4 last:mb-0">
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {column.title}
              </p>
              <ul className="space-y-0.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-4 py-2.5 ml-4 text-sm rounded-lg transition-colors ${
                        pathname === link.href
                          ? "bg-[#0058EE]/10 text-[#0058EE] font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
