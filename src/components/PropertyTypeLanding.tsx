import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import DealAnalyzer from "@/components/DealAnalyzer";
import PropertyTypeHeroVisual from "@/components/PropertyTypeHeroVisual";

/**
 * Reusable landing-page component for any CRE property type (and subtype).
 * Mirrors the section structure of /car-wash-properties-florida.
 *
 * Every data section is optional — pass only what you have and the section
 * will hide itself. This lets thin subtype pages share the same shell as the
 * fully-loaded top-level category pages.
 */

export interface PropertyTypeMetric {
  label: string;
  value: string;
  detail: string;
}

export interface PropertyTypeFormat {
  name: string;
  capRate: string;
  footprint: string;
  note: string;
}

export interface PropertyTypeReason {
  title: string;
  description: string;
}

export interface PropertyTypeProCon {
  title: string;
  description: string;
}

export interface PropertyTypePersona {
  name: string;
  tag: string;
  description: string;
  fit: string;
}

export interface PropertyTypeOperator {
  name: string;
  detail: string;
}

export interface PropertyTypeUnderwritingMetric {
  label: string;
  detail: string;
}

export interface PropertyTypeFaq {
  q: string;
  a: string;
}

export interface PropertyTypeDealInputs {
  assetType?: "NNN" | "Multifamily" | "SFR";
  purchasePrice?: string;
  buildingSF?: string;
  units?: string;
  annualRent?: string;
  monthlyRentPerUnit?: string;
  rentGrowth?: string;
  vacancyRate?: string;
  opexRatio?: string;
  propertyTaxes?: string;
  insurance?: string;
  repairs?: string;
  mgmtPct?: string;
  downPaymentPct?: string;
  interestRate?: string;
  amortization?: string;
  closingCosts?: string;
  loanOrigFee?: string;
  holdPeriod?: string;
  exitCapSpread?: string;
}

export interface PropertyTypeListingSite {
  name: string;
  tag: string;
  description: string;
  floridaUrl: string;
  orlandoUrl: string;
  allUrl: string;
}

export interface PropertyTypeBreadcrumb {
  name: string;
  href: string;
}

export interface PropertyTypeRelatedResource {
  title: string;
  description: string;
  href: string;
}

export interface PropertyTypeDealBadge {
  label: string;
  highlighted?: boolean;
}

export interface PropertyTypeLandingProps {
  /** Slug used in lead form source and analytics tracking ids */
  slug: string;
  /** Full display name, e.g. "Retail" or "Shopping Center" */
  displayName: string;
  /** Plural form for body copy, e.g. "retail properties" */
  pluralDisplayName?: string;
  /**
   * Top-level category slug used to pick the hero visual silhouette.
   * For top-level pages this is the same as `slug`; for subtypes it should
   * be the parent slug (e.g. "retail" for shopping-center).
   * If omitted, falls back to `slug`.
   */
  categorySlug?: string;
  /** Breadcrumb trail from home to this page */
  breadcrumbs: PropertyTypeBreadcrumb[];

  /** Hero */
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBody: string;
  heroImage?: { src: string; alt: string; caption?: string };

  /** Quick top-of-page stats */
  quickStats: PropertyTypeMetric[];

  /** Formats / subtypes / lease structures */
  formatsTitle?: ReactNode;
  formatsIntro?: string;
  formats?: PropertyTypeFormat[];

  /** Why Florida section */
  whyFloridaTitle?: ReactNode;
  whyFloridaIntro?: string;
  whyFloridaReasons?: PropertyTypeReason[];

  /** Pros / cons */
  prosConsTitle?: ReactNode;
  prosConsIntro?: string;
  pros?: PropertyTypeProCon[];
  cons?: PropertyTypeProCon[];
  prosHeading?: string;
  consHeading?: string;

  /** Investor personas — who it's best for */
  personasTitle?: ReactNode;
  personasIntro?: string;
  personas?: PropertyTypePersona[];

  /** Major operators / tenants / builders */
  operatorsTitle?: ReactNode;
  operatorsIntro?: string;
  operatorsFootnote?: string;
  operators?: PropertyTypeOperator[];

  /** Key underwriting metrics */
  underwritingTitle?: ReactNode;
  underwritingIntro?: string;
  underwritingMetrics?: PropertyTypeUnderwritingMetric[];

  /** Pre-loaded Deal Analyzer */
  analyzerEyebrow?: string;
  analyzerTitle?: ReactNode;
  analyzerIntro?: string;
  analyzerBadges?: PropertyTypeDealBadge[];
  analyzerDealInputs?: PropertyTypeDealInputs;

  /** Listings on marketplaces */
  listingsTitle?: ReactNode;
  listingsIntro?: string;
  listingsFootnote?: string;
  listingSites?: PropertyTypeListingSite[];

  /** FAQ */
  faqTitle?: ReactNode;
  faqIntro?: string;
  faqs?: PropertyTypeFaq[];

  /** Fit-check */
  fitCheckTitle?: ReactNode;
  fitCheckIntro?: string;
  fitCheckQuestions?: string[];

  /** Lead form */
  leadFormTitle?: ReactNode;
  leadFormIntro?: string;
  leadFormButtonText?: string;
  leadFormSubjectPrefix?: string;

  /** Related resources at the bottom */
  relatedResources?: PropertyTypeRelatedResource[];
}

export default function PropertyTypeLanding(props: PropertyTypeLandingProps) {
  const {
    slug,
    displayName,
    pluralDisplayName = `${displayName} properties`,
    categorySlug,
    breadcrumbs,
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroBody,
    heroImage,
    quickStats,
    formatsTitle,
    formatsIntro,
    formats,
    whyFloridaTitle,
    whyFloridaIntro,
    whyFloridaReasons,
    prosConsTitle,
    prosConsIntro,
    pros,
    cons,
    prosHeading = "Why Buy",
    consHeading = "What to Watch",
    personasTitle,
    personasIntro,
    personas,
    operatorsTitle,
    operatorsIntro,
    operatorsFootnote,
    operators,
    underwritingTitle,
    underwritingIntro,
    underwritingMetrics,
    analyzerEyebrow = "Interactive Underwriting",
    analyzerTitle,
    analyzerIntro,
    analyzerBadges,
    analyzerDealInputs,
    listingsTitle,
    listingsIntro,
    listingsFootnote,
    listingSites,
    faqTitle,
    faqIntro,
    faqs,
    fitCheckTitle,
    fitCheckIntro,
    fitCheckQuestions,
    leadFormTitle,
    leadFormIntro,
    leadFormButtonText = `See Available ${displayName} Properties`,
    leadFormSubjectPrefix = `${displayName} Property Inquiry`,
    relatedResources,
  } = props;

  const analyzerId = `${slug}-analyzer`;
  const leadId = `${slug}-lead`;
  const hasProsCons = (pros && pros.length > 0) || (cons && cons.length > 0);
  const hasFormats = formats && formats.length > 0;
  const hasWhyFlorida = whyFloridaReasons && whyFloridaReasons.length > 0;
  const hasPersonas = personas && personas.length > 0;
  const hasOperators = operators && operators.length > 0;
  const hasUnderwriting = underwritingMetrics && underwritingMetrics.length > 0;
  const hasAnalyzer = !!analyzerDealInputs;
  const hasListings = listingSites && listingSites.length > 0;
  const hasFaqs = faqs && faqs.length > 0;
  const hasFitCheck = fitCheckQuestions && fitCheckQuestions.length > 0;
  const hasRelated = relatedResources && relatedResources.length > 0;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: `https://maxlifedevelopment.com${b.href}`,
          })),
        }}
      />
      {hasFaqs && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs!.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                {heroEyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {heroHeadline}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{heroSubheadline}</p>
              <p className="text-gray-400 leading-relaxed mb-8">{heroBody}</p>
              <div className="flex flex-wrap gap-4">
                {hasAnalyzer && (
                  <Link
                    href={`#${analyzerId}`}
                    data-track={`hero-cta-${slug}`}
                    className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                  >
                    Run the Deal Analyzer
                  </Link>
                )}
                <Link
                  href={`#${leadId}`}
                  className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  See Available Properties
                </Link>
              </div>
            </div>
            {heroImage ? (
              <div className="relative rounded-2xl overflow-hidden border border-dark-border shadow-2xl aspect-[3/2] lg:aspect-[4/3]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                {heroImage.caption && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 bg-dark/80 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1.5">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-xs font-medium text-white">
                        {heroImage.caption}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <PropertyTypeHeroVisual
                categorySlug={categorySlug ?? slug}
                displayName={displayName}
              />
            )}
          </div>
        </div>
      </section>

      {/* Quick stats */}
      {quickStats.length > 0 && (
        <section className="border-b border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickStats.map((m) => (
                <div
                  key={m.label}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
                >
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                    {m.label}
                  </p>
                  <p className="text-white text-3xl font-bold mb-1">
                    {m.value}
                  </p>
                  <p className="text-gray-500 text-sm">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Formats */}
      {hasFormats && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {formatsTitle ?? (
              <>
                {displayName}{" "}
                <span className="text-gold">Property Formats</span>
              </>
            )}
          </h2>
          {formatsIntro && (
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
              {formatsIntro}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats!.map((format) => (
              <div
                key={format.name}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {format.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {format.capRate && (
                    <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                      Cap Rate: {format.capRate}
                    </span>
                  )}
                  {format.footprint && (
                    <span className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                      {format.footprint}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {format.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Florida */}
      {hasWhyFlorida && (
        <section className="border-y border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              {whyFloridaTitle ?? (
                <>
                  Why Florida Is a{" "}
                  <span className="text-gold">Standout Market</span> for{" "}
                  {displayName}
                </>
              )}
            </h2>
            {whyFloridaIntro && (
              <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
                {whyFloridaIntro}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyFloridaReasons!.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-dark-card border border-dark-border rounded-xl p-6"
                >
                  <h3 className="text-gold font-semibold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pros & Cons */}
      {hasProsCons && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {prosConsTitle ?? (
              <>
                {displayName} Investing:{" "}
                <span className="text-gold">Pros &amp; Cons</span>
              </>
            )}
          </h2>
          {prosConsIntro && (
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
              {prosConsIntro}
            </p>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pros && pros.length > 0 && (
              <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    {prosHeading}
                  </h3>
                </div>
                <ul className="space-y-5">
                  {pros.map((pro) => (
                    <li key={pro.title}>
                      <p className="text-white font-medium text-sm mb-1">
                        {pro.title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {pro.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cons && cons.length > 0 && (
              <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    {consHeading}
                  </h3>
                </div>
                <ul className="space-y-5">
                  {cons.map((con) => (
                    <li key={con.title}>
                      <p className="text-white font-medium text-sm mb-1">
                        {con.title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {con.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Investor personas */}
      {hasPersonas && (
        <section className="border-y border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              {personasTitle ?? (
                <>
                  Who {displayName} Is{" "}
                  <span className="text-gold">Best Suited For</span>
                </>
              )}
            </h2>
            {personasIntro && (
              <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
                {personasIntro}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {personas!.map((persona) => (
                <div
                  key={persona.name}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors flex flex-col"
                >
                  <div className="mb-3">
                    <h3 className="text-white font-semibold text-lg">
                      {persona.name}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/80 mt-1">
                      {persona.tag}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {persona.description}
                  </p>
                  <div className="border-t border-dark-border pt-3 mt-auto">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Why It Fits
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {persona.fit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Major operators */}
      {hasOperators && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {operatorsTitle ?? (
              <>
                Major {displayName}{" "}
                <span className="text-gold">Operators &amp; Tenants</span>
              </>
            )}
          </h2>
          {operatorsIntro && (
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
              {operatorsIntro}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operators!.map((op) => (
              <div
                key={op.name}
                className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-1">{op.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {op.detail}
                </p>
              </div>
            ))}
          </div>
          {operatorsFootnote && (
            <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
              {operatorsFootnote}
            </p>
          )}
        </section>
      )}

      {/* Key underwriting metrics */}
      {hasUnderwriting && (
        <section className="border-y border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              {underwritingTitle ?? (
                <>
                  Key {displayName}{" "}
                  <span className="text-gold">Underwriting Metrics</span>
                </>
              )}
            </h2>
            {underwritingIntro && (
              <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
                {underwritingIntro}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {underwritingMetrics!.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-dark-card border border-dark-border rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">
                      {metric.label}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-loaded Deal Analyzer */}
      {hasAnalyzer && (
        <section
          id={analyzerId}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        >
          <div className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              {analyzerEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {analyzerTitle ?? (
                <>
                  Sample {displayName} Deal{" "}
                  <span className="text-gold">Pre-Loaded</span>
                </>
              )}
            </h2>
            {analyzerIntro && (
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {analyzerIntro}
              </p>
            )}
          </div>

          {analyzerBadges && analyzerBadges.length > 0 && (
            <div className="bg-dark-card/30 border border-dark-border rounded-2xl p-4 sm:p-6 mb-6">
              <div className="flex flex-wrap gap-3 text-xs">
                {analyzerBadges.map((b) => (
                  <span
                    key={b.label}
                    className={
                      b.highlighted
                        ? "bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full"
                        : "bg-white/5 text-gray-300 px-3 py-1 rounded-full"
                    }
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          <DealAnalyzer initialInputs={analyzerDealInputs} />

          <p className="text-center text-gray-500 text-sm mt-8">
            Want to underwrite a different asset class?{" "}
            <Link href="/deal-analyzer" className="text-gold hover:underline">
              Open the full Deal Analyzer
            </Link>
          </p>
        </section>
      )}

      {/* Listings */}
      {hasListings && (
        <section className="border-y border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center mb-10">
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                Browse Active Listings
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {listingsTitle ?? (
                  <>
                    {displayName} Deals on{" "}
                    <span className="text-gold">Major CRE Marketplaces</span>
                  </>
                )}
              </h2>
              {listingsIntro && (
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {listingsIntro}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listingSites!.map((site) => (
                <div
                  key={site.name}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors flex flex-col"
                >
                  <div className="mb-4">
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {site.name}
                    </h3>
                    <p className="text-xs font-medium text-gold/80 uppercase tracking-wider">
                      {site.tag}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {site.description}
                  </p>
                  <div className="space-y-2">
                    <a
                      href={site.floridaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track={`${slug}-listings-${site.name.toLowerCase()}-fl`}
                      className="flex items-center justify-between bg-gold/10 hover:bg-gold/20 text-gold font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      <span>Florida {displayName}</span>
                      <ExternalArrow />
                    </a>
                    <a
                      href={site.orlandoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track={`${slug}-listings-${site.name.toLowerCase()}-orlando`}
                      className="flex items-center justify-between bg-white/5 hover:bg-white/10 text-gray-300 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      <span>Orlando Metro</span>
                      <ExternalArrow />
                    </a>
                    <a
                      href={site.allUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track={`${slug}-listings-${site.name.toLowerCase()}-national`}
                      className="flex items-center justify-between text-gray-400 hover:text-gold font-medium px-4 py-2 text-sm transition-colors"
                    >
                      <span>Nationwide</span>
                      <ExternalArrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {listingsFootnote && (
              <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
                {listingsFootnote}{" "}
                <Link href={`#${leadId}`} className="text-gold hover:underline">
                  tell us what you&apos;re looking for
                </Link>
                .
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {hasFaqs && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {faqTitle ?? (
                <>
                  {displayName} <span className="text-gold">Investor FAQ</span>
                </>
              )}
            </h2>
            {faqIntro && (
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {faqIntro}
              </p>
            )}
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs!.map((faq) => (
              <details
                key={faq.q}
                className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-white font-medium text-base pr-4">
                    {faq.q}
                  </h3>
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
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Fit Check */}
      {hasFitCheck && (
        <section className="border-y border-dark-border bg-dark-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                  Is This You?
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {fitCheckTitle ?? (
                    <>
                      Quick <span className="text-gold">Fit Check</span>
                    </>
                  )}
                </h2>
                {fitCheckIntro && (
                  <p className="text-gray-400 leading-relaxed">
                    {fitCheckIntro}
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                {fitCheckQuestions!.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-4 bg-dark-card border border-dark-border rounded-xl p-5"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{q}</p>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href={`#${leadId}`}
                  data-track={`${slug}-fitcheck-cta`}
                  className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  Send Me Matching Deals
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lead Capture Form */}
      <section id={leadId} className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                {leadFormTitle ?? (
                  <>
                    See Available{" "}
                    <span className="text-gold">{pluralDisplayName}</span>
                  </>
                )}
              </h2>
              {leadFormIntro && (
                <p className="text-gray-400 text-center mb-8 leading-relaxed">
                  {leadFormIntro}
                </p>
              )}
              <LeadCaptureForm
                buttonText={leadFormButtonText}
                subjectPrefix={leadFormSubjectPrefix}
                source={`${slug}-landing`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related resources */}
      {hasRelated && (
        <section className="border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              Related <span className="text-gold">Resources</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources!.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group block"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {resource.description}
                  </p>
                  <span className="text-gold text-sm font-medium">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ExternalArrow() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
