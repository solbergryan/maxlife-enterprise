import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Financing | MaxLife Development",
  description:
    "Commercial real estate financing and mortgage services in Florida. Conventional loans, SBA, CMBS, bridge financing, and NNN investment loans. NMLS #1784218.",
};

const loanTypes = [
  {
    title: "Conventional Commercial Loans",
    description:
      "Traditional bank financing for stabilized commercial properties. Competitive rates with negotiable terms through local and regional banking relationships.",
    details: [
      "5-10 year terms, 20-25 year amortization",
      "Typically 65-80% LTV",
      "Relationship-based underwriting",
      "Best for stabilized, income-producing assets",
    ],
  },
  {
    title: "SBA Loans (504 & 7a)",
    description:
      "Government-backed financing offering lower down payments and longer terms. Ideal for owner-occupied commercial properties and small business expansion.",
    details: [
      "Up to 90% LTV on qualifying properties",
      "10-25 year terms available",
      "Lower down payment requirements",
      "Best for owner-occupied properties",
    ],
  },
  {
    title: "CMBS Loans",
    description:
      "Securitized commercial mortgage financing with competitive fixed rates. Best suited for larger, stabilized commercial properties with strong cash flow.",
    details: [
      "Competitive fixed rates",
      "Non-recourse options available",
      "5-10 year terms typical",
      "Best for larger stabilized properties ($2M+)",
    ],
  },
  {
    title: "Bridge & Construction Loans",
    description:
      "Short-term financing for acquisitions, renovations, and ground-up construction. Flexible terms to bridge the gap to permanent financing or sale.",
    details: [
      "12-36 month terms",
      "Interest-only payments during term",
      "Up to 75% LTC for construction",
      "Best for value-add & development projects",
    ],
  },
  {
    title: "NNN Investment Loans",
    description:
      "Specialized financing for triple net lease properties. Lenders underwrite the tenant credit and lease terms, often resulting in favorable rates and higher leverage.",
    details: [
      "Up to 75-80% LTV for investment grade tenants",
      "Rates tied to tenant credit quality",
      "Non-recourse options for strong NNN assets",
      "Best for single-tenant NNN acquisitions",
    ],
  },
  {
    title: "Portfolio & Blanket Loans",
    description:
      "Financing multiple properties under a single loan. Ideal for investors building a portfolio of commercial or NNN properties across multiple locations.",
    details: [
      "Cross-collateralized structures",
      "Flexible release provisions",
      "Economies of scale on fees",
      "Best for multi-property investors",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We review your investment goals, property details, financial position, and timeline to determine the best financing strategy.",
  },
  {
    step: "02",
    title: "Loan Structuring",
    description:
      "We analyze your deal and structure the optimal loan — balancing rate, leverage, term, and prepayment flexibility for your specific situation.",
  },
  {
    step: "03",
    title: "Lender Matching",
    description:
      "We leverage our network of commercial lenders, banks, and capital sources to find the most competitive terms for your property type and deal structure.",
  },
  {
    step: "04",
    title: "Application & Underwriting",
    description:
      "We prepare and submit a complete loan package, manage the underwriting process, and coordinate with the lender through approval.",
  },
  {
    step: "05",
    title: "Closing",
    description:
      "We coordinate loan document review, satisfy lender conditions, and ensure a smooth closing alongside your attorney and title company.",
  },
];

export default function CommercialFinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/services"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                Financing Services
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Commercial Real Estate Financing
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                We help investors and property owners secure the right financing
                for commercial acquisitions, refinances, construction, and NNN
                investment properties across Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Finance Through{" "}
              <span className="text-gold">MaxLife Development</span>?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Most commercial deals live or die on financing. Having a broker who
              understands both the real estate and the capital markets side means
              better terms, faster closings, and fewer surprises.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We combine hands-on deal experience with access to a deep network
              of commercial lenders — from local community banks to national
              CMBS platforms. Whether you&apos;re buying your first NNN property
              or refinancing a portfolio, we structure the financing to match
              your investment strategy.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 space-y-4">
            <h3 className="text-gold font-semibold mb-2">Our Advantages</h3>
            {[
              {
                title: "Dual Expertise",
                desc: "Licensed real estate broker and mortgage loan originator — we understand both sides of every deal.",
              },
              {
                title: "Lender Network",
                desc: "Relationships with commercial banks, credit unions, CMBS lenders, bridge lenders, and SBA preferred lenders.",
              },
              {
                title: "Deal-Level Insight",
                desc: "We structure financing around the property fundamentals, not just the borrower profile.",
              },
              {
                title: "End-to-End Service",
                desc: "From property sourcing through financing and closing — one team managing the entire transaction.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-white font-medium text-sm">{item.title}</span>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Loan Programs <span className="text-gold">We Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan) => (
              <div
                key={loan.title}
                className="bg-dark border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{loan.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {loan.description}
                </p>
                <ul className="space-y-1.5">
                  {loan.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-gray-300 text-xs"
                    >
                      <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Our <span className="text-gold">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-5xl font-bold text-gold/15 absolute -top-2 -left-1">
                {step.step}
              </div>
              <div className="pt-8 pl-2">
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Property Types <span className="text-gold">We Finance</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "NNN Retail Properties",
              "Office Buildings",
              "Industrial / Warehouse",
              "Multi-Family (5+ units)",
              "Mixed-Use Properties",
              "Retail Centers",
              "Medical Office",
              "Self-Storage",
              "Land (with entitlements)",
              "Build-to-Suit Development",
              "Gas Stations / C-Stores",
              "Special Purpose",
            ].map((type) => (
              <div
                key={type}
                className="bg-dark border border-dark-border rounded-lg p-4 text-center text-gray-300 text-sm font-medium hover:border-gold/30 transition-colors"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Licensing & <span className="text-gold">Credentials</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white font-medium text-sm">
                FL Real Estate Broker
              </p>
              <p className="text-gray-500 text-xs mt-1">License #3354351</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-white font-medium text-sm">
                Mortgage Loan Originator
              </p>
              <p className="text-gray-500 text-xs mt-1">NMLS #1784218</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white font-medium text-sm">
                Mortgage Inc
              </p>
              <p className="text-gray-500 text-xs mt-1">NMLS #2028516</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Financing for a Deal?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Tell us about your property and investment goals. We&apos;ll review
            your deal and recommend the best financing structure — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get a Financing Quote
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
