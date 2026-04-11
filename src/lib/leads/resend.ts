import { Resend } from "resend";

/**
 * Singleton Resend client. Reads RESEND_API_KEY at runtime so that
 * local dev without the key fails loudly instead of at import time.
 */
let _client: Resend | null = null;

export function getResend(): Resend {
  if (_client) return _client;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  _client = new Resend(key);
  return _client;
}

export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "MaxLife Realty <hello@maxlifedevelopment.com>";

export const REPLY_TO = process.env.RESEND_REPLY_TO || "Ryan@MaxLifeRealty.com";
