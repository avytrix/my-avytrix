"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="navbar" className="fixed top-0 left-0 w-full bg-white z-[999] border-b border-gray-200">
      <div className="container mx-auto h-[54px] flex justify-between items-center px-4 max-w-[1200px]">
        {/* Logo */}
        <Link
          href="/"
          className="block w-[120px] h-[40px] bg-[url('https://ik.imagekit.io/viliha/images/logos/viliha-d.jpg')] bg-contain bg-center bg-no-repeat"
          aria-label={siteConfig.name}
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
            className="menu-toggle lg:hidden text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-200 h-screen">
          <ul className="flex flex-col p-4 space-y-2">
            {navigation.main.map((item) =>
              item.hasDropdown ? (
                <MobileDropdown key={item.name} item={item} />
              ) : (
                <li key={item.name}>
                  <Link href={item.href} className="block px-4 py-4 text-base font-medium">
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href="/contact"
                className="mt-4 block text-center bg-[#0058EE] text-white font-medium py-2.5 rounded-full"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MobileDropdown({ item }: { item: { name: string; href: string } }) {
  const [open, setOpen] = useState(true);

  return (
    <li className="menu-item-has-children">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-3 text-base font-medium"
      >
        {item.name} <span className="text-xl font-light">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ul className="submenu pl-4 mt-2 space-y-2">
          {navigation.megaMenu.map((column) => (
            <li key={column.title} className="menu-item-has-children">
              <p className="px-4 py-2 text-base font-medium opacity-80">{column.title}</p>
              <ul className="submenu pl-4 mt-2 space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-[#0058EE] opacity-80 block py-1 px-4">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
