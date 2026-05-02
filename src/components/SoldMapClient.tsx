"use client";

import dynamic from "next/dynamic";

// Leaflet requires the browser — load with no SSR inside a Client Component
const SoldMap = dynamic(() => import("@/components/SoldMap"), { ssr: false });

export default function SoldMapClient() {
  return <SoldMap />;
}
