import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NNN Investments & Investment Property Orlando | MaxLife",
  description:
    "Investment property and NNN opportunities in Orlando and Central Florida. Triple-net leases, value-add, and 1031 exchange replacement properties from MaxLife Realty.",
  alternates: { canonical: "/services/nnn-investments" },
};

export default function NNNInvestmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-buildings-city-coffee-shop-doors-street-1836478.webp"
          alt="NNN retail storefront investment property in Central Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/services"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                Investment Services
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Investment Property &amp; NNN Opportunities in Orlando
              </h1>
              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
                Build passive income through triple net lease and value-add
                investment property in Orlando and Central Florida. We help
                investors acquire and dispose of NNN properties backed by
                creditworthy national tenants, and we source{" "}
                <Link
                  href="/1031-exchange-florida"
                  className="text-gold hover:underline"
                >
                  1031 exchange replacement properties
                </Link>{" "}
                for qualified buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is NNN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Is a <span className="text-gold">Triple Net Lease</span>?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A triple net (NNN) lease is a commercial lease structure where the
              tenant pays all three major operating expenses — property taxes,
              insurance, and maintenance — in addition to rent. This means the
              property owner collects predictable, passive income with minimal
              landlord responsibilities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              NNN properties are typically leased to national credit tenants like
              AutoZone, Dollar General, Walgreens, and other established brands
              on long-term leases (10-25 years), making them one of the most
              stable real estate investments available.
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
            <h3 className="text-gold font-semibold mb-4">
              Tenant Pays Everything
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Property Taxes", desc: "Tenant pays all real estate taxes" },
                { label: "Insurance", desc: "Tenant carries property insurance" },
                { label: "Maintenance", desc: "Tenant handles repairs and upkeep" },
                { label: "You Collect", desc: "Predictable monthly rent — that's it" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-gray-300 text-sm block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why NNN */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Why Invest in <span className="text-gold">NNN Properties</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Passive Income",
                description:
                  "Collect rent with zero landlord duties. No maintenance calls, no tenant management, no surprises.",
              },
              {
                title: "Creditworthy Tenants",
                description:
                  "National brands with strong balance sheets — AutoZone, Dollar General, Walgreens, Starbucks, and more.",
              },
              {
                title: "Long-Term Leases",
                description:
                  "Typical lease terms of 10-25 years with built-in rent escalations. Predictable cash flow for decades.",
              },
              {
                title: "1031 Exchange Friendly",
                description:
                  "NNN properties are ideal for tax-deferred exchanges. Swap active management for passive income.",
              },
              {
                title: "Recession Resilient",
                description:
                  "Essential-service tenants (pharmacies, auto parts, dollar stores) perform well in any economic cycle.",
              },
              {
                title: "Portfolio Diversification",
                description:
                  "Add stable, income-producing real estate to your portfolio alongside stocks, bonds, and other assets.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Types of <span className="text-gold">NNN Tenants</span> We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "AutoZone",
            "Dollar General",
            "Dollar Tree",
            "Walgreens",
            "CVS",
            "Starbucks",
            "7-Eleven",
            "Advance Auto Parts",
            "O'Reilly Auto Parts",
            "Tractor Supply",
            "Family Dollar",
            "And More...",
          ].map((tenant) => (
            <div
              key={tenant}
              className="bg-white/[0.04] border border-white/10 rounded-lg p-4 text-center text-gray-300 text-sm font-medium hover:border-gold/40 transition-colors"
            >
              {tenant}
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our <span className="text-gold">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Define Your Criteria",
                description:
                  "Cap rate targets, tenant preferences, location, price range, and investment goals.",
              },
              {
                step: "02",
                title: "Source & Analyze",
                description:
                  "We identify on-market and off-market NNN opportunities and run full financial analysis.",
              },
              {
                step: "03",
                title: "Due Diligence",
                description:
                  "Lease review, tenant credit analysis, property inspection, environmental assessment, and title work.",
              },
              {
                step: "04",
                title: "Close & Collect",
                description:
                  "Negotiate terms, coordinate closing, and start collecting passive rent checks.",
              },
            ].map((step, i) => (
              <div key={step.title} className="relative">
                <div className="text-5xl font-bold text-gold/15 absolute -top-2 -left-1">
                  {step.step}
                </div>
                <div className="pt-8 pl-2">
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Build Passive Income?
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Whether you&apos;re buying your first NNN property or adding to a
          portfolio, we&apos;ll find the right deal. Let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get Started
          </Link>
          <a
            href="tel:3215862121"
            className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
          >
            Call (321) 586-2121
          </a>
        </div>
      </section>
    </>
  );
}
