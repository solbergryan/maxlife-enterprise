export interface SpaceCoastPropertyType {
  slug: string;
  side: "sale" | "lease";
  label: string;
  shortLabel: string;
  primer: string;
  whoBuys: string;
  whatsTypical: string;
  heroImage: string;
  heroAlt: string;
  hubSlug: string;
}

export const spaceCoastPropertyTypes: SpaceCoastPropertyType[] = [
  // Sale side
  {
    slug: "businesses-for-sale",
    side: "sale",
    label: "Businesses for Sale (with Real Estate)",
    shortLabel: "Business + RE",
    primer:
      "The largest segment of active Space Coast inventory — owner-operated businesses sold together with the underlying real estate. Common categories include construction trades, paint-and-body shops, marine services, restaurants, and light-manufacturing operations. M1 and CG zoning predominate.",
    whoBuys:
      "Owner-operators acquiring a turnkey income stream, sale-leaseback investors, and replacement-property buyers in a 1031 exchange seeking active income.",
    whatsTypical:
      "Concrete-block construction, 3,000 to 6,000 SF buildings on lots from a quarter to one acre, partial seller financing or sale-leaseback structures, and a transition agreement keeping the seller engaged through close-out of work-in-progress.",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-glass-architecture-futuristic-company-modern-finance-3191508.webp",
    heroAlt: "Space Coast business for sale with real estate",
    hubSlug: "space-coast-businesses-for-sale",
  },
  {
    slug: "retail-property",
    side: "sale",
    label: "Retail Property",
    shortLabel: "Retail",
    primer:
      "Multi-tenant strip centers, single-tenant pads, and small neighborhood retail buildings along the SR-520, US-1, Babcock Street, and Malabar Road corridors. Stabilized cap rates compress beachside; redevelopment opportunities trade with upside on US-1.",
    whoBuys:
      "1031 exchange buyers, family offices seeking stable cash flow, and value-add operators repositioning second-generation space.",
    whatsTypical:
      "Five-to-ten-tenant strip centers from 5,000 to 25,000 SF, mixed local and regional tenancy, percentage of vacant space presented as upside, and roof / parking / HVAC condition disclosed in OMs.",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shop-center-street-city-shopping-evening-3722822.webp",
    heroAlt: "Space Coast retail shopping center for sale",
    hubSlug: "space-coast-retail-property",
  },
  {
    slug: "mixed-use-property",
    side: "sale",
    label: "Mixed-Use Property",
    shortLabel: "Mixed Use",
    primer:
      "Combined commercial-and-residential buildings — Cocoa Beach Town Center (TC) zoning is the most active subcategory, supporting up to 45-foot height with retail, restaurant, residential, and hospitality uses. Cocoa Village and Eau Gallie also generate steady mixed-use deal flow.",
    whoBuys:
      "Live-work owner-users, redevelopment investors, and hospitality operators acquiring infill assets.",
    whatsTypical:
      "Concrete-block mid-century buildings 3,000 to 8,000 SF, walkable downtown locations, allowable height affording redevelopment upside, and TC / CRO / CG zoning.",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Space Coast mixed-use commercial property",
    hubSlug: "space-coast-mixed-use-property",
  },
  {
    slug: "office-space",
    side: "sale",
    label: "Office Buildings",
    shortLabel: "Office",
    primer:
      "Professional and medical office buildings ranging from single-tenant doctor's offices to small-to-mid-tenant suburban office parks. Strongest activity along Babcock Street, US-1 in Rockledge, Suntree/Viera, and the Cocoa professional core.",
    whoBuys:
      "Professional-services owner-users (legal, medical, accounting), small-investor REITs, and sale-leaseback investors.",
    whatsTypical:
      "Single-story or two-story buildings 4,000 to 12,000 SF, suburban surface parking ratios, and tenant rosters anchored by professional services or medical practices.",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-glass-facades-modern-facade-2256489.webp",
    heroAlt: "Space Coast office building for sale",
    hubSlug: "space-coast-office-space",
  },
  {
    slug: "multifamily",
    side: "sale",
    label: "Multifamily",
    shortLabel: "Multifamily",
    primer:
      "Small-to-mid-size multifamily — duplexes, fourplexes, eight-to-twenty-unit garden buildings, and infill workforce-housing properties. Cocoa Beach and Indian Harbour Beach trade beachside premiums; Melbourne workforce product underwrites the strongest.",
    whoBuys:
      "Local syndicates, 1031 buyers leaving NNN for cash flow, and family-office allocators rotating into Florida residential.",
    whatsTypical:
      "Eight-to-twenty unit walk-up product built between 1960 and 1985, mixed bedroom counts, ample value-add upside via interior renovations and rent-to-market repositioning.",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-windows-architecture-facade-wall-residential-5969571.webp",
    heroAlt: "Space Coast multifamily apartment building",
    hubSlug: "space-coast-multifamily",
  },
  {
    slug: "industrial-property",
    side: "sale",
    label: "Industrial & Warehouse",
    shortLabel: "Industrial",
    primer:
      "Warehouse, flex, and light-manufacturing buildings concentrated in West Melbourne, Cocoa SR-524, Titusville SR-405, and the Palm Bay industrial park. The sub-three-percent industrial vacancy rate and aerospace supply-chain demand have pushed pricing upward year over year.",
    whoBuys:
      "Aerospace and defense suppliers, contractor trades, last-mile logistics tenants, and sale-leaseback investors.",
    whatsTypical:
      "Concrete-tilt or block construction, 5,000 to 20,000 SF, 18-to-24-foot clear heights, fenced and graveled yards, and proximity to I-95 or SR-528.",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    heroAlt: "Space Coast industrial warehouse property",
    hubSlug: "space-coast-industrial-property",
  },
  {
    slug: "commercial-land",
    side: "sale",
    label: "Commercial Land",
    shortLabel: "Land",
    primer:
      "Unimproved commercial parcels suited to retail, mixed-use, multifamily, and industrial development. Frontage parcels along I-95, SR-528, US-1, and SR-520 see the most institutional interest; infill parcels near new rooftop growth in Palm Bay and West Melbourne are favored by smaller developers.",
    whoBuys:
      "Local and regional developers, build-to-suit users, and patient land bankers underwriting Brevard's population growth.",
    whatsTypical:
      "One to twenty acres, paved frontage, public utilities to the site, and zoning compatible with the developer's intended use.",
    heroImage:
      "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-blue-sky-nature-site-crane-228471.webp",
    heroAlt: "Space Coast commercial land for development",
    hubSlug: "space-coast-commercial-land",
  },

  // Lease side
  {
    slug: "office-space-for-lease",
    side: "lease",
    label: "Office Space for Lease",
    shortLabel: "Office for Lease",
    primer:
      "Office leasing is the largest active lease segment on the Space Coast. Professional and medical office suites range from 600 SF private-office units to whole-floor 10,000+ SF tenancies. Strongest inventory along Babcock Street (Melbourne), Wickham/Suntree, US-1 in Rockledge, and the Cocoa Beach Minutemen Causeway.",
    whoBuys:
      "Professional-services tenants (legal, accounting, financial advisory), medical practices, government contractors, and aerospace-supplier engineering teams.",
    whatsTypical:
      "Modified-gross or full-service-gross structures, three-to-five-year initial terms, broker-procured tenants, and base-rent escalations of two-to-three percent annually with CAM pass-throughs separate.",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-modern-building-facade-skyscraper-geometric-1048092.webp",
    heroAlt: "Space Coast office space for lease",
    hubSlug: "space-coast-office-space-for-lease",
  },
  {
    slug: "retail-space-for-lease",
    side: "lease",
    label: "Retail Space for Lease",
    shortLabel: "Retail for Lease",
    primer:
      "Multi-tenant retail strip space, end-cap restaurant pads, and second-generation restaurant suites. Most active along SR-520 (Merritt Island), Babcock Street (Melbourne), and Malabar Road (Palm Bay). Triple-net structures dominate.",
    whoBuys:
      "Quick-service restaurant operators, service-retail tenants (hair salons, fitness, dental), and regional franchisees expanding within Brevard.",
    whatsTypical:
      "Triple-net leases, three-to-seven-year terms, tenant-improvement allowances on second-generation space, and personal guaranties from local franchisees.",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-store-shop-storefront-business-retail-shopping-832188.webp",
    heroAlt: "Space Coast retail space for lease",
    hubSlug: "space-coast-retail-space-for-lease",
  },
  {
    slug: "warehouse-for-lease",
    side: "lease",
    label: "Warehouse & Industrial Space for Lease",
    shortLabel: "Warehouse for Lease",
    primer:
      "Tight industrial inventory drives lease activity for warehouse, flex, and contractor-yard space. The sub-three-percent vacancy rate keeps tenant options narrow — engaged tenant-rep representation is what wins deals when product becomes available.",
    whoBuys:
      "Aerospace and defense subcontractors, last-mile logistics tenants, contractor trades, and small manufacturing users.",
    whatsTypical:
      "Modified-gross or NNN structures, three-to-five-year terms, electrical and dock-door upgrades pre-negotiated, and fenced outdoor storage where available at premium per-SF rents.",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-abraudurso-shampaign-factory-warehouse-4853458.webp",
    heroAlt: "Space Coast warehouse for lease",
    hubSlug: "space-coast-warehouse-for-lease",
  },
];

export function getPropertyType(
  slug: string,
): SpaceCoastPropertyType | undefined {
  return spaceCoastPropertyTypes.find((t) => t.slug === slug);
}

export const saleTypes = spaceCoastPropertyTypes.filter((t) => t.side === "sale");
export const leaseTypes = spaceCoastPropertyTypes.filter((t) => t.side === "lease");
