"""Download commercial real estate stock videos from Pixabay into categorized folders."""
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = "15048425-6a1865e8ee64622e4da7809e5"
ROOT = Path(__file__).resolve().parent.parent / "public" / "videos" / "commercial-stock"

CATEGORIES = {
    "office-buildings": ["office building", "modern office tower"],
    "retail-storefronts": ["retail storefront", "shopping mall"],
    "warehouse": ["warehouse", "distribution center"],
    "commercial-business": ["commercial business", "downtown business"],
    "real-estate-development": ["construction site", "building construction"],
    "mixed-commercial": ["commercial real estate", "city skyline"],
}

PER_PAGE = 50
TARGET_PER_CATEGORY = 6  # videos are large
QUALITY_PREFERENCE = ["medium", "small", "large", "tiny"]
USER_AGENT = "Mozilla/5.0 (commercial-video-downloader)"


def search(query: str, page: int = 1):
    params = {
        "key": API_KEY,
        "q": query,
        "video_type": "film",
        "per_page": PER_PAGE,
        "page": page,
        "safesearch": "true",
    }
    url = "https://pixabay.com/api/videos/?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def pick_url(videos: dict):
    for key in QUALITY_PREFERENCE:
        v = videos.get(key)
        if v and v.get("url"):
            return key, v["url"], v.get("size", 0)
    return None, None, 0


def download(url: str, dest: Path):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = resp.read()
    dest.write_bytes(data)
    return len(data)


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    seen_ids = set()
    total = 0
    manifest = []

    for folder, queries in CATEGORIES.items():
        cat_dir = ROOT / folder
        cat_dir.mkdir(exist_ok=True)
        cat_count = 0
        print(f"\n=== {folder} (target {TARGET_PER_CATEGORY}) ===")
        for q in queries:
            if cat_count >= TARGET_PER_CATEGORY:
                break
            try:
                data = search(q)
            except Exception as e:
                print(f"  ! search failed '{q}': {e}")
                continue
            hits = data.get("hits", [])
            for hit in hits:
                if cat_count >= TARGET_PER_CATEGORY:
                    break
                vid = hit["id"]
                if vid in seen_ids:
                    continue
                seen_ids.add(vid)
                quality, url, _ = pick_url(hit.get("videos", {}))
                if not url:
                    continue
                ext = Path(urllib.parse.urlparse(url).path).suffix or ".mp4"
                fname = f"{vid}_{quality}{ext}"
                dest = cat_dir / fname
                if dest.exists():
                    cat_count += 1
                    total += 1
                    continue
                try:
                    size = download(url, dest)
                    cat_count += 1
                    total += 1
                    manifest.append({
                        "id": vid,
                        "category": folder,
                        "query": q,
                        "quality": quality,
                        "file": f"{folder}/{fname}",
                        "tags": hit.get("tags", ""),
                        "duration": hit.get("duration", 0),
                        "page_url": hit.get("pageURL", ""),
                        "user": hit.get("user", ""),
                        "bytes": size,
                    })
                    print(f"  + {folder}/{fname}  ({size//1024} KB, {hit.get('duration',0)}s)  [{hit.get('tags','')[:50]}]")
                except Exception as e:
                    print(f"  ! download failed {vid}: {e}")
                time.sleep(0.3)
            time.sleep(0.5)
        print(f"  -> {folder}: {cat_count} videos")

    (ROOT / "_manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"\nDONE. Total videos: {total}")


if __name__ == "__main__":
    main()
