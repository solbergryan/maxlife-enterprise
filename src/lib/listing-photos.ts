/**
 * Browser-side helpers for uploading listing photos to Supabase Storage.
 *
 * Storage layout: listing-photos/{user_id}/{slug}/{filename}
 * We key by slug (not id) because slugs are generated client-side before the
 * row is inserted, so the uploader can run in parallel with the form submit.
 *
 * All functions here assume the caller already has an authenticated Supabase
 * browser client. They are deliberately framework-free so the same module can
 * be reused by a future edit form.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

const BUCKET = "listing-photos";

/** Returns a storage path safe for Supabase (no slashes, no spaces). */
function sanitizeFilename(name: string): string {
  const ext = name.match(/\.[a-zA-Z0-9]+$/)?.[0] ?? "";
  const base = name.replace(ext, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const rand = Math.random().toString(36).slice(2, 8);
  return `${base.slice(0, 40) || "photo"}-${rand}${ext.toLowerCase()}`;
}

export interface UploadPhotoParams {
  supabase: SupabaseClient;
  userId: string;
  slug: string;
  file: File;
  onProgress?: (loaded: number, total: number) => void;
}

/**
 * Uploads a single photo and returns its public URL.
 * Throws on upload error so the caller can surface it in the UI.
 */
export async function uploadListingPhoto({
  supabase,
  userId,
  slug,
  file,
}: UploadPhotoParams): Promise<string> {
  const path = `${userId}/${slug}/${sanitizeFilename(file.name)}`;
  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });
  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

/** Sequentially upload a batch. Returns the URLs in submission order. */
export async function uploadListingPhotos(
  opts: Omit<UploadPhotoParams, "file"> & { files: File[] }
): Promise<string[]> {
  const urls: string[] = [];
  for (const file of opts.files) {
    // Sequential keeps memory and rate-limit pressure predictable.
    const url = await uploadListingPhoto({ ...opts, file });
    urls.push(url);
  }
  return urls;
}

/** Delete a previously-uploaded photo by its public URL (best-effort). */
export async function deleteListingPhoto(
  supabase: SupabaseClient,
  publicUrl: string
): Promise<void> {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return;
  const path = publicUrl.slice(idx + marker.length);
  await supabase.storage.from(BUCKET).remove([path]);
}

/** Client-side quick validation before sending the file to Supabase. */
export function validatePhoto(
  file: File
): { ok: true } | { ok: false; reason: string } {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(file.type)) {
    return { ok: false, reason: `${file.name}: unsupported format (${file.type})` };
  }
  if (file.size > 10 * 1024 * 1024) {
    return { ok: false, reason: `${file.name}: larger than 10 MB` };
  }
  return { ok: true };
}

export const MAX_PHOTOS_PER_LISTING = 10;
