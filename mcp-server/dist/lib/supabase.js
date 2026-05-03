import { createClient } from "@supabase/supabase-js";
function getSupabase() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_KEY;
    if (!url || !key) {
        throw new Error("SUPABASE_URL and SUPABASE_KEY env vars are required");
    }
    return createClient(url, key);
}
export const supabase = getSupabase();
