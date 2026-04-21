import type { PropertyTypeEntry } from "./types";

const selfStorageListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida self-storage listings.", floridaUrl: "https://www.crexi.com/properties/FL/Self-Storage", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Self-Storage", allUrl: "https://www.crexi.com/properties/Self-Storage" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of self-storage listings in Florida.", floridaUrl: "https://www.loopnet.com/search/self-storage-facility/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/self-storage-facility/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/self-storage-facility/usa/for-sale/" },
  { name: "SpareFoot Marketplace", tag: "Self-storage specialist", description: "Specialty storage facility marketplace.", floridaUrl: "https://www.sparefoot.com/", orlandoUrl: "https://www.sparefoot.com/", allUrl: "https://www.sparefoot.com/" },
];

const selfStorageTopLevel: PropertyTypeEntry = {
  slug: "self-storage",
  meta: {
    title: "Self Storage Facilities for Sale in Florida | Storage Investment Properties",
    description: "Buy self storage facilities in Florida. Drive-up, climate-controlled, boat/RV, and mixed self storage investments.",
    keywords: "self storage florida, storage facility for sale, climate controlled storage",
  },
  page: {
    displayName: "Self Storage",
    pluralDisplayName: "Self Storage Facilities",
    heroImage: {
      src: "/images/commercial-stock/warehouse/maxlife-warehouse-archive-boxes-shelf-folders-documents-data-1850170.webp",
      alt: "Self-storage facility interior with organized shelving",
    },
    heroEyebrow: "Self Storage Investment Opportunities",
    heroHeadline: "Self Storage Facilities for Sale in Florida",
    heroSubheadline: "One of the most resilient CRE asset classes — low CapEx, sticky customers, inflation-protected pricing",
    heroBody: "Self storage has been one of the best-performing CRE asset classes of the past 20 years. Low tenant improvement costs, sticky customers, month-to-month lease pricing power, and minimal operating complexity combine to deliver consistent NOI growth through every economic cycle. Florida's population growth and hurricane-driven storage demand make it one of the strongest markets in the country. Cap rates run 5.75% – 7.25% for institutional product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $50M+", detail: "Single-facility to portfolio" },
      { label: "Common Cap Rate", value: "5.75% – 7.25%", detail: "Modern product tightest" },
      { label: "Occupancy", value: "90%+", detail: "Stabilized self storage economic occupancy" },
    ],
    formats: [
      { name: "Drive-Up Self Storage", capRate: "6.50% – 7.50%", footprint: "60k – 100k SF NRSF", note: "Traditional single-story rows of exterior roll-up doors. Lower rent PSF, lower operating costs." },
      { name: "Climate-Controlled", capRate: "5.75% – 6.75%", footprint: "80k – 150k SF NRSF", note: "Modern multi-story climate-controlled buildings. Higher rent PSF and higher barriers to entry." },
      { name: "Boat & RV Storage", capRate: "7.00% – 8.25%", footprint: "2–10 acres with covered canopy", note: "Specialty storage for boats, RVs, and larger vehicles. Niche with strong Florida demand." },
      { name: "Mixed Format", capRate: "6.00% – 7.00%", footprint: "100k – 150k SF combined", note: "Combined drive-up and climate-controlled buildings on a single site." },
    ],
    prosConsIntro: "Self storage is the quiet workhorse of CRE — less glamorous than retail or multifamily, but often the most profitable on an unlevered basis.",
    pros: [
      { title: "Low Tenant Improvements", description: "Storage requires almost no TI when a customer moves in — unlike retail or office." },
      { title: "Monthly Pricing Power", description: "Month-to-month leases allow operators to push rent on existing customers continuously." },
      { title: "Sticky Customers", description: "Average tenant stays 12-18+ months; moving costs create psychological lock-in." },
      { title: "Low Operating Complexity", description: "Storage is the easiest major CRE asset class to operate — 1-2 employees per facility." },
      { title: "Hurricane Demand Pop", description: "Florida hurricane events create post-storm demand spikes as displaced households need temporary storage." },
      { title: "Recession Resilience", description: "Storage demand is counter-cyclical — people downsize or move during recessions, driving storage use." },
    ],
    cons: [
      { title: "Supply Pressure", description: "Some Florida submarkets have seen heavy new deliveries. Underwrite new supply within 3-mile ring." },
      { title: "Cap Rate Compression Ceiling", description: "Institutional storage has traded tight — less room for exit compression." },
      { title: "Operator Expertise Matters", description: "Great storage operators significantly outperform average operators on NOI growth." },
      { title: "Technology Adoption", description: "Modern storage requires digital customer acquisition, dynamic pricing, and automated access — a real investment." },
    ],
    personas: [
      { name: "Institutional Allocators", tag: "Core / Core-Plus", description: "Public REITs like Public Storage, Extra Space, CubeSmart are the largest institutional buyers.", fit: "Institutional self storage is a top-5 allocation for CRE funds." },
      { name: "Owner-Operators", tag: "Platform Builders", description: "Regional owner-operators building 5-20 facility portfolios across Florida submarkets.", fit: "Hands-on operational excellence is the moat." },
      { name: "Value-Add Sponsors", tag: "Reposition Plays", description: "Sponsors buying older drive-up facilities and adding climate-controlled conversions or expansions.", fit: "Significant NOI growth available through physical and operational upgrades." },
    ],
    underwritingMetrics: [
      { label: "Rent PSF", detail: "$0.85 – $1.85 per SF per month depending on format and submarket" },
      { label: "Economic Occupancy", detail: "85–92% stabilized for institutional product" },
      { label: "Operating Expense Ratio", detail: "28–38% of EGI for professionally operated facilities" },
      { label: "Supply Within 3 Miles", detail: "Track new deliveries and SF per capita" },
      { label: "Trade Area Demographics", detail: "Household income and density drive storage demand" },
      { label: "Rent Growth", detail: "Existing customer rate push (ECRP) is the biggest NOI lever" },
    ],
    listingSites: selfStorageListings,
    listingsIntro: "Want to see public self-storage listings? These marketplaces cover Florida storage inventory.",
    listingsFootnote: "Institutional self-storage product typically trades directly between REITs and private operator platforms.",
    faqs: [
      { q: "Why is self storage so popular with institutional investors?", a: "Self storage combines low tenant improvement costs, low operating complexity, sticky customers, monthly pricing power, and recession resilience. It has delivered the best risk-adjusted returns of any major CRE asset class over the past 20 years." },
      { q: "Is Florida self storage oversupplied?", a: "Select submarkets (parts of Tampa, Jacksonville, and Orlando suburbs) have seen heavy new deliveries and softer rent growth. Always run a 3-mile ring new supply analysis before closing. Most of Florida remains undersupplied versus demographic demand." },
      { q: "Can I 1031 exchange into self storage?", a: "Yes. Self storage qualifies as like-kind replacement property for 1031 exchanges. Many exchange buyers find storage appealing because of clean operations and predictable income." },
    ],
    fitCheckQuestions: [
      "You want the most consistent CRE NOI growth track record of the past 20 years.",
      "You value low tenant improvement and operating complexity.",
      "You're comfortable with active pricing management (ECRP strategies).",
      "You want exposure to Florida population growth and hurricane-driven demand.",
      "You have 1031 replacement needs with fast-close execution.",
    ],
    leadFormIntro: "Tell us about your self storage investment criteria and we will send you current Florida opportunities.",
  },
};

const base = selfStorageTopLevel.page;

const driveUp: PropertyTypeEntry = {
  slug: "drive-up-storage",
  parentSlug: "self-storage",
  meta: { title: "Drive-Up Self Storage for Sale in Florida", description: "Buy drive-up self storage facilities in Florida. Traditional single-story exterior-access storage.", keywords: "drive up self storage florida, traditional storage facility" },
  page: { ...base, displayName: "Drive-Up Self Storage", pluralDisplayName: "Drive-Up Storage Facilities", heroHeadline: "Drive-Up Self Storage in Florida", heroSubheadline: "Traditional single-story exterior-access storage — lower cost, simpler operations", heroBody: "Drive-up self storage is the traditional format: single-story rows of exterior roll-up doors accessed directly by car. Lower rent PSF than climate-controlled but much lower construction and operating cost. Ideal for suburban and rural Florida submarkets where land is cheaper and climate control isn't essential." },
};

const climateControlled: PropertyTypeEntry = {
  slug: "climate-controlled-storage",
  parentSlug: "self-storage",
  meta: { title: "Climate-Controlled Self Storage for Sale in Florida", description: "Buy climate-controlled self storage facilities in Florida. Modern multi-story enclosed storage.", keywords: "climate controlled storage florida, modern storage facility" },
  page: { ...base, displayName: "Climate-Controlled Storage", pluralDisplayName: "Climate-Controlled Storage Facilities", heroHeadline: "Climate-Controlled Self Storage in Florida", heroSubheadline: "Modern multi-story enclosed storage — premium rents in dense submarkets", heroBody: "Climate-controlled self storage is the modern institutional format: multi-story enclosed buildings with temperature and humidity control. Premium rents (often $1.50-$2.00+ PSF) and higher construction costs. Most institutional new development is climate-controlled product in dense suburban submarkets." },
};

const boatRvStorage: PropertyTypeEntry = {
  slug: "boat-rv-storage",
  parentSlug: "self-storage",
  meta: { title: "Boat & RV Storage for Sale in Florida", description: "Buy boat and RV storage facilities in Florida. Specialty vehicle storage for boaters and RV owners.", keywords: "boat storage florida, rv storage for sale" },
  page: { ...base, displayName: "Boat & RV Storage", pluralDisplayName: "Boat & RV Storage Facilities", heroHeadline: "Boat & RV Storage in Florida", heroSubheadline: "Specialty vehicle storage for Florida's massive boating and RV communities", heroBody: "Florida has more registered boats and RVs per capita than almost any state in America. Boat and RV storage facilities — typically covered canopy structures on 2-10+ acre sites — serve this massive demand. Category has consolidated around specialty operators and institutional-quality product trades at 7.0% – 8.25% cap rates." },
};

const mixedStorage: PropertyTypeEntry = {
  slug: "mixed-self-storage",
  parentSlug: "self-storage",
  meta: { title: "Mixed-Format Self Storage for Sale in Florida", description: "Buy mixed-format self storage facilities in Florida. Combined drive-up and climate-controlled storage.", keywords: "mixed storage facility florida" },
  page: { ...base, displayName: "Mixed Self Storage", pluralDisplayName: "Mixed Self Storage Facilities", heroHeadline: "Mixed-Format Self Storage in Florida", heroSubheadline: "Combined drive-up and climate-controlled storage on a single site", heroBody: "Mixed-format self storage combines traditional drive-up rows with climate-controlled multi-story buildings on the same site. This format allows operators to serve both price-sensitive and premium customer segments, and is common in value-add plays where an existing drive-up facility adds a climate-controlled expansion." },
};

export const selfStorageRegistry: PropertyTypeEntry[] = [
  selfStorageTopLevel,
  driveUp,
  climateControlled,
  boatRvStorage,
  mixedStorage,
];
