import listingsData from "./crexi-listings.json";

export interface Listing {
  crexiUrl: string;
  name: string;
  status: string;
  type: string;
  rawType: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  tenant: string | null;
  leaseTerm: string | null;
  remainingTerm: string | null;
  sqft: number | null;
  lotSize: number | null;
  units: number | null;
  noi: number | null;
  capRate: number | null;
  price: number | null;
  priceSqft: number | null;
  daysOnMarket: number | null;
  opportunityZone: boolean;
  listingBroker?: string;
  listingBrokerage?: string;
}

export const listings: Listing[] = listingsData as Listing[];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export const listingTypes = [
  "All",
  "Land",
  "Retail",
  "Office",
  "Industrial",
  "Multifamily",
  "Mixed Use",
  "Hospitality",
  "Other",
] as const;

export const listingCounties = [
  "All",
  "Orange",
  "Seminole",
  "Osceola",
  "Brevard",
  "Polk",
  "Lake",
  "Other",
] as const;
