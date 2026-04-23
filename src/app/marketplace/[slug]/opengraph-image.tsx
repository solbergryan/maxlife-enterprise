import { ImageResponse } from "next/og";
import { getListingBySlug, formatPrice } from "@/lib/listings";
import { PROPERTY_TYPE_LABELS } from "@/types/listing";

export const runtime = "nodejs";
export const alt = "MaxLife Realty — Property listing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OgImage({ params }: Props) {
  const { slug } = await params;
  const l = await getListingBySlug(slug);

  // Graceful fallback for unknown/withdrawn listings
  if (!l) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
            color: "#EFBF04",
            fontSize: 48,
            fontFamily: "Arial, sans-serif",
            fontWeight: 900,
          }}
        >
          MaxLife Realty
        </div>
      ),
      { ...size },
    );
  }

  const locale = l.city + (l.state ? `, ${l.state}` : "");
  const hero = l.photo_urls[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "#0a0a0a",
        }}
      >
        {hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.55)",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, #0a1a3a 0%, #0d1117 50%, #1a1a2e 100%)",
              display: "flex",
            }}
          />
        )}

        {/* Dark gradient over photo so text is readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
            display: "flex",
          }}
        />

        {/* Gold accent top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#EFBF04",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
            width: "100%",
          }}
        >
          {/* Top row: brand + property type */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              <span style={{ color: "#EFBF04" }}>MaxLife</span>
              <span style={{ color: "#ffffff", fontWeight: 400 }}>Realty</span>
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                border: "2px solid rgba(239,191,4,0.6)",
                borderRadius: 6,
                color: "#EFBF04",
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {PROPERTY_TYPE_LABELS[l.property_type]}
            </div>
          </div>

          {/* Bottom block: title, location, price */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 56,
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: 20,
                maxWidth: 1050,
              }}
            >
              {l.title.length > 70 ? l.title.slice(0, 67) + "…" : l.title}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {locale}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#EFBF04",
                  letterSpacing: -1,
                }}
              >
                {formatPrice(l.price)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
