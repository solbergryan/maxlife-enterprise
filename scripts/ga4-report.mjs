/**
 * GA4 weekly reporting — pulls actionable numbers via the Data API and writes
 * a Markdown report to reports/ga4-weekly-YYYY-MM-DD.md.
 *
 * Property: 532424802 (MaxLife Development)
 *
 * Three reports:
 *   1. Top converting landing pages (last 30 days)
 *   2. Top blog pages by engagement (last 30 days)
 *   3. Traffic sources + conversion
 *
 * Reuses scripts/.ga4-oauth-client.json (same OAuth client as audience script)
 * but has its own token (.ga4-report-token.json) because it needs the
 * analytics.readonly scope rather than analytics.edit.
 *
 * First run (prints auth URL):
 *   node scripts\ga4-report.mjs
 * After you sign in as ryan@maxliferealty.com and copy the `code` from the
 * redirect URL:
 *   node scripts\ga4-report.mjs --code=PASTED_CODE
 * Subsequent runs (token cached):
 *   node scripts\ga4-report.mjs
 */

import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";

const PROPERTY_ID = "532424802";
const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];
const OAUTH_CLIENT_PATH = path.join(process.cwd(), "scripts", ".ga4-oauth-client.json");
const TOKEN_PATH = path.join(process.cwd(), "scripts", ".ga4-report-token.json");
const REPORTS_DIR = path.join(process.cwd(), "reports");

// ---------------- Auth ----------------

async function getAuth() {
  if (!fs.existsSync(OAUTH_CLIENT_PATH)) {
    throw new Error(`Missing ${OAUTH_CLIENT_PATH}`);
  }
  const raw = JSON.parse(fs.readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const cfg = raw.installed || raw.web;
  const redirectUri = cfg.redirect_uris?.[0] || "http://localhost";
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
  console.log("\n=== OAuth Authorization Required (read-only analytics) ===");
  console.log("1) Open this URL (sign in as ryan@maxliferealty.com):\n");
  console.log(url);
  console.log("\n2) After approving, Google redirects to http://localhost/?code=XXXXX&scope=...");
  console.log("   Copy the value of the `code` query parameter.");
  console.log("\n3) Re-run:");
  console.log("   node scripts\\ga4-report.mjs --code=PASTE_CODE");
  process.exit(0);
}

// ---------------- Formatting helpers ----------------

const fmt = (v) =>
  typeof v === "number" && !Number.isInteger(v) ? v.toFixed(2) : String(v);

function rowsToMarkdown(headers, rows, opts = {}) {
  if (!rows || rows.length === 0) return "_No data in this period._\n";
  const limit = opts.limit || rows.length;
  const lines = [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.slice(0, limit).map((r) => `| ${r.map(fmt).join(" | ")} |`),
  ];
  return lines.join("\n") + "\n";
}

function parseRows(res, dimCount) {
  return (res.data.rows || []).map((r) => [
    ...r.dimensionValues.slice(0, dimCount).map((d) => d.value),
    ...r.metricValues.map((m) => {
      const n = Number(m.value);
      return Number.isFinite(n) ? n : m.value;
    }),
  ]);
}

// ---------------- Main ----------------

async function main() {
  const auth = await getAuth();
  const data = google.analyticsdata({ version: "v1beta", auth });

  const property = `properties/${PROPERTY_ID}`;
  const dateRange = [{ startDate: "30daysAgo", endDate: "today" }];
  const today = new Date().toISOString().slice(0, 10);

  // --- Report 1: Top converting landing pages ---
  const landingRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "keyEvents" },
        { name: "userEngagementDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: "15",
    },
  });

  // --- Report 2: Top blog pages by engagement ---
  const blogRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "pagePath",
          stringFilter: { matchType: "CONTAINS", value: "/blog/" },
        },
      },
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: "15",
    },
  });

  // --- Report 3: Traffic sources + conversion ---
  const sourceRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [
        { name: "sessionSource" },
        { name: "sessionMedium" },
      ],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "keyEvents" },
        { name: "engagementRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: "15",
    },
  });

  // --- Report 4: Event firing audit ---
  const eventAuditRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit: "30",
    },
  });

  // --- Report 5: Funnel ---
  // totalUsers + dimensionFilter without a matching dimension returns 0 in GA4 Data API.
  // Workaround: include the filtered dimension in the query, then sum activeUsers across rows.
  // (Slight overcount when a user visits multiple matching pages — acceptable for directional funnel.)
  const funnelStep = async (name, dimension, filter) => {
    const req = {
      dateRanges: dateRange,
      metrics: [{ name: "activeUsers" }],
    };
    if (dimension) req.dimensions = [{ name: dimension }];
    if (filter) req.dimensionFilter = filter;
    const res = await data.properties.runReport({ property, requestBody: req });
    const rows = res.data.rows || [];
    // With a dimension, we get one row per value — sum them.
    // Without a dimension, there's one row with the total.
    const users = rows.reduce(
      (sum, r) => sum + Number(r.metricValues?.[0]?.value || 0),
      0
    );
    return { name, users };
  };
  const step1 = await funnelStep("All visitors", null, null);
  const step2 = await funnelStep(
    "Viewed high-intent page (/markets/ or /deal-analyzer)",
    "pagePath",
    {
      orGroup: {
        expressions: [
          {
            filter: {
              fieldName: "pagePath",
              stringFilter: { matchType: "CONTAINS", value: "/markets/" },
            },
          },
          {
            filter: {
              fieldName: "pagePath",
              stringFilter: { matchType: "CONTAINS", value: "/deal-analyzer" },
            },
          },
        ],
      },
    }
  );
  const step3 = await funnelStep(
    "Fired form_submit",
    "eventName",
    {
      filter: {
        fieldName: "eventName",
        stringFilter: { matchType: "EXACT", value: "form_submit" },
      },
    }
  );
  const funnelRows = [step1, step2, step3].map((s, i, all) => {
    const prev = i > 0 ? all[i - 1].users : null;
    const drop = prev && prev > 0 ? ((1 - s.users / prev) * 100).toFixed(1) + "%" : "—";
    const pct = all[0].users > 0 ? ((s.users / all[0].users) * 100).toFixed(1) + "%" : "—";
    return [s.name, s.users, drop, pct];
  });

  // --- Report 6: Landing-page conversion attribution ---
  const landingConvRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "keyEvents" },
        { name: "sessionKeyEventRate" },
      ],
      orderBys: [{ metric: { metricName: "keyEvents" }, desc: true }],
      limit: "15",
    },
  });

  // --- Report 7: CTA click breakdown (custom event cta_click w/ cta_name param) ---
  // cta_name is a custom event parameter — requires registered custom dimension.
  // We query eventCount filtered to cta_click by eventName only (parameter breakdown
  // requires the custom dimension to be registered in GA4 Admin).
  const ctaRes = await data.properties.runReport({
    property,
    requestBody: {
      dateRanges: dateRange,
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          inListFilter: {
            values: [
              "cta_click",
              "form_submit",
              "deal_analyzer_use",
              "blog_scroll_depth",
            ],
          },
        },
      },
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit: "10",
    },
  });

  // --- Assemble Markdown ---
  const md = [];
  md.push(`# MaxLife GA4 Weekly Report`);
  md.push(`_Generated ${today} — property \`${PROPERTY_ID}\` — last 30 days_\n`);

  md.push(`## 1. Top Landing Pages by Sessions\n`);
  md.push(`Which entry pages bring the most traffic and which convert. Focus marketing on high-key-event pages; fix bounce on high-sessions low-conversion pages.\n`);
  md.push(
    rowsToMarkdown(
      ["Landing Page", "Sessions", "Users", "Key Events", "Engagement (sec)"],
      parseRows(landingRes, 1)
    )
  );

  md.push(`## 2. Blog Content Performance\n`);
  md.push(`Which articles pull traffic and hold attention. High views + high engagement = write more like this.\n`);
  md.push(
    rowsToMarkdown(
      ["Path", "Title", "Views", "Users", "Avg Session (sec)", "Bounce Rate"],
      parseRows(blogRes, 2)
    )
  );

  md.push(`## 3. Traffic Sources\n`);
  md.push(`Where visitors come from and which channels actually convert. High sessions + low key events = traffic quality problem.\n`);
  md.push(
    rowsToMarkdown(
      ["Source", "Medium", "Sessions", "Users", "Key Events", "Engagement Rate"],
      parseRows(sourceRes, 2)
    )
  );

  md.push(`## 4. Event Firing Audit\n`);
  md.push(`Every event GA4 has seen in the last 30 days and how often it fired. Use this to verify custom events (\`form_submit\`, \`cta_click\`, \`deal_analyzer_use\`, \`blog_scroll_depth\`) are actually reaching GA4. If a custom event is missing, the tracking call isn't firing.\n`);
  md.push(
    rowsToMarkdown(
      ["Event Name", "Count", "Users"],
      parseRows(eventAuditRes, 1)
    )
  );

  md.push(`## 5. Lead Conversion Funnel\n`);
  md.push(`Visitor → engaged with high-intent content → submitted a form. Drop-off = % of previous step that didn't advance. Overall = % of all visitors who reached that step.\n`);
  md.push(
    rowsToMarkdown(
      ["Step", "Users", "Drop-off from prev", "Overall"],
      funnelRows
    )
  );

  md.push(`## 6. Landing Page Conversion\n`);
  md.push(`Entry pages ranked by key events (conversions), not just traffic. This is the list of landing pages actually driving leads. Key-event rate = % of sessions starting on this page that converted.\n`);
  md.push(
    rowsToMarkdown(
      ["Landing Page", "Sessions", "Key Events", "Conv. Rate"],
      parseRows(landingConvRes, 1)
    )
  );

  md.push(`## 7. Engagement Events\n`);
  md.push(`Usage of the custom engagement events. If \`cta_click\` or \`deal_analyzer_use\` shows 0 but you've tested the site yourself, tracking is broken.\n`);
  md.push(
    rowsToMarkdown(
      ["Event Name", "Count", "Users"],
      parseRows(ctaRes, 1)
    )
  );

  // --- Write file ---
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const outPath = path.join(REPORTS_DIR, `ga4-weekly-${today}.md`);
  fs.writeFileSync(outPath, md.join("\n"));
  console.log(`\nReport written: ${outPath}\n`);
  console.log(md.join("\n"));
}

main().catch((err) => {
  const msg = err.response?.data || err.errors || err.message;
  console.error("Error:", typeof msg === "string" ? msg : JSON.stringify(msg, null, 2));
  process.exit(1);
});
