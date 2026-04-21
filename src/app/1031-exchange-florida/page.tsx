import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title:
    "1031 Exchange Florida | Commercial Real Estate 1031 Exchange Into Florida",
  description:
    "1031 exchange into Florida commercial real estate. No state income tax, pre-vetted properties, and timeline management for your tax-deferred exchange.",
  keywords: [
    "1031 exchange florida",
    "1031 exchange commercial real estate",
    "1031 exchange orlando",
    "tax deferred exchange florida",
    "1031 replacement property florida",
    "NNN 1031 exchange",
    "florida commercial real estate investment",
  ],
  openGraph: {
    title: "1031 Exchange Into Florida — No State Income Tax | MaxLife Development",
    description:
      "Identify and close replacement properties on your 1031 timeline. Pre-vetted Florida CRE inventory ready for exchange buyers.",
  },
};

const faqItems = [
  {
    question: "What is a 1031 exchange and how does it work in Florida?",
    answer:
      "A 1031 exchange (named after IRC Section 1031) allows you to defer capital gains taxes when you sell an investment property and reinvest the proceeds into a like-kind replacement property. Florida is one of the most popular destinations for 1031 exchanges because the state has no personal income tax — meaning you eliminate the state tax layer entirely while deferring federal capital gains.",
  },
  {
    question: "What are the deadlines for a 1031 exchange?",
    answer:
      "You have two critical deadlines after selling your relinquished property: the 45-Day Identification Period, during which you must formally identify up to three replacement properties (or more under certain rules), and the 180-Day Exchange Period, by which you must close on at least one identified property. Missing either deadline disqualifies the exchange.",
  },
  {
    question:
      "Can I 1031 exchange from another state into Florida property?",
    answer:
      "Yes. Interstate 1031 exchanges are fully permitted under federal tax law. Many investors from high-tax states like California, New York, and New Jersey exchange into Florida to take advantage of no state income tax, strong population growth, and favorable landlord laws. The property must be held for investment or business use — not personal use.",
  },
  {
    question:
      "What types of Florida commercial real estate qualify for a 1031 exchange?",
    answer:
      "Most commercial real estate qualifies as like-kind property, including NNN retail, multifamily apartments, industrial warehouses, office buildings, medical office, and vacant land held for investment. The key requirement is that both the relinquished and replacement properties are held for productive use in a trade or business or for investment purposes.",
  },
];

export default function ExchangeFlorida1031Page() {
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
              name: "1031 Exchange Florida",
              item: "https://maxlifedevelopment.com/1031-exchange-florida",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-amsterdam-blue-sky-business-1448221.webp"
          alt="Florida 1031 exchange replacement commercial property"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            1031 Exchange Services
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            1031 Exchange Into Florida —{" "}
            <span className="text-gold">No State Income Tax</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg mb-8">
            We help investors identify and close replacement properties on your
            timeline. Whether you&apos;re exchanging out of California, New York,
            or any high-tax state, Florida offers zero state income tax, a booming
            growth market, and long-term asset appreciation that compounds your
            tax-deferred gains.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/deal-analyzer"
              data-track="hero-cta-1031-landing"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Analyze a Replacement Property
            </Link>
            <a
              href="#lead-form"
              className="border border-gold text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Start Your 1031 Search
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              0% State Income Tax
            </span>
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Pre-Vetted Inventory
            </span>
            <span className="inline-flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              45-Day ID Support
            </span>
          </div>
        </div>
      </section>

      {/* The 1031 Timeline */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            The 1031 <span className="text-gold">Timeline</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Every 1031 exchange follows a strict federal timeline. Missing a
            deadline means losing your tax deferral — we make sure that
            doesn&apos;t happen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Day 0 */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 relative">
              <div className="text-gold text-3xl font-bold mb-2">Day 0</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Close on Relinquished Property
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You sell your current investment property. Proceeds go directly to
                a Qualified Intermediary (QI) — you never touch the funds. The
                clock starts now.
              </p>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-gold">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            {/* 45-Day ID */}
            <div className="bg-dark-card border border-gold/30 rounded-xl p-6 relative ring-1 ring-gold/20">
              <div className="text-gold text-3xl font-bold mb-2">Day 45</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Identification Deadline
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You must formally identify up to three replacement properties in
                writing to your QI. This is the most critical deadline — and where
                most exchanges fail without proper preparation.
              </p>
              <div className="absolute -top-3 right-4 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full">
                Most Critical
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-gold">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            {/* 180-Day Close */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="text-gold text-3xl font-bold mb-2">Day 180</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Close on Replacement Property
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You must close on at least one identified replacement property
                within 180 days of selling your original property. We ensure your
                deal is under contract and closing on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Florida */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Why Florida for Your{" "}
            <span className="text-gold">1031 Exchange?</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Florida is the #1 destination for 1031 exchange capital — and for good
            reason.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "No State Income Tax",
                description:
                  "Save 5-13% compared to California, New York, and New Jersey. Every dollar of rental income and eventual sale proceeds stays in your pocket at the state level.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Population Growth Engine",
                description:
                  "Florida adds 1,000+ new residents daily. Orlando alone is one of the fastest-growing metros in the U.S., driving demand for commercial space across every asset class.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
              },
              {
                title: "Diverse Asset Classes",
                description:
                  "NNN retail, multifamily, industrial, medical office, land — Florida's market supports every commercial property type, giving you options to match your exchange requirements.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                title: "Business-Friendly Environment",
                description:
                  "Pro-business regulations, landlord-friendly laws, no corporate income tax on LLCs, and a stable political environment that supports real estate investment.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <div className="text-gold mb-4">{card.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How MaxLife Helps */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            How <span className="text-gold">MaxLife</span> Helps
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            We specialize in helping out-of-state investors execute 1031 exchanges
            into Central Florida commercial real estate — on time and on target.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Pre-Vetted Inventory Ready to Go",
                description:
                  "We maintain a pipeline of qualified replacement properties across NNN, multifamily, industrial, and retail. When your clock starts, we already have options.",
              },
              {
                step: "02",
                title: "QI Coordination & Timeline Management",
                description:
                  "We work directly with your Qualified Intermediary and legal team to keep every deadline on track — from Day 0 through closing.",
              },
              {
                step: "03",
                title: "Due Diligence Support",
                description:
                  "Tenant credit analysis, lease review, environmental reports, property inspections — we handle the full due diligence stack so you can make confident decisions.",
              },
              {
                step: "04",
                title: "Close on Time Guarantee",
                description:
                  "Our track record speaks for itself. We understand that a missed deadline means a failed exchange — and we structure every deal to close with time to spare.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <div className="text-gold text-3xl font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Savings Example */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tax Savings <span className="text-gold">Example</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            See the real impact of exchanging from a high-tax state into Florida.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* California scenario */}
            <div className="bg-dark-card border border-red-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <h3 className="text-white font-semibold text-lg">
                  Sell $2M Property in California
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">Sale Price</span>
                  <span className="text-white font-medium">$2,000,000</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">Capital Gain (est.)</span>
                  <span className="text-white font-medium">$800,000</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    Federal Capital Gains (20%)
                  </span>
                  <span className="text-white font-medium">$160,000</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    CA State Tax (13.3%)
                  </span>
                  <span className="text-red-400 font-medium">$106,400</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    Net Investment Surtax (3.8%)
                  </span>
                  <span className="text-white font-medium">$30,400</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-white font-semibold">
                    Total Tax Without 1031
                  </span>
                  <span className="text-red-400 font-bold text-xl">
                    $296,800
                  </span>
                </div>
              </div>
            </div>

            {/* Florida 1031 scenario */}
            <div className="bg-dark-card border border-gold/30 rounded-xl p-6 sm:p-8 ring-1 ring-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gold rounded-full" />
                <h3 className="text-white font-semibold text-lg">
                  1031 Exchange Into Florida NNN Property
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">Replacement Property</span>
                  <span className="text-white font-medium">$2,000,000+</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    Federal Capital Gains Deferred
                  </span>
                  <span className="text-green-400 font-medium">$160,000</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">FL State Tax (0%)</span>
                  <span className="text-green-400 font-medium">$0</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    Net Investment Surtax Deferred
                  </span>
                  <span className="text-green-400 font-medium">$30,400</span>
                </div>
                <div className="flex justify-between border-b border-dark-border pb-3">
                  <span className="text-gray-400">
                    CA State Tax Eliminated
                  </span>
                  <span className="text-gold font-bold">$106,400</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-white font-semibold">
                    Total Tax Savings via 1031
                  </span>
                  <span className="text-gold font-bold text-xl">$296,800</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                * Federal taxes deferred, not eliminated. State tax savings are
                permanent. Consult your CPA for personalized tax advice.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/deal-analyzer"
              className="text-gold hover:text-gold-light font-medium transition-colors"
            >
              Run your own numbers with our Deal Analyzer &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Start Your <span className="text-gold">1031 Search</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tell us about your exchange timeline and investment criteria. We will
              match you with qualified replacement properties in Central Florida.
            </p>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8">
              <LeadCaptureForm
                buttonText="Start Your 1031 Search"
                subjectPrefix="1031 Exchange Inquiry"
                showExchangeDeadline={true}
                source="1031-exchange-landing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Common questions about 1031 exchanges into Florida commercial real
            estate.
          </p>
          <div className="space-y-4 max-w-3xl">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-dark-card border border-dark-border rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold list-none">
                  <span className="pr-4">{item.question}</span>
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
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links / Resources */}
      <section className="bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Related <span className="text-gold">Resources</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/blog/1031-exchange-orlando-guide"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                1031 Exchange Orlando Guide
              </h3>
              <p className="text-gray-400 text-sm">
                Step-by-step guide to executing a 1031 exchange in the Orlando
                metro.
              </p>
            </Link>
            <Link
              href="/markets/orlando-commercial-real-estate"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                Orlando Market Overview
              </h3>
              <p className="text-gray-400 text-sm">
                Market data, cap rates, and investment trends for Orlando
                commercial real estate.
              </p>
            </Link>
            <Link
              href="/deal-analyzer"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                Deal Analyzer
              </h3>
              <p className="text-gray-400 text-sm">
                Run the numbers on any replacement property with our free CRE
                calculator.
              </p>
            </Link>
            <Link
              href="/blog/orlando-nnn-properties-for-sale"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/50 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                Orlando NNN Properties
              </h3>
              <p className="text-gray-400 text-sm">
                Browse available NNN investment properties ideal for 1031 exchange
                buyers.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
