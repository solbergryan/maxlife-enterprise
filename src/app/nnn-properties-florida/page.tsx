import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title:
    "NNN Properties Florida | Triple Net Lease Investments in Orlando & Central FL",
  description:
    "Find triple net lease properties in Central Florida. NNN investments with credit tenants, passive income, and strong cap rates in Orlando.",
  keywords:
    "nnn properties florida, triple net lease orlando, NNN investment central florida",
};

const nnnTenants = [
  {
    name: "Dollar General",
    capRate: "5.50% – 6.50%",
    leaseTerm: "15 years",
    note: "High-volume new construction in suburban and rural corridors across Central Florida.",
  },
  {
    name: "Walgreens",
    capRate: "4.75% – 5.50%",
    leaseTerm: "20–25 years",
    note: "Investment-grade credit (S&P rated) with long-term absolute net leases and rental escalations.",
  },
  {
    name: "Chick-fil-A",
    capRate: "4.00% – 4.50%",
    leaseTerm: "20 years (ground lease)",
    note: "Corporate-guaranteed ground leases with some of the strongest unit economics in QSR.",
  },
  {
    name: "AutoZone",
    capRate: "5.25% – 6.00%",
    leaseTerm: "15–20 years",
    note: "Recession-resilient auto parts retailer with consistent expansion in Florida markets.",
  },
  {
    name: "Starbucks",
    capRate: "4.50% – 5.25%",
    leaseTerm: "10 years",
    note: "Premium locations with drive-thru configurations commanding strong investor demand.",
  },
  {
    name: "Medical / Dental",
    capRate: "6.50% – 8.00%",
    leaseTerm: "10 years",
    note: "Single-tenant medical office with higher yields and built-in tenant improvements.",
  },
];

const whyFloridaBenefits = [
  {
    title: "No State Income Tax",
    description:
      "Florida has no personal income tax, meaning NNN rental income flows directly to your bottom line without state-level erosion.",
  },
  {
    title: "Population Growth Fueling Demand",
    description:
      "Central Florida adds over 1,500 residents per week. Growing rooftops drive tenant sales and long-term lease stability.",
  },
  {
    title: "National Credit Tenants Expanding Here",
    description:
      "Major brands are aggressively expanding in the Orlando MSA, creating a steady pipeline of newly built NNN inventory.",
  },
  {
    title: "Stable Cash Flow + Appreciation",
    description:
      "Combine predictable NNN rent checks with Florida's appreciation trajectory for total returns that outpace most markets.",
  },
];

const capRatesByCredit = [
  {
    tier: "Investment Grade",
    range: "4.0% – 5.5%",
    examples: "Walgreens, Chick-fil-A, Starbucks, FedEx",
    description:
      "S&P-rated tenants with the strongest credit profiles and lowest default risk.",
  },
  {
    tier: "National Credit",
    range: "5.0% – 6.5%",
    examples: "Dollar General, AutoZone, O'Reilly, Tractor Supply",
    description:
      "Publicly traded or large-cap tenants with proven operating histories.",
  },
  {
    tier: "Regional / Local",
    range: "6.5% – 8.0%+",
    examples: "Medical offices, childcare centers, regional QSR franchisees",
    description:
      "Higher yield in exchange for smaller tenant balance sheets and shorter track records.",
  },
];

export default function NNNPropertiesFloridaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://maxlifedevelopment.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "NNN Properties Florida",
              item: "https://maxlifedevelopment.com/nnn-properties-florida",
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            NNN Investment Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            Triple Net Lease Properties in Central Florida
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Passive income backed by credit tenants in one of America&apos;s
            fastest-growing metros
          </p>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Central Florida&apos;s explosive population growth and
            business-friendly environment make it one of the top markets for
            triple net lease investing. Whether you&apos;re a 1031 exchange
            buyer on a deadline or building a long-term passive income
            portfolio, NNN properties in the Orlando metro deliver predictable
            cash flow backed by national credit tenants on long-term leases —
            with zero landlord responsibilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#available-nnn"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              See Available Properties
            </Link>
            <Link
              href="/services/nnn-investments"
              className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Our NNN Services
            </Link>
          </div>
        </div>
      </section>

      {/* What Is a Triple Net Lease? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          What Is a <span className="text-gold">Triple Net Lease</span>?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          In a triple net (NNN) lease, the tenant is responsible for all
          operating expenses beyond base rent. As the property owner, you
          collect passive income with virtually no landlord obligations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Property Taxes",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              ),
              description:
                "The tenant pays all real estate and property taxes directly, removing your largest variable expense.",
            },
            {
              title: "Insurance",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              ),
              description:
                "Building and liability insurance is the tenant's responsibility, protecting your asset at their cost.",
            },
            {
              title: "Maintenance",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              ),
              description:
                "Roof, structure, parking lot, HVAC — the tenant handles all repairs and capital expenditures.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          Want to learn more?{" "}
          <Link
            href="/blog/what-is-nnn-lease"
            className="text-gold hover:underline"
          >
            Read our full guide to NNN leases
          </Link>
        </p>
      </section>

      {/* Featured NNN Tenant Profiles */}
      <section className="border-y border-dark-border bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Featured NNN <span className="text-gold">Tenant Profiles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            These are the types of national credit tenants actively leasing NNN
            properties across the Orlando metro and Central Florida corridor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nnnTenants.map((tenant) => (
              <div
                key={tenant.name}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {tenant.name}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                    Cap Rate: {tenant.capRate}
                  </span>
                  <span className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                    {tenant.leaseTerm}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tenant.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Central Florida NNN? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Why Central Florida for{" "}
          <span className="text-gold">NNN Investing</span>?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Orlando and the surrounding metro area offer a rare combination of
          factors that make NNN properties here especially attractive to
          investors nationwide.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyFloridaBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <h3 className="text-gold font-semibold text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Cap Rate Ranges */}
      <section className="border-y border-dark-border bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Current <span className="text-gold">Cap Rate Ranges</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Cap rates vary based on tenant credit quality, lease term, and
            location. Here is what investors are seeing in the Central Florida
            NNN market today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capRatesByCredit.map((tier) => (
              <div
                key={tier.tier}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
              >
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  {tier.tier}
                </p>
                <p className="text-white text-3xl font-bold mb-3">
                  {tier.range}
                </p>
                <p className="text-gray-400 text-sm mb-3">{tier.description}</p>
                <p className="text-gray-500 text-xs">
                  e.g., {tier.examples}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            For a deeper dive into Orlando cap rate trends, read our{" "}
            <Link
              href="/blog/orlando-cap-rates-investor-guide"
              className="text-gold hover:underline"
            >
              Orlando Cap Rates Investor Guide
            </Link>
          </p>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="available-nnn" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              See Available <span className="text-gold">NNN Properties</span>
            </h2>
            <p className="text-gray-400 text-center mb-8 leading-relaxed">
              Tell us about your investment criteria and we will send you
              current NNN opportunities in Central Florida that match your
              goals.
            </p>
            <LeadCaptureForm
              buttonText="See Available NNN Properties"
              subjectPrefix="NNN Property Inquiry"
              source="nnn-properties-landing"
            />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Related <span className="text-gold">Resources</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "What Is a Triple Net (NNN) Lease?",
                description:
                  "Everything investors need to know about NNN lease structures, tenant responsibilities, and why they matter.",
                href: "/blog/what-is-nnn-lease",
              },
              {
                title: "Orlando NNN Properties for Sale",
                description:
                  "Current market conditions, where to find deals, and what to look for in Orlando-area NNN investments.",
                href: "/blog/orlando-nnn-properties-for-sale",
              },
              {
                title: "Orlando Cap Rates Investor Guide",
                description:
                  "A data-driven look at cap rate trends by property type and tenant credit across the Orlando MSA.",
                href: "/blog/orlando-cap-rates-investor-guide",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group block"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {resource.description}
                </p>
                <span className="text-gold text-sm font-medium">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/deal-analyzer"
              className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Try Our Deal Analyzer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
