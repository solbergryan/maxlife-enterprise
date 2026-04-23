import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here — New to Commercial Real Estate or New to MaxLife",
  description:
    "New to commercial real estate or new to MaxLife Development? Start here. A curated roadmap to our tools, guides, services, and resources based on your investor goals.",
  alternates: { canonical: "/start-here" },
};

const paths = [
  {
    title: "I'm New to Commercial Real Estate",
    slug: "first-time",
    description:
      "Just exploring? Start with education. Our Academy covers the fundamentals in 20 free courses.",
    next: [
      { label: "CRE Glossary (70+ terms)", href: "/glossary" },
      { label: "Free CRE Academy Courses", href: "/academy" },
      { label: "What Is a NNN Lease?", href: "/blog/what-is-nnn-lease" },
      { label: "First-Time CRE Investor Guide", href: "/investors/first-time-cre-investors" },
      { label: "Ultimate Guide to NNN Investing", href: "/blog/ultimate-guide-nnn-investing" },
    ],
    primary: {
      label: "Browse the Academy",
      href: "/academy",
    },
  },
  {
    title: "I'm a 1031 Exchange Buyer",
    slug: "1031",
    description:
      "Racing the 45-day clock? We source NNN replacement properties fast.",
    next: [
      { label: "1031 Timeline Calculator", href: "/1031-timeline-calculator" },
      { label: "1031 Buyer Services", href: "/investors/1031-exchange-buyers" },
      { label: "1031 Exchange FAQ", href: "/faq/1031-exchange" },
      { label: "NNN Properties by Tenant", href: "/nnn-tenants" },
      { label: "NNN Properties in Your City", href: "/buy-nnn-property/orlando" },
    ],
    primary: {
      label: "Request Replacement Inventory",
      href: "/contact?interest=1031 Replacement Property",
    },
  },
  {
    title: "I Want Passive NNN Income",
    slug: "passive",
    description:
      "Looking for mailbox money? NNN is the most passive CRE structure.",
    next: [
      { label: "Passive Investor Services", href: "/investors/passive-income-investors" },
      { label: "NNN Tenant Profiles", href: "/nnn-tenants" },
      { label: "Absolute NNN Lease Explained", href: "/lease-types/absolute-nnn-lease" },
      { label: "Cap Rate Calculator", href: "/cap-rate-calculator" },
      { label: "NNN Investment FAQ", href: "/faq/nnn-investments" },
    ],
    primary: {
      label: "Browse NNN Inventory",
      href: "/nnn-properties-florida",
    },
  },
  {
    title: "I Want to Sell My Commercial Property",
    slug: "sell",
    description:
      "Free property valuation. We market aggressively to maximize your proceeds.",
    next: [
      { label: "Sell Commercial Property in Orlando", href: "/sell-commercial-property/orlando" },
      { label: "Seller Net Sheet Calculator", href: "/net-sheets/seller" },
      { label: "CRE Transaction Process FAQ", href: "/faq/commercial-real-estate-process" },
      { label: "Current Opportunities", href: "/opportunities" },
    ],
    primary: {
      label: "Request Free Valuation",
      href: "/contact?interest=Sell Commercial Property",
    },
  },
  {
    title: "I'm a Developer",
    slug: "developer",
    description:
      "Looking for land, tenants, or development partners? We work with CRE developers across Florida.",
    next: [
      { label: "CRE Developer Services", href: "/investors/real-estate-developers" },
      { label: "Commercial Development Services", href: "/services/commercial-development" },
      { label: "Buy Commercial Land by City", href: "/buy-commercial-land/orlando" },
      { label: "Build-to-Suit Lease Guide", href: "/lease-types/build-to-suit-lease" },
      { label: "Florida Land Development FAQ", href: "/faq/land-development" },
    ],
    primary: {
      label: "Source Development Sites",
      href: "/contact?interest=Commercial Land",
    },
  },
  {
    title: "I Need Commercial Financing",
    slug: "financing",
    description:
      "Licensed mortgage originator (NMLS #1784218). We structure commercial loans across all lender types.",
    next: [
      { label: "Commercial Financing Services", href: "/services/commercial-financing" },
      { label: "Commercial Financing FAQ", href: "/faq/commercial-financing" },
      { label: "CRE Lenders Directory", href: "/lenders" },
      { label: "Cost Segregation Calculator", href: "/cost-segregation-calculator" },
    ],
    primary: {
      label: "Get a Financing Quote",
      href: "/contact?interest=Commercial Financing",
    },
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Start Here
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            New Here? <span className="text-gold">Let&apos;s Get Started.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            MaxLife Development offers a lot of resources — market reports,
            academy courses, tools, guides, services. This page is your
            roadmap. Pick the path that matches where you&apos;re at, and
            we&apos;ll point you to the right resources.
          </p>
        </div>
      </section>

      {/* Paths */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {paths.map((path) => (
            <div
              key={path.slug}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {path.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {path.description}
                  </p>
                  <Link
                    href={path.primary.href}
                    className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    {path.primary.label}
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                    Recommended Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {path.next.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="bg-dark border border-dark-border hover:border-gold/40 rounded-lg p-3 text-sm text-gray-300 hover:text-gold transition-colors flex items-center justify-between group"
                      >
                        <span>{item.label}</span>
                        <span className="text-gold group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-dark-border">
        <h2 className="text-2xl font-bold text-white mb-6">
          Complete <span className="text-gold">Site Map</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
                { label: "NNN Investments", href: "/services/nnn-investments" },
                { label: "Commercial Development", href: "/services/commercial-development" },
                { label: "Commercial Financing", href: "/services/commercial-financing" },
                { label: "Land Development", href: "/services/land-development" },
                { label: "Residential", href: "/services/residential-real-estate" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              Tools
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Deal Analyzer", href: "/deal-analyzer" },
                { label: "Cap Rate Calculator", href: "/cap-rate-calculator" },
                { label: "1031 Timeline", href: "/1031-timeline-calculator" },
                { label: "Cost Segregation", href: "/cost-segregation-calculator" },
                { label: "Seller Net Sheet", href: "/net-sheets/seller" },
                { label: "Buyer Estimate", href: "/net-sheets/buyer" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Market Reports", href: "/market-reports" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "Academy (Free)", href: "/academy" },
                { label: "FAQ", href: "/faq" },
                { label: "CRE Glossary", href: "/glossary" },
                { label: "Lease Types Guide", href: "/lease-types" },
                { label: "Professionals Guide", href: "/professionals" },
                { label: "Org Chart", href: "/professionals/org-chart" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About MaxLife", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "CRE Lenders Directory", href: "/lenders" },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Not Sure Where to <span className="text-gold">Start</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Reach out directly. Tell us what you&apos;re trying to accomplish,
            and we&apos;ll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
