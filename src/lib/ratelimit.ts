import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import type { NextRequest } from "next/server";

/**
 * Upstash-backed sliding-window rate limiting for public API endpoints.
 *
 * If UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN aren't set, the
 * limiters silently no-op (returning `success: true`). That way the code
 * ships safely before the Upstash account is provisioned — it just isn't
 * protecting anything until the env vars show up.
 *
 * Each limiter has its own key prefix so limits for different endpoints
 * don't share a counter.
 */
const hasCreds =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = hasCreds ? Redis.fromEnv() : null;

function makeLimiter(
  tokens: number,
  window: Parameters<typeof Ratelimit.slidingWindow>[1],
  prefix: string,
): Ratelimit | null {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(tokens, window),
    analytics: true,
    prefix,
  });
}

// Tuning rationale: honest inquiries come in 1s and 2s per IP over a
// session. Humans filling out a form do not submit 5 inquiries in 10 min.
// 5 / 10m is comfortably above real usage and kills spray-and-pray bots.
export const inquiryLimiter = makeLimiter(5, "10 m", "mxl:rl:inquiry");

// Lead-capture endpoints (newsletter, workbook, deal-analyzer, net-sheet)
// get a bit more headroom since users sometimes re-submit forms or the
// double-opt-in flow can cause retries.
export const leadLimiter = makeLimiter(10, "10 m", "mxl:rl:lead");

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // epoch ms
}

/**
 * Pull the best-available client identifier off the request for keying the
 * limiter. Vercel sets `x-forwarded-for` (first IP = client), `x-real-ip`,
 * and on the edge runtime `request.ip`. Falls back to a fixed string if
 * nothing's available so at least the limiter has a bucket instead of
 * throwing.
 */
export function getClientKey(req: NextRequest | Request): string {
  const headers =
    "headers" in req && req.headers instanceof Headers
      ? req.headers
      : new Headers();
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = headers.get("x-real-ip");
  if (real) return real;
  return "unknown-client";
}

/**
 * Invoke a named limiter. Returns `success: true` with zeroed counters
 * when the limiter is disabled (no Upstash creds) so callers can proceed.
 */
export async function enforce(
  limiter: Ratelimit | null,
  key: string,
): Promise<RateLimitResult> {
  if (!limiter) {
    return { success: true, limit: 0, remaining: 0, reset: 0 };
  }
  const r = await limiter.limit(key);
  return {
    success: r.success,
    limit: r.limit,
    remaining: r.remaining,
    reset: r.reset,
  };
}
