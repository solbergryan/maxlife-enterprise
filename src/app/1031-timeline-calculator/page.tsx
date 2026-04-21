import type { Metadata } from "next";
import Link from "next/link";
import ExchangeTimeline from "@/components/ExchangeTimeline";

export const metadata: Metadata = {
  title: "1031 Exchange Timeline Calculator — 45-Day & 180-Day Deadlines",
  description:
    "Free 1031 exchange timeline calculator. Enter your sale date to see exact 45-day identification and 180-day closing deadlines. Plan your Section 1031 like-kind exchange with confidence.",
  keywords: [
    "1031 exchange calculator",
    "1031 timeline",
    "45 day rule calculator",
    "180 day rule calculator",
    "1031 exchange deadlines",
    "like-kind exchange calculator",
    "Section 1031 timeline",
    "Florida 1031 exchange",
    "commercial real estate 1031",
  ],
  alternates: { canonical: "/1031-timeline-calculator" },
  openGraph: {
    title: "1031 Exchange Timeline Calculator | MaxLife Development",
    description:
      "Calculate your 45-day and 180-day Section 1031 like-kind exchange deadlines. Free tool for CRE investors.",
    url: "https://maxlifedevelopment.com/1031-timeline-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "1031 Exchange Timeline Calculator",
  description:
    "Calculate 45-day identification and 180-day closing deadlines for Section 1031 like-kind exchanges.",
  url: "https://maxlifedevelopment.com/1031-timeline-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function ExchangeTimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            1031 Exchange{" "}
            <span className="text-gold">Timeline Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Enter the date you sold (or plan to sell) your relinquished
            property. We&apos;ll calculate your exact 45-day identification and
            180-day closing deadlines — along with days remaining and a status
            indicator.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ExchangeTimeline />
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            How the 1031 Timeline Works
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Section 1031 of the Internal Revenue Code allows investors to defer
            capital gains taxes on the sale of investment real estate — if the
            proceeds are reinvested into &quot;like-kind&quot; property within
            strict IRS deadlines.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Both clocks start on the day your sale closes and run concurrently.
            The 45-day identification period ends first; the 180-day closing
            period is the outer bound. Neither can be extended for weekends,
            holidays, or most emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-dark-card border border-dark-border rounded-xl p-5">
            <h3 className="text-gold font-semibold mb-2">
              45-Day Identification
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              You must identify up to 3 potential replacement properties in
              writing to your qualified intermediary within 45 calendar days.
              Identification must be specific — address, legal description, or
              other unambiguous description.
            </p>
            <p className="text-gray-400 text-xs">
              <strong className="text-white">Tip:</strong> Start identifying
              potential replacements{" "}
              <em>before</em> you close the relinquished sale. 45 days goes
              fast.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-5">
            <h3 className="text-gold font-semibold mb-2">180-Day Closing</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              You must close on one or more of your identified replacement
              properties by the 180th day. The exchange fails if you miss this
              deadline — full capital gains tax is owed in the current tax year.
            </p>
            <p className="text-gray-400 text-xs">
              <strong className="text-white">Tip:</strong> Negotiate long due
              diligence periods in your replacement property contracts so the
              seller doesn&apos;t back out mid-exchange.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-3">
            Before the Clock Starts
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Set up your exchange properly{" "}
            <em>before</em> closing the relinquished sale:
          </p>
          <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
            <li>Engage a Qualified Intermediary (QI) — required by IRS</li>
            <li>Amend the sale contract to include 1031 cooperation language</li>
            <li>Start identifying replacement properties</li>
            <li>Notify your CPA and real estate attorney</li>
            <li>Line up financing for the replacement property</li>
          </ol>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-dark-card border border-dark-border rounded-lg p-5">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-400">Disclaimer:</strong> This
            calculator provides timeline estimates for educational purposes only
            and does not constitute tax or legal advice. Section 1031 rules are
            complex and subject to change. Always consult with a qualified CPA,
            tax attorney, and qualified intermediary before executing a 1031
            exchange. MaxLife Development is not a qualified intermediary and
            does not provide tax or legal advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a <span className="text-gold">Replacement Property</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            MaxLife Development sources NNN investment properties and
            commercial real estate across Florida. We&apos;ve helped dozens of
            1031 exchange buyers identify and close replacement properties
            within the 45-day window.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=1031 Exchange Replacement Property"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Find Replacement Properties
            </Link>
            <Link
              href="/faq/1031-exchange"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              1031 Exchange FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
