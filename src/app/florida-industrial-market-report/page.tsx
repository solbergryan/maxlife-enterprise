import type { Metadata } from "next";
import Link from "next/link";
import FloridaIndustrialReportForm from "@/components/FloridaIndustrialReportForm";

const BASE_URL = "https://maxlifedevelopment.com";

export const metadata: Metadata = {
  title: "Free Florida Industrial Market Report 2026 | MaxLife Realty",
  description:
    "Download the free Florida industrial market report — vacancy rates, asking rents, and submarket breakdowns for Jacksonville, Lakeland, Orlando, and Tampa.",
  alternates: { canonical: `${BASE_URL}/florida-industrial-market-report` },
};

const stats = [
  { market: "Jacksonville", vacancy: "5.2%", rent: "$8.75/sf", trend: "↑ 5.1%" },
  { market: "Lakeland / I-4", vacancy: "4.1%", rent: "$8–12/sf", trend: "↑ 6.2%" },
  { market: "Orlando", vacancy: "5.8%", rent: "$9.50–13/sf", trend: "↑ 5.6%" },
  { market: "Tampa / Port", vacancy: "5.5%", rent: "$9–11.50/sf", trend: "↑ 4.8%" },
];

export default function FloridaIndustrialMarketReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">Free Market Report</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Florida Industrial Market Report{" "}
                <span className="text-gold">2026</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Vacancy rates, asking rents, rent growth trends, and submarket breakdowns for Jacksonville, Lakeland, Orlando, and Tampa — the four markets driving Florida&apos;s logistics boom.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "4-market vacancy and rent analysis",
                  "Submarket-by-submarket breakdown",
                  "Build-to-suit vs. lease economics",
                  "Cap rate trends for industrial investors",
                  "Q2 2026 outlook",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm">Free. No credit card. Unsubscribe anytime.</p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8">
              <FloridaIndustrialReportForm />
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">What&apos;s Inside</h2>
        <p className="text-gray-400 mb-8">A preview of the market data in the report.</p>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gold text-xs uppercase tracking-wider pb-3 pr-6">Market</th>
                <th className="text-left text-gray-300 text-xs uppercase tracking-wider pb-3 pr-6">Vacancy</th>
                <th className="text-left text-gray-300 text-xs uppercase tracking-wider pb-3 pr-6">Avg Asking Rent (NNN)</th>
                <th className="text-left text-gray-300 text-xs uppercase tracking-wider pb-3">YOY Rent Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {stats.map((row) => (
                <tr key={row.market}>
                  <td className="py-3 pr-6 text-white font-medium">{row.market}</td>
                  <td className="py-3 pr-6 text-gray-300">{row.vacancy}</td>
                  <td className="py-3 pr-6 text-gray-300">{row.rent}</td>
                  <td className="py-3 text-gold font-semibold">{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-600 text-xs mt-3">Industry estimates — directional, not audited.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "For 3PLs & Operators", desc: "Market-by-market availability, asking rents, and how to move fast in a tight market." },
            { title: "For Investors", desc: "Cap rate trends, NOI growth projections, and where institutional capital is moving in Florida industrial." },
            { title: "For Developers", desc: "Land pricing, build-to-suit economics, and where absorption is strongest for new development." },
          ].map((card) => (
            <div key={card.title} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Ryan */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <span className="text-gold font-bold text-lg">RS</span>
            </div>
            <div>
              <p className="text-white font-semibold">Ryan Solberg</p>
              <p className="text-gray-400 text-sm">Florida Real Estate Broker (BK3354351) · (321) 586-2121 · Ryan@MaxLifeRealty.com</p>
              <p className="text-gray-400 text-sm mt-1">Specializing in logistics and industrial tenant rep across Jacksonville, Lakeland, and Orlando.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-4">
        <Link href="/industries/logistics-distribution" className="text-gold hover:underline text-sm">Logistics Real Estate →</Link>
        <Link href="/blog/industrial-space-for-lease-jacksonville-florida" className="text-gray-400 hover:text-gold text-sm transition-colors">Jacksonville Industrial Guide →</Link>
        <Link href="/blog/lakeland-florida-warehouse-space-i4-corridor" className="text-gray-400 hover:text-gold text-sm transition-colors">Lakeland Warehouse Guide →</Link>
      </section>
    </>
  );
}
