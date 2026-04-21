import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InvestorSignupForm from "@/components/InvestorSignupForm";
import SellerValuationForm from "@/components/SellerValuationForm";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

const breadcrumbSchema = {
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
      name: "Opportunities",
      item: "https://maxlifedevelopment.com/opportunities",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Sell Commercial Property in Central Florida | MaxLife Realty",
  description:
    "Thinking of selling commercial property in Orlando, Brevard, Lake, Seminole, Osceola, Volusia, or Polk County? MaxLife Realty offers honest valuations, seller net sheets, and a direct investor network. Request a seller valuation today.",
  openGraph: {
    title: "Sell Commercial Property in Central Florida | MaxLife Realty",
    description:
      "Seller-first Central Florida commercial real estate brokerage. Honest underwriting, per-county seller net sheets, and a direct buyer network. Request a valuation.",
  },
};

export default function OpportunitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-business-office-skyscraper-windows-modern-4620084.webp"
          alt="Sell commercial property in Central Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            For Commercial Property Owners
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Selling Central Florida{" "}
            <span className="text-gold">Commercial Property?</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            MaxLife Realty is a seller-focused commercial brokerage covering
            Orlando, the Space Coast, and Central Florida. We underwrite your
            property like an institutional buyer would, show you a realistic
            net-at-close before you list, and match the right property to the
            right buyer &mdash; publicly or off-market. No listing portals.
            No search engines. Just a broker who knows the market cold.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="#request-valuation"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Request a Seller Valuation
            </Link>
            <Link
              href="/net-sheets/seller"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Run Your Net Sheet
            </Link>
          </div>
        </div>
      </section>

      {/* How we work with sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            How we work with sellers
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every seller engagement follows the same four steps. We move as
            fast or as slowly as the property and your situation require, but
            the rigor is the same whether it&apos;s a single-tenant NNN or a
            ground-up development parcel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Institutional-grade underwriting",
              body: "We run your property through the same cap-rate, DSCR, IRR, and sensitivity analysis that a real buyer will. No happy-math pro-formas. You see the honest numbers before you decide to list.",
              cta: { label: "See the Deal Analyzer", href: "/deal-analyzer" },
            },
            {
              step: "02",
              title: "Realistic net-at-close",
              body: "Before any listing agreement is signed, we run a seller net sheet with per-county defaults for Orange, Brevard, Lake, Seminole, Osceola, Volusia, and Polk. You know exactly what you walk away with at every price point.",
              cta: { label: "Open Seller Net Sheet", href: "/net-sheets/seller" },
            },
            {
              step: "03",
              title: "Targeted buyer matching",
              body: "We keep a working list of active Central Florida commercial buyers \u2014 1031 exchangers, NNN funds, private capital, and operator-buyers. Your property goes to the short list that actually closes, not a mass blast.",
              cta: { label: "How we market listings", href: "/services" },
            },
            {
              step: "04",
              title: "Public or off-market, your call",
              body: "Some properties sell best in full daylight. Others need quiet. We&apos;ll tell you honestly which your property is, and either way we have the reach to move it \u2014 without cluttering up your business on public listing portals.",
              cta: { label: "Contact us", href: "/contact" },
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
            >
              <p className="text-gold font-mono text-sm tracking-widest mb-3">
                {s.step}
              </p>
              <h3 className="text-white font-semibold text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {s.body}
              </p>
              <Link
                href={s.cta.href}
                className="text-gold hover:text-gold-light font-semibold text-sm inline-flex items-center gap-1.5"
              >
                {s.cta.label}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What we need from you */}
      <section className="bg-dark-card/30 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What we need to value your property
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A valuation call with MaxLife Realty is free, confidential, and
              typically takes 20 minutes. To give you a real number instead
              of a guess, we work from the same information any serious
              buyer will eventually ask for.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Property basics",
                  body: "Address, current use, year built, square footage, and any known upcoming capital expenditures (roof, HVAC, parking).",
                },
                {
                  title: "Income & expenses",
                  body: "Last 12 months of rent roll or gross revenue, plus operating expenses. A T-12 or tax returns work fine.",
                },
                {
                  title: "Leases (if tenanted)",
                  body: "Copies of executed leases with remaining term, rent escalations, and who pays expenses (NNN, modified gross, full service).",
                },
                {
                  title: "Your goals",
                  body: "Timeline, net proceeds target, 1031 plans, tax sensitivity, and whether you&apos;d consider an off-market sale.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-dark-card border border-dark-border rounded-xl p-5"
                >
                  <h3 className="text-gold font-semibold text-sm mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="#request-valuation"
                className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Valuation Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Valuation Form */}
      <section
        id="request-valuation"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
      >
        <div className="mb-8">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Request a Valuation
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Tell us about your property
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The more you share, the sharper the number we can give you on
            the call. Only the basics are required &mdash; fill in what you
            have and Ryan will follow up within one business day to
            schedule a no-obligation valuation call.
          </p>
        </div>
        <SellerValuationForm />
      </section>

      {/* Buyer side — investor signup (secondary) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            For Buyers &amp; Investors
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Looking for Central Florida commercial property?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We don&apos;t run a public listings portal &mdash; there are
            plenty of those. What we do is keep a short list of serious
            Central Florida commercial buyers and introduce them to the
            off-market and pre-market deals we source. If you&apos;re
            actively deploying capital, sign up below and tell us what
            you&apos;re looking for.
          </p>
          <InvestorSignupForm />
        </div>
      </section>

      <CTABanner
        heading="Not sure yet? Start with the net sheet."
        description="Before you decide whether to sell, run a free seller net sheet with your property details. Per-county Florida defaults, branded PDF, five minutes."
        primaryCTA={{ label: "Open Seller Net Sheet", href: "/net-sheets/seller" }}
        secondaryCTA={{ label: "Read Market Insights", href: "/blog" }}
      />
    </>
  );
}
