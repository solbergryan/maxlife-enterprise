import type { Metadata } from "next";
import Link from "next/link";
import BuyerEstimate from "@/components/BuyerEstimate";
import NetSheetDisclaimer from "@/components/NetSheetDisclaimer";

export const metadata: Metadata = {
  title: "Orlando Buyer Closing Cost Estimate | Orange, Brevard, Lake & More | MaxLife Realty",
  description:
    "Free Buyer Estimate for Orlando / Orange County (default) plus Brevard, Lake, Seminole, Osceola, Volusia, and Polk. Cash to close, PITI, prepaids, title, lender, and doc stamps. Branded PDF.",
  openGraph: {
    title: "Florida Buyer Closing Cost Estimate — Multi-County | MaxLife Realty",
    description:
      "Instant buyer cash-to-close and monthly payment estimate with per-county defaults. Supports Conventional, FHA, VA, USDA, and All-Cash.",
  },
};

export default function BuyerEstimatePage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
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
          <p className="text-gray-300 max-w-2xl text-lg">
            Calculate cash to close and monthly payment with Florida closing
            costs for any supported county — Orange (Orlando, default),
            Brevard, Lake, Seminole, Osceola, Volusia, or Polk. Supports all
            major loan types with a branded PDF export.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <NetSheetDisclaimer />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BuyerEstimate />
      </section>

      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-4">
              How the Buyer Estimate Works
            </h2>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
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
