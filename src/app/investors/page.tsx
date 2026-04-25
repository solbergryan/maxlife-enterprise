import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { investorPersonas } from "@/data/investor-personas";

export const metadata: Metadata = {
  title: "CRE Investment Services by Investor Type",
  description:
    "Commercial real estate investment services tailored to every investor type — 1031 buyers, family offices, foreign investors, passive income seekers, developers, institutions, and first-time CRE buyers.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsHubPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/investors/maxlife-investors-stock-trading-monitor-business-finance-exchange-investment-m-1863880.webp"
          alt="Commercial real estate investment analytics on a trading monitor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Who We Serve
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            CRE Investment Services by{" "}
            <span className="text-gold">Investor Type</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Commercial real estate investors come in many shapes — 1031
            exchange buyers on a 45-day clock, family offices managing
            generational wealth, international investors entering US markets,
            or first-timers making their first CRE deal. We tailor our
            approach to each.
          </p>
        </div>
      </section>

      {/* Personas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investorPersonas.map((p) => (
            <Link
              key={p.slug}
              href={`/investors/${p.slug}`}
              className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-xl p-6 transition-colors group block"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {p.shortTitle}
              </h2>
              <p className="text-gold text-sm italic mb-3">{p.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {p.overview}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <span className="bg-dark border border-dark-border rounded px-2 py-1 text-gray-400">
                  {p.typicalProfile.typicalInvestment}
                </span>
                <span className="bg-dark border border-dark-border rounded px-2 py-1 text-gray-400">
                  {p.typicalProfile.targetReturns}
                </span>
              </div>
              <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Not Sure Where You <span className="text-gold">Fit</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Every investor is different. Reach out and tell us about your
            goals, and we&apos;ll figure out the right approach together.
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
