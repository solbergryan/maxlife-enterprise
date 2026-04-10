/**
 * Persistent top-of-section disclaimer shown wherever the site displays
 * third-party syndicated listings. Required for FL / FREC 61J2-10.025
 * compliance and for NAR / MLS attribution rules.
 *
 * Keep this component on any page that renders <ListingCard /> or
 * <ListingGrid /> populated with third-party data.
 */
export default function ListingDisclaimer({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      role="note"
      aria-label="Third-party listings disclaimer"
      className={`bg-gold/5 border border-gold/30 rounded-lg text-gray-300 ${
        compact ? "p-3 text-xs" : "p-4 sm:p-5 text-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <svg
          className={`text-gold shrink-0 ${compact ? "w-4 h-4 mt-0.5" : "w-5 h-5 mt-0.5"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="leading-relaxed">
          <p className={compact ? "" : "font-semibold text-white mb-1"}>
            Third-party listings directory
          </p>
          <p>
            This page is a link-only directory of third-party commercial
            property listings. Only minimal public-record location facts
            (address, city, county, and property type) are shown here;
            pricing, photography, marketing descriptions, tenant details,
            and full property data are intentionally not reproduced.{" "}
            <span className="text-white font-semibold">
              MaxLife Realty is not the listing broker for any entry in
              this directory
            </span>
            . Click through to the source on each card to view the listing
            brokerage of record, pricing, full details, and conditions of
            sale. Information is deemed reliable but not guaranteed.
          </p>
          {!compact && (
            <p className="text-gray-500 text-xs mt-2">
              MaxLife Realty &middot; Florida Licensed Real Estate Brokerage
              &middot; FL Broker License #3354351
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
