"""Download Pixabay images for the Aerospace industry vertical landing page."""
import json
import os
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = os.getenv("PIXABAY_API_KEY", "")
ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"
USER_AGENT = "Mozilla/5.0 (commercial-stock-downloader)"

FOLDER = "aerospace"

# (query, pixabay_category)
QUERIES = [
    ("aerospace facility building", "buildings"),
    ("tech industrial facility", "buildings"),
    ("modern research facility", "buildings"),
    ("advanced manufacturing plant", "buildings"),
]

PER_TARGET = 6


def slug(t: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
    return s[:60]


def search(query, category, page=1):
    p = {
        "key": API_KEY,
        "q": query,
        "image_type": "photo",
        "orientation": "horizontal",
        "per_page": 30,
        "page": page,
        "safesearch": "true",
    }
    if category:
        p["category"] = category
    url = "https://pixabay.com/api/?" + urllib.parse.urlencode(p)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    return json.loads(urllib.request.urlopen(req, timeout=30).read())


def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    data = urllib.request.urlopen(req, timeout=60).read()
    dest.write_bytes(data)
    return len(data)


def main():
    manifest_path = ROOT / "_manifest.json"
    try:
        manifest = json.loads(manifest_path.read_text())
    except Exception:
        manifest = []
    seen = {m.get("id") for m in manifest}

    cat_dir = ROOT / FOLDER
    cat_dir.mkdir(exist_ok=True)
    count = 0
    print(f"\n=== {FOLDER} (target {PER_TARGET}) ===")
    for q, pc in QUERIES:
        if count >= PER_TARGET:
            break
        try:
            data = search(q, pc)
        except Exception as e:
            print(f"  ! {q}: {e}")
            continue
        for h in data.get("hits", []):
            if count >= PER_TARGET:
                break
            if h["id"] in seen:
                continue
            url = h.get("largeImageURL") or h.get("webformatURL")
            if not url:
                continue
            ext = Path(urllib.parse.urlparse(url).path).suffix or ".jpg"
            tags = h.get("tags", "")
            fname = f"maxlife-{FOLDER}-{slug(tags)}-{h['id']}{ext}"
            dest = cat_dir / fname
            if dest.exists():
                count += 1
                seen.add(h["id"])
                continue
            try:
                size = download(url, dest)
                seen.add(h["id"])
                count += 1
                manifest.append({
                    "id": h["id"],
                    "category": FOLDER,
                    "query": f"{q} / cat={pc}",
                    "file": str(dest.relative_to(ROOT.parent.parent.parent)),
                    "tags": tags,
                    "page_url": h.get("pageURL", ""),
                    "user": h.get("user", ""),
                    "bytes": size,
                })
                print(f"  + {FOLDER}/{fname}  ({size//1024} KB)  [{tags[:70]}]")
            except Exception as e:
                print(f"  ! {h['id']}: {e}")
            time.sleep(0.15)
        time.sleep(0.35)
    print(f"  -> {FOLDER}: {count}")

    manifest_path.write_text(json.dumps(manifest, indent=2))
    print("\nDONE.")


if __name__ == "__main__":
    main()
