/**
 * Vercel Blob client-upload negotiator.
 *
 * The browser calls @vercel/blob/client `upload()` with this route as the
 * `handleUploadUrl`. We mint a short-lived token, the browser uploads the
 * PDF directly to Blob storage (bypassing Vercel's 4.5MB serverless body
 * limit), then POSTs the resulting blob URL to /api/analyze-pdf.
 */

import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Only allow PDF uploads, max 25 MB
        if (!pathname.toLowerCase().endsWith(".pdf")) {
          throw new Error("Only PDF files allowed");
        }
        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 25 * 1024 * 1024,
          // Token is good for 1 hour, then the blob can be deleted
          tokenPayload: JSON.stringify({ uploadedAt: Date.now() }),
        };
      },
      onUploadCompleted: async () => {
        // No-op — analysis is triggered separately by the client
      },
    });

    return Response.json(jsonResponse);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 400 });
  }
}
