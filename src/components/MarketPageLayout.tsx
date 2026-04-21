import Image from "next/image";
import Link from "next/link";
import { Market } from "@/data/markets";
import InvestorSignupForm from "./InvestorSignupForm";

export default function MarketPageLayout({ market }: { market: Market }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        {market.heroImage && (
          <>
            <Image
              src={market.heroImage}
              alt={market.heroAlt ?? market.heroHeading}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
          </>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/markets"
            className="text-gold hover:underline text-sm mb-4 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Markets
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {market.heroHeading}
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            {market.heroSubheading}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {market.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-gold text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl space-y-12">
          {market.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold text-white mb-4">
                {section.heading}
              </h2>
              {section.content.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-400 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Property Types in {market.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {market.propertyTypes.map((type) => (
              <div
                key={type}
                className="bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-center"
              >
                <p className="text-gray-300 text-sm">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Why Invest in {market.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {market.whyInvest.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <svg
                className="w-5 h-5 text-gold shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-400 text-sm">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investor Signup */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Get {market.name} Deal Alerts
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Be the first to know about commercial real estate opportunities in{" "}
              {market.name}. Sign up for off-market deal access.
            </p>
            <InvestorSignupForm />
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          Market Insights
        </h2>
        <p className="text-gray-500 mb-6">
          Research and analysis for commercial real estate investors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/blog/orlando-commercial-real-estate-trends-2026"
            className="group bg-dark-card border border-dark-border rounded-lg p-5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">
              Orlando Commercial Real Estate Trends 2026
            </h3>
            <p className="text-gray-500 text-xs">
              Cap rates, submarkets, and investment strategies across the Orlando metro.
            </p>
          </Link>
          <Link
            href="/blog/orlando-entertainment-district-investment-guide"
            className="group bg-dark-card border border-dark-border rounded-lg p-5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">
              Entertainment District Investment Guide
            </h3>
            <p className="text-gray-500 text-xs">
              Disney, Universal, and I-Drive corridor opportunities for CRE investors.
            </p>
          </Link>
          <Link
            href="/blog/brevard-county-investment-property-outlook"
            className="group bg-dark-card border border-dark-border rounded-lg p-5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors text-sm">
              Brevard County Investment Outlook
            </h3>
            <p className="text-gray-500 text-xs">
              Space Coast growth drivers and commercial real estate opportunity areas.
            </p>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/blog"
            className="text-gold hover:underline text-sm font-medium"
          >
            View All Insights &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Invest in {market.name}?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss your investment goals and find the right
            opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              data-track="market-view-deals"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Available Deals
            </Link>
            <Link
              href="/contact"
              data-track="market-schedule-call"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
