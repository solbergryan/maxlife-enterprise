import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { deals, getDealBySlug, formatPrice } from "@/data/deals";
import DealCard from "@/components/DealCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDealBySlug(slug);
  if (!deal) return { title: "Deal Not Found" };
  return {
    title: `${deal.title} | MaxLife Realty`,
    description: deal.description,
  };
}

export default async function DealDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);
  if (!deal) notFound();

  const relatedDeals = deals
    .filter((d) => d.id !== deal.id && d.status === "Active")
    .slice(0, 2);

  const statusColors: Record<string, string> = {
    Active: "bg-green-500/20 text-green-400 border-green-500/30",
    "Under Contract": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Sold: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-business-building-elevators-modern-tower-3285853.webp"
          alt="Commercial property investment opportunity"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/opportunities"
            className="text-gold hover:underline text-sm mb-4 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Opportunities
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {deal.title}
            </h1>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[deal.status]}`}
            >
              {deal.status}
            </span>
          </div>
          <p className="text-gray-400 text-lg">
            {deal.location} &middot; {deal.county} County &middot; {deal.type}
          </p>
        </div>
      </section>

      {/* Deal Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                {deal.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Investment Highlights
              </h2>
              <div className="space-y-3">
                {deal.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-lg p-4"
                  >
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-400 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upside */}
            {deal.upsidePotential && (
              <div className="bg-dark-card border border-gold/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gold mb-3">
                  Upside Potential
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {deal.upsidePotential}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar — Metrics + CTA */}
          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 sticky top-24 space-y-6">
              {/* Price */}
              <div className="text-center pb-4 border-b border-dark-border">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Asking Price
                </p>
                <p className="text-white text-3xl font-bold">
                  {formatPrice(deal.price)}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {deal.capRate && (
                  <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Cap Rate
                    </p>
                    <p className="text-gold font-bold text-lg">
                      {deal.capRate}%
                    </p>
                  </div>
                )}
                {deal.noi && (
                  <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      NOI
                    </p>
                    <p className="text-white font-bold text-lg">
                      {formatPrice(deal.noi)}
                    </p>
                  </div>
                )}
                {deal.sqft && (
                  <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Size
                    </p>
                    <p className="text-white font-bold text-lg">
                      {deal.sqft.toLocaleString()} SF
                    </p>
                  </div>
                )}
                {deal.acreage && (
                  <div className="text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Acreage
                    </p>
                    <p className="text-white font-bold text-lg">
                      {deal.acreage} AC
                    </p>
                  </div>
                )}
              </div>

              {/* Tenant Info */}
              {deal.tenant && (
                <div className="border-t border-dark-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tenant</span>
                    <span className="text-white">{deal.tenant}</span>
                  </div>
                  {deal.leaseType && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Lease Type</span>
                      <span className="text-white">{deal.leaseType}</span>
                    </div>
                  )}
                  {deal.leaseTermRemaining && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Term Remaining</span>
                      <span className="text-white">
                        {deal.leaseTermRemaining}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="border-t border-dark-border pt-4 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-lg transition-colors text-center"
                >
                  Request More Information
                </Link>
                <a
                  href="tel:+13215862121"
                  className="block w-full border border-gold/30 text-gold hover:bg-gold/10 font-semibold py-3 rounded-lg transition-colors text-center"
                >
                  Call (321) 586-2121
                </a>
                {deal.crexiUrl && (
                  <a
                    href={deal.crexiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-dark-border text-gray-400 hover:text-gold hover:border-gold/30 font-medium py-3 rounded-lg transition-colors text-center text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on Crexi
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Deals */}
      {relatedDeals.length > 0 && (
        <section className="bg-dark-card/50 border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Other Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedDeals.map((d) => (
                <DealCard key={d.id} deal={d} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
