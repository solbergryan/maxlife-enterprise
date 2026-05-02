import type { Metadata } from "next";
import Link from "next/link";
import { pressItems } from "@/data/press";

export const metadata: Metadata = {
  title: "Press & Media — MaxLife Realty",
  description:
    "MaxLife Realty press coverage, media mentions, and market commentary. For press inquiries, contact Ryan Solberg at Ryan@MaxLifeRealty.com.",
  keywords: [
    "MaxLife Realty press",
    "Ryan Solberg media",
    "Florida CRE broker media",
    "commercial real estate press Florida",
  ],
  alternates: { canonical: "/press" },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Media
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Press &amp; <span className="text-gold">Media Coverage</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            News coverage, market commentary, and industry features highlighting
            MaxLife Realty&apos;s work in Florida commercial real estate.
          </p>
        </div>
      </section>

      {/* Press grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/30 hover:bg-white/[0.06] transition-colors flex flex-col"
            >
              {/* Publication + date */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-gold font-semibold text-sm">
                  {item.publication}
                </span>
                <span className="text-gray-500 text-xs shrink-0">
                  {formatDate(item.date)}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-gold transition-colors">
                {item.headline}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {item.excerpt}
              </p>

              {/* Read more */}
              <span className="text-gold text-sm font-medium flex items-center gap-1.5">
                Read article
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Media kit / press inquiry */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Press inquiries */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Press Inquiries
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                For interviews, market commentary, data requests, or expert
                sourcing on Florida commercial real estate topics, contact Ryan
                Solberg directly.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:Ryan@MaxLifeRealty.com"
                  className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Ryan@MaxLifeRealty.com
                </a>
                <a
                  href="tel:3215862121"
                  className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (321) 586-2121
                </a>
              </div>
            </div>

            {/* Areas of expertise for media */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Expert Commentary Topics
              </h2>
              <ul className="space-y-2">
                {[
                  "Florida CRE market trends and cap rate movement",
                  "NNN investment and net lease deal structuring",
                  "1031 exchange strategy and timelines",
                  "Central Florida and Space Coast market dynamics",
                  "Commercial real estate for out-of-state investors",
                  "Land development opportunities in Florida",
                  "Industrial market: Brevard County and Orlando MSA",
                ].map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-gold mt-0.5 shrink-0">→</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Ryan for press */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-white mb-4">About Ryan Solberg</h2>
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Ryan Solberg is the Founder and Commercial Real Estate Broker at
            MaxLife Realty, a Florida-based commercial brokerage serving buyers,
            sellers, and investors across Central Florida and the Space Coast.
            Licensed as both a Florida Real Estate Broker (BK3354351) and a
            Mortgage Loan Officer (NMLS #1784218), Ryan brings an institutional
            underwriting perspective to commercial transactions across Orange,
            Brevard, Seminole, Lake, Osceola, and Polk counties.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            With over $100M in career transaction volume and a focus on NNN
            investments, 1031 exchanges, land development, and multifamily,
            Ryan is available to provide expert commentary on Florida commercial
            real estate market dynamics.
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
            >
              Full bio →
            </Link>
            <a
              href="https://www.linkedin.com/in/ryansolberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
