-- MaxLife Academy — Supabase schema
-- Run this once in the Supabase SQL editor after creating your project.

-- =====================================================
-- 1. Profiles table (1:1 with auth.users)
-- =====================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  email text,
  created_at timestamptz default now()
);

-- =====================================================
-- 2. Lesson completion tracking
-- =====================================================
create table if not exists public.lesson_progress (
  user_id uuid references auth.users on delete cascade,
  course_slug text not null,
  lesson_slug text not null,
  completed_at timestamptz default now(),
  primary key (user_id, course_slug, lesson_slug)
);

create index if not exists lesson_progress_user_course_idx
  on public.lesson_progress (user_id, course_slug);

-- =====================================================
-- 3. Row Level Security
-- =====================================================
alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;

-- profiles policies
drop policy if exists "own profile read" on public.profiles;
create policy "own profile read"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "own profile insert" on public.profiles;
create policy "own profile insert"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "own profile update" on public.profiles;
create policy "own profile update"
  on public.profiles for update
  using (auth.uid() = id);

-- lesson_progress policies
drop policy if exists "own progress read" on public.lesson_progress;
create policy "own progress read"
  on public.lesson_progress for select
  using (auth.uid() = user_id);

drop policy if exists "own progress insert" on public.lesson_progress;
create policy "own progress insert"
  on public.lesson_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "own progress delete" on public.lesson_progress;
create policy "own progress delete"
  on public.lesson_progress for delete
  using (auth.uid() = user_id);

-- =====================================================
-- 4. Auto-create profile on signup
-- =====================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
