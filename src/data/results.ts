export interface CareerStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface ClosedDeal {
  title: string;
  value: string;
  type: string;
  location: string;
  outcome?: string;
}

export const careerStats: CareerStat[] = [
  {
    value: "$100M+",
    label: "Career Transaction Volume",
    subtext: "Since 2015",
  },
  {
    value: "6",
    label: "Florida Counties Served",
    subtext: "Orange, Brevard, Seminole, Lake, Osceola, Polk",
  },
  {
    value: "10+",
    label: "Years in Florida CRE",
    subtext: "Licensed broker since 2015",
  },
  {
    value: "100%",
    label: "Client-First Focus",
    subtext: "Every deal, every time",
  },
];

export const closedDeals: ClosedDeal[] = [
  {
    title: "Lake Nona Retail Center",
    value: "$4,250,000",
    type: "NNN Retail",
    location: "Orlando, Orange County",
    outcome: "6.2% cap rate — competitive bidding process",
  },
  {
    title: "Mixed-Use Disposition",
    value: "$3,400,000",
    type: "Mixed-Use",
    location: "Orlando, Orange County",
    outcome: "Sold 12% above initial ask in 2 weeks",
  },
  {
    title: "Sand Lake Office Building",
    value: "$2,800,000",
    type: "Office",
    location: "Orlando, Orange County",
    outcome: "7.5% cap rate — fully leased at close",
  },
  {
    title: "East Colonial NNN",
    value: "$2,150,000",
    type: "NNN Retail",
    location: "Orlando, Orange County",
    outcome: "Off-market; closed in 45 days for 1031 exchange buyer",
  },
  {
    title: "Melbourne Retail Strip",
    value: "$1,875,000",
    type: "Retail Strip",
    location: "Melbourne, Brevard County",
    outcome: "98% occupancy at close — multi-tenant",
  },
  {
    title: "Merritt Island NNN Ground Lease",
    value: "$1,650,000",
    type: "NNN Ground Lease",
    location: "Merritt Island, Brevard County",
    outcome: "5.9% cap — corporate tenant, long-term NNN",
  },
  {
    title: "Narcoossee Commercial Land",
    value: "$980,000",
    type: "Development Land",
    location: "Orlando, Orange County",
    outcome: "3.2-acre commercial outparcel",
  },
  {
    title: "Melbourne Industrial Flex",
    value: "$1,225,000",
    type: "Industrial",
    location: "Melbourne, Brevard County",
    outcome: "First CRE acquisition for buyer",
  },
];

export const propertyTypeBreakdown = [
  { type: "NNN / Retail", pct: 38 },
  { type: "Industrial / Flex", pct: 22 },
  { type: "Office", pct: 18 },
  { type: "Mixed-Use", pct: 12 },
  { type: "Land / Development", pct: 10 },
];
