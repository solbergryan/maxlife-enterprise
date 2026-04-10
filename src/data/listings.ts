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

// Note: getListingImage() and formatPrice() were removed when the
// directory switched to link-only display (Option 2 of the compliance
// rework). See git history if you need the implementations back for a
// future IDX feed migration. Listing images in public/listings/*.jpg
// are no longer referenced by any page.

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
