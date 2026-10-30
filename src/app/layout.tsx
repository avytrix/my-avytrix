import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/lib/config";

// No web fonts: the theme uses the system font stack, so Inter/Poppins were downloaded but never shown

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0058EE",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // Every page sets its own title, description, canonical and Open Graph via pageMetadata()
  authors: [{ name: siteConfig.seo.author, url: siteConfig.url }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={new URL(siteConfig.cdnUrl).origin} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <CookieConsent />
        <Header />
        <main className="pt-[54px] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
