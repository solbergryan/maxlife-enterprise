import type { PropertyTypeEntry } from "./types";

const landListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida land listings.", floridaUrl: "https://www.crexi.com/properties/FL/Land", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Land", allUrl: "https://www.crexi.com/properties/Land" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of land listings in Florida.", floridaUrl: "https://www.loopnet.com/search/land/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/land/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/land/usa/for-sale/" },
  { name: "LandWatch", tag: "Land specialist marketplace", description: "Specialty rural and recreational land listings.", floridaUrl: "https://www.landwatch.com/florida-land-for-sale", orlandoUrl: "https://www.landwatch.com/florida-land-for-sale", allUrl: "https://www.landwatch.com/" },
];

const landPersonas = [
  { name: "Developers", tag: "Builders", description: "Merchant and non-merchant builders needing land for their next project.", fit: "Entitled or ready-to-entitle parcels with clear utility access." },
  { name: "Land Bankers", tag: "Long Hold", description: "Patient capital buying raw land in the path of growth for 5–15 year holds.", fit: "Unentitled parcels near future transportation or population expansion." },
  { name: "Agricultural Owners", tag: "Working Land", description: "Farmers and ranchers buying working agricultural land for ongoing operations.", fit: "Groves, row crop, pasture, and timber lands with existing revenue streams." },
  { name: "1031 Exchange Buyers", tag: "Deadline Driven", description: "Exchange buyers looking for land as a replacement asset.", fit: "Land qualifies as like-kind property; straightforward close execution." },
];

const landTopLevel: PropertyTypeEntry = {
  slug: "land",
  meta: {
    title: "Land for Sale in Florida | Commercial, Development, & Agricultural Parcels",
    description: "Buy land in Florida. Commercial, residential, industrial, agricultural, and development parcels across Central Florida.",
    keywords: "land for sale florida, development parcel, commercial land, agricultural land florida",
  },
  page: {
    displayName: "Land",
    pluralDisplayName: "Land Parcels",
    heroEyebrow: "Land Investment Opportunities",
    heroHeadline: "Land for Sale in Florida",
    heroSubheadline: "Commercial, residential, industrial, and agricultural parcels in the fastest-growing state in America",
    heroBody: "Land is the ultimate optionality asset in Florida real estate. Florida's population is growing at roughly 1,000 net new residents per day, putting constant pressure on developable land across every major MSA. Whether you want a pad-ready commercial parcel at a signalized corner, an unentitled path-of-growth land bank for a 10-year hold, or a working orange grove in Central Florida, land offers the clearest call on Florida's population tailwind. Price per acre varies enormously — from $8,000 for raw rural ranch land to $3M+ for infill commercial corners.",
    quickStats: [
      { label: "Typical Deal Size", value: "$250K – $50M+", detail: "Single pads to master-planned acreage" },
      { label: "Florida Growth", value: "1,000/day", detail: "Net new residents driving land demand" },
      { label: "Price Range", value: "$8K – $3M+/ac", detail: "Rural ranch to infill commercial" },
    ],
    formats: [
      { name: "Commercial Land (Pad-Ready)", capRate: "N/A (land)", footprint: "0.5 – 5 acres", note: "Entitled corner parcels ready for retail, QSR, C-store, or office pad development." },
      { name: "Residential Development", capRate: "N/A (land)", footprint: "5 – 500+ acres", note: "Subdivision and master-planned community parcels. Highest dollar volume." },
      { name: "Industrial / Logistics Land", capRate: "N/A (land)", footprint: "5 – 100+ acres", note: "Near interstate and rail. Critical for distribution tenant expansion." },
      { name: "Agricultural / Groves", capRate: "2–4% cash", footprint: "20 – 2,000+ acres", note: "Working row crop, citrus groves, cattle ranches. Income from operations + appreciation." },
      { name: "Raw / Unentitled", capRate: "N/A (land)", footprint: "10 – 10,000 acres", note: "Cheapest per acre. Land bank for patient 10–20 year holds." },
      { name: "Waterfront / Coastal", capRate: "N/A (land)", footprint: "0.25 – 50 acres", note: "Premium coastal Florida parcels. Highest per-acre pricing statewide." },
    ],
    whyFloridaTitle: (
      <>
        Why Florida Land Is the <span className="text-gold">#1 Call on Population Growth</span>
      </>
    ),
    whyFloridaReasons: [
      { title: "365k+ Net New Residents", description: "Every one of them needs housing, retail, and services — putting pressure on developable land." },
      { title: "I-4 Corridor Growth", description: "Tampa-to-Orlando has been the #1 housing growth corridor in America for the past decade." },
      { title: "Infrastructure Spending", description: "Florida DOT and county transportation projects continuously create new land value along extended road networks." },
      { title: "Tax Advantages", description: "Agricultural land benefits from Florida's greenbelt exemption — meaningful property tax savings while held." },
      { title: "Limited Buildable Supply", description: "Wetland regulations, coastal restrictions, and conservation areas limit what's actually developable." },
      { title: "1031 Exchange Product", description: "Land qualifies as like-kind replacement for exchange buyers without lease complexity." },
    ],
    prosConsIntro: "Land is the most direct call on Florida's population growth. But it's also the asset class with the longest hold and highest carry cost.",
    pros: [
      { title: "Population Growth Tailwind", description: "Florida is the #1 state for net migration. Every new resident creates land demand." },
      { title: "Agricultural Tax Benefits", description: "Greenbelt exemption meaningfully reduces carry costs on working ag land." },
      { title: "Optionality Value", description: "Land can be held, leased for short-term use, sold outright, or ground-leased — maximum flexibility." },
      { title: "1031 Qualified", description: "Clean like-kind exchange product with straightforward close execution." },
      { title: "Inflation Hedge", description: "Land appreciates at or above inflation rates in growth markets over long horizons." },
    ],
    cons: [
      { title: "No Current Yield", description: "Most land produces no income during holding period — property taxes and carry costs drain cash." },
      { title: "Long Hold Periods", description: "Land investments often take 5–15+ years to realize full value. Not for impatient capital." },
      { title: "Entitlement Risk", description: "Zoning, wetland permits, and entitlement approvals are slow and uncertain — budget timeline and cost." },
      { title: "Lender Hesitancy", description: "Most lenders require meaningful equity on land loans (40–50%+) with shorter terms." },
      { title: "Geographic Risk", description: "Wrong side of a growth corridor can mean dead capital for decades." },
    ],
    personas: landPersonas,
    underwritingMetrics: [
      { label: "Price per Acre", detail: "$8,000 (rural) to $3M+ (infill commercial)" },
      { label: "Utilities", detail: "Water, sewer, power availability — biggest value driver" },
      { label: "Entitlement Status", detail: "Raw, unentitled, entitled, pad-ready — each tier has material value spread" },
      { label: "Wetland / Environmental", detail: "Florida wetland and endangered species regulation limits developable area" },
      { label: "Access", detail: "Direct frontage, signalized access, and traffic counts drive commercial land value" },
      { label: "Future Land Use", detail: "Comp plan and zoning designation determine highest-and-best use" },
    ],
    listingSites: landListings,
    listingsIntro: "Want to see what's publicly listed? These marketplaces cover Florida land.",
    listingsFootnote: "The best land deals — especially in path-of-growth corridors — rarely hit public marketplaces.",
    faqs: [
      { q: "Is Florida land a good investment right now?", a: "Yes — land has been one of the best-performing Florida CRE categories of the past decade, driven by record population inflows. But land is a patient asset with no current yield. Only invest if you can hold 5–15+ years and absorb carry costs." },
      { q: "What's the difference between raw land and entitled land?", a: "Raw land has no development approvals — just the underlying dirt and whatever use the current zoning allows. Entitled land has site plan approval, utility commitments, and development permits in place, which can add 2–5x to value per acre depending on the use allowed." },
      { q: "Can I 1031 exchange into land?", a: "Yes. Land is like-kind property for any real estate 1031 exchange. Many exchange buyers use raw land as a holding strategy while they search for a long-term replacement asset." },
      { q: "What about agricultural greenbelt?", a: "Florida's greenbelt law provides significant property tax savings on land used for bona fide agricultural purposes (citrus, row crop, cattle, timber). Maintaining the classification is critical to keeping carry costs low on held land." },
    ],
    fitCheckIntro: 'If you nod "yes" to three or more of these, Florida land belongs in your portfolio.',
    fitCheckQuestions: [
      "You want a direct call on Florida's population growth and inflation.",
      "You can tolerate 5–15+ year hold periods without current yield.",
      "You understand zoning, entitlements, and wetland regulations.",
      "You want 1031 replacement optionality with minimal lease complexity.",
      "You have capital to cover carry costs through a long hold.",
    ],
    leadFormIntro: "Tell us what kind of Florida land you're looking for and we will send you matching opportunities.",
  },
};

const base = landTopLevel.page;

const commercialLand: PropertyTypeEntry = {
  slug: "commercial-land",
  parentSlug: "land",
  meta: { title: "Commercial Land for Sale in Florida | Pad-Ready Development Parcels", description: "Buy pad-ready commercial land in Florida for retail, QSR, C-store, and office development.", keywords: "commercial land florida, pad site land, retail pad land" },
  page: {
    ...base,
    displayName: "Commercial Land",
    pluralDisplayName: "Commercial Land",
    heroHeadline: "Commercial Land for Sale in Florida",
    heroSubheadline: "Pad-ready and entitled commercial parcels for retail, QSR, and office development",
    heroBody: "Commercial land parcels — 0.5 to 5 acres — at signalized corners and along high-traffic retail corridors are among the most valuable land categories in Florida. Entitled commercial pads command premium pricing from QSR, C-store, drugstore, and retail developers. Pad-ready commercial land in Orlando's strongest submarkets trades for $1M – $3M+ per acre.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $8M", detail: "Pad-ready commercial parcels" },
      { label: "Price per Acre", value: "$400K – $3M+", detail: "Infill commercial corners" },
      { label: "Site Size", value: "0.5 – 5 acres", detail: "Pad and small commercial sites" },
    ],
  },
};

const residentialLand: PropertyTypeEntry = {
  slug: "residential-land",
  parentSlug: "land",
  meta: { title: "Residential Development Land for Sale in Florida", description: "Buy residential development parcels in Florida. Subdivision and master-planned community land.", keywords: "residential land florida, subdivision land, development parcel" },
  page: {
    ...base,
    displayName: "Residential Land",
    pluralDisplayName: "Residential Development Parcels",
    heroHeadline: "Residential Development Land in Florida",
    heroSubheadline: "Subdivision and master-planned community parcels",
    heroBody: "Residential development land — the feedstock for Florida's housing growth — covers everything from small 5-acre infill subdivision sites to 500+ acre master-planned community parcels. Florida homebuilders are the largest land buyers in the state, paying premium prices for entitled, utility-ready sites in strong school districts.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $50M+", detail: "Small infill to master-planned" },
      { label: "Site Size", value: "5 – 500+ acres", detail: "Subdivision development scale" },
      { label: "Buyer Profile", value: "Homebuilders", detail: "Merchant and non-merchant builders" },
    ],
  },
};

const industrialLand: PropertyTypeEntry = {
  slug: "industrial-land",
  parentSlug: "land",
  meta: { title: "Industrial Land for Sale in Florida | Warehouse Development Parcels", description: "Buy industrial land in Florida. Development parcels for warehouse, distribution, and logistics construction.", keywords: "industrial land florida, warehouse land, distribution land" },
  page: {
    ...base,
    displayName: "Industrial Land",
    pluralDisplayName: "Industrial Development Parcels",
    heroHeadline: "Industrial Land for Sale in Florida",
    heroSubheadline: "Development parcels for warehouse, distribution, and logistics construction",
    heroBody: "Industrial land — 5 to 100+ acres near interstate interchanges and rail infrastructure — is critical feedstock for Florida's booming distribution and logistics economy. With institutional industrial developers chasing deals, entitled industrial land near I-4, I-75, and I-95 commands strong pricing.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $30M", detail: "Single-building to park scale" },
      { label: "Price per Acre", value: "$150K – $600K", detail: "Dependent on access and utilities" },
      { label: "Site Size", value: "5 – 100+ acres", detail: "Distribution development scale" },
    ],
  },
};

const retailPadLand: PropertyTypeEntry = {
  slug: "retail-pad-land",
  parentSlug: "land",
  meta: { title: "Retail Pad Sites & Outparcels for Sale in Florida", description: "Buy retail pad site land and outparcels in Florida. Corner locations for QSR, C-store, and drugstore development.", keywords: "retail pad land florida, outparcel for sale" },
  page: {
    ...base,
    displayName: "Retail Pad / Outparcel Land",
    pluralDisplayName: "Retail Pad Sites",
    heroHeadline: "Retail Pad Sites & Outparcels in Florida",
    heroSubheadline: "Corner locations for QSR, C-store, and drugstore development",
    heroBody: "Retail pad sites — typically 0.75 to 1.5 acres at signalized corners — are among the most valuable land parcels in Florida. QSR, coffee, C-store, drugstore, and bank developers compete fiercely for well-located pads with ingress/egress, parking, and signage visibility.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $3M", detail: "Single pad parcels" },
      { label: "Site Size", value: "0.75 – 1.5 acres", detail: "Drive-thru pad scale" },
      { label: "Buyer Profile", value: "QSR / C-store devs", detail: "National brand expansion" },
    ],
  },
};

const mixedUseDevelopmentLand: PropertyTypeEntry = {
  slug: "mixed-use-development-land",
  parentSlug: "land",
  meta: { title: "Mixed-Use Development Land for Sale in Florida", description: "Buy mixed-use development parcels in Florida. Urban infill sites for combined residential, retail, and office development.", keywords: "mixed use land florida, urban infill land" },
  page: {
    ...base,
    displayName: "Mixed-Use Development Land",
    pluralDisplayName: "Mixed-Use Development Parcels",
    heroHeadline: "Mixed-Use Development Land in Florida",
    heroSubheadline: "Urban infill sites for residential, retail, and office development",
    heroBody: "Mixed-use development land supports walkable urban infill projects combining multifamily, retail, and office. These parcels trade at premium pricing in growth submarkets like Lake Nona, Winter Park, Downtown Tampa, and St. Pete where municipalities prioritize mixed-use zoning approvals.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $50M", detail: "Urban infill development" },
      { label: "Site Size", value: "2 – 30 acres", detail: "Mixed-use development scale" },
      { label: "Use Mix", value: "Multifamily + retail", detail: "Vertical or horizontal mix" },
    ],
  },
};

const agriculturalLand: PropertyTypeEntry = {
  slug: "agricultural-land",
  parentSlug: "land",
  meta: { title: "Agricultural Land for Sale in Florida | Groves, Row Crops & Farms", description: "Buy agricultural land in Florida. Orange groves, row crops, farms, and working agricultural operations.", keywords: "agricultural land florida, orange grove, farm for sale" },
  page: {
    ...base,
    displayName: "Agricultural Land",
    pluralDisplayName: "Agricultural Land",
    heroHeadline: "Agricultural Land for Sale in Florida",
    heroSubheadline: "Working farms, orange groves, row crops, and pasture",
    heroBody: "Florida agricultural land includes iconic Central Florida citrus groves, specialty row crop farms, cattle ranches, sod farms, and nursery operations. Agricultural use provides significant greenbelt property tax savings while generating current income and long-term optionality for future development or land banking.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $30M+", detail: "Working agricultural operations" },
      { label: "Price per Acre", value: "$4K – $40K", detail: "Depending on use and location" },
      { label: "Tax Benefit", value: "Greenbelt", detail: "Significant property tax savings" },
    ],
  },
};

const ranchFarm: PropertyTypeEntry = {
  slug: "ranch-farm",
  parentSlug: "land",
  meta: { title: "Florida Ranches & Farms for Sale", description: "Buy ranches and working farms in Florida. Cattle ranches, horse farms, and agricultural estates.", keywords: "ranch florida, farm for sale, cattle ranch" },
  page: {
    ...base,
    displayName: "Ranch / Farm",
    pluralDisplayName: "Ranches & Farms",
    heroHeadline: "Florida Ranches & Farms for Sale",
    heroSubheadline: "Cattle ranches, horse farms, and working agricultural estates",
    heroBody: "Florida ranch and farm properties — from 50-acre hobby horse farms to 5,000+ acre working cattle operations — combine lifestyle ownership with agricultural income and long-term appreciation. Central and North Florida host the majority of the state's working ranch inventory.",
    quickStats: [
      { label: "Typical Deal Size", value: "$400K – $20M+", detail: "Small farms to large ranches" },
      { label: "Site Size", value: "20 – 5,000+ acres", detail: "Hobby to commercial scale" },
      { label: "Primary Use", value: "Livestock / equine", detail: "Cattle, horse, specialty operations" },
    ],
  },
};

const timberland: PropertyTypeEntry = {
  slug: "timberland",
  parentSlug: "land",
  meta: { title: "Timberland for Sale in Florida | Pine Forestry & Managed Timber", description: "Buy timberland in Florida. Managed pine forests and timber investment properties in North Florida.", keywords: "timberland florida, pine forest, timber investment" },
  page: {
    ...base,
    displayName: "Timberland",
    pluralDisplayName: "Timberland",
    heroHeadline: "Timberland for Sale in Florida",
    heroSubheadline: "Managed pine forestry and long-hold timber investments",
    heroBody: "North Florida is home to significant timber industry infrastructure — planted pine forests managed for pulp and lumber production. Timberland offers low current yield but long-term biological growth appreciation, significant greenbelt tax benefits, and optionality for higher-use conversion over time.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $50M+", detail: "Small parcels to institutional" },
      { label: "Price per Acre", value: "$1,500 – $4,500", detail: "Working pine timber" },
      { label: "Hold Period", value: "15–30+ years", detail: "Biological growth cycle" },
    ],
  },
};

const huntingRec: PropertyTypeEntry = {
  slug: "hunting-recreational",
  parentSlug: "land",
  meta: { title: "Hunting & Recreational Land for Sale in Florida", description: "Buy hunting and recreational land in Florida. Deer hunting, wildlife, and recreational property.", keywords: "hunting land florida, recreational land" },
  page: {
    ...base,
    displayName: "Hunting / Recreational Land",
    pluralDisplayName: "Hunting & Recreational Land",
    heroHeadline: "Hunting & Recreational Land in Florida",
    heroSubheadline: "Deer hunting, wildlife, and recreational property",
    heroBody: "Florida hunting and recreational land supports deer, hog, turkey, and waterfowl hunting along with fishing, camping, and other outdoor activities. North and Central Florida offer the bulk of the state's hunting land inventory with meaningful wildlife populations and established hunting leases.",
    quickStats: [
      { label: "Typical Deal Size", value: "$200K – $5M", detail: "Hunting and recreational parcels" },
      { label: "Price per Acre", value: "$2,000 – $8,000", detail: "Rural recreational pricing" },
      { label: "Site Size", value: "40 – 1,000+ acres", detail: "Hunting-scale parcels" },
    ],
  },
};

const waterfrontCoastal: PropertyTypeEntry = {
  slug: "waterfront-coastal",
  parentSlug: "land",
  meta: { title: "Waterfront & Coastal Land for Sale in Florida", description: "Buy waterfront and coastal land in Florida. Beachfront, lakefront, and riverfront parcels.", keywords: "waterfront land florida, beachfront land, lake land" },
  page: {
    ...base,
    displayName: "Waterfront / Coastal Land",
    pluralDisplayName: "Waterfront Parcels",
    heroHeadline: "Waterfront & Coastal Land in Florida",
    heroSubheadline: "Beachfront, lakefront, and riverfront parcels — Florida's most valuable dirt",
    heroBody: "Waterfront land in Florida commands the highest per-acre prices in the state. Gulf and Atlantic beachfront parcels, intracoastal sites, lakefront estates on Central Florida chains of lakes, and river-frontage property combine scarcity, lifestyle appeal, and development upside. Coastal regulations add complexity but also create barriers to entry.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $30M+", detail: "Premium waterfront parcels" },
      { label: "Price per Acre", value: "$50K – $5M+", detail: "Highest in Florida" },
      { label: "Regulatory", value: "Coastal construction", detail: "CCCL, wetlands, setbacks" },
    ],
  },
};

const entitledLand: PropertyTypeEntry = {
  slug: "entitled-land",
  parentSlug: "land",
  meta: { title: "Entitled Land for Sale in Florida | Pre-Approved Development Sites", description: "Buy entitled development land in Florida. Fully-approved sites ready for vertical construction.", keywords: "entitled land florida, approved development site" },
  page: {
    ...base,
    displayName: "Entitled Land",
    pluralDisplayName: "Entitled Development Sites",
    heroHeadline: "Entitled Land for Sale in Florida",
    heroSubheadline: "Fully-approved development sites ready for vertical construction",
    heroBody: "Entitled land has completed the zoning, site plan, utility, environmental, and permitting processes — it's ready to build. Entitled parcels command 2–5x per-acre premiums over raw land because they eliminate the biggest risks in land development: entitlement timing and uncertainty.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $40M+", detail: "Ready-to-build parcels" },
      { label: "Premium over Raw", value: "2–5x per acre", detail: "Risk elimination priced in" },
      { label: "Hold Period", value: "0–2 years", detail: "Ready for near-term development" },
    ],
  },
};

const rawUnentitled: PropertyTypeEntry = {
  slug: "raw-unentitled",
  parentSlug: "land",
  meta: { title: "Raw & Unentitled Land for Sale in Florida", description: "Buy raw unentitled land in Florida. Lowest-basis land banking for long-hold investors.", keywords: "raw land florida, unentitled land, land banking" },
  page: {
    ...base,
    displayName: "Raw / Unentitled Land",
    pluralDisplayName: "Raw Land",
    heroHeadline: "Raw & Unentitled Land in Florida",
    heroSubheadline: "Lowest-basis land banking for patient long-hold investors",
    heroBody: "Raw unentitled land is the cheapest land category per acre in Florida but also the longest-hold and highest-risk. Buyers are betting on future entitlement approvals, utility extensions, and path-of-growth expansion. Patient capital with 10–20+ year hold horizons can accumulate significant unrealized appreciation on raw land positions.",
    quickStats: [
      { label: "Typical Deal Size", value: "$200K – $20M+", detail: "Small parcels to large tracts" },
      { label: "Price per Acre", value: "$3K – $40K", detail: "Rural and path-of-growth" },
      { label: "Hold Period", value: "10–20+ years", detail: "Patient capital required" },
    ],
  },
};

export const landRegistry: PropertyTypeEntry[] = [
  landTopLevel,
  commercialLand,
  residentialLand,
  industrialLand,
  retailPadLand,
  mixedUseDevelopmentLand,
  agriculturalLand,
  ranchFarm,
  timberland,
  huntingRec,
  waterfrontCoastal,
  entitledLand,
  rawUnentitled,
];
