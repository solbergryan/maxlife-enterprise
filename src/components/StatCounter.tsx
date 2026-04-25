"use client";

import { useCallback, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  durationMs?: number;
}

const NUMERIC_RE = /^([^\d.-]*)([\d.,]+)(.*)$/;

function parseValue(value: string) {
  const m = value.match(NUMERIC_RE);
  if (!m) return null;
  return {
    prefix: m[1],
    numeric: parseFloat(m[2].replace(/,/g, "")),
    suffix: m[3],
  };
}

export default function StatCounter({ value, label, durationMs = 1400 }: StatCounterProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef(0);
  const animatedRef = useRef(false);

  const [display, setDisplay] = useState(() => {
    const p = parseValue(value);
    return p ? `${p.prefix}0${p.suffix}` : value;
  });

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      if (!node) return;
      const p = parseValue(value);
      if (!p) return;
      if (animatedRef.current) return;
      if (typeof IntersectionObserver === "undefined") {
        setDisplay(value);
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(value);
        return;
      }

      const isInteger = Number.isInteger(p.numeric);

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          if (animatedRef.current) return;
          animatedRef.current = true;
          obs.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = p.numeric * eased;
            const formatted = isInteger
              ? Math.round(current).toLocaleString()
              : current.toFixed(1);
            setDisplay(`${p.prefix}${formatted}${p.suffix}`);
            if (t < 1) rafRef.current = requestAnimationFrame(tick);
          };
          rafRef.current = requestAnimationFrame(tick);
        },
        { threshold: 0.4 }
      );
      obs.observe(node);
      observerRef.current = obs;
    },
    [value, durationMs]
  );

  return (
    <div ref={setRef}>
      <p className="text-gold text-3xl font-bold tabular-nums">{display}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
}
