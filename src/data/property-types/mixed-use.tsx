import type { PropertyTypeEntry } from "./types";

const mixedUseListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida mixed-use listings.", floridaUrl: "https://www.crexi.com/properties/FL/Mixed-Use", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Mixed-Use", allUrl: "https://www.crexi.com/properties/Mixed-Use" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of mixed-use listings in Florida.", floridaUrl: "https://www.loopnet.com/search/mixed-use-property/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/mixed-use-property/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/mixed-use-property/usa/for-sale/" },
  { name: "CBRE Deal Flow", tag: "Institutional broker platform", description: "Institutional mixed-use opportunities across Florida.", floridaUrl: "https://www.cbre.com/properties", orlandoUrl: "https://www.cbre.com/properties", allUrl: "https://www.cbre.com/properties" },
];

const mixedUseTopLevel: PropertyTypeEntry = {
  slug: "mixed-use",
  meta: {
    title: "Mixed-Use Properties for Sale in Florida | Retail + Residential + Office",
    description: "Buy mixed-use properties in Florida. Retail, residential, and office mixed-use investments in urban Florida.",
    keywords: "mixed use florida, vertical mixed use, retail over residential",
  },
  page: {
    displayName: "Mixed-Use",
    pluralDisplayName: "Mixed-Use Properties",
    heroEyebrow: "Mixed-Use Investment Opportunities",
    heroHeadline: "Mixed-Use Properties for Sale in Florida",
    heroSubheadline: "Retail, residential, and office — combined cash flow from walkable urban formats",
    heroBody: "Mixed-use properties combine two or more commercial uses (typically retail + residential, or retail + office) in a single building or contiguous development. Urban infill growth in Florida markets like Lake Nona, Winter Park, Downtown St. Pete, and Brickell has driven mixed-use from niche to institutional core. Cap rates vary based on income mix but typically blend to 5.75% – 7.0% for stabilized urban infill product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $150M+", detail: "Infill to institutional mixed-use" },
      { label: "Common Cap Rate", value: "5.75% – 7.00%", detail: "Blended by income mix" },
      { label: "Income Diversification", value: "2–3 uses", detail: "Retail, residential, office" },
    ],
    formats: [
      { name: "Retail + Residential", capRate: "5.75% – 6.75%", footprint: "Ground retail + apts above", note: "Most common mixed-use format. Ground floor retail with 3–8 floors of apartments above." },
      { name: "Retail + Office", capRate: "6.50% – 7.75%", footprint: "Ground retail + office above", note: "Classic main-street format. Less institutional than retail + residential." },
      { name: "Office + Residential", capRate: "6.00% – 7.25%", footprint: "Office below / apts above", note: "Larger-scale downtown format combining professional and residential uses." },
      { name: "Live/Work", capRate: "6.25% – 7.50%", footprint: "Townhouse live/work units", note: "Ground-floor commercial with owner/tenant residence above. Popular for small business." },
      { name: "Vertical Mixed-Use", capRate: "5.50% – 6.75%", footprint: "Multi-story 3+ use stack", note: "Full vertical integration — retail, office, residential, sometimes hotel. Institutional core." },
    ],
    prosConsIntro: "Mixed-use combines the strengths and weaknesses of its underlying uses. The best examples deliver diversified income and premium pricing.",
    pros: [
      { title: "Income Diversification", description: "Cash flow from two or three different uses smooths NOI across cycles." },
      { title: "Walkable Premium Pricing", description: "Well-located mixed-use commands premium rents and pricing over single-use." },
      { title: "Population Tailwind", description: "Florida's walkable infill growth supports mixed-use demand across all use categories." },
      { title: "Tenant Synergy", description: "Residential tenants support ground-floor retail; retail amenities support apartment rents." },
      { title: "Redevelopment Upside", description: "Well-located single-use buildings can be converted to mixed-use for significant value creation." },
    ],
    cons: [
      { title: "Operational Complexity", description: "Managing multiple uses requires dual expertise — multifamily operations + retail leasing." },
      { title: "Financing Complexity", description: "Lenders may require separate underwriting for each income component, slowing close." },
      { title: "Tenant Mix Execution", description: "Getting ground-floor retail tenancy right is critical — bad retail drags down apartment value." },
      { title: "Municipal Approvals", description: "Mixed-use zoning is complex and takes longer to entitle than single-use development." },
    ],
    personas: [
      { name: "Institutional Allocators", tag: "Core / Core-Plus", description: "Funds targeting walkable infill growth with diversified cash flow.", fit: "Vertical mixed-use in urban Florida fits core fund mandates." },
      { name: "Value-Add Sponsors", tag: "Conversion Plays", description: "Sponsors converting single-use buildings to mixed-use for premium repositioning.", fit: "Older downtown buildings with ground-floor retail potential." },
      { name: "Private Family Offices", tag: "Long Duration", description: "Multi-generational wealth owning trophy walkable assets in Florida's strongest submarkets.", fit: "Lifestyle centers and downtown infill." },
    ],
    underwritingMetrics: [
      { label: "Income Mix", detail: "Underwrite each component separately before blending" },
      { label: "Retail Anchor Strength", detail: "Ground-floor retail tenancy drives the entire project's pricing" },
      { label: "Parking Ratio", detail: "Critical for mixed-use — both residential and retail need separate allocations" },
      { label: "Zoning Compliance", detail: "Mixed-use entitlement often has specific use and ratio requirements" },
      { label: "Operating Expense Allocation", detail: "CAM and expense allocation between uses must be clearly defined" },
    ],
    listingSites: mixedUseListings,
    listingsIntro: "Want to see public mixed-use listings? These marketplaces aggregate Florida mixed-use inventory.",
    faqs: [
      { q: "Is mixed-use financing harder than single-use?", a: "Yes — lenders typically underwrite each income stream separately and may require specialty underwriting for the combined structure. Expect more scrutiny on cap rate blending, tenant mix, and operating expense allocation than you'd see on pure apartments or retail." },
      { q: "What's vertical mixed-use?", a: "Vertical mixed-use stacks multiple uses in a single building — typically ground-floor retail, podium parking, and residential above. May also include office or hotel floors in larger developments. Common in Florida's downtown redevelopment projects." },
    ],
    fitCheckQuestions: [
      "You want cash flow diversification across multiple CRE use categories.",
      "You're comfortable managing both residential and commercial tenancy.",
      "You believe in Florida's walkable urban infill growth story.",
      "You have financing relationships that can handle complex underwriting.",
      "You want premium walkable-submarket exposure.",
    ],
    leadFormIntro: "Tell us about your mixed-use criteria and we will send you current Florida opportunities.",
  },
};

const base = mixedUseTopLevel.page;

const retailOffice: PropertyTypeEntry = {
  slug: "retail-office",
  parentSlug: "mixed-use",
  meta: { title: "Retail + Office Mixed-Use for Sale in Florida", description: "Buy retail plus office mixed-use properties in Florida. Main street storefronts with office space above.", keywords: "retail office mixed use florida, main street building" },
  page: { ...base, displayName: "Retail + Office", pluralDisplayName: "Retail + Office Buildings", heroHeadline: "Retail + Office Mixed-Use in Florida", heroSubheadline: "Main street storefronts with professional office space above", heroBody: "Retail plus office mixed-use is the classic main street format — ground-floor storefronts with office space on upper floors. Typically found in historic downtowns and walkable commercial districts. Trades with more operational variance than retail+residential because office demand is submarket-specific." },
};

const retailResidential: PropertyTypeEntry = {
  slug: "retail-residential",
  parentSlug: "mixed-use",
  meta: { title: "Retail + Residential Mixed-Use for Sale in Florida", description: "Buy retail plus residential mixed-use in Florida. Ground-floor retail with apartments above.", keywords: "retail residential mixed use, apartments over retail" },
  page: { ...base, displayName: "Retail + Residential", pluralDisplayName: "Retail + Residential Buildings", heroHeadline: "Retail + Residential Mixed-Use in Florida", heroSubheadline: "The most common mixed-use format — ground-floor retail with apartments above", heroBody: "Retail plus residential mixed-use is the dominant mixed-use format in Florida urban infill. Ground-floor retail stabilizes cash flow while 3–8 floors of apartments above capture rent growth. Cap rates blend to 5.75% – 6.75% for stabilized product." },
};

const officeResidential: PropertyTypeEntry = {
  slug: "office-residential",
  parentSlug: "mixed-use",
  meta: { title: "Office + Residential Mixed-Use for Sale in Florida", description: "Buy office plus residential mixed-use in Florida. Office buildings with apartment or condo conversion floors.", keywords: "office residential mixed use, live work building" },
  page: { ...base, displayName: "Office + Residential", pluralDisplayName: "Office + Residential Buildings", heroHeadline: "Office + Residential Mixed-Use in Florida", heroSubheadline: "Professional office below, residential above — downtown vertical integration", heroBody: "Office plus residential mixed-use is more common in larger downtown buildings where lower office floors combine with upper residential floors. Less common than retail+residential but institutional at scale." },
};

const liveWork: PropertyTypeEntry = {
  slug: "live-work",
  parentSlug: "mixed-use",
  meta: { title: "Live/Work Properties for Sale in Florida", description: "Buy live/work properties in Florida. Ground-floor commercial with owner residence above.", keywords: "live work florida, townhouse live work" },
  page: { ...base, displayName: "Live/Work", pluralDisplayName: "Live/Work Properties", heroHeadline: "Live/Work Properties in Florida", heroSubheadline: "Ground-floor commercial with owner residence above — small business + lifestyle", heroBody: "Live/work properties combine ground-floor commercial space (retail, office, studio, workshop) with owner residence on upper floors. Popular format for small business owners, artists, and lifestyle entrepreneurs. Trades in niche urban submarkets of Florida." },
};

const verticalMixedUse: PropertyTypeEntry = {
  slug: "vertical-mixed-use",
  parentSlug: "mixed-use",
  meta: { title: "Vertical Mixed-Use for Sale in Florida", description: "Buy vertical mixed-use properties in Florida. Multi-story buildings with retail, office, residential, and hotel uses.", keywords: "vertical mixed use florida, urban tower" },
  page: { ...base, displayName: "Vertical Mixed-Use", pluralDisplayName: "Vertical Mixed-Use Properties", heroHeadline: "Vertical Mixed-Use in Florida", heroSubheadline: "Multi-story integration — retail, office, residential, sometimes hotel", heroBody: "Vertical mixed-use stacks 3 or more uses in a single building — typically ground-floor retail, podium parking, office floors, residential floors, and sometimes a hotel component. The most institutional mixed-use format, found in downtown Orlando, Tampa, Miami, and Lake Nona developments." },
};

export const mixedUseRegistry: PropertyTypeEntry[] = [
  mixedUseTopLevel,
  retailOffice,
  retailResidential,
  officeResidential,
  liveWork,
  verticalMixedUse,
];
