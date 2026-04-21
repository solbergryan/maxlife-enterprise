# Commercial Stock Media

Stock photos and videos used across MaxLife Realty / MaxLife Development marketing pages.

## Source & License

All media sourced from [Pixabay](https://pixabay.com) under the [Pixabay Content License](https://pixabay.com/service/license-summary/).

- Free for commercial and non-commercial use
- No attribution required (but credits are preserved in `_manifest.json` and `src/lib/stock-media.ts`)
- Individual identifiable people / trademarks may not be used in ways that imply endorsement — keep that in mind for customer testimonial placements

## Folder layout

```
public/images/commercial-stock/
  office-buildings/        30 photos
  retail-storefronts/      30
  warehouse/               30
  commercial-business/     30
  real-estate-development/ 30
  mixed-commercial/        30
  _manifest.json           attribution + tags + Pixabay page URLs

public/images/video-posters/
  <category>/              auto-generated poster JPGs for each video

assets/videos/commercial-stock/   (NOT in public/ — won't ship with build)
  <category>/              compressed H.264 mp4s
  _manifest.json
```

Videos live in `assets/` rather than `public/` so they don't bloat Next.js builds. Upload them to Supabase storage or a CDN (CloudFront, Cloudflare R2, Bunny) and reference by URL.

## Naming

SEO-friendly: `maxlife-{category}-{tags}-{pixabay-id}.{ext}`

Examples:
- `maxlife-office-buildings-architecture-modern-building-facade-skyscraper-geometric-1048092.webp`
- `maxlife-warehouse-stock-room-warehouse-storage-logistics-medium-208160.mp4`

## Using in components

```tsx
import Image from 'next/image'
import { STOCK_IMAGES, STOCK_IMAGES_BY_CATEGORY } from '@/lib/stock-media'

const file = STOCK_IMAGES_BY_CATEGORY['office-buildings'][0]
const meta = STOCK_IMAGES[file]

<Image
  src={`/images/commercial-stock/office-buildings/${file}`}
  alt={meta.alt}
  width={1600}
  height={1067}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

`next/image` auto-generates responsive sizes — no need to pre-generate variants.

## Regenerating

```bash
python scripts/download_pixabay_commercial.py   # fetch photos
python scripts/download_pixabay_videos.py       # fetch videos
python scripts/rename_for_seo.py                # apply maxlife-* naming
python scripts/optimize_images.py               # JPG -> WebP, strip EXIF
python scripts/optimize_videos.py               # ffmpeg compress + posters
python scripts/build_alt_manifest.py            # regenerate stock-media.ts
```
