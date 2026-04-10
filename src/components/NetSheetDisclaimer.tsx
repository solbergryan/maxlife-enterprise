/**
 * Persistent compliance notice shown on the Seller Net Sheet and Buyer
 * Estimate calculator pages. Required to keep the on-screen experience
 * aligned with the legal disclosures that are printed on page 2 of the
 * downloaded PDF. Do not remove without updating netSheetPdf.ts as well.
 */
export default function NetSheetDisclaimer({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      role="note"
      aria-label="Net sheet estimate disclaimer"
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
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="leading-relaxed">
          <p className="text-white font-semibold mb-1">
            Estimate only &mdash; not a Loan Estimate or Closing Disclosure
          </p>
          <p>
            This calculator is a closing cost estimate prepared by MaxLife
            Realty, a Florida licensed real estate brokerage (FL Broker
            License #3354351). It is{" "}
            <span className="text-white font-semibold">not</span> a Loan
            Estimate, Closing Disclosure, or settlement statement as defined
            under RESPA / TILA / CFPB TRID, and is{" "}
            <span className="text-white font-semibold">
              not legal, tax, financial, or investment advice
            </span>
            . Only your lender can issue an official Loan Estimate and only
            your title company can issue an official Closing Disclosure.
            Actual closing costs depend on your specific contract, title
            company, lender, and county. Consult your title company, lender,
            real estate attorney, and CPA before acting on any figure shown
            here.{" "}
            <span className="text-gold">
              Download the PDF for the full two-page disclosure document.
            </span>
          </p>
          {!compact && (
            <p className="text-gray-500 text-xs mt-2">
              Information deemed reliable but not guaranteed &middot; Equal
              Housing Opportunity &middot; Rates and fees subject to change
              without notice.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
