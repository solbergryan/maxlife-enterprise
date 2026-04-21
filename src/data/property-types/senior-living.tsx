import type { PropertyTypeEntry } from "./types";

const seniorListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida senior living listings.", floridaUrl: "https://www.crexi.com/properties/FL/Senior-Living", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Senior-Living", allUrl: "https://www.crexi.com/properties/Senior-Living" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of senior housing listings in Florida.", floridaUrl: "https://www.loopnet.com/search/senior-living/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/senior-living/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/senior-living/usa/for-sale/" },
  { name: "Senior Housing News", tag: "Industry publication", description: "Specialty senior housing marketplace and news.", floridaUrl: "https://seniorhousingnews.com/", orlandoUrl: "https://seniorhousingnews.com/", allUrl: "https://seniorhousingnews.com/" },
];

const seniorLivingTopLevel: PropertyTypeEntry = {
  slug: "senior-living",
  meta: {
    title: "Senior Living & Healthcare Properties for Sale in Florida",
    description: "Buy senior living and healthcare real estate in Florida. Independent living, assisted living, memory care, skilled nursing, and CCRC properties.",
    keywords: "senior living florida, assisted living, memory care, skilled nursing, ccrc",
  },
  page: {
    displayName: "Senior Living",
    pluralDisplayName: "Senior Living Properties",
    heroImage: {
      src: "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-tower-office-building-skyscraper-facade-2175937.webp",
      alt: "Senior living community building exterior",
    },
    heroEyebrow: "Senior Living & Healthcare Investments",
    heroHeadline: "Senior Living & Healthcare Properties in Florida",
    heroSubheadline: "The demographic growth story of the next 20 years — baby boomers are aging into the care continuum",
    heroBody: "Senior living is one of the most demographically-supported CRE categories for the next two decades. Baby boomers are aging into the senior living continuum — independent living, assisted living, memory care, and skilled nursing — at record rates. Florida, as the #1 retirement state in America, sits at the epicenter of this demand surge. The category is operationally complex and requires specialty expertise, but delivers the best long-term demand tailwinds in CRE. Cap rates range from 6.0% for trophy CCRCs to 9.0%+ for troubled skilled nursing.",
    quickStats: [
      { label: "Typical Deal Size", value: "$10M – $200M+", detail: "Single buildings to CCRC campuses" },
      { label: "Common Cap Rate", value: "6.0% – 9.0%+", detail: "Wide range across care levels" },
      { label: "Demographic Tailwind", value: "4%+ annual growth", detail: "Florida 85+ population growth rate" },
    ],
    formats: [
      { name: "Independent Living (IL)", capRate: "6.25% – 7.50%", footprint: "100 – 300 units", note: "Active senior apartments with amenities — no care. Most like multifamily, tightest cap rates." },
      { name: "Assisted Living (ALF)", capRate: "7.00% – 8.25%", footprint: "80 – 200 units", note: "Personal care services (bathing, medication, meals). Mid-range in the senior care continuum." },
      { name: "Memory Care", capRate: "7.25% – 8.50%", footprint: "40 – 100 units", note: "Secured dementia and Alzheimer's care. Specialty operator required." },
      { name: "Skilled Nursing (SNF)", capRate: "8.50% – 11.0%+", footprint: "60 – 180 beds", note: "Medical-level 24/7 care. Highest yield, highest operational complexity and regulatory risk." },
      { name: "CCRC", capRate: "6.00% – 7.50%", footprint: "300 – 1000+ units", note: "Continuing Care Retirement Community — all levels of care on one campus. Institutional trophy product." },
      { name: "Active Adult (55+)", capRate: "5.50% – 6.75%", footprint: "100 – 400 units", note: "Age-restricted apartments without care services. Closest to traditional multifamily." },
    ],
    prosConsIntro: "Senior living combines the strongest demographic tailwinds in CRE with the most operationally complex asset class in real estate.",
    pros: [
      { title: "Demographic Megatrend", description: "The 85+ population is growing 4%+ annually. Florida captures the largest share of this growth." },
      { title: "Premium Rental Economics", description: "Senior living achieves rent per unit 2–4x above comparable multifamily." },
      { title: "Needs-Based Demand", description: "Most senior living is needs-based rather than discretionary — recession-resistant." },
      { title: "Healthcare Integration", description: "Senior living connects to the broader healthcare economy, providing cross-referral demand." },
      { title: "Operating Lease Structure", description: "Triple net sale-leaseback structures let real estate investors own the dirt without operator risk." },
    ],
    cons: [
      { title: "Operator Risk Is Enormous", description: "Senior living is operator-dependent. A failing operator can destroy real estate value fast." },
      { title: "Regulatory Complexity", description: "Skilled nursing especially is subject to Medicare/Medicaid regulations, state licensing, and CON laws." },
      { title: "Labor Cost Pressure", description: "Nursing and care staff wages have risen sharply, compressing operator margins and therefore rent coverage." },
      { title: "Staffing Challenges", description: "Senior living staffing shortages are the biggest operational challenge in the asset class today." },
      { title: "COVID Trauma", description: "The industry is still recovering from COVID's impact on occupancy and operator finances." },
    ],
    personas: [
      { name: "Healthcare REITs", tag: "Core / Core-Plus", description: "Welltower, Ventas, Healthpeak — public REITs with scale senior living portfolios.", fit: "Institutional healthcare real estate fits REIT scale and capital structure." },
      { name: "Private Equity Sponsors", tag: "Value-Add", description: "PE sponsors buying underperforming assets and executing operator changes and capital improvements.", fit: "Significant value creation from operator and capex upgrades." },
      { name: "Specialty Sale-Leaseback Buyers", tag: "Fixed Income", description: "NNN buyers taking building ownership with operator responsibility for everything else.", fit: "Bond-like returns when operator credit is strong." },
    ],
    underwritingMetrics: [
      { label: "Occupancy", detail: "85%+ for stabilized senior living; underwrite to realistic stabilization" },
      { label: "Operator Margin", detail: "12–22% of revenue for stabilized ALF/MC; SNF margins much tighter" },
      { label: "Care Staff Ratio", detail: "1 CNA per 8–12 residents for ALF; tighter for memory care" },
      { label: "Rent Coverage Ratio", detail: "1.25x+ for sale-leaseback structures with credit operators" },
      { label: "Private Pay Mix", detail: "Higher private-pay vs Medicare/Medicaid generally means stronger economics" },
      { label: "State Licensing", detail: "Confirm valid licensing and regulatory standing before closing" },
    ],
    listingSites: seniorListings,
    listingsIntro: "Want to see public senior living listings? These marketplaces cover Florida senior housing.",
    faqs: [
      { q: "Why is Florida senior living so in-demand?", a: "Florida is America's #1 retirement destination, with the largest 65+ and 85+ population concentrations in the country. Baby boomers aging into the care continuum over the next 20 years creates structural demand growth that no other CRE category can match." },
      { q: "What's the difference between independent living, assisted living, and skilled nursing?", a: "Independent Living: active seniors in apartment-style units, no care services. Assisted Living: personal care (bathing, medication, meals) for seniors who can't fully self-care. Memory Care: specialized dementia/Alzheimer's care in secured settings. Skilled Nursing: 24/7 medical care for residents needing clinical nursing services." },
      { q: "How do I reduce operator risk in senior living?", a: "Use triple-net sale-leaseback structures with creditworthy operators, require operator financial reporting, underwrite conservative rent coverage ratios (1.25x+), confirm state licensing status, and include operator replacement provisions in the lease." },
    ],
    fitCheckQuestions: [
      "You want exposure to the strongest demographic tailwind in CRE.",
      "You understand the operational complexity and regulatory environment.",
      "You can underwrite operator credit and rent coverage ratios.",
      "You want premium rental economics above traditional multifamily.",
      "You have patient capital that can absorb occupancy variance during stabilization.",
    ],
    leadFormIntro: "Tell us about your senior living criteria and we will send you current Florida opportunities.",
  },
};

const base = seniorLivingTopLevel.page;

const independentLiving: PropertyTypeEntry = {
  slug: "independent-living",
  parentSlug: "senior-living",
  meta: { title: "Independent Living Communities for Sale in Florida", description: "Buy independent living senior apartment communities in Florida. Active 55+ and 62+ senior apartments.", keywords: "independent living florida, senior apartments" },
  page: { ...base, displayName: "Independent Living", pluralDisplayName: "Independent Living Communities", heroHeadline: "Independent Living Communities in Florida", heroSubheadline: "Active senior apartments with amenities — no care services", heroBody: "Independent living (IL) communities serve active seniors who don't need care services — essentially age-restricted multifamily with amenities (clubhouse, dining, activities, fitness, transportation). Trades tightest in the senior care continuum because the operational model is closest to standard multifamily. Cap rates run 6.25% – 7.50%." },
};

const assistedLiving: PropertyTypeEntry = {
  slug: "assisted-living",
  parentSlug: "senior-living",
  meta: { title: "Assisted Living Facilities for Sale in Florida", description: "Buy assisted living facilities (ALFs) in Florida. Senior care facilities providing personal care services.", keywords: "assisted living florida, alf for sale" },
  page: { ...base, displayName: "Assisted Living Facility", pluralDisplayName: "Assisted Living Facilities", heroHeadline: "Assisted Living Facilities in Florida", heroSubheadline: "Personal care for seniors who need help with daily activities", heroBody: "Assisted living facilities (ALFs) provide personal care — help with bathing, medication management, meals, housekeeping, and activities — for seniors who can't fully care for themselves but don't need medical nursing. The middle of the senior care continuum and the largest institutional segment. Cap rates run 7.0% – 8.25% for stabilized product." },
};

const memoryCare: PropertyTypeEntry = {
  slug: "memory-care",
  parentSlug: "senior-living",
  meta: { title: "Memory Care Facilities for Sale in Florida", description: "Buy memory care facilities in Florida. Specialized Alzheimer's and dementia care real estate.", keywords: "memory care florida, alzheimers facility, dementia care" },
  page: { ...base, displayName: "Memory Care", pluralDisplayName: "Memory Care Facilities", heroHeadline: "Memory Care Facilities in Florida", heroSubheadline: "Specialized Alzheimer's and dementia care real estate", heroBody: "Memory care facilities provide secured, specialized care for residents with Alzheimer's disease, dementia, and other cognitive impairments. The category requires specialized operator expertise, secured building design, and specialty staff training. Premium rental rates compared to standard ALF, but higher labor intensity." },
};

const skilledNursing: PropertyTypeEntry = {
  slug: "skilled-nursing",
  parentSlug: "senior-living",
  meta: { title: "Skilled Nursing Facilities (SNF) for Sale in Florida", description: "Buy skilled nursing facilities in Florida. SNF real estate with 24/7 medical care and Medicare/Medicaid reimbursement.", keywords: "skilled nursing florida, snf for sale, nursing home real estate" },
  page: { ...base, displayName: "Skilled Nursing Facility", pluralDisplayName: "Skilled Nursing Facilities", heroHeadline: "Skilled Nursing Facilities in Florida", heroSubheadline: "24/7 medical care with Medicare/Medicaid reimbursement", heroBody: "Skilled nursing facilities (SNFs) provide 24/7 medical care for residents needing clinical nursing services — post-hospital rehabilitation, chronic care, and end-of-life care. The most regulated and operationally complex senior living category, with significant Medicare/Medicaid reimbursement dependency. Cap rates run 8.5% – 11.0%+ reflecting operator and regulatory risk." },
};

const ccrc: PropertyTypeEntry = {
  slug: "ccrc",
  parentSlug: "senior-living",
  meta: { title: "CCRC & Continuing Care Retirement Communities for Sale in Florida", description: "Buy CCRC properties in Florida. Continuing care retirement communities with all care levels on one campus.", keywords: "ccrc florida, continuing care retirement, life plan community" },
  page: { ...base, displayName: "CCRC", pluralDisplayName: "CCRC Communities", heroHeadline: "Continuing Care Retirement Communities in Florida", heroSubheadline: "All care levels on one campus — the trophy senior living format", heroBody: "Continuing Care Retirement Communities (CCRCs) combine independent living, assisted living, memory care, and skilled nursing on a single campus — allowing residents to age in place through the full care continuum. Institutional trophy product with 300-1000+ unit scale. Cap rates run 6.0% – 7.5% for stabilized product, among the tightest in senior living." },
};

const hospital: PropertyTypeEntry = {
  slug: "hospital",
  parentSlug: "senior-living",
  meta: { title: "Hospital Real Estate for Sale in Florida", description: "Buy hospital and acute care real estate in Florida. General acute, specialty, and critical access hospital properties.", keywords: "hospital real estate florida, acute care" },
  page: { ...base, displayName: "Hospital", pluralDisplayName: "Hospital Properties", heroHeadline: "Hospital Real Estate in Florida", heroSubheadline: "General acute, specialty, and critical access hospital properties", heroBody: "Hospital real estate is a highly specialized subcategory — institutional-quality acute care facilities typically owned by non-profits, health systems, or specialty operators. Most hospital transactions happen between health systems rather than on open markets, but sale-leaseback structures exist for specialty and critical access hospitals." },
};

const surgeryCenter: PropertyTypeEntry = {
  slug: "surgery-center",
  parentSlug: "senior-living",
  meta: { title: "Ambulatory Surgery Centers (ASC) for Sale in Florida", description: "Buy ambulatory surgery center and outpatient surgical facilities in Florida.", keywords: "ambulatory surgery center florida, asc real estate, outpatient surgery" },
  page: { ...base, displayName: "Surgery Center / Ambulatory", pluralDisplayName: "Ambulatory Surgery Centers", heroHeadline: "Ambulatory Surgery Centers in Florida", heroSubheadline: "Outpatient surgical real estate — a fast-growing healthcare subcategory", heroBody: "Ambulatory Surgery Centers (ASCs) have been one of the fastest-growing healthcare real estate subcategories of the past decade, as surgical procedures migrate from hospital inpatient settings to outpatient ASCs. Typically single-tenant specialty medical buildings with investment-grade tenancy from surgery center operator platforms." },
};

const urgentCare: PropertyTypeEntry = {
  slug: "urgent-care",
  parentSlug: "senior-living",
  meta: { title: "Urgent Care Properties for Sale in Florida", description: "Buy urgent care and walk-in clinic properties in Florida. Freestanding urgent care real estate.", keywords: "urgent care florida, walk in clinic" },
  page: { ...base, displayName: "Urgent Care", pluralDisplayName: "Urgent Care Properties", heroHeadline: "Urgent Care Properties in Florida", heroSubheadline: "Freestanding walk-in clinic real estate", heroBody: "Urgent care centers are freestanding walk-in clinics providing immediate medical care for non-emergency conditions. The category has grown rapidly over the past decade as consumers prefer walk-in convenience over traditional physician offices. Typically NNN leased to urgent care operator platforms like CareSpot, MedExpress, and AFC Urgent Care." },
};

const rehabLtac: PropertyTypeEntry = {
  slug: "rehab-ltac",
  parentSlug: "senior-living",
  meta: { title: "Rehabilitation & Long-Term Acute Care (LTAC) Facilities for Sale in Florida", description: "Buy inpatient rehabilitation and long-term acute care facilities in Florida.", keywords: "rehab facility florida, ltac, inpatient rehabilitation" },
  page: { ...base, displayName: "Rehab / LTAC", pluralDisplayName: "Rehab & LTAC Facilities", heroHeadline: "Rehabilitation & LTAC Facilities in Florida", heroSubheadline: "Inpatient rehabilitation and long-term acute care real estate", heroBody: "Inpatient rehabilitation facilities (IRFs) and long-term acute care hospitals (LTACHs) are specialty healthcare real estate serving patients recovering from serious medical events. The category is highly regulated and reimbursement-dependent, but delivers strong yields for investors with specialty healthcare underwriting capability." },
};

export const seniorLivingRegistry: PropertyTypeEntry[] = [
  seniorLivingTopLevel,
  independentLiving,
  assistedLiving,
  memoryCare,
  skilledNursing,
  ccrc,
  hospital,
  surgeryCenter,
  urgentCare,
  rehabLtac,
];
