export interface SpaceCoastCity {
  slug: string;
  name: string;
  hubSlug?: string;
  shortName: string;
  blurb: string;
  longBlurb: string;
  neighborhoods: { name: string; desc: string }[];
  drivers: string[];
  heroImage: string;
  heroAlt: string;
}

export const spaceCoastCities: SpaceCoastCity[] = [
  {
    slug: "melbourne",
    hubSlug: "melbourne-commercial-real-estate",
    name: "Melbourne",
    shortName: "Melbourne",
    blurb:
      "The Space Coast's largest commercial market — anchored by aerospace, defense, and a fast-growing airport district.",
    longBlurb:
      "Melbourne is Brevard County's economic engine and the deepest commercial real estate market on the Space Coast. The city's industrial and office submarkets are pulled by L3Harris, Northrop Grumman, Embraer, and Melbourne International Airport's $72M terminal expansion. Retail and mixed-use demand follows population growth along US-1, Babcock Street, and the Eau Gallie Arts District. Investors find the deepest deal flow here across every property type.",
    neighborhoods: [
      {
        name: "Downtown / Eau Gallie",
        desc: "Historic mixed-use core with restaurants, restaurants, and infill development. Strong tenant demand for second-generation retail.",
      },
      {
        name: "West Melbourne / Airport District",
        desc: "Industrial flex, last-mile logistics, and aerospace supplier space anchored by MLB and the Ellis Road expansion (2028).",
      },
      {
        name: "Babcock Street Corridor",
        desc: "Mid-box retail, medical office, and quick-service restaurant pads serving south-Brevard population growth.",
      },
      {
        name: "Suntree / Viera (north)",
        desc: "Suburban office, medical office, and Class A multifamily — the highest household incomes in the county.",
      },
      {
        name: "US-1 Corridor",
        desc: "Legacy retail and small-bay industrial along the Indian River — redevelopment-friendly zoning in pockets.",
      },
    ],
    drivers: [
      "L3Harris Technologies global HQ — 7,000+ Brevard employees",
      "Northrop Grumman Manned Aircraft Design Center",
      "Embraer Executive Jets manufacturing",
      "Melbourne Orlando International Airport — $72M terminal expansion",
      "Ellis Road expansion (mid-2028) opening new industrial frontage",
      "Florida Tech research base",
    ],
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-business-building-elevators-modern-tower-3285853.webp",
    heroAlt: "Melbourne Florida commercial property",
  },
  {
    slug: "titusville",
    hubSlug: "titusville-commercial-real-estate",
    name: "Titusville",
    shortName: "Titusville",
    blurb:
      "Gateway to Kennedy Space Center — north Brevard's commercial hub with deep industrial roots.",
    longBlurb:
      "Titusville sits at the doorstep of Kennedy Space Center and Cape Canaveral Space Force Station. The city's industrial fabric — M1 zoning along SR-405 and the SR-50 corridor — supports aerospace suppliers, contractors, and service trades feeding the launch operations across the Indian River. Retail follows along US-1 and SR-50 with steady visibility from KSC commuter traffic. Affordable land basis, especially compared to south-Brevard, makes Titusville an active redevelopment market.",
    neighborhoods: [
      {
        name: "Downtown Titusville / US-1",
        desc: "Walkable historic core seeing infill mixed-use and restaurant activity.",
      },
      {
        name: "SR-405 Industrial",
        desc: "M1-zoned industrial supporting KSC contractors and underground utility trades.",
      },
      {
        name: "SR-50 / Cheney Highway",
        desc: "Big-box retail, convenience, and commuter-pull QSR pads heading west toward Orlando.",
      },
      {
        name: "Mims (north Titusville)",
        desc: "Lower-density industrial outdoor storage and land plays along I-95.",
      },
    ],
    drivers: [
      "Kennedy Space Center — NASA, SpaceX, Blue Origin",
      "Cape Canaveral Space Force Station",
      "Astrotech / Lockheed Martin payload processing",
      "I-95 + SR-50 logistics corridor to Orlando",
      "Affordable land basis vs. south Brevard",
    ],
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    heroAlt: "Titusville Florida commercial property near Kennedy Space Center",
  },
  {
    slug: "merritt-island",
    hubSlug: "merritt-island-commercial-real-estate",
    name: "Merritt Island",
    shortName: "Merritt Island",
    blurb:
      "Central-Brevard retail and small-business hub between the Banana and Indian Rivers.",
    longBlurb:
      "Merritt Island concentrates the central-Brevard daytime population — the bridge market between Cocoa, Cocoa Beach, and the Cape Canaveral cruise/space economy. SR-520 and N. Courtenay Parkway carry the bulk of retail demand, with neighborhood centers, multi-tenant strips, and small medical office driving most active inventory. Owner-user and small-investor activity dominate, with cap rates that price tighter than inland Brevard reflecting the daily population pull from the cruise terminal and cape workforce.",
    neighborhoods: [
      {
        name: "SR-520 (Merritt Island Causeway)",
        desc: "The county's busiest east-west corridor — neighborhood centers and pad sites.",
      },
      {
        name: "N. Courtenay Parkway",
        desc: "Multi-tenant retail and office condos serving central-island households.",
      },
      {
        name: "Banana River Drive",
        desc: "Service retail, marine services, and waterfront mixed-use opportunities.",
      },
    ],
    drivers: [
      "Port Canaveral cruise traffic — fourth-busiest cruise port globally",
      "Cape Canaveral Space Force / commercial spaceport workforce",
      "Bridge geography to Cocoa Beach tourism",
      "Stable daytime household population",
    ],
    heroImage:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-mall-shopping-store-modern-2308126.webp",
    heroAlt: "Merritt Island Florida retail commercial property",
  },
  {
    slug: "cocoa",
    hubSlug: "cocoa-commercial-real-estate",
    name: "Cocoa",
    shortName: "Cocoa",
    blurb:
      "Historic mainland Brevard market with industrial along US-1 and the SR-520 retail corridor.",
    longBlurb:
      "The City of Cocoa anchors the mainland side of the Cocoa/Merritt Island/Cocoa Beach causeway. Active commercial inventory leans industrial and retail along US-1 and SR-524, with redevelopment activity centered on Cocoa Village. Lower entry pricing than south-Brevard makes Cocoa attractive for first-time CRE investors and owner-users priced out of Melbourne and the beachside.",
    neighborhoods: [
      {
        name: "Cocoa Village",
        desc: "Historic walkable mixed-use with restaurants, boutiques, and second-floor offices.",
      },
      {
        name: "US-1 North",
        desc: "Legacy retail, auto-row, and industrial frontage with redevelopment potential.",
      },
      {
        name: "SR-524 / Industry Road",
        desc: "Industrial, flex, and warehouse supporting central-Brevard service trades.",
      },
    ],
    drivers: [
      "I-95 / SR-528 access to Port Canaveral and Orlando",
      "Affordable industrial land basis",
      "Cocoa Village walkable mixed-use redevelopment",
      "Brevard County government complex (Viera-adjacent)",
    ],
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-windows-architecture-facade-wall-brick-5969573.webp",
    heroAlt: "Cocoa Florida commercial real estate",
  },
  {
    slug: "cocoa-beach",
    hubSlug: "cocoa-beach-commercial-real-estate",
    name: "Cocoa Beach",
    shortName: "Cocoa Beach",
    blurb:
      "Oceanfront tourism market — mixed-use, hospitality-adjacent, and TC-zoned redevelopment.",
    longBlurb:
      "Cocoa Beach is Brevard County's tourism front door. Active inventory leans heavily mixed-use and small multifamily, anchored by ocean-proximity demand and the Town Center (TC) zoning that allows up to 45 feet and a flexible mix of retail, restaurant, residential, and hospitality uses. Inventory is supply-constrained — the city's footprint is fixed between the ocean and the Banana River — which is exactly why redevelopment plays underwrite well here.",
    neighborhoods: [
      {
        name: "Downtown / Minutemen Causeway",
        desc: "Walkable tourist core with restaurants, surf retail, and boutique hospitality.",
      },
      {
        name: "S. Orlando Avenue (A1A)",
        desc: "TC-zoned mixed-use frontage with redevelopment up to 45 feet.",
      },
      {
        name: "Cape Canaveral (north of Cocoa Beach)",
        desc: "Newer multifamily, vacation rental product, and Port-Canaveral-adjacent retail.",
      },
    ],
    drivers: [
      "Year-round tourism — beach, Port Canaveral cruise, KSC visitor center",
      "TC zoning permitting up to 45-foot mixed-use",
      "Supply-constrained barrier-island geography",
      "Vacation rental + hospitality demand",
    ],
    heroImage:
      "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
    heroAlt: "Cocoa Beach Florida mixed-use commercial property",
  },
  {
    slug: "rockledge",
    hubSlug: "rockledge-commercial-space-for-lease",
    name: "Rockledge",
    shortName: "Rockledge",
    blurb:
      "Central-Brevard professional services hub — concentrated office leasing along US-1 and Barnes Boulevard.",
    longBlurb:
      "Rockledge sits between Cocoa and Viera and punches above its weight on the office-leasing side. Active inventory leans heavily toward professional office and small medical-office suites along US-1 and Barnes Boulevard, supported by Viera-adjacent rooftops and the Brevard County government complex. Class B office cap rates in Rockledge price reasonably for tenants and owner-users priced out of Suntree/Viera.",
    neighborhoods: [
      {
        name: "US-1 / Rockledge Drive",
        desc: "Walkable historic main-street with professional office, legal, and medical practices.",
      },
      {
        name: "Barnes Boulevard",
        desc: "Suburban office parks and small medical-office condos serving Viera-Rockledge households.",
      },
      {
        name: "Murrell Road / I-95 frontage",
        desc: "Light industrial, flex, and contractor-trade space.",
      },
    ],
    drivers: [
      "Adjacent to Viera and the Brevard County government complex",
      "I-95 access at SR-520 and Barnes Boulevard",
      "Professional services concentration (legal, medical, financial)",
      "Lower office rents vs. Suntree/Viera",
    ],
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-office-building-glass-skyscraper-city-4431284.webp",
    heroAlt: "Rockledge Florida office space for lease",
  },
  {
    slug: "palm-bay",
    hubSlug: "palm-bay-commercial-real-estate",
    name: "Palm Bay",
    shortName: "Palm Bay",
    blurb:
      "Brevard County's largest city by population — south Brevard rooftop growth driving retail and medical demand.",
    longBlurb:
      "Palm Bay is the population leader in Brevard County and the rooftop engine for south-Brevard commercial demand. The Bayside Lakes corridor and Malabar Road carry the bulk of retail, medical office, and quick-service restaurant activity. Industrial is concentrated near the I-95 frontage and the Palm Bay Industrial Park, supporting aerospace suppliers and contractor trades. Lower cost basis than Melbourne with similar drivers makes Palm Bay attractive to value-seeking investors.",
    neighborhoods: [
      {
        name: "Malabar Road Corridor",
        desc: "The retail and medical-office spine of Palm Bay.",
      },
      {
        name: "Bayside Lakes",
        desc: "Newer master-planned retail centers and medical office.",
      },
      {
        name: "Palm Bay Industrial Park",
        desc: "Industrial flex and manufacturing near I-95 and aerospace supply chain.",
      },
    ],
    drivers: [
      "Largest Brevard population (~120K residents)",
      "L3Harris Palm Bay campus",
      "I-95 frontage at Malabar Rd interchange",
      "Lower-cost basis vs. Melbourne",
    ],
    heroImage:
      "/images/commercial-stock/commercial-business/maxlife-commercial-business-cityscape-business-center-urban-city-building-940870.webp",
    heroAlt: "Palm Bay Florida commercial property",
  },
];

export function getCity(slug: string): SpaceCoastCity | undefined {
  return spaceCoastCities.find((c) => c.slug === slug);
}
