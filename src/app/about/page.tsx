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
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet <span className="text-gold">Ryan Solberg</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Commercial Real Estate Professional &amp; Regional Administrator
            serving Central Florida and the Space Coast.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Card */}
          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center sticky top-24">
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
              <div className="border-t border-dark-border mt-6 pt-6 space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Orlando &amp; Space Coast, FL
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Licensed FL Broker
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  License #3354351
                </div>
              </div>

              {/* Service Area */}
              <div className="border-t border-dark-border mt-6 pt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Orange", "Seminole", "Osceola", "Lake", "Polk", "Brevard"].map(
                    (county) => (
                      <span
                        key={county}
                        className="text-xs bg-dark-hover border border-dark-border rounded-full px-3 py-1 text-gray-400"
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
              <p className="text-gray-400 leading-relaxed mb-4">
                Ryan Solberg is a Florida-based Commercial Real Estate
                Professional and Regional Administrator specializing in
                commercial real estate sales, leasing, and investment properties
                throughout Central Florida and the Space Coast. Based in the
                Orlando area, Ryan focuses on helping investors, business owners,
                and developers identify, acquire, and maximize high-performing
                commercial real estate assets.
              </p>
              <p className="text-gray-400 leading-relaxed">
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
                    className="bg-dark-card border border-dark-border rounded-lg p-5"
                  >
                    <h3 className="text-gold font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                A Results-Oriented Approach
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
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
              <p className="text-gray-400 leading-relaxed">
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
                    className="bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-center"
                  >
                    <p className="text-gray-300 text-sm">{type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8">
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
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Ready to discuss your next commercial real estate opportunity? Get in
            touch — Ryan would love to hear about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
