import type { Metadata } from "next";
import Link from "next/link";
import { lenders, LENDER_TYPES, LENDER_TYPE_COLORS } from "@/data/lenders";
import type { LenderType } from "@/data/lenders";

export const metadata: Metadata = {
  title: "Commercial Real Estate Lenders — CRE Financing Directory",
  description:
    "Directory of 30+ commercial real estate lenders active in Florida. Banks, CMBS, SBA, agency, life companies, debt funds, and hard money lenders for CRE investors.",
  alternates: { canonical: "/lenders" },
  openGraph: {
    title: "Commercial Real Estate Lenders — CRE Financing Directory",
    description:
      "Find the right CRE lender for your deal. Banks, agency lenders, CMBS, SBA, life companies, debt funds, and private lenders — all active in Florida.",
    url: "https://maxlifedevelopment.com/lenders",
  },
  keywords: [
    "commercial real estate lenders",
    "CRE financing Florida",
    "commercial mortgage Orlando",
    "SBA commercial real estate loan",
    "CMBS lender Florida",
    "commercial bridge loan",
    "multifamily lender Florida",
    "commercial construction loan Orlando",
    "NNN financing",
    "hard money commercial loan Florida",
  ],
};

const lenderTypeDescriptions: Record<LenderType, string> = {
  Bank: "Traditional banks offering permanent, construction, and bridge loans. Best for borrowers with strong financials and banking relationships.",
  "Credit Union": "Member-owned institutions with competitive rates and lower fees. Great for smaller deals and local investors.",
  Agency: "Fannie Mae and Freddie Mac lenders specializing in multifamily financing. Best rates and terms for apartment properties.",
  "Life Company": "Insurance companies offering the lowest fixed rates in CRE for long-term, low-leverage stabilized assets.",
  CMBS: "Non-recourse, securitized loans for stabilized commercial properties. No personal guarantee required.",
  "SBA Lender": "Government-backed loans for owner-occupied commercial real estate. Up to 90% LTV with 25-year terms.",
  "Debt Fund": "Private capital providing bridge, mezzanine, and transitional financing for value-add strategies.",
  "Hard Money": "Asset-based private lenders that prioritize speed and property value over borrower credit. Fast closings.",
  "Portfolio Lender": "Lenders that hold loans on their own balance sheet, providing more flexible terms and creative structuring.",
};

export default function LendersPage() {
  const grouped = LENDER_TYPES.map((type) => ({
    type,
    lenders: lenders.filter((l) => l.type === type),
  })).filter((g) => g.lenders.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate <span className="text-gold">Lenders</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A curated directory of {lenders.length}+ commercial real estate
            lenders active in Florida — from local community banks to national
            CMBS shops. Find the right capital source for your next deal.
          </p>

          {/* Quick nav */}
          <div className="mt-8 flex flex-wrap gap-2">
            {grouped.map(({ type }) => (
              <a
                key={type}
                href={`#${type.toLowerCase().replace(/\s+/g, "-")}`}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:opacity-80 ${LENDER_TYPE_COLORS[type]}`}
              >
                {type}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose a lender */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Which Lender Type Is Right for Your Deal?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                scenario: "Buying a stabilized NNN property",
                best: "Bank, Life Company, or CMBS",
                why: "Low leverage on credit tenants = lowest rates. Life companies and CMBS offer non-recourse options.",
              },
              {
                scenario: "Acquiring a multifamily apartment complex",
                best: "Agency (Fannie/Freddie)",
                why: "Agency lenders offer the best rates, highest leverage (up to 80% LTV), and longest terms for apartments.",
              },
              {
                scenario: "Buying your own office or retail space",
                best: "SBA 504 or SBA 7(a)",
                why: "Up to 90% financing with 25-year fixed rates. Designed for owner-occupied commercial properties.",
              },
              {
                scenario: "Value-add or repositioning project",
                best: "Debt Fund or Bridge Lender",
                why: "Short-term bridge capital with flexible structures. Funds the business plan, refinance to permanent when stabilized.",
              },
              {
                scenario: "Ground-up development",
                best: "Bank (Construction Loan)",
                why: "Banks provide construction financing with draws tied to milestones. Requires strong sponsor experience.",
              },
              {
                scenario: "Need to close fast (30 days or less)",
                best: "Hard Money / Private Lender",
                why: "Asset-based underwriting means faster approval. Higher rate but unmatched speed. Refinance out later.",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                className="rounded-xl border border-dark-border bg-dark-card p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {item.scenario}
                </h3>
                <p className="mb-2 text-xs font-medium text-gold">
                  Best fit: {item.best}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender directory */}
      <section className="bg-dark py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              Full Directory
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              CRE Lenders by Type
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Browse lenders by category. Each section covers a different capital
              source — click any lender to visit their CRE lending page.
            </p>
          </div>

          <div className="space-y-16">
            {grouped.map(({ type, lenders: typeLenders }) => (
              <div
                key={type}
                id={type.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
              >
                {/* Category header */}
                <div className="mb-6 rounded-2xl border border-dark-border bg-dark-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${LENDER_TYPE_COLORS[type]}`}
                        >
                          {type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {typeLenders.length} lender
                          {typeLenders.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 max-w-2xl">
                        {lenderTypeDescriptions[type]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lender cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {typeLenders.map((lender) => (
                    <a
                      key={lender.slug}
                      href={lender.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-xl border border-dark-border bg-dark-card p-5 transition-all hover:border-gold/60 hover:bg-dark-hover"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-semibold text-white group-hover:text-gold transition-colors">
                          {lender.name}
                        </h3>
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-gray-600 group-hover:text-gold transition-colors mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>

                      {lender.highlight && (
                        <p className="mb-2 text-xs font-medium text-gold">
                          {lender.highlight}
                        </p>
                      )}

                      <p className="mb-4 text-sm text-gray-400 leading-relaxed flex-grow">
                        {lender.description}
                      </p>

                      {/* Loan types */}
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {lender.loanTypes.slice(0, 4).map((lt) => (
                          <span
                            key={lt}
                            className="rounded-full border border-dark-border bg-dark px-2 py-0.5 text-xs text-gray-500"
                          >
                            {lt}
                          </span>
                        ))}
                        {lender.loanTypes.length > 4 && (
                          <span className="rounded-full border border-dark-border bg-dark px-2 py-0.5 text-xs text-gray-500">
                            +{lender.loanTypes.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Loan range + markets */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-dark-border">
                        {lender.minLoan && lender.maxLoan && (
                          <span>
                            {lender.minLoan} – {lender.maxLoan}
                          </span>
                        )}
                        <span className="hidden sm:inline text-dark-border">
                          |
                        </span>
                        <span>{lender.markets.slice(0, 2).join(", ")}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan comparison table */}
      <section className="border-y border-dark-border bg-dark-card/50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            CRE Loan Types at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border text-left">
                  <th className="py-3 pr-4 font-semibold text-gold">
                    Loan Type
                  </th>
                  <th className="py-3 pr-4 font-semibold text-gold">
                    Typical LTV
                  </th>
                  <th className="py-3 pr-4 font-semibold text-gold">Term</th>
                  <th className="py-3 pr-4 font-semibold text-gold">
                    Recourse
                  </th>
                  <th className="py-3 font-semibold text-gold">Best For</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {[
                  {
                    type: "Bank Permanent",
                    ltv: "65–75%",
                    term: "5–10 yr",
                    recourse: "Full recourse",
                    best: "Stabilized assets, owner-occupied",
                  },
                  {
                    type: "Agency (Fannie/Freddie)",
                    ltv: "65–80%",
                    term: "5–35 yr",
                    recourse: "Non-recourse",
                    best: "Multifamily apartments",
                  },
                  {
                    type: "Life Company",
                    ltv: "55–65%",
                    term: "10–30 yr",
                    recourse: "Non-recourse",
                    best: "Low-leverage stabilized assets",
                  },
                  {
                    type: "CMBS",
                    ltv: "65–75%",
                    term: "5–10 yr",
                    recourse: "Non-recourse",
                    best: "Stabilized commercial (no PG)",
                  },
                  {
                    type: "SBA 504",
                    ltv: "Up to 90%",
                    term: "10–25 yr",
                    recourse: "Full recourse",
                    best: "Owner-occupied commercial",
                  },
                  {
                    type: "Bridge / Debt Fund",
                    ltv: "70–80%",
                    term: "1–3 yr",
                    recourse: "Varies",
                    best: "Value-add, repositioning",
                  },
                  {
                    type: "Hard Money",
                    ltv: "60–75%",
                    term: "6–24 mo",
                    recourse: "Asset-based",
                    best: "Fast close, fix & flip",
                  },
                  {
                    type: "Construction",
                    ltv: "60–75% LTC",
                    term: "12–36 mo",
                    recourse: "Full recourse",
                    best: "Ground-up development",
                  },
                ].map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-dark-border/50"
                  >
                    <td className="py-3 pr-4 font-medium text-white">
                      {row.type}
                    </td>
                    <td className="py-3 pr-4">{row.ltv}</td>
                    <td className="py-3 pr-4">{row.term}</td>
                    <td className="py-3 pr-4">{row.recourse}</td>
                    <td className="py-3">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Ranges are general guidelines and vary by lender, borrower strength,
            property type, and market conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Finding the Right Lender?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We work with lenders across every capital source to match you with
            the best financing for your deal. Contact us for a free consultation
            on your CRE financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Financing Help
            </Link>
            <Link
              href="/investor-tools"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Investor Tools
            </Link>
            <Link
              href="/academy/courses/06-financing-commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              CRE Financing Course
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
