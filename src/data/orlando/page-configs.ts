import type { FAQ } from "./faqs";
import { cityFaqs, hubFaqs } from "./faqs";
import { getCityStats, type SegmentStats } from "./market-stats";
import { cities, getCityBySlug, type CityData } from "@/data/seo/cities";

export interface OrlandoPageConfig {
  slug: string;
  citySlug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  subhead: string;
  heroBody: string;
  ctaLabel: string;
  heroImage: string;
  heroAlt: string;
  stats: SegmentStats;
  faqs: FAQ[];
  related: { slug: string; label: string }[];
  city: CityData;
}

const HERO_IMAGES = {
  retail:
    "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-shop-center-street-city-shopping-evening-3722822.webp",
  office:
    "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscrapers-buildings-skyline-city-real-5999913.webp",
  industrial:
    "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
  hub: "/images/commercial-stock/commercial-business/maxlife-commercial-business-skyscrapers-modern-architecture-glassed-buildings-blue-10235499.webp",
  land: "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-blue-sky-nature-site-crane-228471.webp",
  mixed: "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
};

// City-specific hero image assignments
const CITY_HEROES: Record<string, { src: string; alt: string }> = {
  "winter-park": { src: HERO_IMAGES.retail, alt: "Winter Park commercial real estate" },
  maitland: { src: HERO_IMAGES.office, alt: "Maitland commercial office real estate" },
  "lake-nona": { src: HERO_IMAGES.office, alt: "Lake Nona Medical City commercial real estate" },
  sanford: { src: HERO_IMAGES.industrial, alt: "Sanford commercial industrial real estate" },
  kissimmee: { src: HERO_IMAGES.retail, alt: "Kissimmee commercial real estate" },
  "altamonte-springs": { src: HERO_IMAGES.retail, alt: "Altamonte Springs commercial real estate" },
  "lake-mary": { src: HERO_IMAGES.office, alt: "Lake Mary commercial office real estate" },
  oviedo: { src: HERO_IMAGES.retail, alt: "Oviedo commercial real estate" },
  "winter-garden": { src: HERO_IMAGES.retail, alt: "Winter Garden commercial real estate" },
  apopka: { src: HERO_IMAGES.industrial, alt: "Apopka commercial real estate" },
  windermere: { src: HERO_IMAGES.retail, alt: "Windermere commercial real estate" },
  celebration: { src: HERO_IMAGES.mixed, alt: "Celebration commercial real estate" },
  clermont: { src: HERO_IMAGES.retail, alt: "Clermont commercial real estate" },
  davenport: { src: HERO_IMAGES.retail, alt: "Davenport commercial real estate" },
  "st-cloud": { src: HERO_IMAGES.land, alt: "St. Cloud commercial real estate" },
  "mount-dora": { src: HERO_IMAGES.mixed, alt: "Mount Dora commercial real estate" },
  leesburg: { src: HERO_IMAGES.industrial, alt: "Leesburg commercial real estate" },
  minneola: { src: HERO_IMAGES.land, alt: "Minneola commercial real estate development" },
  longwood: { src: HERO_IMAGES.office, alt: "Longwood commercial real estate" },
  "winter-springs": { src: HERO_IMAGES.retail, alt: "Winter Springs commercial real estate" },
  casselberry: { src: HERO_IMAGES.retail, alt: "Casselberry commercial real estate" },
  ocoee: { src: HERO_IMAGES.retail, alt: "Ocoee commercial real estate" },
  deltona: { src: HERO_IMAGES.retail, alt: "Deltona commercial real estate" },
  poinciana: { src: HERO_IMAGES.land, alt: "Poinciana commercial real estate development" },
};

// City to county kicker label
function getKicker(city: CityData): string {
  return `${city.county} · Central Florida`;
}

// Hub related links for each city page
const CORE_RELATED = [
  { slug: "orlando-commercial-real-estate-deals", label: "Orlando CRE Deals" },
  { slug: "nnn-properties-florida", label: "NNN Properties" },
  { slug: "central-florida-land-for-development", label: "Land for Development" },
  { slug: "industrial-property-central-florida", label: "Industrial Property" },
  { slug: "cap-rates", label: "Cap Rate Tool" },
  { slug: "contact", label: "Contact Our Team" },
];

// City-specific configs
interface CityConfig {
  subhead: string;
  heroBody: string;
  ctaLabel: string;
  extraRelated?: { slug: string; label: string }[];
}

const CITY_CONFIGS: Record<string, CityConfig> = {
  "winter-park": {
    subhead: "Premium retail, office, and NNN investment in Central Florida's most affluent submarket",
    heroBody:
      "Winter Park is Central Florida's highest-barrier commercial market — Park Avenue retail trades at the tightest cap rates in the metro, Class A office in the Maitland-Winter Park corridor retains tenants at high renewal rates, and developable land is effectively exhausted. MaxLife Realty works buyer acquisitions, investment sales, and tenant representation throughout the Winter Park trade area.",
    ctaLabel: "Explore Winter Park Properties",
    extraRelated: [
      { slug: "office-space-for-lease-orlando", label: "Office Space for Lease" },
      { slug: "retail-space-for-rent-orlando", label: "Retail Space" },
    ],
  },
  maitland: {
    subhead: "Corporate office, medical, and suburban investment in the heart of the Maitland Center corridor",
    heroBody:
      "Maitland Center is Central Florida's largest suburban office concentration outside downtown — Fortune 1000 regional headquarters, financial services firms, and medical office users anchor a market with consistently high tenant retention. MaxLife Realty works acquisition and disposition across office, retail, and investment property throughout the Maitland corridor.",
    ctaLabel: "Explore Maitland Properties",
    extraRelated: [
      { slug: "office-space-for-lease-orlando", label: "Office Space for Lease" },
    ],
  },
  "lake-nona": {
    subhead: "Medical City office, Class A multifamily, and investment property in Orlando's fastest-growing submarket",
    heroBody:
      "Lake Nona is a 17-square-mile master-planned community built around Medical City — UCF Medical School, Nemours Children's Hospital, the VA Medical Center, and Orlando Health are the primary demand drivers for medical office, life sciences, and Class A multifamily. MaxLife Realty works acquisition and tenant-rep engagements throughout the Lake Nona and Narcoossee Corridor.",
    ctaLabel: "Explore Lake Nona Properties",
    extraRelated: [
      { slug: "sell-commercial-property", label: "Sell Your Property" },
    ],
  },
  sanford: {
    subhead: "Industrial, warehouse, and investment property at the northern gateway of the Orlando metro",
    heroBody:
      "Sanford's combination of I-4 access, CSX intermodal, and Orlando Sanford International Airport creates one of the deepest logistics and industrial markets in the Orlando metro. MaxLife Realty represents buyers, sellers, and tenants across industrial, retail, office, and land throughout the Sanford and Lake Monroe area.",
    ctaLabel: "Explore Sanford Properties",
    extraRelated: [
      { slug: "industrial-property-central-florida", label: "Industrial Property" },
      { slug: "find-logistics-space-florida", label: "Find Logistics Space" },
    ],
  },
  kissimmee: {
    subhead: "Tourism-corridor retail, NNN investments, and industrial property in Osceola County",
    heroBody:
      "Kissimmee is the commercial core of the US-192 tourism corridor — the highest concentration of short-term vacation rentals in the United States — generating outsized and consistent demand for QSR, convenience retail, and hospitality-adjacent commercial. MaxLife Realty works acquisition, disposition, and tenant representation across retail, industrial, land, and investment properties throughout the Kissimmee and US-192 area.",
    ctaLabel: "Explore Kissimmee Properties",
    extraRelated: [
      { slug: "nnn-properties-florida", label: "NNN Properties" },
      { slug: "sell-commercial-property", label: "Sell Commercial Property" },
    ],
  },
  "altamonte-springs": {
    subhead: "Retail, medical office, and investment property on the I-4 Seminole County corridor",
    heroBody:
      "Altamonte Springs anchors the northern I-4 corridor in Seminole County — Altamonte Mall, AdventHealth Altamonte, and strong suburban office demand create a well-balanced investment market. MaxLife Realty works acquisitions, dispositions, and tenant representation throughout the Altamonte-Casselberry-Longwood corridor.",
    ctaLabel: "Explore Altamonte Springs Properties",
    extraRelated: [
      { slug: "retail-space-for-rent-orlando", label: "Retail Space" },
      { slug: "office-space-for-lease-orlando", label: "Office Space for Lease" },
    ],
  },
  "lake-mary": {
    subhead: "Class A office, medical, and premium retail investment in Seminole County's corporate corridor",
    heroBody:
      "Lake Mary and Heathrow are home to more Fortune 1000 regional headquarters than any other Central Florida submarket outside of downtown Orlando — Fidelity National Financial, AAA, and Deloitte anchor an office market with consistently strong tenant retention and the highest household incomes in Seminole County. MaxLife Realty works acquisition, disposition, and tenant representation throughout the Lake Mary and Heathrow trade area.",
    ctaLabel: "Explore Lake Mary Properties",
    extraRelated: [
      { slug: "office-space-for-lease-orlando", label: "Office Space for Lease" },
      { slug: "nnn-properties-florida", label: "NNN Properties" },
    ],
  },
  oviedo: {
    subhead: "Neighborhood retail, medical office, and suburban investment near UCF in Seminole County",
    heroBody:
      "Oviedo's proximity to UCF and its top-rated Seminole County school district drive consistent demand for neighborhood-serving retail, medical office, and service-tenant space — with limited new supply keeping occupancy high. MaxLife Realty works acquisitions, dispositions, and tenant representation throughout the Oviedo and SR-426 corridor.",
    ctaLabel: "Explore Oviedo Properties",
    extraRelated: [
      { slug: "retail-space-for-rent-orlando", label: "Retail Space" },
    ],
  },
  "winter-garden": {
    subhead: "High-growth retail, industrial, and investment property on the SR-429 West Orange corridor",
    heroBody:
      "Winter Garden is one of Central Florida's fastest-growing suburban markets — the SR-429 Western Expressway has unlocked a corridor of explosive residential growth that is now driving urgent demand for national retail, medical office, and industrial development. MaxLife Realty works acquisitions, land sales, and tenant representation throughout the Winter Garden, Horizon West, and SR-429 corridor.",
    ctaLabel: "Explore Winter Garden Properties",
    extraRelated: [
      { slug: "central-florida-land-for-development", label: "Land for Development" },
      { slug: "industrial-property-central-florida", label: "Industrial Property" },
    ],
  },
  apopka: {
    subhead: "Fast-growing industrial and retail investment in Orange County's northern gateway",
    heroBody:
      "Apopka is Orange County's fastest-growing city — the US-441, SR-429, and SR-436 corridors are experiencing rapid commercial absorption as master-planned residential communities absorb thousands of new residents annually. MaxLife Realty works acquisitions, land sales, and tenant representation for retail, industrial, and investment properties throughout the Apopka trade area.",
    ctaLabel: "Explore Apopka Properties",
    extraRelated: [
      { slug: "industrial-property-central-florida", label: "Industrial Property" },
      { slug: "central-florida-land-for-development", label: "Land for Development" },
    ],
  },
  windermere: {
    subhead: "Premium retail, NNN, and professional-services investment in SW Orange County's most affluent community",
    heroBody:
      "Windermere commands the highest household incomes in Orange County — commercial tenants serving Windermere's wealth management, premium healthcare, and luxury retail demand benefit from an extraordinarily stable, high-spending consumer base. MaxLife Realty works acquisitions and tenant representation for premium retail, medical, and professional-services properties throughout the Windermere and Gotha corridor.",
    ctaLabel: "Explore Windermere Properties",
    extraRelated: [
      { slug: "nnn-properties-florida", label: "NNN Properties" },
      { slug: "retail-space-for-rent-orlando", label: "Retail Space" },
    ],
  },
  celebration: {
    subhead: "Town center retail, professional office, and investment property in Disney's master-planned community",
    heroBody:
      "Celebration's fully programmed town center, Disney-proximity tourism traffic, and captive high-income resident base create a uniquely stable commercial real estate environment. MaxLife Realty works acquisitions, investment sales, and tenant representation throughout Celebration and the US-192 / US-27 tourism corridor.",
    ctaLabel: "Explore Celebration Properties",
    extraRelated: [
      { slug: "nnn-properties-florida", label: "NNN Properties" },
      { slug: "kissimmee-commercial-real-estate", label: "Kissimmee CRE" },
    ],
  },
  clermont: {
    subhead: "Fast-growing retail, land development, and investment property on the US-27 West Orange corridor",
    heroBody:
      "Clermont is one of Central Florida's highest-growth commercial corridors — the US-27 and Florida Turnpike intersection is generating some of the strongest retail pad-site and QSR demand in the metro as residential population explodes. MaxLife Realty works land acquisition, retail investment, and developer representation throughout the Clermont, Minneola, and US-27 corridor.",
    ctaLabel: "Explore Clermont Properties",
    extraRelated: [
      { slug: "central-florida-land-for-development", label: "Land for Development" },
      { slug: "minneola-commercial-real-estate", label: "Minneola CRE" },
    ],
  },
  davenport: {
    subhead: "Tourism-corridor retail, NNN, and land investment on the US-27 and I-4 interchange",
    heroBody:
      "Davenport sits at the epicenter of the US-27 vacation corridor — within five miles of more short-term vacation rentals than almost anywhere on earth — generating outsized QSR, convenience retail, and hospitality-adjacent commercial demand. MaxLife Realty works retail acquisitions, land sales, and investment disposition throughout the Davenport and Champions Gate corridor.",
    ctaLabel: "Explore Davenport Properties",
    extraRelated: [
      { slug: "nnn-properties-florida", label: "NNN Properties" },
      { slug: "central-florida-land-for-development", label: "Land for Development" },
    ],
  },
  "st-cloud": {
    subhead: "Growing retail, land, and investment property in east Osceola County",
    heroBody:
      "St. Cloud is absorbing rapid residential growth driven by Lake Nona spillover and Narcoossee Road development — national retailers, medical users, and commercial land developers are racing to serve a fast-growing population that is still significantly underserved. MaxLife Realty works acquisitions, land sales, and investment dispositions throughout the St. Cloud and Narcoossee corridor.",
    ctaLabel: "Explore St. Cloud Properties",
    extraRelated: [
      { slug: "central-florida-land-for-development", label: "Land for Development" },
      { slug: "lake-nona-commercial-real-estate", label: "Lake Nona CRE" },
    ],
  },
  "mount-dora": {
    subhead: "Historic downtown retail, hospitality, and mixed-use investment in Lake County's tourism gem",
    heroBody:
      "Mount Dora's historic downtown and lakefront setting attract millions of visitors annually for festivals, antiquing, and the arts — generating some of the most consistent boutique retail, F&B, and hospitality-adjacent commercial demand in the region. MaxLife Realty works acquisitions and investment dispositions throughout Mount Dora and the US-441 Lake County corridor.",
    ctaLabel: "Explore Mount Dora Properties",
    extraRelated: [
      { slug: "clermont-commercial-real-estate", label: "Clermont CRE" },
      { slug: "1031-exchange-florida", label: "1031 Exchange Florida" },
    ],
  },
  leesburg: {
    subhead: "Affordable industrial, retail, and land investment at the US-27 / US-441 crossroads",
    heroBody:
      "Leesburg offers some of the most affordable commercial land and strongest logistics positioning in the region — adjacent to The Villages (Florida's largest retirement community), with strong demand for healthcare, services retail, and industrial distribution. MaxLife Realty works acquisitions, land sales, and investment dispositions throughout the Leesburg and Lake County corridor.",
    ctaLabel: "Explore Leesburg Properties",
    extraRelated: [
      { slug: "central-florida-land-for-development", label: "Land for Development" },
      { slug: "industrial-property-central-florida", label: "Industrial Property" },
    ],
  },
  minneola: {
    subhead: "One of the highest-growth land development corridors in Central Florida",
    heroBody:
      "Minneola's Wellness Way planned development corridor is one of the largest commercially entitled master-plan projects underway in the state — thousands of acres of future retail, medical, and industrial sites alongside explosive residential growth and Florida Turnpike access. MaxLife Realty specializes in land acquisition, entitlement, and pad-site sales throughout the Minneola and Wellness Way corridor.",
    ctaLabel: "Explore Minneola Properties",
    extraRelated: [
      { slug: "central-florida-land-for-development", label: "Land for Development" },
      { slug: "clermont-commercial-real-estate", label: "Clermont CRE" },
    ],
  },
  longwood: {
    subhead: "Medical office, professional services, and suburban investment on the Seminole County SR-434 corridor",
    heroBody:
      "Longwood's SR-434 and US-17-92 corridors anchor a mature Seminole County commercial market with steady demand from medical and professional-services tenants backed by a stable, high-income residential base. MaxLife Realty works acquisitions, investment sales, and tenant representation throughout the Longwood and north Seminole County area.",
    ctaLabel: "Explore Longwood Properties",
    extraRelated: [
      { slug: "altamonte-springs-commercial-real-estate", label: "Altamonte Springs CRE" },
      { slug: "lake-mary-commercial-real-estate", label: "Lake Mary CRE" },
    ],
  },
  "winter-springs": {
    subhead: "Town center retail, medical office, and suburban investment in fast-growing Seminole County",
    heroBody:
      "Winter Springs' Town Center district and SR-434 corridor combine Seminole County's top-rated schools and high household incomes with a growing mixed-use commercial node — delivering steady demand for neighborhood retail, medical office, and service-tenant space. MaxLife Realty works acquisitions, investment sales, and tenant representation throughout Winter Springs and the SR-434 corridor.",
    ctaLabel: "Explore Winter Springs Properties",
    extraRelated: [
      { slug: "oviedo-commercial-real-estate", label: "Oviedo CRE" },
      { slug: "altamonte-springs-commercial-real-estate", label: "Altamonte Springs CRE" },
    ],
  },
  casselberry: {
    subhead: "Affordable value-add retail and office investment on the US-17-92 corridor",
    heroBody:
      "Casselberry's US-17-92 commercial corridor provides affordable entry into Seminole County's commercial market — dense residential demand, proximity to Altamonte Springs and Winter Park, and value-add office product create opportunities for owner-users and yield-focused investors. MaxLife Realty works acquisitions and investment dispositions throughout the Casselberry and central Seminole County area.",
    ctaLabel: "Explore Casselberry Properties",
    extraRelated: [
      { slug: "altamonte-springs-commercial-real-estate", label: "Altamonte Springs CRE" },
      { slug: "winter-springs-commercial-real-estate", label: "Winter Springs CRE" },
    ],
  },
  ocoee: {
    subhead: "Fast-growing retail and industrial investment on the SR-50 and SR-429 West Orange corridor",
    heroBody:
      "Ocoee's SR-50 corridor is one of Orange County's highest-traffic commercial arteries and the primary retail expansion corridor for West Orlando — national retailers, QSR operators, and healthcare users are aggressively targeting Ocoee as residential growth continues to outpace commercial supply. MaxLife Realty works land acquisitions, retail investment, and tenant representation throughout the Ocoee and West Orange County area.",
    ctaLabel: "Explore Ocoee Properties",
    extraRelated: [
      { slug: "winter-garden-commercial-real-estate", label: "Winter Garden CRE" },
      { slug: "central-florida-land-for-development", label: "Land for Development" },
    ],
  },
  deltona: {
    subhead: "High-growth retail and industrial investment in Volusia County's largest city",
    heroBody:
      "Deltona is Volusia County's largest city and a rapidly growing bedroom community for the Orlando metro — the Saxon Boulevard and Howland Boulevard corridors are experiencing significant retail and medical office expansion as a large, underserved population continues to grow. MaxLife Realty works acquisitions, land sales, and investment dispositions throughout the Deltona and I-4 Volusia County corridor.",
    ctaLabel: "Explore Deltona Properties",
    extraRelated: [
      { slug: "sanford-commercial-real-estate", label: "Sanford CRE" },
      { slug: "central-florida-land-for-development", label: "Land for Development" },
    ],
  },
  poinciana: {
    subhead: "One of Florida's highest-growth commercial development corridors in Osceola and Polk counties",
    heroBody:
      "Poinciana is one of the fastest-growing communities in the entire United States — a massive, demographically young residential population is severely underserved by commercial supply, creating high-urgency demand for national retail, QSR, medical, and logistics along the Poinciana Parkway and US-17-92 corridor. MaxLife Realty works land acquisition, retail development, and investment disposition throughout Poinciana and the south Osceola / Polk County growth corridor.",
    ctaLabel: "Explore Poinciana Properties",
    extraRelated: [
      { slug: "kissimmee-commercial-real-estate", label: "Kissimmee CRE" },
      { slug: "central-florida-land-for-development", label: "Land for Development" },
    ],
  },
};

function buildConfig(citySlug: string): OrlandoPageConfig | null {
  const city = getCityBySlug(citySlug);
  if (!city) return null;

  const cc = CITY_CONFIGS[citySlug];
  if (!cc) return null;

  const hero = CITY_HEROES[citySlug] ?? {
    src: HERO_IMAGES.hub,
    alt: `${city.name} commercial real estate`,
  };

  const related = [
    ...(cc.extraRelated ?? []),
    ...CORE_RELATED,
  ].slice(0, 6);

  return {
    slug: `${citySlug}-commercial-real-estate`,
    citySlug,
    metaTitle: `${city.name} Commercial Real Estate | ${city.county} CRE`,
    metaDescription: `${city.name} commercial real estate — investment property, office, retail, industrial, multifamily, and land for sale and lease. MaxLife Realty covers the full ${city.name} and ${city.county} market.`,
    kicker: getKicker(city),
    subhead: cc.subhead,
    heroBody: cc.heroBody,
    ctaLabel: cc.ctaLabel,
    heroImage: hero.src,
    heroAlt: hero.alt,
    stats: getCityStats(citySlug),
    faqs: cityFaqs,
    related,
    city,
  };
}

const ORLANDO_CITY_SLUGS = [
  "winter-park",
  "maitland",
  "lake-nona",
  "sanford",
  "kissimmee",
  "altamonte-springs",
  "lake-mary",
  "oviedo",
  "winter-garden",
  "apopka",
  "windermere",
  "celebration",
  "clermont",
  "davenport",
  "st-cloud",
  "mount-dora",
  "leesburg",
  "minneola",
  "longwood",
  "winter-springs",
  "casselberry",
  "ocoee",
  "deltona",
  "poinciana",
];

export const orlandoPageConfigs: OrlandoPageConfig[] = ORLANDO_CITY_SLUGS.flatMap((slug) => {
  const config = buildConfig(slug);
  return config ? [config] : [];
});

export const allOrlandoCitySlugs: string[] = orlandoPageConfigs.map((c) => c.slug);

export function getOrlandoPageConfig(slug: string): OrlandoPageConfig | undefined {
  return orlandoPageConfigs.find((c) => c.slug === slug);
}
