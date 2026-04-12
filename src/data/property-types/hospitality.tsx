import type { PropertyTypeEntry } from "./types";

const hospitalityListings = [
  {
    name: "Crexi",
    tag: "Tech-forward CRE marketplace",
    description: "Growing inventory of Florida hospitality listings.",
    floridaUrl: "https://www.crexi.com/properties/FL/Hospitality",
    orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Hospitality",
    allUrl: "https://www.crexi.com/properties/Hospitality",
  },
  {
    name: "LoopNet",
    tag: "Largest CRE listings network",
    description: "The biggest pool of hotel listings in Florida.",
    floridaUrl: "https://www.loopnet.com/search/hotels/fl/for-sale/",
    orlandoUrl: "https://www.loopnet.com/search/hotels/orlando-fl/for-sale/",
    allUrl: "https://www.loopnet.com/search/hotels/usa/for-sale/",
  },
  {
    name: "HVS Brokerage",
    tag: "Hospitality specialist",
    description: "Specialty hotel brokerage with institutional Florida inventory.",
    floridaUrl: "https://www.hvs.com/Brokerage/Listings",
    orlandoUrl: "https://www.hvs.com/Brokerage/Listings",
    allUrl: "https://www.hvs.com/Brokerage",
  },
];

const hospitalityPersonas = [
  { name: "Hotel Operators", tag: "Platform Builders", description: "Management companies building multi-property flags across Florida.", fit: "Direct operator acquisitions at scale." },
  { name: "Private Equity", tag: "Yield Seekers", description: "PE firms with dedicated hospitality strategies targeting Sunbelt markets.", fit: "Florida is the #1 target market for PE hotel capital." },
  { name: "Family Offices", tag: "Trophy Assets", description: "Multi-generational wealth acquiring trophy Florida hospitality assets.", fit: "Beachfront resorts and boutique hotels." },
  { name: "1031 Buyers", tag: "Fast-Close", description: "Exchange buyers looking for yield and cash flow.", fit: "Limited-service hotels offer clean 1031 execution." },
];

const hospitalityTopLevel: PropertyTypeEntry = {
  slug: "hospitality",
  meta: {
    title: "Hotels & Hospitality Properties for Sale in Florida | Resort Real Estate",
    description: "Buy hotels and hospitality real estate in Florida. Full-service, limited-service, boutique, and resort properties.",
    keywords: "hotels for sale florida, hospitality real estate, orlando hotels, beach resort",
  },
  page: {
    displayName: "Hospitality",
    pluralDisplayName: "Hospitality Properties",
    heroEyebrow: "Hospitality Investment Opportunities",
    heroHeadline: "Hotels & Hospitality Properties in Florida",
    heroSubheadline: "Florida is the #1 tourism state in America — 130M+ annual visitors, year-round demand",
    heroBody: "Florida hospitality is backed by the strongest demand profile in America: 130M+ annual visitors, the country's #1 theme park market (Orlando), international gateway cities, and year-round beach tourism. Cap rates for hospitality vary enormously — from 6.0% for trophy beachfront resorts to 9.0%+ for older limited-service exterior-corridor hotels. Management expertise and brand flag selection matter more in hospitality than in any other CRE asset class.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $500M+", detail: "Limited-service to resort" },
      { label: "Common Cap Rate", value: "6.0% – 9.0%+", detail: "Wide dispersion by flag and location" },
      { label: "Florida Visitors", value: "130M+/yr", detail: "#1 tourism state in America" },
    ],
    formats: [
      { name: "Full-Service Hotel", capRate: "6.50% – 8.00%", footprint: "150 – 500+ rooms", note: "F&B, meeting space, high service levels. Institutional urban and airport product." },
      { name: "Limited-Service / Select", capRate: "7.50% – 9.00%", footprint: "80 – 200 rooms", note: "Brand flags like Holiday Inn Express, Hampton. Most active trading category." },
      { name: "Boutique Hotel", capRate: "7.00% – 8.50%", footprint: "30 – 150 rooms", note: "Independent or soft-branded. Personality-driven premium RevPAR potential." },
      { name: "Extended-Stay", capRate: "7.25% – 8.50%", footprint: "80 – 150 suites", note: "Residence Inn, Homewood, TownePlace. Durable business travel demand." },
      { name: "Resort", capRate: "6.00% – 8.00%", footprint: "150 – 1000+ rooms", note: "Beachfront and destination resorts. Trophy-class, longest hold horizons." },
      { name: "Motel / Economy", capRate: "8.50% – 11.0%", footprint: "30 – 100 rooms", note: "Older exterior-corridor product. Value or redevelopment plays." },
    ],
    prosConsIntro: "Hospitality is more operationally complex than any other CRE asset class — but offers higher yield and reinvestment optionality.",
    pros: [
      { title: "Highest Cash Yield in CRE", description: "Limited-service and boutique hotels often yield 8–10%+ in-place cap rates." },
      { title: "Tourism Tailwind", description: "Florida's visitor economy has rebounded fully from COVID and continues to grow." },
      { title: "Pricing Power", description: "Hotel rates reset nightly — inflation captured instantly, unlike long-lease CRE." },
      { title: "PIP Reinvestment Upside", description: "Property improvement plans refresh product and drive ADR gains." },
      { title: "Brand Flag Support", description: "Major franchise brands bring reservation systems, loyalty programs, and marketing scale." },
    ],
    cons: [
      { title: "Operational Complexity", description: "Hospitality requires active management, specialty accounting, and daily operations oversight." },
      { title: "High Fixed Costs", description: "Labor and insurance are material cost lines with less flex than other CRE." },
      { title: "Brand PIP Obligations", description: "Franchise agreements require periodic PIPs — underwrite reserve requirements." },
      { title: "Economic Sensitivity", description: "Hotel demand is the most economically sensitive of any CRE asset class." },
      { title: "Insurance Cost Explosion", description: "Florida hotel insurance has exploded — especially beachfront product. Underwrite carefully." },
    ],
    personas: hospitalityPersonas,
    underwritingMetrics: [
      { label: "Occupancy", detail: "65–75% stabilized occupancy for limited-service Florida hotels" },
      { label: "ADR (Average Daily Rate)", detail: "$110 – $250+ for Florida limited-service; resorts much higher" },
      { label: "RevPAR", detail: "ADR × Occupancy — the critical hospitality performance metric" },
      { label: "Labor % of Revenue", detail: "28–38% for limited-service; 40–50% for full-service" },
      { label: "FF&E Reserve", detail: "4% of revenue annually for furniture, fixtures, equipment replacement" },
      { label: "Franchise Fees", detail: "10–14% of room revenue including royalty, marketing, and reservation fees" },
    ],
    listingSites: hospitalityListings,
    listingsIntro: "Want to see public hospitality listings? These marketplaces cover Florida hotels.",
    listingsFootnote: "The best hotel deals trade through specialty hospitality brokers and off-market owner relationships.",
    faqs: [
      { q: "What's driving Florida hospitality demand?", a: "130M+ annual visitors, the country's #1 theme park market in Orlando, year-round beach tourism, international gateway cities, and business travel recovery. Florida's tourism economy is the most durable in America." },
      { q: "How do I underwrite a hotel deal?", a: "Focus on RevPAR trends (ADR × occupancy), market penetration vs competitive set, PIP reserve requirements, franchise fee structure, and conservative insurance underwriting. Hotels trade on NOI, not just cap rate — operating leverage matters enormously." },
      { q: "What's the difference between franchised and independent?", a: "Franchised hotels operate under a brand flag (Marriott, Hilton, IHG) with access to reservation systems, loyalty programs, and marketing. Independent hotels offer more flexibility and higher operating margins but lose brand distribution. Most institutional hospitality is franchised." },
    ],
    fitCheckIntro: 'If you nod "yes" to three or more of these, Florida hospitality has a place in your portfolio.',
    fitCheckQuestions: [
      "You want the highest cash yield among major CRE asset classes.",
      "You believe in Florida's durable tourism and business travel demand.",
      "You have hospitality operating expertise or a trusted third-party manager.",
      "You can underwrite insurance, PIP, and labor costs conservatively.",
      "You want pricing power that resets nightly rather than long-lease structures.",
    ],
    leadFormIntro: "Tell us your hospitality investment criteria and we will send you current Florida opportunities.",
  },
};

const base = hospitalityTopLevel.page;

const fullService: PropertyTypeEntry = {
  slug: "full-service-hotel",
  parentSlug: "hospitality",
  meta: { title: "Full-Service Hotels for Sale in Florida", description: "Buy full-service hotels in Florida with F&B, meeting space, and complete amenity packages.", keywords: "full service hotel florida, orlando hotel" },
  page: {
    ...base,
    displayName: "Full-Service Hotel",
    pluralDisplayName: "Full-Service Hotels",
    heroHeadline: "Full-Service Hotels in Florida",
    heroSubheadline: "F&B, meeting space, and complete amenity packages",
    heroBody: "Full-service hotels include restaurant and bar F&B, conference and meeting space, room service, bell staff, and complete amenity packages. Typically 200–500+ rooms in downtown, airport, or resort settings. Cap rates run 6.5% – 8.0% depending on brand flag and market.",
    quickStats: [
      { label: "Typical Deal Size", value: "$30M – $400M+", detail: "Institutional full-service" },
      { label: "Common Cap Rate", value: "6.50% – 8.00%", detail: "Brand and market dependent" },
      { label: "Room Count", value: "200 – 500+", detail: "Full-service scale" },
    ],
  },
};

const limitedService: PropertyTypeEntry = {
  slug: "limited-service-hotel",
  parentSlug: "hospitality",
  meta: { title: "Limited-Service Hotels for Sale in Florida", description: "Buy limited-service hotels in Florida. Holiday Inn Express, Hampton Inn, Fairfield, and Comfort Inn properties.", keywords: "limited service hotel florida, holiday inn express" },
  page: {
    ...base,
    displayName: "Limited-Service Hotel",
    pluralDisplayName: "Limited-Service Hotels",
    heroHeadline: "Limited-Service Hotels in Florida",
    heroSubheadline: "Brand-flagged efficiency hotels — the most active trading category",
    heroBody: "Limited-service hotels are the workhorse of hospitality investment — Holiday Inn Express, Hampton Inn, Fairfield, Comfort Inn, and dozens of similar brand flags. Typically 80–150 rooms with breakfast, pool, and basic amenities but no F&B or meeting space. The most active hotel trading category in Florida, especially popular with owner-operators and 1031 buyers.",
    quickStats: [
      { label: "Typical Deal Size", value: "$8M – $35M", detail: "Brand-flagged limited service" },
      { label: "Common Cap Rate", value: "7.50% – 9.00%", detail: "Yield-focused category" },
      { label: "Room Count", value: "80 – 150", detail: "Efficient limited-service" },
    ],
  },
};

const selectService: PropertyTypeEntry = {
  slug: "select-service-hotel",
  parentSlug: "hospitality",
  meta: { title: "Select-Service Hotels for Sale in Florida", description: "Buy select-service hotels in Florida. Courtyard, Hilton Garden Inn, Cambria, and Hyatt Place properties.", keywords: "select service hotel florida, courtyard marriott" },
  page: {
    ...base,
    displayName: "Select-Service Hotel",
    pluralDisplayName: "Select-Service Hotels",
    heroHeadline: "Select-Service Hotels in Florida",
    heroSubheadline: "Mid-tier brand flags combining limited-service efficiency with upscale amenities",
    heroBody: "Select-service hotels sit between limited-service and full-service — premium brand flags like Courtyard by Marriott, Hilton Garden Inn, Cambria, and Hyatt Place. They offer limited F&B, small meeting rooms, upscale finishes, and stronger ADR than limited-service peers. Cap rates run 7.0% – 8.5% for stabilized product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$12M – $50M", detail: "Mid-tier brand flags" },
      { label: "Common Cap Rate", value: "7.00% – 8.50%", detail: "Between limited and full-service" },
      { label: "Room Count", value: "100 – 200", detail: "Efficient upscale format" },
    ],
  },
};

const boutiqueHotel: PropertyTypeEntry = {
  slug: "boutique-hotel",
  parentSlug: "hospitality",
  meta: { title: "Boutique Hotels for Sale in Florida", description: "Buy boutique hotels in Florida. Independent and soft-branded hospitality with personality-driven design.", keywords: "boutique hotel florida, independent hotel" },
  page: {
    ...base,
    displayName: "Boutique Hotel",
    pluralDisplayName: "Boutique Hotels",
    heroHeadline: "Boutique Hotels in Florida",
    heroSubheadline: "Independent and soft-branded hospitality with personality-driven design",
    heroBody: "Boutique hotels are smaller (typically 30–150 rooms), design-forward, and either independent or soft-branded (Curio, Autograph Collection, Tribute Portfolio). They command ADR premiums over generic flags and appeal to leisure travelers, content creators, and premium business travel. Excellent fit for creative owner-operators.",
    quickStats: [
      { label: "Typical Deal Size", value: "$6M – $80M", detail: "Independent or soft-branded" },
      { label: "Common Cap Rate", value: "7.00% – 8.50%", detail: "ADR premium potential" },
      { label: "Room Count", value: "30 – 150", detail: "Intimate boutique scale" },
    ],
  },
};

const extendedStay: PropertyTypeEntry = {
  slug: "extended-stay-hotel",
  parentSlug: "hospitality",
  meta: { title: "Extended-Stay Hotels for Sale in Florida", description: "Buy extended-stay hotels in Florida. Residence Inn, Homewood Suites, TownePlace, and Hyatt House properties.", keywords: "extended stay hotel florida, residence inn" },
  page: {
    ...base,
    displayName: "Extended-Stay Hotel",
    pluralDisplayName: "Extended-Stay Hotels",
    heroHeadline: "Extended-Stay Hotels in Florida",
    heroSubheadline: "Residence Inn, Homewood, and TownePlace — durable business travel demand",
    heroBody: "Extended-stay hotels serve business travelers staying 5+ nights with full kitchens, living areas, and weekly housekeeping. Residence Inn, Homewood Suites, TownePlace, and Hyatt House dominate the category. Extended-stay was the most resilient hotel segment during COVID and continues to deliver steadier RevPAR than transient products.",
    quickStats: [
      { label: "Typical Deal Size", value: "$12M – $50M", detail: "Brand-flagged extended-stay" },
      { label: "Common Cap Rate", value: "7.25% – 8.50%", detail: "Durable demand profile" },
      { label: "ALOS", value: "5+ nights", detail: "Longer-duration stays than transient" },
    ],
  },
};

const resort: PropertyTypeEntry = {
  slug: "resort",
  parentSlug: "hospitality",
  meta: { title: "Resorts for Sale in Florida | Beachfront & Destination Resorts", description: "Buy beachfront and destination resorts in Florida. Trophy-class hospitality assets.", keywords: "resort for sale florida, beachfront hotel, trophy resort" },
  page: {
    ...base,
    displayName: "Resort",
    pluralDisplayName: "Resorts",
    heroHeadline: "Resorts for Sale in Florida",
    heroSubheadline: "Beachfront and destination resorts — trophy-class hospitality",
    heroBody: "Florida resorts — beachfront, theme-park-adjacent, and destination — are among the most trophy-class CRE assets in America. From 1500-room Orlando theme park resorts to 200-room beachfront boutiques in the Keys, the category spans enormous scale. Cap rates run 6.0% – 8.0% with the tightest pricing on irreplaceable beachfront product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$30M – $500M+", detail: "Trophy beachfront and destination" },
      { label: "Common Cap Rate", value: "6.00% – 8.00%", detail: "Tightest on irreplaceable locations" },
      { label: "Hold Horizon", value: "10–25+ years", detail: "Long-duration trophy asset" },
    ],
  },
};

const motel: PropertyTypeEntry = {
  slug: "motel",
  parentSlug: "hospitality",
  meta: { title: "Motels for Sale in Florida | Economy & Exterior-Corridor Hotels", description: "Buy motels in Florida. Economy and exterior-corridor hospitality for value or redevelopment plays.", keywords: "motel for sale florida, economy hotel" },
  page: {
    ...base,
    displayName: "Motel",
    pluralDisplayName: "Motels",
    heroHeadline: "Motels for Sale in Florida",
    heroSubheadline: "Economy exterior-corridor hotels — value and redevelopment plays",
    heroBody: "Older exterior-corridor motels have struggled against newer interior-corridor limited-service product, but represent value-add and redevelopment opportunities. Many older Florida motel sites sit on valuable commercial land that can be repositioned as multifamily, senior living, or retail pad development.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $8M", detail: "Single-motel acquisitions" },
      { label: "Common Cap Rate", value: "8.50% – 11.0%", detail: "Yield-focused category" },
      { label: "Strategy Mix", value: "Hold or redev", detail: "Often redevelopment plays" },
    ],
  },
};

const bedAndBreakfast: PropertyTypeEntry = {
  slug: "bed-and-breakfast",
  parentSlug: "hospitality",
  meta: { title: "Bed & Breakfasts and Inns for Sale in Florida", description: "Buy bed and breakfast properties and inns in Florida. Historic B&B, coastal inns, and boutique lodging.", keywords: "bed and breakfast florida, inn for sale" },
  page: {
    ...base,
    displayName: "Bed & Breakfast / Inn",
    pluralDisplayName: "Bed & Breakfasts",
    heroHeadline: "Bed & Breakfasts and Inns in Florida",
    heroSubheadline: "Historic B&B, coastal inns, and owner-operator boutique lodging",
    heroBody: "Bed & breakfasts and small inns are the smallest hospitality category — typically 5–20 rooms in historic or coastal settings, often owner-operated. These properties frequently sell as lifestyle businesses that combine hospitality income with owner residence, but institutional inn portfolios exist in historic St. Augustine, Amelia Island, and Key West.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $5M", detail: "Small owner-operator inns" },
      { label: "Room Count", value: "5 – 20 rooms", detail: "Intimate hospitality format" },
      { label: "Buyer Profile", value: "Owner-operator", detail: "Lifestyle business + income" },
    ],
  },
};

const casinoGaming: PropertyTypeEntry = {
  slug: "casino-gaming",
  parentSlug: "hospitality",
  meta: { title: "Casino & Gaming Properties in Florida", description: "Florida casino and gaming real estate. Seminole tribal gaming, pari-mutuel, and cardroom facilities.", keywords: "casino florida, gaming real estate" },
  page: {
    ...base,
    displayName: "Casino / Gaming",
    pluralDisplayName: "Casino & Gaming Properties",
    heroHeadline: "Casino & Gaming Properties in Florida",
    heroSubheadline: "Specialty gaming real estate — tribal, pari-mutuel, and cardrooms",
    heroBody: "Florida gaming real estate is a niche specialty category dominated by Seminole tribal gaming compacts and legacy pari-mutuel facilities (dog tracks, jai alai frontons) operating cardrooms. Full commercial casino gaming is limited in Florida, but sale-leaseback opportunities exist for specialty gaming operators.",
    quickStats: [
      { label: "Typical Deal Size", value: "$10M – $500M+", detail: "Gaming facility specialty" },
      { label: "Regulatory", value: "State + federal", detail: "Complex licensing regime" },
      { label: "Category Size", value: "Niche", detail: "Limited Florida inventory" },
    ],
  },
};

const hostel: PropertyTypeEntry = {
  slug: "hostel",
  parentSlug: "hospitality",
  meta: { title: "Hostels for Sale in Florida", description: "Buy hostel properties in Florida. Budget coastal and urban hostels for backpacker and budget traveler demand.", keywords: "hostel florida, backpacker lodging" },
  page: {
    ...base,
    displayName: "Hostel",
    pluralDisplayName: "Hostels",
    heroHeadline: "Hostels for Sale in Florida",
    heroSubheadline: "Budget coastal and urban hostels for international backpacker travelers",
    heroBody: "Hostels are a niche hospitality subcategory serving budget international travelers and backpackers. Primarily found in South Beach, Key West, and coastal beach towns, Florida hostels capture international visitor demand with per-bed lease structures and communal amenities.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $8M", detail: "Small urban/coastal hostels" },
      { label: "Pricing Model", value: "Per-bed", detail: "Shared room pricing" },
      { label: "Guest Profile", value: "Budget international", detail: "Backpacker and youth travel" },
    ],
  },
};

export const hospitalityRegistry: PropertyTypeEntry[] = [
  hospitalityTopLevel,
  fullService,
  limitedService,
  selectService,
  boutiqueHotel,
  extendedStay,
  resort,
  motel,
  bedAndBreakfast,
  casinoGaming,
  hostel,
];
