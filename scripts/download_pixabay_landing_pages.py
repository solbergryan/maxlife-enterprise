"""Download Pixabay images for landing pages missing hero imagery."""
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = "15048425-6a1865e8ee64622e4da7809e5"
ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"
USER_AGENT = "Mozilla/5.0 (commercial-stock-downloader)"

# folder -> [(query, pixabay_category)]
TARGETS = {
    "professionals": [
        ("business handshake", "business"),
        ("business meeting team", "business"),
        ("professional services", "business"),
    ],
    "careers": [
        ("office team collaboration", "business"),
        ("coworkers meeting", "business"),
        ("office people", "people"),
    ],
    "lease-types": [
        ("signing contract", "business"),
        ("lease agreement signing", "business"),
        ("contract pen", "business"),
    ],
    "glossary": [
        ("books library", "education"),
        ("dictionary", "education"),
        ("reference book", "education"),
    ],
    "faq": [
        ("question mark", None),
        ("help support", "business"),
        ("q and a", None),
    ],
    "net-sheets": [
        ("calculator money", "business"),
        ("financial calculator", "business"),
        ("accounting spreadsheet", "business"),
    ],
    "marketplace": [
        ("commercial real estate aerial", "buildings"),
        ("business district aerial", "buildings"),
    ],
    "investors": [
        ("stock market analysis", "business"),
        ("investment portfolio", "business"),
        ("financial charts", "business"),
    ],
}

PER_TARGET = 3


def slug(t: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
    return s[:60]


def search(query, category, page=1):
    p = {"key": API_KEY, "q": query, "image_type": "photo", "orientation": "horizontal",
         "per_page": 30, "page": page, "safesearch": "true"}
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

    for folder, queries in TARGETS.items():
        cat_dir = ROOT / folder
        cat_dir.mkdir(exist_ok=True)
        count = 0
        print(f"\n=== {folder} (target {PER_TARGET}) ===")
        for q, pc in queries:
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
                fname = f"maxlife-{folder}-{slug(tags)}-{h['id']}{ext}"
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
                        "id": h["id"], "category": folder, "query": f"{q} / cat={pc}",
                        "file": str(dest.relative_to(ROOT.parent.parent.parent)),
                        "tags": tags, "page_url": h.get("pageURL", ""),
                        "user": h.get("user", ""), "bytes": size,
                    })
                    print(f"  + {folder}/{fname}  ({size//1024} KB)  [{tags[:70]}]")
                except Exception as e:
                    print(f"  ! {h['id']}: {e}")
                time.sleep(0.15)
            time.sleep(0.35)
        print(f"  -> {folder}: {count}")

    manifest_path.write_text(json.dumps(manifest, indent=2))
    print("\nDONE.")


if __name__ == "__main__":
    main()
