-- =====================================================
-- PDF Analyzer Submissions
--   One row per successful /api/analyze-pdf call.
--   Lets us see what kinds of deals visitors are vetting,
--   conversion to leads, popular asset types, etc.
-- =====================================================

create table if not exists public.pdf_analyzer_submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),

  -- File info
  filename        text,
  pdf_size_bytes  bigint,

  -- Extracted property metadata
  property_name   text,
  address         text,
  city            text,
  state           text,
  asset_type      text,            -- 'NNN' | 'Multifamily' | 'SFR' | etc.
  tenant          text,
  lease_type      text,
  building_sqft   integer,
  units           integer,
  year_built      integer,

  -- Extracted financials
  purchase_price  numeric,
  annual_rent     numeric,
  noi             numeric,
  stated_cap_rate numeric,

  -- Computed analysis output (snapshot)
  grade           text,             -- A+ through D
  irr             numeric,          -- decimal (e.g. 0.038 = 3.8%)
  dscr            numeric,
  avg_coc         numeric,
  equity_multiple numeric,
  yr1_cashflow    numeric,
  exit_value      numeric,
  total_return    numeric,

  -- Underwriting overrides used
  down_payment_pct numeric,
  interest_rate    numeric,
  hold_period      integer,

  -- Optional uploader contact (lead capture)
  uploader_name   text,
  uploader_email  text,

  -- Request context
  user_agent      text,
  referer         text,
  ip              text
);

create index if not exists pdf_analyzer_submissions_created_idx
  on public.pdf_analyzer_submissions (created_at desc);

create index if not exists pdf_analyzer_submissions_grade_idx
  on public.pdf_analyzer_submissions (grade);

create index if not exists pdf_analyzer_submissions_asset_type_idx
  on public.pdf_analyzer_submissions (asset_type);

create index if not exists pdf_analyzer_submissions_uploader_email_idx
  on public.pdf_analyzer_submissions (uploader_email)
  where uploader_email is not null;

-- =====================================================
-- Row Level Security
--   Server inserts using service role key (bypasses RLS).
--   No SELECT for anon — only the dashboard / service role
--   can read submissions. This data is sensitive (uploader
--   contact info + their deal flow).
-- =====================================================
alter table public.pdf_analyzer_submissions enable row level security;

-- No policies = no access for anon. Service role bypasses RLS.
