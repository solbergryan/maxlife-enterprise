import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Orlando Commercial Real Estate Market Insights",
  description:
    "Discover Orlando commercial real estate market insights and Central Florida CRE news. Guides on NNN investing, cap rates, land development & market trends.",
  openGraph: {
    title: "Central Florida CRE Blog | Market Insights & Investment Guides",
    description:
      "Market analysis, investment guides, and expert perspectives on Orlando commercial real estate, NNN investing, and Central Florida development trends.",
  },
};

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
      name: "Market Insights",
      item: "https://maxlifedevelopment.com/blog",
    },
  ],
};

const articles = [
  {
    slug: "orlando-commercial-real-estate-trends-2026",
    title: "Orlando Commercial Real Estate Market Trends 2026",
    excerpt:
      "Comprehensive analysis of the Orlando CRE market — cap rates, sector outlooks, the Disney & Universal entertainment corridor, Lake Nona, infrastructure, migration trends, and investment strategies for 2026.",
    category: "Market Report",
    date: "April 2026",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "orlando-entertainment-district-investment-guide",
    title:
      "Orlando's Entertainment District: A CRE Investment Guide for the Disney, Universal & I-Drive Corridor",
    excerpt:
      "The definitive guide to investing in Orlando's tourism and entertainment corridor. Epic Universe, Walt Disney World expansion, I-Drive, US-192, hospitality, and retail investment strategies.",
    category: "Market Report",
    date: "April 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "brevard-county-investment-property-outlook",
    title: "Brevard County Investment Property Outlook",
    excerpt:
      "Why Florida's Space Coast is emerging as one of the state's most compelling commercial real estate markets for investors.",
    category: "Market Report",
    date: "April 2026",
    readTime: "7 min read",
  },
  {
    slug: "what-is-nnn-lease",
    title: "What Is a Triple Net (NNN) Lease? A Guide for Investors",
    excerpt:
      "Understanding the structure, benefits, and risks of NNN lease investments — and why they're one of the most popular vehicles for passive real estate income.",
    category: "NNN Investing",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "central-florida-land-development",
    title: "Why Central Florida Is a Hot Market for Land Development",
    excerpt:
      "Population growth, infrastructure investment, and strong demand are driving land values across the Orlando and Space Coast corridors. Here's what investors need to know.",
    category: "Land Development",
    date: "April 2026",
    readTime: "4 min read",
  },
  {
    slug: "orlando-industrial-real-estate-guide",
    title: "Industrial Property in Central Florida: An Investor's Guide",
    excerpt:
      "Warehouse, flex, distribution, and manufacturing property for sale across Central Florida — the I-4 corridor, Orlando, the Space Coast, and Polk County.",
    category: "Investment Guide",
    date: "April 2026",
    readTime: "10 min read",
  },
  {
    slug: "orlando-multifamily-investment-guide",
    title: "Orlando Multifamily Investment Guide",
    excerpt:
      "Market data, cap rates, value-add strategies, and top submarkets for apartment investors in Central Florida's fastest-growing metro.",
    category: "Investment Guide",
    date: "April 2026",
    readTime: "10 min read",
  },
  {
    slug: "orlando-retail-commercial-real-estate",
    title: "Best Orlando Submarkets for Retail Space for Rent",
    excerpt:
      "Where to find retail space for rent in Orlando — I-Drive, Sand Lake, Winter Park, Lake Nona, Millenia — plus investment guidance for strip centers and single-tenant net lease.",
    category: "Investment Guide",
    date: "April 2026",
    readTime: "9 min read",
  },
  {
    slug: "orlando-nnn-properties-for-sale",
    title: "Orlando NNN Properties for Sale: Investor Guide",
    excerpt:
      "Single-tenant triple net lease investments with national credit tenants across Central Florida. Tenant profiles, cap rates, and evaluation criteria.",
    category: "NNN Investing",
    date: "April 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-buy-commercial-property-orlando",
    title: "How to Buy Commercial Property in Orlando: A Complete Guide",
    excerpt:
      "A step-by-step guide to finding commercial property for sale in Orlando — market selection, underwriting, due diligence, financing, and closing.",
    category: "Buyer Guide",
    date: "April 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "orlando-cap-rates-investor-guide",
    title: "Orlando Cap Rates: A Guide for CRE Investors",
    excerpt:
      "Current cap rates for Orlando commercial real estate by property type — NNN, retail, multifamily, industrial, and office. Trends and how to find value.",
    category: "Market Analysis",
    date: "April 2026",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "1031-exchange-orlando-guide",
    title: "1031 Exchange Rules for Florida Investors",
    excerpt:
      "1031 exchange rules, timelines, and replacement property strategy for Florida investors reinvesting capital gains into Orlando commercial real estate.",
    category: "Tax & Strategy",
    date: "April 2026",
    readTime: "9 min read",
  },
  {
    slug: "lake-county-commercial-real-estate-guide",
    title:
      "Lake County FL Commercial Real Estate: The Growth Corridor Investors Are Missing",
    excerpt:
      "Wellness Way corridor, turnpike expansion, Clermont and Minneola growth — why Lake County is Central Florida's most undervalued CRE market.",
    category: "Market Report",
    date: "April 2026",
    readTime: "14 min read",
  },
  {
    slug: "how-to-evaluate-commercial-real-estate-deal",
    title: "How to Evaluate a Commercial Real Estate Deal",
    excerpt:
      "The metrics that actually matter: cap rate, NOI, cash-on-cash, DSCR, tenant credit, and lease analysis. A framework for evaluating any CRE investment.",
    category: "Investor Education",
    date: "April 2026",
    readTime: "14 min read",
    featured: true,
  },
  {
    slug: "medical-office-investing-central-florida",
    title: "Medical Office Investing in Central Florida",
    excerpt:
      "Aging demographics, healthcare expansion, and tenant stability make medical office one of CRE's most resilient asset classes. Here's how to invest in Central Florida.",
    category: "Investment Guide",
    date: "April 2026",
    readTime: "14 min read",
  },
  {
    slug: "why-invest-commercial-real-estate-florida",
    title: "Why Out-of-State Investors Choose Florida CRE",
    excerpt:
      "No state income tax, population growth, and strong fundamentals — why investors from California, New York, and New Jersey are building portfolios in Central Florida.",
    category: "Investor Education",
    date: "April 2026",
    readTime: "14 min read",
    featured: true,
  },
  {
    slug: "office-space-for-lease-orlando-guide",
    title: "Office Space for Lease in Orlando: A Tenant's Guide",
    excerpt:
      "How to find, compare, and negotiate office space for lease in Orlando — from Downtown and Lake Nona to Maitland, Winter Park, and the Sand Lake corridor.",
    category: "Tenant Guide",
    date: "April 2026",
    readTime: "11 min read",
  },
  {
    slug: "build-to-suit-vs-existing-commercial-orlando",
    title: "Build-to-Suit vs Existing Commercial Property in Orlando",
    excerpt:
      "When does a build-to-suit Orlando project beat buying or leasing existing commercial property? Timeline, cost, customization, and risk compared.",
    category: "Strategy Guide",
    date: "April 2026",
    readTime: "10 min read",
  },
  {
    slug: "central-florida-commercial-real-estate-submarkets",
    title: "Central Florida's Top Commercial Real Estate Submarkets",
    excerpt:
      "A tour of Central Florida commercial real estate submarkets — Orlando, Lake Nona, I-Drive, the Space Coast, Lake County, and Polk County — for investors, tenants, and developers.",
    category: "Market Overview",
    date: "April 2026",
    readTime: "12 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Market <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Guides, analysis, and perspectives on NNN investing, land
            development, and the Central Florida real estate market.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-gray-500 text-xs">{article.date}</span>
                <span className="text-gray-500 text-xs">
                  {article.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions About Investing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We&apos;re happy to discuss your investment goals, answer questions
            about the market, or just talk shop. No pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
