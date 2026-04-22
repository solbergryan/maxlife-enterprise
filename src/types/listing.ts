/**
 * Marketplace listing types — mirrors the Supabase `listings` table.
 * Keep in sync with supabase/listings-schema.sql when adding fields.
 */

export type PropertyType =
  | "NNN"
  | "retail"
  | "office"
  | "industrial"
  | "multifamily"
  | "land"
  | "hospitality"
  | "medical_office"
  | "mixed_use"
  | "special_purpose"
  | "other";

export type TransactionType = "sale" | "lease" | "both";
export type ListingType = "broker" | "owner" | "investor";
export type ListingStatus = "active" | "under_contract" | "sold" | "withdrawn";

export interface Listing {
  id: string;
  user_id: string;
  slug: string;

  // core
  title: string;
  property_type: PropertyType;
  transaction_type: TransactionType;
  listing_type: ListingType;
  status: ListingStatus;

  city: string;
  price: number | null;

  // location
  property_subtype: string | null;
  street_address: string | null;
  state: string | null;
  zip: string | null;
  county: string | null;
  latitude: number | null;
  longitude: number | null;

  // financials
  price_per_sqft: number | null;
  cap_rate: number | null;
  noi: number | null;
  gross_income: number | null;
  operating_expenses: number | null;

  // physical
  building_sqft: number | null;
  lot_sqft: number | null;
  lot_acres: number | null;
  units: number | null;
  year_built: number | null;
  year_renovated: number | null;
  stories: number | null;
  parking_spaces: number | null;
  zoning: string | null;
  occupancy_pct: number | null;

  // tenancy
  tenant: string | null;
  lease_type: string | null;
  lease_term_remaining: string | null;
  escalations: string | null;

  // descriptive
  description: string | null;
  highlights: string[];
  upside_potential: string | null;

  // contact
  contact_name: string;
  contact_email: string;
  contact_phone: string | null;
  contact_company: string | null;

  // meta
  photo_urls: string[];
  view_count: number;
  created_at: string;
  updated_at: string;
}

/** The subset of columns a user fills in when creating/editing a listing. */
export type ListingInput = Omit<
  Listing,
  "id" | "user_id" | "slug" | "view_count" | "created_at" | "updated_at" | "photo_urls"
> & {
  slug?: string; // auto-generated when omitted
};

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  NNN: "Triple Net (NNN)",
  retail: "Retail",
  office: "Office",
  industrial: "Industrial",
  multifamily: "Multifamily",
  land: "Land",
  hospitality: "Hospitality",
  medical_office: "Medical Office",
  mixed_use: "Mixed-Use",
  special_purpose: "Special Purpose",
  other: "Other",
};

export const TRANSACTION_TYPE_LABELS: Record<TransactionType, string> = {
  sale: "For Sale",
  lease: "For Lease",
  both: "Sale or Lease",
};

export const LISTING_TYPE_LABELS: Record<ListingType, string> = {
  broker: "Listing Broker",
  owner: "For Sale By Owner",
  investor: "Investor",
};

export const STATUS_LABELS: Record<ListingStatus, string> = {
  active: "Active",
  under_contract: "Under Contract",
  sold: "Sold",
  withdrawn: "Withdrawn",
};
