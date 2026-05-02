import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — MaxLife Realty",
  description:
    "Real client reviews from commercial buyers, sellers, and investors who worked with MaxLife Realty across Central Florida and the Space Coast.",
  keywords: [
    "MaxLife Realty reviews",
    "commercial real estate broker reviews Florida",
    "Ryan Solberg testimonials",
    "Orlando CRE broker reviews",
  ],
  alternates: { canonical: "/testimonials" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Client Testimonials — MaxLife Realty",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "Review",
    position: i + 1,
    reviewBody: t.quote,
    author: { "@type": "Person", name: t.name },
    itemReviewed: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Client Reviews
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Clients Say About{" "}
            <span className="text-gold">Working with Ryan</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Real feedback from commercial buyers, sellers, and investors across
            Central Florida and the Space Coast.
          </p>

          {/* 5-star rating summary */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-300 text-sm">
              {testimonials.length} verified client reviews
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col hover:border-gold/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gold text-xs mt-0.5">{t.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-400 text-center">
            {[
              "Florida Real Estate Broker #3354351",
              "Mortgage Loan Officer NMLS #1784218",
              "6 Counties Served",
              "$100M+ Career Volume",
              "Buyers · Sellers · Investors",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Work with <span className="text-gold">Ryan</span>?
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Whether you&apos;re buying, selling, or investing in Florida commercial
          real estate, let&apos;s have a straightforward conversation about your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Contact Ryan
          </Link>
          <Link
            href="/results"
            className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
          >
            View Track Record
          </Link>
        </div>
      </section>
    </>
  );
}
