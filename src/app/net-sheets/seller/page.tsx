import type { Metadata } from "next";
import Link from "next/link";
import SellerNetSheet from "@/components/SellerNetSheet";
import NetSheetDisclaimer from "@/components/NetSheetDisclaimer";

export const metadata: Metadata = {
  title: "Orlando Seller Net Sheet Calculator | Orange, Brevard, Lake & More | MaxLife Realty",
  description:
    "Free Seller Net Sheet for Orlando / Orange County (default) plus Brevard, Lake, Seminole, Osceola, Volusia, and Polk. Estimate commission, title fees, doc stamps, and mortgage payoff. Branded PDF export.",
  openGraph: {
    title: "Florida Seller Net Sheet Calculator — Multi-County | MaxLife Realty",
    description:
      "Instant net proceeds estimate with Florida promulgated title rates, doc stamps, and per-county defaults. Branded PDF export included.",
  },
};

export default function SellerNetSheetPage() {
  return (
    <>
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            <Link href="/net-sheets" className="hover:text-gold-light">
              Net Sheet Calculators
            </Link>{" "}
            / Seller
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seller <span className="text-gold">Net Sheet</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Estimate net proceeds at closing with Florida rates for any
            supported county — Orange (Orlando, default), Brevard, Lake,
            Seminole, Osceola, Volusia, or Polk. Generate a branded PDF in one
            click.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <NetSheetDisclaimer />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SellerNetSheet />
      </section>

      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-4">
              How the Seller Net Sheet Works
            </h2>
            <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <p>
                The Seller Net Sheet estimates your proceeds at closing by
                subtracting commissions, title fees, documentary stamp tax,
                property tax proration, and any mortgage payoff from your sales
                price.
              </p>
              <p>
                Title insurance is calculated using Florida&apos;s promulgated
                rates — $5.75 per $1,000 on the first $100,000 and $5.00 per
                $1,000 above that. Toggle the <span className="text-gold">Reissue Rate</span>{" "}
                on to apply the 30% discount when the prior owner&apos;s policy
                is still in force.
              </p>
              <p>
                Documentary stamp tax on the deed is charged at $0.70 per $100
                of the sales price (paid by the seller in most Florida
                counties). Use the <span className="text-gold">County</span> selector
                at the top of the form to switch between Orange, Brevard,
                Lake, Seminole, Osceola, Volusia, or Polk — each county
                pre-fills its own effective property tax rate, closing fee,
                and lien search defaults.
              </p>
              <p className="text-xs text-gray-500 pt-2">
                All figures are estimates. Actual closing costs vary based on
                the contract, title company, and county. Consult your closing
                agent for final numbers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
