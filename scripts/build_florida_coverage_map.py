"""
Build the Florida coverage map SVG used on the homepage's "Markets We Serve"
section. Takes accurate county paths from a Wikimedia source SVG and wraps
them in MaxLife Realty's dark + gold styling with city markers.
"""
import re
import sys
import urllib.request
from pathlib import Path

SOURCE_URL = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Florida_county_map%2C_cb_500k.svg"
OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "florida-coverage-map.svg"
USER_AGENT = "Mozilla/5.0 (maxlife-coverage-map-builder)"

# Highlighted counties where MaxLife has active coverage.
# Draws a slightly lighter fill on top of the base county fill.
COVERAGE_COUNTIES = {
    # Central Florida (HQ)
    "Orange", "Seminole", "Osceola", "Lake", "Volusia", "Brevard", "Polk",
    # Tampa Bay
    "Hillsborough", "Pinellas", "Pasco", "Hernando", "Manatee", "Sarasota",
    # Northeast
    "Duval", "Clay", "St. Johns", "Nassau", "Flagler",
    # North / Central North
    "Alachua", "Marion", "Leon",
    # South Florida
    "Miami-Dade", "Broward", "Palm Beach",
    # Southwest
    "Lee", "Collier", "Charlotte",
    # Panhandle
    "Escambia", "Santa Rosa", "Okaloosa", "Bay",
}

# City markers — positions in the Wikimedia SVG's 810x805 coordinate space.
# Derived by inspecting county path centroids; tuned visually.
CITIES = [
    # (x, y, label, kind) — kind: "hq", "major", "minor"
    (660, 316, "ORLANDO", "hq"),
    (636, 140, "Jacksonville", "major"),
    (510, 400, "Tampa", "major"),
    (738, 735, "Miami", "major"),
    (728, 680, "Fort Lauderdale", "minor"),
    (738, 625, "West Palm Beach", "minor"),
    (535, 510, "Sarasota", "minor"),
    (615, 570, "Fort Myers", "minor"),
    (645, 625, "Naples", "minor"),
    (525, 145, "Gainesville", "minor"),
    (335, 95, "Tallahassee", "minor"),
    (90, 105, "Pensacola", "minor"),
    (710, 345, "Space Coast", "minor"),
]

# Region labels (placed over areas, subtle)
REGIONS = [
    (100, 45, "PANHANDLE"),
    (355, 50, "NORTH FL"),
    (605, 80, "NORTHEAST FL"),
    (620, 255, "CENTRAL FL"),
    (485, 460, "TAMPA BAY"),
    (605, 540, "SW FLORIDA"),
    (740, 590, "SOUTH FL"),
]


def fetch_source() -> str:
    req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8")


def extract_county_paths(svg_text: str) -> list[tuple[str, str]]:
    """Return a list of (county_name, path_d) tuples."""
    pattern = re.compile(
        r'<path\s+d="([^"]+)"\s+id="([^"]+)"',
        re.DOTALL,
    )
    return [(m.group(2), m.group(1)) for m in pattern.finditer(svg_text)]


def build_marker(x: float, y: float, label: str, kind: str) -> str:
    if kind == "hq":
        # Orlando HQ — pulsing rings + big gold dot + label
        return f"""
    <g>
      <circle cx="{x}" cy="{y}" r="16" fill="none" stroke="#EFBF04" stroke-width="1" opacity="0.3"/>
      <circle cx="{x}" cy="{y}" r="11" fill="none" stroke="#EFBF04" stroke-width="1.5" opacity="0.6"/>
      <circle cx="{x}" cy="{y}" r="6" fill="#EFBF04" filter="url(#hub-glow)"/>
      <circle cx="{x}" cy="{y}" r="2.5" fill="#0a0a0a"/>
    </g>
    <text x="{x}" y="{y + 32}" text-anchor="middle" fill="#EFBF04" font-size="14" font-weight="700" letter-spacing="1" font-family="'Helvetica Neue', Arial, sans-serif">{label}</text>
    <text x="{x}" y="{y + 46}" text-anchor="middle" fill="#9ca3af" font-size="10" font-style="italic" font-family="'Helvetica Neue', Arial, sans-serif">Headquarters</text>"""
    if kind == "major":
        return f"""
    <circle cx="{x}" cy="{y}" r="6" fill="#EFBF04"/>
    <circle cx="{x}" cy="{y}" r="2.5" fill="#0a0a0a"/>
    <text x="{x}" y="{y + 20}" text-anchor="middle" fill="#f5f5f5" font-size="12" font-weight="700" font-family="'Helvetica Neue', Arial, sans-serif" letter-spacing="0.5">{label}</text>"""
    # minor
    return f"""
    <circle cx="{x}" cy="{y}" r="4.5" fill="#EFBF04"/>
    <circle cx="{x}" cy="{y}" r="1.5" fill="#0a0a0a"/>
    <text x="{x}" y="{y + 17}" text-anchor="middle" fill="#d1d5db" font-size="10" font-weight="600" font-family="'Helvetica Neue', Arial, sans-serif">{label}</text>"""


def build_svg(county_paths: list[tuple[str, str]]) -> str:
    # The source SVG has a 810x805 viewBox with counties offset by translate(5,5).
    # We extend the viewBox to 810x860 to fit our title + coverage legend.
    land_paths = []
    coverage_paths = []
    for name, d in county_paths:
        # Base land fill (every county)
        land_paths.append(
            f'<path d="{d}" fill="url(#land)" stroke="#2a3a55" stroke-width="0.6"/>'
        )
        # Highlighted coverage overlay
        if name in COVERAGE_COUNTIES:
            coverage_paths.append(
                f'<path d="{d}" fill="#EFBF04" fill-opacity="0.08" stroke="#EFBF04" stroke-opacity="0.25" stroke-width="0.8"/>'
            )

    markers = "\n".join(build_marker(x, y, label, kind) for x, y, label, kind in CITIES)

    region_labels = "\n    ".join(
        f'<text x="{x}" y="{y}" font-size="9.5" font-weight="600" fill="#8a95a8" opacity="0.7" letter-spacing="2" font-family="\'Helvetica Neue\', Arial, sans-serif">{label}</text>'
        for x, y, label in REGIONS
    )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 860" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of Florida showing statewide commercial real estate markets served by MaxLife Realty">
  <title>MaxLife Realty — Statewide Florida Commercial Real Estate Coverage</title>
  <desc>Detailed county-level map of Florida with commercial real estate markets served by MaxLife Realty — Orlando headquarters plus Tampa Bay, Jacksonville, South Florida (Miami, Fort Lauderdale, West Palm Beach), Southwest Florida (Naples, Fort Myers, Sarasota), Gainesville, Tallahassee, and the Panhandle.</desc>

  <defs>
    <radialGradient id="ocean" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#0b1424"/>
      <stop offset="55%" stop-color="#070d1a"/>
      <stop offset="100%" stop-color="#03060d"/>
    </radialGradient>
    <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b2a40"/>
      <stop offset="100%" stop-color="#0f1827"/>
    </linearGradient>
    <filter id="hub-glow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="land-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Ocean backdrop -->
  <rect width="820" height="860" fill="url(#ocean)"/>

  <!-- Faint grid for depth -->
  <g opacity="0.04" stroke="#EFBF04" stroke-width="0.5">
    <line x1="0" y1="215" x2="820" y2="215"/>
    <line x1="0" y1="430" x2="820" y2="430"/>
    <line x1="0" y1="645" x2="820" y2="645"/>
    <line x1="205" y1="0" x2="205" y2="860"/>
    <line x1="410" y1="0" x2="410" y2="860"/>
    <line x1="615" y1="0" x2="615" y2="860"/>
  </g>

  <!-- Title -->
  <g font-family="'Helvetica Neue', Arial, sans-serif">
    <text x="40" y="48" fill="#EFBF04" font-size="22" font-weight="700" letter-spacing="3">MAXLIFE REALTY</text>
    <text x="40" y="72" fill="#f5f5f5" font-size="14" font-weight="500" letter-spacing="1">Florida Commercial Real Estate</text>
    <text x="40" y="90" fill="#9ca3af" font-size="11" font-style="italic">Statewide coverage · Headquartered in Orlando</text>
  </g>

  <!-- Florida counties -->
  <g transform="translate(5, 110)" filter="url(#land-shadow)">
    {'\n    '.join(land_paths)}
  </g>
  <g transform="translate(5, 110)">
    {'\n    '.join(coverage_paths)}
  </g>

  <!-- Region labels -->
  <g transform="translate(5, 110)">
    {region_labels}
  </g>

  <!-- City markers -->
  <g transform="translate(5, 110)" font-family="'Helvetica Neue', Arial, sans-serif">
    {markers}
  </g>

  <!-- Legend -->
  <g transform="translate(40, 790)" font-family="'Helvetica Neue', Arial, sans-serif">
    <rect x="-8" y="-24" width="340" height="60" rx="6" fill="#0b1424" fill-opacity="0.85" stroke="#EFBF04" stroke-opacity="0.3" stroke-width="1"/>
    <text x="0" y="-6" fill="#EFBF04" font-size="10" font-weight="700" letter-spacing="2">COVERAGE NETWORK</text>
    <g font-size="10" fill="#d1d5db">
      <circle cx="6" cy="14" r="4" fill="#EFBF04"/>
      <text x="18" y="17" font-weight="700">Orlando</text>
      <text x="76" y="17" fill="#9ca3af">HQ · Central FL</text>
    </g>
    <g font-size="9.5" fill="#9ca3af">
      <text x="0" y="32">Major metros: Tampa · Jacksonville · Miami · Fort Lauderdale · West Palm Beach</text>
    </g>
  </g>
</svg>
"""


def main():
    src = fetch_source()
    paths = extract_county_paths(src)
    if len(paths) < 60:
        print(f"Only extracted {len(paths)} counties — aborting", file=sys.stderr)
        sys.exit(1)
    print(f"Extracted {len(paths)} county paths")
    svg = build_svg(paths)
    OUT.write_text(svg, encoding="utf-8")
    print(f"Wrote {OUT} ({len(svg)} bytes)")


if __name__ == "__main__":
    main()
