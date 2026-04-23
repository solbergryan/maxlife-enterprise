"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { generateSlug } from "@/lib/listings-utils";
import { uploadListingPhotos, deleteListingPhoto } from "@/lib/listing-photos";
import { PhotoUploader } from "./PhotoUploader";
import {
  PROPERTY_TYPE_LABELS,
  TRANSACTION_TYPE_LABELS,
  LISTING_TYPE_LABELS,
  type Listing,
  type PropertyType,
  type TransactionType,
  type ListingType,
} from "@/types/listing";

interface SubmitFormProps {
  /** Default contact email (comes from the authenticated user's account). */
  userEmail: string;
  /** If provided, the form enters "edit" mode and updates the row on submit. */
  editing?: Listing;
}

type FormState = {
  // core
  title: string;
  property_type: PropertyType;
  property_subtype: string;
  transaction_type: TransactionType;
  listing_type: ListingType;

  // location
  street_address: string;
  city: string;
  state: string;
  zip: string;
  county: string;

  // pricing
  price: string;
  price_per_sqft: string;
  cap_rate: string;
  noi: string;
  gross_income: string;
  operating_expenses: string;

  // physical
  building_sqft: string;
  lot_sqft: string;
  lot_acres: string;
  units: string;
  year_built: string;
  year_renovated: string;
  stories: string;
  parking_spaces: string;
  zoning: string;
  occupancy_pct: string;

  // tenancy
  tenant: string;
  lease_type: string;
  lease_term_remaining: string;
  escalations: string;

  // descriptive
  description: string;
  highlights: string; // newline separated, parsed on submit
  upside_potential: string;

  // contact
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  contact_company: string;
};

const str = (v: string | null | undefined) => v ?? "";
const numStr = (v: number | null | undefined) =>
  v == null ? "" : String(v);

const fromListing = (l: Listing): FormState => ({
  title: l.title,
  property_type: l.property_type,
  property_subtype: str(l.property_subtype),
  transaction_type: l.transaction_type,
  listing_type: l.listing_type,
  street_address: str(l.street_address),
  city: l.city,
  state: str(l.state) || "FL",
  zip: str(l.zip),
  county: str(l.county),
  price: numStr(l.price),
  price_per_sqft: numStr(l.price_per_sqft),
  cap_rate: numStr(l.cap_rate),
  noi: numStr(l.noi),
  gross_income: numStr(l.gross_income),
  operating_expenses: numStr(l.operating_expenses),
  building_sqft: numStr(l.building_sqft),
  lot_sqft: numStr(l.lot_sqft),
  lot_acres: numStr(l.lot_acres),
  units: numStr(l.units),
  year_built: numStr(l.year_built),
  year_renovated: numStr(l.year_renovated),
  stories: numStr(l.stories),
  parking_spaces: numStr(l.parking_spaces),
  zoning: str(l.zoning),
  occupancy_pct: numStr(l.occupancy_pct),
  tenant: str(l.tenant),
  lease_type: str(l.lease_type),
  lease_term_remaining: str(l.lease_term_remaining),
  escalations: str(l.escalations),
  description: str(l.description),
  highlights: l.highlights.join("\n"),
  upside_potential: str(l.upside_potential),
  contact_name: l.contact_name,
  contact_email: l.contact_email,
  contact_phone: str(l.contact_phone),
  contact_company: str(l.contact_company),
});

const initial = (email: string): FormState => ({
  title: "",
  property_type: "NNN",
  property_subtype: "",
  transaction_type: "sale",
  listing_type: "broker",
  street_address: "",
  city: "",
  state: "FL",
  zip: "",
  county: "",
  price: "",
  price_per_sqft: "",
  cap_rate: "",
  noi: "",
  gross_income: "",
  operating_expenses: "",
  building_sqft: "",
  lot_sqft: "",
  lot_acres: "",
  units: "",
  year_built: "",
  year_renovated: "",
  stories: "",
  parking_spaces: "",
  zoning: "",
  occupancy_pct: "",
  tenant: "",
  lease_type: "",
  lease_term_remaining: "",
  escalations: "",
  description: "",
  highlights: "",
  upside_potential: "",
  contact_name: "",
  contact_email: email,
  contact_phone: "",
  contact_company: "",
});

const num = (v: string): number | null => {
  if (v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const int = (v: string): number | null => {
  if (v.trim() === "") return null;
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : null;
};

const input =
  "w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors";
const label = "text-gray-400 text-xs uppercase tracking-wider mb-1 block";

export function SubmitForm({ userEmail, editing }: SubmitFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(
    editing ? fromListing(editing) : initial(userEmail)
  );
  const [photos, setPhotos] = useState<File[]>([]);
  const [existingPhotoUrls, setExistingPhotoUrls] = useState<string[]>(
    editing?.photo_urls ?? []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [progressMsg, setProgressMsg] = useState("");
  const isEditing = Boolean(editing);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setProgressMsg("");
    setLoading(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setError("Your session expired. Please sign in again.");
        setLoading(false);
        return;
      }

      // Upload new photos (appending to existing ones when editing).
      let newPhotoUrls: string[] = [];
      const slug = editing ? editing.slug : generateSlug(form.title);
      if (photos.length > 0) {
        try {
          setProgressMsg(`Uploading ${photos.length} photo${photos.length === 1 ? "" : "s"}…`);
          newPhotoUrls = await uploadListingPhotos({
            supabase,
            userId: user.id,
            slug,
            files: photos,
          });
        } catch (err) {
          setError(
            err instanceof Error
              ? `Photo upload failed: ${err.message}`
              : "Photo upload failed."
          );
          setLoading(false);
          setProgressMsg("");
          return;
        }
      }
      const photoUrls = [...existingPhotoUrls, ...newPhotoUrls];

      setProgressMsg(isEditing ? "Saving changes…" : "Publishing listing…");
      const row = {
        user_id: user.id,
        slug,
        photo_urls: photoUrls,
        title: form.title.trim(),
        property_type: form.property_type,
        property_subtype: form.property_subtype.trim() || null,
        transaction_type: form.transaction_type,
        listing_type: form.listing_type,
        status: "active" as const,

        city: form.city.trim(),
        street_address: form.street_address.trim() || null,
        state: form.state.trim() || "FL",
        zip: form.zip.trim() || null,
        county: form.county.trim() || null,

        price: num(form.price),
        price_per_sqft: num(form.price_per_sqft),
        cap_rate: num(form.cap_rate),
        noi: num(form.noi),
        gross_income: num(form.gross_income),
        operating_expenses: num(form.operating_expenses),

        building_sqft: int(form.building_sqft),
        lot_sqft: int(form.lot_sqft),
        lot_acres: num(form.lot_acres),
        units: int(form.units),
        year_built: int(form.year_built),
        year_renovated: int(form.year_renovated),
        stories: int(form.stories),
        parking_spaces: int(form.parking_spaces),
        zoning: form.zoning.trim() || null,
        occupancy_pct: num(form.occupancy_pct),

        tenant: form.tenant.trim() || null,
        lease_type: form.lease_type.trim() || null,
        lease_term_remaining: form.lease_term_remaining.trim() || null,
        escalations: form.escalations.trim() || null,

        description: form.description.trim() || null,
        highlights: form.highlights
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        upside_potential: form.upside_potential.trim() || null,

        contact_name: form.contact_name.trim(),
        contact_email: form.contact_email.trim(),
        contact_phone: form.contact_phone.trim() || null,
        contact_company: form.contact_company.trim() || null,
      };

      let resultSlug: string;
      if (editing) {
        const { error: updateErr } = await supabase
          .from("listings")
          .update(row)
          .eq("id", editing.id);
        if (updateErr) {
          setError(updateErr.message);
          setLoading(false);
          setProgressMsg("");
          return;
        }

        // Best-effort: delete orphaned files for photos the user removed.
        // Runs after the DB update so we don't lose pointers if the save fails.
        const removedUrls = editing.photo_urls.filter(
          (url) => !existingPhotoUrls.includes(url)
        );
        if (removedUrls.length > 0) {
          await Promise.all(
            removedUrls.map((url) =>
              deleteListingPhoto(supabase, url).catch(() => {})
            )
          );
        }

        resultSlug = editing.slug;
      } else {
        const { data, error: insertErr } = await supabase
          .from("listings")
          .insert(row)
          .select("slug")
          .single();
        if (insertErr) {
          setError(insertErr.message);
          setLoading(false);
          setProgressMsg("");
          return;
        }
        resultSlug = data.slug;
      }
      router.push(`/marketplace/${resultSlug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
      setProgressMsg("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* --- General --- */}
      <Section title="General">
        <Field label="Listing Title *" full>
          <input
            required
            maxLength={140}
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder='e.g. "AutoZone NNN — Central Florida, 5.75% Cap"'
            className={input}
          />
        </Field>

        <Field label="Property Type *">
          <select
            value={form.property_type}
            onChange={(e) => set("property_type", e.target.value as PropertyType)}
            className={input}
          >
            {Object.entries(PROPERTY_TYPE_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Subtype">
          <input
            value={form.property_subtype}
            onChange={(e) => set("property_subtype", e.target.value)}
            placeholder="e.g. Strip Center, Flex, Class B"
            className={input}
          />
        </Field>

        <Field label="Transaction *">
          <select
            value={form.transaction_type}
            onChange={(e) => set("transaction_type", e.target.value as TransactionType)}
            className={input}
          >
            {Object.entries(TRANSACTION_TYPE_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Posted As *">
          <select
            value={form.listing_type}
            onChange={(e) => set("listing_type", e.target.value as ListingType)}
            className={input}
          >
            {Object.entries(LISTING_TYPE_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
      </Section>

      {/* --- Location --- */}
      <Section title="Location">
        <Field label="Street Address" full>
          <input
            value={form.street_address}
            onChange={(e) => set("street_address", e.target.value)}
            placeholder="123 Main St"
            className={input}
          />
        </Field>
        <Field label="City *">
          <input
            required
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="Orlando"
            className={input}
          />
        </Field>
        <Field label="State">
          <input
            value={form.state}
            onChange={(e) => set("state", e.target.value)}
            maxLength={2}
            className={input}
          />
        </Field>
        <Field label="County">
          <input
            value={form.county}
            onChange={(e) => set("county", e.target.value)}
            placeholder="Orange"
            className={input}
          />
        </Field>
        <Field label="ZIP">
          <input
            value={form.zip}
            onChange={(e) => set("zip", e.target.value)}
            className={input}
          />
        </Field>
      </Section>

      {/* --- Pricing --- */}
      <Section title="Pricing & Financials">
        <Field label="Asking Price (USD)">
          <input
            type="number"
            step="1"
            value={form.price}
            onChange={(e) => set("price", e.target.value)}
            placeholder="1850000"
            className={input}
          />
        </Field>
        <Field label="Price / SqFt">
          <input
            type="number"
            step="0.01"
            value={form.price_per_sqft}
            onChange={(e) => set("price_per_sqft", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Cap Rate (%)">
          <input
            type="number"
            step="0.01"
            value={form.cap_rate}
            onChange={(e) => set("cap_rate", e.target.value)}
            placeholder="5.75"
            className={input}
          />
        </Field>
        <Field label="NOI (annual)">
          <input
            type="number"
            step="1"
            value={form.noi}
            onChange={(e) => set("noi", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Gross Income">
          <input
            type="number"
            step="1"
            value={form.gross_income}
            onChange={(e) => set("gross_income", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Operating Expenses">
          <input
            type="number"
            step="1"
            value={form.operating_expenses}
            onChange={(e) => set("operating_expenses", e.target.value)}
            className={input}
          />
        </Field>
      </Section>

      {/* --- Physical --- */}
      <Section title="Physical Details">
        <Field label="Building SqFt">
          <input
            type="number"
            value={form.building_sqft}
            onChange={(e) => set("building_sqft", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Lot SqFt">
          <input
            type="number"
            value={form.lot_sqft}
            onChange={(e) => set("lot_sqft", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Lot Acres">
          <input
            type="number"
            step="0.01"
            value={form.lot_acres}
            onChange={(e) => set("lot_acres", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Units">
          <input
            type="number"
            value={form.units}
            onChange={(e) => set("units", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Year Built">
          <input
            type="number"
            value={form.year_built}
            onChange={(e) => set("year_built", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Year Renovated">
          <input
            type="number"
            value={form.year_renovated}
            onChange={(e) => set("year_renovated", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Stories">
          <input
            type="number"
            value={form.stories}
            onChange={(e) => set("stories", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Parking Spaces">
          <input
            type="number"
            value={form.parking_spaces}
            onChange={(e) => set("parking_spaces", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Zoning">
          <input
            value={form.zoning}
            onChange={(e) => set("zoning", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Occupancy (%)">
          <input
            type="number"
            step="0.1"
            value={form.occupancy_pct}
            onChange={(e) => set("occupancy_pct", e.target.value)}
            className={input}
          />
        </Field>
      </Section>

      {/* --- Tenancy --- */}
      <Section title="Tenancy (investment properties)">
        <Field label="Tenant">
          <input
            value={form.tenant}
            onChange={(e) => set("tenant", e.target.value)}
            placeholder="AutoZone"
            className={input}
          />
        </Field>
        <Field label="Lease Type">
          <input
            value={form.lease_type}
            onChange={(e) => set("lease_type", e.target.value)}
            placeholder="Absolute NNN"
            className={input}
          />
        </Field>
        <Field label="Lease Term Remaining">
          <input
            value={form.lease_term_remaining}
            onChange={(e) => set("lease_term_remaining", e.target.value)}
            placeholder="12 years + 4 x 5yr options"
            className={input}
          />
        </Field>
        <Field label="Escalations">
          <input
            value={form.escalations}
            onChange={(e) => set("escalations", e.target.value)}
            placeholder="2%/yr"
            className={input}
          />
        </Field>
      </Section>

      {/* --- Photos --- */}
      <fieldset className="border border-dark-border rounded-xl p-5 bg-dark-card/40">
        <legend className="text-gold text-sm font-semibold uppercase tracking-widest px-2">
          Photos
        </legend>
        <div className="mt-2 space-y-4">
          {existingPhotoUrls.length > 0 && (
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Current photos
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {existingPhotoUrls.map((url, i) => (
                  <div
                    key={url}
                    className="relative group border border-dark-border rounded-lg overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt={`Existing photo ${i + 1}`} className="aspect-square w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setExistingPhotoUrls(existingPhotoUrls.filter((u) => u !== url))}
                      className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-500 text-white rounded w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove photo"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-2">
                Removing a photo here drops it from the listing when you save.
                The underlying file stays in storage — we&apos;ll clean orphans later.
              </p>
            </div>
          )}
          <PhotoUploader files={photos} onChange={setPhotos} />
        </div>
      </fieldset>

      {/* --- Descriptive --- */}
      <Section title="Description">
        <Field label="Property Description" full>
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Executive summary: location, asset story, why it's a good buy..."
            className={input}
          />
        </Field>
        <Field label="Highlights (one per line)" full>
          <textarea
            rows={4}
            value={form.highlights}
            onChange={(e) => set("highlights", e.target.value)}
            placeholder={"Absolute NNN lease\nInvestment-grade tenant\nHigh-traffic corridor"}
            className={input}
          />
        </Field>
        <Field label="Upside Potential" full>
          <textarea
            rows={3}
            value={form.upside_potential}
            onChange={(e) => set("upside_potential", e.target.value)}
            placeholder="Value-add opportunities, rent mark-to-market, below-market rents, etc."
            className={input}
          />
        </Field>
      </Section>

      {/* --- Contact --- */}
      <Section title="Contact (shown publicly on the listing)">
        <Field label="Contact Name *">
          <input
            required
            value={form.contact_name}
            onChange={(e) => set("contact_name", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Contact Email *">
          <input
            type="email"
            required
            value={form.contact_email}
            onChange={(e) => set("contact_email", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Contact Phone">
          <input
            type="tel"
            value={form.contact_phone}
            onChange={(e) => set("contact_phone", e.target.value)}
            className={input}
          />
        </Field>
        <Field label="Company (brokers only)">
          <input
            value={form.contact_company}
            onChange={(e) => set("contact_company", e.target.value)}
            className={input}
          />
        </Field>
      </Section>

      {error && (
        <div className="border border-red-500/40 bg-red-500/10 text-red-300 text-sm rounded-lg p-4">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? progressMsg || (isEditing ? "Saving…" : "Publishing...")
          : isEditing
            ? "Save Changes"
            : "Publish Listing"}
      </button>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border border-dark-border rounded-xl p-5 bg-dark-card/40">
      <legend className="text-gold text-sm font-semibold uppercase tracking-widest px-2">
        {title}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">{children}</div>
    </fieldset>
  );
}

function Field({
  label: labelText,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  // Wrapping children in <label> gives an implicit label-input association
  // so clicks on the label focus the input and screen readers pair them up.
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className={label}>{labelText}</span>
      {children}
    </label>
  );
}
