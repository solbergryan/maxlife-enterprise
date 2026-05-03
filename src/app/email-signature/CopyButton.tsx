"use client";

import { useState } from "react";

export default function CopyButton({ targetId }: { targetId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    // Select the rendered content (not the HTML source) so Gmail's
    // rich-text editor preserves the formatting on paste.
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    if (!sel) return;
    sel.removeAllRanges();
    sel.addRange(range);

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error("Copy failed", e);
    }
    sel.removeAllRanges();
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`font-semibold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
        copied
          ? "bg-green-500 text-white"
          : "bg-gold hover:bg-gold-dark text-dark"
      }`}
    >
      {copied ? "✓ Copied — now paste into Gmail" : "Select & Copy"}
    </button>
  );
}
