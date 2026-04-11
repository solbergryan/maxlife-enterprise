/**
 * Sector investment outlook reports for /investment-outlook/[sector]/[year].
 * Each report is intentionally structured so that a new year can be added
 * without touching the template — just append another year entry.
 */

export interface OutlookYearData {
  year: number;
  summary: string;          // 2-3 sentence topline
  capRateSnapshot: string;  // short cap rate commentary
  rentGrowth: string;       // rent growth commentary
  supplyDemand: string;     // supply/demand paragraph
  keyTrends: string[];      // 3-5 bullets
  risks: string[];          // 2-4 risk bullets
  outlook: string;          // forward-looking paragraph
}

export interface SectorData {
  slug: string;
  name: string;
  description: string;      // 1-sentence sector summary
  years: OutlookYearData[];
}

const CURRENT_YEAR = 2026;

export const sectors: Record<string, SectorData> = {
  nnn: {
    slug: "nnn",
    name: "NNN / Net Lease",
    description:
      "Single-tenant triple net investments leased to national credit tenants — the passive-income cornerstone of Central Florida commercial real estate.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "The Central Florida NNN market enters 2026 with cap rates stabilized after the 2022-2024 rate adjustment. Credit tenant demand remains strong, corporate expansion is continuing, and 1031 exchange capital is still a dominant source of demand.",
        capRateSnapshot:
          "Cap rates for top-tier corporate-guaranteed NNN deals range from 5.25% to 6.25%, while franchisee-operated deals price from 6.5% to 7.5% depending on lease term and credit quality.",
        rentGrowth:
          "Most new NNN leases include annual or periodic rent escalations of 1.5% - 2.5%. Rent growth on new leases has outpaced the past decade, particularly for QSR and essential-services tenants.",
        supplyDemand:
          "Demand for Central Florida NNN continues to come primarily from 1031 exchange buyers, family offices, and private investors. Supply is driven by developer merchant-build programs and retail owner-operators monetizing portfolios in a normalized interest rate environment.",
        keyTrends: [
          "Corporate-guaranteed QSR and essential services remain the most liquid NNN product",
          "Dollar General, AutoZone, and Walgreens continue expanding across Central Florida",
          "Medical and urgent-care NNN deals trade at a cap rate premium over general retail",
          "Newly developed NNN with 15+ year leases price aggressively from developer partners",
        ],
        risks: [
          "Tenant concentration risk — single-tenant NNN carries 100% of tenant credit risk",
          "Lease rollover timing if rates spike or tenant vacates in final years",
          "Retail format obsolescence for tenants without a defensible niche",
        ],
        outlook:
          "The Central Florida NNN market is expected to remain highly competitive for investor capital. Yield-focused buyers will continue to price deals aggressively, especially those with long lease terms and investment-grade tenants. For 1031 exchange buyers, the market offers ample options to deploy capital on a reasonable timeline, though disciplined underwriting remains essential.",
      },
    ],
  },

  retail: {
    slug: "retail",
    name: "Retail",
    description:
      "Shopping centers, strip centers, pad sites, and single-tenant retail across Central Florida's high-growth corridors.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "Central Florida retail continues to outperform national averages in 2026 thanks to strong population growth, rising household income, and a healthy mix of local and national tenants. Anchored centers and high-traffic corridors are in demand from both private and institutional capital.",
        capRateSnapshot:
          "Anchored grocery centers price from 6.5% to 7.5%. Unanchored strip centers range from 7.25% to 8.5%. Single-tenant NNN retail runs in line with the broader net lease market.",
        rentGrowth:
          "Rent growth is strongest in inline QSR, medical, and essential services space. Newer construction commands a premium, and value-add owners are marking below-market rents to market as leases roll.",
        supplyDemand:
          "Tenant demand remains robust across QSR, medical, beauty, and essential services categories. New retail construction is concentrated in high-growth residential areas (Winter Garden, Lake Nona, Clermont, Apopka) where rooftops support absorption.",
        keyTrends: [
          "QSR and drive-thru retail remains the most liquid subcategory",
          "Medical and urgent-care continues expanding into retail storefronts",
          "Grocery-anchored centers retain the strongest institutional interest",
          "Value-add strip centers offer the highest current yield for private investors",
        ],
        risks: [
          "Consumer spending volatility tied to the broader economic cycle",
          "Oversupply in select corridors where developers have been aggressive",
          "Lease rollover in older centers with non-credit tenants",
        ],
        outlook:
          "Central Florida retail is expected to remain a strong asset class in 2026. Supply-demand dynamics favor landlords in most corridors, and rent growth should continue to outpace the broader retail real estate market. Value-add investors will find opportunities in older strip centers where rents are below market.",
      },
    ],
  },

  office: {
    slug: "office",
    name: "Office",
    description:
      "Class A, Class B, medical office, and flex space across Orlando, Maitland, Lake Mary, and the broader Central Florida market.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "Central Florida office has stabilized after the post-pandemic reset. Class A fundamentals in top suburban submarkets (Lake Mary, Maitland, Winter Park) remain firm, while downtown Orlando continues to work through Class B vacancy. Medical office remains the strongest performer.",
        capRateSnapshot:
          "Class A suburban office prices from 7.5% to 9.0%. Class B pricing runs from 8.5% to 10.5% with value-add scenarios in the 11%+ range. Medical office trades tightest at 5.75% to 7.25% for credit-tenant product.",
        rentGrowth:
          "Rent growth is positive but modest in most submarkets. Class A fundamentals support 2-3% annual escalations on new leases. Class B product continues to see concessions on larger deals.",
        supplyDemand:
          "New office construction has slowed to a trickle. Net absorption is positive but uneven — concentrated in medical, financial services, and professional firms. Tenant demand for amenitized Class A space remains strong.",
        keyTrends: [
          "Medical office remains the strongest office subcategory in Central Florida",
          "Lake Nona continues to absorb Class A office tied to the medical economy",
          "Class B repositioning (office-to-residential) is being explored in select markets",
          "Flex and executive suite formats continue to attract smaller tenants",
        ],
        risks: [
          "Remote and hybrid work patterns still influencing tenant footprints",
          "Older Class B vacancy persists in select submarkets",
          "Tenant improvement costs have risen, pressuring landlord returns on new leases",
        ],
        outlook:
          "The Central Florida office market in 2026 offers selective opportunities for disciplined investors. Medical office remains the safest play. Value-add Class B investors willing to underwrite lease-up or conversion can find attractive entry points. Class A suburban office in top submarkets continues to offer stable long-term cash flow.",
      },
    ],
  },

  industrial: {
    slug: "industrial",
    name: "Industrial",
    description:
      "Warehouse, distribution, flex, and light manufacturing across the I-4 corridor and Central Florida logistics nodes.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "Central Florida industrial remains one of the strongest performing asset classes in the Southeast. Historic low vacancy, steady rent growth, and a pipeline of demand from logistics and e-commerce users continue to support pricing and new development.",
        capRateSnapshot:
          "Class A industrial prices from 5.75% to 6.75%. Class B product runs from 6.75% to 8.0%. Flex and multi-tenant space trades from 7.0% to 8.5%. Cold storage commands a premium at 6.0% to 7.25%.",
        rentGrowth:
          "Asking rent growth has moderated from double-digit highs but remains well above the national average. Class A rents have seen the strongest growth as new supply is absorbed.",
        supplyDemand:
          "Net absorption remains positive across most size segments. New supply is concentrated in larger-bay big-box product along the I-4 corridor. Smaller tenant demand (5,000 - 25,000 sq ft) continues to outpace available product.",
        keyTrends: [
          "E-commerce and 3PL tenant demand remains the dominant driver",
          "Owner-user SBA 504 buyers compete aggressively for smaller product",
          "Cold storage and specialized product trades at a cap rate premium",
          "Last-mile distribution nodes in dense urban areas are highly sought after",
        ],
        risks: [
          "New supply catching up with demand in larger size segments",
          "Interest rate sensitivity for leveraged acquisitions",
          "Tenant credit risk for smaller logistics operators",
        ],
        outlook:
          "Central Florida industrial is expected to remain the top-performing commercial asset class in 2026. Investors should expect compressed cap rates, continued rent growth, and aggressive bidding on quality product. The best opportunities for private capital are in Class B and multi-tenant flex where institutional capital is less active.",
      },
    ],
  },

  multifamily: {
    slug: "multifamily",
    name: "Multifamily",
    description:
      "Class A, Class B, and value-add apartment investments across Orlando, Lake Nona, Kissimmee, Winter Garden, and the broader Central Florida market.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "Central Florida multifamily remains a priority asset class for institutional and private investors. Population growth continues to outpace housing supply, supporting steady rent growth and absorption across Class A through Class C product.",
        capRateSnapshot:
          "Class A multifamily prices from 4.75% to 5.75%. Class B product runs from 5.5% to 6.5%. Value-add Class C deals trade from 6.25% to 7.5% depending on location and condition.",
        rentGrowth:
          "Rent growth has moderated from the 2021-2022 highs but remains positive across most submarkets. Lake Nona, Winter Garden, and Kissimmee show the strongest growth thanks to new residential construction and population gains.",
        supplyDemand:
          "New supply continues to come online in institutional submarkets, but absorption has kept pace with deliveries. Workforce housing (Class B and C) shows the strongest fundamentals with persistently tight vacancy.",
        keyTrends: [
          "Value-add Class B/C remains the preferred private investor strategy",
          "Build-to-rent (BTR) single-family rental is expanding in outer Orange and Osceola counties",
          "Lake Nona and Winter Garden lead Class A absorption",
          "Interest rate stabilization has improved debt underwriting",
        ],
        risks: [
          "Concentration of new Class A supply in select submarkets",
          "Insurance cost growth affecting operating margins",
          "Interest rate sensitivity for leveraged acquisitions",
        ],
        outlook:
          "Multifamily fundamentals in Central Florida remain among the strongest in the Southeast. Private investors should continue to find value-add opportunities in Class B and C product where below-market rents can be marked to market through operational improvements and targeted capital investment. Institutional investors will remain competitive for stabilized Class A assets.",
      },
    ],
  },

  land: {
    slug: "land",
    name: "Land & Development",
    description:
      "Development-ready land, entitled sites, and infill parcels across Central Florida's growth corridors.",
    years: [
      {
        year: CURRENT_YEAR,
        summary:
          "Land acquisition in Central Florida remains active in 2026, driven by continued residential migration, commercial expansion, and infrastructure investment. Developer competition is strongest for entitled or near-entitled sites in growth corridors.",
        capRateSnapshot:
          "Land is priced on a per-acre or per-unit basis rather than cap rate. Entitled residential land ranges from $50K to $150K+ per approved unit. Commercial corner parcels in established corridors command $15-$60+ per square foot.",
        rentGrowth:
          "Not applicable — land pricing is driven by entitlement status, location, and buildable density rather than rental income.",
        supplyDemand:
          "Developer demand remains strongest in West Orange County (Winter Garden, Horizon West), SE Orange (Lake Nona, St. Cloud), and North Osceola. Rural and unincorporated Seminole County land is gaining attention as growth pushes outward.",
        keyTrends: [
          "Entitled residential land is the most liquid and highest-priced product",
          "Build-to-rent (BTR) developers compete for land alongside traditional homebuilders",
          "Commercial pad sites in high-growth residential corridors command premium pricing",
          "Industrial land along I-4 and the Turnpike remains in demand",
        ],
        risks: [
          "Entitlement timing and risk varies significantly by jurisdiction",
          "Impact fee increases affect development feasibility",
          "Infrastructure constraints (water, roads, schools) can limit site viability",
        ],
        outlook:
          "Central Florida land remains a high-conviction market for developers and patient investors. The best opportunities require a clear entitlement path and strong understanding of local zoning and permitting dynamics. Well-located entitled land will continue to command premium pricing, while raw land offers longer hold periods with higher potential upside for patient capital.",
      },
    ],
  },
};

export function getSector(slug: string): SectorData | null {
  return sectors[slug] ?? null;
}

export function getAllSectorSlugs(): string[] {
  return Object.keys(sectors);
}

export function getOutlookParams(): { sector: string; year: string }[] {
  const params: { sector: string; year: string }[] = [];
  for (const sector of Object.values(sectors)) {
    for (const year of sector.years) {
      params.push({ sector: sector.slug, year: String(year.year) });
    }
  }
  return params;
}
