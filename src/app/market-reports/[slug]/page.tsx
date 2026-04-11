import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  marketReports,
  getReportBySlug,
  formatQuarter,
  quarterLabel,
  ASSET_CLASS_LABELS,
  type Metric,
  type MarketReport,
  type Source,
} from "@/data/marketReports";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return marketReports
    .filter((r) => r.published)
    .map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return { title: "Market Report Not Found" };
  const label = formatQuarter(report);
  return {
    title: `${label} ${report.title} | MaxLife Realty`,
    description: report.executiveSummary,
    openGraph: {
      title: `${label} ${report.title}`,
      description: report.executiveSummary,
      type: "article",
      publishedTime: report.publishDate,
    },
  };
}

// ─── Small inline renderer helpers ───
function renderMetric(
  label: string,
  metric: Metric | undefined,
  sources: Source[]
) {
  if (!metric || !metric.value) return null;
  const cite = metric.sourceId
    ? sources.findIndex((s) => s.id === metric.sourceId) + 1
    : 0;
  return (
    <div className="bg-dark border border-dark-border rounded-lg p-4">
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-white font-semibold text-base">
        {metric.value}
        {cite > 0 && (
          <sup className="text-gold text-[10px] ml-1">[{cite}]</sup>
        )}
      </p>
      {metric.context && (
        <p className="text-gray-500 text-xs mt-1">{metric.context}</p>
      )}
    </div>
  );
}

function buildArticleSchema(report: MarketReport) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${formatQuarter(report)} ${report.title}`,
    description: report.executiveSummary,
    datePublished: report.publishDate,
    author: {
      "@type": "Organization",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
      logo: {
        "@type": "ImageObject",
        url: "https://maxlifedevelopment.com/mlr-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://maxlifedevelopment.com/market-reports/${report.slug}`,
    },
  };
}

export default async function MarketReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) notFound();

  const sources = report.sources;

  return (
    <>
      <JsonLd data={buildArticleSchema(report)} />

      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <Link
            href="/market-reports"
            className="text-gold hover:text-gold-light text-sm font-medium inline-flex items-center gap-1.5 mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            All market reports
          </Link>
          <p className="text-gold font-medium text-xs tracking-widest uppercase mb-3">
            {formatQuarter(report)} &middot; {quarterLabel(report)} &middot;{" "}
            {report.coverage}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {report.title}
          </h1>
          {report.subtitle && (
            <p className="text-gray-300 text-xl mb-4">{report.subtitle}</p>
          )}
          <p className="text-gray-500 text-sm">
            Published{" "}
            {new Date(report.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            &middot; MaxLife Realty Research
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">
          Executive Summary
        </h2>
        <p className="text-white text-lg leading-relaxed">
          {report.executiveSummary}
        </p>
      </section>

      {/* Macro Indicators */}
      {report.macro.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Macro Context
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Rates, employment, and macro indicators as of end of{" "}
            {formatQuarter(report)}. Sourced from Federal Reserve / FRED,
            BLS, and Census.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {report.macro.map((m, i) => {
              const cite = sources.findIndex((s) => s.id === m.sourceId) + 1;
              return (
                <div
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-lg p-4"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                    {m.label}
                  </p>
                  <p className="text-white font-semibold text-lg">
                    {m.value}
                    {cite > 0 && (
                      <sup className="text-gold text-[10px] ml-1">
                        [{cite}]
                      </sup>
                    )}
                  </p>
                  {m.context && (
                    <p className="text-gray-500 text-xs mt-1">{m.context}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Asset Classes */}
      {report.assetClasses.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            By Asset Class
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Cap rates, vacancy, absorption, and rent growth. Fields are
            omitted when no sourced data is available rather than shown as
            placeholders.
          </p>
          <div className="space-y-4">
            {report.assetClasses.map((ac) => (
              <div
                key={ac.key}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gold font-semibold text-lg">
                    {ASSET_CLASS_LABELS[ac.key]}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {renderMetric("Cap Rate Range", ac.capRateRange, sources)}
                  {renderMetric("Vacancy", ac.vacancyRate, sources)}
                  {renderMetric("Net Absorption", ac.netAbsorptionSf, sources)}
                  {renderMetric("Rent Growth (YoY)", ac.rentGrowthYoY, sources)}
                  {renderMetric("Sales Volume", ac.salesVolume, sources)}
                  {renderMetric("Price / SF", ac.pricePerSf, sources)}
                </div>
                {ac.commentary && (
                  <p className="text-gray-300 text-sm leading-relaxed border-t border-dark-border pt-4">
                    {ac.commentary}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Notable Transactions */}
      {report.notableTransactions.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Notable Transactions
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Central Florida commercial transactions that closed in{" "}
            {formatQuarter(report)} and were reported in the public press.
            Citations in brackets.
          </p>
          <div className="space-y-4">
            {report.notableTransactions.map((tx, i) => {
              const cite = sources.findIndex((s) => s.id === tx.sourceId) + 1;
              return (
                <div
                  key={i}
                  className="bg-dark-card border border-dark-border rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-white font-semibold text-base">
                      {tx.name}
                      {cite > 0 && (
                        <sup className="text-gold text-[10px] ml-1">
                          [{cite}]
                        </sup>
                      )}
                    </h3>
                    {tx.price && (
                      <span className="text-gold font-bold text-base whitespace-nowrap">
                        {tx.price}
                      </span>
                    )}
                  </div>
                  {(tx.city || tx.county || tx.assetClass) && (
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                      {[
                        tx.city,
                        tx.county && `${tx.county} County`,
                        tx.assetClass && ASSET_CLASS_LABELS[tx.assetClass],
                      ]
                        .filter(Boolean)
                        .join(" \u2022 ")}
                    </p>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                    {tx.sqft && (
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                          Size
                        </p>
                        <p className="text-white text-sm font-medium">
                          {tx.sqft}
                        </p>
                      </div>
                    )}
                    {tx.capRate && (
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                          Cap Rate
                        </p>
                        <p className="text-white text-sm font-medium">
                          {tx.capRate}
                        </p>
                      </div>
                    )}
                    {tx.pricePerSf && (
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                          PSF
                        </p>
                        <p className="text-white text-sm font-medium">
                          {tx.pricePerSf}
                        </p>
                      </div>
                    )}
                    {tx.closedDate && (
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                          Closed
                        </p>
                        <p className="text-white text-sm font-medium">
                          {tx.closedDate}
                        </p>
                      </div>
                    )}
                  </div>
                  {(tx.buyer || tx.seller) && (
                    <p className="text-gray-400 text-xs mb-2">
                      {tx.buyer && <>Buyer: {tx.buyer}</>}
                      {tx.buyer && tx.seller && " \u00b7 "}
                      {tx.seller && <>Seller: {tx.seller}</>}
                    </p>
                  )}
                  {tx.summary && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {tx.summary}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Submarket Spotlight */}
      {report.submarketSpotlight && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-dark-card border border-gold/30 rounded-xl p-6 sm:p-8">
            <p className="text-gold font-medium text-xs tracking-widest uppercase mb-2">
              Submarket Spotlight
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">
              {report.submarketSpotlight.name}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              {report.submarketSpotlight.summary}
            </p>
            <ul className="space-y-2">
              {report.submarketSpotlight.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-400 text-sm"
                >
                  <span className="text-gold mt-0.5">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Commentary */}
      {report.commentary.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
            Practitioner Commentary
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {report.commentary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-5 italic">
            Commentary reflects MaxLife Realty&apos;s in-market observations
            and is not a representation of sourced data.
          </p>
        </section>
      )}

      {/* Outlook */}
      {report.outlook.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
            Outlook for Next Quarter
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {report.outlook.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Data gaps (transparency) */}
      {report.dataGaps && report.dataGaps.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <h3 className="text-gold font-semibold text-xs tracking-widest uppercase mb-3">
              Data Gaps
            </h3>
            <p className="text-gray-500 text-xs mb-3">
              For transparency, here&apos;s what we looked for but could not
              find a published source for in time for this report. If you
              have insight into any of these, please let us know.
            </p>
            <ul className="space-y-1">
              {report.dataGaps.map((g, i) => (
                <li
                  key={i}
                  className="text-gray-500 text-xs flex items-start gap-2"
                >
                  <span>&#8212;</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Sources */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
          Sources &amp; Citations
        </h2>
        <ol className="space-y-3 text-sm">
          {sources.map((s, i) => (
            <li
              key={s.id}
              className="bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-gold font-mono text-xs shrink-0">
                  [{i + 1}]
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-medium">{s.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {s.publisher}
                    {s.publishedDate && ` \u2022 Published ${s.publishedDate}`}
                  </p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light text-xs break-all inline-block mt-1"
                  >
                    {s.url}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to see what your property is worth today?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Market reports are a starting point. A property-specific
            valuation is free, confidential, and typically takes 20 minutes
            on a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/opportunities#request-valuation"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Request a Seller Valuation
            </Link>
            <Link
              href="/net-sheets/seller"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Run a Seller Net Sheet
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-dark-border pt-6 text-gray-600 text-xs leading-relaxed">
          <p className="mb-2">
            This market report is published by MaxLife Realty, a Florida
            licensed real estate brokerage (FL Broker License #3354351), for
            informational and educational purposes only. It is not legal,
            tax, financial, or investment advice, and does not create a
            brokerage, agency, or client relationship.
          </p>
          <p>
            Third-party data is cited to its original publisher; MaxLife
            Realty makes no warranty as to the accuracy, completeness, or
            currency of third-party data. In-market commentary reflects
            practitioner observations and is not a representation of sourced
            figures. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
