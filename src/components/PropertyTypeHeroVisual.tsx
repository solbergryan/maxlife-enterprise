/**
 * Branded SVG hero visual used as the default hero image for every
 * /properties/* page. Renders a category-specific architectural silhouette
 * against a gold/dark gradient background with a subtle grid overlay.
 *
 * Each top-level category has its own silhouette. Subtypes inherit the
 * silhouette of their parent category so they match the breadcrumb context.
 *
 * All artwork is inline SVG — no external image files required.
 */

interface PropertyTypeHeroVisualProps {
  /** Category slug used to pick a silhouette (e.g. "retail", "industrial"). */
  categorySlug: string;
  /** Display name shown as the type tag at the bottom of the visual. */
  displayName: string;
}

export default function PropertyTypeHeroVisual({
  categorySlug,
  displayName,
}: PropertyTypeHeroVisualProps) {
  const silhouette = getSilhouette(categorySlug);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-dark-border shadow-2xl aspect-[3/2] lg:aspect-[4/3] bg-dark-card">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a1929]" />

      {/* Gold radial accent */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(239, 191, 4, 0.18) 0%, transparent 55%)",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#EFBF04"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main category silhouette */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 sm:pb-24 px-8">
        <div className="w-full max-w-xl">{silhouette}</div>
      </div>

      {/* Sun/moon element — warm gold glow in upper right */}
      <div className="absolute top-8 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 blur-xl" />
      <div className="absolute top-10 right-12 w-10 h-10 rounded-full bg-gold/30" />

      {/* Horizon line */}
      <div className="absolute left-0 right-0 bottom-20 sm:bottom-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Top-left corner mark — MaxLife brand gold accent */}
      <div className="absolute top-4 left-4">
        <div className="inline-flex items-center gap-2 bg-dark/70 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1.5">
          <span className="w-2 h-2 bg-gold rounded-full" />
          <span className="text-[10px] font-medium text-white uppercase tracking-widest">
            Florida CRE
          </span>
        </div>
      </div>

      {/* Bottom type tag */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="inline-flex items-center gap-2 bg-dark/80 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1.5">
          <span className="w-2 h-2 bg-gold rounded-full" />
          <span className="text-xs font-medium text-white">{displayName}</span>
        </div>
      </div>

      {/* Soft vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Silhouette SVGs — one per top-level category
// ═══════════════════════════════════════════════════════════════════

function getSilhouette(categorySlug: string): React.ReactNode {
  switch (categorySlug) {
    case "retail":
      return <RetailSilhouette />;
    case "office":
      return <OfficeSilhouette />;
    case "industrial":
      return <IndustrialSilhouette />;
    case "multifamily":
      return <MultifamilySilhouette />;
    case "hospitality":
      return <HospitalitySilhouette />;
    case "land":
      return <LandSilhouette />;
    case "mixed-use":
      return <MixedUseSilhouette />;
    case "special-purpose":
      return <SpecialPurposeSilhouette />;
    case "self-storage":
      return <SelfStorageSilhouette />;
    case "mobile-home-park":
      return <MobileHomeParkSilhouette />;
    case "senior-living":
      return <SeniorLivingSilhouette />;
    case "business-for-sale":
      return <BusinessSilhouette />;
    case "note-loan":
      return <NoteLoanSilhouette />;
    default:
      return <GenericSilhouette />;
  }
}

// Shared SVG helpers
const strokeColor = "#EFBF04";
const fillColor = "rgba(239, 191, 4, 0.12)";
const paleStroke = "rgba(239, 191, 4, 0.4)";

// ═══ Retail — shopping-center with pad site ═══
function RetailSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      {/* Palm tree left */}
      <PalmTree x={30} y={30} scale={0.9} />
      {/* Main shopping center building */}
      <rect x={100} y={60} width={320} height={100} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Canopy */}
      <polygon points="100,60 420,60 410,45 110,45" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Storefronts */}
      {[120, 180, 240, 300, 360].map((x) => (
        <rect key={x} x={x} y={90} width={40} height={70} fill="none" stroke={paleStroke} strokeWidth={1.5} />
      ))}
      {/* Signage tower */}
      <rect x={100} y={20} width={20} height={40} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      <rect x={103} y={25} width={14} height={8} fill={strokeColor} opacity={0.6} />
      {/* Pad site */}
      <rect x={450} y={110} width={100} height={50} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <polygon points="450,110 550,110 545,95 455,95" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Palm tree right */}
      <PalmTree x={540} y={30} scale={0.9} />
    </svg>
  );
}

// ═══ Office — Class A tower with shorter podium ═══
function OfficeSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={40} scale={0.8} />
      {/* Main tower */}
      <rect x={180} y={20} width={120} height={140} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Window grid for tower */}
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={188 + col * 22}
            y={30 + row * 13}
            width={16}
            height={9}
            fill={strokeColor}
            opacity={0.25}
          />
        )),
      )}
      {/* Secondary building */}
      <rect x={320} y={70} width={110} height={90} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`s-${row}-${col}`}
            x={328 + col * 20}
            y={78 + row * 14}
            width={14}
            height={10}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
      {/* Tertiary */}
      <rect x={450} y={100} width={90} height={60} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      <PalmTree x={560} y={50} scale={0.75} />
    </svg>
  );
}

// ═══ Industrial — bulk warehouse with dock doors ═══
function IndustrialSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      {/* Warehouse main box */}
      <rect x={60} y={60} width={480} height={100} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Roof line */}
      <polygon points="60,60 540,60 530,45 70,45" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* HVAC / rooftop units */}
      {[120, 220, 320, 420].map((x) => (
        <rect key={x} x={x} y={38} width={30} height={8} fill={strokeColor} opacity={0.5} />
      ))}
      {/* Dock doors */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={80 + i * 38}
          y={110}
          width={28}
          height={50}
          fill="none"
          stroke={paleStroke}
          strokeWidth={1.5}
        />
      ))}
      {/* Horizontal band */}
      <line x1={60} y1={110} x2={540} y2={110} stroke={strokeColor} strokeWidth={1.5} opacity={0.6} />
      {/* Semi truck silhouette */}
      <g transform="translate(20,130)">
        <rect x={0} y={0} width={35} height={20} fill={fillColor} stroke={strokeColor} strokeWidth={1.2} />
        <rect x={36} y={6} width={12} height={14} fill={fillColor} stroke={strokeColor} strokeWidth={1.2} />
        <circle cx={10} cy={22} r={3} fill={strokeColor} opacity={0.6} />
        <circle cx={28} cy={22} r={3} fill={strokeColor} opacity={0.6} />
        <circle cx={42} cy={22} r={3} fill={strokeColor} opacity={0.6} />
      </g>
    </svg>
  );
}

// ═══ Multifamily — garden + mid-rise apartment ═══
function MultifamilySilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={50} scale={0.85} />
      {/* Mid-rise apartment */}
      <rect x={110} y={20} width={200} height={140} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Balcony grid */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <g key={`${row}-${col}`}>
            <rect
              x={120 + col * 36}
              y={30 + row * 21}
              width={28}
              height={14}
              fill="none"
              stroke={paleStroke}
              strokeWidth={1}
            />
            <line
              x1={120 + col * 36}
              y1={44 + row * 21}
              x2={148 + col * 36}
              y2={44 + row * 21}
              stroke={strokeColor}
              strokeWidth={1}
              opacity={0.5}
            />
          </g>
        )),
      )}
      {/* Garden-style building */}
      <rect x={340} y={80} width={210} height={80} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <polygon points="340,80 550,80 540,65 350,65" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Garden-style windows */}
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <rect
            key={`g-${row}-${col}`}
            x={352 + col * 24}
            y={90 + row * 22}
            width={16}
            height={14}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
      <PalmTree x={565} y={60} scale={0.75} />
    </svg>
  );
}

// ═══ Hospitality — resort hotel ═══
function HospitalitySilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={20} y={30} scale={0.95} />
      <PalmTree x={60} y={50} scale={0.75} />
      {/* Main resort tower */}
      <rect x={150} y={20} width={300} height={140} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Curved top */}
      <path
        d="M 150 20 Q 300 0 450 20"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={2}
      />
      {/* Hotel room grid */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={162 + col * 28}
            y={30 + row * 17}
            width={20}
            height={11}
            fill={strokeColor}
            opacity={0.22}
          />
        )),
      )}
      {/* Porte-cochère */}
      <rect x={270} y={140} width={60} height={20} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      <PalmTree x={475} y={50} scale={0.85} />
      <PalmTree x={520} y={35} scale={0.95} />
    </svg>
  );
}

// ═══ Land — rolling terrain with horizon ═══
function LandSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      {/* Rolling ground */}
      <path
        d="M 0 120 Q 80 100 160 115 T 320 105 T 480 120 T 600 110 L 600 180 L 0 180 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={2}
      />
      {/* Fence line */}
      <line x1={50} y1={125} x2={550} y2={115} stroke={strokeColor} strokeWidth={1} opacity={0.5} strokeDasharray="4,4" />
      {/* Palm trees scattered */}
      <PalmTree x={60} y={70} scale={0.85} />
      <PalmTree x={150} y={80} scale={0.7} />
      <PalmTree x={260} y={65} scale={0.9} />
      <PalmTree x={380} y={85} scale={0.75} />
      <PalmTree x={480} y={75} scale={0.8} />
      {/* Citrus grove rows (dots) */}
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={80 + col * 35 + row * 8}
            cy={135 + row * 12}
            r={3}
            fill={strokeColor}
            opacity={0.35}
          />
        )),
      )}
      {/* Sun on horizon */}
      <circle cx={500} cy={90} r={18} fill={strokeColor} opacity={0.25} />
    </svg>
  );
}

// ═══ Mixed-Use — vertical stack of uses ═══
function MixedUseSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={50} scale={0.85} />
      {/* Main vertical mixed-use building */}
      <rect x={120} y={20} width={280} height={140} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Residential floors — balconies */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <g key={`r-${row}-${col}`}>
            <rect
              x={134 + col * 38}
              y={30 + row * 20}
              width={30}
              height={13}
              fill="none"
              stroke={paleStroke}
              strokeWidth={1}
            />
          </g>
        )),
      )}
      {/* Floor divider */}
      <line x1={120} y1={110} x2={400} y2={110} stroke={strokeColor} strokeWidth={1.5} />
      {/* Ground floor retail storefronts */}
      {[130, 185, 240, 295, 350].map((x) => (
        <rect key={x} x={x} y={120} width={45} height={40} fill="none" stroke={paleStroke} strokeWidth={1.5} />
      ))}
      {/* Secondary building */}
      <rect x={430} y={70} width={120} height={90} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`s-${row}-${col}`}
            x={440 + col * 26}
            y={80 + row * 18}
            width={18}
            height={13}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
    </svg>
  );
}

// ═══ Special Purpose — car wash tunnel + pad site ═══
function SpecialPurposeSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={40} scale={0.85} />
      {/* Tunnel building (car wash style) */}
      <rect x={100} y={60} width={280} height={100} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <polygon points="100,60 380,60 370,45 110,45" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Tunnel entrance */}
      <rect x={110} y={90} width={60} height={70} fill="#0a0a0a" stroke={strokeColor} strokeWidth={1.5} />
      {/* Glass storefront */}
      {[180, 220, 260, 300, 340].map((x) => (
        <rect key={x} x={x} y={90} width={30} height={70} fill="none" stroke={paleStroke} strokeWidth={1.5} />
      ))}
      {/* Vacuum stalls */}
      {[400, 440, 480, 520].map((x) => (
        <g key={x}>
          <rect x={x} y={120} width={20} height={40} fill={fillColor} stroke={strokeColor} strokeWidth={1} />
          <line x1={x + 10} y1={120} x2={x + 10} y2={110} stroke={strokeColor} strokeWidth={1} />
          <circle cx={x + 10} cy={108} r={3} fill={strokeColor} opacity={0.6} />
        </g>
      ))}
      <PalmTree x={560} y={55} scale={0.8} />
    </svg>
  );
}

// ═══ Self Storage — multi-story with rolling doors ═══
function SelfStorageSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={50} scale={0.85} />
      {/* Multi-story storage building */}
      <rect x={100} y={30} width={260} height={130} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Floor bands */}
      <line x1={100} y1={75} x2={360} y2={75} stroke={strokeColor} strokeWidth={1.5} opacity={0.6} />
      <line x1={100} y1={120} x2={360} y2={120} stroke={strokeColor} strokeWidth={1.5} opacity={0.6} />
      {/* Windows per floor */}
      {[50, 95, 140].map((y) =>
        Array.from({ length: 10 }).map((_, col) => (
          <rect
            key={`${y}-${col}`}
            x={110 + col * 25}
            y={y}
            width={18}
            height={15}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
      {/* Drive-up building */}
      <rect x={380} y={100} width={180} height={60} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Roll-up doors */}
      {Array.from({ length: 9 }).map((_, i) => (
        <rect
          key={i}
          x={390 + i * 20}
          y={115}
          width={16}
          height={45}
          fill={strokeColor}
          opacity={0.25}
          stroke={paleStroke}
          strokeWidth={0.8}
        />
      ))}
    </svg>
  );
}

// ═══ Mobile Home Park — row of homes ═══
function MobileHomeParkSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={20} y={60} scale={0.75} />
      {/* 5 mobile homes in a row */}
      {[80, 190, 300, 410, 520].map((x, i) => (
        <g key={x}>
          {/* Base */}
          <rect x={x} y={100} width={80} height={50} fill={fillColor} stroke={strokeColor} strokeWidth={1.8} />
          {/* Roof */}
          <polygon points={`${x},100 ${x + 80},100 ${x + 70},80 ${x + 10},80`} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
          {/* Door */}
          <rect x={x + 30} y={120} width={14} height={30} fill={strokeColor} opacity={0.5} />
          {/* Windows */}
          <rect x={x + 8} y={110} width={14} height={10} fill={strokeColor} opacity={0.3} />
          <rect x={x + 56} y={110} width={14} height={10} fill={strokeColor} opacity={0.3} />
          {/* Carport */}
          {i % 2 === 0 && (
            <g>
              <line x1={x + 80} y1={100} x2={x + 100} y2={100} stroke={strokeColor} strokeWidth={1.2} opacity={0.6} />
              <line x1={x + 100} y1={100} x2={x + 100} y2={150} stroke={strokeColor} strokeWidth={1} opacity={0.4} />
            </g>
          )}
          {/* Small palm */}
          {i < 4 && <circle cx={x + 90} cy={155} r={2} fill={strokeColor} opacity={0.5} />}
        </g>
      ))}
    </svg>
  );
}

// ═══ Senior Living — campus building with portico ═══
function SeniorLivingSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={50} scale={0.85} />
      {/* Main senior living building */}
      <rect x={110} y={40} width={360} height={120} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Tiered roof */}
      <polygon points="110,40 470,40 455,20 125,20" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Central clock tower / cupola */}
      <rect x={275} y={-5} width={30} height={25} fill={fillColor} stroke={strokeColor} strokeWidth={1.2} />
      <polygon points="275,-5 305,-5 290,-20" fill={fillColor} stroke={strokeColor} strokeWidth={1.2} />
      {/* Windows grid */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={120 + col * 29}
            y={50 + row * 20}
            width={22}
            height={14}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
      {/* Porte-cochère entry */}
      <rect x={260} y={135} width={60} height={25} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      <polygon points="255,135 325,135 320,125 260,125" fill={fillColor} stroke={strokeColor} strokeWidth={1.2} />
      <PalmTree x={485} y={55} scale={0.85} />
    </svg>
  );
}

// ═══ Business for Sale — storefront with open sign ═══
function BusinessSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={30} y={50} scale={0.85} />
      {/* Main storefront */}
      <rect x={120} y={50} width={360} height={110} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {/* Awning */}
      <polygon points="120,50 480,50 470,30 130,30" fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />
      {/* Awning stripes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={135 + i * 56}
          y1={32}
          x2={140 + i * 56}
          y2={48}
          stroke={strokeColor}
          strokeWidth={0.8}
          opacity={0.4}
        />
      ))}
      {/* Glass storefront windows */}
      <rect x={140} y={70} width={140} height={80} fill="none" stroke={paleStroke} strokeWidth={1.5} />
      <rect x={320} y={70} width={140} height={80} fill="none" stroke={paleStroke} strokeWidth={1.5} />
      {/* Door in center */}
      <rect x={285} y={80} width={30} height={80} fill={strokeColor} opacity={0.4} />
      {/* "For Sale" tag */}
      <g transform="translate(490, 70)">
        <rect x={0} y={0} width={60} height={28} fill={strokeColor} opacity={0.85} rx={3} />
        <text
          x={30}
          y={19}
          textAnchor="middle"
          fontSize={11}
          fontWeight="bold"
          fill="#0a0a0a"
          fontFamily="system-ui, sans-serif"
        >
          FOR SALE
        </text>
      </g>
    </svg>
  );
}

// ═══ Note/Loan — document with signature and seal ═══
function NoteLoanSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      {/* Document */}
      <g transform="translate(180, 10)">
        <rect x={0} y={0} width={180} height={160} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
        {/* Folded corner */}
        <polygon points="150,0 180,0 180,30" fill="#141414" stroke={strokeColor} strokeWidth={1.5} />
        <line x1={150} y1={0} x2={150} y2={30} stroke={strokeColor} strokeWidth={1} />
        <line x1={150} y1={30} x2={180} y2={30} stroke={strokeColor} strokeWidth={1} />
        {/* Header line */}
        <line x1={15} y1={22} x2={135} y2={22} stroke={strokeColor} strokeWidth={2} />
        {/* Body text lines */}
        {[38, 50, 62, 74, 86, 98, 110].map((y) => (
          <line
            key={y}
            x1={15}
            y1={y}
            x2={155}
            y2={y}
            stroke={strokeColor}
            strokeWidth={1}
            opacity={0.45}
          />
        ))}
        {/* Signature line */}
        <line x1={15} y1={138} x2={90} y2={138} stroke={strokeColor} strokeWidth={1} />
        {/* Squiggle signature */}
        <path
          d="M 18 134 Q 28 128 35 134 T 52 134 T 70 134"
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.5}
          opacity={0.8}
        />
      </g>
      {/* Seal / stamp */}
      <g transform="translate(400, 50)">
        <circle cx={40} cy={40} r={38} fill="none" stroke={strokeColor} strokeWidth={2} />
        <circle cx={40} cy={40} r={30} fill="none" stroke={strokeColor} strokeWidth={1} />
        <text
          x={40}
          y={44}
          textAnchor="middle"
          fontSize={10}
          fontWeight="bold"
          fill={strokeColor}
          fontFamily="system-ui, sans-serif"
        >
          NOTE
        </text>
      </g>
      {/* Dollar sign */}
      <g transform="translate(80, 60)">
        <circle cx={30} cy={30} r={26} fill="none" stroke={strokeColor} strokeWidth={2} opacity={0.6} />
        <text
          x={30}
          y={39}
          textAnchor="middle"
          fontSize={28}
          fontWeight="bold"
          fill={strokeColor}
          opacity={0.7}
          fontFamily="system-ui, sans-serif"
        >
          $
        </text>
      </g>
    </svg>
  );
}

// ═══ Generic fallback ═══
function GenericSilhouette() {
  return (
    <svg viewBox="0 0 600 180" className="w-full h-auto">
      <PalmTree x={40} y={50} scale={0.85} />
      <rect x={120} y={40} width={150} height={120} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <rect x={290} y={80} width={120} height={80} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <rect x={430} y={60} width={120} height={100} fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={130 + col * 34}
            y={50 + row * 22}
            width={24}
            height={15}
            fill={strokeColor}
            opacity={0.2}
          />
        )),
      )}
    </svg>
  );
}

// ═══ Reusable palm tree ═══
function PalmTree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Trunk */}
      <path
        d="M 10 80 Q 8 60 12 40 Q 14 20 10 0"
        fill="none"
        stroke={strokeColor}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {/* Fronds */}
      <path d="M 10 0 Q -10 -5 -25 5" fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <path d="M 10 0 Q 25 -8 45 -2" fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <path d="M 10 0 Q 2 -15 -8 -25" fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <path d="M 10 0 Q 20 -18 32 -22" fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
      <path d="M 10 0 Q 12 -18 8 -30" fill="none" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}
