"""Retry Pixabay downloads for mismatched categories with better queries + category filter."""
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = "15048425-6a1865e8ee64622e4da7809e5"
ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"
USER_AGENT = "Mozilla/5.0 (commercial-stock-downloader)"

# folder -> list of (query, pixabay_category)
# Category options: backgrounds, fashion, nature, science, education, feelings, health,
#   people, religion, places, animals, industry, computer, food, sports, transportation,
#   travel, buildings, business, music.
TARGETS = {
    "senior-living": [
        ("nursing home", "buildings"),
        ("retirement", "people"),
        ("elderly care", "people"),
        ("assisted living", None),
        ("senior citizens", "people"),
        ("old age home", None),
    ],
    "self-storage": [
        ("storage building", "buildings"),
        ("storage units", None),
        ("garage doors", "buildings"),
        ("warehouse building", "buildings"),
    ],
    "mobile-home-park": [
        ("mobile home", "buildings"),
        ("manufactured home", "buildings"),
        ("trailer park", None),
        ("caravan park", None),
        ("rv park", None),
    ],
    "about-broker": [
        ("real estate agent", "business"),
        ("handshake business", "business"),
        ("commercial real estate", "business"),
        ("business meeting", "business"),
    ],
}

PER_TARGET = 4


def slugify(text: str) -> str:
    import re
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:60]


def search(query: str, category: str | None, page: int = 1):
    params = {
        "key": API_KEY,
        "q": query,
        "image_type": "photo",
        "orientation": "horizontal",
        "per_page": 30,
        "page": page,
        "safesearch": "true",
    }
    if category:
        params["category"] = category
    url = "https://pixabay.com/api/?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def download(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    dest.write_bytes(data)
    return len(data)


def main():
    manifest_path = ROOT / "_manifest.json"
    manifest = []
    if manifest_path.exists():
        try:
            manifest = json.loads(manifest_path.read_text())
        except Exception:
            manifest = []
    seen_ids = {m.get("id") for m in manifest}

    for folder, queries in TARGETS.items():
        cat_dir = ROOT / folder
        cat_dir.mkdir(exist_ok=True)
        count = 0
        print(f"\n=== {folder} (target {PER_TARGET}) ===")
        for q, pcat in queries:
            if count >= PER_TARGET:
                break
            try:
                data = search(q, pcat)
            except Exception as e:
                print(f"  ! search failed '{q}' cat={pcat}: {e}")
                continue
            hits = data.get("hits", [])
            for hit in hits:
                if count >= PER_TARGET:
                    break
                img_id = hit["id"]
                if img_id in seen_ids:
                    continue
                tags = hit.get("tags", "")
                img_url = hit.get("largeImageURL") or hit.get("webformatURL")
                if not img_url:
                    continue
                ext = Path(urllib.parse.urlparse(img_url).path).suffix or ".jpg"
                tag_slug = slugify(tags) or "photo"
                fname = f"maxlife-{folder}-{tag_slug}-{img_id}{ext}"
                dest = cat_dir / fname
                if dest.exists():
                    count += 1
                    seen_ids.add(img_id)
                    continue
                try:
                    size = download(img_url, dest)
                    seen_ids.add(img_id)
                    count += 1
                    manifest.append({
                        "id": img_id,
                        "category": folder,
                        "query": f"{q} / cat={pcat}",
                        "file": str(dest.relative_to(ROOT.parent.parent.parent)),
                        "tags": tags,
                        "page_url": hit.get("pageURL", ""),
                        "user": hit.get("user", ""),
                        "bytes": size,
                    })
                    print(f"  + {folder}/{fname}  ({size//1024} KB)  [{tags[:70]}]")
                except Exception as e:
                    print(f"  ! download failed {img_id}: {e}")
                time.sleep(0.15)
            time.sleep(0.35)
        print(f"  -> {folder}: {count} new images")

    manifest_path.write_text(json.dumps(manifest, indent=2))
    print("\nDONE.")


if __name__ == "__main__":
    main()
