import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.maxlifedevelopment.com";

export const metadata: Metadata = {
  title: {
    default: "MaxLife Development | Commercial Real Estate & NNN Investments in Florida",
    template: "%s | MaxLife Development",
  },
  description:
    "Florida commercial real estate brokerage specializing in NNN investment properties, land development, build-to-suit development, and commercial financing. Licensed FL Broker serving Orlando, Melbourne, and Central Florida.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MaxLife Development",
    title: "MaxLife Development | Commercial Real Estate & NNN Investments in Florida",
    description:
      "Florida commercial real estate brokerage specializing in NNN investment properties, land development, build-to-suit development, and commercial financing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaxLife Development — Commercial Real Estate & NNN Investments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxLife Development | Commercial Real Estate & NNN Investments",
    description:
      "Florida commercial real estate brokerage specializing in NNN investment properties, land development, and commercial financing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
