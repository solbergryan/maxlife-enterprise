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
  featured?: boolean;
  lat?: number | null;
  lng?: number | null;
}

export const listings: Listing[] = listingsData as Listing[];

export function getPropertyId(crexiUrl: string): string | null {
  const m = crexiUrl.match(/\/properties\/(\d+)\//);
  return m ? m[1] : null;
}

export function getListingImage(crexiUrl: string): string | null {
  const id = getPropertyId(crexiUrl);
  return id ? `/listings/${id}.jpg` : null;
}

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
