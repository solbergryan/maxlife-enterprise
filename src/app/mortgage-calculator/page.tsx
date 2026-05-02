import type { Metadata } from "next";
import Link from "next/link";
import MortgageCalculator from "@/components/MortgageCalculator";

export const metadata: Metadata = {
  title: "Mortgage Calculator — Monthly Payment & Amortization | MaxLife Realty",
  description:
    "Free Florida mortgage calculator. Estimate your monthly payment including principal, interest, property tax, insurance, and PMI. Includes a full amortization schedule.",
  keywords: [
    "mortgage calculator",
    "monthly mortgage payment calculator",
    "Florida mortgage calculator",
    "mortgage payment estimator",
    "home loan calculator",
    "PITI calculator",
    "amortization calculator",
  ],
  alternates: { canonical: "/mortgage-calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mortgage Calculator",
  description:
    "Estimate monthly mortgage payments including principal, interest, property taxes, homeowner's insurance, and PMI. Includes annual amortization chart.",
  url: "https://maxlifedevelopment.com/mortgage-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mortgage <span className="text-gold">Calculator</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Estimate your monthly payment and see a full amortization breakdown.
            Includes principal &amp; interest, property tax, homeowner&apos;s
            insurance, and PMI when your down payment is less than 20%.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <MortgageCalculator />
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          Estimates only — for informational and educational use. Not financial,
          tax, legal, or investment advice. Contact a licensed lender for an
          official Loan Estimate. See our{" "}
          <Link href="/terms" className="text-gold hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Understanding Your Mortgage Payment (PITI)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A monthly mortgage payment is typically made up of four components —
            Principal, Interest, Taxes, and Insurance — often called{" "}
            <span className="text-gold font-medium">PITI</span>. Lenders use your
            PITI to calculate your debt-to-income ratio (DTI) when qualifying you
            for a loan.
          </p>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <code className="text-gold text-sm block">
              Monthly Payment = P&amp;I + Monthly Tax + Monthly Insurance [+ PMI]
            </code>
          </div>
        </div>

        <ul className="space-y-3">
          {[
            {
              title: "Principal & Interest (P&I)",
              desc: "The core loan repayment. Early payments are mostly interest; over time, the principal share grows — this is amortization. The calculator shows this shift year by year.",
            },
            {
              title: "Property Tax",
              desc: "Collected monthly by your lender into an escrow account and paid to the county annually. Florida's effective average is around 0.83%, but rates vary by county and homestead status.",
            },
            {
              title: "Homeowner's Insurance",
              desc: "Required by all lenders. Florida rates are among the highest in the U.S. due to hurricane exposure — budget $2,000–$5,000/year for most homes.",
            },
            {
              title: "PMI (Private Mortgage Insurance)",
              desc: "Required when your down payment is less than 20% of the purchase price. PMI is automatically removed once your LTV drops to 80%. Rates typically range from 0.3%–1.5% of the loan amount annually.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-4"
            >
              <p className="text-gold font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>

        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-3">
            Florida Mortgage Tips
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5 shrink-0">→</span>
              Apply for Florida&apos;s <strong className="text-white">Homestead Exemption</strong> to reduce your assessed value by up to $50,000 — lowers your tax escrow payment.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5 shrink-0">→</span>
              <strong className="text-white">20% down</strong> eliminates PMI and typically secures better rates — meaningful savings over a 30-year term.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5 shrink-0">→</span>
              Compare <strong className="text-white">15-year vs. 30-year</strong> terms — a 15-year loan has higher monthly payments but dramatically less total interest paid.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Compare Renting vs. Buying in{" "}
            <span className="text-gold">Florida</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Use our Rent vs. Buy calculator to see whether buying makes sense over
            your time horizon — factoring in appreciation, rent increases, and
            opportunity cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rent-vs-buy-calculator"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Rent vs. Buy Calculator
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Talk to Ryan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
