-- MaxLife Marketplace — Storage bucket for user-uploaded listing photos.
-- Run once in the Supabase SQL editor after applying listings-schema.sql.
--
-- Bucket layout:
--   listing-photos / {user_id} / {slug} / {filename}
--
-- Policies:
--   * Anyone can read (so listing pages render without login)
--   * Only authenticated users can upload, and only to a folder starting
--     with their own auth.uid() — prevents users from overwriting each
--     other's images.

-- =====================================================
-- 1. Create the bucket (idempotent)
-- =====================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'listing-photos',
  'listing-photos',
  true,                                                 -- public reads via CDN
  10 * 1024 * 1024,                                     -- 10 MB per file max
  array['image/jpeg','image/png','image/webp','image/gif']::text[]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- =====================================================
-- 2. RLS policies on the storage.objects table
-- =====================================================

-- Public SELECT — anyone can fetch objects in the listing-photos bucket.
drop policy if exists "listing photos public read" on storage.objects;
create policy "listing photos public read"
  on storage.objects for select
  to public
  using (bucket_id = 'listing-photos');

-- Authenticated INSERT — user can upload only into their own {uid}/... folder.
drop policy if exists "listing photos owner insert" on storage.objects;
create policy "listing photos owner insert"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'listing-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- Authenticated UPDATE — user can modify only their own files.
drop policy if exists "listing photos owner update" on storage.objects;
create policy "listing photos owner update"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'listing-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'listing-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- Authenticated DELETE — user can delete only their own files.
drop policy if exists "listing photos owner delete" on storage.objects;
create policy "listing photos owner delete"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'listing-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- =====================================================
-- 3. Verification
-- =====================================================
select
  (select count(*) from storage.buckets where id = 'listing-photos') as bucket_count,
  (select count(*) from pg_policies where tablename = 'objects' and policyname like 'listing photos%') as policy_count;
-- Expected: bucket_count = 1, policy_count = 4
