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
];

export function getSubmarketBySlug(slug: string): SubmarketData | null {
  return submarkets.find((s) => s.slug === slug) ?? null;
}

export function getAllSubmarketSlugs(): string[] {
  return submarkets.map((s) => s.slug);
}
