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
import CookieConsent from "@/components/cookies/CookieConsent";
import TrackingScripts from "@/components/cookies/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maxlifedevelopment.com"),
  title: {
    template: "%s | MaxLife Realty",
    default:
      "Florida Commercial Real Estate Broker | Statewide CRE | MaxLife Realty",
  },
  description:
    "Florida commercial real estate brokerage serving Orlando, Tampa Bay, Jacksonville, South Florida, Southwest Florida (Naples/Fort Myers/Sarasota), North Florida, the Panhandle, and the Space Coast. Commercial property sales, leasing, NNN investments, and land development statewide — office, retail, industrial, and mixed-use.",
  keywords: [
    "commercial real estate Florida",
    "Florida commercial real estate broker",
    "commercial real estate Orlando",
    "commercial real estate Tampa",
    "commercial real estate Jacksonville",
    "commercial real estate Miami",
    "commercial real estate Fort Lauderdale",
    "commercial real estate West Palm Beach",
    "commercial real estate Naples",
    "commercial real estate Fort Myers",
    "commercial real estate Sarasota",
    "commercial real estate Gainesville",
    "commercial real estate Tallahassee",
    "commercial real estate Pensacola",
    "commercial property for sale Florida",
    "NNN properties Florida",
    "investment property Florida",
    "office space for lease Florida",
    "retail space for rent Florida",
    "industrial property for sale Florida",
    "land for development Florida",
    "1031 exchange Florida",
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
      "Florida Commercial Real Estate Broker | Statewide CRE | MaxLife Realty",
    description:
      "Florida's statewide commercial real estate brokerage. Sales, leasing, NNN investments, and land development across Orlando, Tampa Bay, Jacksonville, South Florida, and the Space Coast.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MaxLife Realty — Florida Commercial Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Florida Commercial Real Estate Broker | MaxLife Realty",
    description:
      "Statewide Florida CRE: sales, leasing, NNN investments, and land development across Orlando, Tampa Bay, Jacksonville, South Florida, and the Space Coast.",
    images: ["/opengraph-image"],
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
  image: "https://maxlifedevelopment.com/opengraph-image",
  description:
    "Florida commercial real estate brokerage serving Orlando, Tampa Bay, Jacksonville, South Florida, and the Space Coast. Commercial property sales, leasing, NNN investments, and land development statewide.",
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
    { "@type": "State", name: "Florida" },
    { "@type": "City", name: "Orlando" },
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Jacksonville" },
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Fort Lauderdale" },
    { "@type": "City", name: "West Palm Beach" },
    { "@type": "City", name: "Naples" },
    { "@type": "City", name: "Fort Myers" },
    { "@type": "City", name: "Sarasota" },
    { "@type": "City", name: "Gainesville" },
    { "@type": "City", name: "Tallahassee" },
    { "@type": "City", name: "Pensacola" },
    { "@type": "AdministrativeArea", name: "Central Florida" },
    { "@type": "AdministrativeArea", name: "Tampa Bay" },
    { "@type": "AdministrativeArea", name: "South Florida" },
    { "@type": "AdministrativeArea", name: "Southwest Florida" },
    { "@type": "AdministrativeArea", name: "Northeast Florida" },
    { "@type": "AdministrativeArea", name: "North Central Florida" },
    { "@type": "AdministrativeArea", name: "Florida Panhandle" },
    { "@type": "County", name: "Orange County" },
    { "@type": "County", name: "Hillsborough County" },
    { "@type": "County", name: "Pinellas County" },
    { "@type": "County", name: "Duval County" },
    { "@type": "County", name: "Miami-Dade County" },
    { "@type": "County", name: "Broward County" },
    { "@type": "County", name: "Palm Beach County" },
    { "@type": "County", name: "Brevard County" },
    { "@type": "County", name: "Seminole County" },
    { "@type": "County", name: "Osceola County" },
    { "@type": "County", name: "Lake County" },
    { "@type": "County", name: "Polk County" },
    { "@type": "County", name: "St. Johns County" },
    { "@type": "County", name: "Collier County" },
    { "@type": "County", name: "Lee County" },
    { "@type": "County", name: "Sarasota County" },
    { "@type": "County", name: "Manatee County" },
    { "@type": "County", name: "Alachua County" },
    { "@type": "County", name: "Leon County" },
    { "@type": "County", name: "Escambia County" },
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
        <TrackingScripts />
        <AnalyticsTracker />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 min-h-screen">{children}</main>
        <NewsletterSignup />
        <Footer />
        <ExitIntentPopup />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
