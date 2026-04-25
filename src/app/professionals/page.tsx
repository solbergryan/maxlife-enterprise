import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  professionals,
  categoriesOrder,
  getProfessionalsByCategory,
} from "@/lib/professionals";

export const metadata: Metadata = {
  title: "Commercial Real Estate Professionals Guide",
  description:
    "A complete guide to every professional role in commercial real estate — from brokers and developers to attorneys, engineers, appraisers, and more. Understand who does what in a CRE deal.",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Brokerage & Sales": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  "Development & Construction": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
    </svg>
  ),
  "Engineering & Design": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "Due Diligence": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "Legal & Transactional": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  "Finance & Valuation": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Operations & Management": (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

export default function ProfessionalsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/professionals/maxlife-professionals-people-business-meeting-business-meeting-coworkers-agreement-1979261.webp"
          alt="Professional services team meeting across a conference table"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Industry Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Professionals Guide</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Every commercial real estate deal involves a team of specialized
            professionals — from brokers and attorneys to engineers, appraisers,
            and contractors. This guide walks through each role, what they do,
            when they&apos;re needed, and how they fit into the CRE development
            lifecycle.
          </p>
        </div>
      </section>

      {/* Org Chart Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/professionals/org-chart"
          className="group flex items-center justify-between bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/30 hover:border-gold/60 rounded-xl p-5 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold group-hover:text-gold transition-colors">
                Interactive Org Chart &mdash; Search &amp; Explore Visually
              </p>
              <p className="text-gray-300 text-sm">
                Filter {professionals.length} roles by category, search by
                keyword, see the full CRE deal team at a glance.
              </p>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gold shrink-0 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-gold">{professionals.length}</p>
            <p className="text-gray-300 text-xs mt-1">Roles Covered</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-gold">
              {categoriesOrder.length}
            </p>
            <p className="text-gray-300 text-xs mt-1">Categories</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-gold">FL</p>
            <p className="text-gray-300 text-xs mt-1">Licensed Statewide</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-gold">24/7</p>
            <p className="text-gray-300 text-xs mt-1">Response Time</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categoriesOrder.map((category) => {
        const items = getProfessionalsByCategory(category);
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                {categoryIcons[category]}
              </div>
              <h2 className="text-2xl font-bold text-white">{category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/professionals/${p.slug}`}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-all group block"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {p.shortDescription}
                  </p>
                  <span className="text-gold text-xs font-medium group-hover:text-gold-light transition-colors">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a Referral or Project Team?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            MaxLife Development has established relationships across every
            category of CRE professional in Florida. We can help you assemble
            the right team for your deal.
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
