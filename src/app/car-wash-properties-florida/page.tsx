import type { Metadata } from "next";
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

const whyFloridaCarWash = [
  {
    title: "Year-Round Wash Weather",
    description:
      "Florida's climate drives 12-month demand with no winter shutdown. Rain, salt air, and coastal grime push frequency higher than northern markets.",
  },
  {
    title: "1,500+ New Residents Per Week",
    description:
      "Central Florida's population and car-count growth directly translates to member capture for express tunnel operators expanding here.",
  },
  {
    title: "Institutional Buyer Demand",
    description:
      "Private equity and REITs are rolling up car wash platforms nationwide. Quality Florida sites trade quickly to 1031 and sponsor capital.",
  },
  {
    title: "NNN Lease Structure",
    description:
      "Most operator-leaseback deals are true NNN or absolute net — the tenant covers taxes, insurance, maintenance, roof, and structure.",
  },
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Car Wash Investment Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            Car Wash Commercial Properties in Florida
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Year-round cash flow from one of the fastest-consolidating asset
            classes in Central Florida
          </p>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
            Express tunnel car washes have become a favorite of private equity
            and 1031 exchange buyers — and Florida is ground zero. Warm weather,
            explosive population growth, and a wave of national operator
            expansion have created a steady pipeline of NNN car wash leaseback
            opportunities trading in the 6.0% – 7.0% cap rate range. Whether you
            want a single-tenant NNN check or a value-add in-bay automatic,
            Central Florida car washes deliver a rare combination of yield,
            growth, and lease simplicity.
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
      </section>

      {/* Quick stats */}
      <section className="border-b border-dark-border bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carWashMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
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
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Not every car wash investment is the same. Here are the three most
          common formats trading in the Florida market today and what to expect
          from each.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {carWashFormats.map((format) => (
            <div
              key={format.name}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
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
              <p className="text-gray-400 text-sm leading-relaxed">
                {format.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Florida car wash */}
      <section className="border-y border-dark-border bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Why Florida Is the Best Market for{" "}
            <span className="text-gold">Car Wash Investing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            A few structural factors make Florida — and Central Florida in
            particular — one of the strongest car wash investment markets in
            the country.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyFloridaCarWash.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
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
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Below is a representative Central Florida express tunnel car wash
            deal already loaded into our deal analyzer — a $5.2M NNN leaseback
            with a credit operator at a 6.0% cap rate. Adjust any input to
            stress-test returns, DSCR, IRR, and equity multiple in real time.
          </p>
        </div>

        <div className="bg-dark-card/30 border border-dark-border rounded-2xl p-4 sm:p-6 mb-6">
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

      {/* Lead Capture Form */}
      <section
        id="car-wash-lead"
        className="border-t border-dark-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                See Available{" "}
                <span className="text-gold">Car Wash Properties</span>
              </h2>
              <p className="text-gray-400 text-center mb-8 leading-relaxed">
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
      <section className="border-t border-dark-border">
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
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group block"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
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
