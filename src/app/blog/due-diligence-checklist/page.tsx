import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Due Diligence Checklist for Commercial Property Buyers | MaxLife Development",
  description:
    "A step-by-step due diligence checklist for commercial real estate buyers covering physical inspection, environmental, title, lease review, zoning, and closing prep.",
};

export default function DueDiligenceArticle() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              Buyer&apos;s Guide
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Complete Due Diligence Checklist for Commercial Property Buyers
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to investigate before closing on a commercial
            property — from physical inspections to lease review to
            environmental reports.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Due Diligence Matters
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Due diligence is the investigation period between signing a
              purchase contract and closing on the property. It&apos;s your
              opportunity to verify every assumption, uncover hidden issues, and
              confirm that the deal is everything the seller represented it to
              be. In commercial real estate, this period typically ranges from
              30 to 60 days.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Skipping or rushing due diligence is one of the most expensive
              mistakes a buyer can make. Environmental contamination, title
              defects, lease issues, or zoning restrictions discovered after
              closing can turn a good deal into a costly liability. This
              checklist covers the essential areas every commercial property
              buyer should investigate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Physical Inspection
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A thorough physical inspection evaluates the condition of the
              building, its systems, and the site itself. Even for NNN
              properties where the tenant handles maintenance, you need to
              understand the physical condition of what you&apos;re buying.
            </p>
            <ul className="space-y-2">
              {[
                "Roof condition, age, and remaining useful life — roof replacement is one of the most expensive capital expenditures",
                "HVAC systems, including age, maintenance history, and capacity",
                "Structural integrity — foundation, walls, load-bearing elements",
                "Parking lot and site drainage — paving condition, striping, ADA compliance",
                "Plumbing and electrical systems — age, code compliance, capacity",
                "Exterior and interior finishes — signs of deferred maintenance or water damage",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-400 text-sm">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Environmental Assessment
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Environmental due diligence protects you from inheriting
              contamination liability. Under federal law, property owners can be
              held responsible for environmental cleanup regardless of who
              caused the contamination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Phase I ESA</h3>
                <p className="text-gray-400 text-sm">
                  A Phase I Environmental Site Assessment is a records review and
                  site inspection that identifies potential environmental
                  concerns. This is standard for virtually every commercial
                  transaction and typically costs $2,000 to $5,000.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Phase II ESA</h3>
                <p className="text-gray-400 text-sm">
                  If the Phase I identifies recognized environmental conditions
                  (RECs), a Phase II involves soil and groundwater sampling to
                  determine whether actual contamination exists. Costs vary
                  widely based on scope.
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              In Central Florida, common environmental concerns include former
              gas station sites, dry cleaners, agricultural chemical use, and
              proximity to known contamination plumes. Properties near wetlands
              may also trigger additional regulatory review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Title, Survey & Legal Review
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Title and survey work confirms that the seller has clear ownership
              and that the property boundaries, easements, and encumbrances are
              understood before closing.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Title Commitment",
                  desc: "Review the title commitment for liens, judgments, easements, and any restrictions that could affect your use of the property.",
                },
                {
                  title: "ALTA Survey",
                  desc: "An updated survey shows exact boundaries, building footprint, setbacks, easements, encroachments, and flood zone designation.",
                },
                {
                  title: "Deed Review",
                  desc: "Confirm the legal description matches the survey, verify the vesting deed, and check for any deed restrictions or covenants.",
                },
                {
                  title: "HOA / Association Docs",
                  desc: "If applicable, review any property owner association documents for restrictions, assessments, or approval requirements.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-white font-medium">{item.title}</span>
                    <span className="text-gray-400 text-sm block">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Lease & Financial Analysis
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              For income-producing properties, the lease is the backbone of your
              investment. Every term, clause, and obligation needs to be
              reviewed carefully — ideally by a real estate attorney.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Lease term remaining and renewal options — how long is the income guaranteed?",
                "Rent escalation schedule — fixed increases, CPI adjustments, or percentage rent",
                "Tenant responsibilities — confirm what expenses the tenant covers (NNN, NN, or modified gross)",
                "Landlord obligations — identify any carve-outs for roof, structure, or capital expenditures",
                "Assignment and subletting provisions — what happens if the tenant wants to transfer the lease?",
                "Termination clauses and co-tenancy provisions — conditions under which the tenant can break the lease",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-400 text-sm">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 leading-relaxed">
              Beyond the lease itself, request at least three years of operating
              statements, rent rolls, CAM reconciliations, tax bills, and
              insurance declarations. Verify that the actual income and expenses
              match what was represented in the offering memorandum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Zoning & Entitlements
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Zoning verification confirms that the current use of the property
              is legally permitted and that your intended use (if different)
              would be allowed. In Central Florida, zoning regulations vary
              significantly between municipalities and counties.
            </p>
            <ul className="space-y-2">
              {[
                "Confirm the current zoning designation and that the existing use is conforming",
                "Review the Comprehensive Plan and Future Land Use Map for the area",
                "Check for any pending zoning changes or overlay districts that could affect the property",
                "Verify setbacks, height restrictions, parking requirements, and signage regulations",
                "If the use is non-conforming (grandfathered), understand the limitations on expansion or rebuilding",
                "For vacant land, confirm that the intended use is permitted and review the entitlement timeline",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-400 text-sm">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Insurance & Closing Preparation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The final stage of due diligence involves confirming insurance
              requirements and preparing for a smooth closing.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Insurance Review",
                  desc: "Obtain property insurance quotes and verify flood zone status. If the property is in a flood zone, factor in the cost of flood insurance. Confirm the tenant carries adequate liability coverage.",
                },
                {
                  title: "Estoppel Certificates",
                  desc: "Request estoppel certificates from all tenants confirming the lease terms, rent amount, security deposits, and any outstanding landlord obligations.",
                },
                {
                  title: "Tenant Financial Health",
                  desc: "For non-credit tenants, request financial statements or tax returns to assess the tenant's ability to fulfill the lease obligations.",
                },
                {
                  title: "Closing Document Review",
                  desc: "Review all closing documents with your attorney, including the deed, bill of sale, assignment of leases, and any seller representations and warranties.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-white font-medium">{item.title}</span>
                    <span className="text-gray-400 text-sm block">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-dark-card border border-gold/20 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-3">
              Need Help With Due Diligence?
            </h3>
            <p className="text-gray-400 mb-6">
              MaxLife Development guides buyers through every step of the due
              diligence process on commercial properties across Central Florida.
              Don&apos;t leave anything to chance.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
