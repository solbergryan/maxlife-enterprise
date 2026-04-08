import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | MaxLife Development",
  description:
    "Guides, tools, and resources for commercial real estate investors and developers. Transaction guides, business plans, and market analysis from MaxLife Development.",
};

const resources = [
  {
    title: "NNN Build-to-Suit Business Plan",
    description:
      "Comprehensive business plan covering the NNN development model, pro forma economics, tenant requirements database, target markets, financial projections, construction guide, and disposition strategy.",
    type: "PDF Download",
    href: "/NNN_Business_Plan.pdf",
    isDownload: true,
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Commercial RE Transaction Guide",
    description:
      "A complete reference for commercial real estate transactions — from Letter of Intent through post-closing. Every stage explained for investors and buyers.",
    type: "Online Guide",
    href: "/resources/transaction-guide",
    isDownload: false,
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Resources
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Investor <span className="text-gold">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Guides, tools, and reference materials for commercial real estate
            investors and developers.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => {
            const Wrapper = resource.isDownload ? "a" : Link;
            const extraProps = resource.isDownload
              ? { download: true, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={resource.title}
                href={resource.href}
                {...extraProps}
                className="group bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold/30 transition-all block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    {resource.icon}
                  </div>
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {resource.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                  {resource.isDownload ? "Download PDF" : "Read guide"} &rarr;
                </span>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions About These Resources?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We&apos;re happy to discuss any of the topics covered in these
            guides, walk through specific deal scenarios, or answer questions
            about the CRE process.
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
