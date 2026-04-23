import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { InquiryForm } from "./InquiryForm";
import {
  getListingBySlug,
  formatPrice,
  formatNumber,
  formatPercent,
} from "@/lib/listings";
import {
  PROPERTY_TYPE_LABELS,
  TRANSACTION_TYPE_LABELS,
  LISTING_TYPE_LABELS,
  STATUS_LABELS,
} from "@/types/listing";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const l = await getListingBySlug(slug);
  if (!l) return { title: "Listing not found" };
  const locale = l.city + (l.state ? `, ${l.state}` : "");
  return {
    title: `${l.title} | ${locale} | MaxLife Marketplace`,
    description:
      (l.description && l.description.slice(0, 150)) ||
      `${PROPERTY_TYPE_LABELS[l.property_type]} ${TRANSACTION_TYPE_LABELS[l.transaction_type].toLowerCase()} in ${locale}. ${formatPrice(l.price)}.`,
    openGraph: {
      title: l.title,
      description:
        l.description?.slice(0, 200) ??
        `${PROPERTY_TYPE_LABELS[l.property_type]} in ${locale} — ${formatPrice(l.price)}`,
    },
    robots: l.status === "withdrawn" ? { index: false, follow: false } : undefined,
  };
}

function Stat({ label, value }: { label: string; value: string }) {
  if (value === "—" || value === "") return null;
  return (
    <div className="border border-dark-border rounded-lg p-4">
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  );
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const l = await getListingBySlug(slug);
  if (!l || l.status === "withdrawn") notFound();

  const locale = l.city + (l.state ? `, ${l.state}` : "");
  const listingUrl = `https://maxlifedevelopment.com/marketplace/${l.slug}`;

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${listingUrl}#listing`,
    name: l.title,
    description:
      l.description ??
      `${PROPERTY_TYPE_LABELS[l.property_type]} ${TRANSACTION_TYPE_LABELS[l.transaction_type].toLowerCase()} in ${locale}.`,
    url: listingUrl,
    datePosted: l.created_at,
    ...(l.photo_urls.length > 0 ? { image: l.photo_urls } : {}),
    offers: {
      "@type": "Offer",
      price: l.price,
      priceCurrency: "USD",
      availability:
        l.status === "active"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: listingUrl,
    },
    mainEntity: {
      "@type": "Place",
      name: l.title,
      address: {
        "@type": "PostalAddress",
        ...(l.street_address ? { streetAddress: l.street_address } : {}),
        addressLocality: l.city,
        ...(l.state ? { addressRegion: l.state } : {}),
        ...(l.zip ? { postalCode: l.zip } : {}),
        addressCountry: "US",
      },
      ...(l.latitude != null && l.longitude != null
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: l.latitude,
              longitude: l.longitude,
            },
          }
        : {}),
      additionalProperty: [
        { name: "Property Type", value: PROPERTY_TYPE_LABELS[l.property_type] },
        l.building_sqft != null && {
          name: "Building Square Feet",
          value: l.building_sqft,
        },
        l.lot_sqft != null && { name: "Lot Square Feet", value: l.lot_sqft },
        l.lot_acres != null && { name: "Lot Acres", value: l.lot_acres },
        l.cap_rate != null && { name: "Cap Rate", value: `${l.cap_rate}%` },
        l.noi != null && { name: "NOI", value: l.noi },
        l.occupancy_pct != null && {
          name: "Occupancy",
          value: `${l.occupancy_pct}%`,
        },
        l.year_built != null && { name: "Year Built", value: l.year_built },
        l.zoning && { name: "Zoning", value: l.zoning },
        l.tenant && { name: "Tenant", value: l.tenant },
        l.lease_type && { name: "Lease Type", value: l.lease_type },
      ]
        .filter(Boolean)
        .map((p) => ({ "@type": "PropertyValue", ...(p as object) })),
    },
    broker: {
      "@type": "RealEstateAgent",
      name: l.contact_company || l.contact_name,
    },
  };

  return (
    <>
      <JsonLd data={realEstateSchema} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", href: "/" },
            { name: "Marketplace", href: "/marketplace" },
            { name: l.title, href: `/marketplace/${l.slug}` },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            <span className="text-gold font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              {PROPERTY_TYPE_LABELS[l.property_type]}
            </span>
            <span className="text-gray-400 border border-dark-border px-2.5 py-1 rounded">
              {TRANSACTION_TYPE_LABELS[l.transaction_type]}
            </span>
            <span className="text-gray-400 border border-dark-border px-2.5 py-1 rounded">
              {LISTING_TYPE_LABELS[l.listing_type]}
            </span>
            {l.status !== "active" && (
              <span className="text-gold border border-gold/40 px-2.5 py-1 rounded">
                {STATUS_LABELS[l.status]}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {l.title}
          </h1>
          <p className="text-gray-400 text-lg">
            {l.street_address ? `${l.street_address} — ` : ""}
            {locale}
            {l.county ? `, ${l.county} County` : ""}
          </p>
        </div>

        {/* Photo gallery or placeholder */}
        {l.photo_urls.length > 0 ? (
          <div className="mb-8">
            <div className="relative h-64 sm:h-96 bg-dark border border-dark-border rounded-xl overflow-hidden">
              <Image
                src={l.photo_urls[0]}
                alt={l.title}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            {l.photo_urls.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2">
                {l.photo_urls.slice(1).map((url, i) => (
                  <div
                    key={i}
                    className="relative aspect-square w-full overflow-hidden rounded-md border border-dark-border"
                  >
                    <Image
                      src={url}
                      alt={`${l.title} — photo ${i + 2}`}
                      fill
                      sizes="(min-width: 640px) 170px, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="h-64 sm:h-80 bg-gradient-to-br from-gold/10 via-dark-card to-navy-dark/40 border border-dark-border rounded-xl mb-8 flex items-center justify-center">
            <svg className="w-20 h-20 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M9 14h6M9 18h6" />
            </svg>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price + headline stats */}
            <div className="border border-dark-border rounded-xl p-6 bg-dark-card">
              <p className="text-gray-500 text-sm mb-1">Asking Price</p>
              <p className="text-gold text-4xl font-bold mb-6">
                {formatPrice(l.price)}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Stat label="Cap Rate" value={formatPercent(l.cap_rate)} />
                <Stat label="NOI" value={l.noi != null ? formatPrice(l.noi) : "—"} />
                <Stat label="Building SqFt" value={formatNumber(l.building_sqft)} />
                <Stat label="Lot Acres" value={formatNumber(l.lot_acres, 2)} />
                <Stat label="Units" value={formatNumber(l.units)} />
                <Stat label="Year Built" value={l.year_built ? String(l.year_built) : "—"} />
              </div>
            </div>

            {/* Description */}
            {l.description && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">
                  Property Description
                </h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
                  {l.description}
                </p>
              </section>
            )}

            {/* Highlights */}
            {l.highlights.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">Highlights</h2>
                <ul className="space-y-2">
                  {l.highlights.map((h, i) => (
                    <li key={i} className="text-gray-400 flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Upside potential */}
            {l.upside_potential && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">Upside Potential</h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
                  {l.upside_potential}
                </p>
              </section>
            )}

            {/* Financials */}
            {(l.gross_income != null ||
              l.operating_expenses != null ||
              l.price_per_sqft != null ||
              l.occupancy_pct != null) && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">Financials</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Stat label="Price / SqFt" value={l.price_per_sqft != null ? `$${formatNumber(l.price_per_sqft, 0)}` : "—"} />
                  <Stat label="Gross Income" value={l.gross_income != null ? formatPrice(l.gross_income) : "—"} />
                  <Stat label="Operating Expenses" value={l.operating_expenses != null ? formatPrice(l.operating_expenses) : "—"} />
                  <Stat label="Occupancy" value={formatPercent(l.occupancy_pct, 1)} />
                </div>
              </section>
            )}

            {/* Tenancy */}
            {(l.tenant || l.lease_type || l.lease_term_remaining) && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">Tenancy</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Stat label="Tenant" value={l.tenant ?? "—"} />
                  <Stat label="Lease Type" value={l.lease_type ?? "—"} />
                  <Stat label="Lease Term Remaining" value={l.lease_term_remaining ?? "—"} />
                  <Stat label="Escalations" value={l.escalations ?? "—"} />
                </div>
              </section>
            )}

            {/* Physical */}
            {(l.lot_sqft != null ||
              l.stories != null ||
              l.parking_spaces != null ||
              l.zoning ||
              l.year_renovated != null) && (
              <section>
                <h2 className="text-xl font-bold text-white mb-3">Physical Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Stat label="Lot SqFt" value={formatNumber(l.lot_sqft)} />
                  <Stat label="Stories" value={l.stories ? String(l.stories) : "—"} />
                  <Stat label="Parking" value={formatNumber(l.parking_spaces)} />
                  <Stat label="Zoning" value={l.zoning ?? "—"} />
                  <Stat label="Year Renovated" value={l.year_renovated ? String(l.year_renovated) : "—"} />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar — contact */}
          <aside className="lg:col-span-1">
            <div className="border border-dark-border rounded-xl p-6 bg-dark-card lg:sticky lg:top-6">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                Listed By
              </p>
              <p className="text-white text-lg font-semibold mb-1">
                {l.contact_name}
              </p>
              {l.contact_company && (
                <p className="text-gray-400 text-sm mb-4">{l.contact_company}</p>
              )}
              <p className="text-gold text-xs uppercase tracking-wider mb-3 mt-4">
                {LISTING_TYPE_LABELS[l.listing_type]}
              </p>

              <div className="mt-4">
                <InquiryForm
                  listingId={l.id}
                  listingTitle={l.title}
                  contactName={l.contact_name}
                  contactPhone={l.contact_phone}
                />
              </div>

              <p className="text-gray-600 text-xs mt-6">
                Listed {new Date(l.created_at).toLocaleDateString()}
                {l.view_count > 0 ? ` · ${l.view_count} views` : ""}
              </p>
            </div>
          </aside>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-16 border-t border-dark-border pt-8 text-gray-600 text-xs leading-relaxed">
          <p>
            Listings on the MaxLife Marketplace are user-submitted and have not
            been verified by MaxLife Realty. Buyers should conduct their own due
            diligence, including independent verification of financials, zoning,
            title, and physical condition, before executing any purchase contract.
          </p>
        </div>
      </article>
    </>
  );
}
