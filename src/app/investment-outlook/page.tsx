import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/data/seo/outlooks";

export const metadata: Metadata = {
  title: "Central Florida CRE Investment Outlook by Sector (2026)",
  description:
    "Sector-by-sector commercial real estate investment outlooks for Central Florida — NNN, retail, office, industrial, multifamily, and land. Cap rates, rent growth, supply-demand, and forward-looking commentary updated annually.",
  alternates: { canonical: "/investment-outlook" },
};

export default function InvestmentOutlookHubPage() {
  const sectorList = Object.values(sectors);

  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Sector Research
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Central Florida CRE{" "}
            <span className="text-gold">Investment Outlook</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Sector-by-sector commercial real estate investment outlooks for
            Central Florida. Each report covers cap rate snapshots, rent
            growth, supply-demand dynamics, key trends, and forward-looking
            commentary — built for 1031 investors, family offices, and private
            capital evaluating Florida CRE.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/market-reports"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Quarterly Market Reports
            </Link>
            <Link
              href="/cap-rates"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
            >
              Cap Rates by Submarket
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Sectors <span className="text-gold">Covered</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sectorList.map((sector) => {
            const latest = sector.years[0];
            return (
              <div
                key={sector.slug}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-gold text-xl font-bold mb-2">
                  {sector.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>
                <div className="space-y-2">
                  {sector.years.map((y) => (
                    <Link
                      key={y.year}
                      href={`/investment-outlook/${sector.slug}/${y.year}`}
                      className="block bg-dark/40 border border-white/10 hover:border-gold/40 rounded-lg px-4 py-3 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold group-hover:text-gold transition-colors">
                          {sector.name} Outlook {y.year}
                        </span>
                        <span className="text-gold text-sm">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
                {latest && (
                  <p className="mt-4 text-xs text-gray-500 italic">
                    Latest topline: {latest.summary.slice(0, 140)}
                    {latest.summary.length > 140 ? "…" : ""}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">
          How These <span className="text-gold">Outlooks Are Built</span>
        </h2>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            Each sector outlook synthesizes broker observations, recent
            transactions, tenant leasing activity, and public market data into
            a single forward-looking view. Cap rate ranges reflect actively
            trading product across Central Florida. Rent growth figures
            reference observed new-lease comps.
          </p>
          <p>
            Outlooks are updated annually as market conditions shift. For a
            property-specific or deal-level opinion — rather than a sector
            view —{" "}
            <Link href="/contact" className="text-gold hover:underline">
              contact MaxLife Realty
            </Link>{" "}
            for underwriting assistance.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Related <span className="text-gold">Tools</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/cap-rate-calculator"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">Cap Rate Calculator</h3>
            <p className="text-gray-300 text-sm">
              Run cap rates and NOI analysis on any property.
            </p>
          </Link>
          <Link
            href="/deal-analyzer"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">
              Commercial Deal Analyzer
            </h3>
            <p className="text-gray-300 text-sm">
              Full underwriting calculator — cap rate, cash-on-cash, IRR.
            </p>
          </Link>
          <Link
            href="/1031-timeline-calculator"
            className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-5 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-2">
              1031 Timeline Calculator
            </h3>
            <p className="text-gray-300 text-sm">
              Plan your 45-day identification and 180-day close deadlines.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
