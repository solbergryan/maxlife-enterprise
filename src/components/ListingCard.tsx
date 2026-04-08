import { Listing, formatPrice } from "@/data/listings";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors">
      {/* Header */}
      <div className="px-5 pt-5 flex items-center justify-between">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-500/20 text-green-400 border-green-500/30">
          {listing.status}
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          {listing.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 pt-3">
        <h3 className="text-white font-semibold text-base mb-1 line-clamp-1">
          {listing.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          {listing.city}, {listing.state} {listing.zip}
          {listing.county !== "Other" && (
            <span className="text-gray-600"> &middot; {listing.county} County</span>
          )}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {listing.price && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Price
              </p>
              <p className="text-white font-semibold">
                {formatPrice(listing.price)}
              </p>
            </div>
          )}
          {listing.capRate && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Cap Rate
              </p>
              <p className="text-gold font-semibold">{listing.capRate}%</p>
            </div>
          )}
          {listing.noi && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                NOI
              </p>
              <p className="text-white font-semibold">
                {formatPrice(listing.noi)}
              </p>
            </div>
          )}
          {listing.sqft && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Size
              </p>
              <p className="text-white font-semibold">
                {listing.sqft.toLocaleString()} SF
              </p>
            </div>
          )}
          {!listing.sqft && listing.lotSize && (
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Lot Size
              </p>
              <p className="text-white font-semibold">
                {listing.lotSize} AC
              </p>
            </div>
          )}
        </div>

        {/* Tenant Info */}
        {listing.tenant && (
          <div className="border-t border-dark-border pt-3 flex items-center justify-between text-sm mb-3">
            <span className="text-gray-400 line-clamp-1">{listing.tenant}</span>
            {listing.remainingTerm && (
              <span className="text-gray-500 shrink-0 ml-2">
                {listing.remainingTerm} left
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer — Crexi Link + Broker Attribution */}
      <div className="px-5 pb-4 border-t border-dark-border pt-3 flex items-center justify-between">
        <div className="text-xs text-gray-600">
          {listing.listingBroker ? (
            <span>
              Listing by {listing.listingBroker}
              {listing.listingBrokerage && `, ${listing.listingBrokerage}`}
            </span>
          ) : (
            <span>Courtesy of Crexi</span>
          )}
        </div>
        <a
          href={listing.crexiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors font-medium"
        >
          View on Crexi
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
