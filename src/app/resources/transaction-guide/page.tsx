import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial RE Transaction Guide | MaxLife Development",
  description:
    "A complete reference for commercial real estate transactions. From Letter of Intent through post-closing — every stage explained for investors and buyers.",
};

const stages = [
  {
    number: "1",
    title: "Property Identification & LOI",
    content: [
      "The process begins with identifying a target property and performing preliminary due diligence — reviewing financials such as rent rolls, operating statements, and tax returns.",
      "Once you decide to pursue, the next step is submitting a Letter of Intent (LOI). The LOI is a non-binding document outlining key deal terms: purchase price, due diligence period, earnest money deposit, contingencies, and proposed closing timeline.",
    ],
    keyPoint:
      "The LOI stage is more formalized in commercial deals. Expect multiple rounds of negotiation before a formal contract is drafted.",
  },
  {
    number: "2",
    title: "Contract Negotiation & Execution",
    content: [
      "Once the LOI is agreed upon, attorneys draft and negotiate the Purchase and Sale Agreement (PSA). Commercial PSAs cover representations and warranties, environmental indemnifications, tenant estoppels, assignment of leases, default remedies, and more.",
    ],
    provisions: [
      {
        name: "Due Diligence Period",
        detail:
          "Typically 30-90 days. This is your window to investigate everything about the property.",
      },
      {
        name: "Earnest Money",
        detail:
          "Usually 1-3% of purchase price. Understand when it becomes non-refundable ('going hard').",
      },
      {
        name: "Representations & Warranties",
        detail:
          "Seller's statements about property condition, environmental status, litigation, and tenant matters. These survive closing.",
      },
      {
        name: "Default Remedies",
        detail:
          "Specific performance, liquidated damages, and earnest money forfeiture are commonly negotiated.",
      },
    ],
  },
  {
    number: "3",
    title: "Physical & Environmental Inspections",
    content: [
      "This is the heart of due diligence and the area that differs most from residential transactions.",
    ],
    subsections: [
      {
        name: "Property Condition Assessment (PCA)",
        detail:
          "The commercial equivalent of a home inspection. A licensed engineering firm inspects structure, roof, HVAC, plumbing, electrical, parking, and site improvements. Reports project capital expenditures over a 10-12 year horizon.",
      },
      {
        name: "Phase 1 Environmental Site Assessment (ESA)",
        detail:
          "A records-based investigation reviewing historical records, aerial photographs, government databases, and a physical site visit. Identifies Recognized Environmental Conditions (RECs). Almost always required by lenders.",
      },
      {
        name: "Phase 2 ESA (if triggered)",
        detail:
          "Physical testing: soil borings, groundwater sampling, and lab analysis. Adds $10,000-$50,000+ in cost and 4-8 weeks. If contamination is confirmed, negotiate remediation responsibility or walk away.",
      },
    ],
  },
  {
    number: "4",
    title: "Financial & Legal Review",
    content: [
      "While physical inspections are underway, the financial and legal review runs in parallel.",
    ],
    subsections: [
      {
        name: "Tenant Lease Review & Estoppels",
        detail:
          "Every lease is reviewed in full. Estoppel certificates are collected — signed statements from each tenant confirming lease terms, rent amounts, security deposits, and any claims against the landlord.",
      },
      {
        name: "Operating Expense Review",
        detail:
          "Analyze 3-5 years of operating statements, tax returns, utility bills, insurance policies, and service contracts. Compare actuals against pro forma projections.",
      },
      {
        name: "Legal Review",
        detail:
          "Review pending litigation, ADA compliance, building codes, zoning compliance, and existing warranties. Examine all service and vendor contracts.",
      },
    ],
  },
  {
    number: "5",
    title: "Title & Survey",
    content: [
      "A title commitment is ordered and reviewed by the buyer's attorney. Commercial title review examines all recorded easements, restrictions, liens, encumbrances, and exceptions to coverage.",
      "An ALTA (American Land Title Association) survey maps property boundaries, all improvements, easements, encroachments, setback lines, access points, and flood zone designations. Both owner's and lender's title insurance policies are standard.",
    ],
  },
  {
    number: "6",
    title: "Financing",
    content: [
      "Commercial lenders underwrite the property's income-producing ability, not just the borrower's creditworthiness. Debt service coverage ratio (DSCR) and loan-to-value (LTV) drive the terms.",
    ],
    loanTypes: [
      {
        type: "Conventional Bank Loans",
        detail: "5-10 year terms, 20-25 year amortization. Relationships matter.",
      },
      {
        type: "CMBS Loans",
        detail:
          "Competitive rates but rigid terms. Less flexibility for modifications. Common for larger, stabilized properties.",
      },
      {
        type: "SBA Loans (504 & 7a)",
        detail:
          "Lower down payments, longer terms. Best for owner-occupied properties.",
      },
      {
        type: "Bridge Loans",
        detail:
          "Short-term (1-3 years) for properties needing stabilization or lease-up. Higher rates, more flexible.",
      },
    ],
  },
  {
    number: "7",
    title: "Pre-Closing Preparation",
    content: [
      "As due diligence wraps up, attorneys, title company, lender, and both parties coordinate to assemble all required documents. Key items include collecting remaining estoppel certificates, obtaining SNDAs, and preparing closing statements with prorations for rent, property taxes, CAM charges, and utility deposits.",
      "A Subordination, Non-Disturbance, and Attornment Agreement (SNDA) protects tenants in the event of foreclosure, ensuring the new owner honors existing leases. A final property walk-through confirms condition hasn't changed since inspections.",
    ],
  },
  {
    number: "8",
    title: "Closing",
    content: [
      "Closings are handled through a title company or escrow agent. All documents are executed — deed, bill of sale, assignment of leases, affidavits, and lender documents. Funds are wired, the lender funds the loan, and the title company records the deed and mortgage.",
    ],
    keyPoint:
      "The full transaction from LOI to closing commonly takes 60-120 days, though larger or more complex deals can take six months or longer.",
  },
  {
    number: "9",
    title: "Post-Closing",
    content: [
      "Tenant notification letters inform tenants of the ownership change and new payment instructions. Vendor and service contracts are transferred, and utility accounts switched.",
      "A proration true-up is done 90-120 days after closing, reconciling estimated prorations against actual tax bills and operating expenses.",
    ],
  },
];

export default function TransactionGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/resources"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Resources
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Investor Resource
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Transaction Guide</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A complete reference for commercial real estate transactions — from
            Letter of Intent through post-closing. Every stage explained for
            investors and buyers.
          </p>
        </div>
      </section>

      {/* Stage Navigation */}
      <section className="bg-dark-card/50 border-b border-dark-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {stages.map((stage) => (
              <a
                key={stage.number}
                href={`#stage-${stage.number}`}
                className="text-xs text-gray-400 hover:text-gold bg-dark border border-dark-border hover:border-gold/30 rounded-md px-3 py-1.5 transition-colors whitespace-nowrap"
              >
                {stage.number}. {stage.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {stages.map((stage) => (
            <div key={stage.number} id={`stage-${stage.number}`} className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold">{stage.number}</span>
                </div>
                <h2 className="text-xl font-bold text-white">{stage.title}</h2>
              </div>

              <div className="space-y-4 pl-14">
                {stage.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}

                {stage.keyPoint && (
                  <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 mt-4">
                    <p className="text-gold text-sm font-medium">
                      {stage.keyPoint}
                    </p>
                  </div>
                )}

                {stage.provisions && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {stage.provisions.map((p) => (
                      <div
                        key={p.name}
                        className="bg-dark-card border border-dark-border rounded-lg p-4"
                      >
                        <h4 className="text-white font-medium text-sm mb-1">
                          {p.name}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {p.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {stage.subsections && (
                  <div className="space-y-4 mt-4">
                    {stage.subsections.map((sub) => (
                      <div
                        key={sub.name}
                        className="bg-dark-card border border-dark-border rounded-lg p-4"
                      >
                        <h4 className="text-white font-medium text-sm mb-2">
                          {sub.name}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {sub.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {stage.loanTypes && (
                  <div className="space-y-3 mt-4">
                    {stage.loanTypes.map((loan) => (
                      <div
                        key={loan.type}
                        className="flex flex-col sm:flex-row sm:items-start gap-2 bg-dark-card border border-dark-border rounded-lg p-4"
                      >
                        <span className="text-white font-medium text-sm sm:w-48 shrink-0">
                          {loan.type}
                        </span>
                        <span className="text-gray-400 text-xs leading-relaxed">
                          {loan.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            This guide provides a general overview of a typical commercial real
            estate transaction. Specific requirements may vary based on property
            type, jurisdiction, lender, and deal structure. Always consult with
            your real estate attorney for guidance specific to your transaction.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start a Transaction?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether you&apos;re buying or selling commercial property, MaxLife
            Development can guide you through every stage of the process.
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
