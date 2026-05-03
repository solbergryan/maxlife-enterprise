export type I4RegionId = 'hillsborough' | 'polk' | 'osceola' | 'orange' | 'seminole' | 'volusia';

export interface I4CityLink { name: string; slug: string | null }

export interface I4ExitData {
  exitNum: number;
  xPct: number;
  label: string;
  shortLabel: string;
  labelRow?: 1 | 2;
  region: I4RegionId;
  description: string;
  anchors: string[];
  traffic?: string;
  capRates?: string;
  propertyMix?: string;
  cityLinks: I4CityLink[];
  highlight: boolean;
}

export const I4_REGION_LABELS: Record<I4RegionId, string> = {
  hillsborough: 'Hillsborough',
  polk: 'Polk',
  osceola: 'Osceola',
  orange: 'Orange',
  seminole: 'Seminole',
  volusia: 'Volusia',
};

export const I4_EXITS: I4ExitData[] = [
  {
    exitNum: 7, xPct: 5.3, label: 'US 301 / Hillsborough Ave', shortLabel: 'Hillsborough Ave', labelRow: 1, region: 'hillsborough', highlight: true,
    description: "US 301 / Hillsborough Ave — major Tampa commercial node anchoring the East Tampa corridor. High-traffic retail, strip centers, and service-tenant demand.",
    anchors: ['Walmart Supercenter', 'Home Depot', 'Florida State Fairgrounds', 'Hard Rock Hotel & Casino (nearby)'],
    traffic: '~165,000 AADT',
    capRates: 'Retail 6.0–7.5%',
    propertyMix: 'Big-box retail · QSR · service tenants',
    cityLinks: [],
  },
  {
    exitNum: 9, xPct: 6.8, label: 'I-75 Interchange', shortLabel: 'I-75', labelRow: 2, region: 'hillsborough', highlight: true,
    description: "I-75 interchange — Tampa's largest regional retail and industrial hub. Distribution centers, big-box retail, and logistics anchors surround this critical interchange.",
    anchors: ['Hard Rock Hotel & Casino', 'Hillsborough Community College', 'Multiple distribution centers', 'Brandon TownCenter (nearby)'],
    traffic: '~170,000 AADT',
    capRates: 'Industrial 6.5–7.5% · Retail 6.0–7.0%',
    propertyMix: 'Distribution · big-box · hospitality',
    cityLinks: [],
  },
  {
    exitNum: 22, xPct: 16.7, label: 'FL 553 / Plant City', shortLabel: 'Plant City', labelRow: 1, region: 'hillsborough', highlight: true,
    description: "Plant City industrial and logistics hub — strong warehousing and distribution demand anchored by agriculture, food processing, and regional logistics operators.",
    anchors: ['Publix Distribution Center', 'Wish Farms HQ', 'Plant City Stadium', 'Florida Strawberry Festival grounds'],
    traffic: '~85,000 AADT',
    capRates: 'Industrial 6.5–7.5%',
    propertyMix: 'Warehouse · distribution · agribusiness',
    cityLinks: [],
  },
  {
    exitNum: 27, xPct: 20.5, label: 'Polk Pkwy / Lakeland E', shortLabel: 'Lakeland East', labelRow: 1, region: 'polk', highlight: true,
    description: 'Eastern Lakeland gateway — industrial parks, distribution hubs, and Polk Pkwy access connecting to the Florida Turnpike. Strong logistics and manufacturing demand.',
    anchors: ['Amazon Fulfillment Center', 'Saddle Creek Logistics HQ', 'Publix Manufacturing', 'GEICO regional office'],
    traffic: '~95,000 AADT',
    capRates: 'Industrial 6.0–7.0%',
    propertyMix: 'Distribution · manufacturing · flex industrial',
    cityLinks: [],
  },
  {
    exitNum: 32, xPct: 24.2, label: 'US 98 / Lakeland', shortLabel: 'Lakeland', labelRow: 2, region: 'polk', highlight: true,
    description: "US 98 — Lakeland's primary east-west commercial spine. High-traffic retail, medical, and service-tenant strip with some of the highest retail counts in Polk County.",
    anchors: ['Lakeland Square Mall', 'Lakeland Regional Health', 'Florida Southern College', 'Publix Super Market'],
    traffic: '~105,000 AADT',
    capRates: 'Retail 6.0–7.0% · Medical 6.5–7.5%',
    propertyMix: 'Retail strip · medical office · QSR',
    cityLinks: [],
  },
  {
    exitNum: 41, xPct: 31.1, label: 'Polk Pkwy W / Auburndale', shortLabel: 'Auburndale', labelRow: 1, region: 'polk', highlight: true,
    description: "Auburndale industrial hub — one of the strongest warehouse and distribution markets in Central Florida with direct Florida Turnpike access.",
    anchors: ['Walmart Distribution Center', 'Best Buy Distribution', 'CSX Intermodal', 'Coca-Cola distribution'],
    traffic: '~75,000 AADT',
    capRates: 'Industrial 5.75–6.75%',
    propertyMix: 'Bulk distribution · cold storage · logistics',
    cityLinks: [],
  },
  {
    exitNum: 55, xPct: 41.7, label: 'US 27 / Haines City / Davenport', shortLabel: 'Davenport / US 27', labelRow: 1, region: 'polk', highlight: true,
    description: 'US-27 vacation corridor — the highest concentration of short-term rentals in the US generates outsized QSR, convenience, and retail demand alongside a fast-growing logistics node.',
    anchors: ['Posner Park (Target, JCPenney, Cinépolis)', 'Champions Gate Resort', 'Heart of Florida Regional Medical', 'Berry Town Center', 'Wawa', "Buc-ee's (planned)"],
    traffic: '~110,000 AADT (I-4) · 60,000 (US-27)',
    capRates: 'NNN retail 5.5–6.5% · Hotel 7.5–8.5%',
    propertyMix: 'NNN retail · hotels · vacation rental commercial · QSR',
    cityLinks: [
      { name: 'Davenport CRE', slug: 'davenport-commercial-real-estate' },
      { name: 'Clermont CRE', slug: 'clermont-commercial-real-estate' },
    ],
  },
  {
    exitNum: 62, xPct: 47.0, label: 'FL 417 / Disney / Celebration', shortLabel: 'Celebration', labelRow: 2, region: 'osceola', highlight: true,
    description: "Celebration & Disney gateway — captive tourism traffic, town center retail, and stable hospitality-adjacent commercial. Disney World's western access creates constant commercial demand.",
    anchors: ['Walt Disney World (Animal Kingdom)', "Disney's Wide World of Sports", 'Celebration Town Center', 'AdventHealth Celebration', 'Four Seasons Orlando'],
    traffic: '~145,000 AADT',
    capRates: 'NNN retail 5.0–6.0% · Hospitality 6.5–7.5%',
    propertyMix: 'Hospitality · town center retail · medical office · NNN',
    cityLinks: [{ name: 'Celebration CRE', slug: 'celebration-commercial-real-estate' }],
  },
  {
    exitNum: 64, xPct: 48.5, label: 'US 192 / Kissimmee / Magic Kingdom', shortLabel: 'Kissimmee', labelRow: 1, region: 'osceola', highlight: true,
    description: "US-192 strip — America's most concentrated tourism retail corridor. QSR, NNN retail, and hospitality generate year-round, recession-resistant commercial demand.",
    anchors: ['Old Town', 'Margaritaville Resort Orlando', 'Fun Spot America', 'Hyatt Regency Grand Cypress', 'Walmart Supercenter', "McDonald's · Wawa · Chick-fil-A"],
    traffic: '~155,000 AADT (I-4) · 70,000 (US-192)',
    capRates: 'NNN retail 5.25–6.25% · Hotel 7.0–8.5%',
    propertyMix: 'Tourism retail · QSR · hotels · attractions',
    cityLinks: [{ name: 'Kissimmee CRE', slug: 'kissimmee-commercial-real-estate' }],
  },
  {
    exitNum: 72, xPct: 54.5, label: "FL 528 / Orlando Int'l Airport", shortLabel: 'MCO Airport', labelRow: 2, region: 'orange', highlight: false,
    description: 'Orlando International Airport corridor — logistics, cargo handling, and hospitality. The FL 528 Beachline connects directly to the Space Coast.',
    anchors: ['Orlando International Airport (MCO)', 'Hyatt Regency Orlando Airport', 'Lakeside Village', 'Multiple rental car operations', 'Lee Vista Center'],
    traffic: '~165,000 AADT',
    capRates: 'Hotel 7.0–8.0% · Industrial 6.0–7.0%',
    propertyMix: 'Hospitality · airport logistics · flex industrial',
    cityLinks: [],
  },
  {
    exitNum: 74, xPct: 56.1, label: 'Sand Lake / I-Drive (74A–75B)', shortLabel: 'I-Drive', labelRow: 1, region: 'orange', highlight: true,
    description: "International Drive cluster (Exits 74A–75B) — Convention Center, hotel row, Universal Studios, and Florida's densest tourism retail strip. Hospitality investment and mixed-use development dominate this corridor.",
    anchors: ['Universal Studios Orlando', 'Universal Epic Universe (2025)', 'ICON Park / Orlando Eye', 'Pointe Orlando', 'Orange County Convention Center', 'Volcano Bay', 'Mall at Millenia (nearby)'],
    traffic: '~175,000 AADT',
    capRates: 'Hospitality 6.5–7.5% · Retail 5.0–6.5%',
    propertyMix: 'Hospitality · entertainment retail · mixed-use · convention',
    cityLinks: [],
  },
  {
    exitNum: 82, xPct: 62.1, label: 'FL 408 / Downtown Orlando', shortLabel: 'Downtown Orlando', labelRow: 2, region: 'orange', highlight: false,
    description: 'Downtown Orlando gateway — Class A office, mixed-use development, and the SoDo commercial corridor. Central Business District access via the East-West Expressway.',
    anchors: ['Amway Center (Magic)', 'Camping World Stadium', 'Orlando Health', 'SunTrust Center', 'Bank of America Center', 'Lake Eola district'],
    traffic: '~140,000 AADT',
    capRates: 'Class A office 7.5–8.5% · Multifamily 5.0–6.0%',
    propertyMix: 'Class A office · mixed-use · sports/entertainment',
    cityLinks: [],
  },
  {
    exitNum: 88, xPct: 66.7, label: 'Lee Rd / Winter Park', shortLabel: 'Winter Park', labelRow: 1, region: 'orange', highlight: false,
    description: "Winter Park border — premium retail, professional services, and the highest household incomes in the Orlando metro. Park Avenue trades at the tightest cap rates in Central Florida.",
    anchors: ['Park Avenue retail district', 'Winter Park Village', "Trader Joe's", 'Whole Foods', 'Rollins College', 'Winter Park Hospital'],
    traffic: '~115,000 AADT',
    capRates: 'Park Ave retail 4.5–5.5% · Lee Rd 5.5–6.5%',
    propertyMix: 'Premium retail · medical · professional services',
    cityLinks: [{ name: 'Winter Park CRE', slug: 'winter-park-commercial-real-estate' }],
  },
  {
    exitNum: 90, xPct: 68.2, label: 'FL 414 / Maitland Blvd', shortLabel: 'Maitland', labelRow: 2, region: 'orange', highlight: true,
    description: "Maitland Center — Central Florida's largest suburban office concentration outside downtown. Fortune 1000 regional HQs, financial services, and medical office anchor this Class A corridor.",
    anchors: ['Maitland Center office park', 'AAA Tire & Auto HQ', 'RaceTrac Petroleum HQ', 'Mayflower Retirement Community', 'Maitland Art Center'],
    traffic: '~110,000 AADT',
    capRates: 'Class A office 6.5–7.5% · Medical 6.0–7.0%',
    propertyMix: 'Class A office · medical office · corporate HQ',
    cityLinks: [{ name: 'Maitland CRE', slug: 'maitland-commercial-real-estate' }],
  },
  {
    exitNum: 92, xPct: 69.7, label: 'FL 436 / Altamonte Springs', shortLabel: 'Altamonte', labelRow: 1, region: 'seminole', highlight: true,
    description: 'Altamonte Springs retail hub — Altamonte Mall, AdventHealth Altamonte, and strong suburban commercial demand. One of the highest-traffic corridors in Seminole County.',
    anchors: ["Altamonte Mall (Macy's, JCPenney, Dillard's)", 'AdventHealth Altamonte', 'Cranes Roost Park', 'Walmart Supercenter', 'Target', 'AMC Altamonte 18'],
    traffic: '~108,000 AADT (I-4) · 75,000 (FL 436)',
    capRates: 'Retail 6.0–7.0% · Office 7.0–8.0%',
    propertyMix: 'Regional mall · power center · medical · office',
    cityLinks: [
      { name: 'Altamonte Springs CRE', slug: 'altamonte-springs-commercial-real-estate' },
      { name: 'Casselberry CRE', slug: 'casselberry-commercial-real-estate' },
    ],
  },
  {
    exitNum: 94, xPct: 71.2, label: 'FL 434 / Longwood / Winter Springs', shortLabel: 'Longwood', labelRow: 2, region: 'seminole', highlight: false,
    description: 'Longwood & Winter Springs — mature Seminole County medical and professional-services corridor with high-income residential demand and steady office and retail absorption.',
    anchors: ['AdventHealth Longwood', 'Wekiva River Town Center', 'Reiter Park', 'Longwood Hospital', 'multiple medical office buildings'],
    traffic: '~102,000 AADT',
    capRates: 'Medical 6.5–7.5% · Retail 6.5–7.5%',
    propertyMix: 'Medical office · neighborhood retail · professional services',
    cityLinks: [
      { name: 'Longwood CRE', slug: 'longwood-commercial-real-estate' },
      { name: 'Winter Springs CRE', slug: 'winter-springs-commercial-real-estate' },
    ],
  },
  {
    exitNum: 98, xPct: 74.2, label: 'Lake Mary Blvd / Heathrow', shortLabel: 'Lake Mary', labelRow: 1, region: 'seminole', highlight: true,
    description: "Lake Mary/Heathrow — Central Florida's premier office park market. Highest concentration of Fortune 1000 regional headquarters in Seminole County.",
    anchors: ['Heathrow International Business Center', 'Fidelity National Financial HQ', 'AAA Headquarters', 'Verizon regional HQ', 'Mitsubishi Power Americas', 'Colonial TownPark', 'Lake Mary Town Center'],
    traffic: '~100,000 AADT (I-4) · 55,000 (Lake Mary Blvd)',
    capRates: 'Class A office 6.5–7.5% · NNN retail 5.5–6.5%',
    propertyMix: 'Class A office park · corporate HQ · NNN retail',
    cityLinks: [{ name: 'Lake Mary CRE', slug: 'lake-mary-commercial-real-estate' }],
  },
  {
    exitNum: 101, xPct: 76.5, label: 'Sanford / CR 46A / FL 417', shortLabel: 'Sanford', labelRow: 2, region: 'seminole', highlight: true,
    description: 'Sanford industrial gateway — I-4 access, CSX intermodal rail, and Orlando Sanford International Airport make this the premier logistics market at the northern end of the Orlando metro.',
    anchors: ['Seminole Town Center mall', 'Orlando Sanford International Airport', 'AdventHealth Sanford', 'Allegiant Air operations', 'Central Florida GreeneWay (FL 417)'],
    traffic: '~95,000 AADT',
    capRates: 'Industrial 6.25–7.25% · Retail 6.5–7.5%',
    propertyMix: 'Industrial · airport logistics · regional retail',
    cityLinks: [{ name: 'Sanford CRE', slug: 'sanford-commercial-real-estate' }],
  },
  {
    exitNum: 108, xPct: 81.8, label: 'DeBary / Deltona / Enterprise', shortLabel: 'Deltona', labelRow: 1, region: 'volusia', highlight: false,
    description: "Deltona gateway — Volusia County's largest city and fastest-growing I-4 commercial corridor. Large underserved population drives demand for retail and medical along Saxon Boulevard.",
    anchors: ['Saxon Crossings', 'Marketplace at DeBary', 'Deltona Village', 'Stetson University (nearby)', 'AdventHealth Fish Memorial'],
    traffic: '~85,000 AADT',
    capRates: 'Retail 6.5–7.5% · Medical 7.0–8.0%',
    propertyMix: 'Neighborhood retail · medical · service tenants',
    cityLinks: [{ name: 'Deltona CRE', slug: 'deltona-commercial-real-estate' }],
  },
  {
    exitNum: 118, xPct: 89.4, label: 'FL 44 / DeLand / New Smyrna', shortLabel: 'DeLand', labelRow: 2, region: 'volusia', highlight: false,
    description: 'DeLand corridor — historic Volusia County seat with emerging retail, medical office, and light industrial development. Stetson University anchors steady professional-services demand.',
    anchors: ['Stetson University', 'AdventHealth DeLand', 'Volusia Mall (nearby)', 'DeLand Municipal Airport', 'Historic Downtown DeLand'],
    traffic: '~75,000 AADT',
    capRates: 'Retail 7.0–8.0%',
    propertyMix: 'Education-adjacent retail · medical · light industrial',
    cityLinks: [],
  },
  {
    exitNum: 129, xPct: 97.7, label: 'US 92 East / Daytona Beach', shortLabel: 'Daytona Beach', labelRow: 1, region: 'volusia', highlight: false,
    description: 'Daytona Beach gateway — motorsports destination, hospitality corridor, and diverse retail serving the NASCAR industry and beach tourism market.',
    anchors: ['Daytona International Speedway', 'One Daytona', 'Volusia Mall', 'Tanger Outlets', "Daytona Beach Int'l Airport", 'NASCAR HQ'],
    traffic: '~85,000 AADT',
    capRates: 'Retail 6.5–7.5% · Hotel 7.5–9.0%',
    propertyMix: 'Hospitality · motorsports retail · mall · outlets',
    cityLinks: [],
  },
];
