/**
 * Central Florida submarkets used for /cap-rates/[submarket] pages.
 * Cap rate ranges are illustrative placeholders — replace with
 * current data as it becomes available each quarter.
 */

export interface CapRateRow {
  assetClass: string;
  range: string;        // e.g. "5.5% - 7.0%"
  trend: "firming" | "stable" | "softening";
  notes: string;
}

export interface SubmarketData {
  slug: string;
  name: string;
  summary: string;        // 2-3 sentence overview
  demandDrivers: string[];
  capRates: CapRateRow[];
  outlook: string;        // 1-2 paragraph forward-looking view
}

export const submarkets: SubmarketData[] = [
  {
    slug: "lake-nona",
    name: "Lake Nona",
    summary:
      "Lake Nona is Central Florida's medical and life sciences hub. Demand is concentrated in medical office, Class A multifamily, and retail supporting the rapidly expanding residential base.",
    demandDrivers: [
      "Medical City campus (UCF Medical, Nemours, VA, Orlando Health)",
      "KPMG Lakehouse corporate training facility",
      "Ongoing master-planned residential absorption",
      "New retail and F&B development pipeline",
    ],
    capRates: [
      { assetClass: "Medical Office (MOB)", range: "5.75% - 6.75%", trend: "stable", notes: "Credit-tenant MOB trades tightest in the Orlando metro." },
      { assetClass: "Class A Multifamily", range: "4.75% - 5.75%", trend: "firming", notes: "Strong absorption drives institutional interest." },
      { assetClass: "NNN Retail", range: "5.25% - 6.25%", trend: "stable", notes: "Credit-tenant QSR and services dominate." },
      { assetClass: "Mixed-Use Retail", range: "6.25% - 7.25%", trend: "stable", notes: "Higher cap rate reflects lease-up risk in newer developments." },
    ],
    outlook:
      "Lake Nona's cap rates are expected to remain among the tightest in Central Florida. Institutional interest continues to drive pricing for medical office and multifamily, while smaller retail and mixed-use product offers a yield premium for private capital. Watch for new supply coming online to assess absorption impact on Class A multifamily pricing.",
  },
  {
    slug: "downtown-orlando",
    name: "Downtown Orlando",
    summary:
      "Downtown Orlando is the urban core with a mix of Class A and B office product, adaptive reuse buildings, and growing multifamily infill. Fundamentals reflect the broader recovery of CBD office in post-pandemic markets.",
    demandDrivers: [
      "Class A office concentration with regional and corporate HQs",
      "Courts, government, and financial services",
      "Growing multifamily infill and adaptive reuse",
      "SunRail station connectivity",
    ],
    capRates: [
      { assetClass: "Class A Office", range: "7.5% - 9.0%", trend: "softening", notes: "Office cap rates have expanded post-pandemic." },
      { assetClass: "Class B Office", range: "8.5% - 10.5%", trend: "softening", notes: "Value-add pricing for older product." },
      { assetClass: "Urban Multifamily", range: "5.25% - 6.25%", trend: "stable", notes: "Infill product commands premium pricing." },
      { assetClass: "Street Retail", range: "6.25% - 7.5%", trend: "stable", notes: "F&B and experiential retail dominate tenant mix." },
    ],
    outlook:
      "Downtown Orlando office pricing has reset meaningfully and offers the best risk-adjusted entry for value-add investors willing to underwrite lease-up. Multifamily fundamentals remain strong. Watch for conversion opportunities as owners of older office product explore residential repositioning.",
  },
  {
    slug: "maitland-winter-park",
    name: "Maitland & Winter Park",
    summary:
      "Maitland and Winter Park anchor Central Florida's most established suburban office and retail submarkets. Tenant retention is high, demographics are strong, and developable land is scarce.",
    demandDrivers: [
      "Maitland Center suburban office concentration",
      "Park Avenue retail corridor with near-zero vacancy",
      "Affluent residential base drives retail and medical demand",
      "Rollins College educational anchor",
    ],
    capRates: [
      { assetClass: "Class A Office", range: "7.0% - 8.25%", trend: "stable", notes: "Strong tenant retention supports pricing." },
      { assetClass: "Medical Office", range: "5.75% - 7.0%", trend: "stable", notes: "AdventHealth and independent practice demand." },
      { assetClass: "Retail (Park Avenue)", range: "5.5% - 6.75%", trend: "firming", notes: "Trophy retail trades at premium cap rates." },
      { assetClass: "Neighborhood Retail", range: "6.5% - 7.75%", trend: "stable", notes: "Well-leased neighborhood centers remain liquid." },
    ],
    outlook:
      "Maitland and Winter Park cap rates reflect the premium investors are willing to pay for demographic stability. Limited new supply, long-term tenant relationships, and top-tier demographics make this submarket a priority for 1031 exchange buyers. Pricing is expected to remain firm across most asset classes.",
  },
  {
    slug: "i-4-corridor",
    name: "I-4 Corridor",
    summary:
      "The I-4 corridor is the industrial and logistics backbone of Central Florida. Warehouse, distribution, and flex demand continues to outpace new supply, driving rent growth well above the national average.",
    demandDrivers: [
      "E-commerce and third-party logistics (3PL) expansion",
      "One-day drive to 20 million consumers",
      "Proximity to CSX intermodal and Orlando International Airport",
      "Ongoing industrial development pipeline",
    ],
    capRates: [
      { assetClass: "Class A Industrial", range: "5.75% - 6.75%", trend: "stable", notes: "Institutional capital dominates pricing." },
      { assetClass: "Class B Industrial", range: "6.75% - 8.0%", trend: "stable", notes: "Owner-user demand provides downside protection." },
      { assetClass: "Flex/Multi-Tenant", range: "7.0% - 8.5%", trend: "firming", notes: "Smaller tenants willing to pay premium for quality product." },
      { assetClass: "Cold Storage", range: "6.0% - 7.25%", trend: "firming", notes: "Specialized product trades above general industrial." },
    ],
    outlook:
      "I-4 corridor industrial remains the most sought-after asset class in Central Florida. New supply has begun to moderate rent growth in the Class A segment, but vacancy remains historically low. Class B and flex product continue to offer the best risk-adjusted returns for private investors.",
  },
  {
    slug: "international-drive",
    name: "International Drive (I-Drive)",
    summary:
      "The International Drive corridor is the heart of Central Florida's tourism and entertainment economy. Commercial real estate demand is concentrated in hospitality, experiential retail, and restaurant space.",
    demandDrivers: [
      "Universal Studios, SeaWorld, and Orange County Convention Center",
      "75 million+ annual visitors to the region",
      "Hospitality and F&B tenant demand",
      "Experiential entertainment concepts",
    ],
    capRates: [
      { assetClass: "Hospitality (Select Service)", range: "8.0% - 10.0%", trend: "stable", notes: "Cap rates reflect operating volatility." },
      { assetClass: "Tourist-Corridor Retail", range: "6.0% - 7.5%", trend: "stable", notes: "Credit tenant QSR trades tighter." },
      { assetClass: "Restaurant Real Estate", range: "5.75% - 7.25%", trend: "stable", notes: "Drive-thru and pad sites in highest demand." },
      { assetClass: "Entertainment Box Space", range: "7.5% - 9.0%", trend: "softening", notes: "Location-dependent and operator-driven." },
    ],
    outlook:
      "I-Drive cap rates tend to reflect the strength of the current tourism cycle. Credit-tenant QSR and drive-thru real estate remains the most defensible asset class in this submarket. Investors should underwrite carefully for operator credit and location quality.",
  },
  {
    slug: "sand-lake-dr-phillips",
    name: "Sand Lake Road / Dr. Phillips",
    summary:
      "The Sand Lake Road and Dr. Phillips corridor is one of Orlando's most affluent retail and restaurant destinations, serving the affluent residential neighborhoods of SW Orange County and tourism corridor proximity.",
    demandDrivers: [
      "Affluent residential base with high disposable income",
      "Restaurant Row — Orlando's premier dining corridor",
      "High-end retail and lifestyle concepts",
      "Strong medical office demand from Dr. Phillips Hospital",
    ],
    capRates: [
      { assetClass: "Premium Retail", range: "5.75% - 7.0%", trend: "firming", notes: "High-quality retail trades at premium pricing." },
      { assetClass: "Restaurant Real Estate", range: "5.5% - 6.75%", trend: "firming", notes: "Limited supply of quality restaurant locations." },
      { assetClass: "Medical Office", range: "6.25% - 7.25%", trend: "stable", notes: "Dr. Phillips Hospital anchors demand." },
      { assetClass: "Neighborhood Center", range: "6.5% - 7.75%", trend: "stable", notes: "Grocery-anchored product remains liquid." },
    ],
    outlook:
      "Sand Lake Road continues to attract both private and institutional retail capital. Cap rates are expected to remain firm as limited new supply and strong demographics support tenant demand. The restaurant submarket in particular is highly competitive for both operators and investors.",
  },
  // ── Additional Orlando submarkets ──────────────────────────────
  {
    slug: "metrowest-millenia",
    name: "MetroWest & Millenia",
    summary:
      "MetroWest and the Millenia corridor form one of Orlando's densest suburban markets. The Mall at Millenia anchors luxury retail, while MetroWest provides a massive base of workforce multifamily housing. Together they attract significant retail, multifamily, and value-add office investment.",
    demandDrivers: [
      "Mall at Millenia — Central Florida's premier luxury retail destination",
      "Dense multifamily housing base with 15,000+ rental units",
      "Convenient access to I-4, Florida Turnpike, and SR-408",
      "Growing medical office demand along Kirkman Road",
    ],
    capRates: [
      { assetClass: "Multifamily (Value-Add)", range: "6.0% - 7.5%", trend: "stable", notes: "Strong absorption in workforce housing segment." },
      { assetClass: "Multifamily (Stabilized)", range: "5.25% - 6.25%", trend: "stable", notes: "Dense population supports consistent occupancy." },
      { assetClass: "Retail (Shadow-Anchored)", range: "6.25% - 7.5%", trend: "stable", notes: "Strong tenant demand from Millenia traffic." },
      { assetClass: "Class B Office", range: "8.0% - 10.0%", trend: "softening", notes: "Value-add opportunity in older suburban product." },
    ],
    outlook:
      "MetroWest multifamily remains among the most liquid product types in the Orlando metro due to consistent demand from service-sector workers and proximity to major employment centers. Retail fundamentals are strong near Millenia, while Class B office offers repositioning opportunities for value-add investors.",
  },
  {
    slug: "college-park-mills-50",
    name: "College Park & Mills 50",
    summary:
      "College Park and Mills 50 (ViMi) are Orlando's most walkable urban neighborhoods. Independent retail, craft F&B, and adaptive reuse define the commercial landscape. These neighborhoods attract creative tenants and infill multifamily developers.",
    demandDrivers: [
      "Edgewater Drive and Mills Avenue — walkable independent retail corridors",
      "Strong young professional and creative class demand",
      "Infill multifamily and adaptive reuse pipeline",
      "Proximity to downtown Orlando and Orlando Health campus",
    ],
    capRates: [
      { assetClass: "Street Retail (Edgewater/Mills)", range: "5.75% - 7.25%", trend: "firming", notes: "Limited inventory and high tenant demand compress cap rates." },
      { assetClass: "Infill Multifamily", range: "5.0% - 6.0%", trend: "firming", notes: "Walkable urban premium drives pricing." },
      { assetClass: "Adaptive Reuse", range: "7.0% - 9.0%", trend: "stable", notes: "Execution risk reflected in higher cap rates." },
      { assetClass: "Small-Bay Flex/Creative", range: "7.5% - 9.0%", trend: "stable", notes: "Emerging product type for creative office tenants." },
    ],
    outlook:
      "College Park and Mills 50 represent Orlando's best bet for walkable urban CRE investment. Cap rates are firming as demand outpaces the limited supply of quality street retail and infill sites. Adaptive reuse offers upside for investors willing to manage construction and lease-up risk.",
  },
  {
    slug: "lake-mary-heathrow",
    name: "Lake Mary & Heathrow",
    summary:
      "Lake Mary and Heathrow comprise Central Florida's premier suburban corporate office submarket. Fortune 1000 regional headquarters, high-income demographics, and top-rated schools create stable demand for Class A office, medical, and premium retail.",
    demandDrivers: [
      "Heathrow International Business Center — multiple Fortune 1000 HQs",
      "I-4 / SR-46A interchange with strong traffic counts",
      "One of Central Florida's highest median household incomes",
      "Top-rated Seminole County schools drive residential stability",
    ],
    capRates: [
      { assetClass: "Class A Office", range: "7.0% - 8.5%", trend: "stable", notes: "Corporate tenants provide long-term stability." },
      { assetClass: "Medical Office", range: "6.0% - 7.25%", trend: "stable", notes: "Affluent demographics drive specialist practices." },
      { assetClass: "Premium Retail", range: "6.0% - 7.0%", trend: "firming", notes: "High-income households drive premium tenant demand." },
      { assetClass: "Class A Multifamily", range: "5.0% - 5.75%", trend: "stable", notes: "Corporate relocations drive luxury rental demand." },
    ],
    outlook:
      "Lake Mary and Heathrow cap rates reflect the premium investors pay for corporate-anchored, high-income submarkets. Office fundamentals are holding better here than in most Central Florida submarkets due to the concentration of corporate tenants. Premium retail and medical office remain highly attractive for 1031 exchange buyers.",
  },
  {
    slug: "ucf-east-orlando",
    name: "UCF & East Orlando",
    summary:
      "The UCF corridor in east Orlando is one of Central Florida's fastest-growing submarkets, anchored by the University of Central Florida's 70,000+ student body. Multifamily, student housing, retail, and medical office demand are all driven by the university's expansion.",
    demandDrivers: [
      "UCF — largest university in Florida by enrollment (70,000+)",
      "Research Park and incubator tenants drive flex/office demand",
      "Massive student and young professional rental population",
      "Waterford Lakes Town Center — major retail anchor",
    ],
    capRates: [
      { assetClass: "Student Housing", range: "5.5% - 6.75%", trend: "stable", notes: "Purpose-built student housing commands premium pricing." },
      { assetClass: "Conventional Multifamily", range: "5.25% - 6.5%", trend: "stable", notes: "Strong rental demand from university workforce." },
      { assetClass: "Retail (Waterford Lakes)", range: "6.0% - 7.25%", trend: "stable", notes: "Power center fundamentals remain strong." },
      { assetClass: "Flex/R&D", range: "7.25% - 8.5%", trend: "firming", notes: "UCF Research Park and simulation/training tenants." },
    ],
    outlook:
      "The UCF corridor continues to benefit from enrollment growth and the university's expanding research mission. Student housing remains a core product type, while conventional multifamily and retail benefit from the broader east Orlando population surge. Flex and R&D space demand is emerging as a notable secondary asset class.",
  },
  // ── Brevard County / Space Coast ──────────────────────────────
  {
    slug: "melbourne-space-coast",
    name: "Melbourne & Space Coast",
    summary:
      "Melbourne and the greater Space Coast form Brevard County's commercial hub, anchored by aerospace and defense contractors. L3Harris Technologies, Collins Aerospace, and the broader space industry drive demand for office, flex, industrial, and multifamily.",
    demandDrivers: [
      "L3Harris Technologies HQ — 5,000+ employees in Melbourne",
      "Collins Aerospace, Northrop Grumman, Embraer manufacturing",
      "Melbourne Orlando International Airport (MLB)",
      "SpaceX and Blue Origin activity at Cape Canaveral",
    ],
    capRates: [
      { assetClass: "Class A Office", range: "7.25% - 8.5%", trend: "stable", notes: "Defense contractor tenants provide stability." },
      { assetClass: "Flex/Industrial", range: "6.75% - 8.0%", trend: "firming", notes: "Aerospace manufacturing drives spec demand." },
      { assetClass: "Multifamily", range: "5.5% - 6.5%", trend: "stable", notes: "Workforce housing absorption remains strong." },
      { assetClass: "Neighborhood Retail", range: "6.75% - 8.0%", trend: "stable", notes: "Population growth supports new retail." },
    ],
    outlook:
      "The Space Coast continues to benefit from aerospace and defense investment. Cap rates reflect the market's smaller scale compared to Orlando, but fundamentals are strengthening as SpaceX and Blue Origin activity drives population and job growth. Flex and industrial space are the most sought-after asset classes.",
  },
  // ── Growth corridors ──────────────────────────────────────────
  {
    slug: "horizon-west",
    name: "Horizon West",
    summary:
      "Horizon West is a massive master-planned community in west Orange County and one of the fastest-growing submarkets in Florida. Population growth is creating demand for new retail pad sites, medical office, and NNN investment opportunities.",
    demandDrivers: [
      "One of Florida's fastest-growing master-planned areas",
      "Orlando Health Horizon West Hospital campus",
      "SR-429 Western Expressway connectivity",
      "National retailers and QSR tenants actively expanding",
    ],
    capRates: [
      { assetClass: "NNN Retail (New Build)", range: "5.5% - 6.5%", trend: "firming", notes: "National credit tenants on long-term leases." },
      { assetClass: "Medical Office", range: "6.0% - 7.0%", trend: "stable", notes: "Hospital campus anchors demand." },
      { assetClass: "Multifamily (New Build)", range: "4.75% - 5.75%", trend: "stable", notes: "Strong absorption in Class A garden-style." },
      { assetClass: "Land (Entitled Commercial)", range: "N/A", trend: "firming", notes: "Entitled pad sites trading at premium per-acre pricing." },
    ],
    outlook:
      "Horizon West's growth trajectory rivals Lake Nona's from a decade ago. NNN pad sites and medical office are the most actionable asset classes today, while land investors are positioning for future development along the SR-429 corridor. Cap rates on new-build NNN reflect strong investor demand for growth-market passive income.",
  },
  {
    slug: "us-27-corridor",
    name: "US-27 Corridor (Clermont to Davenport)",
    summary:
      "The US-27 corridor from Clermont through Davenport is one of the highest-growth commercial corridors in the Orlando metro. National retailers, QSR chains, and self-storage operators are racing to serve the rapidly expanding residential population.",
    demandDrivers: [
      "Explosive residential growth in south Lake and north Polk counties",
      "National retailers backfilling US-27 with new pad sites and power centers",
      "Self-storage demand from rapid housing construction",
      "Florida Turnpike interchange access at key nodes",
    ],
    capRates: [
      { assetClass: "NNN Retail Pad", range: "5.75% - 6.75%", trend: "firming", notes: "Credit-tenant QSR and convenience pads in highest demand." },
      { assetClass: "Multi-Tenant Retail", range: "7.0% - 8.5%", trend: "stable", notes: "Lease-up risk on newer centers." },
      { assetClass: "Self-Storage", range: "6.5% - 7.75%", trend: "stable", notes: "New supply meeting demand from construction boom." },
      { assetClass: "Land (Commercial)", range: "N/A", trend: "firming", notes: "Pad-ready sites along US-27 trading at aggressive pricing." },
    ],
    outlook:
      "The US-27 corridor offers some of the strongest yield-on-cost opportunities in the Orlando metro for retail and self-storage investors. Population growth shows no signs of slowing, and national tenants are actively seeking sites. Land investors should focus on entitled pad sites near Turnpike interchanges.",
  },
];

export function getSubmarketBySlug(slug: string): SubmarketData | null {
  return submarkets.find((s) => s.slug === slug) ?? null;
}

export function getAllSubmarketSlugs(): string[] {
  return submarkets.map((s) => s.slug);
}
