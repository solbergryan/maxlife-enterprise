# MaxLife Realty MCP Server

A Model Context Protocol server that exposes MaxLife Realty's deal analyzer, marketplace listings, Florida cap rate benchmarks, and lead capture as AI-callable tools.

**Compatible with:** Claude Desktop, Cursor, Windsurf, and any MCP client.

---

## Tools

| Tool | Description |
|------|-------------|
| `analyze_deal` | Full CRE investment analysis — IRR, DSCR, cash-on-cash, equity multiple, deal grade, suggested offer price |
| `analyze_deal_from_pdf` | Upload an OM or deal memo PDF; Claude extracts the financials and runs the full analysis |
| `search_listings` | Query the MaxLife marketplace by property type, location, cap rate, price, or keyword |
| `get_listing` | Full detail on a single listing (financials, tenancy, contact, photos) |
| `get_cap_rate_benchmarks` | Florida 2026 cap rate ranges by asset class + Central FL market overviews |
| `calculate_cap_rate` | Cap rate ↔ NOI ↔ price calculator |
| `capture_lead` | Log a contact for MaxLife advisor follow-up |

---

## Setup

### 1. Install dependencies

```bash
cd mcp-server
npm install
```

### 2. Set environment variables

```bash
cp .env.example .env
# Edit .env with your Supabase and Anthropic credentials
```

**Required for listings + lead capture:**
- `SUPABASE_URL` — from your Supabase project settings
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (has read/write access)

**Required for PDF analysis:**
- `ANTHROPIC_API_KEY` — from [console.anthropic.com](https://console.anthropic.com)

`analyze_deal`, `get_cap_rate_benchmarks`, and `calculate_cap_rate` work without any env vars.

### 3. Build

```bash
npm run build
```

---

## Connecting to Claude Desktop

Add this to your Claude Desktop config file:

**Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "maxlife-realty": {
      "command": "node",
      "args": ["C:/GH_Len_P620/maxlife-enterprise/mcp-server/dist/index.js"],
      "env": {
        "SUPABASE_URL": "https://your-project.supabase.co",
        "SUPABASE_SERVICE_ROLE_KEY": "your-service-role-key",
        "ANTHROPIC_API_KEY": "sk-ant-..."
      }
    }
  }
}
```

Restart Claude Desktop. You'll see "maxlife-realty" appear in the tools panel.

---

## Connecting to Cursor

In Cursor settings > MCP Servers > Add:

```json
{
  "name": "maxlife-realty",
  "command": "node",
  "args": ["C:/GH_Len_P620/maxlife-enterprise/mcp-server/dist/index.js"],
  "env": {
    "SUPABASE_URL": "...",
    "SUPABASE_SERVICE_ROLE_KEY": "...",
    "ANTHROPIC_API_KEY": "..."
  }
}
```

---

## Development (no build step)

```bash
npm run dev
```

Uses `tsx` to run TypeScript directly with hot reload.

---

## Example prompts once connected

**Deal analysis:**
> "Analyze this deal: $1.2M Dollar General NNN, $72,000 annual rent, 25% down, 6.75% rate, 10-year hold."

**PDF intake:**
> "Here's the OM for this property [attach PDF]. Analyze it assuming 30% down and a 7% interest rate."

**Listings:**
> "Show me NNN listings in Orange County under $2M with cap rates above 5.5%."

**Cap rates:**
> "What are current cap rates for Dollar General and AutoZone in Florida?"

**Lead capture:**
> "I'd like to connect with MaxLife about this deal. My name is John Smith, email john@example.com."

---

## Architecture

```
mcp-server/
  src/
    index.ts              ← MCP server entry (stdio transport)
    lib/
      calculations.ts     ← Pure deal analyzer math (no React)
      cap-rate-data.ts    ← FL 2026 cap rate reference data
      supabase.ts         ← Supabase client init
    tools/
      listings.ts         ← search_listings + get_listing
      deal-analyzer.ts    ← analyze_deal
      pdf-intake.ts       ← analyze_deal_from_pdf (Claude Haiku extraction)
      cap-rates.ts        ← get_cap_rate_benchmarks + calculate_cap_rate
      leads.ts            ← capture_lead
```
