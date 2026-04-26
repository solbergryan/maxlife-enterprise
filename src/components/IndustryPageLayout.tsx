import Image from "next/image";
import Link from "next/link";
import BlogLeadCapture from "@/components/BlogLeadCapture";

interface Feature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface MarketStat {
  label: string;
  value: string;
  sub?: string;
}

interface IndustryPageLayoutProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  marketStats: MarketStat[];
  tenantFeatures: Feature[];
  investorFeatures: Feature[];
  process: ProcessStep[];
  benefits: string[];
  heroImage?: string;
  heroAlt?: string;
}

export default function IndustryPageLayout({
  slug,
  title,
  subtitle,
  description,
  icon,
  marketStats,
  tenantFeatures,
  investorFeatures,
  process,
  benefits,
  heroImage,
  heroAlt,
}: IndustryPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        {heroImage && (
          <Image
            src={heroImage}
            alt={heroAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div
          className={
            heroImage
              ? "absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70"
              : "absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent"
          }
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/industries"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Industries
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              {icon}
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                {subtitle}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#tenant-lead"
                  data-track="industry-cta-tenant"
                  className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Find Space
                </a>
                <a
                  href="#investor-lead"
                  data-track="industry-cta-investor"
                  className="inline-block border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  View Investor Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Market Snapshot */}
      {marketStats.length > 0 && (
        <section className="border-b border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p className="text-gold font-medium text-xs tracking-widest uppercase mb-4">
              Florida Market Snapshot
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {marketStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
                >
                  <p className="text-gold text-2xl sm:text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  {stat.sub && (
                    <p className="text-gray-500 text-xs mt-1">{stat.sub}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-3">
              Industry estimates &mdash; directional, not audited.
            </p>
          </div>
        </section>
      )}

      {/* For Tenants */}
      <section id="tenants" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <p className="text-gold font-medium text-xs tracking-widest uppercase mb-2">
          For Operators &amp; Tenants
        </p>
        <h2 className="text-2xl font-bold text-white mb-8">
          Looking for <span className="text-gold">Space</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tenantFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tenant lead capture */}
      <section id="tenant-lead" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 scroll-mt-24">
        <BlogLeadCapture
          heading={`Looking for ${title.split("&")[0].trim()} Space?`}
          description="Tell us your size, market, and timeline. We'll send curated on- and off-market options that match — no obligation."
          sourcePage={`/industries/${slug}?audience=tenant`}
        />
      </section>

      {/* For Investors */}
      <section id="investors" className="bg-white/[0.03] border-y border-white/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-xs tracking-widest uppercase mb-2">
            For Investors
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">
            Building a <span className="text-gold">Sector Portfolio</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investorFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor lead capture */}
      <section id="investor-lead" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        <BlogLeadCapture
          heading="Get Sector-Specific Deal Flow"
          description="Join the investor list for off-market and on-market opportunities in this sector — underwritten before they're shared."
          sourcePage={`/industries/${slug}?audience=investor`}
        />
      </section>

      {/* Process */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            How We <span className="text-gold">Engage</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="text-5xl font-bold text-gold/15 absolute -top-2 -left-1">
                  {step.step}
                </div>
                <div className="pt-8 pl-2">
                  <h3 className="text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-dark-border">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MaxLife */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Why Choose <span className="text-gold">MaxLife</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Talk?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Whether you need space or you&apos;re building a sector portfolio,
            we can help you move faster with better information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-track="industry-contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Schedule a Call
            </Link>
            <a
              href="tel:3215862121"
              data-track="industry-call"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
