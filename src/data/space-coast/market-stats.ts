/** Anonymized market aggregates derived from FlexMLS active-listing data
 *  (Brevard County commercial sales + leases, snapshot 2026-04-26).
 *
 *  Numbers are bucketed and rounded — never exact figures from any single
 *  listing — so the page never displays third-party listing detail.
 */

export interface MarketStat {
  label: string;
  value: string;
  hint?: string;
}

export interface SegmentStats {
  /** Headline strap-line, e.g. "8 active listings" */
  headline: string;
  /** Stat tiles for the at-a-glance section */
  stats: MarketStat[];
  /** Body paragraph that contextualizes the segment */
  blurb: string;
}

/** Map keyed by segment slug to anonymized aggregates. */
export const saleStats: Record<string, SegmentStats> = {
  "space-coast-commercial-real-estate": {
    headline: "Active Space Coast commercial inventory",
    stats: [
      { label: "Active listings", value: "90+", hint: "for sale across Brevard" },
      { label: "Typical price", value: "$1M – $14M", hint: "list price range" },
      { label: "Median size", value: "~5,400 SF", hint: "building area" },
      { label: "Median DOM", value: "~120 days", hint: "days on market" },
    ],
    blurb:
      "The Space Coast (Brevard County) is currently running roughly 90 active commercial listings across all property types — a meaningful but not deep market. Median list price tracks around $2M and median building size around 5,400 SF, with a long tail of larger institutional product north of $5M.",
  },
  "space-coast-businesses-for-sale": {
    headline: "Active business-with-real-estate inventory",
    stats: [
      { label: "Active listings", value: "~24", hint: "businesses + RE" },
      { label: "Typical price", value: "$1.25M – $4.5M" },
      { label: "Typical size", value: "2,600 – 20,000 SF" },
      { label: "Median price/SF", value: "~$340/SF" },
    ],
    blurb:
      "Business-with-real-estate is the largest segment of active Space Coast inventory. Sellers package the operating business with the underlying property, and buyers acquire turnkey income with the option to owner-operate, sale-leaseback, or reposition.",
  },
  "space-coast-retail-property": {
    headline: "Active retail inventory",
    stats: [
      { label: "Active listings", value: "~15" },
      { label: "Typical price", value: "$1.1M – $3.9M" },
      { label: "Typical size", value: "1,700 – 27,000 SF" },
      { label: "Median price/SF", value: "~$236/SF" },
    ],
    blurb:
      "Retail inventory ranges from single-tenant pad sites to mid-size shopping centers. Stabilized centers price tighter than mainland Brevard reflects, with redevelopment-eligible US-1 frontage trading at land-value upside.",
  },
  "space-coast-mixed-use-property": {
    headline: "Active mixed-use inventory",
    stats: [
      { label: "Active listings", value: "~15" },
      { label: "Typical price", value: "$1.1M – $3.2M" },
      { label: "Typical size", value: "1,400 – 6,200 SF" },
      { label: "Median price/SF", value: "~$346/SF" },
    ],
    blurb:
      "Mixed-use is concentrated in Cocoa Beach, Cocoa Village, and Eau Gallie — walkable downtown locations with TC / CRO zoning that allows commercial-residential combinations and 30–45 foot height.",
  },
  "space-coast-office-space": {
    headline: "Active office inventory (for sale)",
    stats: [
      { label: "Active listings", value: "~10" },
      { label: "Typical price", value: "$1.1M – $2.25M" },
      { label: "Typical size", value: "2,300 – 10,500 SF" },
      { label: "Median price/SF", value: "~$364/SF" },
    ],
    blurb:
      "Most office-for-sale activity targets owner-users — professional-services and medical practices buying their own building rather than renewing a lease. Single-tenant doctor's offices in Rockledge, Cocoa, and Babcock Street are the recurring pattern.",
  },
  "space-coast-multifamily": {
    headline: "Active multifamily inventory",
    stats: [
      { label: "Active listings", value: "~9" },
      { label: "Typical price", value: "$1.27M – $2.15M" },
      { label: "Typical size", value: "3,000 – 6,000 SF" },
      { label: "Median price/SF", value: "~$357/SF" },
    ],
    blurb:
      "Multifamily inventory leans toward small walk-up product — eight-to-twenty-unit garden apartments built between 1960 and 1985. Beachside (Cocoa Beach, Indian Harbour Beach) prices premium; Melbourne workforce product underwrites strongest.",
  },
  "space-coast-industrial-property": {
    headline: "Active industrial inventory",
    stats: [
      { label: "Active listings", value: "~9" },
      { label: "Typical price", value: "$1.1M – $4.25M" },
      { label: "Typical size", value: "1,650 – 17,500 SF" },
      { label: "Median price/SF", value: "~$286/SF" },
    ],
    blurb:
      "Industrial inventory is structurally tight — sub-3% vacancy means good product moves quickly. Aerospace supply chain, contractor trades, and last-mile logistics tenants compete for limited West Melbourne and Cocoa SR-524 inventory.",
  },
  "space-coast-commercial-land": {
    headline: "Active commercial land inventory",
    stats: [
      { label: "Active listings", value: "~8" },
      { label: "Typical price", value: "$1.5M – $3.5M" },
      { label: "Typical size", value: "1 – 10 acres" },
      { label: "Median price/SF", value: "~$154/SF (improvable)" },
    ],
    blurb:
      "Commercial land is concentrated along I-95 frontage, US-1, SR-520, and the SR-528 / Port Canaveral corridor. Frontage trades at premium; infill parcels near new rooftop growth in Palm Bay and West Melbourne discount appropriately.",
  },
};

/** City-level sale aggregates (top 6 cities by active inventory). */
export const cityStats: Record<string, SegmentStats> = {
  melbourne: {
    headline: "Melbourne — the largest Space Coast market",
    stats: [
      { label: "Active for-sale", value: "~29 listings" },
      { label: "Typical price", value: "$1M – $14M" },
      { label: "Most active type", value: "Business + RE" },
      { label: "Other strong types", value: "Multifamily, Industrial" },
    ],
    blurb:
      "Melbourne is the deepest Space Coast market across every property type. Industrial and business-with-RE are the most active segments, with multifamily and office rounding out the mix.",
  },
  titusville: {
    headline: "Titusville — north Brevard's commercial gateway",
    stats: [
      { label: "Active for-sale", value: "~12 listings" },
      { label: "Typical price", value: "$1M – $9M" },
      { label: "Most active type", value: "Business + RE" },
      { label: "Other strong types", value: "Mixed-Use, Office" },
    ],
    blurb:
      "Titusville's commercial market is anchored by KSC contractors and US-1 / SR-50 frontage retail. Affordable land basis vs. south-Brevard makes it active for owner-users and small developers.",
  },
  "merritt-island": {
    headline: "Merritt Island — central-Brevard retail hub",
    stats: [
      { label: "Active for-sale", value: "~10 listings" },
      { label: "Typical price", value: "$1M – $3M" },
      { label: "Most active type", value: "Business + RE" },
      { label: "Other strong types", value: "Retail" },
    ],
    blurb:
      "Merritt Island activity concentrates along SR-520 and N. Courtenay Parkway — small-investor and owner-user product, daytime population pull from Port Canaveral and Cocoa Beach.",
  },
  cocoa: {
    headline: "Cocoa — affordable mainland Brevard",
    stats: [
      { label: "Active for-sale", value: "~10 listings" },
      { label: "Typical price", value: "$1M – $4M" },
      { label: "Most active type", value: "Retail" },
      { label: "Other strong types", value: "Mixed-Use, Office" },
    ],
    blurb:
      "Cocoa offers lower entry pricing than Melbourne and beachside markets — first-time CRE investors and owner-users priced out elsewhere find product here, especially around Cocoa Village and US-1.",
  },
  "cocoa-beach": {
    headline: "Cocoa Beach — oceanfront tourism market",
    stats: [
      { label: "Active for-sale", value: "~7 listings" },
      { label: "Typical price", value: "$1.2M – $3.5M" },
      { label: "Most active type", value: "Mixed-Use" },
      { label: "Other strong types", value: "Multifamily" },
    ],
    blurb:
      "Cocoa Beach inventory leans heavily toward TC-zoned mixed-use redevelopment plays and small multifamily — supply-constrained barrier-island geography keeps pricing firm.",
  },
  "palm-bay": {
    headline: "Palm Bay — Brevard's largest population base",
    stats: [
      { label: "Active for-sale", value: "~7 listings" },
      { label: "Typical price", value: "$1M – $5M" },
      { label: "Most active type", value: "Business + RE" },
      { label: "Other strong types", value: "Industrial, Retail" },
    ],
    blurb:
      "Palm Bay activity spreads across business-with-RE, retail along Malabar, and aerospace-supplier industrial. Lower cost basis than Melbourne with similar demand drivers.",
  },
  rockledge: {
    headline: "Rockledge — central-Brevard professional office",
    stats: [
      { label: "Active inventory", value: "~9 listings" },
      { label: "Most active side", value: "Lease (office)" },
      { label: "Strong types", value: "Office, Retail" },
      { label: "Best for", value: "Professional services" },
    ],
    blurb:
      "Rockledge is a central-Brevard office submarket — lease activity dominates, and per-SF rents price below Suntree/Viera. Strong fit for legal, medical, and financial-services tenants.",
  },
};

export const leaseStats: Record<string, SegmentStats> = {
  "space-coast-commercial-space-for-lease": {
    headline: "Active Space Coast commercial space for lease",
    stats: [
      { label: "Active listings", value: "85+", hint: "for lease across Brevard" },
      { label: "Most active type", value: "Office (35%)" },
      { label: "Median size", value: "~6,500 SF" },
      { label: "Sub-3% vacancy", value: "Industrial", hint: "structurally tight" },
    ],
    blurb:
      "The Space Coast lease market runs ~85 active listings — office leads (around a third of inventory), followed by business space, retail, and a tight industrial segment. Tenant-rep representation matters most where vacancy is sub-3%.",
  },
  "space-coast-office-space-for-lease": {
    headline: "Active office leases",
    stats: [
      { label: "Active listings", value: "~31", hint: "biggest lease segment" },
      { label: "Typical size", value: "600 – 10,000+ SF" },
      { label: "Top markets", value: "Melbourne, Cocoa Beach, Rockledge" },
      { label: "Common structure", value: "MG / FSG, 3–5 yr" },
    ],
    blurb:
      "Office is the largest lease segment on the Space Coast. Inventory ranges from single-suite professional offices to whole-floor tenancies, with Melbourne accounting for nearly half of active office availability.",
  },
  "space-coast-retail-space-for-lease": {
    headline: "Active retail leases",
    stats: [
      { label: "Active listings", value: "~17" },
      { label: "Typical size", value: "1,000 – 5,000 SF" },
      { label: "Top markets", value: "Melbourne, Cocoa, Rockledge" },
      { label: "Common structure", value: "NNN, 3–7 yr" },
    ],
    blurb:
      "Retail lease availability concentrates along Babcock Street, SR-520, US-1, and Malabar Road. Triple-net structures dominate, with TI allowances common on second-generation restaurant space.",
  },
  "space-coast-warehouse-for-lease": {
    headline: "Active warehouse / industrial leases",
    stats: [
      { label: "Active listings", value: "~6", hint: "tight inventory" },
      { label: "Typical size", value: "2,000 – 20,000 SF" },
      { label: "Top markets", value: "Melbourne, Palm Bay, Merritt Island" },
      { label: "Vacancy", value: "Sub-3%" },
    ],
    blurb:
      "Industrial lease inventory is tight — sub-3% vacancy means tenants need to move quickly when product comes available. Tenant-rep representation is decisive in winning the right space at the right price.",
  },
  "melbourne-commercial-space-for-lease": {
    headline: "Melbourne — deepest lease market on the Space Coast",
    stats: [
      { label: "Active listings", value: "~36" },
      { label: "Most active type", value: "Office" },
      { label: "Other strong types", value: "Business, Retail" },
      { label: "Common structure", value: "MG, 3–5 yr" },
    ],
    blurb:
      "Melbourne offers the broadest lease inventory on the Space Coast across every type. Office leasing concentrates on Babcock Street and Wickham Road; retail on US-1 and Babcock; flex and industrial in West Melbourne.",
  },
  "merritt-island-commercial-space-for-lease": {
    headline: "Merritt Island lease availability",
    stats: [
      { label: "Active listings", value: "~13" },
      { label: "Most active type", value: "Business / Retail" },
      { label: "Strong corridors", value: "SR-520, N. Courtenay" },
      { label: "Common structure", value: "NNN, 3–5 yr" },
    ],
    blurb:
      "Merritt Island lease activity centers on SR-520 and N. Courtenay — small-format retail and service space with daytime population from Port Canaveral and Cocoa Beach.",
  },
  "cocoa-beach-commercial-space-for-lease": {
    headline: "Cocoa Beach lease availability",
    stats: [
      { label: "Active listings", value: "~8" },
      { label: "Most active type", value: "Office / Retail" },
      { label: "Zoning", value: "TC, up to 45 ft" },
      { label: "Drivers", value: "Tourism, port" },
    ],
    blurb:
      "Cocoa Beach lease space draws tourism-adjacent retail, restaurant, and small-office tenants. TC zoning enables flexible mixed-use formats; supply is constrained by the barrier-island footprint.",
  },
  "rockledge-commercial-space-for-lease": {
    headline: "Rockledge — central-Brevard office concentration",
    stats: [
      { label: "Active listings", value: "~7" },
      { label: "Most active type", value: "Office" },
      { label: "Strong tenants", value: "Legal, medical, financial" },
      { label: "Rents vs. Viera", value: "Discount of 10–20%" },
    ],
    blurb:
      "Rockledge punches above its weight on the office-leasing side. US-1 and Barnes Boulevard concentrate professional-services tenancy, with rents that price below Suntree/Viera while drawing the same household base.",
  },
};

/** Crossover (city × type) anonymized aggregates — only the cells with ≥4 active listings. */
export const crossoverStats: Record<string, SegmentStats> = {
  "melbourne-businesses-for-sale": {
    headline: "Melbourne business-with-RE inventory",
    stats: [
      { label: "Active listings", value: "~8", hint: "in Melbourne" },
      { label: "Typical price", value: "$1.5M – $5M" },
      { label: "Common categories", value: "Trades, services, food" },
      { label: "Structure", value: "Owner-op or sale-leaseback" },
    ],
    blurb:
      "Melbourne carries the deepest business-with-RE inventory on the Space Coast — covering construction trades, marine and auto services, food-and-beverage, and small manufacturers.",
  },
  "melbourne-multifamily": {
    headline: "Melbourne multifamily inventory",
    stats: [
      { label: "Active listings", value: "~5", hint: "in Melbourne" },
      { label: "Typical price", value: "$1.3M – $3M" },
      { label: "Typical size", value: "8 – 24 units" },
      { label: "Vintage", value: "1960s – 1985" },
    ],
    blurb:
      "Melbourne's multifamily activity centers on small walk-up garden product — opportunity-rich for value-add operators willing to renovate interiors and reposition rents.",
  },
  "melbourne-industrial-property": {
    headline: "Melbourne industrial inventory",
    stats: [
      { label: "Active listings", value: "~4", hint: "in Melbourne" },
      { label: "Typical price", value: "$1.4M – $4.25M" },
      { label: "Typical size", value: "5,000 – 17,500 SF" },
      { label: "Submarket", value: "West Melbourne / MLB" },
    ],
    blurb:
      "Melbourne industrial activity is concentrated west of the airport — flex and warehouse buildings serving aerospace suppliers, contractor trades, and last-mile logistics with sub-3% vacancy supporting firm rents.",
  },
  "merritt-island-businesses-for-sale": {
    headline: "Merritt Island business inventory",
    stats: [
      { label: "Active listings", value: "~6", hint: "in Merritt Island" },
      { label: "Typical price", value: "$1M – $3M" },
      { label: "Common categories", value: "Service, restaurant, retail" },
      { label: "Structure", value: "Mostly owner-operated" },
    ],
    blurb:
      "Merritt Island carries a deep stack of small-business-with-RE listings — owner-operated service, restaurant, and retail concepts on SR-520 and N. Courtenay Parkway.",
  },
  "cocoa-beach-mixed-use-property": {
    headline: "Cocoa Beach mixed-use inventory",
    stats: [
      { label: "Active listings", value: "~4", hint: "in Cocoa Beach" },
      { label: "Typical price", value: "$1.5M – $3.5M" },
      { label: "Zoning", value: "TC (45-ft)" },
      { label: "Walk to ocean", value: "Most ≤ 0.5 mile" },
    ],
    blurb:
      "Cocoa Beach mixed-use inventory leans into TC-zoned redevelopment plays — buildings within walking distance of the ocean and Minutemen Causeway, often with 30–45 foot allowable heights and flexible commercial-residential mixes.",
  },
};
