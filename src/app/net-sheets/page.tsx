import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NetSheetDisclaimer from "@/components/NetSheetDisclaimer";

export const metadata: Metadata = {
  title: "Florida Net Sheet Calculator — Orange, Brevard, Lake & More | MaxLife Realty",
  description:
    "Free Florida closing cost calculators with county-specific rates for Orange, Brevard, Lake, Seminole, Osceola, Volusia, and Polk. Estimate seller net proceeds or buyer cash-to-close and download a branded PDF.",
  openGraph: {
    title: "Florida Net Sheet Calculator — Multi-County | MaxLife Realty",
    description:
      "Instant Seller Net Sheet and Buyer Estimate for Orlando / Central Florida and the Space Coast. Orange County is the default; pick any supported county. Branded PDF export included.",
  },
};

export default function NetSheetsHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/net-sheets/maxlife-net-sheets-money-bills-calculator-to-save-savings-taxes-business-money--256312.webp"
          alt="Seller net sheet calculator with receipts and calculator"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Net Sheet <span className="text-gold">Calculator</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Instant Florida closing cost estimates for sellers and buyers —
            with county-specific defaults for Orange (Orlando), Brevard (Space
            Coast), Lake, Seminole, Osceola, Volusia, and Polk. Branded PDF
            export in one click.
          </p>
        </div>
      </section>

      {/* Compliance notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <NetSheetDisclaimer />
      </section>

      {/* Choose calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Link
            href="/net-sheets/seller"
            className="group bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-gold transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Seller Net Sheet
            </h2>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Calculate net proceeds after commissions, title fees, doc stamps,
              mortgage payoff, and tax proration. Perfect for listing
              presentations and counter-offer analysis.
            </p>
            <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
              Open Seller Calculator
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>

          <Link
            href="/net-sheets/buyer"
            className="group bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:border-gold transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Buyer Estimate
            </h2>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              See a full cash-to-close breakdown including prepaids, title and
              lender fees, doc stamps, intangible tax, and monthly PITI
              payment. Supports Conventional, FHA, VA, USDA, and All-Cash.
            </p>
            <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
              Open Buyer Calculator
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Multi-County Support",
                body: "Orange (default), Brevard, Lake, Seminole, Osceola, Volusia, and Polk — each with their own millage and fee defaults.",
              },
              {
                title: "Florida Promulgated Rates",
                body: "Title insurance calculated at $5.75/$1K on the first $100K and $5.00/$1K above.",
              },
              {
                title: "Doc Stamp & Intangible Tax",
                body: "$0.70/$100 on the deed, $0.35/$100 on notes, and $0.20/$100 intangible on mortgage.",
              },
              {
                title: "All Loan Types",
                body: "Conventional, FHA, VA, USDA, All-Cash — plus reissue rate toggle for sellers.",
              },
              {
                title: "Branded PDF Export",
                body: "Generate a MaxLife Realty branded PDF with client name, address, and a clean breakdown.",
              },
              {
                title: "Detailed Breakdown",
                body: "Optional expanded view shows every line item: commissions, title, lender, and other fees.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-gold font-semibold mb-2 text-sm">
                  {f.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a Deeper Underwrite?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Run cap rate, DSCR, and IRR on any commercial deal with the Deal
            Analyzer, or request a full property review from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/deal-analyzer"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Open Deal Analyzer
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Request Property Analysis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
