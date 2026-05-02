import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://maxlifedevelopment.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://maxlifedevelopment.com/about",
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Solberg",
  jobTitle: "Real Estate Broker & Mortgage Loan Officer",
  description:
    "Licensed Florida Real Estate Broker and Mortgage Loan Officer specializing in commercial property sales, NNN investments, and land development across Central Florida and the Space Coast.",
  url: "https://maxlifedevelopment.com/about",
  image: "https://maxlifedevelopment.com/ryan-solberg.jpg",
  telephone: "(321) 586-2121",
  email: "Ryan@MaxLifeRealty.com",
  worksFor: {
    "@type": "RealEstateAgent",
    name: "MaxLife Realty",
    url: "https://maxlifedevelopment.com",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Florida Real Estate Broker License",
      recognizedBy: {
        "@type": "Organization",
        name: "Florida Department of Business and Professional Regulation",
      },
      identifier: "BK3354351",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Mortgage Loan Officer — NMLS",
      recognizedBy: {
        "@type": "Organization",
        name: "Nationwide Multistate Licensing System",
      },
      identifier: "1784218",
    },
  ],
  knowsAbout: [
    "Commercial Real Estate",
    "NNN Investments",
    "Land Development",
    "1031 Exchanges",
    "Commercial Property Sales",
    "Office Leasing",
    "Retail Leasing",
    "Industrial Real Estate",
    "Multifamily Investing",
    "Investment Analysis",
    "Mortgage Lending",
  ],
  areaServed: [
    { "@type": "City", name: "Orlando" },
    { "@type": "AdministrativeArea", name: "Central Florida" },
    { "@type": "County", name: "Brevard County" },
  ],
  sameAs: ["https://www.linkedin.com/in/ryansolberg"],
};

export const metadata: Metadata = {
  title: "Orlando Commercial Real Estate Broker | Ryan Solberg",
  description:
    "Meet Ryan Solberg, Orlando commercial real estate broker specializing in CRE sales, NNN investments & development across Central Florida and the Space Coast.",
  openGraph: {
    title: "Ryan Solberg — Orlando Commercial Real Estate Broker",
    description:
      "Central Florida CRE agent specializing in investment properties, NNN deals, and commercial development. Licensed FL broker serving 6 counties.",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/about/about-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/about/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/55 to-dark/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet <span className="text-gold">Ryan Solberg</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Commercial Real Estate Professional &amp; Regional Administrator
            serving Central Florida and the Space Coast.
          </p>
        </div>
      </section>

      {/* Commercial Services Banner */}
      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
              COMMERCIAL
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-3 tracking-[0.2em] uppercase">
              Tenant Rep <span className="text-gold/60 mx-2">|</span> Apartments{" "}
              <span className="text-gold/60 mx-2">|</span> Cash Flow{" "}
              <span className="text-gold/60 mx-2">|</span> Investments
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                src: "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-building-convenience-store-grocery-people-2577330.webp",
                alt: "Retail and convenience store commercial property",
              },
              {
                src: "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-real-estate-property-apartment-house-5339245.webp",
                alt: "Multifamily apartment building commercial real estate",
              },
              {
                src: "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-buildings-city-coffee-shop-doors-street-1836478.webp",
                alt: "Retail storefront cash-flowing commercial property",
              },
              {
                src: "/images/commercial-stock/special-purpose/maxlife-special-purpose-gas-station-gas-pump-refuel-diesel-fuel-pump-fuel-tank-gasol-4978824.webp",
                alt: "Gas station NNN commercial investment property",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 text-center sticky top-24">
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-gold/30">
                <Image
                  src="/ryan-solberg.jpg"
                  alt="Ryan Solberg — Commercial Real Estate Professional"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h3 className="text-white text-xl font-semibold">
                Ryan Solberg
              </h3>
              <p className="text-gold text-sm mt-1">
                Founder &amp; Commercial Real Estate Broker
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Mortgage Loan Officer
              </p>
              <div className="border-t border-white/10 mt-6 pt-6 space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Orlando &amp; Space Coast, FL
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (321) 586-2121
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Ryan@MaxLifeRealty.com
                </div>
                <div className="text-gray-500 text-xs mt-3 space-y-1">
                  <div>DBPR BK3354351</div>
                  <div>NMLS 1784218</div>
                  <div>MortgageInc NMLS 2028516</div>
                </div>
              </div>

              {/* Service Area */}
              <div className="border-t border-white/10 mt-6 pt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Orange", "Seminole", "Osceola", "Lake", "Polk", "Brevard"].map(
                    (county) => (
                      <span
                        key={county}
                        className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 text-gray-300"
                      >
                        {county} County
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Commercial Real Estate Professional
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ryan Solberg is a Florida-based Commercial Real Estate
                Professional and Regional Administrator specializing in
                commercial real estate sales, leasing, and investment properties
                throughout Central Florida and the Space Coast. Based in the
                Orlando area, Ryan focuses on helping investors, business owners,
                and developers identify, acquire, and maximize high-performing
                commercial real estate assets.
              </p>
              <p className="text-gray-300 leading-relaxed">
                His expertise spans a wide range of commercial property types,
                including retail shopping centers, office buildings, industrial
                properties, multifamily investments, mixed-use developments, and
                land for development. He works closely with clients to analyze
                market trends, evaluate income-producing opportunities, and
                structure deals that align with both short-term cash flow goals
                and long-term investment strategies.
              </p>
            </div>

            {/* Specialties Grid */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Investment Analysis",
                    desc: "Data-driven approach to evaluating income-producing opportunities, uncovering off-market deals, and maximizing property value through strategic acquisition and disposition.",
                  },
                  {
                    title: "Deal Structuring",
                    desc: "Expert negotiation of favorable terms aligned with client goals — from contract negotiation and underwriting to closing.",
                  },
                  {
                    title: "Operations & Leadership",
                    desc: "As a Regional Administrator, Ryan oversees operations, improves transaction efficiency, and implements scalable systems that enhance the client experience.",
                  },
                  {
                    title: "Digital Marketing & Outreach",
                    desc: "High-converting listing campaigns, investor-focused marketing, SEO, and targeted outreach to maximize exposure and attract qualified buyers and tenants.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/[0.04] border border-white/10 rounded-lg p-5"
                  >
                    <h3 className="text-gold font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                A Results-Oriented Approach
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                With a strong foundation in real estate operations and financial
                analysis, Ryan brings a data-driven, results-oriented approach to
                every transaction. He is known for helping clients uncover
                off-market commercial real estate opportunities, negotiate
                favorable terms, and increase property value through strategic
                acquisition and disposition strategies. His ability to combine
                in-depth local market knowledge with advanced deal analysis makes
                him a valuable partner for both new and experienced commercial
                real estate investors.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ryan stays ahead of market trends, population growth patterns,
                and development activity across Central Florida and Brevard
                County, giving his clients a competitive advantage in identifying
                emerging opportunities. Whether assisting with acquisitions,
                dispositions, leasing, or portfolio expansion, Ryan is committed
                to delivering measurable results and long-term value.
              </p>
            </div>

            {/* Property Types */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Property Types
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Retail & Shopping Centers",
                  "Office Buildings",
                  "Industrial Properties",
                  "Multifamily Investments",
                  "Mixed-Use Developments",
                  "Land for Development",
                ].map((type) => (
                  <div
                    key={type}
                    className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-center"
                  >
                    <p className="text-gray-300 text-sm">{type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To help clients build and scale wealth through commercial real
                estate by providing expert guidance, strategic insight, and
                consistent results in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Ready to discuss your next commercial real estate opportunity? Get in
            touch — Ryan would love to hear about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-track="about-get-in-touch"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/team"
              data-track="about-meet-the-team"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
