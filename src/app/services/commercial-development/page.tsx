import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Development | MaxLife Development",
  description:
    "NNN build-to-suit commercial development in Florida. Ground-up construction of single-tenant net lease properties for national credit tenants. Site selection through disposition.",
};

const phases = [
  {
    step: "01",
    title: "Site Identification",
    description:
      "Source land parcels in high-growth Florida corridors through broker relationships, off-market deals, and municipal planning data. Target sites with strong traffic counts, favorable zoning, and proximity to residential rooftops.",
  },
  {
    step: "02",
    title: "Tenant Procurement",
    description:
      "Engage national and regional tenant representatives to match sites with active expansion programs. Secure a Letter of Intent (LOI) and negotiate lease terms before committing to land acquisition.",
  },
  {
    step: "03",
    title: "Due Diligence & Entitlements",
    description:
      "Conduct environmental (Phase I), geotechnical, and survey work. Secure zoning approvals, site plan approval, and building permits. Land purchase agreements are contingent on entitlement milestones.",
  },
  {
    step: "04",
    title: "Construction",
    description:
      "Engage qualified general contractors through competitive bidding. Manage timelines, budgets, and quality using guaranteed maximum price (GMP) contracts. Target 6- to 9-month build cycles.",
  },
  {
    step: "05",
    title: "Lease Commencement",
    description:
      "Deliver the completed building to the tenant, trigger lease commencement, and confirm rent payment. Obtain certificate of occupancy and stabilize the asset for sale.",
  },
  {
    step: "06",
    title: "Disposition",
    description:
      "Market the stabilized, income-producing asset to 1031 exchange buyers, private investors, and institutional capital. Price at market cap rates to achieve the target development spread.",
  },
];

const tenantCategories = [
  {
    category: "QSR / Fast Food",
    tenants: "Chick-fil-A, McDonald's, Starbucks, Taco Bell, Popeyes",
    capRate: "4.75% - 5.75%",
    term: "15 - 20 years",
  },
  {
    category: "Dollar / Discount",
    tenants: "Dollar General, Dollar Tree, Family Dollar",
    capRate: "5.50% - 6.75%",
    term: "10 - 15 years",
  },
  {
    category: "Auto Parts",
    tenants: "AutoZone, O'Reilly, Advance Auto Parts",
    capRate: "5.25% - 6.50%",
    term: "15 - 20 years",
  },
  {
    category: "Convenience / Gas",
    tenants: "7-Eleven, Wawa, RaceTrac",
    capRate: "4.50% - 5.75%",
    term: "15 - 20 years",
  },
  {
    category: "Medical / Healthcare",
    tenants: "DaVita, Fresenius, Urgent Care, Dental",
    capRate: "6.00% - 7.25%",
    term: "10 - 20 years",
  },
  {
    category: "Pharmacy",
    tenants: "Walgreens, CVS",
    capRate: "5.50% - 7.00%",
    term: "20 - 25 years",
  },
];

const targetMarkets = [
  {
    market: "Orlando / Kissimmee",
    growth: "Strong (2%+)",
    capRate: "5.25% - 5.75%",
    appeal: "I-4 corridor, population boom",
  },
  {
    market: "Tampa / Lakeland",
    growth: "Strong (1.8%+)",
    capRate: "5.50% - 6.00%",
    appeal: "Suburban expansion, I-4 east corridor",
  },
  {
    market: "Jacksonville",
    growth: "Moderate-Strong",
    capRate: "5.75% - 6.25%",
    appeal: "Affordable land, logistics hub",
  },
  {
    market: "Cape Coral / Ft. Myers",
    growth: "Strong",
    capRate: "5.50% - 6.00%",
    appeal: "SW Florida growth corridor",
  },
  {
    market: "Ocala / The Villages",
    growth: "Very Strong",
    capRate: "6.00% - 6.50%",
    appeal: "Retirement migration, retail underserved",
  },
  {
    market: "Port St. Lucie",
    growth: "Strong",
    capRate: "5.75% - 6.25%",
    appeal: "Affordable SE Florida alternative",
  },
];

const riskItems = [
  {
    risk: "Construction Overruns",
    mitigation:
      "GMP contracts with 5% contingency and experienced GC vetting",
  },
  {
    risk: "Tenant LOI Falls Through",
    mitigation:
      "No land closing without executed lease; diversified tenant pipeline",
  },
  {
    risk: "Interest Rate Movement",
    mitigation:
      "Locked construction rates; underwrite at conservative cap rates",
  },
  {
    risk: "Cap Rate Expansion",
    mitigation:
      "Underwrite 25-50 bps above current market for downside protection",
  },
  {
    risk: "Entitlement Delays",
    mitigation:
      "Preference for pre-zoned sites; experienced land-use counsel",
  },
];

export default function CommercialDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/services"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                Development Services
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                NNN Build-to-Suit Development
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                Ground-up construction of single-tenant, triple net leased
                commercial properties across Florida. From site selection through
                disposition — we control the entire development cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          The <span className="text-gold">Opportunity</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: "300K+", label: "Net new Florida residents annually" },
            { stat: "20%", label: "Projected YoY increase in 1031 exchange volume" },
            { stat: "6.0-7.0%", label: "Current NNN cap rates (vs. 5.0% pre-2022)" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-gold mb-2">{item.stat}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          Florida&apos;s explosive growth, rising 1031 exchange activity, and
          expanded cap rates create the ideal window for NNN build-to-suit
          development. By controlling the development process from land
          acquisition through tenant placement and construction, we capture the
          full development spread between all-in cost basis and market valuation
          at stabilized cap rates.
        </p>
      </section>

      {/* Six-Phase Development Cycle */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Six-Phase <span className="text-gold">Development Cycle</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.step} className="relative bg-dark border border-dark-border rounded-xl p-6">
                <div className="text-4xl font-bold text-gold/15 absolute top-4 right-4">
                  {phase.step}
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6">
            Each project is held in a single-purpose LLC. No land closing
            without an executed lease. GMP contracts cap construction risk.
          </p>
        </div>
      </section>

      {/* Pro Forma Example */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Representative <span className="text-gold">Pro Forma</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Development Cost
            </h3>
            <div className="space-y-3">
              {[
                { item: "Land Acquisition", amount: "$350,000" },
                { item: "Site Work & Utilities", amount: "$175,000" },
                { item: "Vertical Construction (9,100 SF)", amount: "$1,092,000" },
                { item: "Soft Costs (Arch, Eng, Permits)", amount: "$135,000" },
                { item: "Financing Costs", amount: "$85,000" },
                { item: "Contingency (5%)", amount: "$92,000" },
              ].map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-400">{row.item}</span>
                  <span className="text-white font-medium">{row.amount}</span>
                </div>
              ))}
              <div className="border-t border-dark-border pt-3 flex items-center justify-between">
                <span className="text-white font-semibold">
                  Total Development Cost
                </span>
                <span className="text-gold font-bold text-lg">$1,929,000</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Returns
            </h3>
            <div className="space-y-3">
              {[
                { item: "Annual NNN Rent", amount: "$130,000" },
                { item: "Sale Cap Rate", amount: "6.00%" },
                { item: "Disposition Price", amount: "$2,166,667" },
              ].map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-400">{row.item}</span>
                  <span className="text-white font-medium">{row.amount}</span>
                </div>
              ))}
              <div className="border-t border-dark-border pt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    Gross Development Profit
                  </span>
                  <span className="text-gold font-bold text-lg">$237,667</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Profit Margin on Cost</span>
                  <span className="text-gold font-medium">12.3%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Annualized ROE (14-month cycle)
                  </span>
                  <span className="text-gold font-medium">10.5%</span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              150-250 bps development spread | 20-35% profit margins | 12-18
              month cycle
            </p>
          </div>
        </div>
      </section>

      {/* Tenant Mix */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Diversified <span className="text-gold">Tenant Mix</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tenantCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-dark border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">
                  {cat.category}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{cat.tenants}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gold font-medium">
                    Cap: {cat.capRate}
                  </span>
                  <span className="text-gray-500">Term: {cat.term}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Target Markets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Florida <span className="text-gold">Target Markets</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border text-left">
                <th className="text-gold font-semibold uppercase tracking-wider text-xs pb-3 pr-6">
                  Market
                </th>
                <th className="text-gold font-semibold uppercase tracking-wider text-xs pb-3 pr-6">
                  Growth
                </th>
                <th className="text-gold font-semibold uppercase tracking-wider text-xs pb-3 pr-6">
                  Cap Rate
                </th>
                <th className="text-gold font-semibold uppercase tracking-wider text-xs pb-3">
                  Key Appeal
                </th>
              </tr>
            </thead>
            <tbody>
              {targetMarkets.map((m) => (
                <tr
                  key={m.market}
                  className="border-b border-dark-border/50"
                >
                  <td className="text-white font-medium py-3 pr-6">
                    {m.market}
                  </td>
                  <td className="text-gray-400 py-3 pr-6">{m.growth}</td>
                  <td className="text-gold py-3 pr-6">{m.capRate}</td>
                  <td className="text-gray-400 py-3">{m.appeal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          Strategy: Primary metros for tighter cap rates and liquidity.
          Secondary markets for higher yields and lower land basis.
        </p>
      </section>

      {/* Risk Mitigation */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Risk <span className="text-gold">Mitigation</span>
          </h2>
          <div className="space-y-4">
            {riskItems.map((item) => (
              <div
                key={item.risk}
                className="bg-dark border border-dark-border rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <span className="text-white font-semibold sm:w-56 shrink-0">
                  {item.risk}
                </span>
                <span className="text-gray-400 text-sm">
                  {item.mitigation}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Multiple exit strategies: sell at stabilization, hold for income,
            portfolio sale, or refinance and distribute.
          </p>
        </div>
      </section>

      {/* Download Business Plan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-card border border-gold/30 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            NNN Build-to-Suit Business Plan
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Download our comprehensive business plan covering the full
            development model, pro forma economics, tenant requirements, target
            markets, financial projections, and risk mitigation strategy.
          </p>
          <a
            href="/NNN_Business_Plan.pdf"
            download
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Download Business Plan (PDF)
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in NNN Development?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether you&apos;re an investor, landowner, or tenant looking for a
            build-to-suit partner in Florida — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
