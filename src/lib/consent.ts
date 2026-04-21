/**
 * Cookie consent + first-party visitor ID.
 *
 * Two cookies are used:
 *   - mxl_consent: JSON blob capturing the user's consent choices
 *   - mxl_vid:     first-party UUID set once per visitor (after analytics consent)
 *
 * Pages that render before consent is granted must still be functional —
 * all helpers here are safe to call on the server (return defaults).
 */

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  /** schema version — bump to invalidate stale consents */
  v: number;
  /** ms timestamp consent was recorded */
  ts: number;
};

export const CONSENT_COOKIE = "mxl_consent";
export const VISITOR_ID_COOKIE = "mxl_vid";
export const CONSENT_EVENT = "mxl:consent-change";
export const CONSENT_SCHEMA_VERSION = 1;

const ONE_YEAR = 60 * 60 * 24 * 365;
const TWO_YEARS = ONE_YEAR * 2;

export const DEFAULT_CONSENT: ConsentState = {
  analytics: false,
  marketing: false,
  v: CONSENT_SCHEMA_VERSION,
  ts: 0,
};

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax${
    location.protocol === "https:" ? "; secure" : ""
  }`;
}

export function readConsent(): ConsentState | null {
  const raw = readCookie(CONSENT_COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.v !== CONSENT_SCHEMA_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(state: Omit<ConsentState, "v" | "ts">) {
  const full: ConsentState = {
    ...state,
    v: CONSENT_SCHEMA_VERSION,
    ts: Date.now(),
  };
  writeCookie(CONSENT_COOKIE, JSON.stringify(full), ONE_YEAR);

  if (state.analytics) {
    ensureVisitorId();
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: full }));
}

export function hasConsented(): boolean {
  return readConsent() !== null;
}

/** Create/return the first-party visitor UUID. Only call after analytics consent. */
export function ensureVisitorId(): string {
  const existing = readCookie(VISITOR_ID_COOKIE);
  if (existing) return existing;
  const id = generateUuid();
  writeCookie(VISITOR_ID_COOKIE, id, TWO_YEARS);
  return id;
}

export function getVisitorId(): string | null {
  return readCookie(VISITOR_ID_COOKIE);
}

function generateUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback for environments without crypto.randomUUID
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
