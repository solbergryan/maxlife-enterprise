/**
 * Thin wrapper around embedding APIs.
 * Supports OpenAI (text-embedding-3-small, 1536 dims) and
 * Voyage AI (voyage-large-2, 1024 dims).
 *
 * Set ONE of these env vars:
 *   OPENAI_API_KEY   → uses OpenAI text-embedding-3-small (default, 1536 dims)
 *   VOYAGE_API_KEY   → uses Voyage voyage-large-2 (1024 dims — update migration if switching)
 */

export type EmbeddingVector = number[];

/** Build a single text string from a listing's key fields for embedding. */
export function listingToEmbeddingText(listing: {
  title: string;
  property_type: string;
  transaction_type: string;
  city: string;
  state: string | null;
  tenant: string | null;
  lease_type: string | null;
  description: string | null;
  price: number | null;
  cap_rate: number | null;
  building_sqft: number | null;
}): string {
  const parts: string[] = [
    listing.title,
    `${listing.property_type} ${listing.transaction_type}`,
    `${listing.city}${listing.state ? `, ${listing.state}` : ""}`,
  ];
  if (listing.tenant) parts.push(`Tenant: ${listing.tenant}`);
  if (listing.lease_type) parts.push(`Lease: ${listing.lease_type}`);
  if (listing.price) parts.push(`Price: $${listing.price.toLocaleString()}`);
  if (listing.cap_rate) parts.push(`Cap rate: ${listing.cap_rate}%`);
  if (listing.building_sqft) parts.push(`${listing.building_sqft.toLocaleString()} sqft`);
  if (listing.description) parts.push(listing.description.slice(0, 500));
  return parts.join(". ");
}

/** Generate an embedding vector for a single text string. */
export async function embed(text: string): Promise<EmbeddingVector | null> {
  if (process.env.VOYAGE_API_KEY) {
    return embedVoyage(text);
  }
  if (process.env.OPENAI_API_KEY) {
    return embedOpenAI(text);
  }
  // No embedding provider configured — semantic search unavailable.
  return null;
}

async function embedOpenAI(text: string): Promise<EmbeddingVector | null> {
  try {
    const res = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ model: "text-embedding-3-small", input: text }),
    });
    if (!res.ok) {
      console.error("[embeddings] OpenAI error:", res.status, await res.text());
      return null;
    }
    const data = (await res.json()) as { data: [{ embedding: number[] }] };
    return data.data[0].embedding;
  } catch (e) {
    console.error("[embeddings] OpenAI fetch threw:", e);
    return null;
  }
}

async function embedVoyage(text: string): Promise<EmbeddingVector | null> {
  try {
    const res = await fetch("https://api.voyageai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VOYAGE_API_KEY}`,
      },
      body: JSON.stringify({ model: "voyage-large-2", input: [text] }),
    });
    if (!res.ok) {
      console.error("[embeddings] Voyage error:", res.status, await res.text());
      return null;
    }
    const data = (await res.json()) as { data: [{ embedding: number[] }] };
    return data.data[0].embedding;
  } catch (e) {
    console.error("[embeddings] Voyage fetch threw:", e);
    return null;
  }
}
