#!/usr/bin/env node
/**
 * MaxLife Realty MCP Server
 *
 * Tools exposed:
 *   search_listings        — Query the MaxLife marketplace
 *   get_listing            — Full detail on a single listing
 *   analyze_deal           — Full investment analysis (IRR, DSCR, CoC, equity multiple)
 *   analyze_deal_from_pdf  — Upload an OM/deal memo PDF and get a full analysis
 *   get_cap_rate_benchmarks — Florida 2026 cap rate reference data by asset class
 *   calculate_cap_rate     — Cap rate ↔ NOI ↔ price calculator
 *   capture_lead           — Log a contact for MaxLife follow-up
 *
 * Transports:
 *   stdio (default)   — Use with Claude Desktop / MCP clients that spawn a process
 *   --http            — SSE + HTTP transport for hosted/remote deployments
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { searchListings, searchListingsSchema, getListing, getListingSchema } from "./tools/listings.js";
import { runDealAnalysis, analyzeDealSchema } from "./tools/deal-analyzer.js";
import { analyzeDealFromPdf, analyzeDealFromPdfSchema } from "./tools/pdf-intake.js";
import { getCapRateBenchmarks, getCapRateBenchmarksSchema, calculateCapRate, calculateCapRateSchema } from "./tools/cap-rates.js";
import { captureLead, captureLeadSchema } from "./tools/leads.js";
// ── Tool registry ─────────────────────────────────────────────────────────────
const TOOLS = [
    {
        name: "search_listings",
        description: "Search MaxLife Realty's commercial real estate marketplace. Filter by property type, location, cap rate, price, square footage, or keyword. Returns active listings with financials and contact info.",
        inputSchema: zodToJsonSchema(searchListingsSchema),
    },
    {
        name: "get_listing",
        description: "Get full details on a specific MaxLife Realty listing by its URL slug or UUID. Returns all financials, physical details, tenancy info, contact, and photos.",
        inputSchema: zodToJsonSchema(getListingSchema),
    },
    {
        name: "analyze_deal",
        description: "Run a full commercial real estate investment analysis. Calculates IRR, DSCR, cash-on-cash return, equity multiple, deal grade (A+ to D), suggested offer price, and year-by-year cash flows. Supports NNN, Multifamily, and SFR.",
        inputSchema: zodToJsonSchema(analyzeDealSchema),
    },
    {
        name: "analyze_deal_from_pdf",
        description: "Upload a deal memo, offering memorandum (OM), rent roll, or property financials PDF and get a full investment analysis. Claude extracts the deal parameters (purchase price, NOI, rent, etc.) and runs the analysis. Provide financing override parameters to customize assumptions.",
        inputSchema: zodToJsonSchema(analyzeDealFromPdfSchema),
    },
    {
        name: "get_cap_rate_benchmarks",
        description: "Get Florida 2026 cap rate benchmarks by asset class (NNN tenants, multifamily, industrial, retail, office, medical). Optionally filter by asset class name or get a market overview for a specific Central Florida submarket.",
        inputSchema: zodToJsonSchema(getCapRateBenchmarksSchema),
    },
    {
        name: "calculate_cap_rate",
        description: "Simple cap rate calculator. Given any two of: NOI, price, cap rate — calculate the third. Modes: 'cap_rate' (NOI ÷ price), 'price' (NOI ÷ cap rate), 'noi' (price × cap rate).",
        inputSchema: zodToJsonSchema(calculateCapRateSchema),
    },
    {
        name: "capture_lead",
        description: "Log a contact's information for MaxLife Realty follow-up. Use this when someone expresses interest in a listing, wants a deal reviewed, or wants to connect with an advisor. Ryan Solberg will reach out directly.",
        inputSchema: zodToJsonSchema(captureLeadSchema),
    },
];
// ── Zod → JSON Schema converter (minimal, covers what we need) ─────────────────
function zodToJsonSchema(schema) {
    // Use zod's _def to produce a JSON Schema compatible object
    // We do this manually to avoid adding zod-to-json-schema as a dep
    return buildSchema(schema);
}
function buildSchema(schema) {
    const def = schema._def;
    const typeName = def.typeName;
    if (typeName === "ZodObject") {
        const shape = def.shape();
        const properties = {};
        const required = [];
        for (const [key, value] of Object.entries(shape)) {
            const fieldSchema = value;
            properties[key] = buildSchema(fieldSchema);
            const fieldDef = fieldSchema._def;
            const isOptional = fieldDef.typeName === "ZodOptional" ||
                fieldDef.typeName === "ZodDefault";
            if (!isOptional)
                required.push(key);
        }
        const result = { type: "object", properties };
        if (required.length)
            result.required = required;
        if (def.description)
            result.description = def.description;
        return result;
    }
    if (typeName === "ZodOptional") {
        const inner = buildSchema(def.innerType);
        if (def.description)
            inner.description = def.description;
        return inner;
    }
    if (typeName === "ZodDefault") {
        const inner = buildSchema(def.innerType);
        inner.default = def.defaultValue();
        if (def.description)
            inner.description = def.description;
        return inner;
    }
    if (typeName === "ZodString") {
        const s = { type: "string" };
        if (def.description)
            s.description = def.description;
        return s;
    }
    if (typeName === "ZodNumber") {
        const s = { type: "number" };
        if (def.description)
            s.description = def.description;
        for (const check of def.checks ?? []) {
            if (check.kind === "min")
                s.minimum = check.value;
            if (check.kind === "max")
                s.maximum = check.value;
            if (check.kind === "int")
                s.type = "integer";
        }
        return s;
    }
    if (typeName === "ZodEnum") {
        const s = { type: "string", enum: def.values };
        if (def.description)
            s.description = def.description;
        return s;
    }
    if (typeName === "ZodBoolean") {
        const s = { type: "boolean" };
        if (def.description)
            s.description = def.description;
        return s;
    }
    if (typeName === "ZodEffects") {
        return buildSchema(def.schema);
    }
    return { type: "string" };
}
// ── Tool dispatch ─────────────────────────────────────────────────────────────
async function callTool(name, args) {
    switch (name) {
        case "search_listings":
            return await searchListings(searchListingsSchema.parse(args));
        case "get_listing":
            return await getListing(getListingSchema.parse(args));
        case "analyze_deal":
            return runDealAnalysis(analyzeDealSchema.parse(args));
        case "analyze_deal_from_pdf":
            return await analyzeDealFromPdf(analyzeDealFromPdfSchema.parse(args));
        case "get_cap_rate_benchmarks":
            return getCapRateBenchmarks(getCapRateBenchmarksSchema.parse(args));
        case "calculate_cap_rate":
            return calculateCapRate(calculateCapRateSchema.parse(args));
        case "capture_lead":
            return await captureLead(captureLeadSchema.parse(args));
        default:
            throw new Error(`Unknown tool: ${name}`);
    }
}
// ── Server setup ──────────────────────────────────────────────────────────────
const server = new Server({
    name: "maxlife-realty-mcp",
    version: "1.0.0",
}, {
    capabilities: { tools: {} },
});
server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        const result = await callTool(name, (args ?? {}));
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2),
                },
            ],
        };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
            content: [{ type: "text", text: `Error: ${message}` }],
            isError: true,
        };
    }
});
// ── Launch ────────────────────────────────────────────────────────────────────
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    // Stdio transport — server is ready, listening on stdin/stdout
}
main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
