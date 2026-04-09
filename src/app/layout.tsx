import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maxlifedevelopment.com"),
  title: {
    template: "%s | MaxLife Enterprise",
    default:
      "Orlando Commercial Real Estate Broker | NNN Investments & Development | MaxLife Enterprise",
  },
  description:
    "Orlando commercial real estate broker specializing in NNN investments, acquisitions, and development across Central Florida & the Space Coast. Expert CRE guidance for investors and developers.",
  keywords: [
    "commercial real estate orlando fl",
    "orlando commercial real estate broker",
    "NNN investments florida",
    "central florida commercial property",
    "orlando investment properties",
    "space coast commercial real estate",
    "commercial development orlando",
    "orlando CRE broker",
  ],
  authors: [{ name: "Ryan Solberg", url: "https://maxlifedevelopment.com/about" }],
  creator: "MaxLife Enterprise",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MaxLife Enterprise",
    title:
      "Orlando Commercial Real Estate Broker | NNN Investments & Development | MaxLife Enterprise",
    description:
      "Orlando commercial real estate broker specializing in NNN investments, acquisitions, and development across Central Florida & the Space Coast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaxLife Enterprise — Orlando Commercial Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orlando Commercial Real Estate Broker | MaxLife Enterprise",
    description:
      "NNN investments, acquisitions & development across Central Florida. Expert CRE guidance for investors and developers.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "MaxLife Enterprise",
  alternateName: "MaxLife Realty LLC",
  url: "https://maxlifedevelopment.com",
  logo: "https://maxlifedevelopment.com/logo.png",
  description:
    "Commercial real estate brokerage, NNN investments, and development services across Central Florida and the Space Coast.",
  telephone: "(321) 586-2121",
  email: "Ryan@MaxLifeRealty.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.457,
    longitude: -81.4617,
  },
  areaServed: [
    { "@type": "City", name: "Orlando" },
    { "@type": "County", name: "Orange County" },
    { "@type": "County", name: "Seminole County" },
    { "@type": "County", name: "Osceola County" },
    { "@type": "County", name: "Brevard County" },
    { "@type": "County", name: "Lake County" },
    { "@type": "County", name: "Polk County" },
  ],
  founder: {
    "@type": "Person",
    name: "Ryan Solberg",
    jobTitle: "Broker",
    url: "https://maxlifedevelopment.com/about",
  },
  sameAs: ["https://www.linkedin.com/in/ryansolberg"],
  priceRange: "$$$$",
  openingHours: "Mo-Fr 08:00-18:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Real Estate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Real Estate Brokerage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NNN Investment Properties",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Land Development Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investment Property Analysis",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MaxLife Enterprise",
  url: "https://maxlifedevelopment.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
