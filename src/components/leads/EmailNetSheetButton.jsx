"use client";

import { useState } from "react";

/**
 * "Email me this report" button for the net sheet.
 *
 * Props:
 *   side         — "seller" | "buyer"
 *   salesPrice   — number (drives the email subject line)
 *   buildImage   — () => string (data URL). Called lazily only when the
 *                  user clicks submit, so we don't re-render the canvas
 *                  on every keystroke.
 *   metadata     — optional object with extra inputs to log to Supabase.
 *   disabled     — boolean, disables the button when calc isn't ready.
 */
export default function EmailNetSheetButton({
  side,
  salesPrice,
  buildImage,
  metadata,
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);

    try {
      const imageBase64 = buildImage();
      if (!imageBase64) throw new Error("Could not generate report image");

      const res = await fetch("/api/leads/net-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          side,
          salesPrice,
          imageBase64,
          metadata: metadata || {},
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={disabled}
        className="flex-1 bg-white border-2 border-green-600 text-green-700 font-semibold py-3 px-4 rounded-lg shadow hover:bg-green-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ✉ Email Me This Report
      </button>
    );
  }

  if (status === "success") {
    return (
      <div className="flex-1 rounded-lg border-2 border-green-300 bg-green-50 p-4 text-center">
        <div className="text-2xl mb-1">✓</div>
        <p className="font-semibold text-green-900">Sent! Check your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-2">
      <input
        type="email"
        required
        autoFocus
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none"
        disabled={status === "sending"}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send to my email"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setStatus("idle");
            setErrorMsg(null);
          }}
          className="px-3 py-3 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
    </form>
  );
}
