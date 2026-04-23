import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { markets } from "@/data/markets";
import CaseStudyCard from "@/components/CaseStudyCard";
import InvestorSignupForm from "@/components/InvestorSignupForm";
import Testimonials from "@/components/Testimonials";

const marketImages: Record<string, string> = {
  "orlando-commercial-real-estate": "/listings/989971.jpg",
  "brevard-county-commercial-real-estate": "/listings/867542.jpg",
  "lake-county-commercial-land": "/listings/985632.jpg",
  "central-florida-investment-properties": "/listings/677235.jpg",
  "lake-nona-commercial-real-estate": "/listings/591367.jpg",
};

const blogImages: Record<string, string> = {
  "orlando-commercial-real-estate-trends-2026":
    "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-office-4k-wallpaper-1920x1080-city-3306146.webp",
  "orlando-entertainment-district-investment-guide":
    "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-adidas-atlantic-city-shopping-fisheye-store-458043.webp",
  "brevard-county-investment-property-outlook":
    "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-city-sky-sunlight-office-houston-4549648.webp",
};

export default function HomePage() {
  const featuredStudy = caseStudies[0];

  return (
    <>
      {/* Hero — Deal-Focused */}
      <section className="relative border-b border-dark-border overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/hero/home-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero/home-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark/80 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Central Florida &amp; Space Coast
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Selling Commercial Property in{" "}
            <span className="text-gold">Central Florida?</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed">
            MaxLife Realty is a Central Florida commercial brokerage focused
            on owners who want straight answers, real numbers, and a
            well-connected broker &mdash; not another search portal. We help
            sellers price, position, and place commercial properties across
            Orlando, the Space Coast, and Lake Nona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/opportunities#request-valuation"
              data-track="hero-seller-valuation"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Request a Seller Valuation
            </Link>
            <Link
              href="/net-sheets/seller"
              data-track="hero-seller-net-sheet"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Run a Seller Net Sheet
            </Link>
            <Link
              href="/deal-analyzer"
              className="inline-block border border-dark-border text-gray-300 hover:border-gray-500 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Open Deal Analyzer
            </Link>
          </div>
        </div>
      </section>

      {/* Why MaxLife */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            For Commercial Property Owners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The broker you hire should know{" "}
            <span className="text-gold">more than the market</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Central Florida has hundreds of agents who can put a sign in the
            ground. There are very few who can underwrite your property at
            institutional depth, walk you through the net-at-close before you
            sign, and hand-match you with the right buyer pool. That&apos;s
            what we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Honest valuations, not sales pitches",
              body: "Cap-rate and DSCR-based underwriting using our in-house Deal Analyzer. You see the math before you list.",
              cta: { label: "Try the Deal Analyzer", href: "/deal-analyzer" },
            },
            {
              title: "Know your net at close",
              body: "Free Florida net sheet calculator with per-county defaults and a branded PDF for your files.",
              cta: { label: "Open Seller Net Sheet", href: "/net-sheets/seller" },
            },
            {
              title: "A real investor network",
              body: "Direct relationships with Central Florida&apos;s active commercial buyers &mdash; 1031 exchangers, NNN funds, and private capital.",
              cta: { label: "How we work", href: "/services" },
            },
            {
              title: "Market-by-market depth",
              body: "Orlando, Brevard, Lake, Seminole, Osceola, Volusia, and Polk. Each market has its own dynamics and we know them cold.",
              cta: { label: "See market reports", href: "/markets" },
            },
            {
              title: "Off-market when it fits",
              body: "For the right property, the quietest sale is often the most profitable. We place quietly when that&apos;s the brief.",
              cta: { label: "Contact us", href: "/contact" },
            },
            {
              title: "Central Florida insights",
              body: "Long-form market research, trend pieces, and cap-rate guides written by practitioners, not content mills.",
              cta: { label: "Read the blog", href: "/blog" },
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors flex flex-col"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-4 flex-1"
                dangerouslySetInnerHTML={{ __html: f.body }}
              />
              <Link
                href={f.cta.href}
                className="text-gold hover:text-gold-light font-semibold text-sm inline-flex items-center gap-1.5"
              >
                {f.cta.label}
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

      {/* Stats */}
      <section className="border-t border-dark-border bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "Counties Served" },
              { value: "$10M+", label: "Transaction Volume" },
              { value: "20", label: "Free CRE Courses" },
              { value: "0%", label: "Florida Income Tax" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gold text-3xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-b border-dark-border bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-gold shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Florida Real Estate Broker&nbsp;
              <span className="text-gray-500">#3354351</span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-gold shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Mortgage Loan Officer&nbsp;
              <span className="text-gray-500">NMLS #1784218</span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-gold shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              REALTOR<sup>&reg;</sup>
            </span>
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
                className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
              >
                {marketImages[market.slug] && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={marketImages[market.slug]}
                      alt={`${market.name} commercial real estate`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                  </div>
                )}
                <div className="p-5">
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
            Commercial Real Estate Services in Orlando
          </h2>
          <p className="text-gray-500 mb-8">
            Sales, leasing, NNN investments, and land development across Central Florida
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Commercial Property for Sale",
                desc: "Income-producing commercial property for sale across Orlando and Central Florida — retail, office, industrial, and mixed-use.",
                href: "/orlando-commercial-real-estate-deals",
              },
              {
                title: "NNN Investments",
                desc: "Single-tenant NNN properties with national credit tenants. Passive income, predictable returns.",
                href: "/nnn-properties-florida",
              },
              {
                title: "Land for Development",
                desc: "Shovel-ready and raw land for development across Central Florida, including build-to-suit sites.",
                href: "/central-florida-land-for-development",
              },
              {
                title: "1031 Exchange Replacement",
                desc: "1031 exchange replacement properties in Orlando and Central Florida — NNN, multi-tenant, and value-add opportunities.",
                href: "/1031-exchange-florida",
              },
              {
                title: "Development Services",
                desc: "Full development lifecycle from site selection and entitlements through investor partnerships.",
                href: "/services/development",
              },
              {
                title: "Acquisitions & Dispositions",
                desc: "Buy-side and sell-side representation for commercial properties across Orlando and the Space Coast.",
                href: "/services/commercial-real-estate",
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
          {[
            {
              href: "/blog/orlando-commercial-real-estate-trends-2026",
              slug: "orlando-commercial-real-estate-trends-2026",
              tag: "Market Report",
              title: "Orlando Commercial Real Estate Trends 2026",
              desc: "Cap rates, submarkets, investment strategies, and market outlook for Central Florida.",
            },
            {
              href: "/blog/orlando-entertainment-district-investment-guide",
              slug: "orlando-entertainment-district-investment-guide",
              tag: "Investment Guide",
              title: "Entertainment District Investment Guide",
              desc: "Disney, Universal, and I-Drive corridor CRE investment opportunities.",
            },
            {
              href: "/blog/brevard-county-investment-property-outlook",
              slug: "brevard-county-investment-property-outlook",
              tag: "Market Report",
              title: "Brevard County Investment Outlook",
              desc: "Space Coast growth drivers and commercial real estate opportunities.",
            },
          ].map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
            >
              {blogImages[post.slug] && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={blogImages[post.slug]}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {post.tag}
                </span>
                <h3 className="text-white font-semibold group-hover:text-gold transition-colors mt-3 mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.desc}</p>
              </div>
            </Link>
          ))}
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
              MaxLife Realty specializes in commercial real estate across
              Central Florida and the Space Coast. We combine deep local market
              knowledge with disciplined underwriting to help investors find,
              acquire, and maximize high-performing assets.
            </p>
            <Link
              href="/about"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Meet the Broker
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

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
              data-track="home-schedule-call"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/investor-access"
              data-track="home-deal-alerts"
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
