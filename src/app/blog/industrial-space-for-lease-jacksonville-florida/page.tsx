import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import BlogLeadCapture from "@/components/BlogLeadCapture";

const BASE_URL = "https://maxlifedevelopment.com";
const SLUG = "industrial-space-for-lease-jacksonville-florida";

export const metadata: Metadata = {
  title: "Industrial Space for Lease in Jacksonville, FL | 3PL & Distribution Guide",
  description:
    "Looking for industrial space for lease in Jacksonville, FL? This guide covers submarkets, specs, rents, and how 3PLs secure warehouse space fast on Florida's logistics corridor.",
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Industrial Space for Lease in Jacksonville, FL: The 3PL Operator's Guide",
  description:
    "A complete guide for 3PLs and logistics operators looking for industrial and warehouse space for lease in Jacksonville, Florida.",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  author: { "@type": "Person", name: "Ryan Solberg", url: `${BASE_URL}/about` },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Realty",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${SLUG}` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: "Industrial Space Jacksonville FL", item: `${BASE_URL}/blog/${SLUG}` },
  ],
};

export default function JacksonvilleIndustrialPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      {/* Header */}
      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/blog" className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold font-medium text-xs tracking-widest uppercase">Industrial Real Estate</span>
            <span className="text-gray-600 text-xs">·</span>
            <span className="text-gray-500 text-xs">April 26, 2026</span>
            <span className="text-gray-600 text-xs">·</span>
            <span className="text-gray-500 text-xs">8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Industrial Space for Lease in Jacksonville, FL: The 3PL Operator&apos;s Guide
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Jacksonville is Florida&apos;s top logistics market — JAXPORT, I-95 access, and 5% industrial vacancy make it the first call for most operators expanding into the Southeast. Here&apos;s what you need to know before you start your search.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-12">

          {/* Why Jacksonville */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Jacksonville Leads Florida&apos;s Industrial Market</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Jacksonville has three structural advantages no other Florida market can match: a deep-water port in the top 12 nationally by container volume, direct I-95 and I-10 highway access connecting the Southeast and Midwest, and the lowest industrial land cost of any major Florida metro. That combination drives demand from every logistics segment — big-box distribution, last-mile, cold storage, and auto parts.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              JAXPORT processed over 1.4 million TEUs in 2024 and is mid-expansion on its Blount Island Marine Terminal. That volume flows directly into demand for bulk distribution space within 20 miles of the port. On the consumer side, Jacksonville is within a 4-hour drive of 7 million Floridians, which means same-day and next-day last-mile economics work here in a way they don&apos;t in most of the country.
            </p>
            <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-6">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Market Snapshot</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Industrial Vacancy", value: "5.2%" },
                  { label: "Avg Asking Rent", value: "$8.75/sf" },
                  { label: "YOY Rent Growth", value: "+5.1%" },
                  { label: "Port TEU Volume", value: "Top 12 US" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-gold">{s.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">Industry estimates — directional, not audited.</p>
            </div>
          </section>

          {/* Submarkets */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Jacksonville Industrial Submarkets</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Not all JAX industrial is equal. Each submarket attracts different operator types and has different lease rate, clear height, and availability profiles. Here&apos;s how to think about them:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Northside / Trout River",
                  rent: "$7.50–$9.50/sf NNN",
                  best: "Bulk distribution, port-adjacent operations, auto logistics",
                  notes: "Closest to JAXPORT Blount Island and Dames Point. Heavy concentration of big-box tenants (Amazon, SYSCO, Estes). Limited Class A availability — projects sell before they complete.",
                },
                {
                  name: "Westside / I-10 Corridor",
                  rent: "$6.50–$8.50/sf NNN",
                  best: "Cross-dock, regional distribution, BTS",
                  notes: "Best land pricing in JAX. Strong for build-to-suit projects. I-10 to I-75 access for multi-state distribution. Active development pipeline.",
                },
                {
                  name: "Southside / Deerwood",
                  rent: "$9.00–$11.50/sf NNN",
                  best: "Last-mile, light assembly, e-commerce fulfillment",
                  notes: "Infill submarket. Tight vacancy (sub-4%). Smaller bay sizes (15k–40k sf). Premium rents due to last-mile positioning to south Jacksonville population.",
                },
                {
                  name: "Cecil Commerce Center",
                  rent: "$7.00–$9.00/sf NNN",
                  best: "Manufacturing, aerospace, large-format distribution",
                  notes: "Former Naval Air Station. 17,000 acres, longest runway in the Southeast. Anchor tenants include Boeing and AAR Corp. Long-term lease terms common.",
                },
              ].map((sub) => (
                <div key={sub.name} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-white font-semibold">{sub.name}</h3>
                    <span className="text-gold text-sm font-medium">{sub.rent}</span>
                  </div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Best for: {sub.best}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{sub.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Industrial Specs: What Jacksonville Operators Need</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Before you start touring buildings, align your spec requirements. Class A Jacksonville industrial has tightened considerably — if you need a specific clear height or dock configuration, the list of qualifying buildings is shorter than you think.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gold text-xs uppercase tracking-wider pb-3 pr-4">Spec</th>
                    <th className="text-left text-gray-300 text-xs uppercase tracking-wider pb-3 pr-4">Class A</th>
                    <th className="text-left text-gray-300 text-xs uppercase tracking-wider pb-3">Class B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Clear Height", "32–40 ft", "24–28 ft"],
                    ["Dock Doors", "1 per 8,000–10,000 sf", "1 per 12,000–15,000 sf"],
                    ["Truck Court Depth", "180–185 ft", "130–150 ft"],
                    ["Trailer Parking", "100–200 stalls", "50–75 stalls"],
                    ["Power", "2,000–4,000 amps", "800–1,600 amps"],
                    ["Column Spacing", "52 x 50 ft or better", "40 x 40 ft"],
                    ["ESFR Sprinklers", "Standard", "Varies"],
                  ].map(([spec, a, b]) => (
                    <tr key={spec}>
                      <td className="py-3 pr-4 text-white font-medium">{spec}</td>
                      <td className="py-3 pr-4 text-gray-300">{a}</td>
                      <td className="py-3 text-gray-400">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to find space */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Find Industrial Space Fast in Jacksonville</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The listings you see on CoStar and LoopNet represent roughly 40% of available Jacksonville industrial space. The rest moves off-market — through broker networks, direct landlord calls, and upcoming vacancies that haven&apos;t been listed yet.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here&apos;s the process that gets 3PLs into space in 60–90 days instead of 6 months:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: "01",
                  title: "Define your non-negotiables",
                  desc: "Square footage range, clear height minimum, dock door count, power requirements, and submarket preference. These filter from 200 buildings to 20.",
                },
                {
                  step: "02",
                  title: "Go off-market first",
                  desc: "A broker with active JAX relationships can call landlords before vacancy hits LoopNet. Buildings coming available in 60–120 days are often accessible now.",
                },
                {
                  step: "03",
                  title: "Tour 3–5 qualified options",
                  desc: "Don't tour 20 buildings. Tour 3–5 that meet your actual spec. More tours waste time and signal weak conviction to landlords.",
                },
                {
                  step: "04",
                  title: "Run multiple deals simultaneously",
                  desc: "Submit LOIs on 2–3 buildings at once. The best operators don't fall in love with one building — they create leverage and let landlords compete.",
                },
                {
                  step: "05",
                  title: "Negotiate the lease hard",
                  desc: "TI allowance, free rent, expansion rights, renewal options, and rent bumps are all negotiable in JAX. Ask for them all and see where they land.",
                },
                {
                  step: "06",
                  title: "Close in 30–45 days",
                  desc: "JAX landlords with good credit tenants will move fast. Have your financials and references ready before you tour.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Step {item.step}</p>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lease vs BTS */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Lease vs. Build-to-Suit in Jacksonville</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you need space in the next 6 months, you&apos;re leasing existing inventory. If your timeline is 18–36 months and your spec requirements are highly specific, build-to-suit may pencil better — especially on the Westside where land pricing makes BTS economics work.
            </p>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gold font-semibold mb-3">Lease (Existing)</h4>
                  <ul className="space-y-2">
                    {[
                      "Occupancy in 60–120 days",
                      "No construction risk",
                      "Lower upfront commitment",
                      "TI allowance from landlord",
                      "Limited spec customization",
                      "Rent at current market (high)",
                    ].map((item) => (
                      <li key={item} className="text-gray-300 text-sm flex gap-2">
                        <span className="text-gold mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold font-semibold mb-3">Build-to-Suit</h4>
                  <ul className="space-y-2">
                    {[
                      "18–36 month timeline",
                      "Exact spec to your requirements",
                      "Longer lease term required (10–15 yr)",
                      "Typically lower long-term rent",
                      "Developer takes construction risk",
                      "Best for 200k sf+ requirements",
                    ].map((item) => (
                      <li key={item} className="text-gray-300 text-sm flex gap-2">
                        <span className="text-gold mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Working with a broker */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Working With a Logistics Broker in Jacksonville</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The right tenant rep broker costs you nothing — landlords pay both sides of the commission. What a good logistics broker gives you is access to off-market space, relationships with the major JAX industrial REITs (Prologis, Duke Realty, Flagler), and negotiating leverage you don&apos;t have when you call landlords directly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              When interviewing brokers, ask three questions: How many JAX industrial leases have you done in the last 12 months? Which submarkets do you cover? Can you name 3 logistics operators you&apos;ve represented? If they can&apos;t answer all three specifically, find someone who can.
            </p>
            <p className="text-gray-300 leading-relaxed">
              At MaxLife Realty, we focus specifically on logistics and industrial tenant representation across Jacksonville, Lakeland, and Orlando. If you&apos;re looking for space, we can typically have 3–5 qualified options to you within 48 hours.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the average rent for industrial space in Jacksonville, FL?",
                  a: "Class A bulk distribution ranges from $7.50–$9.50/sf NNN depending on submarket. Last-mile infill runs $9.00–$11.50/sf NNN. Rents have increased 4–6% annually since 2022.",
                },
                {
                  q: "How much industrial space is available in Jacksonville?",
                  a: "Jacksonville's industrial vacancy rate is approximately 5.2% as of Q1 2026. The Northside and Southside submarkets are tightest. The Westside has more availability, particularly for larger footprints.",
                },
                {
                  q: "How long does it take to lease industrial space in Jacksonville?",
                  a: "Working with a broker, most 3PLs and operators can tour, select, negotiate, and execute a lease in 45–90 days. Build-to-suit projects require 18–36 months.",
                },
                {
                  q: "Is Jacksonville a good market for 3PLs?",
                  a: "Yes. JAXPORT's container volume, I-95/I-10 highway access, lower land costs versus Miami, and Florida's population growth make Jacksonville one of the strongest 3PL markets in the Southeast.",
                },
                {
                  q: "Do I need a broker to find industrial space in Jacksonville?",
                  a: "No, but you should use one. Tenant rep brokers are paid by landlords — you pay nothing. A good logistics broker will get you access to off-market space and negotiate better terms than you can achieve alone.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-xl font-bold text-white mb-6">Related Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/lakeland-florida-warehouse-space-i4-corridor", title: "Lakeland Warehouse Space: The I-4 Corridor Guide", desc: "How operators find distribution space on Florida's busiest logistics corridor." },
                { href: "/industries/logistics-distribution", title: "Logistics & Distribution Real Estate", desc: "Our full logistics real estate service — tenant rep and investor sourcing statewide." },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors block">
                  <h3 className="text-white font-semibold text-sm mb-1">{link.title}</h3>
                  <p className="text-gray-500 text-xs">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>

        <BlogLeadCapture
          heading="Looking for Jacksonville Industrial Space?"
          description="Tell us your size, submarket, and timeline. We'll send 3–5 qualified options within 48 hours — on- and off-market."
          sourcePage={`/blog/${SLUG}?audience=tenant`}
        />
      </article>
    </>
  );
}
