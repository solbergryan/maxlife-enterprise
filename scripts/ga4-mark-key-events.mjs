/**
 * Mark GA4 key events (formerly "conversions") via the Admin API.
 *
 * Property: 532424802
 *
 * Default events marked as key events:
 *   - form_submit  (lead capture)
 *
 * Reuses scripts/.ga4-token.json (analytics.edit scope from the audience script).
 *
 * Run:
 *   node scripts\ga4-mark-key-events.mjs
 *
 * Idempotent — lists existing key events first and skips anything already marked.
 */

import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";

const PROPERTY_ID = "532424802";
const OAUTH_CLIENT_PATH = path.join(process.cwd(), "scripts", ".ga4-oauth-client.json");
const TOKEN_PATH = path.join(process.cwd(), "scripts", ".ga4-token.json");

const KEY_EVENTS = [
  { eventName: "form_submit", countingMethod: "ONCE_PER_SESSION" },
  // add more here if you want (e.g. { eventName: "begin_checkout", countingMethod: "ONCE_PER_EVENT" })
];

async function getAuth() {
  if (!fs.existsSync(OAUTH_CLIENT_PATH)) {
    throw new Error(`Missing ${OAUTH_CLIENT_PATH}`);
  }
  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error(
      `Missing ${TOKEN_PATH} — run 'node scripts\\create-ga4-audiences.mjs' first to create it.`
    );
  }
  const raw = JSON.parse(fs.readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const cfg = raw.installed || raw.web;
  const oauth2 = new google.auth.OAuth2(
    cfg.client_id,
    cfg.client_secret,
    cfg.redirect_uris?.[0] || "http://localhost"
  );
  oauth2.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8")));
  return oauth2;
}

async function main() {
  const auth = await getAuth();
  const admin = google.analyticsadmin({ version: "v1beta", auth });
  const parent = `properties/${PROPERTY_ID}`;

  const existing = new Set();
  let pageToken;
  do {
    const res = await admin.properties.keyEvents.list({ parent, pageToken });
    for (const e of res.data.keyEvents || []) existing.add(e.eventName);
    pageToken = res.data.nextPageToken;
  } while (pageToken);
  console.log(`Existing key events on ${parent}:`, [...existing]);

  for (const ke of KEY_EVENTS) {
    if (existing.has(ke.eventName)) {
      console.log(`[skip] "${ke.eventName}" already marked as key event`);
      continue;
    }
    try {
      const res = await admin.properties.keyEvents.create({
        parent,
        requestBody: ke,
      });
      console.log(`[ok] marked "${ke.eventName}" -> ${res.data.name}`);
    } catch (err) {
      const msg = err.response?.data || err.errors || err.message;
      console.error(`[fail] "${ke.eventName}":`, JSON.stringify(msg, null, 2));
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
