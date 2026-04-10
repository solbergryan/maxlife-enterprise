import { Listing } from "@/data/listings";

/**
 * Link-only directory card for third-party syndicated listings.
 *
 * Intentionally displays only minimal, non-marketing, public-record
 * facts: street address, city/state/ZIP, county, property type, and a
 * link to the original listing source. Does NOT display price, cap
 * rate, NOI, square footage, lot size, tenant name, photographs, or
 * marketing titles, all of which may be subject to copyright or
 * competing brokerages' rights. Each card carries its own attribution
 * statement alongside the top-of-page ListingDisclaimer banner.
 */
export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors group flex flex-col">
      {/* Property type + status pills */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-dark-surface text-gold uppercase tracking-wider border border-gold/20">
          {listing.type}
        </span>
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 uppercase tracking-wider border border-green-500/20">
          {listing.status}
        </span>
      </div>

      {/* Address block — public-record facts only */}
      <div className="flex-1 mb-4">
        <h3 className="text-white font-semibold text-base leading-snug mb-1 line-clamp-2">
          {listing.address}
        </h3>
        <p className="text-gray-400 text-sm">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        {listing.county && listing.county !== "Other" && (
          <p className="text-gray-600 text-xs mt-1">
            {listing.county} County, FL
          </p>
        )}
      </div>

      {/* Per-card attribution */}
      <div className="border-t border-dark-border pt-3">
        <p className="text-[10px] text-gray-600 leading-snug mb-3">
          Syndicated third-party listing. MaxLife Realty is not the listing
          broker. See source for the listing brokerage of record, pricing,
          terms, and full details.
        </p>
        <a
          href={listing.crexiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors font-semibold"
        >
          View Full Listing
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
