import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Florida — Relocation Guide for Out-of-State Buyers | MaxLife Realty",
  description:
    "Comprehensive Florida relocation guide for out-of-state buyers. Learn about top markets, the buying process, taxes, cost of living, and what to know before moving to Florida.",
  keywords: [
    "moving to Florida real estate",
    "out-of-state buyer Florida",
    "relocating to Florida guide",
    "Florida relocation real estate",
    "buying a home in Florida from out of state",
    "Orlando relocation guide",
    "Florida real estate for out-of-state buyers",
  ],
  alternates: { canonical: "/moving-to-florida" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Moving to Florida — Relocation Guide for Out-of-State Buyers",
  description:
    "A comprehensive guide for out-of-state buyers considering relocation to Florida — covering top markets, the buying process, taxes, cost of living, and FAQs.",
  author: {
    "@type": "Person",
    name: "Ryan Solberg",
    url: "https://maxlifedevelopment.com/team/ryan-solberg",
  },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Realty",
    url: "https://maxlifedevelopment.com",
  },
};

const faqs = [
  {
    q: "Do I need to visit Florida in person to buy?",
    a: "Not necessarily. Many out-of-state buyers complete their purchase remotely using virtual tours, DocuSign contracts, and a trusted local agent. That said, we strongly recommend at least one in-person visit before going under contract on any significant purchase.",
  },
  {
    q: "How does Florida's homestead exemption work?",
    a: "If you make a Florida property your primary residence, you qualify for a homestead exemption of up to $50,000 off your assessed value, reducing your annual property tax bill. Additionally, the Save Our Homes cap limits annual tax assessment increases to 3% or CPI (whichever is lower) once homesteaded.",
  },
  {
    q: "Is there a state income tax in Florida?",
    a: "No — Florida has no state income tax, making it one of the most tax-favorable states for high earners, retirees, and business owners relocating from states like New York, California, or Illinois.",
  },
  {
    q: "What are closing costs like in Florida?",
    a: "Buyers typically pay 2–5% of the purchase price in closing costs, including title insurance, lender fees, prepaid taxes and insurance, and doc stamps on the mortgage. Our free Buyer Net Sheet calculator lets you estimate your cash-to-close before you make an offer.",
  },
  {
    q: "Which Florida market is best for relocation?",
    a: "It depends on your priorities. Orlando offers metro amenities, job diversity, and no state income tax. The Space Coast (Brevard County) provides lower cost of living, waterfront access, and proximity to the aerospace industry. Both markets have strong appreciation histories. Talk to Ryan to align your search with your goals.",
  },
  {
    q: "Can I buy commercial real estate in Florida as an out-of-state buyer?",
    a: "Yes — out-of-state investors regularly acquire Florida commercial properties remotely. We help buyers underwrite deals, review leases, and close without requiring multiple trips to Florida. Many of our 1031 exchange clients are out-of-state buyers.",
  },
];

export default function MovingToFloridaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Relocation Guide
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Relocating to{" "}
            <span className="text-gold">Florida?</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            Everything out-of-state buyers need to know before making the move —
            top markets, the buying process, taxes, cost of living, and how to
            work with a Florida broker from anywhere in the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Relocation Consultation
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-8 py-4 rounded-lg transition-colors text-center"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>

      {/* Why Florida */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Why Buyers Are Moving to{" "}
          <span className="text-gold">Florida</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "💰",
              title: "No State Income Tax",
              desc: "Florida levies zero state income tax, making it one of the most financially attractive states for earners, retirees, and business owners moving from high-tax states.",
            },
            {
              icon: "☀️",
              title: "Year-Round Climate",
              desc: "Warm weather 12 months of the year, 230+ average sunshine days annually, and access to beaches, waterways, and outdoor recreation across the state.",
            },
            {
              icon: "📈",
              title: "Strong Population Growth",
              desc: "Florida gains an estimated 1,000+ new residents per day — consistently among the fastest-growing states — driving housing demand and long-term appreciation.",
            },
            {
              icon: "🏢",
              title: "Business-Friendly Environment",
              desc: "No corporate income tax for most businesses, low regulatory burden, and a growing tech and aerospace economy — particularly around Orlando and the Space Coast.",
            },
            {
              icon: "🏡",
              title: "Homestead Exemption",
              desc: "Primary residents qualify for up to $50,000 off assessed value, plus the Save Our Homes cap limiting annual tax increases to 3% — significant long-term tax protection.",
            },
            {
              icon: "✈️",
              title: "Hub Connectivity",
              desc: "Orlando International Airport is one of the busiest in the country. Easy access to direct flights to major East Coast cities, Latin America, and Europe.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top markets */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Top Markets for{" "}
            <span className="text-gold">Relocation Buyers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Orlando Metro",
                tag: "Central Florida",
                href: "/markets/orlando-commercial-real-estate",
                highlights: [
                  "Nation's top tourist and entertainment hub",
                  "Diversified economy — tech, healthcare, aerospace",
                  "Strong job market and high rental demand",
                  "Multiple world-class school systems",
                  "Easy I-4 and 417 connectivity statewide",
                ],
              },
              {
                name: "Space Coast",
                tag: "Brevard County",
                href: "/space-coast-commercial-real-estate",
                highlights: [
                  "Lower cost of living vs. Orlando and South Florida",
                  "Aerospace/defense economy (SpaceX, NASA, Boeing)",
                  "Ocean-to-river living — Indian River Lagoon",
                  "Melbourne airport with growing connectivity",
                  "Fastest-growing county in Florida by % population",
                ],
              },
              {
                name: "Melbourne",
                tag: "Brevard County",
                href: "/melbourne-commercial-real-estate",
                highlights: [
                  "Mid-sized city feel with coastal proximity",
                  "Strong industrial and flex-space market",
                  "Top-rated public schools",
                  "Active downtown with restaurants and waterfront",
                  "Florida's Tech Corridor anchor city",
                ],
              },
            ].map((mkt) => (
              <div
                key={mkt.name}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col"
              >
                <span className="text-xs text-gold uppercase tracking-widest mb-1">
                  {mkt.tag}
                </span>
                <h3 className="text-white font-bold text-xl mb-4">{mkt.name}</h3>
                <ul className="space-y-2 flex-1">
                  {mkt.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={mkt.href}
                  className="mt-5 text-gold text-sm font-medium hover:text-gold-light transition-colors flex items-center gap-1"
                >
                  Explore {mkt.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          The Out-of-State Buying{" "}
          <span className="text-gold">Process</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Define your criteria and budget",
              desc: "Before searching, clarify: property type, price range, use case (primary residence, investment, or commercial), preferred market, and timeline. We'll send you a market briefing tailored to your goals.",
            },
            {
              step: "02",
              title: "Get pre-approved",
              desc: "For financed purchases, secure a pre-approval before making offers. As a licensed mortgage loan officer, Ryan can connect you with Florida lenders or discuss financing options directly.",
            },
            {
              step: "03",
              title: "Virtual tours and remote search",
              desc: "We conduct live video walkthroughs of shortlisted properties, provide detailed inspection reports, and share comparable sales data. Most out-of-state buyers narrow their list to 2–3 properties before visiting.",
            },
            {
              step: "04",
              title: "In-person due diligence trip",
              desc: "We recommend one visit to walk your top properties, experience the neighborhoods, and meet local professionals (attorneys, inspectors, title agents). We coordinate logistics for efficient multi-property days.",
            },
            {
              step: "05",
              title: "Offer, contract, and inspection",
              desc: "Florida contracts use standardized FAR/BAR forms. Inspection period is typically 10–15 days. We review all reports and negotiate repairs or price adjustments on your behalf.",
            },
            {
              step: "06",
              title: "Title and closing",
              desc: "Florida is a title-state — a licensed title company handles closing. Many closings can be completed remotely via DocuSign and wire transfer. Closing funds are typically wired 24–48 hours before closing.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex gap-5"
            >
              <span className="text-3xl font-bold text-gold/30 shrink-0 tabular-nums leading-none mt-0.5">
                {s.step}
              </span>
              <div>
                <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost of living snapshot */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-white mb-6">
            Florida Cost of Living — Quick Snapshot
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 font-medium pb-3 pr-4">Category</th>
                  <th className="text-left text-gold font-medium pb-3 pr-4">Orlando</th>
                  <th className="text-left text-gold font-medium pb-3 pr-4">Space Coast</th>
                  <th className="text-left text-gray-500 font-medium pb-3">vs. NYC / LA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  ["Median Home Price", "$395K", "$340K", "50–70% lower"],
                  ["State Income Tax", "0%", "0%", "0–13.3% savings"],
                  ["Avg. Property Tax Rate", "~0.9%", "~0.85%", "Similar to national avg"],
                  ["Avg. Home Insurance", "$3,500/yr", "$3,800/yr", "Higher due to hurricane"],
                  ["Avg. Commute Time", "28 min", "24 min", "Shorter than major metros"],
                ].map(([cat, orl, sc, note]) => (
                  <tr key={cat}>
                    <td className="py-3 pr-4 text-gray-300">{cat}</td>
                    <td className="py-3 pr-4 text-white font-medium">{orl}</td>
                    <td className="py-3 pr-4 text-white font-medium">{sc}</td>
                    <td className="py-3 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            Figures are approximate and based on 2025 data. Consult a local
            professional for precise numbers specific to your situation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-white mb-7">
          Frequently Asked{" "}
          <span className="text-gold">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Florida{" "}
            <span className="text-gold">Relocation Search</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Ryan Solberg works regularly with out-of-state buyers and investors
            relocating to Central Florida and the Space Coast. Let&apos;s talk
            about your goals — residential, commercial, or both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/net-sheets/buyer"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Estimate Closing Costs
            </Link>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Or call directly:{" "}
            <a href="tel:3215862121" className="text-gold hover:underline">
              (321) 586-2121
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
