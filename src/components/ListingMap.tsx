"use client";

import { useEffect, useRef } from "react";
import { Listing, formatPrice, getListingImage } from "@/data/listings";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// Color map for property types
const TYPE_COLORS: Record<string, string> = {
  Retail: "#f59e0b",
  Office: "#3b82f6",
  Industrial: "#8b5cf6",
  Multifamily: "#10b981",
  Land: "#78716c",
  "Mixed Use": "#ec4899",
  Hospitality: "#f97316",
  Other: "#6b7280",
};

function getTypeColor(type: string): string {
  return TYPE_COLORS[type] || "#6b7280";
}

function buildPopupHtml(listing: Listing): string {
  const img = getListingImage(listing.crexiUrl);
  const imgHtml = img
    ? `<img src="${img}" alt="" style="width:100%;height:120px;object-fit:cover;border-radius:6px 6px 0 0;" loading="lazy"/>`
    : "";

  return `
    <div style="width:260px;font-family:system-ui,sans-serif;background:#1a1a1a;border-radius:6px;overflow:hidden;">
      ${imgHtml}
      <div style="padding:10px;">
        <div style="font-size:13px;font-weight:600;color:#fff;margin-bottom:4px;line-height:1.3;">${listing.name}</div>
        <div style="font-size:11px;color:#9ca3af;margin-bottom:8px;">${listing.city}, ${listing.state} ${listing.zip}</div>
        <div style="display:flex;gap:12px;margin-bottom:8px;">
          ${listing.price ? `<div><div style="font-size:10px;color:#9ca3af;text-transform:uppercase;">Price</div><div style="font-size:13px;color:#fff;font-weight:600;">${formatPrice(listing.price)}</div></div>` : ""}
          ${listing.capRate ? `<div><div style="font-size:10px;color:#9ca3af;text-transform:uppercase;">Cap Rate</div><div style="font-size:13px;color:#EFBF04;font-weight:600;">${listing.capRate}%</div></div>` : ""}
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <span style="font-size:10px;padding:2px 8px;border-radius:12px;background:${getTypeColor(listing.type)}22;color:${getTypeColor(listing.type)};border:1px solid ${getTypeColor(listing.type)}44;">${listing.type}</span>
          <span style="font-size:10px;padding:2px 8px;border-radius:12px;background:#22c55e22;color:#4ade80;border:1px solid #22c55e44;">${listing.status}</span>
        </div>
        <a href="${listing.crexiUrl}" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:8px;text-align:center;padding:6px;background:#EFBF04;color:#0a0a0a;border-radius:4px;font-size:12px;font-weight:600;text-decoration:none;">View on Crexi</a>
      </div>
    </div>
  `;
}

interface ListingMapProps {
  listings: Listing[];
}

export default function ListingMap({ listings }: ListingMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  const geoListings = listings.filter(
    (l) => l.lat != null && l.lng != null
  );

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Clean up previous instance
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    let cancelled = false;

    (async () => {
      // Dynamic import of Leaflet (avoids window reference at module level)
      const L = (await import("leaflet")).default;
      await import("leaflet.markercluster");

      if (cancelled || !mapContainerRef.current) return;

      const map = L.map(mapContainerRef.current, {
        center: [28.5, -81.4],
        zoom: 9,
        zoomControl: true,
      });

      // Satellite imagery from Esri
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            '&copy; Esri, Maxar, Earthstar Geographics',
          maxZoom: 19,
        }
      ).addTo(map);

      // Road/label overlay on top of satellite
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 19, pane: "overlayPane" }
      ).addTo(map);
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 19, pane: "overlayPane" }
      ).addTo(map);

      // @ts-expect-error - markerClusterGroup is added by the plugin
      const cluster = L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 50,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        iconCreateFunction: (c: { getChildCount: () => number }) => {
          const count = c.getChildCount();
          const size = count < 10 ? 36 : count < 100 ? 44 : 52;
          return L.divIcon({
            html: `<div style="
              background:#EFBF04;color:#0a0a0a;width:${size}px;height:${size}px;
              border-radius:50%;display:flex;align-items:center;justify-content:center;
              font-weight:700;font-size:${count < 100 ? 14 : 12}px;
              box-shadow:0 2px 8px rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.3);
            ">${count}</div>`,
            className: "",
            iconSize: L.point(size, size),
          });
        },
      });

      geoListings.forEach((listing) => {
        const color = getTypeColor(listing.type);
        const icon = L.divIcon({
          html: `<div style="
            background:${color};width:14px;height:14px;border-radius:50%;
            border:2px solid rgba(255,255,255,0.8);box-shadow:0 1px 4px rgba(0,0,0,0.5);
          "></div>`,
          className: "",
          iconSize: L.point(14, 14),
          iconAnchor: L.point(7, 7),
        });

        const marker = L.marker([listing.lat!, listing.lng!], { icon });
        marker.bindPopup(buildPopupHtml(listing), {
          maxWidth: 280,
          minWidth: 260,
          className: "dark-popup",
        });
        cluster.addLayer(marker);
      });

      map.addLayer(cluster);

      if (geoListings.length > 0) {
        const bounds = L.latLngBounds(
          geoListings.map((l) => [l.lat!, l.lng!] as [number, number])
        );
        map.fitBounds(bounds, { padding: [40, 40] });
      }

      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  return (
    <div className="relative">
      {/* Legend */}
      <div className="absolute top-3 right-3 z-[1000] bg-dark-card/95 backdrop-blur-md border border-dark-border rounded-lg p-3 shadow-lg">
        <p className="text-xs text-gray-400 font-medium mb-2">Property Types</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: color }}
              />
              <span className="text-[11px] text-gray-400">{type}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-600 mt-2 border-t border-dark-border pt-2">
          {geoListings.length} of {listings.length} mapped
        </p>
      </div>

      {/* Map */}
      <div
        ref={mapContainerRef}
        className="w-full rounded-xl border border-dark-border overflow-hidden"
        style={{ height: "650px" }}
      />
    </div>
  );
}
