import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "./CopyButton";

export const metadata: Metadata = {
  title: "Email Signature — Internal Use",
  description: "Ryan's email signature — copy from this page to install in Gmail.",
  robots: { index: false, follow: false },
};

/**
 * Internal page to install Ryan's branded email signature into Gmail.
 *
 * Why this page exists: Gmail's signature editor strips <style> tags,
 * gradients, and most modern CSS. The reliable way to install a styled
 * signature is to render it in a browser, then COPY THE RENDERED OUTPUT
 * (not the raw HTML) into Gmail. Gmail preserves the formatting because
 * it ingests the browser's rich-text representation.
 */
export default function EmailSignaturePage() {
  return (
    <main className="min-h-screen bg-dark py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
          Internal · For Ryan
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Install your email signature
        </h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Pick a version below, click <strong className="text-gold">Select &amp; Copy</strong>,
          then paste into Gmail Settings → General → Signature. The styling
          will survive because you&rsquo;re copying the rendered preview, not
          raw HTML.
        </p>

        {/* Version 1 — Compact */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              Version 1 — Compact (recommended)
            </h2>
            <CopyButton targetId="sig-v1" />
          </div>
          <div className="bg-white border border-white/10 rounded-lg p-6">
            <div id="sig-v1">
              <SignatureV1 />
            </div>
          </div>
        </section>

        {/* Version 2 — Rich with CTA card */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              Version 2 — With CTA card
            </h2>
            <CopyButton targetId="sig-v2" />
          </div>
          <div className="bg-white border border-white/10 rounded-lg p-6">
            <div id="sig-v2">
              <SignatureV2 />
            </div>
          </div>
        </section>

        {/* Install instructions */}
        <section className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Install in Gmail</h2>
          <ol className="space-y-3 text-gray-300 text-sm leading-relaxed list-decimal pl-5 marker:text-gold">
            <li>Click <strong>Select &amp; Copy</strong> above the signature you want.</li>
            <li>Open Gmail → <strong>gear icon</strong> (top right) → <strong>See all settings</strong>.</li>
            <li>Scroll to <strong>Signature</strong> → click <strong>+ Create new</strong> (or edit existing).</li>
            <li>Click into the signature editor box → paste (<kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Ctrl+V</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Cmd+V</kbd>).</li>
            <li>Under <strong>Signature defaults</strong>, set this signature for new emails AND replies.</li>
            <li>Check <strong>&ldquo;Insert signature before quoted text&rdquo;</strong> ✅</li>
            <li>Scroll to bottom → <strong>Save changes</strong>.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-5 leading-relaxed">
            <strong className="text-gray-400">Apple Mail:</strong> Mail → Settings → Signatures → uncheck &ldquo;Always match my default message font&rdquo; before pasting.
            <br />
            <strong className="text-gray-400">Outlook:</strong> File → Options → Mail → Signatures → New, then paste.
          </p>
        </section>

        <p className="text-xs text-gray-500 mt-8">
          This page is no-indexed and only meant for you. Edit at{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded">/src/app/email-signature/page.tsx</code>.
        </p>

        <p className="mt-6">
          <Link
            href="/pdf-analyzer"
            className="text-gold hover:underline text-sm"
          >
            ← Back to the PDF Analyzer
          </Link>
        </p>
      </div>
    </main>
  );
}

// ── Signature templates ──────────────────────────────────────────────────────

function SignatureV1() {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse", fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: "14px", color: "#1a1a1a", lineHeight: "1.5" }}>
      <tbody>
        <tr>
          <td style={{ paddingBottom: "2px" }}>
            <span style={{ fontSize: "15px", fontWeight: "bold", color: "#002E62" }}>Ryan Solberg</span>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "2px", color: "#555", fontSize: "13px" }}>
            Broker · Florida Licensed MLO
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "8px", color: "#888", fontSize: "12px" }}>
            MaxLife Realty · BK3354351 · NMLS #1784218
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "4px", fontSize: "13px" }}>
            <span style={{ color: "#888", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", marginRight: "6px" }}>O</span>
            <a href="tel:+13213733536" style={{ color: "#002E62", textDecoration: "none" }}>321-373-3536</a>
            <span style={{ color: "#999", margin: "0 8px" }}>·</span>
            <span style={{ color: "#888", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", marginRight: "6px" }}>M</span>
            <a href="tel:+14077483436" style={{ color: "#002E62", textDecoration: "none" }}>407-748-3436</a>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "10px", fontSize: "13px" }}>
            <a href="mailto:Ryan@MaxLifeRealty.com" style={{ color: "#002E62", textDecoration: "none" }}>Ryan@MaxLifeRealty.com</a>
          </td>
        </tr>
        <tr>
          <td style={{ borderTop: "2px solid #C8A856", paddingTop: "10px", fontSize: "12px", color: "#555" }}>
            <span style={{ color: "#A88C3F", fontWeight: "bold" }}>NEW</span>
            <span style={{ margin: "0 6px", color: "#ccc" }}>·</span>
            Free CRE Deal Analyzer (AI) — drop any OM PDF, get IRR / DSCR / grade in 10 seconds:
            <br />
            <a href="https://maxlifedevelopment.com/pdf-analyzer?utm_source=email&utm_medium=signature&utm_campaign=v1" style={{ color: "#A88C3F", fontWeight: "bold", textDecoration: "none" }}>
              maxlifedevelopment.com/pdf-analyzer →
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function SignatureV2() {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse", fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif", fontSize: "14px", color: "#1a1a1a", lineHeight: "1.5" }}>
      <tbody>
        <tr>
          <td style={{ paddingBottom: "2px" }}>
            <span style={{ fontSize: "15px", fontWeight: "bold", color: "#002E62" }}>Ryan Solberg</span>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "2px", color: "#555", fontSize: "13px" }}>
            Broker · Florida Licensed MLO
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "8px", color: "#888", fontSize: "12px" }}>
            MaxLife Realty · BK3354351 · NMLS #1784218
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "4px", fontSize: "13px" }}>
            <span style={{ color: "#888", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", marginRight: "6px" }}>O</span>
            <a href="tel:+13213733536" style={{ color: "#002E62", textDecoration: "none" }}>321-373-3536</a>
            <span style={{ color: "#999", margin: "0 8px" }}>·</span>
            <span style={{ color: "#888", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px", marginRight: "6px" }}>M</span>
            <a href="tel:+14077483436" style={{ color: "#002E62", textDecoration: "none" }}>407-748-3436</a>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: "12px", fontSize: "13px" }}>
            <a href="mailto:Ryan@MaxLifeRealty.com" style={{ color: "#002E62", textDecoration: "none" }}>Ryan@MaxLifeRealty.com</a>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://maxlifedevelopment.com/pdf-analyzer?utm_source=email&utm_medium=signature&utm_campaign=v2"
              style={{ textDecoration: "none", color: "#002E62" }}
            >
              <table cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse", backgroundColor: "#C8A856" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", color: "#002E62", display: "block", marginBottom: "4px" }}>
                        ✦ NEW · Free CRE Deal Analyzer (AI)
                      </span>
                      <span style={{ fontSize: "13px", color: "#1a1a1a" }}>
                        Drop any OM PDF — get IRR / DSCR / deal grade in 10 seconds →
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

