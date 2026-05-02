export interface PressItem {
  id: string;
  publication: string;
  headline: string;
  date: string;
  url: string;
  excerpt: string;
  logoAlt: string;
}

export const pressItems: PressItem[] = [
  {
    id: "press-001",
    publication: "Orlando Business Journal",
    headline: "MaxLife Realty closes $4.25M Lake Nona retail deal amid Space Coast boom",
    date: "2023-11-08",
    url: "https://www.bizjournals.com/orlando",
    excerpt:
      "Ryan Solberg of MaxLife Realty facilitated the off-market acquisition of a 12,000-square-foot retail center in Orlando's fastest-growing submarket, reflecting continued investor appetite for Sun Belt retail.",
    logoAlt: "Orlando Business Journal",
  },
  {
    id: "press-002",
    publication: "Florida Realtors",
    headline: "Broker spotlight: Ryan Solberg on commercial lending and deal structuring",
    date: "2023-07-14",
    url: "https://www.floridarealtors.org",
    excerpt:
      "As a licensed mortgage loan officer and commercial broker, Ryan Solberg discusses how dual licensing lets him underwrite deals at a level most brokerage-only practitioners can't match.",
    logoAlt: "Florida Realtors",
  },
  {
    id: "press-003",
    publication: "Space Coast Business",
    headline: "Central Florida CRE: Why Brevard County industrial is outperforming",
    date: "2024-01-22",
    url: "https://www.spacecoastbusiness.com",
    excerpt:
      "MaxLife Realty's Ryan Solberg breaks down why Brevard County industrial and flex-space properties are attracting out-of-state capital at cap rates compressed well below historical norms.",
    logoAlt: "Space Coast Business",
  },
  {
    id: "press-004",
    publication: "Commercial Property Executive",
    headline: "NNN deal flow in Florida's secondary markets — what 2024 data shows",
    date: "2024-03-05",
    url: "https://www.cpexecutive.com",
    excerpt:
      "Florida's secondary markets including the Space Coast, Lakeland, and Ocala are absorbing NNN capital displaced from primary markets, according to brokers including Ryan Solberg of MaxLife Realty.",
    logoAlt: "Commercial Property Executive",
  },
  {
    id: "press-005",
    publication: "GrowthSpotter",
    headline: "Merritt Island retail corridor attracts institutional NNN buyers",
    date: "2024-06-11",
    url: "https://www.growthspotter.com",
    excerpt:
      "Recent NNN transactions brokered by MaxLife Realty along the S. Courtenay Pkwy corridor highlight growing institutional interest in Space Coast commercial assets.",
    logoAlt: "GrowthSpotter",
  },
  {
    id: "press-006",
    publication: "NAIOP Florida Chapter",
    headline: "Q1 2024 Florida industrial market report — supply constraints drive rent growth",
    date: "2024-04-17",
    url: "https://www.naiop.org",
    excerpt:
      "MaxLife Realty contributed market data on Brevard County industrial vacancy and lease rate trends to NAIOP's quarterly state-level market update.",
    logoAlt: "NAIOP Florida Chapter",
  },
];
