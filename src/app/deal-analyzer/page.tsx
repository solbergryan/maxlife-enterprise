import type { Metadata } from "next";
import DealAnalyzer from "@/components/DealAnalyzer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Real Estate Deal Analyzer | Free CRE Underwriting Calculator Orlando",
  description:
    "Free commercial real estate deal analyzer and underwriting calculator. Score NNN, multifamily & SFR deals with IRR, DSCR, cash-on-cash, equity multiple analysis. Built for Orlando & Central Florida investors.",
  keywords: [
    "commercial real estate calculator",
    "CRE deal analyzer",
    "NNN investment calculator",
    "cap rate calculator",
    "DSCR calculator",
    "IRR calculator",
    "commercial real estate underwriting",
    "Orlando commercial real estate",
    "Central Florida investment properties",
    "multifamily investment calculator",
    "real estate deal scoring",
  ],
  openGraph: {
    title: "Free CRE Deal Analyzer | MaxLife Development",
    description:
      "Underwrite commercial real estate deals in seconds. Score NNN, multifamily & SFR investments with institutional-grade metrics — IRR, DSCR, cash-on-cash, equity multiple, and sensitivity analysis.",
  },
};

export default function DealAnalyzerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Deal <span className="text-gold">Analyzer</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg mb-6">
            Institutional-grade underwriting in seconds. Score any commercial NNN,
            multifamily, or SFR rental deal with the same metrics used by
            professional investors — IRR, DSCR, cash-on-cash, equity multiple,
            and full sensitivity analysis.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Real-time calculations
            </span>
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Deal scoring & grading
            </span>
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Sensitivity analysis
            </span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <DealAnalyzer />
      </section>

      {/* How It Works */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            How the Deal Analyzer Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-gold text-3xl font-bold mb-3">01</div>
              <h3 className="text-white font-semibold mb-2">Enter Your Deal</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Input the purchase price, rent, financing terms, and hold period.
                Choose from commercial NNN, multifamily, or single-family rental
                property types.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">02</div>
              <h3 className="text-white font-semibold mb-2">Get Instant Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The calculator runs a full underwriting analysis — computing IRR,
                DSCR, cash-on-cash return, equity multiple, year-by-year cash flows,
                and exit valuation in real time.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">03</div>
              <h3 className="text-white font-semibold mb-2">Score & Compare</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every deal gets a letter grade and star ratings across four key
                metrics. Traffic-light benchmarks show exactly where the deal
                passes or falls short. Use the sensitivity matrix to stress-test
                your assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Targets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          What Makes a Good Deal?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-gray-400 text-xs uppercase">
                <th className="text-left py-3 pr-4">Metric</th>
                <th className="text-left py-3 px-4">What It Measures</th>
                <th className="text-left py-3 pl-4">Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border text-sm">
              {[
                ["IRR", "Annualized return on equity, timing-adjusted", "> 12% strong, > 8% acceptable"],
                ["Equity Multiple", "Total returned / total invested", "> 2.0x excellent, > 1.5x good"],
                ["Cash-on-Cash", "Annual cash flow / equity invested", "> 8% strong, > 5% acceptable"],
                ["DSCR", "NOI / annual mortgage payment", "> 1.25 lender min, > 1.35 preferred"],
                ["Cap Rate", "NOI / property value (no debt)", "Market-dependent — know your submarket"],
                ["Yield on Cost", "Year 1 NOI / purchase price", "Should beat your target cap rate"],
                ["NOI", "Rent minus operating expenses", "Must exceed annual debt service"],
              ].map(([metric, desc, target]) => (
                <tr key={metric}>
                  <td className="py-3 pr-4 text-gold font-medium">{metric}</td>
                  <td className="py-3 px-4 text-gray-400">{desc}</td>
                  <td className="py-3 pl-4 text-white">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Found a Deal Worth Pursuing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team underwrites every deal with institutional-grade analysis.
            Let us help you evaluate your next commercial real estate investment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/opportunities"
              className="px-8 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-dark transition-colors"
            >
              View Current Opportunities
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-dark-border text-white font-semibold rounded-lg hover:border-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
