import type { PropertyTypeEntry } from "./types";

const multifamilyPersonas = [
  {
    name: "Institutional Sponsors",
    tag: "Core / Core-Plus",
    description: "REITs, insurance capital, and pension funds building Sunbelt multifamily portfolios at scale.",
    fit: "Florida sits at the top of every institutional multifamily allocation model.",
  },
  {
    name: "Value-Add Syndicators",
    tag: "Force Appreciation",
    description: "Sponsors buying 1980s–2000s product, renovating units, and pushing rents to market.",
    fit: "Classic value-add plays deliver 12–18%+ IRR when executed well in growth markets.",
  },
  {
    name: "1031 Exchange Buyers",
    tag: "Deadline-Driven",
    description: "Buyers on a 45/180-day clock looking for stabilized multifamily replacement product.",
    fit: "Florida multifamily offers deep inventory and fast-close execution.",
  },
  {
    name: "Private Family Offices",
    tag: "Long Duration",
    description: "Multi-generational wealth managers holding Sunbelt multifamily for 15+ years.",
    fit: "Inflation-protected cash flow with population growth tailwinds aligns with long holds.",
  },
];

const mfListings = [
  {
    name: "Crexi",
    tag: "Tech-forward CRE marketplace",
    description: "Growing inventory of Florida multifamily listings.",
    floridaUrl: "https://www.crexi.com/properties/FL/Multifamily",
    orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Multifamily",
    allUrl: "https://www.crexi.com/properties/Multifamily",
  },
  {
    name: "LoopNet",
    tag: "Largest CRE listings network",
    description: "The biggest pool of multifamily listings in Florida.",
    floridaUrl: "https://www.loopnet.com/search/multifamily-property/fl/for-sale/",
    orlandoUrl: "https://www.loopnet.com/search/multifamily-property/orlando-fl/for-sale/",
    allUrl: "https://www.loopnet.com/search/multifamily-property/usa/for-sale/",
  },
  {
    name: "CBRE Deal Flow",
    tag: "Institutional broker platform",
    description: "Institutional multifamily opportunities across Florida.",
    floridaUrl: "https://www.cbre.com/properties",
    orlandoUrl: "https://www.cbre.com/properties",
    allUrl: "https://www.cbre.com/properties",
  },
];

const multifamilyTopLevel: PropertyTypeEntry = {
  slug: "multifamily",
  meta: {
    title: "Multifamily Properties for Sale in Florida | Apartments & Workforce Housing",
    description: "Buy multifamily real estate in Florida. Garden-style, mid-rise, high-rise, student housing, and affordable multifamily.",
    keywords: "multifamily for sale florida, apartment complex orlando, garden style, value add multifamily",
  },
  page: {
    displayName: "Multifamily",
    pluralDisplayName: "Multifamily Properties",
    heroEyebrow: "Multifamily Investment Opportunities",
    heroHeadline: "Multifamily Properties in Florida",
    heroSubheadline: "Apartments and workforce housing in the #1 population growth state",
    heroBody:
      "Florida multifamily has been one of the top-performing asset classes in American real estate for a decade — and the tailwinds show no sign of stopping. Net migration, no state income tax, and job growth have driven apartment demand faster than supply across every major Florida MSA. Current cap rates range from 5.25% for stabilized Class A high-rise to 7.0%+ for Class B/C value-add. The best risk-adjusted plays remain 1980s–2000s Class B value-add in the Orlando, Tampa, and Jacksonville corridors.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $150M+", detail: "Small duplexes to institutional scale" },
      { label: "Common Cap Rate", value: "5.25% – 7.00%+", detail: "Class A to value-add" },
      { label: "Rent Growth", value: "4–8% YoY", detail: "Still outpacing national average" },
    ],
    formats: [
      { name: "Class A Garden / Mid-Rise", capRate: "5.25% – 5.75%", footprint: "200 – 400 units", note: "Newly built institutional product in growth submarkets." },
      { name: "Class B Value-Add", capRate: "5.75% – 6.75%", footprint: "100 – 300 units", note: "1980s–2000s product with renovation and rent-push upside." },
      { name: "Class C / Workforce", capRate: "6.75% – 7.75%+", footprint: "50 – 250 units", note: "Older product serving workforce renter base. Higher yield, higher operations risk." },
      { name: "High-Rise / Luxury", capRate: "4.75% – 5.75%", footprint: "150 – 500+ units", note: "Premium urban high-rise in downtown Orlando, Tampa, and Miami." },
      { name: "Student Housing", capRate: "5.50% – 6.50%", footprint: "200 – 800 beds", note: "Purpose-built student housing near UF, FSU, UCF, and USF." },
      { name: "Affordable / LIHTC", capRate: "6.00% – 7.00%", footprint: "80 – 300 units", note: "Income-restricted product with tax credit equity and subsidy programs." },
    ],
    whyFloridaTitle: (
      <>
        Why Florida Multifamily{" "}
        <span className="text-gold">Outperforms the Nation</span>
      </>
    ),
    whyFloridaReasons: [
      { title: "#1 Population Inflows", description: "365k+ net new residents in 2023 — all of whom need somewhere to live." },
      { title: "No State Income Tax", description: "Migration driver for HNW and remote workers. Apartment demand follows." },
      { title: "Job Growth Above Trend", description: "Florida job growth has outpaced the nation for the past decade." },
      { title: "Housing Affordability Gap", description: "Single-family prices have climbed faster than incomes — renters stay renters longer." },
      { title: "Hurricane-Resilient Demand", description: "Multifamily recovers faster than single-family after storm events." },
      { title: "Deep Institutional Liquidity", description: "Florida is the largest multifamily trading market in the Southeast." },
    ],
    prosConsIntro: "Multifamily is the most institutional CRE asset class. But current-cycle underwriting requires more discipline than ever.",
    pros: [
      { title: "Population Growth Tailwind", description: "Florida's net migration underwrites apartment demand for a decade or more." },
      { title: "Deep Institutional Liquidity", description: "Always an active buyer pool — exit is rarely the binding constraint." },
      { title: "Agency Debt Availability", description: "Fannie and Freddie provide low-cost, long-duration multifamily debt — rare across CRE." },
      { title: "Value-Add Upside", description: "1980s–2000s product has clear renovation and rent-push upside in every Florida MSA." },
      { title: "Inflation-Indexed Rents", description: "Annual lease rollover captures inflation faster than 10-year NNN retail or office." },
      { title: "Tax Shelter Benefits", description: "Cost segregation and bonus depreciation are particularly effective on multifamily." },
    ],
    cons: [
      { title: "Cap Rate Compression Ceiling", description: "Entry caps are historically tight — meaningful rent growth needed to deliver target returns." },
      { title: "Supply Pressure", description: "New deliveries in some Florida submarkets are softening rent growth in Class A." },
      { title: "Insurance Cost Explosion", description: "Florida multifamily insurance has doubled or tripled since 2020. Underwrite conservatively." },
      { title: "Active Operations", description: "Multifamily is a management-intensive asset class — great sponsors beat average ones by meaningful margins." },
      { title: "Regulatory Risk", description: "Local rent control, tenant protection, and lease restrictions have spread to parts of Florida." },
    ],
    personas: multifamilyPersonas,
    underwritingMetrics: [
      { label: "Rent PSF", detail: "$1.80 – $3.20 per SF per month for Florida apartments" },
      { label: "Occupancy", detail: "Stabilized should run 93%+ economic occupancy" },
      { label: "Operating Expense Ratio", detail: "38–48% of EGI for professionally managed product" },
      { label: "Insurance Cost", detail: "$600 – $1,500+ per unit per year in Florida — has doubled in 5 years" },
      { label: "Cap Ex Reserve", detail: "$250 – $400 per unit per year minimum" },
      { label: "Rent Growth Stress Test", detail: "Model flat or 1% growth as conservative downside case" },
    ],
    analyzerTitle: (
      <>
        Sample Value-Add Multifamily Deal{" "}
        <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerIntro: "A representative Orlando-area 1990s Class B value-add apartment complex — $28M purchase, 140 units at $200k/door with renovation upside.",
    analyzerBadges: [
      { label: "Purchase: $28M", highlighted: true },
      { label: "140 Units" },
      { label: "$200K/Door" },
      { label: "Class B Value-Add" },
      { label: "5-Year Hold" },
    ],
    analyzerDealInputs: {
      assetType: "Multifamily",
      purchasePrice: "28000000",
      units: "140",
      monthlyRentPerUnit: "1650",
      rentGrowth: "3.5",
      vacancyRate: "6",
      opexRatio: "42",
      downPaymentPct: "30",
      interestRate: "6.5",
      amortization: "30",
      closingCosts: "140000",
      loanOrigFee: "1.0",
      holdPeriod: "5",
      exitCapSpread: "0.25",
    },
    listingsIntro: "Want to see what's publicly listed? These marketplaces aggregate Florida multifamily opportunities.",
    listingSites: mfListings,
    listingsFootnote: "Most institutional multifamily product trades off-market through broker relationships.",
    faqs: [
      {
        q: "What's a good cap rate for Florida multifamily today?",
        a: "Class A stabilized: 5.25% – 5.75%. Class B value-add: 5.75% – 6.75%. Class C workforce: 6.75% – 7.75%+. Cap rates have compressed over the decade — today's rent growth assumptions matter more than going-in yield.",
      },
      {
        q: "Is Florida multifamily oversupplied?",
        a: "Select submarkets (Orlando SW, Tampa West Chase, parts of Jacksonville) are seeing elevated deliveries and rent softening. But overall Florida is still undersupplied versus net migration — the oversupply is cyclical, not structural.",
      },
      {
        q: "What about hurricane insurance?",
        a: "Florida multifamily insurance has doubled or tripled since 2020. Budget $600 – $1,500+ per unit per year depending on coast proximity, building class, and wind mitigation features. Underwrite insurance conservatively — it's the #1 expense surprise in recent years.",
      },
      {
        q: "Can I 1031 exchange into multifamily?",
        a: "Yes. Multifamily is a strong 1031 replacement product with deep inventory and fast-close execution. Institutional-quality assets close in 30–60 days.",
      },
    ],
    fitCheckIntro: 'If you nod "yes" to three or more of these, Florida multifamily deserves a major portfolio slot.',
    fitCheckQuestions: [
      "You believe in Florida's population growth tailwind for the next 10+ years.",
      "You want access to agency debt (Fannie/Freddie) that isn't available on most CRE asset classes.",
      "You're comfortable with active, management-intensive asset management.",
      "You want significant bonus depreciation and cost segregation benefits.",
      "You can underwrite to conservative insurance and CapEx assumptions.",
    ],
    leadFormIntro: "Tell us about your multifamily criteria and we will send you current Florida opportunities — on and off market.",
  },
};

const base = multifamilyTopLevel.page;

// Subtypes — spreading base and overriding

const gardenStyle: PropertyTypeEntry = {
  slug: "garden-style",
  parentSlug: "multifamily",
  meta: {
    title: "Garden-Style Apartments for Sale in Florida | 1–3 Story Multifamily",
    description: "Buy garden-style apartment communities in Florida. 1–3 story apartment complexes for value-add and core investors.",
    keywords: "garden style apartments florida, multifamily for sale orlando",
  },
  page: {
    ...base,
    displayName: "Garden-Style",
    pluralDisplayName: "Garden-Style Apartments",
    heroHeadline: "Garden-Style Apartments in Florida",
    heroSubheadline: "1–3 story apartment communities — the workhorse of Florida multifamily",
    heroBody: "Garden-style apartments are 1–3 story walk-up or stair-accessible apartment buildings arranged around surface parking and amenities. They represent the majority of Florida multifamily inventory and are typical targets for value-add syndication plays. Cap rates run 5.75% – 7.0% depending on vintage and renovation status.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $80M", detail: "50–400 unit garden communities" },
      { label: "Common Cap Rate", value: "5.75% – 7.00%", detail: "Class A to value-add B/C" },
      { label: "Unit Count", value: "50 – 400", detail: "Garden-style institutional scale" },
    ],
  },
};

const midRise: PropertyTypeEntry = {
  slug: "mid-rise",
  parentSlug: "multifamily",
  meta: {
    title: "Mid-Rise Apartments for Sale in Florida | 4–9 Story Multifamily",
    description: "Buy mid-rise apartment buildings in Florida. 4–9 story urban multifamily in Orlando, Tampa, Miami, and Jacksonville.",
    keywords: "mid rise apartments florida, urban multifamily",
  },
  page: {
    ...base,
    displayName: "Mid-Rise",
    pluralDisplayName: "Mid-Rise Apartments",
    heroHeadline: "Mid-Rise Apartments in Florida",
    heroSubheadline: "4–9 story urban infill multifamily in Florida's downtowns",
    heroBody: "Mid-rise apartments are urban infill multifamily — typically 4–9 stories with elevator access, structured parking, and ground-floor retail or amenity. Popular in growth-corridor submarkets like Lake Nona, Winter Park, Downtown Tampa, and Brickell. Cap rates trade tighter than suburban garden — 5.0% – 6.0% for institutional Class A product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$30M – $200M", detail: "Urban infill mid-rise" },
      { label: "Common Cap Rate", value: "5.00% – 6.00%", detail: "Tighter than suburban garden" },
      { label: "Unit Count", value: "150 – 400", detail: "Elevator-accessible density" },
    ],
  },
};

const highRise: PropertyTypeEntry = {
  slug: "high-rise",
  parentSlug: "multifamily",
  meta: {
    title: "High-Rise Apartments for Sale in Florida | 10+ Story Luxury Multifamily",
    description: "Buy high-rise luxury apartment buildings in Florida. 10+ story urban luxury multifamily in Miami, Tampa, and Orlando.",
    keywords: "high rise apartments florida, luxury multifamily miami",
  },
  page: {
    ...base,
    displayName: "High-Rise",
    pluralDisplayName: "High-Rise Apartments",
    heroHeadline: "High-Rise Apartments in Florida",
    heroSubheadline: "10+ story luxury multifamily in Florida's most premium submarkets",
    heroBody: "High-rise apartment towers are institutional trophy product — 10+ stories of luxury units with full amenity packages, concierge service, rooftop pools, and structured parking. Miami, downtown Tampa, and downtown Orlando house the category's institutional inventory. Trophy high-rise trades at 4.75% – 5.75% cap rates.",
    quickStats: [
      { label: "Typical Deal Size", value: "$50M – $400M+", detail: "Trophy urban luxury scale" },
      { label: "Common Cap Rate", value: "4.75% – 5.75%", detail: "Tightest in multifamily" },
      { label: "Unit Count", value: "200 – 600+", detail: "High-density urban towers" },
    ],
  },
};

const lowRiseWalkUp: PropertyTypeEntry = {
  slug: "low-rise-walkup",
  parentSlug: "multifamily",
  meta: {
    title: "Low-Rise & Walk-Up Apartments for Sale in Florida",
    description: "Buy low-rise and walk-up apartment buildings in Florida. 2-story stair-access apartment communities.",
    keywords: "walk up apartments florida, low rise multifamily",
  },
  page: {
    ...base,
    displayName: "Low-Rise / Walk-Up",
    pluralDisplayName: "Low-Rise Apartments",
    heroHeadline: "Low-Rise & Walk-Up Apartments in Florida",
    heroSubheadline: "Classic 2-story stair-access apartment communities",
    heroBody: "Low-rise walk-up apartments are 2-story stair-accessible buildings that make up a significant portion of Florida's older apartment stock. Often 1970s–1990s vintage, they represent classic value-add opportunities for sponsors who can execute unit renovations and rent push strategies.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $25M", detail: "Small-to-mid walk-up communities" },
      { label: "Common Cap Rate", value: "6.00% – 7.50%", detail: "Value-add vintage product" },
      { label: "Unit Count", value: "30 – 150", detail: "Stair-access density" },
    ],
  },
};

const smallMultifamily: PropertyTypeEntry = {
  slug: "small-multifamily",
  parentSlug: "multifamily",
  meta: {
    title: "Duplex, Triplex & Fourplex for Sale in Florida | Small Multifamily",
    description: "Buy 2–4 unit small multifamily properties in Florida. Duplex, triplex, and fourplex investment properties.",
    keywords: "duplex florida, triplex, fourplex, small multifamily",
  },
  page: {
    ...base,
    displayName: "Small Multifamily (2–4 Units)",
    pluralDisplayName: "Small Multifamily Properties",
    heroHeadline: "Duplex, Triplex & Fourplex in Florida",
    heroSubheadline: "2–4 unit small multifamily for individual investors",
    heroBody: "2–4 unit small multifamily is the entry point into Florida multifamily investing. Duplex, triplex, and fourplex properties qualify for residential mortgages (including owner-occupier FHA and VA loans), making them accessible for first-time investors. House-hacking an owner-occupier fourplex is one of the most efficient ways to build an investment portfolio.",
    quickStats: [
      { label: "Typical Deal Size", value: "$400K – $1.5M", detail: "2–4 unit properties" },
      { label: "Financing", value: "Residential mortgage", detail: "Including FHA/VA owner-occupier" },
      { label: "Strategy Options", value: "Owner-occupy or rent", detail: "Most versatile small CRE asset" },
    ],
  },
};

const apartmentComplex: PropertyTypeEntry = {
  slug: "apartment-complex",
  parentSlug: "multifamily",
  meta: {
    title: "Apartment Complexes for Sale in Florida | 5+ Unit Multifamily",
    description: "Buy apartment complexes in Florida. 5+ unit multifamily investment properties.",
    keywords: "apartment complex florida, 5 plus units",
  },
  page: {
    ...base,
    displayName: "Apartment Complex (5+ Units)",
    pluralDisplayName: "Apartment Complexes",
    heroHeadline: "Apartment Complexes for Sale in Florida",
    heroSubheadline: "5+ unit multifamily — the start of commercial multifamily financing",
    heroBody: "At 5 units and above, multifamily leaves residential mortgages and becomes commercial real estate. Properties qualify for commercial bank loans, agency debt (Fannie/Freddie at 5+ unit count), and institutional underwriting. This is where multifamily becomes truly scalable as a business.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $15M", detail: "5–60 unit commercial multifamily" },
      { label: "Common Cap Rate", value: "6.25% – 7.50%", detail: "Small-balance multifamily" },
      { label: "Financing", value: "Commercial / Agency", detail: "Fannie/Freddie Small Balance" },
    ],
  },
};

const studentHousing: PropertyTypeEntry = {
  slug: "student-housing",
  parentSlug: "multifamily",
  meta: {
    title: "Student Housing for Sale in Florida | Purpose-Built Student Housing",
    description: "Buy student housing properties in Florida near UF, FSU, UCF, and USF. Purpose-built student housing investments.",
    keywords: "student housing florida, ucf housing, uf apartments, purpose built student housing",
  },
  page: {
    ...base,
    displayName: "Student Housing",
    pluralDisplayName: "Student Housing Properties",
    heroHeadline: "Student Housing in Florida",
    heroSubheadline: "Purpose-built student housing near UF, FSU, UCF, and USF",
    heroBody: "Student housing is a specialty multifamily subcategory that leases by-the-bed on 12-month leases aligned with the academic calendar. Florida's major universities — UF (Gainesville), FSU (Tallahassee), UCF (Orlando), USF (Tampa) — support institutional-quality student housing investment pipelines. Cap rates run 5.5% – 6.5% for purpose-built product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$20M – $150M", detail: "Institutional student housing" },
      { label: "Common Cap Rate", value: "5.50% – 6.50%", detail: "Purpose-built near major universities" },
      { label: "Lease Model", value: "By-the-bed", detail: "12-month academic-year leases" },
    ],
  },
};

const affordableLihtc: PropertyTypeEntry = {
  slug: "affordable-lihtc",
  parentSlug: "multifamily",
  meta: {
    title: "Affordable & LIHTC Housing for Sale in Florida | Tax Credit Multifamily",
    description: "Buy affordable and LIHTC-compliant housing in Florida. Tax credit, Section 8, and workforce housing investments.",
    keywords: "affordable housing florida, lihtc, section 8, workforce housing",
  },
  page: {
    ...base,
    displayName: "Affordable / LIHTC Housing",
    pluralDisplayName: "Affordable & LIHTC Housing",
    heroHeadline: "Affordable & LIHTC Housing in Florida",
    heroSubheadline: "Tax credit, Section 8, and workforce housing investments",
    heroBody: "Affordable housing — including LIHTC (Low-Income Housing Tax Credit) and Section 8 — combines rent-restricted units with tax credit equity and subsidy income streams. A specialty category that requires compliance expertise, but offers stable cash flows, favorable financing, and meaningful community impact.",
    quickStats: [
      { label: "Typical Deal Size", value: "$8M – $60M", detail: "LIHTC and affordable developments" },
      { label: "Common Cap Rate", value: "6.00% – 7.00%", detail: "Subsidized income stream" },
      { label: "Compliance Period", value: "15 – 30 years", detail: "LIHTC and HAP restrictions" },
    ],
  },
};

const militaryHousing: PropertyTypeEntry = {
  slug: "military-housing",
  parentSlug: "multifamily",
  meta: {
    title: "Military Housing for Sale in Florida | Near Military Installations",
    description: "Buy multifamily properties serving military housing markets in Florida. Near Jacksonville NAS, Pensacola, Eglin, and other bases.",
    keywords: "military housing florida, bah market, navy apartments",
  },
  page: {
    ...base,
    displayName: "Military Housing",
    pluralDisplayName: "Military Housing Properties",
    heroHeadline: "Military Housing Markets in Florida",
    heroSubheadline: "Multifamily serving Florida's military installations",
    heroBody: "Florida hosts a dense cluster of military installations — Jacksonville NAS, NAS Pensacola, Eglin AFB, MacDill AFB, Tyndall AFB, Patrick SFB — supporting a specialty multifamily submarket driven by BAH (Basic Allowance for Housing) and stable military demand. Multifamily near bases trades at specialty yields with unusually stable occupancy.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $40M", detail: "Multifamily near military bases" },
      { label: "Common Cap Rate", value: "6.50% – 7.50%", detail: "BAH-indexed rent" },
      { label: "Demand Driver", value: "BAH stability", detail: "Military personnel demand" },
    ],
  },
};

const condominium: PropertyTypeEntry = {
  slug: "condominium",
  parentSlug: "multifamily",
  meta: {
    title: "Condominium Buildings for Sale in Florida | Whole-Building Condos",
    description: "Buy condominium buildings in Florida. Whole-building condo conversion and investment opportunities.",
    keywords: "condo building florida, condominium investment, condo conversion",
  },
  page: {
    ...base,
    displayName: "Condominium Building",
    pluralDisplayName: "Condominium Buildings",
    heroHeadline: "Condominium Buildings in Florida",
    heroSubheadline: "Whole-building condo investment and conversion opportunities",
    heroBody: "Whole-building condominium investments include condo conversion plays (where a multifamily building is reformatted and sold unit-by-unit), unsold inventory acquisitions, and rental-pool condo programs. The category has been affected by Florida's post-Surfside condo safety laws — older condo buildings face mandatory reserve studies and structural integrity requirements.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $100M", detail: "Whole-building condo investment" },
      { label: "Strategy Types", value: "Conversion / pool", detail: "Multiple monetization paths" },
      { label: "Compliance", value: "Post-Surfside laws", detail: "Reserve studies required" },
    ],
  },
};

const coopBuilding: PropertyTypeEntry = {
  slug: "co-op-building",
  parentSlug: "multifamily",
  meta: {
    title: "Co-op Buildings for Sale in Florida | Housing Cooperatives",
    description: "Buy housing cooperative buildings in Florida. Co-op apartment investments and conversions.",
    keywords: "co op building florida, housing cooperative",
  },
  page: {
    ...base,
    displayName: "Co-op Building",
    pluralDisplayName: "Housing Cooperatives",
    heroHeadline: "Co-op Buildings in Florida",
    heroSubheadline: "Housing cooperatives and specialty ownership structures",
    heroBody: "Housing cooperatives are a relatively rare ownership structure in Florida compared to condos, but they exist primarily in older buildings in South Florida and legacy retirement communities. Co-op ownership creates a corporate structure where residents own shares in the building entity rather than individual units.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $30M", detail: "Co-op building portfolio" },
      { label: "Structure", value: "Corporate shares", detail: "Not fee-simple deeded units" },
      { label: "Market Share", value: "Niche", detail: "Primarily South Florida legacy" },
    ],
  },
};

const mixedUseMultifamily: PropertyTypeEntry = {
  slug: "mixed-use-multifamily",
  parentSlug: "multifamily",
  meta: {
    title: "Mixed-Use Multifamily for Sale in Florida | Apartments Over Retail",
    description: "Buy mixed-use multifamily in Florida. Apartments over retail in walkable urban submarkets.",
    keywords: "mixed use multifamily florida, apartments over retail",
  },
  page: {
    ...base,
    displayName: "Mixed-Use Multifamily",
    pluralDisplayName: "Mixed-Use Multifamily",
    heroHeadline: "Mixed-Use Multifamily in Florida",
    heroSubheadline: "Apartments over retail in walkable urban submarkets",
    heroBody: "Mixed-use multifamily combines ground-floor retail with apartment units above in a single building — a classic urban infill format that has grown rapidly in walkable Florida submarkets like Lake Nona, Winter Park, St. Pete, and Brickell. Cash flow diversification between residential and retail income streams, with walkable amenity tenants driving apartment premiums.",
    quickStats: [
      { label: "Typical Deal Size", value: "$10M – $80M", detail: "Urban infill mixed-use" },
      { label: "Common Cap Rate", value: "5.50% – 6.50%", detail: "Blended residential/retail yield" },
      { label: "Income Mix", value: "70–85% apt", detail: "Retail provides rent diversification" },
    ],
  },
};

export const multifamilyRegistry: PropertyTypeEntry[] = [
  multifamilyTopLevel,
  gardenStyle,
  midRise,
  highRise,
  lowRiseWalkUp,
  smallMultifamily,
  apartmentComplex,
  studentHousing,
  affordableLihtc,
  militaryHousing,
  condominium,
  coopBuilding,
  mixedUseMultifamily,
];
