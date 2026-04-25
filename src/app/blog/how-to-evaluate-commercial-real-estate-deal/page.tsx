import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import BlogLeadCapture from "@/components/BlogLeadCapture";

export const metadata: Metadata = {
  title:
    "How to Evaluate a Commercial Real Estate Deal | MaxLife",
  description:
    "Learn how to evaluate commercial real estate deals using cap rate, NOI, DSCR, cash-on-cash return, and more. Complete CRE analysis framework for investors.",
  openGraph: {
    title: "How to Evaluate a Commercial Real Estate Deal",
    description:
      "Learn how to evaluate commercial real estate deals using cap rate, NOI, DSCR, cash-on-cash return, and more. Complete CRE analysis framework for investors.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maxlifedevelopment.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://maxlifedevelopment.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Evaluate a Commercial Real Estate Deal", item: "https://maxlifedevelopment.com/blog/how-to-evaluate-commercial-real-estate-deal" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Evaluate a Commercial Real Estate Deal",
  author: { "@type": "Person", name: "Ryan Solberg" },
  publisher: { "@type": "Organization", name: "MaxLife Realty" },
  datePublished: "2026-04-01",
  description:
    "Learn how to evaluate commercial real estate deals using cap rate, NOI, DSCR, cash-on-cash return, and more. Complete CRE analysis framework for investors.",
};

export default function HowToEvaluateCommercialRealEstateDeal() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <section className="relative overflow-hidden border-b border-white/10 aspect-[21/6]">
        <Image
          src="/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-full-hd-wallpaper-building-facade-21883.webp"
          alt="Evaluating a commercial real estate office deal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
      </section>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-gold hover:underline text-sm mb-6 inline-flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
              Investor Education
            </span>
            <span className="text-gray-500 text-sm">April 2026</span>
            <span className="text-gray-600 text-sm">
              &middot; 16 min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Evaluate a Commercial Real Estate Deal: The Complete
            Investor&apos;s Framework
          </h1>
          <p className="text-gray-300 text-lg">
            A step-by-step guide to analyzing commercial property investments
            using the metrics, ratios, and due diligence processes that
            institutional investors rely on. From cap rate to DSCR, tenant
            credit to lease analysis, this is the framework you need.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* ── 1. Introduction ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why a Systematic Evaluation Framework Matters
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Commercial real estate investing is not a game of gut instinct. The
              most successful CRE investors use a disciplined, systematic approach
              to evaluate every deal they consider, and they walk away from far
              more opportunities than they pursue. The difference between a good
              investment and a costly mistake often comes down to the rigor of the
              analysis performed before the purchase agreement is signed.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Unlike residential real estate, where comparable sales are the
              primary valuation method, commercial properties are valued primarily
              on their income-producing potential. This means the evaluation
              process is fundamentally different. You are not just buying a
              building — you are buying a stream of cash flows, and the quality,
              durability, and growth potential of those cash flows determines the
              value of the investment. Understanding how to properly analyze those
              cash flows, and the risks that could impair them, is the foundation
              of commercial real estate investing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This guide walks through every major metric, ratio, and analytical
              framework used by professional CRE investors. Whether you are
              evaluating your first commercial property or your fiftieth, this
              systematic approach will help you make better decisions and avoid
              the most common pitfalls that trap inexperienced investors. Use our{" "}
              <Link href="/deal-analyzer" className="text-gold hover:underline">
                deal analyzer tool
              </Link>{" "}
              to run these calculations on any property you are considering.
            </p>
          </section>

          {/* ── 2. Net Operating Income ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Net Operating Income (NOI): The Foundation of CRE Valuation
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Net Operating Income is the single most important number in
              commercial real estate analysis. NOI represents the property&apos;s
              total revenue minus all operating expenses, before debt service and
              capital expenditures. Every other metric in this guide either derives
              from or relates back to NOI, so getting this number right is
              essential.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Calculating NOI requires a thorough understanding of both the
              revenue and expense sides of the property&apos;s operations. On the
              revenue side, you need to account for all sources of income: base
              rent, percentage rent, CAM reimbursements, parking income, storage
              income, antenna or billboard revenue, and any other miscellaneous
              income the property generates. You also need to subtract vacancy and
              collection loss — the amount of potential revenue that is lost due to
              unoccupied space and tenants who fail to pay.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              On the expense side, operating expenses include property taxes,
              insurance, utilities, management fees, maintenance and repairs,
              landscaping, common area maintenance, and any other costs required
              to operate the property. Operating expenses explicitly exclude debt
              service (mortgage payments), capital expenditures (roof replacement,
              HVAC replacement, parking lot resurfacing), depreciation, and income
              taxes. These items are important in the overall investment analysis
              but are not part of the NOI calculation.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-4">
              <h4 className="text-gold font-semibold mb-2">NOI Formula</h4>
              <p className="text-white font-mono text-sm mb-3">
                NOI = Gross Potential Income - Vacancy Loss - Operating Expenses
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Example:</strong> A 10,000 SF retail property
                leased at $25/SF NNN generates $250,000 in gross potential income.
                At 5% vacancy, effective gross income is $237,500. After $12,000 in
                non-reimbursable operating expenses, NOI is $225,500.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Common NOI Mistakes to Avoid
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The most common error in NOI analysis is using the seller&apos;s
              pro forma numbers without verification. Sellers naturally present
              the most optimistic view of their property&apos;s income, and pro
              forma projections frequently overstate revenue and understate
              expenses. Always reconstruct NOI from source documents: actual
              leases, tax bills, insurance policies, utility bills, and
              maintenance contracts. The gap between pro forma NOI and actual
              trailing NOI can be substantial, and it directly affects the true
              value of the property.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Another critical mistake is failing to normalize expenses. A seller
              who has self-managed the property may show artificially low
              management costs. A property with a recently reassessed tax value
              may show lower property taxes than a new buyer will actually pay.
              Insurance costs may be understated if the current owner is part of a
              larger portfolio policy. Adjusting for these normalization items
              ensures your NOI reflects the true cost of ownership.
            </p>
          </section>

          {/* ── 3. Cap Rate ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Capitalization Rate (Cap Rate): Measuring Return and Risk
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The capitalization rate is the most widely used metric in commercial
              real estate. It represents the relationship between a property&apos;s
              NOI and its purchase price or market value. The cap rate is
              calculated by dividing the annual NOI by the purchase price, expressed
              as a percentage. A property generating $100,000 in NOI purchased for
              $1,500,000 has a cap rate of 6.67%.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cap rates serve two functions. First, they provide a standardized
              way to compare the relative value of different properties. A 7.0%
              cap rate retail property in Clermont can be meaningfully compared to
              a 5.5% cap rate retail property in Winter Park because the metric
              normalizes for differences in property size, price, and income.
              Second, cap rates reflect the market&apos;s perception of risk. Lower
              cap rates indicate lower perceived risk (and higher demand), while
              higher cap rates indicate higher perceived risk. For a deeper dive,
              read our{" "}
              <Link href="/blog/orlando-cap-rates-investor-guide" className="text-gold hover:underline">
                Orlando cap rates investor guide
              </Link>.
            </p>

            {/* Cap rate comparison table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold font-semibold py-3 pr-4">Property Type</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Typical Cap Rate</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Risk Level</th>
                    <th className="text-left text-gold font-semibold py-3">Typical Investor</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Single-Tenant NNN (Credit)</td>
                    <td className="py-3 pr-4">5.0% - 6.5%</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3">1031 Exchange / Passive</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Multi-Tenant Retail</td>
                    <td className="py-3 pr-4">6.5% - 8.0%</td>
                    <td className="py-3 pr-4">Moderate</td>
                    <td className="py-3">Active / Value-Add</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Medical Office</td>
                    <td className="py-3 pr-4">6.0% - 7.5%</td>
                    <td className="py-3 pr-4">Low - Moderate</td>
                    <td className="py-3">Income / Institutional</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Industrial / Warehouse</td>
                    <td className="py-3 pr-4">5.5% - 7.5%</td>
                    <td className="py-3 pr-4">Low - Moderate</td>
                    <td className="py-3">Institutional / REIT</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Office (Suburban)</td>
                    <td className="py-3 pr-4">7.0% - 9.0%</td>
                    <td className="py-3 pr-4">Moderate - High</td>
                    <td className="py-3">Value-Add / Opportunistic</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Multifamily</td>
                    <td className="py-3 pr-4">5.0% - 6.5%</td>
                    <td className="py-3 pr-4">Low</td>
                    <td className="py-3">Institutional / Syndicator</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Going-In Cap Rate vs. Exit Cap Rate
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sophisticated investors think about cap rates in two dimensions.
              The going-in cap rate is the yield at purchase based on current NOI.
              The exit cap rate is the assumed yield at the time of sale, which
              directly affects the projected sale price. If you buy a property at
              a 7.0% cap rate and sell it five years later at a 6.5% cap rate (cap
              rate compression), the property has appreciated beyond just the NOI
              growth — you have benefited from both income growth and valuation
              multiple expansion. Conversely, if cap rates expand to 7.5% at exit,
              the property may be worth less than you paid even if NOI has grown.
            </p>
          </section>

          {/* ── 4. Cash-on-Cash Return ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Cash-on-Cash Return: Measuring Actual Equity Returns
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While cap rate measures the unlevered return of a property,
              cash-on-cash return measures the actual return on the equity you
              invest. This metric is critically important because most commercial
              real estate purchases are financed with debt, and the impact of
              leverage on returns can be dramatic — in both directions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cash-on-cash return is calculated by dividing the annual pre-tax
              cash flow (NOI minus debt service) by the total cash invested
              (down payment plus closing costs, loan fees, and any immediate
              capital expenditures). A property that generates $50,000 in annual
              cash flow after debt service on a $400,000 total cash investment
              has a cash-on-cash return of 12.5%.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-4">
              <h4 className="text-gold font-semibold mb-2">Cash-on-Cash Formula</h4>
              <p className="text-white font-mono text-sm mb-3">
                Cash-on-Cash = Annual Pre-Tax Cash Flow / Total Cash Invested
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Example:</strong> $2M purchase with 25% down
                ($500K), $25K closing costs. NOI of $140,000 minus $95,000 annual
                debt service = $45,000 cash flow. Cash-on-cash: $45,000 / $525,000
                = 8.57%.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gold mb-2">
              The Leverage Effect on Cash-on-Cash Returns
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The relationship between cap rate and interest rate determines
              whether leverage helps or hurts your returns. When the cap rate
              exceeds the cost of debt (positive leverage), increasing leverage
              increases your cash-on-cash return. When the cost of debt exceeds
              the cap rate (negative leverage), borrowing actually reduces your
              return below what you would earn with an all-cash purchase. In
              today&apos;s interest rate environment, understanding this dynamic
              is essential.
            </p>

            {/* Leverage comparison */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold font-semibold py-3 pr-4">Scenario</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Cap Rate</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Mortgage Rate</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">LTV</th>
                    <th className="text-left text-gold font-semibold py-3">Cash-on-Cash</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">All Cash</td>
                    <td className="py-3 pr-4">7.0%</td>
                    <td className="py-3 pr-4">N/A</td>
                    <td className="py-3 pr-4">0%</td>
                    <td className="py-3">7.0%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Positive Leverage</td>
                    <td className="py-3 pr-4">7.0%</td>
                    <td className="py-3 pr-4">5.5%</td>
                    <td className="py-3 pr-4">65%</td>
                    <td className="py-3">9.8%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Neutral Leverage</td>
                    <td className="py-3 pr-4">7.0%</td>
                    <td className="py-3 pr-4">7.0%</td>
                    <td className="py-3 pr-4">65%</td>
                    <td className="py-3">7.0%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Negative Leverage</td>
                    <td className="py-3 pr-4">7.0%</td>
                    <td className="py-3 pr-4">8.0%</td>
                    <td className="py-3 pr-4">65%</td>
                    <td className="py-3">5.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 5. DSCR ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Debt Service Coverage Ratio (DSCR): The Lender&apos;s Metric
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Debt Service Coverage Ratio measures how much cushion exists
              between the property&apos;s NOI and the required debt payments. It
              is calculated by dividing NOI by the annual debt service (principal
              plus interest). A DSCR of 1.25x means the property generates 25%
              more income than needed to service the debt. Most commercial lenders
              require a minimum DSCR of 1.20x to 1.30x, and some require higher
              ratios for riskier property types.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              DSCR is not just a lender requirement — it is a critical risk metric
              for investors as well. A property with a 1.10x DSCR is running on
              thin margins. Any decline in occupancy, unexpected expense, or tenant
              default could push the property into negative cash flow, forcing the
              owner to inject capital or risk default. Conversely, a property with
              a 1.50x DSCR has substantial cushion to absorb downturns without
              distress.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { metric: "< 1.0x", label: "Negative Cash Flow" },
                { metric: "1.0x - 1.2x", label: "Tight / Risky" },
                { metric: "1.2x - 1.4x", label: "Adequate / Standard" },
                { metric: "> 1.4x", label: "Strong / Conservative" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center"
                >
                  <p className="text-gold font-bold text-xl mb-1">
                    {item.metric}
                  </p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              When evaluating a deal, always stress-test the DSCR under adverse
              scenarios. What happens to DSCR if the largest tenant vacates? What
              if operating expenses increase 10%? What if the property sits at 80%
              occupancy for a year during lease-up? If the DSCR drops below 1.0x
              in any reasonable stress scenario, you need to understand how you
              would fund the shortfall and whether the investment still makes sense.
            </p>
          </section>

          {/* ── 6. Price Per Square Foot ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Price Per Square Foot: The Replacement Cost Benchmark
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Price per square foot is a straightforward metric that divides the
              purchase price by the total building area (or in the case of land,
              by the total lot area). While it should never be the primary basis
              for a purchase decision, price per square foot serves as a useful
              sanity check and comparison tool, particularly when benchmarked
              against replacement cost.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Replacement cost is the estimated cost to build the same property
              from scratch at current construction prices, including land, hard
              costs, soft costs, and developer profit. If you can acquire an
              existing, income-producing property at a significant discount to
              replacement cost, you have a built-in margin of safety. It would be
              uneconomical for a competitor to build a competing property next door,
              which protects your competitive position and supports long-term value.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold font-semibold py-3 pr-4">Property Type</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Avg Purchase Price/SF</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Replacement Cost/SF</th>
                    <th className="text-left text-gold font-semibold py-3">Discount to Replacement</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Retail Strip Center</td>
                    <td className="py-3 pr-4">$180 - $280</td>
                    <td className="py-3 pr-4">$250 - $350</td>
                    <td className="py-3">15% - 30%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Medical Office</td>
                    <td className="py-3 pr-4">$220 - $350</td>
                    <td className="py-3 pr-4">$300 - $450</td>
                    <td className="py-3">10% - 25%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Industrial / Flex</td>
                    <td className="py-3 pr-4">$100 - $180</td>
                    <td className="py-3 pr-4">$130 - $200</td>
                    <td className="py-3">10% - 25%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Suburban Office</td>
                    <td className="py-3 pr-4">$130 - $220</td>
                    <td className="py-3 pr-4">$250 - $350</td>
                    <td className="py-3">25% - 45%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 7. Vacancy Rates ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Vacancy Rate Analysis: Current, Historical, and Market
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vacancy analysis is one of the most underappreciated aspects of deal
              evaluation. Inexperienced investors often accept the current vacancy
              rate at face value without considering the broader context. A
              property that is 95% occupied may seem safe, but if the market
              vacancy rate is 98% and the property&apos;s largest tenant&apos;s
              lease expires in 18 months, the risk profile changes dramatically.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Proper vacancy analysis requires examining three dimensions: the
              property&apos;s current and historical vacancy, the submarket vacancy
              rate for the specific property type, and the vacancy trend (is the
              market tightening or loosening?). You also need to understand the
              lease expiration schedule to forecast future vacancy risk. A property
              where 40% of leases expire within two years carries significantly
              more risk than one where lease expirations are spread evenly over a
              10-year period.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              In the Central Florida market specifically, vacancy rates vary
              widely by submarket and property type. Industrial vacancy remains
              historically tight at 3-5% across the Orlando metro. Retail vacancy
              is healthy at 4-6% in most submarkets but varies significantly by
              corridor. Office vacancy remains elevated at 12-18% as the market
              continues to adjust to post-pandemic demand patterns. Understanding
              these dynamics is essential for calibrating your underwriting
              assumptions.
            </p>
          </section>

          {/* ── 8. Tenant Credit Quality ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Tenant Credit Quality: Underwriting the Income Stream
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The quality and reliability of your rental income is only as good
              as the tenants paying it. Tenant credit analysis is the process of
              evaluating the financial strength, business viability, and payment
              reliability of the tenants in a commercial property. This analysis
              is critical because a lease with a creditworthy tenant is
              fundamentally a different asset than the same lease with a
              financially weak tenant — even if the rental rate is identical.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For investment-grade tenants (publicly traded companies or those
              with credit ratings from Moody&apos;s or S&amp;P), credit analysis
              is relatively straightforward. You can review public financial
              statements, credit ratings, and analyst reports to assess the
              tenant&apos;s financial health. For NNN properties leased to
              investment-grade tenants like Walgreens, Dollar General, or
              Starbucks, the tenant&apos;s corporate credit essentially becomes
              the primary underwriting metric. Learn more about NNN investing in
              our{" "}
              <Link href="/blog/what-is-nnn-lease" className="text-gold hover:underline">
                guide to NNN leases
              </Link>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For local and regional tenants, credit analysis requires more work.
              Request financial statements (at least two to three years of tax
              returns or profit-and-loss statements), check bank references,
              review their payment history with the current landlord, and
              evaluate the overall health of their industry. A local restaurant
              tenant paying $30 per square foot is not equivalent to a Chick-fil-A
              paying the same rate, and your underwriting should reflect this
              difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {[
                {
                  tier: "Investment Grade",
                  examples: "Walgreens, Dollar General, FedEx, Starbucks",
                  risk: "Lowest risk. Cap rate reflects credit quality. Lease is essentially a corporate bond.",
                },
                {
                  tier: "Regional / Franchise",
                  examples: "Multi-unit franchisees, regional medical groups, banks",
                  risk: "Moderate risk. Evaluate operator financials and franchise agreement terms.",
                },
                {
                  tier: "Local / Independent",
                  examples: "Local restaurants, boutiques, professional services",
                  risk: "Highest risk. Require personal guarantees, larger security deposits, shorter lease terms.",
                },
              ].map((item) => (
                <div
                  key={item.tier}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
                >
                  <h4 className="text-gold font-semibold text-sm mb-1">
                    {item.tier}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2">{item.examples}</p>
                  <p className="text-gray-500 text-xs">{item.risk}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 9. Lease Term Analysis ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Lease Term Analysis: Reading Between the Lines
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The lease is the legal document that defines your income stream, and
              understanding every provision is essential. Beyond the headline
              rental rate, a commercial lease contains numerous provisions that
              can significantly impact property value, cash flow, and risk. The
              most important elements to analyze include the lease term and
              renewal options, rent escalation structure, expense responsibility
              (gross, modified gross, or NNN), tenant improvement allowances,
              early termination rights, co-tenancy clauses, and exclusivity
              provisions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Lease term directly affects value. A single-tenant NNN property
              with 15 years remaining on the lease is worth significantly more
              than the same property with 3 years remaining, because the longer
              lease provides greater income certainty. The rule of thumb is that
              every year of remaining lease term adds approximately 25 to 50
              basis points of cap rate compression (lower cap rate = higher
              value). This relationship is why investors pursuing{" "}
              <Link href="/blog/how-to-buy-commercial-property-orlando" className="text-gold hover:underline">
                commercial property purchases in Orlando
              </Link>{" "}
              pay close attention to remaining lease term.
            </p>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Critical Lease Provisions to Review
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold font-semibold py-3 pr-4">Provision</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">What to Look For</th>
                    <th className="text-left text-gold font-semibold py-3">Impact on Value</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Rent Escalations</td>
                    <td className="py-3 pr-4">Fixed $ increases, CPI-based, or percentage bumps</td>
                    <td className="py-3">Built-in NOI growth. 2-3% annual bumps are standard.</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Renewal Options</td>
                    <td className="py-3 pr-4">Number of options, renewal rental rate (fair market or fixed)</td>
                    <td className="py-3">Fair market renewals better for landlord. Fixed renewals can be below market.</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Early Termination</td>
                    <td className="py-3 pr-4">Kick-out clauses, sales thresholds, termination fees</td>
                    <td className="py-3">Reduces income certainty. Significant negative impact on value.</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">CAM / Expense Caps</td>
                    <td className="py-3 pr-4">Caps on controllable or total expense reimbursements</td>
                    <td className="py-3">Expense caps shift cost risk to landlord. Negotiate carefully.</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Assignment / Subletting</td>
                    <td className="py-3 pr-4">Tenant&apos;s right to assign or sublet without consent</td>
                    <td className="py-3">Unrestricted assignment can bring in weaker tenants.</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Co-Tenancy Clause</td>
                    <td className="py-3 pr-4">Rent reduction if anchor tenant leaves</td>
                    <td className="py-3">Major risk in multi-tenant centers. Can trigger rent cascades.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 10. Due Diligence Checklist ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              The Complete Due Diligence Checklist
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Due diligence is the process of verifying every assumption in your
              underwriting and identifying issues that could affect the
              property&apos;s value, income, or your ability to operate it
              successfully. A thorough due diligence process is your last line of
              defense before committing capital, and cutting corners here is one of
              the most expensive mistakes an investor can make.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The due diligence period in a commercial real estate purchase
              agreement is typically 30 to 60 days, though complex transactions
              may require longer. During this period, you should be reviewing
              documents, conducting inspections, and verifying information on
              multiple parallel tracks. The following checklist covers the major
              categories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                {
                  category: "Financial Due Diligence",
                  items: "Trailing 12-month P&L, rent roll verification, lease abstracts, accounts receivable aging, historical occupancy, CAM reconciliation, tax bill review, insurance loss history",
                },
                {
                  category: "Physical Due Diligence",
                  items: "Property condition report, environmental (Phase I ESA), roof inspection, HVAC assessment, ADA compliance, parking lot condition, fire/life safety systems, structural inspection",
                },
                {
                  category: "Legal Due Diligence",
                  items: "Title search and commitment, survey review, zoning verification, building code compliance, lease review (all leases in full), estoppel certificates from all tenants, HOA/CC&R review",
                },
                {
                  category: "Market Due Diligence",
                  items: "Comparable sales analysis, comparable lease analysis, market vacancy and absorption data, planned competitive supply, demographic trends, infrastructure projects, zoning changes in pipeline",
                },
              ].map((item) => (
                <div
                  key={item.category}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
                >
                  <h4 className="text-gold font-semibold text-sm mb-2">
                    {item.category}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 11. Red Flags ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Red Flags That Should Make You Walk Away
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not every deal is a good deal, and the best investors are those who
              know when to walk away. Over years of evaluating commercial
              properties in Central Florida, certain red flags consistently signal
              deals that are more likely to result in losses than gains. Here are
              the warning signs that should trigger serious concern or an outright
              pass.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-4">
              <h4 className="text-gold font-semibold mb-3">Critical Red Flags</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><strong className="text-white">Seller refuses to provide trailing financials.</strong> If the seller cannot or will not provide at least 24 months of actual operating statements, there is likely something they do not want you to see.</li>
                <li><strong className="text-white">Pro forma NOI significantly exceeds trailing NOI.</strong> A gap of more than 10-15% should be scrutinized carefully. Sellers frequently inflate pro forma assumptions.</li>
                <li><strong className="text-white">Concentrated tenant risk.</strong> If a single tenant represents more than 50% of the property&apos;s income and that tenant is not investment-grade, the risk profile may be unacceptable.</li>
                <li><strong className="text-white">Deferred maintenance exceeding 10% of purchase price.</strong> A property with $200K in deferred maintenance on a $1.5M purchase requires careful underwriting of true all-in cost.</li>
                <li><strong className="text-white">Environmental concerns.</strong> Phase I ESA findings that recommend a Phase II investigation should be taken very seriously. Remediation costs can exceed property value.</li>
                <li><strong className="text-white">Below-market leases with long terms.</strong> If the largest tenant has a below-market lease with 10+ years remaining and no escalation, you are locked into under-performance.</li>
                <li><strong className="text-white">Declining market fundamentals.</strong> A property in a submarket experiencing population decline, major employer loss, or increasing competitive supply faces structural headwinds.</li>
                <li><strong className="text-white">Seller urgency without explanation.</strong> When a seller pressures you to close quickly without a legitimate reason, they may be trying to prevent you from discovering problems during due diligence.</li>
              </ul>
            </div>
          </section>

          {/* ── 12. Putting It All Together ── */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Putting It All Together: A Sample Deal Analysis
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To illustrate how these metrics work together, consider a
              hypothetical multi-tenant retail property in suburban Orlando. The
              asking price is $2,200,000 for a 12,000 square foot strip center
              with four tenants. Here is how you would apply the framework.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold font-semibold py-3 pr-4">Metric</th>
                    <th className="text-left text-gold font-semibold py-3 pr-4">Calculation</th>
                    <th className="text-left text-gold font-semibold py-3">Result</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Gross Potential Income</td>
                    <td className="py-3 pr-4">12,000 SF x $28/SF avg</td>
                    <td className="py-3">$336,000</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Vacancy &amp; Credit Loss (5%)</td>
                    <td className="py-3 pr-4">$336,000 x 5%</td>
                    <td className="py-3">($16,800)</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Effective Gross Income</td>
                    <td className="py-3 pr-4">$336,000 - $16,800</td>
                    <td className="py-3">$319,200</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Operating Expenses</td>
                    <td className="py-3 pr-4">Non-reimbursable: mgmt, reserves</td>
                    <td className="py-3">($165,000 landlord share after NNN)</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">NOI</td>
                    <td className="py-3 pr-4">$319,200 - $165,000 adjusted</td>
                    <td className="py-3">$154,200</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Cap Rate</td>
                    <td className="py-3 pr-4">$154,200 / $2,200,000</td>
                    <td className="py-3">7.01%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Price Per SF</td>
                    <td className="py-3 pr-4">$2,200,000 / 12,000 SF</td>
                    <td className="py-3">$183/SF</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">Cash-on-Cash (65% LTV, 6.5% rate)</td>
                    <td className="py-3 pr-4">Cash flow / equity invested</td>
                    <td className="py-3">8.4%</td>
                  </tr>
                  <tr className="border-b border-white/10/50">
                    <td className="py-3 pr-4">DSCR</td>
                    <td className="py-3 pr-4">$154,200 / $114,500 debt service</td>
                    <td className="py-3">1.35x</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              This hypothetical deal shows healthy metrics across the board: a
              7.01% cap rate that exceeds the cost of debt, a strong 1.35x DSCR,
              an 8.4% cash-on-cash return, and a per-square-foot price well below
              replacement cost. The next step would be to evaluate tenant credit
              quality, lease expiration risk, and the physical condition of the
              property through the due diligence process described above.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              To run this type of analysis on any property you are evaluating,
              use our{" "}
              <Link href="/deal-analyzer" className="text-gold hover:underline">
                deal analyzer tool
              </Link>. It will calculate all of these metrics automatically and
              allow you to stress-test under different scenarios. For personalized
              guidance on evaluating commercial real estate deals in Central
              Florida, explore our{" "}
              <Link href="/services/commercial-real-estate" className="text-gold hover:underline">
                commercial real estate services
              </Link>.
            </p>
          </section>

          {/* ── CTA ── */}
          <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8 text-center mt-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Help Evaluating a Deal?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team analyzes hundreds of commercial real estate deals across
              Central Florida every year. Let us help you evaluate your next
              opportunity with institutional-quality analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Get a Free Deal Review
              </Link>
              <Link
                href="/deal-analyzer"
                className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Try the Deal Analyzer
              </Link>
            </div>
          </div>

          {/* ── Related Reading ── */}
          <section className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold text-white mb-6">Related Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/orlando-cap-rates-investor-guide" className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors group">
                <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">Orlando Cap Rates: Investor Guide</h3>
                <p className="text-gray-500 text-xs">Deep dive into cap rates across property types and submarkets in the Orlando metro area.</p>
              </Link>
              <Link href="/blog/what-is-nnn-lease" className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors group">
                <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">What Is a NNN Lease?</h3>
                <p className="text-gray-500 text-xs">Understanding triple net leases, expense structures, and what they mean for commercial property investors.</p>
              </Link>
              <Link href="/blog/how-to-buy-commercial-property-orlando" className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors group">
                <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">How to Buy Commercial Property in Orlando</h3>
                <p className="text-gray-500 text-xs">Step-by-step guide to purchasing commercial real estate in the Orlando metro area.</p>
              </Link>
            </div>
          </section>
        </div>
              <BlogLeadCapture sourcePage="/blog/how-to-evaluate-commercial-real-estate-deal" />
      </article>
    </>
  );
}
