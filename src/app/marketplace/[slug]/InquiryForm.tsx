"use client";

import { useState } from "react";

interface Props {
  listingId: string;
  listingTitle: string;
  contactName: string;
  contactPhone: string | null;
}

export function InquiryForm({
  listingId,
  listingTitle,
  contactName,
  contactPhone,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hi ${contactName.split(" ")[0] || contactName},\n\nI'm interested in ${listingTitle}. Could we set up a time to discuss?\n\n`
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/marketplace/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId, name, email, phone, message }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(body.error || "Something went wrong. Try again in a moment.");
        return;
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Network error.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-gold/5 rounded-lg p-5 text-center">
        <div className="w-10 h-10 mx-auto mb-3 bg-gold/20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold mb-1">Message sent</p>
        <p className="text-gray-400 text-sm">
          {contactName} will reply directly. MaxLife Realty is CC&apos;d for
          follow-up support.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-dark border border-dark-border rounded-md px-3 py-2 text-white placeholder-gray-500 focus:border-gold focus:outline-none text-sm";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        required
        placeholder="Your full name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={input}
      />
      <input
        required
        type="email"
        placeholder="Your email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={input}
      />
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={input}
      />
      <textarea
        required
        rows={4}
        placeholder="Message *"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={input}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-2.5 rounded-md transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs">{errorMsg}</p>
      )}
      {contactPhone && (
        <p className="text-gray-500 text-xs text-center pt-2 border-t border-dark-border">
          Or call{" "}
          <a
            href={`tel:${contactPhone.replace(/[^0-9+]/g, "")}`}
            className="text-gold hover:underline"
          >
            {contactPhone}
          </a>
        </p>
      )}
      <p className="text-gray-600 text-xs text-center">
        {contactName} and MaxLife Realty receive this message.
      </p>
    </form>
  );
}
