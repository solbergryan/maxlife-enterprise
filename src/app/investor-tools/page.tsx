import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ROICalculator from "@/components/ROICalculator";

export const metadata: Metadata = {
  title: "CRE ROI Calculator & Cap Rate Guide Orlando",
  description:
    "Free commercial real estate ROI calculator and cap rate guide for Orlando investors. Evaluate deals, compare returns & analyze Central Florida properties.",
  openGraph: {
    title: "Commercial Real Estate ROI Calculator | Orlando Cap Rate Guide",
    description:
      "Free CRE investor tools: ROI calculator, cap rate explainer, and deal evaluation checklist for Central Florida investment properties.",
  },
};

export default function InvestorToolsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/office-buildings/maxlife-office-buildings-city-san-francisco-market-street-urban-4764064.webp"
          alt="Commercial real estate investor tools and analytics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Resources
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Investor <span className="text-gold">Tools</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Free tools and guides to help you evaluate commercial real estate
            investment opportunities with confidence.
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ROICalculator />
      </section>

      {/* Cap Rate Guide */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Understanding Cap Rates
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                The capitalization rate (cap rate) is the most commonly used
                metric in commercial real estate to evaluate the return potential
                of an investment property. It represents the ratio of a
                property&apos;s net operating income (NOI) to its purchase price,
                expressed as a percentage.
              </p>
              <div className="bg-dark-card border border-dark-border rounded-xl p-6 my-6">
                <p className="text-gold font-mono text-lg text-center mb-2">
                  Cap Rate = (Net Operating Income / Purchase Price) x 100
                </p>
                <p className="text-gray-500 text-sm text-center">
                  Example: $100,000 NOI / $1,500,000 Purchase Price = 6.67% Cap
                  Rate
                </p>
              </div>
              <p>
                A higher cap rate generally indicates a higher return — but also
                higher risk. Lower cap rates typically indicate more stable,
                lower-risk investments (like NNN properties with national credit
                tenants). The &quot;right&quot; cap rate depends on your
                investment strategy, risk tolerance, and the specific market.
              </p>

              <h3 className="text-white font-semibold text-lg mt-8 mb-3">
                Typical Cap Rate Ranges by Property Type
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { type: "NNN — Credit Tenant", range: "5.0% – 6.5%" },
                  { type: "Multi-Tenant Retail", range: "6.5% – 8.5%" },
                  { type: "Multifamily (Stabilized)", range: "5.5% – 7.5%" },
                  { type: "Multifamily (Value-Add)", range: "6.5% – 9.0%" },
                  { type: "Office", range: "6.0% – 8.5%" },
                  { type: "Industrial", range: "5.5% – 7.5%" },
                ].map((item) => (
                  <div
                    key={item.type}
                    className="flex justify-between items-center bg-dark-card border border-dark-border rounded-lg px-4 py-3"
                  >
                    <span className="text-gray-300 text-sm">{item.type}</span>
                    <span className="text-gold font-semibold text-sm">
                      {item.range}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Ranges are general guidelines for Central Florida markets and
                vary by location, tenant quality, lease terms, and property
                condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Evaluation Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Is This Deal Worth It? A Quick Evaluation Checklist
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Before committing to any commercial real estate investment, run
            through this checklist to ensure you&apos;re making an informed
            decision.
          </p>

          <div className="space-y-4">
            {[
              {
                category: "Financial Analysis",
                items: [
                  "Does the cap rate meet your return requirements?",
                  "Is the NOI based on actual income — not pro forma projections?",
                  "What are the operating expenses, and are they in line with market averages?",
                  "What is the cash-on-cash return after debt service?",
                  "Are there upcoming capital expenditures (roof, HVAC, parking lot)?",
                ],
              },
              {
                category: "Tenant & Lease Analysis",
                items: [
                  "What is the tenant credit quality? (publicly traded, regional, local?)",
                  "How much lease term is remaining?",
                  "Are there rent escalations built into the lease?",
                  "Who is responsible for expenses (NNN, modified gross, full service)?",
                  "What are the renewal options, and at what rate?",
                ],
              },
              {
                category: "Market & Location",
                items: [
                  "Is the property in a growing or declining market?",
                  "What are the population and job growth trends?",
                  "Is there new competition being built nearby?",
                  "What is the vacancy rate for comparable properties?",
                  "Is the property on a high-traffic, high-visibility location?",
                ],
              },
              {
                category: "Exit Strategy",
                items: [
                  "What is your hold period — and what does the exit look like?",
                  "Will the property be more or less valuable in 5-10 years?",
                  "Is there a value-add component that increases value at exit?",
                  "Is the property a good 1031 exchange candidate?",
                ],
              },
            ].map((section) => (
              <div
                key={section.category}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-dark-border mt-1">&#9634;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Evaluating a Deal?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We provide detailed underwriting and investment analysis for
            commercial properties across Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Request Property Analysis
            </Link>
            <Link
              href="/net-sheets"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Net Sheet Calculator
            </Link>
            <Link
              href="/opportunities"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse Current Deals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
