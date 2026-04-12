import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maxlifedevelopment.com"),
  title: {
    template: "%s | MaxLife Realty",
    default:
      "Orlando Commercial Real Estate Broker | Central Florida CRE | MaxLife Realty",
  },
  description:
    "Orlando commercial real estate broker specializing in commercial property sales, leasing, NNN investments, and land development across Central Florida. Office, retail, industrial, and mixed-use expertise.",
  keywords: [
    "commercial real estate Orlando",
    "Orlando commercial real estate broker",
    "Central Florida commercial real estate",
    "commercial property for sale Orlando",
    "commercial realtors near me",
    "investment property Orlando",
    "NNN properties Orlando",
    "office space for lease Orlando",
    "retail space for rent Orlando",
    "industrial property for sale Central Florida",
    "land for development Central Florida",
    "1031 exchange Orlando",
    "build-to-suit Orlando",
  ],
  authors: [{ name: "Ryan Solberg", url: "https://maxlifedevelopment.com/about" }],
  creator: "MaxLife Realty",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MaxLife Realty",
    url: "https://maxlifedevelopment.com",
    title:
      "Orlando Commercial Real Estate Broker | Central Florida CRE | MaxLife Realty",
    description:
      "Central Florida's trusted commercial real estate brokerage. Sales, leasing, NNN investments, and land development across Orlando and the Space Coast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaxLife Realty — Orlando Commercial Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orlando Commercial Real Estate Broker | MaxLife Realty",
    description:
      "Sales, leasing, NNN investments, and land development across Central Florida.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "xr0z972AwostYbn1sRWnuaTl01GP0HlQER__ndULi94",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: "MaxLife Realty",
  alternateName: "MaxLife Realty LLC",
  url: "https://maxlifedevelopment.com",
  logo: "https://maxlifedevelopment.com/logo.png",
  image: "https://maxlifedevelopment.com/og-image.jpg",
  description:
    "Orlando commercial real estate broker specializing in commercial property sales, leasing, NNN investments, and land development across Central Florida and the Space Coast.",
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
    { "@type": "AdministrativeArea", name: "Central Florida" },
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
    jobTitle: "Real Estate Broker & Mortgage Loan Officer",
    url: "https://maxlifedevelopment.com/about",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Florida Real Estate Broker License",
        identifier: "BK3354351",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Mortgage Loan Officer — NMLS",
        identifier: "1784218",
      },
    ],
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
  name: "MaxLife Realty",
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
        <GoogleAnalytics />
        <AnalyticsTracker />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <NewsletterSignup />
        <Footer />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
