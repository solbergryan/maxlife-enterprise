import type { NextConfig } from "next";
import path from "node:path";

// Report-only CSP: browsers log violations without blocking anything. Check the
// console in devtools to see what's flagged, then tighten the policy and move
// from `Content-Security-Policy-Report-Only` to `Content-Security-Policy` to
// enforce. 'unsafe-inline'/'unsafe-eval' for script-src accommodate Next.js
// hydration and third-party SDKs (GA, Meta, LinkedIn, RB2B); tightening those
// requires nonces per request, which is a bigger refactor.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com https://*.rb2b.com https://*.vercel-scripts.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://vitals.vercel-insights.com https://*.vercel-insights.com https://www.facebook.com https://px.ads.linkedin.com https://*.rb2b.com",
  "frame-src 'self' https://www.googletagmanager.com https://www.facebook.com https://td.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // HTTPS-only for 2 years, apply to all subdomains, eligible for browser preload list.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this directory. Without this,
  // Next's workspace-root heuristic can walk up past the worktree and
  // pick up stray files like middleware.ts from the parent clone.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      // Supabase Storage (marketplace listing photos)
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "*.supabase.in" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
