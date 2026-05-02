"use client";

import { useEffect, useRef } from "react";
import { soldProperties } from "@/data/sold-properties";
import type { SoldProperty } from "@/data/sold-properties";
import "leaflet/dist/leaflet.css";

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function buildPopup(p: SoldProperty): string {
  return `
    <div style="font-family:system-ui,sans-serif;min-width:200px;max-width:240px">
      <div style="font-weight:700;color:#C9A84C;font-size:13px;margin-bottom:4px">${p.type}</div>
      <div style="color:#111;font-size:12px;margin-bottom:6px;line-height:1.4">${p.address}<br/>${p.city}, ${p.county} Co.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px">
        <span style="background:#f5f5f5;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:600">
          ${formatPrice(p.salePrice)}
        </span>
        <span style="background:#f5f5f5;border-radius:4px;padding:2px 6px;font-size:11px">
          Closed ${formatDate(p.closeDate)}
        </span>
        ${p.sqft ? `<span style="background:#f5f5f5;border-radius:4px;padding:2px 6px;font-size:11px">${p.sqft.toLocaleString()} SF</span>` : ""}
        ${p.capRate ? `<span style="background:#fef3c7;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:600">${p.capRate}% cap</span>` : ""}
      </div>
      ${p.notes ? `<div style="color:#555;font-size:11px;font-style:italic;margin-top:4px">${p.notes}</div>` : ""}
    </div>
  `;
}

export default function SoldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletMap = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    // Dynamically import Leaflet so it only runs client-side
    import("leaflet").then((L) => {
      // Fix default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [28.3, -80.9],
        zoom: 9,
        scrollWheelZoom: false,
      });

      leafletMap.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom gold circle marker
      const goldIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:20px;height:20px;border-radius:50%;
          background:#C9A84C;border:2.5px solid #fff;
          box-shadow:0 2px 6px rgba(0,0,0,0.4);
          cursor:pointer;
        "></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -12],
      });

      soldProperties.forEach((prop) => {
        L.marker([prop.lat, prop.lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(buildPopup(prop), { maxWidth: 260 });
      });
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl overflow-hidden border border-white/10"
      style={{ height: "520px" }}
      aria-label="Map of sold properties in Central Florida and Space Coast"
    />
  );
}
