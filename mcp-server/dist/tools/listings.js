import { z } from "zod";
import { supabase } from "../lib/supabase.js";
export const searchListingsSchema = z.object({
    propertyType: z.enum([
        "NNN", "retail", "office", "industrial", "multifamily",
        "land", "hospitality", "medical_office", "mixed_use",
        "special_purpose", "other",
    ]).optional().describe("Filter by property type"),
    transactionType: z.enum(["sale", "lease", "both"]).optional().describe("For sale, lease, or both"),
    city: z.string().optional().describe("City name, e.g. Orlando"),
    county: z.string().optional().describe("County name, e.g. Orange County"),
    minCapRate: z.number().optional().describe("Minimum cap rate as a percentage, e.g. 5.0"),
    maxCapRate: z.number().optional().describe("Maximum cap rate as a percentage, e.g. 7.5"),
    minPrice: z.number().optional().describe("Minimum price in dollars"),
    maxPrice: z.number().optional().describe("Maximum price in dollars"),
    minSqft: z.number().optional().describe("Minimum building square footage"),
    maxSqft: z.number().optional().describe("Maximum building square footage"),
    search: z.string().optional().describe("Keyword search across title, description, tenant name"),
    limit: z.number().int().min(1).max(25).default(10).describe("Max results to return (1–25)"),
});
export async function searchListings(input) {
    let query = supabase
        .from("listings")
        .select("id, slug, title, property_type, transaction_type, status, city, county, price, cap_rate, noi, building_sqft, units, tenant, lease_type, description, highlights, contact_name, contact_phone, contact_email, photo_urls, created_at")
        .eq("status", "active");
    if (input.propertyType)
        query = query.eq("property_type", input.propertyType);
    if (input.transactionType)
        query = query.eq("transaction_type", input.transactionType);
    if (input.city)
        query = query.ilike("city", `%${input.city}%`);
    if (input.county)
        query = query.ilike("county", `%${input.county}%`);
    if (input.minCapRate != null)
        query = query.gte("cap_rate", input.minCapRate);
    if (input.maxCapRate != null)
        query = query.lte("cap_rate", input.maxCapRate);
    if (input.minPrice != null)
        query = query.gte("price", input.minPrice);
    if (input.maxPrice != null)
        query = query.lte("price", input.maxPrice);
    if (input.minSqft != null)
        query = query.gte("building_sqft", input.minSqft);
    if (input.maxSqft != null)
        query = query.lte("building_sqft", input.maxSqft);
    if (input.search) {
        query = query.or(`title.ilike.%${input.search}%,description.ilike.%${input.search}%,tenant.ilike.%${input.search}%`);
    }
    query = query
        .order("created_at", { ascending: false })
        .limit(input.limit);
    const { data, error } = await query;
    if (error)
        throw new Error(`Supabase error: ${error.message}`);
    if (!data || data.length === 0) {
        return { count: 0, listings: [], message: "No active listings match your criteria." };
    }
    return {
        count: data.length,
        listings: data.map(l => ({
            id: l.id,
            slug: l.slug,
            title: l.title,
            propertyType: l.property_type,
            transactionType: l.transaction_type,
            city: l.city,
            county: l.county,
            price: l.price ? `$${Number(l.price).toLocaleString()}` : "Call for pricing",
            capRate: l.cap_rate ? `${Number(l.cap_rate).toFixed(2)}%` : null,
            noi: l.noi ? `$${Number(l.noi).toLocaleString()}/yr` : null,
            buildingSqft: l.building_sqft ? `${Number(l.building_sqft).toLocaleString()} SF` : null,
            units: l.units ?? null,
            tenant: l.tenant ?? null,
            leaseType: l.lease_type ?? null,
            summary: l.description ? l.description.slice(0, 200) + (l.description.length > 200 ? "…" : "") : null,
            highlights: l.highlights ?? [],
            contact: {
                name: l.contact_name,
                phone: l.contact_phone,
                email: l.contact_email,
            },
            url: `https://maxliferealty.com/marketplace/${l.slug}`,
        })),
    };
}
// ─────────────────────────────────────────────────────────────────────
export const getListingSchema = z.object({
    slug: z.string().optional().describe("Listing URL slug, e.g. 'dollar-general-nnn-orlando'"),
    id: z.string().uuid().optional().describe("Listing UUID"),
}).refine(d => d.slug || d.id, { message: "Provide either slug or id" });
export async function getListing(input) {
    const baseQuery = supabase.from("listings").select("*");
    const filtered = input.slug
        ? baseQuery.eq("slug", input.slug)
        : baseQuery.eq("id", input.id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await filtered.single();
    if (error) {
        if (error.code === "PGRST116")
            return { error: "Listing not found." };
        throw new Error(`Supabase error: ${error.message}`);
    }
    if (!data)
        return { error: "Listing not found." };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const l = data;
    return {
        id: l.id,
        slug: l.slug,
        status: l.status,
        title: l.title,
        propertyType: l.property_type,
        propertySubtype: l.property_subtype,
        transactionType: l.transaction_type,
        listingType: l.listing_type,
        location: {
            address: l.street_address,
            city: l.city,
            county: l.county,
            state: l.state,
            zip: l.zip,
        },
        financials: {
            price: l.price,
            pricePerSqft: l.price_per_sqft,
            capRate: l.cap_rate,
            noi: l.noi,
            grossIncome: l.gross_income,
            operatingExpenses: l.operating_expenses,
        },
        physical: {
            buildingSqft: l.building_sqft,
            lotSqft: l.lot_sqft,
            lotAcres: l.lot_acres,
            units: l.units,
            yearBuilt: l.year_built,
            yearRenovated: l.year_renovated,
            stories: l.stories,
            parkingSpaces: l.parking_spaces,
            zoning: l.zoning,
            occupancyPct: l.occupancy_pct,
        },
        tenancy: {
            tenant: l.tenant,
            leaseType: l.lease_type,
            leaseTermRemaining: l.lease_term_remaining,
            escalations: l.escalations,
        },
        description: l.description,
        highlights: l.highlights,
        upsidePotential: l.upside_potential,
        contact: {
            name: l.contact_name,
            email: l.contact_email,
            phone: l.contact_phone,
            company: l.contact_company,
        },
        photos: l.photo_urls,
        viewCount: l.view_count,
        url: `https://maxliferealty.com/marketplace/${l.slug}`,
        createdAt: l.created_at,
    };
}
