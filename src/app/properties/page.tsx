import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  topLevelCategories,
  getSubtypesForCategory,
} from "@/data/property-types";

export const metadata: Metadata = {
  title:
    "All Property Types for Sale in Florida | MaxLife Realty Commercial Real Estate",
  description:
    "Browse every commercial real estate property type in Florida — retail, office, industrial, multifamily, hospitality, land, mixed-use, special purpose, self storage, mobile home parks, senior living, businesses for sale, and notes.",
  keywords:
    "commercial property types florida, cre categories, retail office industrial multifamily",
};

export default function PropertiesIndexPage() {
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
              name: "Properties",
              item: "https://maxlifedevelopment.com/properties",
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscrapers-buildings-skyline-city-real-5999913.webp"
          alt="Commercial properties for sale in Central Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Property Type Directory
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Every Commercial Real Estate Property Type in Florida
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              From car washes to CCRCs, retail pads to raw land — deep coverage
              of every CRE asset class traded in Florida.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each page includes Florida-specific cap rates, typical deal
              sizes, underwriting metrics, investor personas, pros and cons,
              and a pre-loaded deal analyzer. Click any category below to
              explore subtypes and get matched with current opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topLevelCategories.map((category, index) => {
            const subtypes = getSubtypesForCategory(category.slug);
            return (
              <div
                key={category.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors flex flex-col"
              >
                <div className="mb-4">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                    {String(index + 1).padStart(2, "0")} / {topLevelCategories.length}
                  </p>
                  <Link
                    href={`/properties/${category.slug}`}
                    className="block group"
                  >
                    <h2 className="text-white font-semibold text-xl mb-2 group-hover:text-gold transition-colors">
                      {category.page.displayName}
                    </h2>
                  </Link>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.page.heroSubheadline}
                  </p>
                </div>

                {subtypes.length > 0 && (
                  <div className="border-t border-dark-border pt-4 mt-auto">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      {subtypes.length} Subtypes
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {subtypes.slice(0, 6).map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/properties/${category.slug}/${sub.slug}`}
                          className="text-[11px] bg-white/5 hover:bg-gold/10 text-gray-300 hover:text-gold px-2.5 py-1 rounded-full transition-colors"
                        >
                          {sub.page.displayName}
                        </Link>
                      ))}
                      {subtypes.length > 6 && (
                        <Link
                          href={`/properties/${category.slug}`}
                          className="text-[11px] text-gold hover:underline px-2.5 py-1"
                        >
                          +{subtypes.length - 6} more &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                <Link
                  href={`/properties/${category.slug}`}
                  className="mt-4 text-gold text-sm font-medium hover:underline"
                >
                  Explore {category.page.displayName} &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-dark-border bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not Sure Which Property Type Fits?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every investor profile is different. Tell us your goals, capital,
              timeline, and risk tolerance — we will help you find the right
              asset class and source matching Florida opportunities on and off
              market.
            </p>
            <Link
              href="/opportunities#request-valuation"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Talk to a MaxLife Broker
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
