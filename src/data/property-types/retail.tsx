import type { PropertyTypeEntry } from "./types";

/**
 * Shared retail content reused across subtypes.
 * Subtypes spread this and override the bits that differ.
 */
const retailPersonas = [
  {
    name: "1031 Exchange Buyers",
    tag: "Deadline-Driven",
    description:
      "Buyers on a 45/180-day clock who need a clean, fast-closing NNN replacement asset.",
    fit: "Retail NNN is the most transaction-efficient 1031 product in the country.",
  },
  {
    name: "Passive Income Investors",
    tag: "Mailbox Money",
    description:
      "Investors who want a management-free asset without TI, CapEx, or leasing activity.",
    fit: "Absolute NNN leases from credit tenants mean zero landlord responsibilities for 10–20 years.",
  },
  {
    name: "High-Income W-2 Earners",
    tag: "Tax Shelter Play",
    description:
      "Doctors, executives, and business owners using real estate to shelter active income.",
    fit: "Cost seg on retail pads typically allocates 20–30% of purchase price to accelerated depreciation.",
  },
  {
    name: "Family Offices & Trusts",
    tag: "Long Duration",
    description:
      "Allocators with multi-decade hold horizons who want inflation-protected income.",
    fit: "15–20 year primary terms with 10% bumps align with generational wealth mandates.",
  },
  {
    name: "Value-Add Operators",
    tag: "Force Appreciation",
    description:
      "Sponsors who buy below-market rents, roll tenants, split pads, and sell stabilized.",
    fit: "Multi-tenant retail offers the highest IRR potential in the asset class.",
  },
  {
    name: "REIT / Institutional Buyers",
    tag: "Scale Allocators",
    description:
      "Public and private REITs building diversified retail portfolios at $25M+ deal sizes.",
    fit: "Grocery-anchored and power centers with institutional tenancy fit fund mandates.",
  },
];

const floridaWhyReasons = [
  {
    title: "#1 Population Inflows",
    description:
      "Florida gained roughly 365,000 net new residents in 2023 — the most of any state. Every new rooftop adds retail demand.",
  },
  {
    title: "130M+ Annual Visitors",
    description:
      "Florida's tourism economy drives retail sales on top of resident spending. Orlando alone hosts 74M+ visitors/year.",
  },
  {
    title: "No State Income Tax",
    description:
      "The absence of state income tax attracts HNW retirees and business relocations, concentrating disposable income.",
  },
  {
    title: "Retiree Demographics",
    description:
      "Florida has the highest 65+ population share in the country — the backbone of daily-needs retail traffic.",
  },
  {
    title: "Corporate HQ Migration",
    description:
      "Citadel, Goldman, Blackstone, and others have expanded Florida offices since 2020. White-collar employment supports upscale retail.",
  },
  {
    title: "Daily-Needs Retail Resilience",
    description:
      "Grocery, drug, dollar, auto services, and QSR are recession- and e-commerce-resistant. Florida's daily-needs base is deep.",
  },
];

const retailListingSites = [
  {
    name: "Crexi",
    tag: "Tech-forward CRE marketplace",
    description:
      "Largest growing inventory of Florida retail listings, with detailed deal rooms and OM downloads.",
    floridaUrl: "https://www.crexi.com/properties/FL/Retail",
    orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Retail",
    allUrl: "https://www.crexi.com/properties/Retail",
  },
  {
    name: "LoopNet",
    tag: "Largest CRE listings network",
    description:
      "The biggest pool of retail listings in Florida. Search by city, county, or statewide.",
    floridaUrl: "https://www.loopnet.com/search/retail-property/fl/for-sale/",
    orlandoUrl:
      "https://www.loopnet.com/search/retail-property/orlando-fl/for-sale/",
    allUrl: "https://www.loopnet.com/search/retail-property/usa/for-sale/",
  },
  {
    name: "CBRE Deal Flow",
    tag: "Institutional broker platform",
    description:
      "CBRE's deal marketplace for institutional and mid-market retail across Florida.",
    floridaUrl: "https://www.cbre.com/properties",
    orlandoUrl: "https://www.cbre.com/properties",
    allUrl: "https://www.cbre.com/properties",
  },
];

// ══════════════════════════════════════════════════════════════════
// TOP-LEVEL: Retail
// ══════════════════════════════════════════════════════════════════

const retailTopLevel: PropertyTypeEntry = {
  slug: "retail",
  meta: {
    title:
      "Retail Commercial Properties for Sale in Florida | NNN Retail Investments",
    description:
      "Buy retail commercial real estate in Florida. Single-tenant NNN, strip centers, shopping centers, and pad sites across Orlando and Central Florida.",
    keywords:
      "retail properties florida, retail for sale orlando, nnn retail investment, strip center florida, pad site florida",
  },
  page: {
    displayName: "Retail",
    pluralDisplayName: "Retail Properties",
    heroImage: {
      src: "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-building-convenience-store-grocery-people-2577330.webp",
      alt: "Florida retail storefront with customer foot traffic",
    },
    heroEyebrow: "Retail Investment Opportunities",
    heroHeadline: "Retail Commercial Properties in Florida",
    heroSubheadline:
      "From single-tenant NNN pads to institutional shopping centers — Florida retail built for yield and growth",
    heroBody:
      "Retail remains the most diverse commercial real estate category in Florida. Whether you want a passive single-tenant NNN check from a credit drug store, a value-add strip center in an Orlando growth corridor, or a grocery-anchored shopping center with a durable rent roll, Florida's population tailwinds and tourism economy make it one of the strongest retail markets in the country. Cap rates typically run 5.5% – 8.0% depending on tenant credit, lease structure, and location.",
    quickStats: [
      {
        label: "Typical Deal Size",
        value: "$1.5M – $40M",
        detail: "Single-tenant pads through institutional centers",
      },
      {
        label: "Avg. NNN Lease Term",
        value: "10 – 20 yrs",
        detail: "With 5–10% rent bumps every 5 years",
      },
      {
        label: "Common Cap Rate",
        value: "5.5% – 8.0%",
        detail: "Credit NNN to multi-tenant value-add",
      },
    ],
    formatsTitle: (
      <>
        Florida Retail <span className="text-gold">Formats &amp; Subtypes</span>
      </>
    ),
    formatsIntro:
      "Retail covers a dozen distinct investment profiles — from the quietest single-tenant NNN pad to the most complex regional mall. Here are the most actively traded formats in Florida today.",
    formats: [
      {
        name: "Single-Tenant NNN (Freestanding)",
        capRate: "5.50% – 6.75%",
        footprint: "2,500 – 15,000 SF + 0.5–2 acres",
        note: "Drug stores, QSR pads, dollar stores, auto parts, and bank branches on 15–20 year absolute NNN leases. The passive-income workhorse of the asset class.",
      },
      {
        name: "Multi-Tenant Strip / Neighborhood Center",
        capRate: "6.50% – 8.00%",
        footprint: "8,000 – 60,000 SF + 1–5 acres",
        note: "3–15 tenant strips with a mix of daily-needs services. Higher cap rates compensate for more active landlord duties and rollover risk.",
      },
      {
        name: "Grocery-Anchored Shopping Center",
        capRate: "6.00% – 7.25%",
        footprint: "60,000 – 150,000 SF + 6–15 acres",
        note: "The institutional gold standard. Publix or Winn-Dixie anchor drives 40k+ weekly visits and supports shop-tenant rents.",
      },
      {
        name: "Power Center / Big-Box Anchored",
        capRate: "6.75% – 8.25%",
        footprint: "150,000 – 500,000 SF + 15+ acres",
        note: "Category-killer boxes (Home Depot, Target, Ross) with junior anchors and pad sites.",
      },
      {
        name: "Lifestyle / Mixed-Use Retail",
        capRate: "5.75% – 7.00%",
        footprint: "100,000 – 400,000 SF + 8–20 acres",
        note: "Open-air upscale centers with restaurants, fitness, and experiential tenants. Strongest in affluent Orlando submarkets.",
      },
      {
        name: "Pad Site / Outparcel",
        capRate: "5.25% – 6.50%",
        footprint: "2,000 – 6,000 SF + 0.75–1.5 acres",
        note: "Drive-thru QSR, coffee, bank, and C-store pads carved from larger centers. Tightest caps in retail.",
      },
    ],
    whyFloridaTitle: (
      <>
        Why Florida Is a <span className="text-gold">Top-3 Retail</span> Market
        in America
      </>
    ),
    whyFloridaIntro:
      "Population growth, tourism, retiree demographics, and no state income tax combine to give Florida retail the best long-term demand drivers in the country.",
    whyFloridaReasons: floridaWhyReasons,
    prosConsIntro:
      "Retail is the broadest asset class in CRE. It rewards buyers who understand tenant mix, lease structure, and trade area — and punishes those who don't.",
    pros: [
      {
        title: "Wide Risk/Reward Spectrum",
        description:
          "From 5.5% cap passive NNN to 9%+ cap value-add, retail offers more flexibility than any other CRE asset class.",
      },
      {
        title: "Strong 1031 Exchange Product",
        description:
          "Single-tenant NNN retail is the most popular 1031 replacement property in America.",
      },
      {
        title: "Inflation-Protected Cash Flow",
        description:
          "10-year NNN leases with 10% bumps every 5 years deliver bond-like yield with inflation protection.",
      },
      {
        title: "Tenant Pays the Expenses",
        description:
          "True NNN passes taxes, insurance, CAM, and structural maintenance to the tenant.",
      },
      {
        title: "Clear Exit Liquidity",
        description:
          "Retail has the deepest secondary market in CRE — hundreds of Florida deals traded quarterly.",
      },
      {
        title: "Value-Add Optionality",
        description:
          "Multi-tenant and pad-site redevelopment let operators force value via curation and outparcel splits.",
      },
    ],
    cons: [
      {
        title: "E-Commerce Vulnerability",
        description:
          "Apparel, electronics, and soft-goods retailers are structurally challenged. Focus on service, grocery, and daily-needs tenants.",
      },
      {
        title: "Tenant Credit Matters",
        description:
          "Retail is only as good as its tenants. Franchisee without corporate guarantee ≠ corporate-guaranteed Walgreens.",
      },
      {
        title: "Lease Rollover Risk",
        description:
          "3–5 leases expiring in the same 18-month window can crater NOI if leasing velocity slows.",
      },
      {
        title: "Site Selection Is Everything",
        description:
          "Traffic counts, ingress/egress, demographics, and co-tenancy drive performance more than operational variables.",
      },
      {
        title: "TI &amp; Leasing CapEx",
        description:
          "Even NNN deals see landlord TI and leasing commissions at rollover. Bake in realistic re-lease costs.",
      },
    ],
    personas: retailPersonas,
    operatorsIntro:
      "These are the national tenants most commonly found on Florida retail NNN leases. They drive the bulk of cap rate compression.",
    operators: [
      { name: "Publix", detail: "Florida's #1 grocery anchor. 40k+ weekly visits per store." },
      { name: "Walgreens / CVS", detail: "Investment-grade drug store NNN leaseback standard." },
      { name: "Dollar General / Dollar Tree", detail: "Aggressive Florida store growth on corporate guarantee." },
      { name: "Starbucks", detail: "Highest-demand pad tenant. Drive-thrus trade sub-5% caps." },
      { name: "Chick-fil-A / McDonald's", detail: "Ground-leased QSR pads among the most sought-after NNN in FL." },
      { name: "AutoZone / O'Reilly", detail: "Freestanding 15-year corporate NNN with predictable bumps." },
      { name: "Tractor Supply", detail: "Rural Florida growth story with long primary terms." },
      { name: "7-Eleven / Wawa / RaceTrac", detail: "C-store pads trade at sub-5% caps with fuel." },
    ],
    operatorsFootnote:
      "Note: credit quality varies. Always underwrite the specific lease guarantor, not just the brand.",
    underwritingIntro:
      "The metrics experienced retail investors stress-test on every deal.",
    underwritingMetrics: [
      { label: "Rent per SF", detail: "$18 – $35 PSF triple net for Florida retail." },
      { label: "Occupancy Cost Ratio", detail: "Tenant rent / sales should sit under 10%." },
      { label: "Traffic Counts", detail: "15,000+ VPD minimum for shop tenants; 25,000+ for pad sites." },
      { label: "Trade Area Population", detail: "3-mile ring of 30,000+ supports most daily-needs formats." },
      { label: "Median Household Income", detail: "$55k+ HHI within 3 miles for national retail tenants." },
      { label: "Lease Rollover Schedule", detail: "Ladder expirations — no more than 20% rolling in any year." },
    ],
    analyzerTitle: (
      <>
        Sample Retail NNN Deal <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerIntro:
      "Below is a representative Central Florida single-tenant NNN retail deal — a $3.8M drug store leaseback at a 6.25% cap with a 15-year corporate lease.",
    analyzerBadges: [
      { label: "Purchase: $3.8M", highlighted: true },
      { label: "NNN Lease" },
      { label: "Annual Rent: $237.5K" },
      { label: "Entry Cap: 6.25%" },
      { label: "13,650 SF" },
      { label: "10-Year Hold" },
    ],
    analyzerDealInputs: {
      assetType: "NNN",
      purchasePrice: "3800000",
      buildingSF: "13650",
      annualRent: "237500",
      rentGrowth: "2.0",
      vacancyRate: "0",
      downPaymentPct: "30",
      interestRate: "7.25",
      amortization: "25",
      closingCosts: "20000",
      loanOrigFee: "1.0",
      holdPeriod: "10",
      exitCapSpread: "0.50",
    },
    listingsIntro:
      "Want to see what's publicly listed right now? These marketplaces aggregate on-market retail opportunities across Florida.",
    listingSites: retailListingSites,
    listingsFootnote:
      "The best retail deals rarely hit these marketplaces. For off-market opportunities being traded between operators, family offices, and 1031 buyers,",
    faqIntro:
      "The questions we get most often from investors evaluating Florida retail deals.",
    faqs: [
      {
        q: "What's a typical cap rate for Florida retail in 2025?",
        a: "Single-tenant NNN retail with credit tenants is trading between 5.5% and 6.75% in Central Florida. Multi-tenant strip centers range from 6.5% to 8.0%. Grocery-anchored centers sit at 6.0% – 7.25%.",
      },
      {
        q: "Is Florida retail safe from e-commerce pressure?",
        a: "Not all retail. Apparel and soft-goods are challenged nationwide. Grocery, drug, QSR, auto services, fitness, medical, and daily-needs formats are largely Amazon-proof and dominate the Florida pipeline.",
      },
      {
        q: "What's the difference between NNN and absolute NNN?",
        a: "True NNN passes taxes, insurance, and CAM but landlord keeps roof/structure. Absolute NNN makes the tenant responsible for everything including roof and structure — the truly passive structure.",
      },
      {
        q: "Can I 1031 exchange into retail?",
        a: "Yes. Single-tenant NNN retail is the single most popular 1031 replacement product in America. Fast closes, clean leases, deep Florida deal flow.",
      },
      {
        q: "How do I underwrite tenant credit?",
        a: "Look for (1) corporate lease guarantees vs franchisee, (2) public parent credit rating, (3) store-level sales reporting, (4) occupancy cost ratio under 10%, (5) national footprint growth trajectory.",
      },
      {
        q: "What's the minimum deal size for Florida retail?",
        a: "Single-tenant NNN pads start around $1.5M – $2M for smaller QSR or dollar-store leasebacks. Strip centers start at $3M; institutional shopping centers at $8M – $10M.",
      },
      {
        q: "What are typical retail lease terms in Florida?",
        a: "15-year initial term is standard for single-tenant NNN. 5- or 10-year terms for multi-tenant strip tenants. Rent bumps usually 10% every 5 years with 2–4 renewal options.",
      },
    ],
    fitCheckIntro:
      'If you nod "yes" to three or more of these, Florida retail deserves a slot on your shortlist.',
    fitCheckQuestions: [
      "You want a broad spectrum of passive, management-light investment options.",
      "You value long lease terms from corporate-credit or investment-grade tenants.",
      "You need the bonus depreciation and cost segregation benefits of fee-simple real estate.",
      "You're on a 1031 exchange clock and need a fast-closing NNN deal.",
      "You want exposure to Florida's population growth and retirement demographics.",
    ],
    leadFormIntro:
      "Tell us about your retail investment criteria and we will send you current Florida opportunities — on and off market.",
    relatedResources: [
      {
        title: "NNN Properties Florida",
        description:
          "Every triple net lease format trading in Central Florida.",
        href: "/nnn-properties-florida",
      },
      {
        title: "Orlando Cap Rates Investor Guide",
        description:
          "Current cap rate trends by property type across the Orlando MSA.",
        href: "/blog/orlando-cap-rates-investor-guide",
      },
      {
        title: "Car Wash Properties Florida",
        description:
          "Deep dive on one of the fastest-consolidating retail-adjacent asset classes.",
        href: "/car-wash-properties-florida",
      },
    ],
  },
};

// ══════════════════════════════════════════════════════════════════
// SUBTYPES under Retail
// ══════════════════════════════════════════════════════════════════

const base = retailTopLevel.page;

const shoppingCenter: PropertyTypeEntry = {
  slug: "shopping-center",
  parentSlug: "retail",
  meta: {
    title: "Shopping Centers for Sale in Florida | Grocery-Anchored & Neighborhood",
    description:
      "Buy grocery-anchored, neighborhood, and community shopping centers in Florida. Publix-anchored, Winn-Dixie-anchored, and multi-tenant retail centers.",
    keywords:
      "shopping centers for sale florida, grocery anchored shopping center, publix anchored center, neighborhood center florida",
  },
  page: {
    ...base,
    displayName: "Shopping Center",
    pluralDisplayName: "Shopping Centers",
    heroEyebrow: "Shopping Center Investments",
    heroHeadline: "Shopping Centers for Sale in Florida",
    heroSubheadline:
      "Grocery-anchored, neighborhood, and community centers — the institutional backbone of Florida retail",
    heroBody:
      "Shopping centers are the largest and most investible subtype in Florida retail. Whether you want a grocery-anchored Publix center delivering durable daily-needs foot traffic, a neighborhood strip with laddered tenant mix, or a community center with junior anchors and pad sites, these assets combine yield, diversification, and long-term leasability. Current cap rates range from 6.0% for premium grocery-anchored to 8.5% for value-add multi-tenant strips.",
    quickStats: [
      { label: "Typical Deal Size", value: "$4M – $60M", detail: "Neighborhood strips to institutional centers" },
      { label: "Common Cap Rate", value: "6.0% – 8.5%", detail: "Grocery-anchored tightest, value-add widest" },
      { label: "Florida GLA Traded", value: "$3B+ /yr", detail: "Shopping-center volume across Florida MSAs" },
    ],
    formats: [
      { name: "Neighborhood Center", capRate: "6.75% – 8.00%", footprint: "30,000 – 125,000 SF", note: "Daily-needs grocery/drug anchor with 10–20 shop tenants." },
      { name: "Community Center", capRate: "6.50% – 8.00%", footprint: "125,000 – 400,000 SF", note: "Two+ anchors plus 15–40 shop tenants and pad sites." },
      { name: "Grocery-Anchored", capRate: "6.00% – 7.00%", footprint: "60,000 – 150,000 SF", note: "Publix or Winn-Dixie anchor drives 40k+ weekly visits." },
      { name: "Strip / Unanchored", capRate: "7.25% – 8.50%", footprint: "5,000 – 30,000 SF", note: "3–10 service and retail tenants on daily-needs corridors." },
    ],
    analyzerTitle: (
      <>
        Sample Neighborhood Center <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerIntro: "A representative Florida grocery-anchored center at a 7.0% cap rate with 94% occupancy.",
    analyzerBadges: [
      { label: "Purchase: $12M", highlighted: true },
      { label: "Grocery-Anchored" },
      { label: "NOI: $840K" },
      { label: "82,500 SF GLA" },
      { label: "94% Occupied" },
    ],
    analyzerDealInputs: {
      assetType: "NNN",
      purchasePrice: "12000000",
      buildingSF: "82500",
      annualRent: "840000",
      rentGrowth: "2.5",
      vacancyRate: "6",
      downPaymentPct: "30",
      interestRate: "7.25",
      amortization: "25",
      closingCosts: "60000",
      loanOrigFee: "1.0",
      holdPeriod: "10",
      exitCapSpread: "0.50",
    },
    faqs: [
      {
        q: "What's a typical cap rate for a grocery-anchored center?",
        a: "Publix-anchored neighborhood centers trade between 6.0% and 7.0% cap in Central Florida today. Premium Orlando submarkets push into high 5s; regional grocers add 25–75 bps of spread.",
      },
      {
        q: "How much does the anchor tenant matter?",
        a: "Enormously. Anchor drives 60–80% of center traffic, sets co-tenancy clauses, and is 35–50% of rent. A Publix-anchored center can trade 100+ bps tighter than a generic anchor.",
      },
      {
        q: "What happens if the anchor goes dark?",
        a: "Shop tenants have co-tenancy clauses — they can reduce rent, go to percentage-of-sales only, or terminate. Stress-test dark-anchor scenarios and reserve for releasing TI.",
      },
      {
        q: "Neighborhood vs community center — what's the difference?",
        a: "Neighborhood: 30k–125k SF, single grocery/drug anchor, 10–20 shops. Community: 125k–400k SF, two+ anchors, 15–40 shops and pads. Community has larger trade area.",
      },
      {
        q: "Can I 1031 exchange into a shopping center?",
        a: "Yes. Institutional grocery-anchored centers close in 45–75 days, well inside the 180-day deadline.",
      },
    ],
  },
};

const neighborhoodCenter: PropertyTypeEntry = {
  slug: "neighborhood-center",
  parentSlug: "retail",
  meta: {
    title: "Neighborhood Shopping Centers for Sale in Florida | Daily-Needs Retail",
    description: "Buy neighborhood shopping centers in Florida. Grocery and drug-anchored daily-needs centers with 10–20 shop tenants.",
    keywords: "neighborhood center florida, daily needs center, grocery anchored florida",
  },
  page: {
    ...base,
    displayName: "Neighborhood Center",
    pluralDisplayName: "Neighborhood Centers",
    heroEyebrow: "Neighborhood Center Investments",
    heroHeadline: "Neighborhood Shopping Centers in Florida",
    heroSubheadline: "The smallest institutional shopping-center format — and the most common",
    heroBody:
      "Neighborhood centers are the daily-needs workhorse of Florida retail. Typically 30,000 – 125,000 SF with a single grocery or drug anchor plus 10–20 shop tenants, they serve a 3-mile trade area with essential services like pharmacy, dry cleaner, nail salon, QSR, and fitness. Cap rates typically run 6.75% – 8.00% depending on anchor credit and tenant mix.",
    quickStats: [
      { label: "Typical Deal Size", value: "$4M – $18M", detail: "One anchor plus 10–20 shop tenants" },
      { label: "Common Cap Rate", value: "6.75% – 8.00%", detail: "Tighter with credit anchor" },
      { label: "Trade Area", value: "3-mile ring", detail: "30,000+ population minimum" },
    ],
    formats: [
      { name: "Grocery-Anchored Neighborhood", capRate: "6.25% – 7.00%", footprint: "50,000 – 125,000 SF", note: "Publix, Winn-Dixie, Aldi, or Sprouts anchor." },
      { name: "Drug-Anchored Neighborhood", capRate: "7.00% – 8.00%", footprint: "30,000 – 80,000 SF", note: "Walgreens or CVS pharmacy anchor plus shop tenants." },
      { name: "Service-Oriented Strip", capRate: "7.50% – 8.25%", footprint: "25,000 – 60,000 SF", note: "No anchor — mix of fitness, medical, QSR, and service tenants." },
    ],
    analyzerTitle: (
      <>
        Sample Neighborhood Center <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerBadges: [
      { label: "Purchase: $8.5M", highlighted: true },
      { label: "Publix-Anchored" },
      { label: "NOI: $600K" },
      { label: "65,000 SF" },
    ],
    analyzerDealInputs: {
      assetType: "NNN",
      purchasePrice: "8500000",
      buildingSF: "65000",
      annualRent: "600000",
      rentGrowth: "2.5",
      vacancyRate: "5",
      downPaymentPct: "30",
      interestRate: "7.25",
      amortization: "25",
      closingCosts: "45000",
      loanOrigFee: "1.0",
      holdPeriod: "10",
      exitCapSpread: "0.50",
    },
  },
};

const communityCenter: PropertyTypeEntry = {
  slug: "community-center",
  parentSlug: "retail",
  meta: {
    title: "Community Shopping Centers for Sale in Florida | Multi-Anchor Retail",
    description: "Buy community shopping centers in Florida. Multi-anchor centers with 125,000 – 400,000 SF, junior big-box, shop tenants, and pad sites.",
    keywords: "community center florida, multi-anchor retail, junior anchor shopping center",
  },
  page: {
    ...base,
    displayName: "Community Center",
    pluralDisplayName: "Community Centers",
    heroEyebrow: "Community Center Investments",
    heroHeadline: "Community Shopping Centers in Florida",
    heroSubheadline: "Two or more anchors, 15–40 shop tenants, and pad-site outparcels",
    heroBody:
      "Community centers step up from neighborhood scale to serve a larger trade area with two or more anchors — typically grocery plus a junior big box like TJ Maxx, Ross, or HomeGoods. Total GLA runs 125,000 – 400,000 SF across a main retail row plus pad-site outparcels. Institutional-quality community centers trade in the 6.5% – 8.0% cap rate range.",
    quickStats: [
      { label: "Typical Deal Size", value: "$15M – $60M", detail: "Institutional-scale community centers" },
      { label: "Common Cap Rate", value: "6.50% – 8.00%", detail: "With 2+ anchors and pad sites" },
      { label: "Total GLA", value: "125k – 400k SF", detail: "Main run + pad sites" },
    ],
  },
};

const powerCenter: PropertyTypeEntry = {
  slug: "power-center",
  parentSlug: "retail",
  meta: {
    title: "Power Centers for Sale in Florida | Big-Box Anchored Retail",
    description: "Buy power centers in Florida. Big-box anchored retail with Home Depot, Target, Ross, and other category-killer tenants.",
    keywords: "power center florida, big box retail, category killer anchor",
  },
  page: {
    ...base,
    displayName: "Power Center",
    pluralDisplayName: "Power Centers",
    heroEyebrow: "Power Center Investments",
    heroHeadline: "Power Centers in Florida",
    heroSubheadline: "Category-killer anchors, junior big-boxes, and pad-site outparcels",
    heroBody:
      "Power centers are large open-air retail developments anchored by category-killer big-box tenants like Home Depot, Target, Lowe's, Ross, and TJ Maxx. Total GLA typically runs 150,000 – 500,000+ SF with junior anchors and pad sites. Power centers trade wider than grocery-anchored because of concentration risk and big-box rollover, but offer scale and institutional appeal.",
    quickStats: [
      { label: "Typical Deal Size", value: "$25M – $120M", detail: "Institutional big-box anchored" },
      { label: "Common Cap Rate", value: "6.75% – 8.25%", detail: "Wider for concentration risk" },
      { label: "Total GLA", value: "150k – 500k+ SF", detail: "Multi-anchor big-box retail" },
    ],
  },
};

const regionalMall: PropertyTypeEntry = {
  slug: "regional-mall",
  parentSlug: "retail",
  meta: {
    title: "Regional Malls for Sale in Florida | Enclosed & Super-Regional",
    description: "Buy regional and super-regional malls in Florida. Department-store anchored enclosed centers with 500,000+ SF.",
    keywords: "regional mall florida, super regional mall, enclosed mall",
  },
  page: {
    ...base,
    displayName: "Regional Mall",
    pluralDisplayName: "Regional Malls",
    heroEyebrow: "Regional Mall Investments",
    heroHeadline: "Regional Malls in Florida",
    heroSubheadline: "Enclosed department-store-anchored centers at institutional scale",
    heroBody:
      "Regional and super-regional malls are the largest retail format in America — typically 500,000 SF and up with multiple department-store anchors and 100+ inline tenants. The mall category has been under structural pressure from e-commerce and anchor bankruptcies, but dominant centers in strong trade areas continue to perform and trade at 8–10%+ cap rates.",
    quickStats: [
      { label: "Typical Deal Size", value: "$50M – $500M+", detail: "Super-regional institutional scale" },
      { label: "Common Cap Rate", value: "8.0% – 12.0%+", detail: "Category under structural pressure" },
      { label: "Total GLA", value: "500k – 2M+ SF", detail: "Multi-anchor enclosed format" },
    ],
  },
};

const lifestyleCenter: PropertyTypeEntry = {
  slug: "lifestyle-center",
  parentSlug: "retail",
  meta: {
    title: "Lifestyle Centers for Sale in Florida | Open-Air Upscale Retail",
    description: "Buy lifestyle centers in Florida. Open-air upscale retail with restaurants, experiential tenants, and walkable design.",
    keywords: "lifestyle center florida, upscale retail, open air retail",
  },
  page: {
    ...base,
    displayName: "Lifestyle Center",
    pluralDisplayName: "Lifestyle Centers",
    heroEyebrow: "Lifestyle Center Investments",
    heroHeadline: "Lifestyle Centers in Florida",
    heroSubheadline: "Open-air upscale retail with restaurants, experiences, and walkable design",
    heroBody:
      "Lifestyle centers combine upscale retail, sit-down restaurants, fitness, and experiential tenants in a walkable open-air environment. They're the format of choice for affluent Florida submarkets like Winter Park, Lake Nona, Naples, and Sarasota. Strong lifestyle centers trade in the 5.75% – 7.0% cap range driven by premium shop rents and tenant demand.",
    quickStats: [
      { label: "Typical Deal Size", value: "$30M – $200M", detail: "Institutional upscale retail" },
      { label: "Common Cap Rate", value: "5.75% – 7.00%", detail: "Premium to neighborhood/community" },
      { label: "Shop Rents", value: "$35 – $65 PSF", detail: "Among the highest in Florida retail" },
    ],
  },
};

const outletCenter: PropertyTypeEntry = {
  slug: "outlet-center",
  parentSlug: "retail",
  meta: {
    title: "Outlet Centers for Sale in Florida | Tourist-Destination Retail",
    description: "Buy outlet centers in Florida. Tourist-destination retail with 100+ brand-name outlet tenants in Orlando, Miami, and Tampa.",
    keywords: "outlet center florida, outlet mall orlando, premium outlets",
  },
  page: {
    ...base,
    displayName: "Outlet Center",
    pluralDisplayName: "Outlet Centers",
    heroEyebrow: "Outlet Center Investments",
    heroHeadline: "Outlet Centers in Florida",
    heroSubheadline: "Tourist-destination retail with 100+ brand-name outlet tenants",
    heroBody:
      "Outlet centers in Florida benefit from a unique overlap — tourism destinations (Orlando, Miami, Tampa, Daytona) combined with a large resident base. The format has proven more resilient than traditional mall retail because it delivers experiential discount shopping that e-commerce can't fully replicate. Most institutional product is controlled by Simon (Premium Outlets) and Tanger.",
    quickStats: [
      { label: "Typical Deal Size", value: "$75M – $500M", detail: "Institutional tourist-corridor centers" },
      { label: "Common Cap Rate", value: "6.75% – 8.50%", detail: "Tourism risk factored in" },
      { label: "Total GLA", value: "300k – 800k SF", detail: "100+ outlet tenants" },
    ],
  },
};

const stripCenter: PropertyTypeEntry = {
  slug: "strip-center",
  parentSlug: "retail",
  meta: {
    title: "Strip Centers for Sale in Florida | Unanchored Retail Strips",
    description: "Buy strip centers in Florida. Unanchored multi-tenant retail strips with service, food, and daily-needs tenants.",
    keywords: "strip center florida, unanchored strip mall, multi tenant retail",
  },
  page: {
    ...base,
    displayName: "Strip Center",
    pluralDisplayName: "Strip Centers",
    heroEyebrow: "Strip Center Investments",
    heroHeadline: "Strip Centers for Sale in Florida",
    heroSubheadline: "Unanchored multi-tenant retail with high yield and active management",
    heroBody:
      "Unanchored strip centers are the highest-yield retail product in Florida — cap rates routinely run 7.25% – 8.50% on stabilized assets. Without an anchor driving traffic, strip centers rely on daily-needs tenant mix (fitness, medical, service, food) and strong location. More active landlord management, but the best IRR in retail for operators who can execute.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $10M", detail: "Unanchored multi-tenant" },
      { label: "Common Cap Rate", value: "7.25% – 8.50%", detail: "Highest yield in retail" },
      { label: "Tenant Count", value: "3 – 15 tenants", detail: "Daily-needs service mix" },
    ],
  },
};

const freestandingNnn: PropertyTypeEntry = {
  slug: "freestanding-nnn",
  parentSlug: "retail",
  meta: {
    title: "Freestanding NNN Retail for Sale in Florida | Single-Tenant Net Lease",
    description: "Buy freestanding single-tenant NNN retail in Florida. Drug stores, QSR pads, dollar stores, auto parts, and bank branches.",
    keywords: "freestanding nnn florida, single tenant nnn, net lease retail",
  },
  page: {
    ...base,
    displayName: "Freestanding NNN",
    pluralDisplayName: "Freestanding NNN Properties",
    heroEyebrow: "Single-Tenant NNN Investments",
    heroHeadline: "Freestanding NNN Retail in Florida",
    heroSubheadline: "The passive-income workhorse of Florida CRE",
    heroBody:
      "Freestanding single-tenant NNN retail is the most popular 1031 replacement product in America. Drug stores, QSR pads, dollar stores, auto parts, and bank branches on 15–20 year absolute NNN leases with corporate guarantees. The tenant handles taxes, insurance, CAM, and structural maintenance — you collect rent and watch the bumps compound.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1.5M – $8M", detail: "Single-tenant pad buildings" },
      { label: "Common Cap Rate", value: "5.50% – 6.75%", detail: "With investment-grade tenant credit" },
      { label: "Lease Term", value: "15 – 20 years", detail: "Primary term with renewal options" },
    ],
  },
};

const restaurantQsr: PropertyTypeEntry = {
  slug: "restaurant-qsr",
  parentSlug: "retail",
  meta: {
    title: "Restaurant & QSR Properties for Sale in Florida | Drive-Thru Pads",
    description: "Buy restaurant and quick-service restaurant properties in Florida. Chick-fil-A, McDonald's, Starbucks, and Wendy's pads.",
    keywords: "restaurant pad florida, qsr property, drive thru pad, chick-fil-a ground lease",
  },
  page: {
    ...base,
    displayName: "Restaurant / QSR",
    pluralDisplayName: "Restaurant & QSR Properties",
    heroEyebrow: "QSR & Restaurant Investments",
    heroHeadline: "Restaurant & QSR Properties in Florida",
    heroSubheadline: "Drive-thru pads from the most sought-after tenants in single-tenant NNN",
    heroBody:
      "Quick-service restaurant pads are among the most tightly traded retail investments in Florida. Chick-fil-A, Starbucks, McDonald's, and Wendy's ground leases routinely trade at sub-5% cap rates thanks to 20-year terms, corporate guarantees, and drive-thru throughput economics that shrug off downturns. Full-service restaurants trade wider — 6.5% – 8.0% — because of operator concentration risk.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $6M", detail: "Drive-thru QSR pad buildings" },
      { label: "Common Cap Rate", value: "4.75% – 6.50%", detail: "Ground-leased trades tightest" },
      { label: "Lease Term", value: "15 – 20 years", detail: "Often ground leased for 30+ years" },
    ],
  },
};

const bank: PropertyTypeEntry = {
  slug: "bank",
  parentSlug: "retail",
  meta: {
    title: "Bank Branch Properties for Sale in Florida | NNN Bank Leasebacks",
    description: "Buy freestanding bank branch properties in Florida. Wells Fargo, Chase, Bank of America, and regional bank leasebacks.",
    keywords: "bank branch florida, bank leaseback, nnn bank property",
  },
  page: {
    ...base,
    displayName: "Bank Branch",
    pluralDisplayName: "Bank Branch Properties",
    heroEyebrow: "Bank Branch Investments",
    heroHeadline: "Bank Branches for Sale in Florida",
    heroSubheadline: "Investment-grade tenant credit with long primary terms",
    heroBody:
      "Freestanding bank branches have been a staple NNN investment for decades — investment-grade tenant credit, corporate-guaranteed leases, 15–20 year primary terms, and prominent corner locations. The category has faced branch consolidation pressure from digital banking, but remaining branches tend to be the strongest-performing locations. Cap rates range from 5.75% to 7.25% depending on bank credit and remaining lease term.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $8M", detail: "Freestanding branch buildings" },
      { label: "Common Cap Rate", value: "5.75% – 7.25%", detail: "Investment-grade bank tenants" },
      { label: "Lease Term", value: "10 – 20 years", detail: "Corporate-guaranteed primary" },
    ],
  },
};

const autoDealership: PropertyTypeEntry = {
  slug: "auto-dealership",
  parentSlug: "retail",
  meta: {
    title: "Auto Dealership Properties for Sale in Florida | Franchise Dealerships",
    description: "Buy auto dealership properties in Florida. Franchise and independent dealership real estate with NNN leasebacks.",
    keywords: "auto dealership florida, dealership real estate, franchise dealer property",
  },
  page: {
    ...base,
    displayName: "Auto Dealership",
    pluralDisplayName: "Auto Dealership Properties",
    heroEyebrow: "Auto Dealership Investments",
    heroHeadline: "Auto Dealership Properties in Florida",
    heroSubheadline: "Large-format single-tenant NNN on high-traffic corridors",
    heroBody:
      "Auto dealership real estate is a specialty NNN category with large footprints (5–15+ acres), high-traffic highway locations, and long-term leases from franchise dealer groups. The category trades in the 6.5% – 8.0% range depending on franchise brand, dealer credit, and location. Strong dealer groups like Lithia, AutoNation, and Penske drive institutional demand.",
    quickStats: [
      { label: "Typical Deal Size", value: "$8M – $40M", detail: "Single-tenant NNN dealership" },
      { label: "Common Cap Rate", value: "6.50% – 8.00%", detail: "Franchise dealer NNN leaseback" },
      { label: "Site Size", value: "5 – 15 acres", detail: "Showroom + service + inventory lot" },
    ],
  },
};

const convenienceStore: PropertyTypeEntry = {
  slug: "convenience-store",
  parentSlug: "retail",
  meta: {
    title: "Convenience Stores & C-Store Pads for Sale in Florida | 7-Eleven, Wawa, RaceTrac",
    description: "Buy convenience store properties in Florida. 7-Eleven, Wawa, RaceTrac, and Circle K pads with fuel and NNN leaseback structure.",
    keywords: "convenience store florida, c-store pad, wawa property, 7-eleven leaseback",
  },
  page: {
    ...base,
    displayName: "Convenience Store",
    pluralDisplayName: "Convenience Store Properties",
    heroEyebrow: "C-Store & Gas Station Investments",
    heroHeadline: "Convenience Stores for Sale in Florida",
    heroSubheadline: "The tightest cap rates in Florida retail",
    heroBody:
      "C-store pads with fuel — especially from premium brands like Wawa, 7-Eleven, Buc-ee's, and RaceTrac — trade at some of the tightest cap rates in Florida retail. Wawa ground leases have traded at sub-5% cap rates. The format combines highway-corridor traffic, drive-thru coffee programs, food service, and fuel margins into a remarkably defensive tenant profile.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $12M", detail: "Pad + fuel canopy + retail building" },
      { label: "Common Cap Rate", value: "4.75% – 6.50%", detail: "Wawa at sub-5%, others wider" },
      { label: "Lease Term", value: "20 years", detail: "Often ground leased for 30+ years" },
    ],
  },
};

const pharmacy: PropertyTypeEntry = {
  slug: "pharmacy",
  parentSlug: "retail",
  meta: {
    title: "Pharmacy & Drugstore Properties for Sale in Florida | Walgreens, CVS",
    description: "Buy freestanding pharmacy and drugstore properties in Florida. Walgreens, CVS, and regional drugstore NNN leasebacks.",
    keywords: "pharmacy florida, walgreens property, cvs leaseback, drugstore nnn",
  },
  page: {
    ...base,
    displayName: "Pharmacy / Drugstore",
    pluralDisplayName: "Pharmacy Properties",
    heroEyebrow: "Pharmacy NNN Investments",
    heroHeadline: "Pharmacy & Drugstore Properties in Florida",
    heroSubheadline: "Investment-grade NNN with 20–25 year primary terms",
    heroBody:
      "Freestanding drugstore NNN is one of the original single-tenant net-lease product categories. Walgreens and CVS typically sign 25-year initial terms with corporate guarantees, making them among the longest-duration NNN leases available. The category has faced some headwinds from Amazon Pharmacy and retail-rationalization closures, but strong locations continue to trade at 6.0% – 7.0% cap rates.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3.5M – $8M", detail: "Freestanding drugstore buildings" },
      { label: "Common Cap Rate", value: "6.00% – 7.25%", detail: "Investment-grade tenant credit" },
      { label: "Lease Term", value: "20 – 25 years", detail: "Among the longest in NNN retail" },
    ],
  },
};

const bigBox: PropertyTypeEntry = {
  slug: "big-box",
  parentSlug: "retail",
  meta: {
    title: "Big Box Retail for Sale in Florida | Single-Tenant Anchor Buildings",
    description: "Buy big box retail properties in Florida. Single-tenant anchor buildings from Home Depot, Target, Ross, TJ Maxx, and others.",
    keywords: "big box retail florida, anchor building, category killer",
  },
  page: {
    ...base,
    displayName: "Big Box / Anchor",
    pluralDisplayName: "Big Box Retail Properties",
    heroEyebrow: "Big Box Anchor Investments",
    heroHeadline: "Big Box Retail Properties in Florida",
    heroSubheadline: "Category-killer single-tenant buildings with institutional scale",
    heroBody:
      "Single-tenant big box anchor buildings — Home Depot, Lowe's, Target, Ross, TJ Maxx, Costco — represent the largest single-tenant NNN deals in American retail. The category trades at 6.5% – 7.75% cap rates depending on tenant credit, remaining lease term, and store sales productivity.",
    quickStats: [
      { label: "Typical Deal Size", value: "$15M – $80M", detail: "Large-format single-tenant" },
      { label: "Common Cap Rate", value: "6.50% – 7.75%", detail: "Institutional anchor tenants" },
      { label: "Building Size", value: "80k – 220k SF", detail: "Category-killer formats" },
    ],
  },
};

const padSite: PropertyTypeEntry = {
  slug: "pad-site",
  parentSlug: "retail",
  meta: {
    title: "Pad Sites & Outparcels for Sale in Florida | Corner Location Retail",
    description: "Buy retail pad sites and outparcels in Florida. Drive-thru QSR, coffee, bank, and C-store pads carved from shopping centers.",
    keywords: "pad site florida, outparcel, retail pad, drive thru pad",
  },
  page: {
    ...base,
    displayName: "Pad Site",
    pluralDisplayName: "Pad Sites & Outparcels",
    heroEyebrow: "Pad Site Investments",
    heroHeadline: "Pad Sites & Outparcels in Florida",
    heroSubheadline: "The tightest cap rates in retail — drive-thru corner locations",
    heroBody:
      "Pad sites and outparcels carved from larger shopping centers are among the most valuable retail assets by cap rate. Drive-thru QSR, coffee, bank, and C-store pads trade at 5.25% – 6.50% cap rates thanks to 20-year NNN structures, premium tenant credit, and irreplaceable corner locations with signalized access.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1.5M – $5M", detail: "Single-tenant pad buildings" },
      { label: "Common Cap Rate", value: "5.25% – 6.50%", detail: "Tightest in retail" },
      { label: "Site Size", value: "0.75 – 1.5 acres", detail: "Corner-of-center outparcel" },
    ],
  },
};

const highStreetRetail: PropertyTypeEntry = {
  slug: "high-street-retail",
  parentSlug: "retail",
  meta: {
    title: "High Street Retail for Sale in Florida | Main Street Storefronts",
    description: "Buy high street retail and storefront properties in Florida. Walkable main street locations in downtown Orlando, Winter Park, and more.",
    keywords: "high street retail florida, main street storefront, downtown retail",
  },
  page: {
    ...base,
    displayName: "High Street Retail",
    pluralDisplayName: "High Street Retail Properties",
    heroEyebrow: "High Street Retail Investments",
    heroHeadline: "High Street Retail in Florida",
    heroSubheadline: "Walkable main street storefronts in premium submarkets",
    heroBody:
      "High street retail — main street storefronts in walkable downtown districts — is a premium subcategory in Florida. Think Park Avenue in Winter Park, Las Olas in Fort Lauderdale, Fifth Avenue in Naples, and downtown Sarasota. Cap rates vary widely based on location quality, tenant mix, and foot-traffic patterns.",
    quickStats: [
      { label: "Typical Deal Size", value: "$1M – $15M", detail: "Single-building storefronts" },
      { label: "Common Cap Rate", value: "5.50% – 7.50%", detail: "Submarket-dependent" },
      { label: "Shop Rents", value: "$35 – $85 PSF", detail: "Premium walkable locations" },
    ],
  },
};

export const retailRegistry: PropertyTypeEntry[] = [
  retailTopLevel,
  shoppingCenter,
  neighborhoodCenter,
  communityCenter,
  powerCenter,
  regionalMall,
  lifestyleCenter,
  outletCenter,
  stripCenter,
  freestandingNnn,
  restaurantQsr,
  bank,
  autoDealership,
  convenienceStore,
  pharmacy,
  bigBox,
  padSite,
  highStreetRetail,
];
