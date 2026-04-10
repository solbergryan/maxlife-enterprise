import type { Metadata } from "next";
import Link from "next/link";
import BuyerEstimate from "@/components/BuyerEstimate";

export const metadata: Metadata = {
  title: "Buyer Closing Cost Estimate Florida | Cash-to-Close Calculator | MaxLife Realty",
  description:
    "Free Buyer Estimate calculator for Florida / Brevard County. See monthly PITI, cash to close, prepaids, title, lender, and doc stamps. Branded PDF export.",
  openGraph: {
    title: "Florida Buyer Closing Cost Estimate | MaxLife Realty",
    description:
      "Instant buyer cash-to-close and monthly payment estimate with full line-item breakdown. Supports Conventional, FHA, VA, USDA, All-Cash.",
  },
};

export default function BuyerEstimatePage() {
  return (
    <>
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            <Link href="/net-sheets" className="hover:text-gold-light">
              Net Sheet Calculators
            </Link>{" "}
            / Buyer
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Buyer <span className="text-gold">Estimate</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Calculate your cash to close and monthly payment with Florida /
            Brevard County closing costs. Supports all major loan types with a
            branded PDF export.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BuyerEstimate />
      </section>

      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-4">
              How the Buyer Estimate Works
            </h2>
            <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <p>
                The Buyer Estimate calculates your total cash required at
                closing by adding your down payment, prepaid costs (insurance,
                taxes, interest), title fees, lender fees, and transfer/tax
                recording costs — then subtracting any seller concession.
              </p>
              <p>
                Monthly payment (PITI) includes Principal &amp; Interest based
                on your loan amount, interest rate, and term, plus 1/12th of
                annual hazard insurance and property tax, and any HOA dues.
              </p>
              <p>
                Loan-specific fees like <span className="text-gold">FHA Upfront MIP (1.75%)</span>,{" "}
                <span className="text-gold">VA Funding Fee (2.15%)</span>, and{" "}
                <span className="text-gold">USDA Guarantee Fee (1.0%)</span> are added
                automatically when you select that loan type. Florida doc
                stamps on the note ($0.35/$100) and intangible tax on the
                mortgage ($0.20/$100) are included for all financed purchases.
              </p>
              <p className="text-xs text-gray-500 pt-2">
                All figures are estimates. Final numbers depend on your lender,
                title company, and the specific contract. Consult your lender
                for an official Loan Estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
