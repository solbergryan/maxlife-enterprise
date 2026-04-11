/**
 * Programmatic SEO property type definitions.
 * Each entry powers one dynamic route: /<slug>/[city].
 * Template copy uses {{city}}, {{county}}, {{population}} placeholders
 * that are replaced at render time in the shared template.
 */

export interface PropertyTypeData {
  slug: string;                // URL prefix — must match the route folder
  name: string;                // e.g. "NNN Properties"
  headline: string;            // for h1 — supports {{city}}
  metaTitle: string;           // supports {{city}}
  metaDescription: string;     // supports {{city}}
  intro: string;               // 2-3 sentence intro paragraph — supports {{city}}
  benefits: string[];          // 3-5 benefit bullets
  capRateRange: string;        // e.g. "5.5% - 7.0%"
  typicalTenants: string[];    // e.g. ["Dollar General", "Starbucks"]
  investmentStrategy: string;  // 1-2 sentence strategy summary
  keywords: string[];          // SEO keywords
  localSections: {             // narrative sections on the landing page
    heading: string;
    content: string;           // supports placeholders
  }[];
}

export const propertyTypes: Record<string, PropertyTypeData> = {
  "nnn-properties": {
    slug: "nnn-properties",
    name: "NNN Properties",
    headline: "NNN Properties for Sale in {{city}}",
    metaTitle: "NNN Properties for Sale in {{city}}, FL | MaxLife Realty",
    metaDescription:
      "Triple net (NNN) investment properties for sale in {{city}}, FL. Single-tenant absolute net lease deals with national credit tenants. Priced for 1031 exchange buyers and passive investors.",
    intro:
      "{{city}} offers one of the most attractive NNN investment markets in Central Florida. Population growth, strong retail demand, and credit tenant expansion have made {{city}} a priority market for passive net-lease investors and 1031 exchange buyers looking for stable cash flow with zero management.",
    benefits: [
      "Absolute net lease structures with zero landlord responsibilities",
      "Corporate-guaranteed rent from investment-grade tenants",
      "Long lease terms (typically 10-20 years) with predictable escalations",
      "Ideal for 1031 exchange replacement property",
      "Institutional-quality income without institutional deal size",
    ],
    capRateRange: "5.25% - 7.25%",
    typicalTenants: ["Dollar General", "AutoZone", "Walgreens", "7-Eleven", "Starbucks", "Chipotle", "Panera Bread", "Taco Bell"],
    investmentStrategy: "NNN properties are best suited for passive investors and 1031 exchange buyers looking for mailbox-money cash flow backed by corporate guarantees.",
    keywords: [
      "NNN properties for sale",
      "triple net lease investment",
      "1031 exchange properties",
      "net lease investment",
      "passive real estate investment",
      "single tenant NNN",
    ],
    localSections: [
      {
        heading: "Why Investors Buy NNN Properties in {{city}}",
        content:
          "NNN investors are drawn to {{city}} for the same reasons operators are expanding here — strong demographics, growing population, and a retail environment that supports credit tenant expansion. Deals priced between $1.5M and $5M trade actively in this market, making {{city}} accessible to both 1031 exchange buyers and first-time NNN investors.",
      },
      {
        heading: "What to Look for in a {{city}} NNN Deal",
        content:
          "The best {{city}} NNN deals combine strong tenant credit with a defensive location. Look for corner outparcels, established retail corridors, and properties with demographic tailwinds. Avoid over-reliance on a single industry and watch for upcoming lease expirations that could impact your exit strategy.",
      },
      {
        heading: "NNN Cap Rates in {{city}}",
        content:
          "Cap rates for NNN deals in {{city}} typically range from 5.25% for top-tier corporate-guaranteed deals with long remaining lease terms, up to 7.25% for franchisee-operated deals or shorter lease terms. Location, tenant credit, and lease structure drive pricing more than the specific asset class.",
      },
    ],
  },

  "office-space": {
    slug: "office-space",
    name: "Office Space",
    headline: "Office Space for Lease in {{city}}",
    metaTitle: "Office Space for Lease in {{city}}, FL | MaxLife Realty",
    metaDescription:
      "Office space for lease in {{city}}, FL. Class A and Class B office suites, medical office, flex space, and executive suites across all {{city}} submarkets.",
    intro:
      "{{city}} has a diverse office market serving professional services, medical tenants, and corporate regional offices. Whether you're looking for a 1,000 sq ft suite or a 50,000 sq ft full-floor lease, {{city}} offers options across Class A, Class B, and flex space.",
    benefits: [
      "Class A, Class B, and medical office availability",
      "Flex suites ranging from 500 to 50,000 sq ft",
      "Landlord build-out allowances typical in today's market",
      "Direct and sublease opportunities in established corridors",
      "Executive suite and coworking options for smaller users",
    ],
    capRateRange: "6.5% - 8.5%",
    typicalTenants: ["Professional services", "Medical", "Financial services", "Tech", "Legal", "Insurance"],
    investmentStrategy: "{{city}} office investment strategies range from stabilized Class A for institutional capital to value-add Class B repositioning for smaller investors willing to lease up vacancy.",
    keywords: [
      "office space for lease",
      "commercial office rent",
      "medical office for lease",
      "class a office space",
      "flex space for rent",
    ],
    localSections: [
      {
        heading: "{{city}} Office Market Snapshot",
        content:
          "The {{city}} office market has stabilized after the post-pandemic reset. Class A fundamentals remain firm in top submarkets, while Class B product has seen downward pressure on rents as tenants prioritize amenitized space. Medical office remains the strongest performer across every submarket in {{city}}.",
      },
      {
        heading: "Common Office Lease Terms in {{city}}",
        content:
          "Most {{city}} office leases run 3-5 years with annual escalations of 2-3%. Landlords typically offer 1-2 months of free rent plus a build-out allowance for larger deals. Operating expense pass-throughs are standard for Class A and B product.",
      },
      {
        heading: "Choosing the Right {{city}} Submarket",
        content:
          "{{city}}'s office submarkets each have distinct characteristics. Professional service firms gravitate to established corridors with parking and visibility. Medical tenants prioritize proximity to hospitals and major residential concentrations. Tech and creative users lean toward adaptive reuse product with character.",
      },
    ],
  },

  industrial: {
    slug: "industrial",
    name: "Industrial Property",
    headline: "Industrial Property for Sale & Lease in {{city}}",
    metaTitle: "Industrial Property for Sale & Lease in {{city}}, FL | MaxLife Realty",
    metaDescription:
      "Industrial property, warehouse, distribution, and flex space for sale and lease in {{city}}, FL. Logistics-ready buildings with I-4 and turnpike access.",
    intro:
      "{{city}} is part of one of the strongest industrial markets in the Southeast. E-commerce growth, Central Florida's logistics geography, and steady demand from distribution users have driven vacancy to historic lows and rent growth well above the national average.",
    benefits: [
      "Warehouse, distribution, and flex space availability",
      "Strong fundamentals — vacancy remains among the lowest in Florida",
      "Proximity to I-4, Florida Turnpike, and major distribution corridors",
      "Owner-user financing available via SBA 504 for qualified buyers",
      "Stabilized NNN industrial investment opportunities",
    ],
    capRateRange: "5.75% - 7.5%",
    typicalTenants: ["Logistics", "E-commerce fulfillment", "Light manufacturing", "Distribution", "Construction services"],
    investmentStrategy: "{{city}} industrial investments favor multi-tenant flex product for yield and single-tenant distribution for institutional-quality stabilized cash flow.",
    keywords: [
      "industrial property for sale",
      "warehouse for lease",
      "distribution space",
      "flex space",
      "industrial real estate",
    ],
    localSections: [
      {
        heading: "Why Industrial Demand Is Strong in {{city}}",
        content:
          "Central Florida's geographic position — within a one-day drive of 20 million consumers — has made {{city}} and the surrounding market one of the most sought-after distribution locations in the Southeast. Tenant expansion has outpaced new supply for several consecutive years, pushing vacancy to historic lows and driving meaningful rent growth.",
      },
      {
        heading: "Warehouse & Distribution Features in {{city}}",
        content:
          "Modern {{city}} warehouse product typically features 28-36' clear heights, ESFR sprinklers, ample dock doors, and trailer parking. Older vintage industrial remains viable for smaller users and contractor yards, where lot yards and outside storage drive demand.",
      },
      {
        heading: "Owner-User vs. Investor in {{city}} Industrial",
        content:
          "Owner-occupant buyers continue to compete aggressively for smaller industrial product in {{city}}, often pushing prices above what an investor can justify on a pure cap rate basis. SBA 504 financing allows owner-users to acquire buildings with as little as 10% down, creating a structural pricing advantage over investor-buyers.",
      },
    ],
  },

  retail: {
    slug: "retail",
    name: "Retail Space",
    headline: "Retail Space for Lease in {{city}}",
    metaTitle: "Retail Space for Lease in {{city}}, FL | MaxLife Realty",
    metaDescription:
      "Retail space and commercial storefronts for lease in {{city}}, FL. Strip centers, inline retail, pad sites, and restaurant spaces in high-traffic corridors.",
    intro:
      "{{city}} retail continues to outperform national averages thanks to population growth, strong household income, and a healthy mix of local and national tenants. Inline, endcap, and pad site opportunities are available across every major {{city}} corridor.",
    benefits: [
      "Inline, endcap, and pad site opportunities",
      "High-traffic corridors with strong demographic profiles",
      "Multi-tenant strip centers with below-market leases for value-add",
      "Restaurant and drive-thru opportunities",
      "Anchored neighborhood centers available to investors",
    ],
    capRateRange: "6.0% - 8.0%",
    typicalTenants: ["Quick service restaurants", "Medical services", "Beauty & wellness", "Essential services", "Discount retail"],
    investmentStrategy: "{{city}} retail investors target either stabilized anchored centers for predictable cash flow or value-add strip centers where below-market leases create upside.",
    keywords: [
      "retail space for rent",
      "retail for lease",
      "strip center for sale",
      "restaurant space for lease",
      "retail investment property",
    ],
    localSections: [
      {
        heading: "{{city}} Retail Corridor Highlights",
        content:
          "{{city}}'s strongest retail corridors combine traffic count, demographic density, and high visibility. National credit tenants pay a premium for corner locations and signalized intersections, while local retailers cluster in walkable downtown environments where foot traffic supports boutique concepts and restaurants.",
      },
      {
        heading: "Retail Investment Strategies in {{city}}",
        content:
          "Investor strategies in {{city}} retail fall into two buckets: stabilized cash flow from anchored centers leased to credit tenants, or value-add plays where below-market leases can be marked to market as they roll. Both strategies are viable in {{city}} thanks to consistent rent growth and tenant demand.",
      },
      {
        heading: "Leasing Retail Space in {{city}}",
        content:
          "Retail leasing in {{city}} is active across QSR, medical, beauty, and essential services tenants. Most leases run 5-10 years with annual escalations and percentage rent clauses for food and beverage users. Tenant improvements are often negotiated in exchange for longer lease terms.",
      },
    ],
  },
};

export function getPropertyType(slug: string): PropertyTypeData | null {
  return propertyTypes[slug] ?? null;
}

export function getAllPropertyTypes(): PropertyTypeData[] {
  return Object.values(propertyTypes);
}

/** Substitute {{city}}, {{county}}, {{population}} into a template string. */
export function fillTemplate(
  template: string,
  vars: { city: string; county: string; population: string }
): string {
  return template
    .replace(/\{\{city\}\}/g, vars.city)
    .replace(/\{\{county\}\}/g, vars.county)
    .replace(/\{\{population\}\}/g, vars.population);
}
