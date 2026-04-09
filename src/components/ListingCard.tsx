import { Listing, formatPrice, getListingImage } from "@/data/listings";
import Image from "next/image";

export default function ListingCard({ listing }: { listing: Listing }) {
  const imageUrl = getListingImage(listing.crexiUrl);

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group">
      {/* Image */}
      <div className="relative h-44 bg-dark-surface overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={listing.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-surface">
            <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
        )}
        {/* Status & Type overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
            {listing.status}
          </span>
          <span className="text-xs text-white/80 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            {listing.type}
          </span>
        </div>
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
