import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { industries } from "@/data/industries";

const BASE_URL = "https://maxlifedevelopment.com";

export const metadata: Metadata = {
  title: "Industries We Serve | MaxLife Realty",
  description:
    "Industry-focused commercial real estate across Florida — healthcare, financial services, logistics, and aerospace. Tenant rep and investor sourcing in one team.",
  alternates: {
    canonical: `${BASE_URL}/industries`,
  },
};

export default function IndustriesHubPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Industries", href: "/industries" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Industry Verticals
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Florida CRE for the Sectors That Are{" "}
            <span className="text-gold">Actually Growing</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            We focus on the sectors driving Florida&apos;s economy — healthcare,
            financial services, logistics, and aerospace. Each industry has its
            own real-estate logic, tenant pool, and investor narrative. We
            represent operators looking for space and investors building
            sector-focused portfolios.
          </p>
        </div>
      </section>

      {/* Live verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Sectors We <span className="text-gold">Cover</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 transition-colors"
            >
              {industry.heroImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={industry.heroImage}
                    alt={industry.heroAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <p className="text-gold font-medium text-xs tracking-widest uppercase mb-2">
                  {industry.subtitle}
                </p>
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gold transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {industry.tagline}
                </p>
                <span className="text-gold text-sm font-semibold inline-flex items-center gap-1.5">
                  Explore vertical
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Don&apos;t see your sector?
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          We work across every Florida CRE asset class. Tell us what you&apos;re
          looking for and we&apos;ll route you to the right resource.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Schedule a Call
          </Link>
          <Link
            href="/services"
            className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
          >
            See All Services
          </Link>
        </div>
      </section>
    </>
  );
}
