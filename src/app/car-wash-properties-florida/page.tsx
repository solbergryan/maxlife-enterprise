import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import DealAnalyzer from "@/components/DealAnalyzer";

export const metadata: Metadata = {
  title:
    "Car Wash Commercial Properties for Sale in Florida | NNN Car Wash Investments",
  description:
    "Buy car wash commercial real estate in Florida. Express tunnel, flex-serve, and self-serve car washes for sale with NNN leases, strong cap rates, and Orlando / Central Florida growth.",
  keywords:
    "car wash properties florida, car wash for sale orlando, nnn car wash investment, express tunnel car wash florida, car wash commercial real estate",
};

const carWashFormats = [
  {
    name: "Express Exterior Tunnel",
    capRate: "6.00% – 7.00%",
    footprint: "3,500 – 5,500 SF + 1.0–1.5 acres",
    note:
      "High-throughput conveyor tunnels with unlimited monthly wash clubs. Strongest investor demand and most common NNN structure in Florida.",
  },
  {
    name: "Flex Serve (Full + Express)",
    capRate: "6.50% – 7.50%",
    footprint: "4,000 – 6,000 SF + 1.5–2 acres",
    note:
      "Hybrid of express tunnel plus detail bays. Higher revenue per site but more labor intensive than pure express formats.",
  },
  {
    name: "Self-Serve / In-Bay Automatic",
    capRate: "7.00% – 8.50%",
    footprint: "1,500 – 3,500 SF + 0.5–1 acre",
    note:
      "Lower entry price and simpler operations. Often acquired as value-add or redevelopment plays on strong retail corridors.",
  },
];

const yearRoundReasons = [
  {
    title: "~250 Wash-Worthy Days",
    description:
      "Florida averages roughly 250 days per year of wash-friendly weather versus ~150 days in northern markets — meaning tunnels run almost every day of the year without a seasonal lull.",
  },
  {
    title: "Post-Storm Demand Spikes",
    description:
      "Hurricane and afternoon thunderstorm seasons drive post-event wash demand. Rain doesn't just delay business — it creates follow-on volume for the 24–48 hours after each storm.",
  },
  {
    title: "Coastal Salt Corrosion",
    description:
      "Coastal counties like Brevard, Volusia, Pinellas, and the Keys see heavy salt-air corrosion. Locals wash their vehicles significantly more often to protect paint and undercarriages.",
  },
  {
    title: "No Snow / Salt Shutdown",
    description:
      "Midwest and Northeast operators effectively lose Q1 to road salt, brine, and freezing equipment. Florida operators run 365 days a year with zero winter downtime.",
  },
  {
    title: "Tourism + Rental Fleets",
    description:
      "Florida's 130M+ annual visitors and one of the densest rental car fleets in the country add constant institutional wash demand on top of retail consumer traffic.",
  },
  {
    title: "Retiree Demographics",
    description:
      "Older, affluent retirees wash their cars more frequently and are the highest-converting demographic for unlimited membership plans — the recurring revenue engine of every express tunnel.",
  },
];

const carWashPros = [
  {
    title: "True NNN Lease Structure",
    description:
      "Tenant covers taxes, insurance, maintenance, roof, structure, and even the wash equipment. Closest thing to a ground lease in operating real estate.",
  },
  {
    title: "High EBITDA Margins",
    description:
      "Mature express tunnels routinely post 35–50% EBITDA margins — supporting strong tenant credit and reliable rent coverage.",
  },
  {
    title: "Membership Revenue (MRR)",
    description:
      "Unlimited wash clubs convert 30–50% of revenue into predictable monthly recurring income, making tenant cash flow exceptionally stable.",
  },
  {
    title: "1031 Exchange Friendly",
    description:
      "Fee-simple car wash properties qualify as like-kind replacement. Fast close timelines make them ideal for 45/180-day deadline buyers.",
  },
  {
    title: "Bonus Depreciation Upside",
    description:
      "A cost segregation study typically allocates 30–40% of purchase price to personal property / land improvements — huge tax shelter for high-income investors.",
  },
  {
    title: "Recession-Resilient Demand",
    description:
      "Car washes have proven defensive in downturns. Wash frequency is sticky, and the low absolute ticket ($12–18) keeps consumer conversion high.",
  },
];

const carWashCons = [
  {
    title: "Operator Credit Matters",
    description:
      "A car wash is a purpose-built, specialty use. Tenant financial strength and lease guarantees matter much more than on a typical retail NNN.",
  },
  {
    title: "Specialized Buyer Pool",
    description:
      "At resale, the buyer pool is narrower than generic retail. Liquidity is improving as car washes become a recognized asset class, but it's still thinner.",
  },
  {
    title: "Equipment Obsolescence",
    description:
      "Tunnel equipment has a useful life. If your tenant underinvests in replacement CapEx, the asset can suffer even on a good lease. Underwrite reserves carefully.",
  },
  {
    title: "Environmental Compliance",
    description:
      "Modern car washes recycle water and are meaningfully cleaner than gas stations, but you still need a Phase I ESA and valid discharge permits at diligence.",
  },
  {
    title: "Saturation Risk",
    description:
      "Some suburban corridors are now oversupplied. Site selection, traffic counts, and demographic depth matter more than ever — not every pad is a good car wash pad.",
  },
];

const investorPersonas = [
  {
    name: "1031 Exchange Buyers",
    tag: "Deadline-Driven",
    description:
      "Buyers on a 45/180-day clock looking for clean NNN deals with fast close timelines and no landlord responsibilities.",
    fit: "Most car wash leasebacks can close in 30–45 days with minimal diligence friction.",
  },
  {
    name: "Passive Income Investors",
    tag: "Mailbox Money",
    description:
      "Investors who want a truly passive, management-free asset without TI, CapEx, or leasing activity.",
    fit: "The tenant handles everything — you cash rent checks and watch the annual bumps kick in.",
  },
  {
    name: "High-Income W-2 Earners",
    tag: "Tax Shelter Play",
    description:
      "Doctors, executives, and business owners using real estate to shelter active income via cost segregation and bonus depreciation.",
    fit: "30–40% of purchase price typically qualifies for accelerated depreciation on the equipment and land improvements.",
  },
  {
    name: "Family Offices & Trusts",
    tag: "Long Duration",
    description:
      "Allocators with multi-decade hold horizons who want inflation-protected income and low management burden.",
    fit: "15–20 year primary terms with CPI-linked or fixed rent bumps align with long-duration mandates.",
  },
  {
    name: "Operator-Owners",
    tag: "Platform Builders",
    description:
      "Existing car wash operators or franchisees building a portfolio of sites across Florida.",
    fit: "Buying sites off-market lets you lock up growth corridors before institutional capital catches up.",
  },
];

const majorOperators = [
  {
    name: "Mister Car Wash",
    detail:
      "Largest publicly-traded express tunnel operator (NYSE: MCW). Aggressive Florida growth pipeline.",
  },
  {
    name: "Tidal Wave Auto Spa",
    detail:
      "PE-backed platform with one of the fastest expansion rates in the Southeast.",
  },
  {
    name: "Take 5 Car Wash",
    detail:
      "Owned by Driven Brands (NASDAQ: DRVN) — institutional credit with national reach.",
  },
  {
    name: "Tommy's Express",
    detail:
      "Fast-growing franchise platform with a highly recognizable tunnel design.",
  },
  {
    name: "Zips Car Wash",
    detail: "300+ locations nationwide with active Florida acquisition activity.",
  },
  {
    name: "Club Car Wash",
    detail: "Midwest-based operator aggressively entering Florida markets.",
  },
  {
    name: "WhiteWater Express",
    detail:
      "Texas-based express platform expanding through the Gulf and Southeast.",
  },
  {
    name: "GO Car Wash",
    detail:
      "PE roll-up platform acquiring regional operators across the Sunbelt.",
  },
];

const keyUnderwritingMetrics = [
  {
    label: "Revenue per Car",
    detail: "$12 – $18 average ticket; $20+ at premium sites with detail packages",
  },
  {
    label: "Membership Capture",
    detail: "30 – 50% of total revenue from unlimited monthly plans",
  },
  {
    label: "Labor % of Revenue",
    detail: "10 – 18% at a pure express tunnel format",
  },
  {
    label: "Chemical Cost per Car",
    detail: "$0.35 – $0.60 for soap, wax, tire shine, and rinse aids",
  },
  {
    label: "Land Coverage Needed",
    detail: "1.0 – 1.5 acres for a full express tunnel with stacking lanes",
  },
  {
    label: "Equipment Replacement Reserves",
    detail: "Reserve $3 – $5 per car washed for long-term equipment CapEx",
  },
];

const carWashFaqs = [
  {
    q: "What's a typical cap rate for a car wash NNN in Florida?",
    a: "Branded operator NNN leasebacks in Central Florida are trading between 6.0% and 7.0% cap rates today, depending on tenant credit, remaining lease term, and site quality. Smaller operators or shorter leases can push to 7.5% or higher.",
  },
  {
    q: "What happens if the operator fails or vacates?",
    a: "Express tunnel car washes are purpose-built, so operator failure is a real risk worth underwriting. Mitigation comes from (1) national tenant credit and lease guarantees, (2) high-quality sites at visible corners with strong traffic counts, and (3) reuse optionality for the pad — QSR, C-store, auto service. Always underwrite the fee simple value of the land as a downside case.",
  },
  {
    q: "Who's responsible for replacing the wash equipment?",
    a: "On a true NNN car wash leaseback, the tenant is responsible for all equipment maintenance, repair, and replacement. That's why these leases feel more like ground leases than typical retail NNN deals — the landlord owns the dirt and the building shell only.",
  },
  {
    q: "Is there environmental liability I should worry about?",
    a: "Modern car washes recycle most of their water and discharge to sanitary sewer, so the environmental profile is meaningfully cleaner than a gas station or auto repair site. Still, run a Phase I ESA during diligence and confirm the operator holds valid discharge permits with the local utility.",
  },
  {
    q: "Can I 1031 exchange into a car wash property?",
    a: "Yes. A fee-simple car wash property (or a long-term ground lease of 30+ years) qualifies as like-kind replacement property for a 1031 exchange. Car wash leasebacks are one of the most popular 1031 target asset classes right now because of the combination of yield, deal flow, and fast close timelines.",
  },
  {
    q: "How does the bonus depreciation opportunity work?",
    a: "Roughly 30–40% of the purchase price of an express tunnel can be allocated to personal property and land improvements via a cost segregation study — much of which qualifies for accelerated and bonus depreciation. High-income investors who qualify for real estate professional status can use this to shelter active income.",
  },
  {
    q: "How long are typical car wash leases?",
    a: "15–20 year primary term is standard, with 10% rent bumps every 5 years, plus two to four five-year renewal options. Many deals include corporate lease guarantees from the operator parent or sponsor fund.",
  },
];

const fitCheckQuestions = [
  "You want a truly passive, management-free investment with zero landlord responsibilities.",
  "You're attracted to a growing asset class backed by private equity rollup tailwinds.",
  "You need the bonus depreciation / cost segregation benefits of equipment-heavy real estate.",
  "You're on a 1031 exchange clock and need a fast-closing NNN deal.",
  "You value long lease terms (15–20 years) from credit car wash operators.",
];

const carWashMetrics = [
  {
    label: "Typical Deal Size",
    value: "$3.5M – $8M",
    detail: "Single-site express tunnels in Central Florida",
  },
  {
    label: "Avg. Lease Term",
    value: "15 – 20 yrs",
    detail: "With 10% rent bumps every 5 years",
  },
  {
    label: "Common Cap Rate",
    value: "6.0% – 7.0%",
    detail: "For branded operator NNN leasebacks",
  },
];

// Pre-loaded deal inputs — representative Florida express tunnel
// ~$5.2M purchase, 6.0% cap, 20-year NNN with credit operator
const preloadedCarWashDeal = {
  assetType: "NNN" as const,
  purchasePrice: "5200000",
  buildingSF: "4500",
  annualRent: "312000",
  rentGrowth: "2.0",
  vacancyRate: "0",
  downPaymentPct: "30",
  interestRate: "7.25",
  amortization: "25",
  closingCosts: "25000",
  loanOrigFee: "1.0",
  holdPeriod: "10",
  exitCapSpread: "0.50",
};

export default function CarWashPropertiesFloridaPage() {
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
              name: "Car Wash Properties Florida",
              item: "https://maxlifedevelopment.com/car-wash-properties-florida",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: carWashFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/car-wash/maxlife-car-wash-car-washing-car-wallpapers-worker-man-car-wash-service-7086148.webp"
          alt="Car wash attendant cleaning a vehicle at a Florida wash bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                Car Wash Investment Opportunities
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Car Wash Commercial Properties in Florida
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Year-round cash flow from one of the fastest-consolidating
                asset classes in Central Florida
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Express tunnel car washes have become a favorite of private
                equity and 1031 exchange buyers — and Florida is ground zero.
                Warm weather, explosive population growth, and a wave of
                national operator expansion have created a steady pipeline of
                NNN car wash leaseback opportunities trading in the 6.0% –
                7.0% cap rate range. Whether you want a single-tenant NNN
                check or a value-add in-bay automatic, Central Florida car
                washes deliver a rare combination of yield, growth, and lease
                simplicity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#car-wash-analyzer"
                  data-track="hero-cta-car-wash"
                  className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  Run the Deal Analyzer
                </Link>
                <Link
                  href="#car-wash-lead"
                  className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  See Available Properties
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src="/car-wash/maxlife-car-wash.png"
                alt="MaxLife Car Wash — Florida express tunnel car wash exterior with palm trees and detailing bay"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-dark/80 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-xs font-medium text-white">
                    Florida express tunnel car wash
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carWashMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                  {m.label}
                </p>
                <p className="text-white text-3xl font-bold mb-1">{m.value}</p>
                <p className="text-gray-500 text-sm">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car wash formats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Car Wash <span className="text-gold">Property Formats</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Not every car wash investment is the same. Here are the three most
          common formats trading in the Florida market today and what to expect
          from each.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {carWashFormats.map((format) => (
            <div
              key={format.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                {format.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Cap Rate: {format.capRate}
                </span>
                <span className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                  {format.footprint}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {format.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Florida is great year-round */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Why Florida Is a <span className="text-gold">Year-Round</span> Car
            Wash Market
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Climate, demographics, and tourism combine to give Florida car
            washes something most markets don&apos;t have: twelve months of
            volume with virtually zero seasonal downtime.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yearRoundReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Car Wash Investing:{" "}
          <span className="text-gold">Pros &amp; Cons</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          An honest look at both sides so you can decide if this asset class
          fits your portfolio strategy.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-400"
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
              </div>
              <h3 className="text-white text-xl font-semibold">Why Buy</h3>
            </div>
            <ul className="space-y-5">
              {carWashPros.map((pro) => (
                <li key={pro.title}>
                  <p className="text-white font-medium text-sm mb-1">
                    {pro.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pro.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* Cons */}
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold">
                What to Watch
              </h3>
            </div>
            <ul className="space-y-5">
              {carWashCons.map((con) => (
                <li key={con.title}>
                  <p className="text-white font-medium text-sm mb-1">
                    {con.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {con.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investor personas — who it's best for */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Who Car Washes Are{" "}
            <span className="text-gold">Best Suited For</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Car wash NNN leasebacks don&apos;t fit every investor — but for the
            right profiles, they&apos;re one of the most compelling commercial
            real estate products on the market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorPersonas.map((persona) => (
              <div
                key={persona.name}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
              >
                <div className="mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {persona.name}
                  </h3>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/80 mt-1">
                    {persona.tag}
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  {persona.description}
                </p>
                <div className="border-t border-white/10 pt-3 mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Why It Fits
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {persona.fit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major operators expanding in Florida */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Major Operators{" "}
          <span className="text-gold">Expanding in Florida</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          These are the national and regional car wash operators most actively
          acquiring or building new sites across the Florida market today.
          Most NNN leaseback opportunities come from these platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {majorOperators.map((op) => (
            <div
              key={op.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/40 transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">{op.name}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                {op.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Note: credit quality and lease structure vary meaningfully across
          these operators. Always underwrite the specific tenant and lease
          guarantor, not just the brand.
        </p>
      </section>

      {/* Key underwriting metrics */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Key Car Wash{" "}
            <span className="text-gold">Underwriting Metrics</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            The numbers experienced car wash buyers stress-test before closing.
            Use these as benchmarks when you review an offering memorandum or
            operator P&amp;L.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyUnderwritingMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">
                    {metric.label}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-loaded Deal Analyzer */}
      <section
        id="car-wash-analyzer"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="text-center mb-10">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Interactive Underwriting
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sample Car Wash Deal{" "}
            <span className="text-gold">Pre-Loaded</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Below is a representative Central Florida express tunnel car wash
            deal already loaded into our deal analyzer — a $5.2M NNN leaseback
            with a credit operator at a 6.0% cap rate. Adjust any input to
            stress-test returns, DSCR, IRR, and equity multiple in real time.
          </p>
        </div>

        <div className="bg-white/[0.04]/30 border border-white/10 rounded-2xl p-4 sm:p-6 mb-6">
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full">
              Purchase: $5.2M
            </span>
            <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
              NNN Lease
            </span>
            <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
              Annual Rent: $312K
            </span>
            <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
              Entry Cap: ~6.0%
            </span>
            <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
              4,500 SF Tunnel
            </span>
            <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
              10-Year Hold
            </span>
          </div>
        </div>

        <DealAnalyzer initialInputs={preloadedCarWashDeal} />

        <p className="text-center text-gray-500 text-sm mt-8">
          Want to underwrite a different asset class?{" "}
          <Link
            href="/deal-analyzer"
            className="text-gold hover:underline"
          >
            Open the full Deal Analyzer
          </Link>
        </p>
      </section>

      {/* Browse Listings on Major CRE Marketplaces */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Browse Active Listings
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Car Wash Deals on{" "}
              <span className="text-gold">Major CRE Marketplaces</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Want to see what&apos;s publicly listed right now? These
              marketplaces aggregate on-market car wash opportunities across
              Florida. For off-market deals and broker-direct pocket listings,
              reach out to us below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Crexi",
                tag: "Tech-forward CRE marketplace",
                description:
                  "Growing inventory of express tunnel and operating car wash listings across every Florida market, with detailed deal rooms and OM downloads.",
                floridaUrl: "https://www.crexi.com/properties/FL/Car-Washes",
                orlandoUrl:
                  "https://www.crexi.com/properties/FL/Orlando/Car-Washes",
                allUrl: "https://www.crexi.com/properties/Car-Washes",
              },
              {
                name: "LoopNet",
                tag: "Largest CRE listings network",
                description:
                  "The biggest pool of car wash listings in Florida. Search by city, county, or statewide to see sale price, cap rate, and building details.",
                floridaUrl:
                  "https://www.loopnet.com/search/car-washes/fl/for-sale/",
                orlandoUrl:
                  "https://www.loopnet.com/search/car-washes/orlando-fl/for-sale/",
                allUrl: "https://www.loopnet.com/search/car-washes/usa/for-sale/",
              },
              {
                name: "BizBuySell",
                tag: "Operating business listings",
                description:
                  "Best resource when you want to buy an operating car wash business (with or without real estate). Includes seller financials and SDE.",
                floridaUrl:
                  "https://www.bizbuysell.com/florida/car-washes-for-sale/",
                orlandoUrl:
                  "https://www.bizbuysell.com/florida/car-washes-for-sale/",
                allUrl: "https://www.bizbuysell.com/car-washes-for-sale/",
              },
            ].map((site) => (
              <div
                key={site.name}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-xl mb-1">
                    {site.name}
                  </h3>
                  <p className="text-xs font-medium text-gold/80 uppercase tracking-wider">
                    {site.tag}
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  {site.description}
                </p>
                <div className="space-y-2">
                  <a
                    href={site.floridaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track={`carwash-listings-${site.name.toLowerCase()}-fl`}
                    className="flex items-center justify-between bg-gold/10 hover:bg-gold/20 text-gold font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    <span>Florida Car Washes</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={site.orlandoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track={`carwash-listings-${site.name.toLowerCase()}-orlando`}
                    className="flex items-center justify-between bg-white/5 hover:bg-white/10 text-gray-300 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    <span>Orlando Metro</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={site.allUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track={`carwash-listings-${site.name.toLowerCase()}-national`}
                    className="flex items-center justify-between text-gray-300 hover:text-gold font-medium px-4 py-2 text-sm transition-colors"
                  >
                    <span>Nationwide</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            The best car wash deals rarely hit these marketplaces. If you want
            access to off-market opportunities being traded between operators,
            family offices, and 1031 exchange buyers,{" "}
            <Link
              href="#car-wash-lead"
              className="text-gold hover:underline"
            >
              tell us what you&apos;re looking for
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Car Wash <span className="text-gold">Investor FAQ</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The questions we get most often from investors evaluating their
            first (or fifth) car wash deal.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {carWashFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <h3 className="text-white font-medium text-base pr-4">
                  {faq.q}
                </h3>
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 -mt-1">
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Fit Check */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                Is This You?
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Quick <span className="text-gold">Fit Check</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you nod &ldquo;yes&rdquo; to three or more of these, a car
                wash NNN leaseback likely deserves a slot on your shortlist.
              </p>
            </div>
            <ul className="space-y-4 mb-10">
              {fitCheckQuestions.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-5"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{q}</p>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link
                href="#car-wash-lead"
                data-track="carwash-fitcheck-cta"
                className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
              >
                Send Me Matching Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section
        id="car-wash-lead"
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                See Available{" "}
                <span className="text-gold">Car Wash Properties</span>
              </h2>
              <p className="text-gray-300 text-center mb-8 leading-relaxed">
                Tell us about your investment criteria and we will send you
                current Central Florida car wash opportunities — on and off
                market — that match your goals.
              </p>
              <LeadCaptureForm
                buttonText="See Available Car Wash Properties"
                subjectPrefix="Car Wash Property Inquiry"
                source="car-wash-properties-landing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Related <span className="text-gold">Resources</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NNN Properties Florida",
                description:
                  "Explore every triple net lease format trading in Central Florida, not just car washes.",
                href: "/nnn-properties-florida",
              },
              {
                title: "Orlando Cap Rates Investor Guide",
                description:
                  "A data-driven look at current cap rate trends by property type across the Orlando MSA.",
                href: "/blog/orlando-cap-rates-investor-guide",
              },
              {
                title: "Deal Analyzer",
                description:
                  "Underwrite any NNN, multifamily, or SFR deal with institutional-grade metrics.",
                href: "/deal-analyzer",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors group block"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {resource.description}
                </p>
                <span className="text-gold text-sm font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
