/**
 * Central Florida cities for programmatic SEO pages.
 *
 * Content is intentionally placeholder-heavy — every city has the same
 * narrative shape so the templates render consistently. Replace the
 * `description`, `highlights`, and demographic fields with proprietary
 * data as it becomes available.
 */

export interface CityData {
  slug: string;
  name: string;
  county: string;
  population: string;          // rough, e.g. "292,000"
  distanceFromOrlando: string; // e.g. "25 miles NE of Orlando"
  description: string;         // 2-3 sentences of city overview
  highlights: string[];        // 3-5 economic / demographic highlights
  topEmployers: string[];
  demographics: string;        // 1-2 sentence income/household snapshot
}

export const cities: CityData[] = [
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    population: "316,000",
    distanceFromOrlando: "Central Florida's economic hub",
    description:
      "Orlando is the fourth-largest metro in Florida and one of the fastest-growing commercial real estate markets in the Southeast. With a diversified economy spanning tourism, healthcare, technology, and logistics, Orlando continues to attract institutional and private capital across every major CRE asset class.",
    highlights: [
      "Metro population exceeds 2.7 million with consistent year-over-year growth",
      "Diversified economy beyond tourism — healthcare, tech, defense, logistics",
      "Home to Walt Disney World, Universal, Orange County Convention Center",
      "Below-average commercial vacancy across most asset types",
    ],
    topEmployers: ["Walt Disney World", "AdventHealth", "Orlando Health", "Lockheed Martin", "UCF"],
    demographics: "Median household income ~$68,000 with strong domestic migration from higher-cost coastal markets driving housing and retail demand.",
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    county: "Orange County",
    population: "30,000",
    distanceFromOrlando: "6 miles NE of downtown Orlando",
    description:
      "Winter Park is one of Central Florida's most affluent submarkets, with a walkable downtown, top-rated schools, and a dense concentration of professional service tenants. Commercial real estate here commands premium rents driven by strong demographics and limited developable land.",
    highlights: [
      "Median home values among the highest in Central Florida",
      "Park Avenue is a flagship retail corridor with near-zero vacancy",
      "Rollins College anchors a stable educational economy",
      "High tenant retention across office and medical office sectors",
    ],
    topEmployers: ["Rollins College", "AdventHealth Winter Park", "Full Sail University nearby"],
    demographics: "Median household income over $95,000 with a high concentration of professional, medical, and legal services tenants.",
  },
  {
    slug: "maitland",
    name: "Maitland",
    county: "Orange County",
    population: "19,000",
    distanceFromOrlando: "10 miles N of downtown Orlando",
    description:
      "Maitland is an established suburban office submarket with a high concentration of financial services, legal, and corporate tenants. The Maitland Center office park is one of the largest suburban office concentrations in Central Florida.",
    highlights: [
      "Home to the Maitland Center office park complex",
      "Direct I-4 and SunRail access to downtown Orlando",
      "Strong Class A and B office fundamentals",
      "Adjacent to Winter Park's affluent residential base",
    ],
    topEmployers: ["Massey Services", "Tupperware (nearby)", "Multiple regional HQs"],
    demographics: "Median household income ~$85,000 with a heavy professional-services tenant mix.",
  },
  {
    slug: "lake-nona",
    name: "Lake Nona",
    county: "Orange County",
    population: "55,000",
    distanceFromOrlando: "13 miles SE of downtown Orlando",
    description:
      "Lake Nona is a master-planned community and the center of Orlando's Medical City — home to the UCF Medical School, Nemours Children's Hospital, and the VA Medical Center. Commercial real estate demand is concentrated in medical office, life sciences, and Class A multifamily.",
    highlights: [
      "Anchored by Medical City: UCF Medical, Nemours, VA, Orlando VA",
      "Fastest-growing master-planned community in Central Florida",
      "Strong medical office and life sciences demand",
      "KPMG's Lakehouse corporate campus drives daytime population",
    ],
    topEmployers: ["Nemours Children's Hospital", "Orlando VA Medical Center", "KPMG", "UCF College of Medicine"],
    demographics: "Median household income ~$90,000 with heavy medical, life sciences, and professional-services concentration.",
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole County",
    population: "62,000",
    distanceFromOrlando: "25 miles NE of Orlando",
    description:
      "Sanford sits at the northern edge of the Orlando metro and serves as a logistics and industrial gateway into Central Florida. Access to I-4, the CSX intermodal yard, and Orlando Sanford International Airport make it a priority market for warehouse, flex, and light industrial investment.",
    highlights: [
      "Orlando Sanford International Airport drives logistics demand",
      "Direct I-4 corridor to Orlando and Tampa",
      "Growing warehouse and distribution footprint",
      "Historic downtown with adaptive reuse retail potential",
    ],
    topEmployers: ["Orlando Sanford International Airport", "CSX Intermodal", "Seminole State College"],
    demographics: "Median household income ~$55,000 with a blue-collar logistics and services workforce.",
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    county: "Osceola County",
    population: "81,000",
    distanceFromOrlando: "18 miles S of Orlando",
    description:
      "Kissimmee is the gateway to Central Florida's tourism corridor and one of the largest hospitality markets in the United States. The US-192 corridor anchors retail, hotel, and entertainment demand, while outer Osceola County continues to attract residential and industrial development.",
    highlights: [
      "US-192 tourism corridor serves 75M+ annual visitors to the region",
      "Fast-growing Hispanic demographic driving retail demand",
      "NeoCity tech corridor attracting semiconductor investment",
      "Industrial growth along the Florida Turnpike",
    ],
    topEmployers: ["AdventHealth Celebration", "Osceola Regional Medical Center", "Hospitality sector"],
    demographics: "Median household income ~$52,000 with strong Hispanic demographic growth driving retail and services demand.",
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    county: "Seminole County",
    population: "45,000",
    distanceFromOrlando: "10 miles N of Orlando",
    description:
      "Altamonte Springs is an established commercial hub with a strong retail base anchored by Altamonte Mall. Office, medical, and multifamily demand remain steady thanks to I-4 access and a mature residential base.",
    highlights: [
      "Altamonte Mall — one of Central Florida's largest regional malls",
      "Strong medical office demand near AdventHealth Altamonte",
      "Direct I-4 connectivity to downtown Orlando",
      "Stable mature suburban retail fundamentals",
    ],
    topEmployers: ["AdventHealth Altamonte", "Altamonte Mall retailers", "Various regional offices"],
    demographics: "Median household income ~$62,000 with a dense, mature suburban base.",
  },
  {
    slug: "lake-mary",
    name: "Lake Mary",
    county: "Seminole County",
    population: "17,000",
    distanceFromOrlando: "17 miles N of Orlando",
    description:
      "Lake Mary is a corporate office submarket known for the Heathrow International Business Center and a dense concentration of Fortune 1000 regional headquarters. The market has strong fundamentals for Class A office, medical, and high-end retail.",
    highlights: [
      "Heathrow International Business Center hosts multiple regional HQs",
      "One of the wealthiest submarkets in Central Florida",
      "Strong Class A office demand",
      "Top-rated public schools drive residential stability",
    ],
    topEmployers: ["Fidelity National Financial", "AAA", "Deloitte regional office"],
    demographics: "Median household income over $100,000 with one of the highest concentrations of Fortune 1000 regional offices in Florida.",
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    county: "Seminole County",
    population: "43,000",
    distanceFromOrlando: "17 miles NE of Orlando",
    description:
      "Oviedo is a fast-growing suburban city adjacent to the University of Central Florida. Commercial real estate fundamentals are strongest for retail, medical office, and Class B office serving the expanding residential base and UCF-driven economy.",
    highlights: [
      "Adjacent to UCF (70,000+ students)",
      "Top-rated school district driving family migration",
      "Strong neighborhood retail and medical office demand",
      "Ongoing suburban growth along SR-426",
    ],
    topEmployers: ["UCF (nearby)", "Oviedo Medical Center"],
    demographics: "Median household income ~$90,000 with a family-oriented, education-driven population.",
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    county: "Orange County",
    population: "48,000",
    distanceFromOrlando: "15 miles W of Orlando",
    description:
      "Winter Garden is one of the fastest-growing West Orange submarkets, with a revitalized historic downtown and strong residential growth along the SR-429 corridor. Retail, medical, and multifamily fundamentals are strong.",
    highlights: [
      "Historic Plant Street downtown is a flagship retail destination",
      "Rapid residential growth along SR-429 Western Expressway",
      "Strong demographic profile drives retail and medical demand",
      "Close to Walt Disney World drives hospitality-adjacent retail",
    ],
    topEmployers: ["Orlando Health Horizon West", "Amazon Distribution"],
    demographics: "Median household income ~$85,000 with strong family growth and new-construction housing driving demand.",
  },
  // ── Orlando neighborhoods & nearby cities ─────────────────────
  {
    slug: "dr-phillips",
    name: "Dr. Phillips",
    county: "Orange County",
    population: "32,000",
    distanceFromOrlando: "10 miles SW of downtown Orlando",
    description:
      "Dr. Phillips is an affluent unincorporated community in southwest Orange County known for Restaurant Row along Sand Lake Road and proximity to the I-Drive tourism corridor. Commercial real estate demand is strongest in high-end retail, medical office, and NNN restaurant pads.",
    highlights: [
      "Restaurant Row — Orlando's premier dining destination",
      "Dr. Phillips Hospital and medical office cluster",
      "Affluent demographics with median household income over $100K",
      "Proximity to I-Drive attractions and convention center",
    ],
    topEmployers: ["Orlando Health Dr. Phillips Hospital", "Restaurant Row operators", "Tourism corridor"],
    demographics: "Median household income over $100,000 with a concentration of high-net-worth households driving premium retail and dining demand.",
  },
  {
    slug: "college-park",
    name: "College Park",
    county: "Orange County",
    population: "15,000",
    distanceFromOrlando: "3 miles N of downtown Orlando",
    description:
      "College Park is a walkable urban neighborhood just north of downtown Orlando with tree-lined streets, independent retail, and a growing food and beverage scene along Edgewater Drive. Commercial investment centers on adaptive reuse, small retail, and infill multifamily.",
    highlights: [
      "Edgewater Drive corridor — walkable independent retail and dining",
      "Strong rental demand from young professionals near downtown",
      "Infill development opportunities in a mature urban neighborhood",
      "Adjacent to I-4 and close to Orlando Health main campus",
    ],
    topEmployers: ["Orlando Health", "Independent retailers", "Professional services"],
    demographics: "Median household income ~$72,000 with a young professional demographic driving walkable retail and multifamily demand.",
  },
  {
    slug: "metrowest",
    name: "MetroWest",
    county: "Orange County",
    population: "40,000",
    distanceFromOrlando: "8 miles W of downtown Orlando",
    description:
      "MetroWest is a dense suburban community with a large concentration of multifamily housing, neighborhood retail, and Class B office space. Its central location, affordability, and proximity to major employers make it a consistently strong submarket for workforce housing and retail investors.",
    highlights: [
      "One of Orlando's densest suburban multifamily markets",
      "Affordable workforce housing with strong occupancy",
      "Neighborhood retail anchored by grocery and services",
      "Convenient access to I-4, Florida Turnpike, and SR-408",
    ],
    topEmployers: ["Lockheed Martin (nearby)", "Universal Studios (nearby)", "Retail services"],
    demographics: "Median household income ~$48,000 with a diverse workforce population and strong multifamily absorption.",
  },
  {
    slug: "windermere",
    name: "Windermere",
    county: "Orange County",
    population: "4,000",
    distanceFromOrlando: "14 miles W of downtown Orlando",
    description:
      "Windermere is one of Central Florida's wealthiest communities, home to lakefront estates and high-net-worth families. Commercial opportunities are limited to premium neighborhood retail, medical office, and services catering to the affluent residential base.",
    highlights: [
      "One of the highest median household incomes in Florida",
      "Lakefront estate community attracting professional athletes and executives",
      "Premium neighborhood retail and services",
      "Adjacent to Horizon West — one of Orlando's fastest-growing areas",
    ],
    topEmployers: ["Independent medical practices", "Professional services", "Private schools"],
    demographics: "Median household income exceeding $130,000 with one of the highest concentrations of wealth in Central Florida.",
  },
  {
    slug: "apopka",
    name: "Apopka",
    county: "Orange County",
    population: "57,000",
    distanceFromOrlando: "16 miles NW of Orlando",
    description:
      "Apopka is one of the fastest-growing cities in Orange County, driven by the expansion of Wekiva Parkway (SR-429) and affordable residential development. Commercial real estate opportunities are strongest in industrial, retail pad sites, and land for development.",
    highlights: [
      "Wekiva Parkway completion unlocking new commercial corridors",
      "Affordable land compared to core Orlando submarkets",
      "Growing population base driving retail and services demand",
      "Industrial and logistics growth along US-441",
    ],
    topEmployers: ["Nursery and agriculture sector", "Amazon distribution", "Walmart distribution"],
    demographics: "Median household income ~$58,000 with strong population growth from families seeking affordable housing within the Orlando metro.",
  },
  {
    slug: "celebration",
    name: "Celebration",
    county: "Osceola County",
    population: "11,000",
    distanceFromOrlando: "20 miles S of Orlando",
    description:
      "Celebration is a master-planned community originally developed by The Walt Disney Company with a walkable town center, Class A residential, and premium retail. Commercial demand centers on boutique retail, medical office, and professional services.",
    highlights: [
      "Master-planned community with walkable town center",
      "AdventHealth Celebration — major medical campus",
      "Strong tourism-adjacent retail from Disney proximity",
      "High-quality residential base with premium demographics",
    ],
    topEmployers: ["AdventHealth Celebration", "Walt Disney World (adjacent)", "Professional services"],
    demographics: "Median household income ~$85,000 with a well-educated, family-oriented population.",
  },
  {
    slug: "clermont",
    name: "Clermont",
    county: "Lake County",
    population: "48,000",
    distanceFromOrlando: "22 miles W of Orlando",
    description:
      "Clermont is the commercial hub of south Lake County and one of the fastest-growing cities in the Orlando metro. The US-27 and SR-50 corridors attract new retail development, medical office, and land investment as population growth continues.",
    highlights: [
      "Fastest-growing city in Lake County by population",
      "US-27 corridor attracting national retail and QSR tenants",
      "South Lake Hospital medical campus drives MOB demand",
      "Wellness Way planned development corridor",
    ],
    topEmployers: ["South Lake Hospital", "National retailers along US-27", "Lake County government"],
    demographics: "Median household income ~$72,000 with strong family migration from the Orlando metro driving retail and services demand.",
  },
  {
    slug: "davenport",
    name: "Davenport",
    county: "Polk County",
    population: "10,000",
    distanceFromOrlando: "30 miles SW of Orlando",
    description:
      "Davenport sits at the intersection of I-4 and US-27 and has become one of the fastest-growing residential areas in Central Florida. The short-term rental and hospitality market is significant, and commercial demand is growing for retail, self-storage, and NNN pad sites along US-27.",
    highlights: [
      "I-4 and US-27 intersection — high-traffic commercial corridor",
      "Massive residential growth driving retail demand",
      "Strong short-term rental / vacation home market near Disney",
      "Self-storage demand from rapid housing construction",
    ],
    topEmployers: ["Hospitality and STR management", "National retailers", "Residential construction"],
    demographics: "Median household income ~$55,000 with one of the fastest population growth rates in the Orlando-Lakeland metro.",
  },
  {
    slug: "st-cloud",
    name: "St. Cloud",
    county: "Osceola County",
    population: "60,000",
    distanceFromOrlando: "25 miles SE of Orlando",
    description:
      "St. Cloud is a rapidly growing city in east Osceola County with strong residential absorption and increasing commercial demand along the Narcoossee Road and US-192 corridors. Retail, medical, and land for development are the primary CRE opportunities.",
    highlights: [
      "Narcoossee Road corridor connecting to Lake Nona",
      "Strong residential growth driving new retail development",
      "AdventHealth St. Cloud and medical office demand",
      "Affordable land for commercial development",
    ],
    topEmployers: ["AdventHealth St. Cloud", "Osceola County School District", "National retailers"],
    demographics: "Median household income ~$60,000 with a young, growing family demographic driving services and retail demand.",
  },
  // ── Brevard County / Space Coast ──────────────────────────────
  {
    slug: "melbourne",
    name: "Melbourne",
    county: "Brevard County",
    population: "86,000",
    distanceFromOrlando: "65 miles SE of Orlando",
    description:
      "Melbourne is the largest city in Brevard County and the commercial hub of the Space Coast. A deep aerospace and defense tenant base drives demand for office, flex, and industrial space, while strong residential growth fuels retail and multifamily investment.",
    highlights: [
      "L3Harris Technologies headquarters — 5,000+ employees",
      "Collins Aerospace, Northrop Grumman, Embraer manufacturing",
      "Melbourne Orlando International Airport (MLB)",
      "Florida Institute of Technology university anchor",
    ],
    topEmployers: ["L3Harris Technologies", "Collins Aerospace", "Northrop Grumman", "Embraer", "Florida Tech"],
    demographics: "Median household income ~$55,000 with a strong STEM and defense workforce driving professional office and flex demand.",
  },
  {
    slug: "titusville",
    name: "Titusville",
    county: "Brevard County",
    population: "48,000",
    distanceFromOrlando: "40 miles E of Orlando",
    description:
      "Titusville is the gateway to Kennedy Space Center and Cape Canaveral, and commercial demand has surged with SpaceX and Blue Origin activity. Industrial, flex, and land for development are the primary investment opportunities.",
    highlights: [
      "Adjacent to Kennedy Space Center and Cape Canaveral",
      "SpaceX and Blue Origin driving aerospace demand",
      "Industrial and flex space absorption at historic highs",
      "US-1 corridor retail revitalization",
    ],
    topEmployers: ["NASA/Kennedy Space Center", "SpaceX (nearby)", "Blue Origin (nearby)", "Lockheed Martin"],
    demographics: "Median household income ~$48,000 with a growing aerospace workforce and increasing residential absorption.",
  },
  {
    slug: "palm-bay",
    name: "Palm Bay",
    county: "Brevard County",
    population: "124,000",
    distanceFromOrlando: "70 miles SE of Orlando",
    description:
      "Palm Bay is the most populous city in Brevard County with massive land inventory and strong residential growth. Commercial development is expanding along the Babcock Street and Palm Bay Road corridors to serve the growing population.",
    highlights: [
      "Largest city by population in Brevard County",
      "Significant undeveloped commercial land inventory",
      "Growing retail and services demand along Babcock Street",
      "Affordable entry for land investors and developers",
    ],
    topEmployers: ["Harris Corporation (nearby)", "Health First", "Palm Bay city government"],
    demographics: "Median household income ~$50,000 with strong population growth and demand for new retail and services development.",
  },
  {
    slug: "cocoa",
    name: "Cocoa",
    county: "Brevard County",
    population: "21,000",
    distanceFromOrlando: "50 miles E of Orlando",
    description:
      "Cocoa is a historic Space Coast city undergoing revitalization, with adaptive reuse opportunities in the downtown Cocoa Village district and industrial growth along the US-1 and I-95 corridors. Value-add investors are finding opportunities in both retail and industrial.",
    highlights: [
      "Cocoa Village — walkable historic retail and dining district",
      "I-95 industrial corridor with distribution and flex space",
      "Adaptive reuse and redevelopment opportunities",
      "Port Canaveral nearby driving logistics demand",
    ],
    topEmployers: ["Eastern Florida State College", "Port Canaveral (nearby)", "Aerospace contractors"],
    demographics: "Median household income ~$40,000 with redevelopment-driven growth and adaptive reuse investment interest.",
  },
  // ── Lake County ────────────────────────────────────────────────
  {
    slug: "mount-dora",
    name: "Mount Dora",
    county: "Lake County",
    population: "16,000",
    distanceFromOrlando: "30 miles NW of Orlando",
    description:
      "Mount Dora is a charming lakefront town with a historic downtown, strong tourism draw, and growing residential base. Commercial real estate opportunities center on boutique retail, hospitality, and mixed-use infill development.",
    highlights: [
      "Historic downtown with strong tourism and event-driven retail",
      "Lakefront setting attracting retirees and second-home buyers",
      "Growing mixed-use development pipeline",
      "Art galleries, antique shops, and boutique F&B",
    ],
    topEmployers: ["AdventHealth Waterman (nearby)", "Lake County government", "Tourism and hospitality"],
    demographics: "Median household income ~$58,000 with a mix of retirees and young families driving boutique retail demand.",
  },
  {
    slug: "leesburg",
    name: "Leesburg",
    county: "Lake County",
    population: "28,000",
    distanceFromOrlando: "40 miles NW of Orlando",
    description:
      "Leesburg is a growing commercial hub in central Lake County with affordable land, strong logistics positioning along US-27 and US-441, and a growing population base. Industrial, retail, and land development are the primary CRE opportunities.",
    highlights: [
      "US-27 and US-441 crossroads — high-traffic commercial corridors",
      "Affordable commercial land for development",
      "Growing industrial and distribution demand",
      "Adjacent to The Villages — Florida's largest retirement community",
    ],
    topEmployers: ["UF Health Leesburg Hospital", "Lake County government", "Logistics and distribution"],
    demographics: "Median household income ~$45,000 with strong retiree migration and proximity to The Villages driving services demand.",
  },
  {
    slug: "minneola",
    name: "Minneola",
    county: "Lake County",
    population: "14,000",
    distanceFromOrlando: "25 miles W of Orlando",
    description:
      "Minneola is one of the fastest-growing small cities in Central Florida, driven by the Wellness Way planned development corridor and proximity to the Florida Turnpike. Land for development and new retail pad sites are the primary commercial opportunities.",
    highlights: [
      "Wellness Way corridor — master-planned mixed-use development",
      "Florida Turnpike access driving regional connectivity",
      "Some of the most affordable developable land in the metro",
      "Rapidly growing residential base creating retail demand",
    ],
    topEmployers: ["South Lake Hospital (nearby)", "National homebuilders", "Retail services"],
    demographics: "Median household income ~$70,000 with explosive residential growth driving new commercial development.",
  },
];

export function getCityBySlug(slug: string): CityData | null {
  return cities.find((c) => c.slug === slug) ?? null;
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
