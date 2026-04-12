# Net Sheet Calculator — MaxLife Realty

Florida / Brevard County closing cost calculators for buyers and sellers. Zero external dependencies for PDF generation (uses canvas-based rendering).

## Package Structure

```
net-sheet-package/
├── components/
│   ├── calcEngine.js          # Shared calculation engine (FL rates, formulas)
│   ├── pdfGenerator.js        # Canvas-based PDF generation (seller + buyer)
│   ├── SellerNetSheet.jsx     # React component — Seller Net Sheet
│   └── BuyerEstimate.jsx      # React component — Buyer Estimate
├── pages/                     # Next.js Pages Router
│   ├── seller.js
│   └── buyer.js
├── app/                       # Next.js App Router
│   ├── seller/page.js
│   └── buyer/page.js
├── standalone/                # Self-contained HTML (no build step needed)
│   ├── seller-net-sheet.html
│   └── buyer-estimate.html
└── README.md
```

## Installation on maxlifedevelopment.com (Next.js)

### Option A: App Router (recommended for Next.js 13+)

1. Copy the `components/` folder into your project:
   ```
   cp -r components/ /path/to/maxlifedevelopment.com/src/components/net-sheet/
   ```

2. Create the pages:
   ```
   cp app/seller/page.js /path/to/maxlifedevelopment.com/src/app/seller/page.js
   cp app/buyer/page.js /path/to/maxlifedevelopment.com/src/app/buyer/page.js
   ```

3. Update import paths in the page files to match your project structure:
   ```js
   // Example: /app/seller/page.js
   import SellerNetSheet from "@/components/net-sheet/SellerNetSheet";
   ```

4. The components use Tailwind CSS classes. Make sure Tailwind is configured in your project.

### Option B: Pages Router

1. Copy `components/` as above.
2. Copy `pages/seller.js` and `pages/buyer.js` into your `pages/` directory.
3. Update import paths.

### Option C: Standalone HTML (no build step)

Open `standalone/seller-net-sheet.html` or `standalone/buyer-estimate.html` directly in a browser. These are fully self-contained and can be embedded via iframe:

```html
<iframe src="/seller-net-sheet.html" width="100%" height="900" frameborder="0"></iframe>
```

## URLs After Installation

- **Seller Net Sheet:** `https://maxlifedevelopment.com/seller`
- **Buyer Estimate:** `https://maxlifedevelopment.com/buyer`

## Features

- Florida promulgated title insurance rates ($5.75/1K first $100K, $5.00/1K above)
- Documentary Stamp Tax: $0.70/$100 on deed (seller), $0.35/$100 on notes (buyer)
- Intangible Tax: $0.20/$100 on mortgage (buyer)
- Loan types: Conventional, FHA, VA, All Cash, USDA (+ Conv 2nd, Owner Finance for seller)
- Reissue rate toggle (30% discount on title premium)
- Simultaneous issue (simo) rate for buyer loan title policy
- PDF export via browser print dialog (Save as PDF)
- Donut chart visualizations
- Detailed closing cost breakdown toggle
- Responsive layout (mobile + desktop)

## Customization

### Changing Default Rates

Edit `components/calcEngine.js`:

- `FL_DOC_STAMP_DEED` / `FL_DOC_STAMP_NOTE` — Documentary stamp rates
- `FL_INTANGIBLE_TAX` — Intangible tax rate
- `FL_TITLE_BASE_PER_1K` / `FL_TITLE_EXCESS_PER_1K` — Title insurance rates
- `SELLER_DEFAULTS` — Default seller closing cost line items
- `BUYER_DEFAULTS` — Default buyer closing costs per loan type

### Changing Branding

The header gradient, colors, and "PRO" badge are in each component JSX. Search for `bg-gradient` and the header section to customize.

## Dependencies

- React 18+
- Tailwind CSS 3+
- No other dependencies (PDF generation is pure canvas)
