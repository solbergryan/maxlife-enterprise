-- MaxLife Marketplace — user-submitted CRE listings (FSBO + broker co-listings)
-- Run once in the Supabase SQL editor of the same project that powers the academy.
--
-- Design notes:
--   * Auto-publish: a new insert is immediately visible (status defaults to 'active').
--   * Public browsing: anon SELECT of active rows is allowed via RLS policy.
--   * Auth required to post, edit, or delete: writes check auth.uid() = user_id.
--   * Photos are not stored here yet — add `photo_urls text[]` later when the
--     Supabase Storage bucket is wired up (Phase 2).
--
-- To roll back:
--   drop table public.listings cascade;

-- =====================================================
-- 1. Listings table (Crexi-inspired — most fields optional)
-- =====================================================
create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  slug text unique not null,

  -- core / required
  title text not null,
  property_type text not null check (property_type in (
    'NNN','retail','office','industrial','multifamily','land',
    'hospitality','medical_office','mixed_use','special_purpose','other'
  )),
  transaction_type text not null default 'sale' check (transaction_type in ('sale','lease','both')),
  listing_type text not null default 'broker' check (listing_type in ('broker','owner','investor')),
  status text not null default 'active' check (status in ('active','under_contract','sold','withdrawn')),

  city text not null,
  price numeric,

  -- location
  property_subtype text,
  street_address text,
  state text default 'FL',
  zip text,
  county text,
  latitude numeric,
  longitude numeric,

  -- pricing / financials
  price_per_sqft numeric,
  cap_rate numeric,
  noi numeric,
  gross_income numeric,
  operating_expenses numeric,

  -- physical
  building_sqft integer,
  lot_sqft integer,
  lot_acres numeric,
  units integer,
  year_built integer,
  year_renovated integer,
  stories integer,
  parking_spaces integer,
  zoning text,
  occupancy_pct numeric,

  -- tenancy
  tenant text,
  lease_type text,
  lease_term_remaining text,
  escalations text,

  -- descriptive
  description text,
  highlights text[] default '{}'::text[],
  upside_potential text,

  -- contact (displayed publicly on detail page)
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  contact_company text,

  -- meta
  photo_urls text[] default '{}'::text[],
  view_count integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists listings_status_idx on public.listings (status);
create index if not exists listings_property_type_idx on public.listings (property_type);
create index if not exists listings_city_idx on public.listings (city);
create index if not exists listings_user_id_idx on public.listings (user_id);
create index if not exists listings_created_at_idx on public.listings (created_at desc);

-- Auto-touch updated_at on UPDATE
create or replace function public.touch_listing_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists listings_touch_updated_at on public.listings;
create trigger listings_touch_updated_at
  before update on public.listings
  for each row execute function public.touch_listing_updated_at();

-- =====================================================
-- 2. Row Level Security
-- =====================================================
alter table public.listings enable row level security;

-- Anyone (including anonymous visitors) can read active listings.
drop policy if exists "public read active listings" on public.listings;
create policy "public read active listings"
  on public.listings for select
  using (status <> 'withdrawn');

-- Authenticated users can insert a listing — the row's user_id must match them.
drop policy if exists "auth insert own listing" on public.listings;
create policy "auth insert own listing"
  on public.listings for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Owners can update their own listings.
drop policy if exists "auth update own listing" on public.listings;
create policy "auth update own listing"
  on public.listings for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Owners can delete (soft delete preferred in UI, but hard delete allowed here).
drop policy if exists "auth delete own listing" on public.listings;
create policy "auth delete own listing"
  on public.listings for delete
  to authenticated
  using (auth.uid() = user_id);
