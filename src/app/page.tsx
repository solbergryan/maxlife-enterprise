import Link from "next/link";
import { listings } from "@/data/listings";
import { caseStudies } from "@/data/case-studies";
import { markets } from "@/data/markets";
import ListingCard from "@/components/ListingCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import InvestorSignupForm from "@/components/InvestorSignupForm";

export default function HomePage() {
  const featuredListings = listings.filter((l) => l.featured).slice(0, 3);
  const featuredStudy = caseStudies[0];

  return (
    <>
      {/* Hero — Deal-Focused */}
      <section className="relative border-b border-dark-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-navy-dark/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Central Florida &amp; Space Coast
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Commercial Real Estate{" "}
            <span className="text-gold">Investment Opportunities</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Helping investors, business owners, and developers identify, acquire,
            and maximize high-performing commercial real estate assets across
            Orlando, Brevard County, and Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/opportunities"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              View Available Deals
            </Link>
            <Link
              href="/investor-access"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Get Off-Market Access
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-dark-border text-gray-300 hover:border-gray-500 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Request Property Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Active Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Current Opportunities
            </h2>
            <p className="text-gray-500 mt-1">
              Active commercial real estate investment opportunities
            </p>
          </div>
          <Link
            href="/opportunities"
            className="hidden sm:inline-block text-gold hover:underline text-sm font-medium"
          >
            View All Deals &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing, i) => (
            <ListingCard key={`home-featured-${i}`} listing={listing} />
          ))}
        </div>
        <div className="sm:hidden mt-6 text-center">
          <Link href="/opportunities" className="text-gold hover:underline text-sm font-medium">
            View All Deals &rarr;
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "Counties Served" },
              { value: "$10M+", label: "Transaction Volume" },
              { value: "0%", label: "State Income Tax" },
              { value: "100%", label: "Client-Focused" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gold text-3xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Market Signup */}
      <section id="investor-signup" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-card border border-gold/20 rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                Exclusive Access
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Get Off-Market Commercial Deals
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We work with investors looking for retail, multifamily, NNN, and
                development opportunities in Central Florida and the Space Coast.
                Sign up to receive curated off-market deals before they hit the
                open market.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  "Early access to off-market opportunities",
                  "Deals curated to your investment criteria",
                  "Direct investor pricing — no bidding wars",
                  "Detailed underwriting on every deal",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <InvestorSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas / Markets */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Markets We Serve
          </h2>
          <p className="text-gray-500 mb-8">
            Commercial real estate expertise across Central Florida
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="group bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg group-hover:text-gold transition-colors mb-2">
                  {market.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{market.county}</p>
                <div className="flex flex-wrap gap-2">
                  {market.stats.slice(0, 2).map((stat) => (
                    <span
                      key={stat.label}
                      className="text-xs bg-dark-hover border border-dark-border rounded-full px-2.5 py-1 text-gray-400"
                    >
                      {stat.label}: {stat.value}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Recent Success</h2>
            <p className="text-gray-500 mt-1">Real deals, real results</p>
          </div>
          <Link
            href="/case-studies"
            className="hidden sm:inline-block text-gold hover:underline text-sm font-medium"
          >
            View All Case Studies &rarr;
          </Link>
        </div>
        <CaseStudyCard study={featuredStudy} />
        <div className="sm:hidden mt-6 text-center">
          <Link href="/case-studies" className="text-gold hover:underline text-sm font-medium">
            View All Case Studies &rarr;
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Full-Service Commercial Real Estate
          </h2>
          <p className="text-gray-500 mb-8">
            From deal sourcing to closing — and everything in between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Acquisitions & Dispositions",
                desc: "Buy-side and sell-side representation for commercial properties across Central Florida.",
                href: "/services/commercial-real-estate",
              },
              {
                title: "NNN Investments",
                desc: "Single-tenant NNN properties with national credit tenants. Passive income, predictable returns.",
                href: "/services/nnn-investments",
              },
              {
                title: "Land & Development",
                desc: "Site selection, land acquisition, entitlements, and development consulting.",
                href: "/services/land-development",
              },
              {
                title: "Development Services",
                desc: "Full development lifecycle from site planning to investor partnerships.",
                href: "/services/development",
              },
              {
                title: "Property Services",
                desc: "Maintenance, repairs, cleaning, and engineering support for commercial properties.",
                href: "/services/property-services",
              },
              {
                title: "Residential Real Estate",
                desc: "Home buying, selling, and investment property sourcing across Central Florida.",
                href: "/services/residential-real-estate",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold group-hover:text-gold transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Market Insights</h2>
            <p className="text-gray-500 mt-1">
              Research and analysis for commercial real estate investors
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-block text-gold hover:underline text-sm font-medium"
          >
            View All Insights &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/blog/orlando-commercial-real-estate-trends-2026"
            className="group bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
          >
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
              Market Report
            </span>
            <h3 className="text-white font-semibold group-hover:text-gold transition-colors mt-3 mb-1">
              Orlando Commercial Real Estate Trends 2026
            </h3>
            <p className="text-gray-500 text-sm">
              Cap rates, submarkets, investment strategies, and market outlook
              for Central Florida.
            </p>
          </Link>
          <Link
            href="/blog/orlando-entertainment-district-investment-guide"
            className="group bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
          >
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
              Investment Guide
            </span>
            <h3 className="text-white font-semibold group-hover:text-gold transition-colors mt-3 mb-1">
              Entertainment District Investment Guide
            </h3>
            <p className="text-gray-500 text-sm">
              Disney, Universal, and I-Drive corridor CRE investment
              opportunities.
            </p>
          </Link>
          <Link
            href="/blog/brevard-county-investment-property-outlook"
            className="group bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
          >
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
              Market Report
            </span>
            <h3 className="text-white font-semibold group-hover:text-gold transition-colors mt-3 mb-1">
              Brevard County Investment Outlook
            </h3>
            <p className="text-gray-500 text-sm">
              Space Coast growth drivers and commercial real estate
              opportunities.
            </p>
          </Link>
        </div>
        <div className="sm:hidden mt-6 text-center">
          <Link href="/blog" className="text-gold hover:underline text-sm font-medium">
            View All Insights &rarr;
          </Link>
        </div>
      </section>

      {/* About & Trust */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Local Expertise. Investor-First Approach.
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              MaxLife Enterprise specializes in commercial real estate across
              Central Florida and the Space Coast. We combine deep local market
              knowledge with disciplined underwriting to help investors find,
              acquire, and maximize high-performing assets.
            </p>
            <Link
              href="/about"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Find Your Next Deal?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether you&apos;re looking to acquire, sell, or explore new markets
            — let&apos;s talk about your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/investor-access"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get Deal Alerts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
