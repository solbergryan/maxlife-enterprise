-- Semantic search for marketplace listings via pgvector.
--
-- Prerequisites:
--   1. Enable the vector extension once in Supabase:
--        create extension if not exists vector;
--   2. Set OPENAI_API_KEY or VOYAGE_API_KEY in your Vercel env vars.
--   3. After running this migration, call POST /api/search/listings/embed-all
--      (or let embeddings generate lazily on first search) to populate existing rows.
--
-- To roll back:
--   alter table public.listings drop column if exists embedding;
--   drop function if exists public.match_listings;
--   drop index if exists listings_embedding_idx;

-- ── 1. Enable pgvector ────────────────────────────────────────────────────────
create extension if not exists vector;

-- ── 2. Add embedding column ───────────────────────────────────────────────────
-- OpenAI text-embedding-3-small → 1536 dims
-- Voyage voyage-large-2         → 1024 dims
-- Default here is 1536 (OpenAI). Change to 1024 if using Voyage.
alter table public.listings
  add column if not exists embedding vector(1536);

-- ── 3. HNSW index for fast cosine similarity ──────────────────────────────────
-- HNSW is faster at query time than IVFFlat; no training needed.
create index if not exists listings_embedding_idx
  on public.listings
  using hnsw (embedding vector_cosine_ops)
  with (m = 16, ef_construction = 64);

-- ── 4. Similarity search function ─────────────────────────────────────────────
-- Returns listings ordered by cosine similarity to the query vector.
-- Called from the /api/search/listings API route.
create or replace function public.match_listings(
  query_embedding  vector(1536),
  match_threshold  float    default 0.3,
  match_count      int      default 10
)
returns table (
  id               uuid,
  slug             text,
  title            text,
  property_type    text,
  transaction_type text,
  city             text,
  state            text,
  price            numeric,
  cap_rate         numeric,
  building_sqft    integer,
  tenant           text,
  lease_type       text,
  status           text,
  photo_urls       text[],
  similarity       float
)
language sql stable
as $$
  select
    l.id,
    l.slug,
    l.title,
    l.property_type,
    l.transaction_type,
    l.city,
    l.state,
    l.price,
    l.cap_rate,
    l.building_sqft,
    l.tenant,
    l.lease_type,
    l.status,
    l.photo_urls,
    1 - (l.embedding <=> query_embedding) as similarity
  from public.listings l
  where
    l.status <> 'withdrawn'
    and l.embedding is not null
    and 1 - (l.embedding <=> query_embedding) > match_threshold
  order by l.embedding <=> query_embedding
  limit match_count;
$$;

-- ── 5. Full-text search fallback ──────────────────────────────────────────────
-- Used when no embedding is available or OPENAI_API_KEY is not set.
-- Creates a tsvector index on the most searchable text columns.
alter table public.listings
  add column if not exists fts tsvector
    generated always as (
      setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
      setweight(to_tsvector('english', coalesce(tenant, '')), 'A') ||
      setweight(to_tsvector('english', coalesce(property_type, '')), 'B') ||
      setweight(to_tsvector('english', coalesce(city, '')), 'B') ||
      setweight(to_tsvector('english', coalesce(county, '')), 'B') ||
      setweight(to_tsvector('english', coalesce(description, '')), 'C') ||
      setweight(to_tsvector('english', coalesce(upside_potential, '')), 'D')
    ) stored;

create index if not exists listings_fts_idx
  on public.listings
  using gin (fts);
