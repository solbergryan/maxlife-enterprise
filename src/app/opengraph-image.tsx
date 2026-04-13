import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MaxLife Realty — Orlando Commercial Real Estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a1a3a 0%, #0d1117 50%, #1a1a2e 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c8a84e, transparent)",
          }}
        />

        {/* MLR Logo Mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid rgba(255,255,255,0.8)",
            padding: "16px 32px",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: 8,
            }}
          >
            MLR
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#ffffff",
              marginLeft: 4,
              marginTop: -30,
            }}
          >
            TM
          </span>
        </div>

        {/* Company Name */}
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#c8a84e",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          MAX LIFE REALTY
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Orlando Commercial Real Estate Broker
        </span>

        {/* Bottom bar with services */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          {["Sales & Leasing", "NNN Investments", "Land Development", "Free CRE Academy"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Gold accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c8a84e, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
