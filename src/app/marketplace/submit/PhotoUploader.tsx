"use client";

import { useState, useRef } from "react";
import { MAX_PHOTOS_PER_LISTING, validatePhoto } from "@/lib/listing-photos";

interface PhotoUploaderProps {
  /** Files currently queued for upload. */
  files: File[];
  /** Called when the queue changes. */
  onChange: (files: File[]) => void;
  /** Optional error to surface from the parent (e.g. validation). */
  error?: string;
}

/**
 * Client-side photo queue: users pick or drag-drop up to MAX_PHOTOS_PER_LISTING
 * images. The actual upload happens in the parent on form submit so we can
 * gate it behind auth/validation.
 */
export function PhotoUploader({ files, onChange, error }: PhotoUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [localError, setLocalError] = useState("");

  const add = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    const errors: string[] = [];
    const valid: File[] = [];
    for (const f of list) {
      const v = validatePhoto(f);
      if (v.ok) valid.push(f);
      else errors.push(v.reason);
    }
    const combined = [...files, ...valid];
    if (combined.length > MAX_PHOTOS_PER_LISTING) {
      errors.push(`Only ${MAX_PHOTOS_PER_LISTING} photos max — extras dropped.`);
      combined.length = MAX_PHOTOS_PER_LISTING;
    }
    setLocalError(errors.join(" · "));
    onChange(combined);
    if (inputRef.current) inputRef.current.value = "";
  };

  const remove = (i: number) => {
    onChange(files.filter((_, idx) => idx !== i));
  };

  const move = (i: number, direction: -1 | 1) => {
    const target = i + direction;
    if (target < 0 || target >= files.length) return;
    const next = [...files];
    [next[i], next[target]] = [next[target], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length) add(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl px-6 py-10 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-gold bg-gold/5"
            : "border-dark-border hover:border-gold/50 bg-dark/30"
        }`}
      >
        <svg
          className="w-8 h-8 mx-auto mb-3 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <p className="text-gray-300 font-medium">
          Drop photos here or click to browse
        </p>
        <p className="text-gray-500 text-xs mt-1">
          JPG / PNG / WebP · up to {MAX_PHOTOS_PER_LISTING} photos · 10 MB each
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && add(e.target.files)}
        />
      </div>

      {(error || localError) && (
        <p className="text-red-400 text-xs">{error || localError}</p>
      )}

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {files.map((f, i) => {
            const url = URL.createObjectURL(f);
            return (
              <div
                key={`${f.name}-${i}`}
                className="relative group border border-dark-border rounded-lg overflow-hidden bg-dark-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={f.name}
                  className="aspect-square w-full object-cover"
                  onLoad={() => URL.revokeObjectURL(url)}
                />
                {i === 0 && (
                  <span className="absolute top-1 left-1 bg-gold text-dark text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    Primary
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/80 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => move(i, -1)}
                      disabled={i === 0}
                      className="bg-dark-card/90 hover:bg-dark text-white rounded w-6 h-6 flex items-center justify-center disabled:opacity-40"
                      aria-label="Move earlier"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => move(i, 1)}
                      disabled={i === files.length - 1}
                      className="bg-dark-card/90 hover:bg-dark text-white rounded w-6 h-6 flex items-center justify-center disabled:opacity-40"
                      aria-label="Move later"
                    >
                      →
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="bg-red-500/80 hover:bg-red-500 text-white rounded w-6 h-6 flex items-center justify-center"
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {files.length > 0 && (
        <p className="text-gray-500 text-xs">
          First photo becomes the hero image on the listing and the thumbnail in
          the browse grid. Drag the arrows to reorder.
        </p>
      )}
    </div>
  );
}
