import type { Metadata } from "next";
import Link from "next/link";
import { submarkets } from "@/data/seo/submarkets";

export const metadata: Metadata = {
  title: "Orlando Commercial Real Estate Cap Rates by Submarket (2026)",
  description:
    "Current cap rates for Orlando and Central Florida commercial real estate, broken down by submarket and property type — retail, office, industrial, multifamily, medical, and NNN. Updated quarterly.",
  alternates: { canonical: "/cap-rates" },
};

export default function CapRatesHubPage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Cap Rate Research
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Orlando Commercial Real Estate{" "}
            <span className="text-gold">Cap Rates by Submarket</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Current cap rate ranges for Central Florida commercial real estate,
            broken out by submarket and property type — retail, office,
            industrial, multifamily, medical office, and NNN. Ranges reflect
            actively trading product and broker observations across{" "}
            {submarkets.length} key submarkets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/cap-rate-calculator"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Cap Rate Calculator
            </Link>
            <Link
              href="/market-reports"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
            >
              Quarterly Market Reports
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Submarkets <span className="text-gold">Covered</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {submarkets.map((s) => (
            <Link
              key={s.slug}
              href={`/cap-rates/${s.slug}`}
              className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-xl p-5 transition-colors group"
            >
              <h3 className="text-white text-lg font-semibold group-hover:text-gold transition-colors mb-2">
                {s.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {s.summary}
              </p>
              <p className="mt-3 text-gold text-xs font-medium">
                View cap rates →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">
          How to <span className="text-gold">Use This Data</span>
        </h2>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            Cap rates vary significantly by submarket, tenant credit, lease
            structure, and property condition. The ranges shown on each
            submarket page reflect actively trading product and should be used
            as a starting point for underwriting, not as a substitute for
            comp-based valuation.
          </p>
          <p>
            For a specific property valuation or a deal-level cap rate opinion,{" "}
            <Link href="/contact" className="text-gold hover:underline">
              contact MaxLife Realty
            </Link>{" "}
            — we underwrite deals across all Central Florida submarkets and can
            produce a property-specific cap rate memo within 48 hours.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Related <span className="text-gold">Research</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/investment-outlook"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">
              Sector Investment Outlooks
            </h3>
            <p className="text-gray-300 text-sm">
              NNN, retail, office, industrial, multifamily, and land outlooks
              by year.
            </p>
          </Link>
          <Link
            href="/market-reports"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">
              Quarterly Market Reports
            </h3>
            <p className="text-gray-300 text-sm">
              Detailed Orlando-metro quarterly reports with absorption, rent,
              and pricing trends.
            </p>
          </Link>
          <Link
            href="/blog"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">CRE Insights Blog</h3>
            <p className="text-gray-300 text-sm">
              In-depth articles on Central Florida CRE trends, tenant types,
              and investment strategy.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
