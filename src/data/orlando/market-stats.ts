export interface StatItem {
  label: string;
  value: string;
  hint?: string;
}

export interface SegmentStats {
  headline: string;
  blurb: string;
  stats: StatItem[];
}

export const cityStats: Record<string, SegmentStats> = {
  orlando: {
    headline: "Orlando Commercial Real Estate at a Glance",
    blurb:
      "Orlando is the fourth-largest metro in Florida and one of the fastest-growing commercial markets in the Southeast, with deep deal flow across every asset class and investor profile.",
    stats: [
      { label: "Metro Population", value: "3.3M+", hint: "Orange, Seminole, Osceola, Lake counties" },
      { label: "Annual Visitors", value: "75M+", hint: "World's #1 tourism destination" },
      { label: "Industrial Vacancy", value: "~4%", hint: "Metro-wide, 2026-Q1" },
      { label: "Retail Cap Rate Range", value: "5.5–8%", hint: "NNN to multi-tenant strip" },
    ],
  },
  "winter-park": {
    headline: "Winter Park CRE Market Snapshot",
    blurb:
      "Winter Park commands premium pricing across every asset class — limited supply, top-tier demographics, and Park Avenue retail demand keep cap rates compressed and owner-user demand high.",
    stats: [
      { label: "Median HH Income", value: "$105K+", hint: "Among Central Florida's highest" },
      { label: "Retail Vacancy", value: "~3%", hint: "Park Ave corridor, 2026-Q1" },
      { label: "Office Cap Rate", value: "5.5–6.5%", hint: "Class A and Class B suburban" },
      { label: "Population", value: "32,000", hint: "City proper, dense trade area" },
    ],
  },
  maitland: {
    headline: "Maitland CRE Market Snapshot",
    blurb:
      "Maitland Center is Central Florida's largest suburban office concentration outside downtown, with steady corporate-tenant demand, strong retention, and medical office anchoring the market.",
    stats: [
      { label: "Office Inventory", value: "5M+ SF", hint: "Maitland Center and surrounds" },
      { label: "Median HH Income", value: "$80K+", hint: "City and immediate trade area" },
      { label: "Office Cap Rate", value: "6.0–7.5%", hint: "Class A to value-add" },
      { label: "Population", value: "18,000", hint: "City proper" },
    ],
  },
  "lake-nona": {
    headline: "Lake Nona CRE Market Snapshot",
    blurb:
      "Lake Nona / Medical City is Orlando's fastest-growing submarket, anchored by the UCF Medical School and Nemours Children's Hospital, with the strongest Class A multifamily and medical office fundamentals in the metro.",
    stats: [
      { label: "Medical City Employees", value: "20,000+", hint: "UCF Medical, Nemours, VA, Orlando Health" },
      { label: "Multifamily Cap Rate", value: "4.75–5.75%", hint: "Class A, 2026-Q1" },
      { label: "Retail Vacancy", value: "~5%", hint: "Medical City corridor" },
      { label: "Population Growth", value: "+8%/yr", hint: "One of Florida's fastest-growing zip codes" },
    ],
  },
  sanford: {
    headline: "Sanford CRE Market Snapshot",
    blurb:
      "Sanford offers the deepest industrial and flex inventory at the northern gateway of the Orlando metro, with CSX intermodal, Orlando Sanford Airport, and direct I-4 access driving strong logistics and warehouse demand.",
    stats: [
      { label: "Industrial Vacancy", value: "~5%", hint: "Sanford/Seminole industrial market" },
      { label: "Industrial Cap Rate", value: "6.0–7.5%", hint: "Flex to bulk warehouse" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "Strip center and NNN pad" },
      { label: "Population", value: "65,000", hint: "City proper, fast-growing" },
    ],
  },
  kissimmee: {
    headline: "Kissimmee CRE Market Snapshot",
    blurb:
      "Kissimmee anchors Florida's tourism corridor — the highest concentration of short-term rentals in the US — with strong hospitality-adjacent retail, NNN food-and-beverage, and industrial growth in outer Osceola County.",
    stats: [
      { label: "Annual STR Guests", value: "40M+", hint: "US-192 tourism corridor" },
      { label: "Retail Cap Rate", value: "6.0–8.0%", hint: "Tourism strip to neighborhood retail" },
      { label: "Industrial Vacancy", value: "~5%", hint: "Outer Osceola industrial parks" },
      { label: "Population", value: "75,000", hint: "City proper, booming metro" },
    ],
  },
  "altamonte-springs": {
    headline: "Altamonte Springs CRE Market Snapshot",
    blurb:
      "Altamonte Springs is an established commercial hub with Altamonte Mall anchoring retail demand and AdventHealth driving one of the strongest medical office corridors in Seminole County.",
    stats: [
      { label: "Median HH Income", value: "$62K+", hint: "Dense mature suburban base" },
      { label: "Office Cap Rate", value: "6.5–8.0%", hint: "Class B and medical office" },
      { label: "Retail Vacancy", value: "~6%", hint: "Altamonte Mall corridor" },
      { label: "Population", value: "45,000", hint: "City proper" },
    ],
  },
  "lake-mary": {
    headline: "Lake Mary CRE Market Snapshot",
    blurb:
      "Lake Mary and Heathrow are Central Florida's premier corporate office submarket — Fortune 1000 regional HQs, the highest median incomes in Seminole County, and tight retail vacancy keep this market at the top of the cap-rate compression list.",
    stats: [
      { label: "Median HH Income", value: "$100K+", hint: "Among the highest in Central Florida" },
      { label: "Class A Office Cap", value: "5.5–6.5%", hint: "Corporate HQ submarket" },
      { label: "Retail Vacancy", value: "~4%", hint: "Lake Mary Blvd corridor" },
      { label: "Population", value: "17,000", hint: "City proper; dense employment base" },
    ],
  },
  oviedo: {
    headline: "Oviedo CRE Market Snapshot",
    blurb:
      "Oviedo's adjacency to UCF and its top-rated school district drive consistent demand for neighborhood retail, medical office, and service-tenant space — with limited new supply keeping occupancy high.",
    stats: [
      { label: "Median HH Income", value: "$90K+", hint: "Family-oriented, education-driven" },
      { label: "Retail Vacancy", value: "~5%", hint: "SR-426 corridor" },
      { label: "Medical Office Cap", value: "6.0–7.0%", hint: "Oviedo Medical Center trade area" },
      { label: "Population", value: "43,000", hint: "City proper" },
    ],
  },
  "winter-garden": {
    headline: "Winter Garden CRE Market Snapshot",
    blurb:
      "Winter Garden is one of Central Florida's fastest-growing suburban markets, with the SR-429 corridor driving explosive residential and commercial growth and the historic Plant Street downtown anchoring premium retail demand.",
    stats: [
      { label: "Median HH Income", value: "$85K+", hint: "High-growth family demographic" },
      { label: "Retail Vacancy", value: "~4%", hint: "Plant Street and SR-429 corridors" },
      { label: "Industrial Cap Rate", value: "6.0–7.5%", hint: "SR-429 industrial corridor" },
      { label: "Population", value: "48,000", hint: "City proper, one of Florida's fastest-growing" },
    ],
  },
  apopka: {
    headline: "Apopka CRE Market Snapshot",
    blurb:
      "Apopka is Orange County's fastest-growing city, with US-441 and SR-429 driving industrial logistics and retail expansion as population surges from new master-planned residential communities.",
    stats: [
      { label: "Population Growth", value: "+5%/yr", hint: "Orange County's fastest-growing city" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "US-441 and US-441 Apopka Bypass" },
      { label: "Industrial Vacancy", value: "~5%", hint: "SR-429 and US-441 corridors" },
      { label: "Population", value: "57,000", hint: "City proper, growing fast" },
    ],
  },
  windermere: {
    headline: "Windermere CRE Market Snapshot",
    blurb:
      "Windermere is one of Florida's most affluent communities — premium retail, wealth management, and medical services command the highest rents in SW Orange County, supported by a concentration of high-net-worth households.",
    stats: [
      { label: "Median HH Income", value: "$130K+", hint: "Among the highest in Florida" },
      { label: "Retail Vacancy", value: "~3%", hint: "Windermere and Gotha retail corridors" },
      { label: "NNN Cap Rate", value: "5.25–6.0%", hint: "Premium pad sites near high-income demos" },
      { label: "Population", value: "3,500", hint: "Town proper; massive affluent trade area" },
    ],
  },
  celebration: {
    headline: "Celebration CRE Market Snapshot",
    blurb:
      "Celebration is Disney's planned community with a fully programmed town center, consistent foot traffic, and a captive resident base — boutique retail, medical, and professional services command premium rents.",
    stats: [
      { label: "Median HH Income", value: "$95K+", hint: "Planned community with strong HOA base" },
      { label: "Retail Vacancy", value: "~4%", hint: "Celebration Town Center" },
      { label: "Office Cap Rate", value: "6.0–7.0%", hint: "Professional-services submarket" },
      { label: "Annual Visitors", value: "1M+", hint: "Disney proximity drives ancillary traffic" },
    ],
  },
  clermont: {
    headline: "Clermont CRE Market Snapshot",
    blurb:
      "Clermont is one of Central Florida's fastest-growing cities, with the US-27 corridor and Florida Turnpike access driving explosive retail, QSR, and industrial development to serve a surging residential population.",
    stats: [
      { label: "Population Growth", value: "+7%/yr", hint: "One of Florida's fastest-growing cities" },
      { label: "Retail Cap Rate", value: "6.0–8.0%", hint: "US-27 corridor pads and strip centers" },
      { label: "Land Yield-on-Cost", value: "7–10%", hint: "Entitled pad sites near Turnpike interchanges" },
      { label: "Population", value: "52,000", hint: "City proper, Lake County seat" },
    ],
  },
  davenport: {
    headline: "Davenport CRE Market Snapshot",
    blurb:
      "Davenport sits at the center of the US-27 vacation corridor — one of the highest concentrations of short-term rentals in the world — generating outsized demand for QSR, convenience retail, and hospitality-adjacent commercial.",
    stats: [
      { label: "STR Units (nearby)", value: "80,000+", hint: "Champions Gate and US-192 combined" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "US-27 and I-4 interchange sites" },
      { label: "Land Demand", value: "High", hint: "Entitlements moving fast along US-27" },
      { label: "Population", value: "10,000", hint: "City proper; massive tourist trade area" },
    ],
  },
  "st-cloud": {
    headline: "St. Cloud CRE Market Snapshot",
    blurb:
      "St. Cloud is rapidly absorbing residential growth from Lake Nona spillover, with the Narcoossee Road and US-192 corridors attracting national retailers, medical users, and new commercial land development.",
    stats: [
      { label: "Population Growth", value: "+4%/yr", hint: "Narcoossee/Lake Nona corridor" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "US-192 strip and pad sites" },
      { label: "Land Pricing", value: "Affordable", hint: "One of the best-value development corridors in the metro" },
      { label: "Population", value: "60,000", hint: "City proper, east Osceola County" },
    ],
  },
  "mount-dora": {
    headline: "Mount Dora CRE Market Snapshot",
    blurb:
      "Mount Dora's historic downtown and lakefront setting support a thriving boutique retail, hospitality, and mixed-use market — limited supply and strong tourism demand keep occupancy high year-round.",
    stats: [
      { label: "Annual Festivals", value: "20+", hint: "Arts, antiques, and events driving foot traffic" },
      { label: "Retail Vacancy", value: "~5%", hint: "Historic downtown district" },
      { label: "Mixed-Use Cap Rate", value: "6.5–8.0%", hint: "Downtown infill product" },
      { label: "Population", value: "16,000", hint: "City proper; large retiree trade area" },
    ],
  },
  leesburg: {
    headline: "Leesburg CRE Market Snapshot",
    blurb:
      "Leesburg offers affordable commercial land and logistics positioning at the crossroads of US-27 and US-441, with proximity to The Villages retirement market providing a uniquely large and growing consumer base.",
    stats: [
      { label: "The Villages (nearby)", value: "150K+", hint: "World's largest retirement community" },
      { label: "Industrial Cap Rate", value: "7.0–8.5%", hint: "US-441 industrial corridor" },
      { label: "Retail Cap Rate", value: "7.0–8.5%", hint: "Services retail to The Villages" },
      { label: "Population", value: "28,000", hint: "City proper; growing fast" },
    ],
  },
  minneola: {
    headline: "Minneola CRE Market Snapshot",
    blurb:
      "Minneola's Wellness Way corridor is one of the most actively entitled commercial development zones in the state, with Florida Turnpike access, explosive residential growth, and some of the most affordable developable land in the metro.",
    stats: [
      { label: "Wellness Way Pipeline", value: "2,000 acres", hint: "Master-planned mixed-use development" },
      { label: "Land Pricing", value: "Lowest in metro", hint: "Best value commercial land near I-4" },
      { label: "Population Growth", value: "+10%/yr", hint: "One of Florida's fastest-growing" },
      { label: "Population", value: "14,000", hint: "City proper; rapid expansion" },
    ],
  },
  longwood: {
    headline: "Longwood CRE Market Snapshot",
    blurb:
      "Longwood's mature Seminole County location provides stable, high-income demand for professional-services and medical office along SR-434 and US-17-92 corridors.",
    stats: [
      { label: "Median HH Income", value: "$72K+", hint: "Stable, owner-occupied suburban market" },
      { label: "Office Cap Rate", value: "6.5–8.0%", hint: "Class B and medical office" },
      { label: "Retail Vacancy", value: "~6%", hint: "SR-434 and US-17-92 corridors" },
      { label: "Population", value: "15,000", hint: "City proper" },
    ],
  },
  "winter-springs": {
    headline: "Winter Springs CRE Market Snapshot",
    blurb:
      "Winter Springs combines Seminole County's top-rated schools and high household incomes with a growing Town Center district — steady demand for neighborhood retail, medical, and service-tenant space.",
    stats: [
      { label: "Median HH Income", value: "$80K+", hint: "Family-oriented, high-income base" },
      { label: "Retail Vacancy", value: "~5%", hint: "Town Center and SR-434" },
      { label: "Medical Office Cap", value: "6.0–7.5%", hint: "Near major healthcare anchors" },
      { label: "Population", value: "37,000", hint: "City proper" },
    ],
  },
  casselberry: {
    headline: "Casselberry CRE Market Snapshot",
    blurb:
      "Casselberry offers affordable commercial entry on the US-17-92 corridor with a dense residential base and proximity to the stronger Altamonte Springs and Winter Park submarkets.",
    stats: [
      { label: "Median HH Income", value: "$55K+", hint: "Dense, diverse suburban base" },
      { label: "Retail Cap Rate", value: "7.0–9.0%", hint: "US-17-92 strip centers" },
      { label: "Office Cap Rate", value: "7.0–8.5%", hint: "Value-add owner-user product" },
      { label: "Population", value: "29,000", hint: "City proper" },
    ],
  },
  ocoee: {
    headline: "Ocoee CRE Market Snapshot",
    blurb:
      "Ocoee's SR-50 and SR-429 corridors are among the highest-growth commercial zones in Orange County, attracting national retailers and QSR operators racing to serve one of the metro's fastest-growing residential populations.",
    stats: [
      { label: "Population Growth", value: "+4%/yr", hint: "SR-429 corridor expansion" },
      { label: "Retail Vacancy", value: "~5%", hint: "SR-50 and Clarke Road" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "Strip center and pad sites" },
      { label: "Population", value: "51,000", hint: "City proper" },
    ],
  },
  deltona: {
    headline: "Deltona CRE Market Snapshot",
    blurb:
      "Deltona is Volusia County's largest city and a high-growth Orlando bedroom community, with the Saxon Boulevard and Howland Boulevard corridors generating strong demand for services retail, medical, and logistics.",
    stats: [
      { label: "Population", value: "98,000", hint: "Volusia County's largest city" },
      { label: "Population Growth", value: "+3%/yr", hint: "I-4 corridor bedroom community" },
      { label: "Retail Cap Rate", value: "7.0–9.0%", hint: "Saxon Blvd and Howland Blvd" },
      { label: "Land Pricing", value: "Affordable", hint: "Among lowest in the metro area" },
    ],
  },
  poinciana: {
    headline: "Poinciana CRE Market Snapshot",
    blurb:
      "Poinciana is one of the fastest-growing communities in Florida — a massive, underserved residential population is driving urgent demand for national retail, QSR, and medical development along the Poinciana Parkway corridor.",
    stats: [
      { label: "Population", value: "82,000", hint: "And growing fast" },
      { label: "Population Growth", value: "+5%/yr", hint: "One of Florida's fastest" },
      { label: "Retail Cap Rate", value: "6.5–8.5%", hint: "Poinciana Pkwy corridor" },
      { label: "Land Demand", value: "Very High", hint: "Severely underbuilt for population size" },
    ],
  },
};

export function getCityStats(slug: string): SegmentStats {
  return (
    cityStats[slug] ?? {
      headline: "Central Florida Commercial Real Estate Market",
      blurb:
        "The Greater Orlando metro continues to attract commercial investment across every asset class, driven by strong population growth, a diversified employment base, and Florida's business-friendly environment.",
      stats: [
        { label: "Metro Population", value: "3.3M+", hint: "Orlando MSA" },
        { label: "Annual Visitors", value: "75M+", hint: "Tourism and convention economy" },
        { label: "Retail Cap Rate", value: "6.0–8.5%", hint: "Strip to NNN" },
        { label: "Industrial Vacancy", value: "~4%", hint: "Metro-wide" },
      ],
    }
  );
}
