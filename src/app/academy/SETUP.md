# MaxLife Academy — One-Time Setup

The academy content (all courses and lessons) works without any setup — it's static MDX. Supabase is only required if you want **user login, progress tracking, and completion certificates**. Skip Supabase and the site still renders all lessons for SEO.

## 1. Create the Supabase project

1. Go to https://supabase.com → **New project**
2. Name: `maxlife-academy`
3. Database password: generate a strong one and save it in your password manager
4. Region: **East US (N. Virginia)** (`us-east-1`) — closest to Central Florida
5. Wait ~2 minutes for the project to provision

## 2. Run the schema

1. In Supabase dashboard → **SQL Editor** → **New query**
2. Copy the entire contents of `supabase/schema.sql` (at the repo root) and paste
3. Click **Run** — you should see "Success. No rows returned"
4. Verify in **Table Editor**: `profiles` and `lesson_progress` tables should both exist

## 3. Copy the API keys

1. Supabase dashboard → **Settings** → **API**
2. Copy **Project URL** (e.g. `https://abcdefgh.supabase.co`)
3. Copy **anon public** key (a long JWT starting with `eyJ...`)

## 4. Create `.env.local`

At the repo root (same folder as `package.json`), create a file named `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-anon-key-here
```

**Do not commit this file.** It's already in `.gitignore`.

## 5. (Optional) Enable Google OAuth

Skip this if magic-link email is enough.

1. Supabase dashboard → **Authentication** → **Providers** → **Google**
2. Toggle **Enable**
3. In a separate tab, go to Google Cloud Console → APIs & Services → Credentials
4. Create OAuth 2.0 Client ID (Web application)
5. Authorized redirect URI: the "Callback URL" shown in Supabase (it will look like `https://your-project-ref.supabase.co/auth/v1/callback`)
6. Copy the Google Client ID + Client Secret back into Supabase and save

## 6. Configure site URL (important for production)

Supabase dashboard → **Authentication** → **URL Configuration**:

- **Site URL**: `http://localhost:3000` (for dev) or `https://www.maxlifedevelopment.com` (for prod)
- **Redirect URLs**: add both of these:
  - `http://localhost:3000/academy/auth/callback`
  - `https://www.maxlifedevelopment.com/academy/auth/callback`

## 7. Run the site

```bash
npm install     # if you haven't already
npm run dev
```

Visit http://localhost:3000/academy — the full curriculum should load. Try signing in at /academy/login.

## Troubleshooting

- **"Invalid API key"** → Double-check `.env.local` values and restart `npm run dev` (env vars only reload on restart).
- **Magic link email not arriving** → Check spam folder. For production, configure a custom SMTP provider in Supabase → Auth → Email Templates (the default Supabase sender has strict rate limits).
- **"redirect_uri_mismatch" on Google sign-in** → Your redirect URL in Google Cloud Console must exactly match the Supabase callback URL.
- **Progress not saving** → Open browser DevTools → Network tab → look for failed requests to supabase.co. Most likely RLS policy issue — re-run `schema.sql`.
