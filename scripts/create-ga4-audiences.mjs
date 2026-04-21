/**
 * Create 4 GA4 audiences via the Admin API.
 *
 * Property: MAXLIFEREALTY > MaxLife Development
 * Property ID: 532424802  (from URL: a350256183p532424802)
 *
 * Audiences created:
 *   2. High-Intent Browsers  — page_view w/ page_location regex `/markets/|/deal-analyzer`, exclude users who fired form_submit
 *   3. Blog Deep Readers     — page_view w/ page_location contains `/blog/`
 *   4. 1031 Interest         — page_view w/ page_location contains `/blog/1031-exchange-orlando-guide`
 *   5. NNN Interest          — page_view w/ page_location contains `/blog/orlando-nnn-properties-for-sale`
 *
 * SETUP:
 *   1) npm install --no-save googleapis
 *   2) Create an OAuth Desktop client in the Cloud project that owns this GA4 property:
 *        https://console.cloud.google.com/apis/credentials
 *      Enable the Google Analytics Admin API for that project.
 *      Download the JSON and save it as scripts/.ga4-oauth-client.json  (gitignored).
 *   3) node scripts/create-ga4-audiences.mjs
 *      On first run it prints an auth URL — open it, sign in as ryan@maxliferealty.com,
 *      approve, paste the code back. The refresh token is cached in scripts/.ga4-token.json.
 *
 * Alternative (service account):
 *   Grant a service account "Editor" on the GA4 property (Admin > Property access management),
 *   download its JSON key, save as scripts/.ga4-sa.json, then run:
 *     GOOGLE_APPLICATION_CREDENTIALS=scripts/.ga4-sa.json node scripts/create-ga4-audiences.mjs
 */

import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";

const PROPERTY_ID = "532424802";
const SCOPES = ["https://www.googleapis.com/auth/analytics.edit"];
const OAUTH_CLIENT_PATH = path.join(process.cwd(), "scripts", ".ga4-oauth-client.json");
const TOKEN_PATH = path.join(process.cwd(), "scripts", ".ga4-token.json");

// ---------------- Audience specs ----------------
// GA4 Admin API reference: https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/properties.audiences

const MEMBERSHIP_30 = { membershipDurationDays: 30 };

// Top-level AudienceFilterExpression must be andGroup { filterExpressions: [...] }.
// Helpers to keep the specs readable:
// Top-level must be andGroup, whose members must each be orGroup (which wraps the leaf).
const wrap = (expr) => ({
  andGroup: {
    filterExpressions: [{ orGroup: { filterExpressions: [expr] } }],
  },
});

const pageLocationFilter = (matchType, value) => ({
  eventFilter: {
    eventName: "page_view",
    eventParameterFilterExpression: wrap({
      dimensionOrMetricFilter: {
        fieldName: "page_location",
        stringFilter: { matchType, value },
      },
    }),
  },
});

const eventNameFilter = (value) => ({
  dimensionOrMetricFilter: {
    fieldName: "eventName",
    stringFilter: { matchType: "EXACT", value },
  },
});

const includeEvent = (scope, expr) => ({
  clauseType: "INCLUDE",
  simpleFilter: { scope, filterExpression: wrap(expr) },
});

const excludeEvent = (scope, expr) => ({
  clauseType: "EXCLUDE",
  simpleFilter: { scope, filterExpression: wrap(expr) },
});

const SCOPE_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT";
const SCOPE_ALL = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS";

const audiences = [
  {
    displayName: "High-Intent Browsers",
    description:
      "Users who viewed /markets/* or /deal-analyzer pages and did not submit a form",
    ...MEMBERSHIP_30,
    filterClauses: [
      includeEvent(
        SCOPE_EVENT,
        pageLocationFilter("FULL_REGEXP", "/markets/|/deal-analyzer")
      ),
      excludeEvent(SCOPE_ALL, eventNameFilter("form_submit")),
    ],
  },

  {
    displayName: "Blog Deep Readers",
    description: "Users who viewed any /blog/ page",
    ...MEMBERSHIP_30,
    filterClauses: [
      includeEvent(SCOPE_EVENT, pageLocationFilter("CONTAINS", "/blog/")),
    ],
  },

  {
    displayName: "1031 Interest",
    description: "Users who viewed the 1031 exchange Orlando guide",
    ...MEMBERSHIP_30,
    filterClauses: [
      includeEvent(
        SCOPE_EVENT,
        pageLocationFilter("CONTAINS", "/blog/1031-exchange-orlando-guide")
      ),
    ],
  },

  {
    displayName: "NNN Interest",
    description: "Users who viewed the Orlando NNN properties for sale guide",
    ...MEMBERSHIP_30,
    filterClauses: [
      includeEvent(
        SCOPE_EVENT,
        pageLocationFilter("CONTAINS", "/blog/orlando-nnn-properties-for-sale")
      ),
    ],
  },
];

// ---------------- Auth ----------------

async function getAuth() {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const auth = new google.auth.GoogleAuth({ scopes: SCOPES });
    return auth.getClient();
  }

  if (!fs.existsSync(OAUTH_CLIENT_PATH)) {
    throw new Error(
      `Missing ${OAUTH_CLIENT_PATH}. Download an OAuth Desktop client JSON and save it there, or set GOOGLE_APPLICATION_CREDENTIALS.`
    );
  }

  const raw = JSON.parse(fs.readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const cfg = raw.installed || raw.web;
  const redirectUri =
    cfg.redirect_uris?.[0] || "urn:ietf:wg:oauth:2.0:oob";
  const oauth2 = new google.auth.OAuth2(cfg.client_id, cfg.client_secret, redirectUri);

  if (fs.existsSync(TOKEN_PATH)) {
    oauth2.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8")));
    return oauth2;
  }

  const codeArg = process.argv.slice(2).find((a) => a.startsWith("--code="));
  if (codeArg) {
    const code = codeArg.slice("--code=".length).trim();
    const { tokens } = await oauth2.getToken(code);
    oauth2.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
    console.log(`Token cached at ${TOKEN_PATH}`);
    return oauth2;
  }
  const url = oauth2.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });
  console.log("\n=== OAuth Authorization Required ===");
  console.log("1) Open this URL in your browser (sign in as ryan@maxliferealty.com):\n");
  console.log(url);
  console.log("\n2) After approving, Google redirects to http://localhost/?code=XXXXX&scope=...");
  console.log("   Copy the value of the `code` query parameter from that URL.");
  console.log("\n3) Re-run this script with the code:");
  console.log("   node scripts\\create-ga4-audiences.mjs --code=PASTE_CODE_HERE");
  process.exit(0);
}

// ---------------- Main ----------------

async function main() {
  const auth = await getAuth();
  const admin = google.analyticsadmin({ version: "v1alpha", auth });

  const parent = `properties/${PROPERTY_ID}`;

  // Dedupe against existing audiences by displayName.
  const existing = new Set();
  let pageToken;
  do {
    const res = await admin.properties.audiences.list({ parent, pageToken });
    for (const a of res.data.audiences || []) existing.add(a.displayName);
    pageToken = res.data.nextPageToken;
  } while (pageToken);
  console.log(`Existing audiences on ${parent}:`, [...existing]);

  for (const audience of audiences) {
    if (existing.has(audience.displayName)) {
      console.log(`[skip] "${audience.displayName}" already exists`);
      continue;
    }
    try {
      const res = await admin.properties.audiences.create({
        parent,
        requestBody: audience,
      });
      console.log(`[ok] created "${audience.displayName}" -> ${res.data.name}`);
    } catch (err) {
      const msg = err.response?.data || err.errors || err.message;
      console.error(`[fail] "${audience.displayName}":`, JSON.stringify(msg, null, 2));
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
