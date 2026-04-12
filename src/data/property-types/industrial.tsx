import type { PropertyTypeEntry } from "./types";

const industrialPersonas = [
  {
    name: "Institutional Allocators",
    tag: "Core / Core-Plus",
    description:
      "REITs, pension funds, and insurance capital building scale industrial portfolios.",
    fit: "Florida's I-4 corridor is a top-tier target market for institutional industrial capital.",
  },
  {
    name: "Owner-Users",
    tag: "User-Buyers",
    description:
      "Growing businesses buying their own warehouse or flex space to control occupancy costs.",
    fit: "Small bay flex and freestanding industrial sell quickly to SBA-financed user-buyers.",
  },
  {
    name: "Value-Add Sponsors",
    tag: "Reposition Plays",
    description:
      "Sponsors buying functionally obsolete industrial and repositioning through capital improvements.",
    fit: "Older Florida warehouses with low clear heights trade at big discounts to new construction.",
  },
  {
    name: "Last-Mile Logistics",
    tag: "Specialty Demand",
    description:
      "E-commerce and 3PL tenants looking for infill locations close to dense population centers.",
    fit: "Orlando, Tampa, Jacksonville, and Miami infill sites command premium rents.",
  },
];

const industrialListings = [
  {
    name: "Crexi",
    tag: "Tech-forward CRE marketplace",
    description: "Growing inventory of Florida industrial listings.",
    floridaUrl: "https://www.crexi.com/properties/FL/Industrial",
    orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Industrial",
    allUrl: "https://www.crexi.com/properties/Industrial",
  },
  {
    name: "LoopNet",
    tag: "Largest CRE listings network",
    description: "The biggest pool of industrial listings in Florida.",
    floridaUrl: "https://www.loopnet.com/search/industrial-property/fl/for-sale/",
    orlandoUrl: "https://www.loopnet.com/search/industrial-property/orlando-fl/for-sale/",
    allUrl: "https://www.loopnet.com/search/industrial-property/usa/for-sale/",
  },
  {
    name: "CBRE Deal Flow",
    tag: "Institutional broker platform",
    description: "Institutional industrial opportunities across Florida.",
    floridaUrl: "https://www.cbre.com/properties/for-sale/florida/industrial",
    orlandoUrl: "https://www.cbre.com/properties/for-sale/florida/industrial",
    allUrl: "https://www.cbre.com/properties/for-sale/industrial",
  },
];

const industrialTopLevel: PropertyTypeEntry = {
  slug: "industrial",
  meta: {
    title: "Industrial Properties for Sale in Florida | Warehouse, Distribution, Flex",
    description:
      "Buy industrial real estate in Florida. Warehouse, distribution, flex, cold storage, and IOS properties across Orlando and Central Florida.",
    keywords:
      "industrial for sale florida, warehouse orlando, distribution center, flex space florida, cold storage",
  },
  page: {
    displayName: "Industrial",
    pluralDisplayName: "Industrial Properties",
    heroEyebrow: "Industrial Investment Opportunities",
    heroHeadline: "Industrial Properties for Sale in Florida",
    heroSubheadline:
      "Warehouse, distribution, flex, cold storage, and IOS — the most in-demand CRE category in Florida",
    heroBody:
      "Industrial has been the best-performing major CRE asset class of the past decade, and Florida sits at the epicenter. The I-4 corridor between Tampa and Orlando, Jacksonville's port and rail infrastructure, and Miami-Doral's distribution hub have combined to make Florida one of the top-5 industrial markets in the country. E-commerce, last-mile logistics, and population growth drive relentless absorption. Cap rates run 5.75% – 7.50% for stabilized product, with infill urban sites commanding premium pricing.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $100M+", detail: "Small flex to institutional distribution" },
      { label: "Common Cap Rate", value: "5.75% – 7.50%", detail: "Infill and last-mile tightest" },
      { label: "Rent Growth", value: "8%+ YoY", detail: "Florida industrial rents still growing" },
    ],
    formats: [
      { name: "Modern Bulk Warehouse", capRate: "5.75% – 6.75%", footprint: "150k – 1M+ SF", note: "32'+ clear height, cross-docked, institutional spec buildings." },
      { name: "Last-Mile / Infill", capRate: "5.50% – 6.50%", footprint: "50k – 200k SF", note: "Smaller footprint in dense infill locations. Premium rents for e-commerce tenants." },
      { name: "Flex / R&D", capRate: "6.50% – 7.50%", footprint: "15k – 80k SF", note: "Office front, warehouse back. Popular with growing SMB tenants." },
      { name: "Cold Storage", capRate: "6.25% – 7.25%", footprint: "80k – 400k SF", note: "Refrigerated distribution. Thick insulation, refrigerated trailers, specialty tenant." },
      { name: "Industrial Outdoor Storage (IOS)", capRate: "6.75% – 8.00%", footprint: "2 – 15+ acres", note: "Gravel/asphalt yards for trucks, trailers, equipment. Hottest new category." },
      { name: "Small-Bay Multi-Tenant", capRate: "6.75% – 7.75%", footprint: "25k – 80k SF total", note: "Multi-tenant park of small 2k–8k SF units. Durable demand, active management." },
    ],
    whyFloridaTitle: (
      <>
        Why Florida Is a <span className="text-gold">Top-5 Industrial</span> Market
      </>
    ),
    whyFloridaReasons: [
      { title: "I-4 Logistics Corridor", description: "The Tampa-to-Orlando I-4 corridor is the most active industrial submarket in the Southeast." },
      { title: "Port Infrastructure", description: "PortMiami, Port Everglades, Port Tampa Bay, and JAXPORT give Florida unmatched logistics access." },
      { title: "Population Inflows", description: "Every new Florida resident adds last-mile e-commerce demand." },
      { title: "E-Commerce Fulfillment", description: "Amazon, FedEx, UPS, and major 3PLs continue to build out Florida fulfillment networks." },
      { title: "No State Income Tax", description: "Attracts business HQ relocations and keeps Florida cost-competitive for logistics." },
      { title: "Limited Land Supply", description: "Developable industrial land is scarce near population centers, supporting existing asset values." },
    ],
    prosConsIntro: "Industrial remains the most durable CRE asset class — but not every building in Florida is institutional-quality.",
    pros: [
      { title: "Best-Performing Asset Class", description: "Industrial has delivered the strongest NOI and rent growth in CRE for the past decade." },
      { title: "Deep Liquidity", description: "Institutional capital is chasing Florida industrial product at every scale." },
      { title: "Short Landlord CapEx", description: "Industrial requires meaningfully less TI than office or retail — mostly just dock seals and minor upgrades." },
      { title: "Strong Tenant Credit", description: "E-commerce giants, 3PLs, and manufacturers tend to sign long leases with corporate guarantees." },
      { title: "Durable Secular Tailwinds", description: "E-commerce penetration, reshoring, and supply-chain resilience all favor industrial demand." },
      { title: "Multiple Entry Points", description: "From $2M owner-user flex to $100M bulk distribution, every capital scale can play." },
    ],
    cons: [
      { title: "Obsolescence Risk", description: "Older low-clear-height buildings (24' or less) can become functionally obsolete for modern tenants." },
      { title: "Cap Rate Compression Ceiling", description: "Industrial cap rates are already at historic tights — less room for exit compression." },
      { title: "Concentration Risk", description: "Single-tenant industrial is as good as its tenant. Large vacancies can be slow to lease in secondary submarkets." },
      { title: "Land Availability", description: "Finding quality Florida industrial land for development is hard — most top sites are already spoken for." },
    ],
    personas: industrialPersonas,
    underwritingMetrics: [
      { label: "Clear Height", detail: "32' minimum for institutional modern bulk; 24' for flex" },
      { label: "Dock Ratio", detail: "1 dock per 10k SF for modern bulk distribution" },
      { label: "Truck Court Depth", detail: "130'+ for class A distribution; 60' minimum for flex" },
      { label: "Rent PSF", detail: "$9 – $16 PSF NNN for modern bulk in Florida" },
      { label: "Power Supply", detail: "Amperage and 3-phase requirements for manufacturing tenants" },
      { label: "Land Coverage", detail: "25–40% site coverage typical for modern distribution" },
    ],
    analyzerTitle: (
      <>
        Sample Industrial NNN Deal{" "}
        <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerIntro: "A representative Orlando MSA single-tenant distribution warehouse — $9.5M purchase at a 6.5% cap rate with 12 years remaining lease term.",
    analyzerBadges: [
      { label: "Purchase: $9.5M", highlighted: true },
      { label: "NNN Single-Tenant" },
      { label: "NOI: $617K" },
      { label: "120,000 SF" },
      { label: "12-yr Lease" },
    ],
    analyzerDealInputs: {
      assetType: "NNN",
      purchasePrice: "9500000",
      buildingSF: "120000",
      annualRent: "617000",
      rentGrowth: "3.0",
      vacancyRate: "0",
      downPaymentPct: "30",
      interestRate: "7.0",
      amortization: "25",
      closingCosts: "55000",
      loanOrigFee: "1.0",
      holdPeriod: "10",
      exitCapSpread: "0.50",
    },
    listingsIntro: "Want to see what's publicly listed? These marketplaces aggregate Florida industrial.",
    listingSites: industrialListings,
    listingsFootnote: "Institutional industrial product often trades off-market directly between REITs and sponsors.",
    faqs: [
      {
        q: "Why is Florida industrial so in-demand right now?",
        a: "Florida combines population growth, port infrastructure, the I-4 corridor, and no state income tax. E-commerce fulfillment, 3PL expansion, and last-mile logistics have driven Florida industrial to among the best NOI growth of any CRE asset class.",
      },
      {
        q: "What's the difference between bulk distribution and flex?",
        a: "Modern bulk distribution: 150,000 – 1M+ SF, 32'+ clear height, cross-docked, institutional tenants. Flex: 15,000 – 80,000 SF, office-front warehouse, smaller tenants, 18–24' clear. Flex trades at wider cap rates and appeals to SMB buyers.",
      },
      {
        q: "What is IOS (Industrial Outdoor Storage)?",
        a: "IOS is fenced, paved/graveled outdoor yards used to store trucks, trailers, containers, equipment, and materials. It has emerged as one of the hottest new industrial categories because supply is constrained by zoning and demand is surging from 3PL and logistics tenants.",
      },
      {
        q: "How do I underwrite tenant rollover in industrial?",
        a: "Modern bulk in a strong submarket releases quickly — 6–12 months vacancy is typical. Older or specialized buildings in secondary markets can take much longer. Always underwrite market rent, downtime, and releasing TI in your year-10 cash flow.",
      },
    ],
    fitCheckIntro: 'If you nod "yes" to three or more of these, Florida industrial deserves a top-tier spot in your portfolio.',
    fitCheckQuestions: [
      "You want exposure to the best-performing CRE asset class of the past decade.",
      "You believe in the durability of e-commerce and last-mile logistics demand.",
      "You value low landlord CapEx and simple lease structures.",
      "You can execute on Florida land constraints as a competitive moat.",
      "You have capital to compete with institutional allocators on quality product.",
    ],
    leadFormIntro: "Tell us about your industrial investment criteria and we will send you current Florida opportunities.",
  },
};

const base = industrialTopLevel.page;

const warehouse: PropertyTypeEntry = {
  slug: "warehouse",
  parentSlug: "industrial",
  meta: {
    title: "Warehouse Properties for Sale in Florida | Bulk Distribution Warehouses",
    description: "Buy warehouse properties in Florida. Modern bulk distribution, cross-dock, and single-tenant warehouse properties.",
    keywords: "warehouse for sale florida, bulk distribution, cross dock warehouse",
  },
  page: {
    ...base,
    displayName: "Warehouse",
    pluralDisplayName: "Warehouse Properties",
    heroEyebrow: "Warehouse Investments",
    heroHeadline: "Warehouse Properties for Sale in Florida",
    heroSubheadline: "Modern bulk distribution and single-tenant warehouse buildings",
    heroBody:
      "Florida bulk warehouses — 150,000 SF to 1M+ SF with 32'+ clear heights, cross-docked configurations, and modern truck court depths — are among the most sought-after institutional CRE investments in America. The Florida market has seen aggressive absorption from e-commerce, 3PLs, and manufacturing tenants. Cap rates for stabilized modern bulk run 5.75% – 6.75%.",
    quickStats: [
      { label: "Typical Deal Size", value: "$8M – $100M+", detail: "Single-tenant or multi-tenant bulk" },
      { label: "Common Cap Rate", value: "5.75% – 6.75%", detail: "Modern bulk distribution" },
      { label: "Building Size", value: "150k – 1M+ SF", detail: "Institutional bulk scale" },
    ],
  },
};

const distributionCenter: PropertyTypeEntry = {
  slug: "distribution-center",
  parentSlug: "industrial",
  meta: {
    title: "Distribution Centers for Sale in Florida | Cross-Dock & Last-Mile",
    description: "Buy distribution centers in Florida. Cross-dock, last-mile, and regional distribution facilities for e-commerce and 3PL tenants.",
    keywords: "distribution center florida, cross dock, last mile warehouse",
  },
  page: {
    ...base,
    displayName: "Distribution Center",
    pluralDisplayName: "Distribution Centers",
    heroEyebrow: "Distribution Center Investments",
    heroHeadline: "Distribution Centers in Florida",
    heroSubheadline: "Cross-dock, last-mile, and regional distribution facilities",
    heroBody:
      "Distribution centers are the largest and most institutional industrial format. Florida hosts regional distribution infrastructure for Amazon, FedEx, UPS, Walmart, Target, and dozens of 3PL operators. The I-4 corridor between Tampa and Orlando has become one of the most active distribution markets in the country thanks to central Florida population reach and rail/interstate access.",
    quickStats: [
      { label: "Typical Deal Size", value: "$25M – $300M+", detail: "Institutional distribution scale" },
      { label: "Common Cap Rate", value: "5.50% – 6.50%", detail: "Credit tenant institutional product" },
      { label: "Building Size", value: "300k – 1M+ SF", detail: "Regional distribution scale" },
    ],
  },
};

const manufacturing: PropertyTypeEntry = {
  slug: "manufacturing",
  parentSlug: "industrial",
  meta: {
    title: "Manufacturing Facilities for Sale in Florida | Heavy Industrial Manufacturing",
    description: "Buy manufacturing facilities in Florida. Light and heavy manufacturing buildings with power, crane, and truck-court infrastructure.",
    keywords: "manufacturing facility florida, industrial manufacturing, reshoring",
  },
  page: {
    ...base,
    displayName: "Manufacturing",
    pluralDisplayName: "Manufacturing Facilities",
    heroEyebrow: "Manufacturing Facility Investments",
    heroHeadline: "Manufacturing Facilities in Florida",
    heroSubheadline: "Purpose-built facilities serving the reshoring and defense manufacturing tailwind",
    heroBody:
      "Manufacturing facilities are purpose-built industrial buildings with specialty infrastructure — high amperage power, overhead cranes, reinforced slabs, process ventilation — serving food, beverage, aerospace, defense, medical device, and light manufacturing tenants. Florida's reshoring tailwind, Space Coast aerospace hub, and defense contractor demand drive strong fundamentals for well-located manufacturing real estate.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $60M", detail: "Single-tenant manufacturing" },
      { label: "Common Cap Rate", value: "7.00% – 8.50%", detail: "Specialized tenant profile" },
      { label: "Power Spec", value: "2000A+ 3-phase", detail: "Typical manufacturing requirement" },
    ],
  },
};

const flexRd: PropertyTypeEntry = {
  slug: "flex-rd",
  parentSlug: "industrial",
  meta: {
    title: "Flex & R&D Industrial for Sale in Florida | Office-Warehouse Flex Space",
    description: "Buy flex and R&D industrial buildings in Florida. Combined office-warehouse flex space popular with SMB tenants.",
    keywords: "flex space florida, r&d industrial, office warehouse flex",
  },
  page: {
    ...base,
    displayName: "Flex / R&D",
    pluralDisplayName: "Flex & R&D Properties",
    heroEyebrow: "Flex Industrial Investments",
    heroHeadline: "Flex & R&D Industrial in Florida",
    heroSubheadline: "Combined office-warehouse flex space — SMB's favorite format",
    heroBody:
      "Flex industrial buildings combine office storefront at the front with warehouse/shop space at the back — typically 2,000 – 10,000 SF per unit, 18–24' clear height, grade-level or small dock doors. Flex is the single most in-demand format for small businesses in Florida. Multi-tenant flex parks trade at 6.5% – 7.5% cap rates with steady absorption and owner-occupier exit optionality.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $20M", detail: "Multi-tenant flex parks" },
      { label: "Common Cap Rate", value: "6.50% – 7.50%", detail: "Steady owner-user exit demand" },
      { label: "Unit Size", value: "2k – 10k SF", detail: "Small-bay flex units" },
    ],
  },
};

const lightIndustrial: PropertyTypeEntry = {
  slug: "light-industrial",
  parentSlug: "industrial",
  meta: {
    title: "Light Industrial for Sale in Florida | Small-Bay Industrial Properties",
    description: "Buy light industrial properties in Florida. Small-bay multi-tenant industrial parks for trades, contractors, and distribution.",
    keywords: "light industrial florida, small bay industrial, multi tenant industrial",
  },
  page: {
    ...base,
    displayName: "Light Industrial",
    pluralDisplayName: "Light Industrial Properties",
    heroEyebrow: "Light Industrial Investments",
    heroHeadline: "Light Industrial in Florida",
    heroSubheadline: "Small-bay multi-tenant industrial serving trades, contractors, and SMB",
    heroBody:
      "Light industrial is the smaller, multi-tenant cousin of bulk distribution — typically 1,500 – 5,000 SF bays with grade-level roll-up doors, modest office build-out, and service-corridor locations. Appeals to plumbers, HVAC contractors, cabinetry, auto repair, cabinetmakers, and dozens of other small trade tenants. Durable demand and steady owner-user exit pricing.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1.5M – $10M", detail: "Multi-tenant small-bay parks" },
      { label: "Common Cap Rate", value: "6.75% – 8.00%", detail: "Active management trade-off" },
      { label: "Unit Size", value: "1,500 – 5,000 SF", detail: "Trade and contractor bays" },
    ],
  },
};

const heavyIndustrial: PropertyTypeEntry = {
  slug: "heavy-industrial",
  parentSlug: "industrial",
  meta: {
    title: "Heavy Industrial for Sale in Florida | Heavy Manufacturing Facilities",
    description: "Buy heavy industrial properties in Florida. Heavy manufacturing, steel, and industrial processing facilities.",
    keywords: "heavy industrial florida, heavy manufacturing, industrial processing",
  },
  page: {
    ...base,
    displayName: "Heavy Industrial",
    pluralDisplayName: "Heavy Industrial Properties",
    heroEyebrow: "Heavy Industrial Investments",
    heroHeadline: "Heavy Industrial in Florida",
    heroSubheadline: "Purpose-built heavy manufacturing, steel, and processing facilities",
    heroBody:
      "Heavy industrial real estate houses energy-intensive manufacturing, steel fabrication, chemical processing, metalworking, and similar uses that require specialty infrastructure — reinforced foundations, overhead cranes, high amperage power, dust collection, and environmental permits. A niche specialty category with narrow but steady demand.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $30M", detail: "Single-tenant heavy manufacturing" },
      { label: "Common Cap Rate", value: "7.50% – 9.00%", detail: "Specialty tenant pool" },
      { label: "Environmental", value: "Phase I/II required", detail: "Legacy use demands careful diligence" },
    ],
  },
};

const coldStorage: PropertyTypeEntry = {
  slug: "cold-storage",
  parentSlug: "industrial",
  meta: {
    title: "Cold Storage & Refrigerated Warehouses for Sale in Florida",
    description: "Buy refrigerated and cold storage warehouses in Florida. Specialty cold chain industrial for food, pharma, and produce distribution.",
    keywords: "cold storage florida, refrigerated warehouse, cold chain industrial",
  },
  page: {
    ...base,
    displayName: "Cold Storage",
    pluralDisplayName: "Cold Storage Properties",
    heroEyebrow: "Cold Storage Investments",
    heroHeadline: "Refrigerated & Cold Storage in Florida",
    heroSubheadline: "Specialty cold chain industrial for food, pharma, and produce distribution",
    heroBody:
      "Cold storage warehouses serve food, grocery, pharmaceutical, and produce distribution tenants with temperature-controlled storage (35°F cooler through -20°F freezer). Florida's produce and food distribution economy drives strong baseline demand. Cold storage trades at 6.25% – 7.25% cap rates for institutional-quality product — tighter than dry warehouse because of replacement cost protection and specialty tenant lock-in.",
    quickStats: [
      { label: "Typical Deal Size", value: "$10M – $80M", detail: "Single-tenant cold storage" },
      { label: "Common Cap Rate", value: "6.25% – 7.25%", detail: "Institutional specialty" },
      { label: "Replacement Cost", value: "$250+ PSF", detail: "2–3x dry warehouse cost" },
    ],
  },
};

const truckTerminal: PropertyTypeEntry = {
  slug: "truck-terminal",
  parentSlug: "industrial",
  meta: {
    title: "Truck Terminals & Transportation Facilities for Sale in Florida",
    description: "Buy truck terminal and transportation facility properties in Florida. Cross-dock, LTL freight, and trucking terminals.",
    keywords: "truck terminal florida, ltl freight, trucking facility",
  },
  page: {
    ...base,
    displayName: "Truck Terminal",
    pluralDisplayName: "Truck Terminal Properties",
    heroEyebrow: "Trucking Facility Investments",
    heroHeadline: "Truck Terminals & Transportation Facilities in Florida",
    heroSubheadline: "Specialty cross-dock facilities for LTL freight and trucking operations",
    heroBody:
      "Truck terminals are specialty industrial facilities with cross-dock building design, massive paved yards for tractor-trailer staging, and fueling/maintenance infrastructure. Florida's logistics economy drives steady demand from LTL carriers, regional truckers, and specialty freight operators. A niche sub-category with narrow tenant pools but high barriers to entry.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $30M", detail: "Single-tenant terminals" },
      { label: "Common Cap Rate", value: "7.00% – 8.25%", detail: "Specialty tenant profile" },
      { label: "Site Size", value: "8 – 30 acres", detail: "Large truck court staging" },
    ],
  },
};

const dataCenter: PropertyTypeEntry = {
  slug: "data-center",
  parentSlug: "industrial",
  meta: {
    title: "Data Centers for Sale in Florida | Data Center Real Estate",
    description: "Buy data center real estate in Florida. Powered shell, wholesale, and colocation data center facilities.",
    keywords: "data center florida, powered shell, colocation real estate",
  },
  page: {
    ...base,
    displayName: "Data Center",
    pluralDisplayName: "Data Center Properties",
    heroEyebrow: "Data Center Investments",
    heroHeadline: "Data Centers in Florida",
    heroSubheadline: "Powered-shell and mission-critical data center real estate",
    heroBody:
      "Data centers are the fastest-growing segment of industrial real estate, driven by AI compute demand, cloud services, and 5G infrastructure. Institutional-quality data centers trade at 5.5% – 7.0% cap rates with extraordinarily long leases to hyperscale tenants like Amazon Web Services, Microsoft, Google, and Meta. Powered-shell development plays offer higher yields for sponsors who can execute.",
    quickStats: [
      { label: "Typical Deal Size", value: "$25M – $500M+", detail: "Institutional mission-critical" },
      { label: "Common Cap Rate", value: "5.50% – 7.00%", detail: "Hyperscale tenants tightest" },
      { label: "Power Spec", value: "10MW+", detail: "Critical power to building" },
    ],
  },
};

const ios: PropertyTypeEntry = {
  slug: "industrial-outdoor-storage",
  parentSlug: "industrial",
  meta: {
    title: "Industrial Outdoor Storage (IOS) for Sale in Florida | Truck & Trailer Yards",
    description: "Buy industrial outdoor storage (IOS) in Florida. Fenced yards for trucks, trailers, containers, and equipment storage.",
    keywords: "ios florida, industrial outdoor storage, truck yard, trailer storage",
  },
  page: {
    ...base,
    displayName: "Industrial Outdoor Storage (IOS)",
    pluralDisplayName: "IOS Properties",
    heroEyebrow: "Industrial Outdoor Storage",
    heroHeadline: "Industrial Outdoor Storage (IOS) in Florida",
    heroSubheadline: "The hottest new industrial category — fenced yards for trucks, trailers, and equipment",
    heroBody:
      "Industrial Outdoor Storage (IOS) is the fastest-emerging CRE category of the past 5 years. These are fenced, paved/graveled outdoor yards — 2 to 15+ acres — used to store tractor-trailers, containers, heavy equipment, materials, and vehicles. IOS supply is structurally constrained by zoning while demand has surged from logistics, 3PL, construction, and last-mile tenants. Cap rates have compressed dramatically but still range 6.75% – 8.00% on institutional-quality product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $25M", detail: "Single-tenant or multi-user yards" },
      { label: "Common Cap Rate", value: "6.75% – 8.00%", detail: "Compressing rapidly" },
      { label: "Site Size", value: "2 – 15+ acres", detail: "Fenced paved yards" },
    ],
  },
};

export const industrialRegistry: PropertyTypeEntry[] = [
  industrialTopLevel,
  warehouse,
  distributionCenter,
  manufacturing,
  flexRd,
  lightIndustrial,
  heavyIndustrial,
  coldStorage,
  truckTerminal,
  dataCenter,
  ios,
];
