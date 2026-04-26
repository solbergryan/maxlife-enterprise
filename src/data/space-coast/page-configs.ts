import type { FAQ } from "./faqs";
import {
  hubFaqs,
  businessForSaleFaqs,
  retailFaqs,
  officeFaqs,
  industrialFaqs,
  multifamilyFaqs,
  mixedUseFaqs,
  landFaqs,
  leaseHubFaqs,
  officeLeaseFaqs,
  retailLeaseFaqs,
  warehouseLeaseFaqs,
  cityFaqs,
} from "./faqs";
import { saleStats, leaseStats, cityStats, crossoverStats } from "./market-stats";
import type { SegmentStats } from "./market-stats";

export type PageKind =
  | "hub-sale"
  | "type-sale"
  | "city-sale"
  | "crossover-sale"
  | "hub-lease"
  | "type-lease"
  | "city-lease";

export interface SpaceCoastPageConfig {
  slug: string;
  kind: PageKind;
  side: "sale" | "lease";
  /** Display H1 (renders with " in Space Coast" or city name appended automatically when needed). */
  title: string;
  /** Browser tab + meta title */
  metaTitle: string;
  /** Meta description */
  metaDescription: string;
  /** Hero kicker label (small uppercase) */
  kicker: string;
  /** Hero subhead — one-liner under H1 */
  subhead: string;
  /** Hero body paragraph */
  heroBody: string;
  /** Primary CTA button label */
  ctaLabel: string;
  /** Hero image src + alt */
  heroImage: string;
  heroAlt: string;
  /** City slug, if scoped to a single city. */
  citySlug?: string;
  /** Property-type slug, if scoped to a single type. */
  typeSlug?: string;
  /** Segment stats for the at-a-glance section */
  stats: SegmentStats;
  /** FAQs for the page */
  faqs: FAQ[];
  /** Related slugs to surface in the cross-link section */
  related: { slug: string; label: string }[];
  /** Custom intro to the "Why Space Coast" section, optional override */
  driversIntro?: string;
}

const HERO = {
  hubSale:
    "/images/commercial-stock/commercial-business/maxlife-commercial-business-skyscrapers-modern-architecture-glassed-buildings-blue-10235499.webp",
  hubLease:
    "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscrapers-buildings-skyline-city-real-5999913.webp",
};

export const spaceCoastPageConfigs: SpaceCoastPageConfig[] = [
  // === HUB (sale side) ===
  {
    slug: "space-coast-commercial-real-estate",
    kind: "hub-sale",
    side: "sale",
    title: "Space Coast Commercial Real Estate",
    metaTitle:
      "Space Coast Commercial Real Estate | Brevard County CRE",
    metaDescription:
      "Space Coast (Brevard County) commercial real estate — investment property, office, retail, industrial, multifamily, mixed-use, and land for sale across Melbourne, Titusville, Cocoa, Cocoa Beach, Merritt Island, and Palm Bay.",
    kicker: "Brevard County · Florida",
    subhead:
      "Investment property, owner-user buildings, and ground-up sites across Brevard County",
    heroBody:
      "MaxLife Realty represents buyers, sellers, tenants, and landlords across the Space Coast — Melbourne, Titusville, Cocoa, Cocoa Beach, Merritt Island, Palm Bay, and the surrounding barrier-island communities. We work every property type, every deal size from $500K owner-user buildings to $14M institutional plays.",
    ctaLabel: "Find Space Coast Property",
    heroImage: HERO.hubSale,
    heroAlt: "Space Coast Brevard County commercial real estate",
    stats: saleStats["space-coast-commercial-real-estate"],
    faqs: hubFaqs,
    related: [
      { slug: "space-coast-businesses-for-sale", label: "Businesses for Sale" },
      { slug: "space-coast-retail-property", label: "Retail Property" },
      { slug: "space-coast-industrial-property", label: "Industrial Property" },
      { slug: "space-coast-commercial-space-for-lease", label: "Space for Lease" },
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
    ],
  },

  // === TYPE PAGES (sale) ===
  {
    slug: "space-coast-businesses-for-sale",
    kind: "type-sale",
    side: "sale",
    typeSlug: "businesses-for-sale",
    title: "Space Coast Businesses for Sale (with Real Estate)",
    metaTitle:
      "Businesses for Sale on the Space Coast | Brevard FL",
    metaDescription:
      "Businesses for sale with real estate across the Space Coast — Melbourne, Merritt Island, Titusville, Cocoa, Palm Bay. Construction trades, services, restaurants, and light manufacturing with the underlying property included.",
    kicker: "Business + Real Estate",
    subhead:
      "Owner-operated businesses sold together with the underlying property",
    heroBody:
      "Business-with-real-estate is the largest segment of active Space Coast commercial inventory — typically construction trades, paint-and-body, marine and auto services, restaurants, and small manufacturers where the seller is retiring or repositioning. We help buyers underwrite both the operating business and the real estate, and structure SBA financing across both.",
    ctaLabel: "See Available Businesses",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-glass-architecture-futuristic-company-modern-finance-3191508.webp",
    heroAlt: "Space Coast business for sale with real estate",
    stats: saleStats["space-coast-businesses-for-sale"],
    faqs: businessForSaleFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "melbourne-businesses-for-sale", label: "Melbourne Businesses" },
      { slug: "merritt-island-businesses-for-sale", label: "Merritt Island Businesses" },
      { slug: "space-coast-industrial-property", label: "Industrial Property" },
    ],
  },
  {
    slug: "space-coast-retail-property",
    kind: "type-sale",
    side: "sale",
    typeSlug: "retail-property",
    title: "Space Coast Retail Property for Sale",
    metaTitle:
      "Retail Property for Sale on the Space Coast | Brevard FL",
    metaDescription:
      "Strip centers, single-tenant retail, and pad sites for sale across the Space Coast — Melbourne, Merritt Island, Cocoa, Palm Bay, and Cocoa Beach.",
    kicker: "Retail Investment Property",
    subhead: "Strip centers, single-tenant pads, and neighborhood retail",
    heroBody:
      "Retail investment property across Brevard County — multi-tenant strip centers, single-tenant NNN pads, and neighborhood retail with redevelopment upside. Stabilized centers price tighter on the beachside; mainland US-1 and SR-520 offer wider cap rates and value-add levers.",
    ctaLabel: "Get Retail Listings",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shop-center-street-city-shopping-evening-3722822.webp",
    heroAlt: "Space Coast retail shopping center for sale",
    stats: saleStats["space-coast-retail-property"],
    faqs: retailFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-retail-space-for-lease", label: "Retail Space for Lease" },
      { slug: "merritt-island-commercial-real-estate", label: "Merritt Island CRE" },
      { slug: "nnn-properties-florida", label: "NNN Properties" },
    ],
  },
  {
    slug: "space-coast-mixed-use-property",
    kind: "type-sale",
    side: "sale",
    typeSlug: "mixed-use-property",
    title: "Space Coast Mixed-Use Property for Sale",
    metaTitle:
      "Mixed-Use Property for Sale on the Space Coast | Cocoa Beach + Brevard",
    metaDescription:
      "Mixed-use commercial property for sale across the Space Coast — TC-zoned Cocoa Beach redevelopment, Cocoa Village, Eau Gallie, and Babcock Street CG-zoned mixed-use.",
    kicker: "Mixed-Use Investment",
    subhead: "Combined commercial-residential buildings, walkable downtowns, redevelopment plays",
    heroBody:
      "Mixed-use inventory on the Space Coast concentrates in the most walkable and supply-constrained submarkets — Cocoa Beach, Cocoa Village, Eau Gallie, and downtown Titusville. TC and CRO zoning categories permit flexible commercial-residential combinations and meaningful allowable height, supporting both income strategies and redevelopment plays.",
    ctaLabel: "See Mixed-Use Inventory",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Space Coast mixed-use property for sale",
    stats: saleStats["space-coast-mixed-use-property"],
    faqs: mixedUseFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "cocoa-beach-mixed-use-property", label: "Cocoa Beach Mixed-Use" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
      { slug: "space-coast-multifamily", label: "Multifamily" },
    ],
  },
  {
    slug: "space-coast-office-space",
    kind: "type-sale",
    side: "sale",
    typeSlug: "office-space",
    title: "Space Coast Office Buildings for Sale",
    metaTitle:
      "Office Buildings for Sale on the Space Coast | Brevard FL",
    metaDescription:
      "Office buildings for sale across the Space Coast — professional office, medical office, and small office parks in Melbourne, Rockledge, Cocoa, Suntree/Viera, and Cocoa Beach.",
    kicker: "Office Investment Property",
    subhead: "Professional and medical office for owner-users and investors",
    heroBody:
      "Office buildings on the Space Coast trade primarily to owner-users — professional services and medical practices building equity instead of paying rent. Investor-grade product is concentrated in Babcock Street, US-1 in Rockledge, Suntree/Viera, and the Cocoa professional core.",
    ctaLabel: "See Office Buildings",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-glass-facades-modern-facade-2256489.webp",
    heroAlt: "Space Coast office building for sale",
    stats: saleStats["space-coast-office-space"],
    faqs: officeFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-office-space-for-lease", label: "Office for Lease" },
      { slug: "rockledge-commercial-space-for-lease", label: "Rockledge Office Lease" },
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE" },
    ],
  },
  {
    slug: "space-coast-multifamily",
    kind: "type-sale",
    side: "sale",
    typeSlug: "multifamily",
    title: "Space Coast Multifamily for Sale",
    metaTitle:
      "Multifamily for Sale on the Space Coast | Brevard FL Apartments",
    metaDescription:
      "Multifamily investment property across the Space Coast — small walk-up garden apartments, beachside duplexes, and value-add workforce housing in Melbourne, Cocoa Beach, and Indian Harbour Beach.",
    kicker: "Multifamily Investment",
    subhead: "Walk-up garden product, beachside boutique, value-add repositioning",
    heroBody:
      "Multifamily on the Space Coast leans toward small walk-up product — eight-to-twenty-unit garden buildings built between 1960 and 1985 with substantial value-add upside. Beachside (Cocoa Beach, Indian Harbour Beach, Satellite Beach) trades premium; mainland Melbourne offers the best workforce-housing fundamentals.",
    ctaLabel: "See Multifamily Listings",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-windows-architecture-facade-wall-residential-5969571.webp",
    heroAlt: "Space Coast multifamily apartment building for sale",
    stats: saleStats["space-coast-multifamily"],
    faqs: multifamilyFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "melbourne-multifamily", label: "Melbourne Multifamily" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
      { slug: "1031-exchange-florida", label: "1031 Exchange" },
    ],
  },
  {
    slug: "space-coast-industrial-property",
    kind: "type-sale",
    side: "sale",
    typeSlug: "industrial-property",
    title: "Space Coast Industrial Property for Sale",
    metaTitle:
      "Industrial Property for Sale on the Space Coast | Brevard FL",
    metaDescription:
      "Industrial and warehouse property across the Space Coast — flex, last-mile, and aerospace-supplier buildings in West Melbourne, Cocoa, Titusville, and Palm Bay. Sub-3% vacancy.",
    kicker: "Industrial Investment",
    subhead: "Warehouse, flex, and aerospace-supplier space — sub-3% vacancy",
    heroBody:
      "Industrial product on the Space Coast is structurally tight — sub-3% vacancy, aerospace-driven demand, and the upcoming Ellis Road expansion (mid-2028) supporting West Melbourne. Active inventory concentrates in West Melbourne, Cocoa SR-524, Titusville SR-405, and the Palm Bay industrial park.",
    ctaLabel: "See Industrial Listings",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    heroAlt: "Space Coast industrial warehouse for sale",
    stats: saleStats["space-coast-industrial-property"],
    faqs: industrialFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-warehouse-for-lease", label: "Warehouse for Lease" },
      { slug: "melbourne-industrial-property", label: "Melbourne Industrial" },
      { slug: "industrial-property-central-florida", label: "Central FL Industrial" },
    ],
  },
  {
    slug: "space-coast-commercial-land",
    kind: "type-sale",
    side: "sale",
    typeSlug: "commercial-land",
    title: "Space Coast Commercial Land for Sale",
    metaTitle:
      "Commercial Land for Sale on the Space Coast | Brevard FL",
    metaDescription:
      "Commercial development land across the Space Coast — I-95 frontage, US-1 corridors, SR-528 / Port Canaveral, and infill parcels in Melbourne, Palm Bay, and Titusville.",
    kicker: "Commercial Land",
    subhead: "Development sites, I-95 frontage, infill parcels",
    heroBody:
      "Commercial development land across Brevard County — I-95 frontage suited to retail and industrial, US-1 redevelopment parcels, SR-528 / Port Canaveral logistics sites, and infill parcels near new rooftop growth in Palm Bay and West Melbourne.",
    ctaLabel: "See Land Listings",
    heroImage:
      "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-blue-sky-nature-site-crane-228471.webp",
    heroAlt: "Space Coast commercial land for development",
    stats: saleStats["space-coast-commercial-land"],
    faqs: landFaqs,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "central-florida-land-for-development", label: "Central FL Land" },
      { slug: "build-to-suit-orlando", label: "Build-to-Suit" },
      { slug: "space-coast-industrial-property", label: "Industrial Property" },
    ],
  },

  // === CITY PAGES (sale-side as default city hub) ===
  {
    slug: "melbourne-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "melbourne",
    title: "Melbourne Commercial Real Estate",
    metaTitle:
      "Melbourne FL Commercial Real Estate | Space Coast",
    metaDescription:
      "Melbourne, Florida commercial real estate — investment property, office, retail, industrial, and multifamily across the West Melbourne airport district, Babcock Street, US-1, and Suntree/Viera.",
    kicker: "Melbourne · Brevard County",
    subhead: "The deepest commercial market on the Space Coast",
    heroBody:
      "Melbourne anchors the Space Coast economy — aerospace and defense, the airport's $72M expansion, the Ellis Road expansion (mid-2028), and the deepest commercial inventory in Brevard County across every property type. We work the entire Melbourne market: industrial in the airport district, office and medical along Babcock and Wickham, retail along US-1, and multifamily citywide.",
    ctaLabel: "See Melbourne Listings",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-business-building-elevators-modern-tower-3285853.webp",
    heroAlt: "Melbourne Florida commercial real estate",
    stats: cityStats["melbourne"],
    faqs: cityFaqs.melbourne,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "melbourne-businesses-for-sale", label: "Melbourne Businesses" },
      { slug: "melbourne-multifamily", label: "Melbourne Multifamily" },
      { slug: "melbourne-industrial-property", label: "Melbourne Industrial" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne for Lease" },
    ],
  },
  {
    slug: "titusville-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "titusville",
    title: "Titusville Commercial Real Estate",
    metaTitle:
      "Titusville FL Commercial Real Estate | Gateway to KSC",
    metaDescription:
      "Titusville, Florida commercial real estate — office, retail, industrial, and mixed-use near Kennedy Space Center, Cape Canaveral, and the SR-405 / SR-50 industrial corridors.",
    kicker: "Titusville · North Brevard",
    subhead: "Commercial gateway to Kennedy Space Center",
    heroBody:
      "Titusville sits at the doorstep of KSC and Cape Canaveral. Active commercial inventory leans industrial along SR-405 (M1 zoning) and retail on SR-50 / Cheney Highway. Lower entry pricing than south Brevard makes Titusville active for owner-users and small developers underwriting the Brevard launch economy.",
    ctaLabel: "See Titusville Listings",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    heroAlt: "Titusville Florida commercial real estate",
    stats: cityStats["titusville"],
    faqs: cityFaqs.titusville,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-industrial-property", label: "Industrial Property" },
      { slug: "space-coast-commercial-land", label: "Commercial Land" },
      { slug: "industries/aerospace-space-coast", label: "Aerospace Industry" },
    ],
  },
  {
    slug: "merritt-island-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "merritt-island",
    title: "Merritt Island Commercial Real Estate",
    metaTitle:
      "Merritt Island FL Commercial Real Estate | Central Brevard",
    metaDescription:
      "Merritt Island, Florida commercial real estate — retail, businesses-with-RE, and small commercial property along SR-520 and N. Courtenay Parkway.",
    kicker: "Merritt Island · Central Brevard",
    subhead: "Retail and small-business hub between the rivers",
    heroBody:
      "Merritt Island concentrates central-Brevard daytime population — the bridge between Cocoa, Cocoa Beach, and the Cape Canaveral cruise/space economy. Retail and business-with-real-estate dominate active inventory, with strong demand along SR-520 and N. Courtenay Parkway.",
    ctaLabel: "See Merritt Island Listings",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shop-center-street-city-shopping-evening-3722822.webp",
    heroAlt: "Merritt Island Florida commercial real estate",
    stats: cityStats["merritt-island"],
    faqs: cityFaqs["merritt-island"],
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "merritt-island-businesses-for-sale", label: "Merritt Island Businesses" },
      { slug: "merritt-island-commercial-space-for-lease", label: "Merritt Island Lease" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
    ],
  },
  {
    slug: "cocoa-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "cocoa",
    title: "Cocoa Commercial Real Estate",
    metaTitle: "Cocoa FL Commercial Real Estate | Brevard County | MaxLife",
    metaDescription:
      "Cocoa, Florida commercial real estate — retail, mixed-use, office, and industrial along US-1, SR-524, and Cocoa Village.",
    kicker: "Cocoa · Mainland Brevard",
    subhead: "Affordable mainland-Brevard commercial inventory",
    heroBody:
      "The City of Cocoa anchors the mainland side of the central-Brevard causeway. Industrial along US-1 and SR-524, retail along SR-520, and walkable mixed-use redevelopment in Cocoa Village define the active inventory. Lower entry pricing than south Brevard supports first-time CRE investors and owner-users.",
    ctaLabel: "See Cocoa Listings",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-windows-architecture-facade-wall-brick-5969573.webp",
    heroAlt: "Cocoa Florida commercial real estate",
    stats: cityStats["cocoa"],
    faqs: cityFaqs.cocoa,
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-retail-property", label: "Retail Property" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
      { slug: "rockledge-commercial-space-for-lease", label: "Rockledge Office" },
    ],
  },
  {
    slug: "cocoa-beach-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "cocoa-beach",
    title: "Cocoa Beach Commercial Real Estate",
    metaTitle:
      "Cocoa Beach FL Commercial Real Estate | Beachside Brevard",
    metaDescription:
      "Cocoa Beach, Florida commercial real estate — TC-zoned mixed-use, multifamily, and tourism-adjacent retail and hospitality on the barrier island.",
    kicker: "Cocoa Beach · Barrier Island",
    subhead: "Oceanfront tourism and TC-zoned redevelopment",
    heroBody:
      "Cocoa Beach is Brevard's tourism front door — supply-constrained between the Atlantic and the Banana River, anchored by year-round visitors, Port Canaveral cruise traffic, and the KSC Visitor Center. TC zoning enables 45-foot mixed-use, supporting redevelopment plays alongside small multifamily.",
    ctaLabel: "See Cocoa Beach Listings",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Cocoa Beach Florida commercial real estate",
    stats: cityStats["cocoa-beach"],
    faqs: cityFaqs["cocoa-beach"],
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "cocoa-beach-mixed-use-property", label: "Cocoa Beach Mixed-Use" },
      { slug: "space-coast-multifamily", label: "Multifamily" },
      { slug: "cocoa-beach-commercial-space-for-lease", label: "Cocoa Beach Lease" },
    ],
  },
  {
    slug: "palm-bay-commercial-real-estate",
    kind: "city-sale",
    side: "sale",
    citySlug: "palm-bay",
    title: "Palm Bay Commercial Real Estate",
    metaTitle:
      "Palm Bay FL Commercial Real Estate | South Brevard",
    metaDescription:
      "Palm Bay, Florida commercial real estate — retail along Malabar, Bayside Lakes medical office, and aerospace-supplier industrial near I-95.",
    kicker: "Palm Bay · South Brevard",
    subhead: "Brevard's largest population base",
    heroBody:
      "Palm Bay leads Brevard County in raw population (~120K residents) and continues to grow faster than the rest of the county. Active commercial inventory spreads across Malabar Road retail, Bayside Lakes medical office, and I-95-frontage industrial supporting the L3Harris Palm Bay campus.",
    ctaLabel: "See Palm Bay Listings",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-cityscape-business-center-urban-city-building-940870.webp",
    heroAlt: "Palm Bay Florida commercial real estate",
    stats: cityStats["palm-bay"],
    faqs: cityFaqs["palm-bay"],
    related: [
      { slug: "space-coast-commercial-real-estate", label: "Space Coast Hub" },
      { slug: "space-coast-retail-property", label: "Retail Property" },
      { slug: "space-coast-industrial-property", label: "Industrial Property" },
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE" },
    ],
  },

  // === CROSSOVER PAGES (sale) ===
  {
    slug: "melbourne-businesses-for-sale",
    kind: "crossover-sale",
    side: "sale",
    citySlug: "melbourne",
    typeSlug: "businesses-for-sale",
    title: "Melbourne Businesses for Sale (with Real Estate)",
    metaTitle:
      "Melbourne FL Businesses for Sale | Business + Real Estate",
    metaDescription:
      "Melbourne, Florida businesses for sale with real estate included. Construction trades, services, restaurants, and small manufacturers near MLB airport, Babcock, and US-1.",
    kicker: "Melbourne · Business + RE",
    subhead: "Owner-operated businesses with the underlying property",
    heroBody:
      "Melbourne carries the deepest stack of business-with-real-estate listings on the Space Coast. Active categories include construction and underground-utility trades, marine and auto services, restaurants and food-and-beverage, and light manufacturers serving the aerospace supply chain. SBA financing covers both the business and the real estate in a single facility.",
    ctaLabel: "Get Melbourne Business Listings",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-management-modern-office-large-innovative-headquarters-2766429.webp",
    heroAlt: "Melbourne Florida business for sale",
    stats: crossoverStats["melbourne-businesses-for-sale"],
    faqs: businessForSaleFaqs,
    related: [
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE Hub" },
      { slug: "space-coast-businesses-for-sale", label: "All Space Coast Businesses" },
      { slug: "merritt-island-businesses-for-sale", label: "Merritt Island Businesses" },
      { slug: "melbourne-industrial-property", label: "Melbourne Industrial" },
    ],
  },
  {
    slug: "melbourne-multifamily",
    kind: "crossover-sale",
    side: "sale",
    citySlug: "melbourne",
    typeSlug: "multifamily",
    title: "Melbourne Multifamily for Sale",
    metaTitle:
      "Melbourne FL Multifamily for Sale | Apartments + Workforce Housing",
    metaDescription:
      "Melbourne, Florida multifamily for sale — small walk-up garden apartments, value-add workforce housing, and infill development sites.",
    kicker: "Melbourne · Multifamily",
    subhead: "Walk-up garden product, value-add workforce housing",
    heroBody:
      "Melbourne's multifamily inventory is concentrated in small walk-up garden product built between 1960 and 1985. Value-add operators find substantial upside via interior renovations and rent-to-market repositioning, supported by population growth, aerospace employment, and a structural shortage of workforce housing.",
    ctaLabel: "Get Multifamily Listings",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-windows-architecture-facade-wall-residential-5969572.webp",
    heroAlt: "Melbourne Florida multifamily apartment building",
    stats: crossoverStats["melbourne-multifamily"],
    faqs: multifamilyFaqs,
    related: [
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE Hub" },
      { slug: "space-coast-multifamily", label: "All Space Coast Multifamily" },
      { slug: "1031-exchange-florida", label: "1031 Exchange" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE" },
    ],
  },
  {
    slug: "melbourne-industrial-property",
    kind: "crossover-sale",
    side: "sale",
    citySlug: "melbourne",
    typeSlug: "industrial-property",
    title: "Melbourne Industrial Property for Sale",
    metaTitle:
      "Melbourne FL Industrial Property for Sale | West Melbourne + MLB",
    metaDescription:
      "Melbourne, Florida industrial property for sale — flex, warehouse, and aerospace-supplier buildings in the West Melbourne airport district. Sub-3% vacancy.",
    kicker: "Melbourne · Industrial",
    subhead: "Flex, warehouse, and aerospace-supplier space — sub-3% vacancy",
    heroBody:
      "Melbourne industrial inventory is concentrated west of the airport — the airport district, John Rodes Boulevard, and the soon-to-be-expanded Ellis Road corridor (opening mid-2028). Aerospace and defense suppliers, contractor trades, and last-mile logistics tenants compete for scarce inventory in a sub-3% vacancy environment.",
    ctaLabel: "Get Industrial Listings",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    heroAlt: "Melbourne Florida industrial warehouse",
    stats: crossoverStats["melbourne-industrial-property"],
    faqs: industrialFaqs,
    related: [
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE Hub" },
      { slug: "space-coast-industrial-property", label: "All Space Coast Industrial" },
      { slug: "space-coast-warehouse-for-lease", label: "Warehouse for Lease" },
      { slug: "industrial-property-central-florida", label: "Central FL Industrial" },
    ],
  },
  {
    slug: "merritt-island-businesses-for-sale",
    kind: "crossover-sale",
    side: "sale",
    citySlug: "merritt-island",
    typeSlug: "businesses-for-sale",
    title: "Merritt Island Businesses for Sale (with Real Estate)",
    metaTitle:
      "Merritt Island FL Businesses for Sale | Business + Real Estate",
    metaDescription:
      "Merritt Island, Florida businesses for sale with real estate. Service retail, restaurants, marine services, and trades along SR-520 and N. Courtenay Parkway.",
    kicker: "Merritt Island · Business + RE",
    subhead: "Owner-operated businesses on Brevard's central retail corridor",
    heroBody:
      "Merritt Island concentrates owner-operated small businesses — service retail, restaurants, marine services, and trades — along SR-520 and N. Courtenay Parkway. The island's daytime population pull from Port Canaveral and Cocoa Beach supports stable cash flow for buyers underwriting the operating side of these acquisitions.",
    ctaLabel: "Get Merritt Island Business Listings",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shopping-mall-center-crowd-7340181.webp",
    heroAlt: "Merritt Island business for sale",
    stats: crossoverStats["merritt-island-businesses-for-sale"],
    faqs: businessForSaleFaqs,
    related: [
      { slug: "merritt-island-commercial-real-estate", label: "Merritt Island CRE Hub" },
      { slug: "space-coast-businesses-for-sale", label: "All Space Coast Businesses" },
      { slug: "merritt-island-commercial-space-for-lease", label: "Merritt Island Lease" },
      { slug: "melbourne-businesses-for-sale", label: "Melbourne Businesses" },
    ],
  },
  {
    slug: "cocoa-beach-mixed-use-property",
    kind: "crossover-sale",
    side: "sale",
    citySlug: "cocoa-beach",
    typeSlug: "mixed-use-property",
    title: "Cocoa Beach Mixed-Use Property for Sale",
    metaTitle:
      "Cocoa Beach FL Mixed-Use Property | TC Zoning",
    metaDescription:
      "Cocoa Beach, Florida mixed-use property for sale — TC-zoned redevelopment plays up to 45 ft, walking distance to the ocean and Minutemen Causeway.",
    kicker: "Cocoa Beach · Mixed-Use",
    subhead: "TC-zoned redevelopment within walking distance of the ocean",
    heroBody:
      "Cocoa Beach mixed-use inventory leans heavily into TC-zoned redevelopment plays — concrete-block buildings on S. Orlando Avenue, Minutemen Causeway, and the side streets within walking distance of the ocean. TC zoning permits 45-foot mixed-use combinations of retail, restaurant, residential, and hospitality.",
    ctaLabel: "Get Cocoa Beach Mixed-Use Listings",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Cocoa Beach mixed-use property for sale",
    stats: crossoverStats["cocoa-beach-mixed-use-property"],
    faqs: mixedUseFaqs,
    related: [
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE Hub" },
      { slug: "space-coast-mixed-use-property", label: "All Space Coast Mixed-Use" },
      { slug: "cocoa-beach-commercial-space-for-lease", label: "Cocoa Beach Lease" },
      { slug: "space-coast-multifamily", label: "Multifamily" },
    ],
  },

  // === LEASE HUB ===
  {
    slug: "space-coast-commercial-space-for-lease",
    kind: "hub-lease",
    side: "lease",
    title: "Space Coast Commercial Space for Lease",
    metaTitle:
      "Space Coast Commercial Space for Lease | Tenant Rep | Brevard FL",
    metaDescription:
      "Office, retail, warehouse, and industrial space for lease across the Space Coast — Melbourne, Cocoa Beach, Merritt Island, Rockledge, and Palm Bay. Free tenant-rep representation.",
    kicker: "Brevard County · Tenant Rep",
    subhead: "Office, retail, warehouse, and industrial space for lease — represented by us, paid by the listing side",
    heroBody:
      "We represent tenants searching for commercial space across the Space Coast. Office and medical office, retail and restaurant, warehouse and flex — we run the search, write the LOI, negotiate the lease, and protect your interests through occupancy. The listing side typically pays our fee, so most engagements come at no out-of-pocket cost to you.",
    ctaLabel: "Start a Tenant Search",
    heroImage: HERO.hubLease,
    heroAlt: "Space Coast commercial space for lease",
    stats: leaseStats["space-coast-commercial-space-for-lease"],
    faqs: leaseHubFaqs,
    related: [
      { slug: "space-coast-office-space-for-lease", label: "Office for Lease" },
      { slug: "space-coast-retail-space-for-lease", label: "Retail for Lease" },
      { slug: "space-coast-warehouse-for-lease", label: "Warehouse for Lease" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne Lease" },
      { slug: "space-coast-commercial-real-estate", label: "Space Coast CRE Hub" },
    ],
  },

  // === LEASE TYPE PAGES ===
  {
    slug: "space-coast-office-space-for-lease",
    kind: "type-lease",
    side: "lease",
    typeSlug: "office-space-for-lease",
    title: "Space Coast Office Space for Lease",
    metaTitle:
      "Office Space for Lease on the Space Coast | Brevard FL",
    metaDescription:
      "Office and medical office space for lease across the Space Coast — Melbourne Babcock and Wickham, Rockledge US-1, Cocoa Beach, and Suntree/Viera. Free tenant rep.",
    kicker: "Office Lease · Tenant Rep",
    subhead: "Professional and medical office suites — single offices to whole floors",
    heroBody:
      "Office is the largest active lease segment on the Space Coast. We represent tenants from solo professionals needing a 600 SF private office to growing firms taking 10,000+ SF whole floors. We map the market, build a comparison shortlist, write the LOI, and protect your interests on TI allowances, free rent, and exit clauses.",
    ctaLabel: "Find Office Space",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-modern-building-facade-skyscraper-geometric-1048092.webp",
    heroAlt: "Space Coast office space for lease",
    stats: leaseStats["space-coast-office-space-for-lease"],
    faqs: officeLeaseFaqs,
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "rockledge-commercial-space-for-lease", label: "Rockledge Office Lease" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne Lease" },
      { slug: "space-coast-office-space", label: "Buy an Office Building" },
    ],
  },
  {
    slug: "space-coast-retail-space-for-lease",
    kind: "type-lease",
    side: "lease",
    typeSlug: "retail-space-for-lease",
    title: "Space Coast Retail Space for Lease",
    metaTitle:
      "Retail Space for Rent on the Space Coast | Brevard FL",
    metaDescription:
      "Retail space for lease across the Space Coast — Babcock Street, SR-520, Malabar Road, and Cocoa Beach Minutemen Causeway. Restaurant pads and second-generation space.",
    kicker: "Retail Lease · Tenant Rep",
    subhead: "Restaurant pads, in-line retail, and end-cap space",
    heroBody:
      "Retail availability on the Space Coast concentrates along Babcock Street (Melbourne), SR-520 (Merritt Island), Malabar Road (Palm Bay), and Cocoa Beach. We represent restaurant operators, service-retail tenants, and franchisees — running the search, negotiating TI allowances, and structuring exit options that protect against sales-volume risk.",
    ctaLabel: "Find Retail Space",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-store-shop-storefront-business-retail-shopping-832188.webp",
    heroAlt: "Space Coast retail space for lease",
    stats: leaseStats["space-coast-retail-space-for-lease"],
    faqs: retailLeaseFaqs,
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne Lease" },
      { slug: "merritt-island-commercial-space-for-lease", label: "Merritt Island Lease" },
      { slug: "space-coast-retail-property", label: "Buy Retail Property" },
    ],
  },
  {
    slug: "space-coast-warehouse-for-lease",
    kind: "type-lease",
    side: "lease",
    typeSlug: "warehouse-for-lease",
    title: "Space Coast Warehouse & Industrial Space for Lease",
    metaTitle:
      "Warehouse for Lease on the Space Coast | Brevard FL",
    metaDescription:
      "Warehouse, flex, and industrial space for lease across the Space Coast — West Melbourne, Cocoa SR-524, Titusville, and Palm Bay. Sub-3% vacancy.",
    kicker: "Industrial Lease · Tenant Rep",
    subhead: "Warehouse, flex, and outdoor storage — sub-3% vacancy",
    heroBody:
      "Industrial lease inventory on the Space Coast is structurally tight — sub-3% vacancy keeps tenant options narrow, which is exactly why engaged tenant-rep representation matters. We monitor upcoming availability, work direct to landlords on off-market space, and negotiate TI, exit options, and outdoor-storage rights when available.",
    ctaLabel: "Find Warehouse Space",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-abraudurso-shampaign-factory-warehouse-4853458.webp",
    heroAlt: "Space Coast warehouse for lease",
    stats: leaseStats["space-coast-warehouse-for-lease"],
    faqs: warehouseLeaseFaqs,
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne Lease" },
      { slug: "space-coast-industrial-property", label: "Buy Industrial Property" },
      { slug: "industrial-property-central-florida", label: "Central FL Industrial" },
    ],
  },

  // === LEASE CITY PAGES ===
  {
    slug: "melbourne-commercial-space-for-lease",
    kind: "city-lease",
    side: "lease",
    citySlug: "melbourne",
    title: "Melbourne FL Commercial Space for Lease",
    metaTitle:
      "Melbourne FL Commercial Space for Lease | Office, Retail, Industrial",
    metaDescription:
      "Melbourne, Florida commercial space for lease — office, retail, warehouse, and medical office across Babcock Street, Wickham Road, US-1, and the airport district.",
    kicker: "Melbourne · Tenant Rep",
    subhead: "Deepest lease inventory on the Space Coast across every type",
    heroBody:
      "Melbourne carries the broadest active lease inventory on the Space Coast — office leasing on Babcock Street and Wickham Road, retail on US-1 and Babcock, flex and industrial in the West Melbourne airport district. We represent tenants from solo professionals to multi-tenant users, mapping the entire market and protecting your interests through executed lease.",
    ctaLabel: "Start a Melbourne Search",
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-business-building-elevators-modern-tower-3285853.webp",
    heroAlt: "Melbourne FL commercial space for lease",
    stats: leaseStats["melbourne-commercial-space-for-lease"],
    faqs: cityFaqs.melbourne,
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "space-coast-office-space-for-lease", label: "Office for Lease" },
      { slug: "space-coast-retail-space-for-lease", label: "Retail for Lease" },
      { slug: "melbourne-commercial-real-estate", label: "Melbourne CRE (Buy)" },
    ],
  },
  {
    slug: "merritt-island-commercial-space-for-lease",
    kind: "city-lease",
    side: "lease",
    citySlug: "merritt-island",
    title: "Merritt Island FL Commercial Space for Lease",
    metaTitle:
      "Merritt Island FL Commercial Space for Lease | Retail + Office",
    metaDescription:
      "Merritt Island, Florida commercial space for lease — retail, office, and small business space along SR-520 and N. Courtenay Parkway.",
    kicker: "Merritt Island · Tenant Rep",
    subhead: "Retail and small-business space on Brevard's central corridor",
    heroBody:
      "Merritt Island lease availability concentrates on SR-520 and N. Courtenay Parkway — small-format retail, service space, and small office suites. Daytime population pull from Port Canaveral and Cocoa Beach supports tenant cash flow; we run the search and negotiate TI and free-rent concessions on second-generation space.",
    ctaLabel: "Start a Merritt Island Search",
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shop-center-street-city-shopping-evening-3722822.webp",
    heroAlt: "Merritt Island commercial space for lease",
    stats: leaseStats["merritt-island-commercial-space-for-lease"],
    faqs: cityFaqs["merritt-island"],
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "merritt-island-commercial-real-estate", label: "Merritt Island CRE (Buy)" },
      { slug: "space-coast-retail-space-for-lease", label: "Retail for Lease" },
      { slug: "cocoa-beach-commercial-space-for-lease", label: "Cocoa Beach Lease" },
    ],
  },
  {
    slug: "cocoa-beach-commercial-space-for-lease",
    kind: "city-lease",
    side: "lease",
    citySlug: "cocoa-beach",
    title: "Cocoa Beach FL Commercial Space for Lease",
    metaTitle:
      "Cocoa Beach FL Commercial Space for Lease | TC + Tourism",
    metaDescription:
      "Cocoa Beach, Florida commercial space for lease — TC-zoned mixed-use, tourism-adjacent retail, and small office suites along S. Orlando Avenue and Minutemen Causeway.",
    kicker: "Cocoa Beach · Tenant Rep",
    subhead: "Tourism-adjacent retail, mixed-use, and small office suites",
    heroBody:
      "Cocoa Beach lease availability draws tourism-adjacent retail, restaurant, and small-office tenants. Inventory is supply-constrained by the barrier-island footprint; TC zoning enables flexible mixed-use formats. We represent tenants on second-generation space, restaurant pads, and TC-permitted hospitality combinations.",
    ctaLabel: "Start a Cocoa Beach Search",
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Cocoa Beach commercial space for lease",
    stats: leaseStats["cocoa-beach-commercial-space-for-lease"],
    faqs: cityFaqs["cocoa-beach"],
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "cocoa-beach-commercial-real-estate", label: "Cocoa Beach CRE (Buy)" },
      { slug: "cocoa-beach-mixed-use-property", label: "Cocoa Beach Mixed-Use" },
      { slug: "merritt-island-commercial-space-for-lease", label: "Merritt Island Lease" },
    ],
  },
  {
    slug: "rockledge-commercial-space-for-lease",
    kind: "city-lease",
    side: "lease",
    citySlug: "rockledge",
    title: "Rockledge FL Commercial Space for Lease",
    metaTitle:
      "Rockledge FL Commercial Space for Lease | Office + Medical",
    metaDescription:
      "Rockledge, Florida commercial space for lease — professional and medical office suites along US-1 and Barnes Boulevard with rents discounting Suntree/Viera.",
    kicker: "Rockledge · Tenant Rep",
    subhead: "Central-Brevard office at a discount to Suntree/Viera",
    heroBody:
      "Rockledge punches above its weight on the office-leasing side — concentrated activity on US-1 and Barnes Boulevard supports professional and medical office tenants drawing the same Viera household base at discounted rents. We represent tenants on suite searches, lease negotiations, and renewals.",
    ctaLabel: "Start a Rockledge Search",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-office-building-glass-skyscraper-city-4431284.webp",
    heroAlt: "Rockledge office space for lease",
    stats: leaseStats["rockledge-commercial-space-for-lease"],
    faqs: cityFaqs.rockledge,
    related: [
      { slug: "space-coast-commercial-space-for-lease", label: "Lease Hub" },
      { slug: "space-coast-office-space-for-lease", label: "Office for Lease" },
      { slug: "space-coast-office-space", label: "Buy an Office Building" },
      { slug: "melbourne-commercial-space-for-lease", label: "Melbourne Lease" },
    ],
  },
];

export const allSpaceCoastSlugs = spaceCoastPageConfigs.map((c) => c.slug);

export function getPageConfig(
  slug: string,
): SpaceCoastPageConfig | undefined {
  return spaceCoastPageConfigs.find((c) => c.slug === slug);
}
