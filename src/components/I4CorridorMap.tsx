'use client';
import { useState } from 'react';
import Link from 'next/link';
import { I4_EXITS, I4_REGION_LABELS, type I4ExitData, type I4RegionId } from '@/data/i4-exits';

const REGION_COLORS: Record<I4RegionId, { band: string; text: string }> = {
  hillsborough: { band: '#5C2D00', text: '#FDE68A' },
  polk:         { band: '#0F2640', text: '#BAE6FD' },
  osceola:      { band: '#1E0F45', text: '#DDD6FE' },
  orange:       { band: '#5C1A00', text: '#FED7AA' },
  seminole:     { band: '#003320', text: '#A7F3D0' },
  volusia:      { band: '#042F48', text: '#BAE6FD' },
};

const REGIONS: { id: I4RegionId; xStart: number; xEnd: number }[] = [
  { id: 'hillsborough', xStart: 0,  xEnd: 16  },
  { id: 'polk',         xStart: 16, xEnd: 44  },
  { id: 'osceola',      xStart: 44, xEnd: 56  },
  { id: 'orange',       xStart: 56, xEnd: 72  },
  { id: 'seminole',     xStart: 72, xEnd: 82  },
  { id: 'volusia',      xStart: 82, xEnd: 100 },
];

// ─── SVG coordinate system ───────────────────────────────────────────────────
const VB_W   = 1700;
const VB_H   = 130;
const RD_X   = 50;
const RD_W   = VB_W - 100;
const RD_Y   = 20;
const RD_H   = 36;
const RD_BOT = RD_Y + RD_H;
const TICK_Y = RD_BOT + 4;
const TAB_H  = 24;
const TAB_Y  = TICK_Y + 10;
const LABEL_Y_ROW1 = TAB_Y + TAB_H + 8;   // y=102
const LABEL_Y_ROW2 = TAB_Y + TAB_H + 22;  // y=116

function toX(pct: number) {
  return RD_X + (pct / 100) * RD_W;
}

function tabW(exitNum: number) {
  return exitNum >= 100 ? 34 : 28;
}

const SHIELD_PATH =
  'M 50,108 C 28,96 2,80 0,62 L 0,24 C 0,8 14,2 28,4 C 37,5 44,10 50,10 C 56,10 63,5 72,4 C 86,2 100,8 100,24 L 100,62 C 98,80 72,96 50,108 Z';

function InterstateShield({
  cx, cy, w,
}: { cx: number; cy: number; w: number }) {
  const h = w * 1.1;
  const sx = w / 100;
  const sy = h / 110;
  const tx = cx - w / 2;
  const ty = cy - h / 2;
  const bannerH = h * 0.28;
  const bannerY = h - bannerH;
  const clipId = `shield-clip-${cx}`;

  return (
    <g transform={`translate(${tx}, ${ty})`}>
      <path d={SHIELD_PATH} transform={`scale(${sx}, ${sy})`} fill="#003087" />
      <clipPath id={clipId}>
        <path d={SHIELD_PATH} transform={`scale(${sx}, ${sy})`} />
      </clipPath>
      <rect x={0} y={bannerY} width={w} height={bannerH + 4} fill="#BF0D3E" clipPath={`url(#${clipId})`} />
      <text x={w / 2} y={h * 0.30} textAnchor="middle" fontSize={w * 0.16} fill="white" fontWeight="800" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.5">INTERSTATE</text>
      <text x={w / 2} y={h * 0.72} textAnchor="middle" fontSize={w * 0.38} fill="white" fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">4</text>
    </g>
  );
}

function ExitTab({
  exit, x, isSelected, onClick,
}: {
  exit: I4ExitData;
  x: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  const w  = tabW(exit.exitNum);
  const x0 = x - w / 2;
  const labelY = exit.labelRow === 2 ? LABEL_Y_ROW2 : LABEL_Y_ROW1;

  const bgColor     = isSelected   ? '#FFD100'
    : exit.highlight ? '#006B3C'
    : '#1A2E1A';
  const borderColor = isSelected   ? '#FFD100'
    : exit.highlight ? '#A7F3D0'
    : '#6B7280';
  const textColor   = isSelected   ? '#111111' : '#FFFFFF';
  const exitColor   = isSelected   ? '#555555' : '#9CA3AF';
  const labelColor  = isSelected   ? '#FFD100'
    : exit.highlight ? '#A7F3D0'
    : '#9CA3AF';

  const TAB_BOTTOM = TAB_Y + TAB_H;
  const stemY1 = TAB_BOTTOM;
  const stemY2 = labelY - 6;

  return (
    <g
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Exit ${exit.exitNum}: ${exit.shortLabel}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      {/* Stem from road bottom to tab top */}
      <line x1={x} y1={TICK_Y} x2={x} y2={TAB_Y} stroke={borderColor} strokeWidth={1.5} />
      {/* Exit sign tab */}
      <rect x={x0} y={TAB_Y} width={w} height={TAB_H} rx={2} ry={2}
        fill={bgColor} stroke={borderColor}
        strokeWidth={isSelected || exit.highlight ? 1.5 : 1} />
      <text x={x} y={TAB_Y + 8} textAnchor="middle" fontSize={6} fill={exitColor} fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.8">EXIT</text>
      <text x={x} y={TAB_Y + 20} textAnchor="middle" fontSize={exit.exitNum >= 100 ? 9 : 11} fill={textColor} fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">{exit.exitNum}</text>
      {/* Drop-line connector to label */}
      <line x1={x} y1={stemY1} x2={x} y2={stemY2} stroke={borderColor} strokeWidth={0.75} strokeDasharray="2 2" opacity={0.6} />
      {/* Destination short label */}
      <text x={x} y={labelY} textAnchor="middle" fontSize={8} fill={labelColor} fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.3">{exit.shortLabel}</text>
    </g>
  );
}

export default function I4CorridorMap() {
  const [selected, setSelected] = useState<I4ExitData | null>(null);

  return (
    <div className="rounded-xl overflow-hidden border border-white/10" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10" style={{ background: 'linear-gradient(135deg, #001a0d 0%, #0a1628 100%)' }}>
        <div className="flex items-center gap-3 mb-2">
          <svg width="28" height="31" viewBox="0 0 100 110" style={{ flexShrink: 0 }}>
            <path d={SHIELD_PATH} fill="#003087" />
            <clipPath id="hdr-clip"><path d={SHIELD_PATH} /></clipPath>
            <rect x={0} y={79} width={100} height={35} fill="#BF0D3E" clipPath="url(#hdr-clip)" />
            <text x="50" y="34" textAnchor="middle" fontSize="18" fill="white" fontWeight="800" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.5">INTERSTATE</text>
            <text x="50" y="76" textAnchor="middle" fontSize="40" fill="white" fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">4</text>
          </svg>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#A7F3D0' }}>Exit Guide · Tampa to Daytona Beach</p>
            <h3 className="text-white font-bold text-lg leading-tight">I-4 Commercial Real Estate Corridor</h3>
          </div>
        </div>
        <p className="text-sm" style={{ color: '#9CA3AF' }}>
          Click any exit sign to see existing tenants, traffic counts, cap rates, and commercial property mix. <span style={{ color: '#A7F3D0' }}>Green tabs</span> = top investment nodes.
        </p>
      </div>

      {/* SVG */}
      <div className="overflow-x-auto" style={{ background: '#0a0f0a' }}>
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} width={VB_W} height={VB_H} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }} aria-label="I-4 corridor interactive exit map">
          {/* County region bands */}
          {REGIONS.map((r) => {
            const x1 = r.xStart === 0   ? 0     : toX(r.xStart);
            const x2 = r.xEnd   === 100 ? VB_W  : toX(r.xEnd);
            const { band, text } = REGION_COLORS[r.id];
            return (
              <g key={r.id}>
                <rect x={x1} y={0} width={x2 - x1} height={17} fill={band} />
                <text x={(x1 + x2) / 2} y={12} textAnchor="middle" fontSize={9} fill={text} fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.5">
                  {I4_REGION_LABELS[r.id].toUpperCase()} CO.
                </text>
              </g>
            );
          })}

          {/* Road */}
          <rect x={RD_X} y={RD_Y} width={RD_W} height={RD_H} fill="#1C1C1C" />
          <line x1={RD_X} y1={RD_Y}   x2={RD_X + RD_W} y2={RD_Y}   stroke="#555" strokeWidth={1} />
          <line x1={RD_X} y1={RD_BOT} x2={RD_X + RD_W} y2={RD_BOT} stroke="#555" strokeWidth={1} />
          <rect x={RD_X}            y={RD_Y} width={4} height={RD_H} fill="#FFD100" opacity={0.85} />
          <rect x={RD_X + RD_W - 4} y={RD_Y} width={4} height={RD_H} fill="#FFD100" opacity={0.85} />
          <line x1={RD_X + 4} y1={RD_Y + RD_H / 2} x2={RD_X + RD_W - 4} y2={RD_Y + RD_H / 2}
            stroke="#CCCCCC" strokeWidth={1.5} strokeDasharray="28 14" />

          {/* I-4 shield */}
          <InterstateShield cx={VB_W / 2} cy={RD_Y + RD_H / 2} w={40} />

          {/* Direction labels */}
          <text x={RD_X + 8} y={RD_Y - 3} fontSize={8} fill="#9CA3AF" fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif">◀ TAMPA</text>
          <text x={RD_X + RD_W - 8} y={RD_Y - 3} textAnchor="end" fontSize={8} fill="#9CA3AF" fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif">DAYTONA ▶</text>

          {/* Exit tabs with destination labels */}
          {I4_EXITS.map((exit) => {
            const x = toX(exit.xPct);
            const isSel = selected?.exitNum === exit.exitNum;
            return (
              <ExitTab
                key={exit.exitNum}
                exit={exit}
                x={x}
                isSelected={isSel}
                onClick={() => setSelected(isSel ? null : exit)}
              />
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="px-4 py-2 border-t flex flex-wrap items-center gap-4 text-xs"
        style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#050d05', color: '#6B7280' }}>
        <div className="flex items-center gap-1.5">
          <svg width="22" height="18" viewBox="0 0 22 18">
            <rect x="1" y="1" width="20" height="16" rx="2" fill="#006B3C" stroke="#A7F3D0" strokeWidth="1.5"/>
            <text x="11" y="8" textAnchor="middle" fontSize="5" fill="#9CA3AF" fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.5">EXIT</text>
            <text x="11" y="15" textAnchor="middle" fontSize="8" fill="white" fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">98</text>
          </svg>
          <span>Top investment node</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="22" height="18" viewBox="0 0 22 18">
            <rect x="1" y="1" width="20" height="16" rx="2" fill="#1A2E1A" stroke="#6B7280" strokeWidth="1"/>
            <text x="11" y="8" textAnchor="middle" fontSize="5" fill="#6B7280" fontWeight="700" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.5">EXIT</text>
            <text x="11" y="15" textAnchor="middle" fontSize="8" fill="white" fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">72</text>
          </svg>
          <span>Commercial corridor</span>
        </div>
        <span className="ml-auto hidden sm:inline" style={{ color: '#4B5563' }}>
          Exit 1 (Tampa / I-275) → Exit 132 (Daytona Beach / I-95) · 132 miles
        </span>
      </div>

      {/* Detail panel — green guide sign */}
      {selected ? (
        <div className="border-t" style={{ borderColor: '#A7F3D0', background: 'linear-gradient(135deg, #003d1a 0%, #001a0d 100%)' }}>
          {/* Top bar */}
          <div className="px-5 py-2 flex items-center justify-between" style={{ borderBottom: '2px solid rgba(167,243,208,0.2)' }}>
            <div className="flex items-center gap-2">
              <svg width="20" height="22" viewBox="0 0 100 110">
                <path d={SHIELD_PATH} fill="#003087" />
                <clipPath id="det-clip"><path d={SHIELD_PATH} /></clipPath>
                <rect x="0" y="79" width="100" height="35" fill="#BF0D3E" clipPath="url(#det-clip)" />
                <text x="50" y="34" textAnchor="middle" fontSize="18" fill="white" fontWeight="800" fontFamily="Arial Narrow, Arial, sans-serif" letterSpacing="0.4">INTERSTATE</text>
                <text x="50" y="76" textAnchor="middle" fontSize="40" fill="white" fontWeight="900" fontFamily="Arial Narrow, Arial, sans-serif">4</text>
              </svg>
              <span className="font-black text-xs tracking-widest uppercase" style={{ color: '#A7F3D0', fontFamily: 'Arial Narrow, Arial, sans-serif' }}>
                Exit {selected.exitNum} · {I4_REGION_LABELS[selected.region]} County
              </span>
            </div>
            <button onClick={() => setSelected(null)} className="text-lg leading-none hover:opacity-60 transition-opacity" style={{ color: '#A7F3D0' }} aria-label="Close">×</button>
          </div>
          {/* Body */}
          <div className="px-5 py-4">
            <p className="font-bold text-base mb-3 tracking-wide" style={{ color: '#FFFFFF', fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.05em' }}>
              {selected.label.toUpperCase()}
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#D1FAE5' }}>
              {selected.description}
            </p>
            {/* Stats grid */}
            {(selected.traffic || selected.capRates || selected.propertyMix) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {selected.traffic && (
                  <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(167,243,208,0.15)' }}>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Traffic</p>
                    <p className="text-sm font-bold text-white">{selected.traffic}</p>
                  </div>
                )}
                {selected.capRates && (
                  <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(167,243,208,0.15)' }}>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Cap Rates</p>
                    <p className="text-sm font-bold text-white">{selected.capRates}</p>
                  </div>
                )}
                {selected.propertyMix && (
                  <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(167,243,208,0.15)' }}>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Property Mix</p>
                    <p className="text-sm font-bold text-white">{selected.propertyMix}</p>
                  </div>
                )}
              </div>
            )}
            {/* Existing anchors */}
            {selected.anchors.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: '#6EE7B7' }}>
                  Existing Major Tenants & Anchors
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.anchors.map((a) => (
                    <span key={a} className="text-xs px-2.5 py-1 rounded"
                      style={{ background: 'rgba(0,107,60,0.25)', border: '1px solid rgba(167,243,208,0.3)', color: '#D1FAE5' }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* MaxLife coverage links */}
            {selected.cityLinks.length > 0 && (
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: '#6EE7B7' }}>
                  MaxLife Coverage Pages
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.cityLinks.map((cl) =>
                    cl.slug ? (
                      <Link key={cl.slug} href={`/${cl.slug}`}
                        className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded transition-colors"
                        style={{ background: 'rgba(0,107,60,0.4)', border: '1px solid #A7F3D0', color: '#A7F3D0', fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.05em' }}>
                        ▶ {cl.name.toUpperCase()}
                      </Link>
                    ) : (
                      <span key={cl.name} className="text-xs px-3 py-1.5 rounded"
                        style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#9CA3AF' }}>
                        {cl.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="px-5 py-3 border-t text-center text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#050d05', color: '#4B5563', fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.05em' }}>
          SCROLL MAP · CLICK ANY EXIT SIGN TO VIEW TENANTS, TRAFFIC, CAP RATES
        </div>
      )}
    </div>
  );
}
