import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  glossaryTerms,
  glossaryCategories,
  getGlossaryTermsByCategory,
} from "@/data/glossary";

export const metadata: Metadata = {
  title: "Commercial Real Estate Glossary — Complete CRE Terms Dictionary",
  description:
    "Comprehensive commercial real estate glossary — every CRE term explained clearly. Cap rate, NOI, 1031 exchange, DSCR, and 50+ more terms. Free reference from MaxLife Development.",
  keywords: [
    "commercial real estate glossary",
    "CRE terms",
    "CRE dictionary",
    "real estate terminology",
    "commercial real estate definitions",
  ],
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/glossary/maxlife-glossary-old-books-book-old-library-education-archive-book-shelf-anti-436498.webp"
          alt="Commercial real estate glossary reference books"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Reference
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Glossary</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Clear, plain-English definitions for {glossaryTerms.length} key
            commercial real estate terms — investment metrics, lease
            structures, transaction processes, financing concepts, and tax
            strategies. Click any term for a full explanation.
          </p>
        </div>
      </section>

      {/* Alphabetical Quick Jump */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-500 text-sm">Jump to category:</span>
          {glossaryCategories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className="text-gray-300 hover:text-gold text-xs bg-dark border border-white/10 rounded-md px-3 py-1.5 transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* Terms by Category */}
      {glossaryCategories.map((cat) => {
        const items = getGlossaryTermsByCategory(cat);
        if (items.length === 0) return null;
        return (
          <section
            key={cat}
            id={cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              <span className="text-gold">{cat}</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {items.length} {items.length === 1 ? "term" : "terms"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-xl p-5 transition-colors group block"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                    {t.term}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {t.shortDefinition}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Applying These{" "}
            <span className="text-gold">Concepts</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Understanding the terminology is step one. Let&apos;s talk about
            how to apply these concepts to your specific deal or investment
            strategy.
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
