// One-time script to insert Spyglass Hill listing into Supabase.
//
// Run with:
//   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/insert-spyglass.mjs
//
// The service_role key bypasses Row-Level Security — never commit it. Pull it
// from Supabase → Settings → API and pass it via env at run time.
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error(
    "Missing env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const listing = {
  user_id: "4edc61dc-6940-4621-b9dd-364fcbec3430", // ryan@maxliferealty.com
  slug: "shovel-ready-medical-office-land-melbourne-viera-fl",
  title: "Shovel-Ready Medical Office Land — Melbourne (Viera), FL",
  property_type: "land",
  transaction_type: "both",
  listing_type: "broker",
  status: "active",

  // Location
  street_address: "7965 Spyglass Hill Rd",
  city: "Melbourne",
  county: "Brevard County",
  state: "FL",
  zip: "32940",
  latitude: 28.2366,
  longitude: -80.7384,

  // Financials
  price: 2500000,
  price_per_sqft: 37.27,
  noi: 250000,          // ground lease NOI
  gross_income: 250000, // $250K/yr NNN ground lease

  // Physical
  lot_acres: 1.54,
  lot_sqft: 67082,      // 1.54 acres × 43,560
  building_sqft: 23920, // approved building size
  zoning: "BU-1-A",

  // Tenancy (ground lease terms)
  lease_type: "NNN Ground Lease",
  lease_term_remaining: "20-year term + four 5-year renewals available",
  escalations: "12% annual increases; 5% landlord ownership interest in structure",

  // Description
  description: `Rare shovel-ready medical office development site in the heart of the Spyglass Medical District in Viera, FL. Site plan approved for a 23,920 SF, 2-story Class A medical office building (45 ft max height), eliminating 9–18 months of entitlement risk and $150K–$300K in soft costs.

BU-1-A zoning permits medical, professional office, retail, and banking uses by right — no conditional use required. All utilities at site: water, sewer, electric, and fiber. Located adjacent to DEUK Spine Institute and Viera Medical Center, anchoring immediate tenant demand.

Available for sale at $2,500,000 or ground lease at $250,000/yr NNN (20-year term with four 5-year renewals, 12% annual increases).

Demographics: Median HH income $118,904 (43% above county average). Population grew +23.11% from 2020–2025, adding 10,400 new residents. Median age 49.9 drives 2–3x outpatient medical visits per capita. Healthcare is the #1 employer in zip code 32940.`,

  highlights: [
    "Shovel-ready: site plan approved for 23,920 SF 2-story medical office — skip 9–18 months of entitlement",
    "Saves $150K–$300K in entitlement soft costs vs. raw land",
    "BU-1-A zoning: medical, office, retail, and banking permitted by right",
    "Ground lease option: $250,000/yr NNN | 20yr + 4×5yr renewals",
    "Adjacent to DEUK Spine Institute and Viera Medical Center",
    "Demographics: $118,904 median HH income | +23.11% population growth (2020–2025)",
    "51,526 AADT on Pineda Causeway; 42,697 AADT on N Wickham Rd",
    "All utilities at site: water, sewer, electric, fiber",
    "1.54 acres | BU-1-A | <1.5 mi to I-95",
  ],

  upside_potential: "Fastest-growing medical corridor in Brevard County. Site commands Viera medical submarket pricing of $18–$28/SF for land vs. $37.27/SF asking — premium justified by shovel-ready entitlements. Top development uses: MOB, dental, medical spa, urgent care, imaging center.",

  // Contact
  contact_name: "Ryan Solberg",
  contact_email: "Ryan@MaxLifeRealty.com",
  contact_phone: "(855) 765-2374",
  contact_company: "MaxLife Realty",

  photo_urls: [],
};

const { data, error } = await supabase
  .from("listings")
  .insert(listing)
  .select("id, slug")
  .single();

if (error) {
  console.error("Error inserting listing:", error.message);
  process.exit(1);
}

console.log("✅ Listing inserted successfully!");
console.log("ID:", data.id);
console.log("Slug:", data.slug);
console.log("URL: https://maxliferealty.com/marketplace/" + data.slug);
