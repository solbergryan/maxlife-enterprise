-- MaxLife Realty — Leads capture schema
-- Run this once in the Supabase SQL editor (same project as the academy).
-- Additive to schema.sql — safe to run even if academy tables already exist.

-- =====================================================
-- Leads table
--   Stores every email capture from lead magnets:
--   workbook PDFs, net sheet exports, deal analyzer reports.
-- =====================================================
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  name        text,
  phone       text,
  source      text not null,          -- e.g. 'workbook', 'net-sheet-seller', 'deal-analyzer'
  source_ref  text,                   -- e.g. course slug, property address
  metadata    jsonb default '{}'::jsonb,  -- arbitrary context (inputs, deal score, etc.)
  user_agent  text,
  referer     text,
  ip          text,
  created_at  timestamptz not null default now()
);

create index if not exists leads_email_idx   on public.leads (email);
create index if not exists leads_source_idx  on public.leads (source);
create index if not exists leads_created_idx on public.leads (created_at desc);

-- =====================================================
-- Row Level Security
--   Writes happen from server components / API routes using the
--   anon key, so we allow INSERT for anon. Reads are blocked at
--   the policy level — use the service role key (or dashboard) to
--   query leads. Never expose SELECT to the anon key.
-- =====================================================
alter table public.leads enable row level security;

drop policy if exists "leads_anon_insert" on public.leads;
create policy "leads_anon_insert"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- Intentionally NO select policy: anon cannot read the leads list.
