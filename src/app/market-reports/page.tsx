import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getPublishedReports,
  getReportsByYear,
  formatQuarter,
  quarterLabel,
} from "@/data/marketReports";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Central Florida Commercial Real Estate Market Reports | MaxLife Realty",
  description:
    "Quarterly commercial real estate market reports for Orlando and Central Florida. Cap rates, vacancy, absorption, notable transactions, and practitioner commentary across retail, office, industrial, multifamily, NNN, and land.",
  openGraph: {
    title: "Central Florida CRE Market Reports | MaxLife Realty",
    description:
      "Quarterly commercial real estate market reports for Orlando, Brevard, Lake, Seminole, Osceola, Volusia, and Polk counties. Cited sources, no fluff.",
  },
};

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
      name: "Market Reports",
      item: "https://maxlifedevelopment.com/market-reports",
    },
  ],
};

export default function MarketReportsIndexPage() {
  const reports = getPublishedReports();
  const byYear = getReportsByYear();
  const years = Object.keys(byYear)
    .map((y) => parseInt(y))
    .sort((a, b) => b - a);
  const latest = reports[0];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-glass-windows-business-blue-1508086.webp"
          alt="Central Florida commercial real estate market reports"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Quarterly Research
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Central Florida CRE{" "}
            <span className="text-gold">Market Reports</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Quarterly commercial real estate intelligence for Central Florida
            and the Space Coast. Cap rates, vacancy, absorption, and notable
            transactions across every major asset class. Every data point
            traces back to a published source &mdash; or is explicitly
            flagged as an in-market observation. No fabricated numbers,
            no fluff.
          </p>
        </div>
      </section>

      {/* Latest report highlight */}
      {latest && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href={`/market-reports/${latest.slug}`}
            className="block bg-dark-card border border-gold/30 rounded-2xl p-8 sm:p-10 hover:border-gold transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/30">
                Latest
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {formatQuarter(latest)} &middot; Published{" "}
                {new Date(latest.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
              {latest.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5 max-w-4xl">
              {latest.executiveSummary}
            </p>
            <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
              Read the full {formatQuarter(latest)} report
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </section>
      )}

      {/* Archive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-white mb-2">Archive</h2>
        <p className="text-gray-500 mb-8">
          Browse every published quarterly report.
        </p>

        {reports.length === 0 ? (
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
            <p className="text-gray-400">
              The first quarterly report will be published shortly. Check back
              soon, or{" "}
              <Link
                href="/contact"
                className="text-gold hover:text-gold-light underline"
              >
                contact us
              </Link>{" "}
              to request a specific submarket or quarter.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {years.map((year) => (
              <div key={year}>
                <h3 className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
                  {year}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {byYear[year].map((r) => (
                    <Link
                      key={r.slug}
                      href={`/market-reports/${r.slug}`}
                      className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {formatQuarter(r)} &middot; {quarterLabel(r)}
                        </p>
                      </div>
                      <h4 className="text-white font-semibold text-base mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {r.title}
                      </h4>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {r.executiveSummary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Methodology */}
      <section className="bg-dark-card/30 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Methodology</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                Every MaxLife Realty market report follows the same
                discipline: macro data comes from publicly cited sources
                (Federal Reserve / FRED, Bureau of Labor Statistics, U.S.
                Census, and Central Florida regional economic releases),
                asset-class statistics are drawn from quarterly publications
                of major commercial brokerages (CBRE, JLL, Cushman &amp;
                Wakefield, Colliers, Newmark, Marcus &amp; Millichap), and
                notable transactions are pulled from public press coverage
                in outlets like the Orlando Business Journal, Connect CRE,
                Commercial Observer, Bisnow, and GlobeSt.
              </p>
              <p>
                Each data point in each report is attached to a numbered
                source citation. Any commentary, cap rate range estimate,
                or submarket observation that reflects MaxLife Realty&apos;s
                own in-market practitioner view &mdash; rather than a
                published number &mdash; is labeled as such so you know
                which is which.
              </p>
              <p>
                Reports are published within two to three weeks of quarter
                end, once enough sourced data is available. If you&apos;re
                looking for a specific submarket, asset class, or deeper
                historical quarter that isn&apos;t in the archive yet,{" "}
                <Link
                  href="/contact"
                  className="text-gold hover:text-gold-light underline"
                >
                  send us a note
                </Link>{" "}
                and we&apos;ll prioritize it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Thinking of selling? Let&apos;s talk the numbers.
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Our market reports are a starting point. When you&apos;re ready for
          a property-specific valuation on your own building or land, the
          call is free and confidential.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/opportunities#request-valuation"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Request a Seller Valuation
          </Link>
          <Link
            href="/net-sheets/seller"
            className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Run a Seller Net Sheet
          </Link>
        </div>
      </section>
    </>
  );
}
