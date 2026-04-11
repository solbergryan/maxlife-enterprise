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
];

export function getCityBySlug(slug: string): CityData | null {
  return cities.find((c) => c.slug === slug) ?? null;
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
