// ═══════════════════════════════════════════════════
// MaxLife Realty — Branded Net Sheet PDF Generator
// Canvas-based, zero external deps. Opens a print
// window the user can Save as PDF.
// ═══════════════════════════════════════════════════
import {
  fmt,
  LOAN_TYPES,
  getCountyConfig,
  DEFAULT_COUNTY,
  type SellerCalcResult,
  type BuyerCalcResult,
  type PaidBy,
  type County,
} from "./netSheetCalc";

// Brand colors
const NAVY = "#0a1a3a";
const GOLD = "#EFBF04";
const GOLD_DARK = "#d4a900";
const INK = "#0a0a0a";
const MUTED = "#555";
const LINE = "#d7dbe3";
const SOFT_BG = "#f7f8fb";

interface SellerPdfInputs {
  sellerBrokerFee: number;
  buyerBrokerFee: number;
  buyerBrokerPaidBy: PaidBy;
  reissueRate: boolean;
  county?: County;
  propertyAddress?: string;
  clientName?: string;
}

interface BuyerPdfInputs {
  downPmt: number;
  downPmtIsPct: boolean;
  interestRate: number;
  termYears: number;
  county?: County;
  propertyAddress?: string;
  clientName?: string;
}

// ─── Shared: Draw the MLR logo "seal" (matches public/mlr-logo.svg) ───
// Navy box with "MAX LIFE REALTY" repeated along each edge (top, bottom,
// left rotated, right rotated), a thin white inner border frame, and a
// large "MLR" mark with "TM" superscript in the center.
function drawLogoBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  // Navy background
  ctx.fillStyle = NAVY;
  ctx.fillRect(x, y, w, h);

  // Border seal text size scales with box width
  const sealFontSize = Math.max(4.5, w * 0.055);
  const sealMargin = Math.max(4, h * 0.08);

  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${sealFontSize.toFixed(1)}px Arial, Helvetica, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Top edge: two repeats of "MAX LIFE REALTY"
  ctx.fillText("MAX LIFE REALTY", x + w * 0.27, y + sealMargin);
  ctx.fillText("MAX LIFE REALTY", x + w * 0.73, y + sealMargin);

  // Bottom edge: two repeats
  ctx.fillText("MAX LIFE REALTY", x + w * 0.27, y + h - sealMargin);
  ctx.fillText("MAX LIFE REALTY", x + w * 0.73, y + h - sealMargin);

  // Left edge (rotated -90°)
  ctx.save();
  ctx.translate(x + sealMargin, y + h / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("MAX LIFE REALTY", 0, 0);
  ctx.restore();

  // Right edge (rotated +90°)
  ctx.save();
  ctx.translate(x + w - sealMargin, y + h / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillText("MAX LIFE REALTY", 0, 0);
  ctx.restore();

  // Inner border frame
  const framePad = Math.max(6, h * 0.18);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = Math.max(1, h * 0.025);
  ctx.strokeRect(x + framePad, y + framePad, w - framePad * 2, h - framePad * 2);

  // Main "MLR" mark
  ctx.fillStyle = "#ffffff";
  ctx.font = `900 ${Math.floor(h * 0.58)}px Arial, Helvetica, sans-serif`;
  ctx.fillText("MLR", x + w / 2, y + h / 2 + h * 0.03);

  // "TM" superscript anchored to the right of the MLR mark
  ctx.font = `bold ${Math.floor(h * 0.15)}px Arial, Helvetica, sans-serif`;
  ctx.fillText("TM", x + w * 0.87, y + h * 0.38);

  // Reset context defaults
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

// ─── Shared header across seller/buyer PDFs ───
function drawBrandedHeader(ctx: CanvasRenderingContext2D, W: number, title: string, subtitle: string) {
  // Navy header band (taller to accommodate the seal logo)
  const HEADER_H = 100;
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, 0, W, HEADER_H);
  // Gold accent bar
  ctx.fillStyle = GOLD;
  ctx.fillRect(0, HEADER_H, W, 4);

  // Logo seal — wider slot so the border "MAX LIFE REALTY" text is legible
  drawLogoBox(ctx, 36, 14, 160, 72);

  // Company wordmark
  ctx.fillStyle = GOLD;
  ctx.font = "bold 22px Arial, Helvetica, sans-serif";
  ctx.fillText("MaxLife", 212, 48);
  ctx.fillStyle = "#ffffff";
  ctx.font = "300 22px Arial, Helvetica, sans-serif";
  ctx.fillText(" Realty", 298, 48);
  ctx.font = "10px Arial, Helvetica, sans-serif";
  ctx.fillStyle = "#c6d3e6";
  ctx.fillText("Central Florida Commercial Real Estate", 212, 64);

  // Title
  ctx.textAlign = "right";
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px Arial, Helvetica, sans-serif";
  ctx.fillText(title, W - 40, 48);
  ctx.fillStyle = GOLD;
  ctx.font = "10px Arial, Helvetica, sans-serif";
  ctx.fillText(subtitle, W - 40, 66);
  ctx.textAlign = "left";
}

function drawFooter(ctx: CanvasRenderingContext2D, W: number, H: number, countyLabel: string) {
  // Gold hairline
  ctx.fillStyle = GOLD;
  ctx.fillRect(40, H - 58, W - 80, 1);
  ctx.fillStyle = "#444";
  ctx.font = "bold 9px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "MaxLife Realty  |  Ryan Solberg, Managing Broker  |  FL Broker License #3354351",
    W / 2,
    H - 44
  );
  ctx.fillStyle = "#666";
  ctx.font = "8px Arial, Helvetica, sans-serif";
  ctx.fillText(
    "maxlifedevelopment.com  |  Ryan@MaxLifeRealty.com  |  (321) 586-2121",
    W / 2,
    H - 32
  );
  ctx.fillStyle = "#9aa0ab";
  ctx.font = "bold 8px Arial, Helvetica, sans-serif";
  ctx.fillText(
    `ESTIMATE ONLY \u2014 NOT A LOAN ESTIMATE OR CLOSING DISCLOSURE. ${countyLabel} defaults applied.`,
    W / 2,
    H - 20
  );
  ctx.font = "7.5px Arial, Helvetica, sans-serif";
  ctx.fillText(
    "See page 2 for full disclosures, disclaimers, and methodology. Generated " +
      new Date().toLocaleString(),
    W / 2,
    H - 10
  );
  ctx.textAlign = "left";
}

// ─── Page 1 "ESTIMATE ONLY" banner (compact single-line) ───
function drawEstimateBanner(ctx: CanvasRenderingContext2D, W: number, y: number): number {
  const LM = 40;
  const bannerH = 18;
  ctx.fillStyle = "#fef3c7"; // soft gold wash
  ctx.fillRect(LM, y, W - LM * 2, bannerH);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1;
  ctx.strokeRect(LM, y, W - LM * 2, bannerH);
  // Gold vertical bar on the left
  ctx.fillStyle = GOLD;
  ctx.fillRect(LM, y, 4, bannerH);
  // Single-line text
  ctx.fillStyle = "#78350f";
  ctx.font = "bold 9px Arial, Helvetica, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("ESTIMATE ONLY", LM + 12, y + 12);
  ctx.fillStyle = "#92400e";
  ctx.font = "8.5px Arial, Helvetica, sans-serif";
  ctx.fillText(
    "\u2014 Not a Loan Estimate or Closing Disclosure. See page 2 for full disclosures.",
    LM + 85,
    y + 12
  );
  return y + bannerH + 6;
}

// ─── PAGE 2: Full Legal Disclosures & Disclaimers ───
function drawDisclosurePage(
  H: number,
  W: number,
  pageTitle: string,
  countyLabel: string
): string {
  const canvas = document.createElement("canvas");
  canvas.width = W * 2;
  canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.scale(2, 2);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  drawBrandedHeader(ctx, W, "DISCLOSURES", `Page 2 of 2 — ${pageTitle}`);

  const LM = 40;
  const COL_R = W - 40;
  const COL_W = COL_R - LM;
  let y = 120;

  // Big title
  ctx.fillStyle = INK;
  ctx.font = "bold 16px Arial, Helvetica, sans-serif";
  ctx.fillText("Disclosures, Disclaimers & Methodology", LM, y);
  ctx.fillStyle = GOLD;
  ctx.fillRect(LM, y + 4, 60, 2);
  y += 22;

  // Word-wrap helper
  const wrap = (text: string, maxW: number): string[] => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let line = "";
    for (const word of words) {
      const test = line ? line + " " + word : word;
      if (ctx.measureText(test).width > maxW) {
        if (line) lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  const section = (title: string) => {
    y += 6;
    ctx.fillStyle = NAVY;
    ctx.font = "bold 10px Arial, Helvetica, sans-serif";
    ctx.fillText(title.toUpperCase(), LM, y);
    ctx.fillStyle = GOLD;
    ctx.fillRect(LM, y + 3, ctx.measureText(title.toUpperCase()).width, 1);
    y += 12;
  };

  const body = (text: string) => {
    ctx.fillStyle = "#333";
    ctx.font = "9px Arial, Helvetica, sans-serif";
    const lines = wrap(text, COL_W);
    for (const line of lines) {
      ctx.fillText(line, LM, y);
      y += 11;
    }
    y += 3;
  };

  const bullet = (text: string) => {
    ctx.fillStyle = "#333";
    ctx.font = "9px Arial, Helvetica, sans-serif";
    const indent = 12;
    const lines = wrap(text, COL_W - indent);
    ctx.fillText("\u2022", LM + 2, y);
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], LM + indent, y);
      y += 11;
    }
    y += 1;
  };

  section("What this document is");
  body(
    "This is a closing cost estimate prepared by MaxLife Realty, a Florida licensed real estate brokerage (FL Broker License #3354351). It is provided for informational and illustrative purposes only and reflects default county norms, user inputs, and Florida statewide rates in effect on the preparation date shown on page 1."
  );

  section("What this document is NOT");
  bullet(
    "This is NOT a Loan Estimate or Closing Disclosure as defined under RESPA, TILA, or the CFPB TRID rules. Only your lender can issue an official Loan Estimate; only your closing agent can issue an official Closing Disclosure or ALTA settlement statement."
  );
  bullet(
    "This is NOT legal, tax, financial, accounting, or investment advice, and does not establish an attorney-client, fiduciary, or agency relationship."
  );
  bullet(
    "This is NOT an offer, contract, or commitment to buy, sell, finance, or insure real property, and creates no obligation on any party."
  );

  section("How figures are calculated");
  bullet(
    "Owner's title insurance is calculated using Florida promulgated rates: $5.75 per $1,000 on the first $100,000 and $5.00 per $1,000 above $100,000."
  );
  bullet(
    "Loan title insurance uses the simultaneous issue (simo) rate when applicable."
  );
  bullet(
    "The reissue rate discount (approximately 30% off the owner's title premium) is applied only when manually toggled on by the user."
  );
  bullet(
    "Documentary stamp tax on the deed: $0.70 per $100 of sales price (statewide; Miami-Dade excluded)."
  );
  bullet(
    "Documentary stamp tax on mortgage notes: $0.35 per $100 of loan amount."
  );
  bullet(
    "Florida intangible tax on new mortgage: $0.20 per $100 of loan amount."
  );
  bullet(
    "Property tax proration assumes approximately four (4) months of debit on the seller side; actual proration depends on contract terms and closing date."
  );
  bullet(
    `County-specific line items (closing fee, lien search, estoppel fee, recording fees) are default estimates for ${countyLabel}; actual charges vary by title company, lender, and local office.`
  );

  section("Responsibility to verify");
  body(
    "Actual closing costs depend on the specific contract, chosen title company, lender, loan product, inspection results, homestead status, millage rates, inclusions, and negotiated terms between the parties. Buyers and sellers should consult their title company, lender, Florida-licensed real estate attorney, tax advisor, and CPA before relying on any figure shown in this document. MaxLife Realty makes no warranty, express or implied, as to the accuracy, completeness, currency, merchantability, or fitness for a particular purpose of any figure contained herein, and disclaims all liability arising from reliance on this estimate to the fullest extent permitted by law."
  );

  section("Brokerage relationship");
  body(
    "Under Florida Statutes § 475.278, real estate licensees in Florida are presumed to operate as transaction brokers unless a single-agent or no-brokerage relationship is established in writing. MaxLife Realty and its associates may act as a transaction broker or single-agent as established in a separate written agreement with the client. This document alone does not establish any brokerage relationship."
  );

  section("Rate changes");
  body(
    "Florida statutory rates, county recording fees, title insurance premiums, lender charges, and third-party fees are subject to change without notice. This estimate reflects the rates and county defaults known to MaxLife Realty as of the generation timestamp shown on page 1."
  );

  section("Fair housing");
  body(
    "MaxLife Realty is an Equal Housing Opportunity brokerage. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national origin, or any other legally protected class."
  );

  // Prepared-by + signature block at the bottom
  const blockY = H - 140;
  ctx.strokeStyle = LINE;
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(LM, blockY - 8);
  ctx.lineTo(COL_R, blockY - 8);
  ctx.stroke();

  ctx.fillStyle = INK;
  ctx.font = "bold 10px Arial, Helvetica, sans-serif";
  ctx.fillText("Prepared by", LM, blockY + 4);
  ctx.font = "9px Arial, Helvetica, sans-serif";
  ctx.fillStyle = "#333";
  ctx.fillText("Ryan Solberg, Managing Broker", LM, blockY + 18);
  ctx.fillText("MaxLife Realty  |  FL Real Estate Broker License #3354351", LM, blockY + 30);
  ctx.fillText("maxlifedevelopment.com  |  Ryan@MaxLifeRealty.com  |  (321) 586-2121", LM, blockY + 42);

  // Client signature line (optional)
  ctx.fillStyle = INK;
  ctx.font = "bold 9px Arial, Helvetica, sans-serif";
  ctx.fillText("Client acknowledgement (optional)", LM, blockY + 66);
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(LM, blockY + 86);
  ctx.lineTo(LM + 260, blockY + 86);
  ctx.moveTo(LM + 290, blockY + 86);
  ctx.lineTo(COL_R, blockY + 86);
  ctx.stroke();
  ctx.fillStyle = "#666";
  ctx.font = "7px Arial, Helvetica, sans-serif";
  ctx.fillText("Client signature", LM, blockY + 96);
  ctx.fillText("Date", LM + 290, blockY + 96);

  // Footer band
  drawFooter(ctx, W, H, countyLabel);

  return canvas.toDataURL("image/png", 1.0);
}

function openPrintWindow(pages: string[], title: string) {
  const printWin = window.open("", "_blank");
  if (!printWin) {
    alert("Please allow pop-ups to download the PDF.");
    return;
  }
  const imgs = pages
    .map(
      (data, i) =>
        `<img class="page" src="${data}" alt="${title} — page ${i + 1} of ${pages.length}"/>`
    )
    .join("");
  printWin.document.write(
    `<!DOCTYPE html><html><head><title>${title}</title>
    <style>
      @page{size:letter;margin:0}
      body{margin:0;padding:0;background:#f0f0f0;display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px}
      .page{width:100%;max-width:612px;height:auto;box-shadow:0 4px 16px rgba(0,0,0,0.2);display:block}
      @media print{
        body{margin:0;padding:0;background:#fff;gap:0}
        .page{width:100%;box-shadow:none;break-inside:avoid}
        .page + .page{break-before:page;page-break-before:always}
      }
    </style>
    </head><body>${imgs}
    <script>window.onload=function(){setTimeout(function(){window.print()},500)};<\/script>
    </body></html>`
  );
  printWin.document.close();
}

// ═══════════════════════════════════════════════════
// SELLER PDF
// ═══════════════════════════════════════════════════
export function generateSellerPDF(
  salesPrice: number,
  loanType: string,
  calc: SellerCalcResult,
  inputs: SellerPdfInputs
) {
  const W = 612;
  const H = 792;
  const canvas = document.createElement("canvas");
  canvas.width = W * 2;
  canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(2, 2);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  const LM = 50;
  const COL_R = W - 50;

  const countyLabel = getCountyConfig(inputs.county ?? DEFAULT_COUNTY).fullLabel;
  drawBrandedHeader(ctx, W, "SELLER NET SHEET \u2014 ESTIMATE", `Page 1 of 2 — ${countyLabel}`);

  let y = drawEstimateBanner(ctx, W, 110);

  // Meta row
  ctx.fillStyle = MUTED;
  ctx.font = "10px Arial, Helvetica, sans-serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, LM, y);
  if (inputs.propertyAddress) {
    ctx.textAlign = "center";
    ctx.fillText(`Property: ${inputs.propertyAddress}`, W / 2, y);
    ctx.textAlign = "left";
  }
  ctx.textAlign = "right";
  const loanLabel = LOAN_TYPES.find((l) => l.value === loanType)?.label || loanType;
  ctx.fillText(`Loan Type: ${loanLabel}`, COL_R, y);
  ctx.textAlign = "left";
  y += 22;

  if (inputs.clientName) {
    ctx.fillStyle = INK;
    ctx.font = "bold 11px Arial, Helvetica, sans-serif";
    ctx.fillText(`Prepared for: ${inputs.clientName}`, LM, y);
    y += 18;
  }

  // Net-at-close hero
  ctx.fillStyle = SOFT_BG;
  ctx.fillRect(LM - 10, y - 5, COL_R - LM + 20, 62);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(LM - 10, y - 5, COL_R - LM + 20, 62);
  ctx.fillStyle = NAVY;
  ctx.font = "bold 13px Arial, Helvetica, sans-serif";
  ctx.fillText("NET AT CLOSE", LM, y + 18);
  ctx.fillStyle = "#5a6270";
  ctx.font = "9px Arial, Helvetica, sans-serif";
  ctx.fillText("Estimated seller proceeds", LM, y + 32);
  ctx.font = "bold 30px Arial, Helvetica, sans-serif";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#15803d" : "#dc2626";
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.netAtClose), COL_R, y + 44);
  ctx.textAlign = "left";
  y += 82;

  // Summary
  ctx.fillStyle = INK;
  ctx.font = "bold 12px Arial, Helvetica, sans-serif";
  ctx.fillText("TRANSACTION SUMMARY", LM, y);
  ctx.fillStyle = GOLD;
  ctx.fillRect(LM, y + 4, 40, 2);
  y += 18;

  const summaryRow = (label: string, value: number, bold = false, color = INK) => {
    ctx.fillStyle = color;
    ctx.font = bold ? "bold 11px Arial, Helvetica, sans-serif" : "11px Arial, Helvetica, sans-serif";
    ctx.fillText(label, LM, y);
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), COL_R, y);
    ctx.textAlign = "left";
    y += 17;
  };

  summaryRow("Sales Price", salesPrice, true);
  summaryRow("Mortgage Payoff", -calc.loanBalance, false, calc.loanBalance > 0 ? "#b91c1c" : MUTED);
  summaryRow("Property Tax Proration", -calc.proratedTaxDebit, false, "#b91c1c");
  summaryRow("Total Closing Costs", -calc.totalClosingCosts, false, "#b91c1c");
  ctx.strokeStyle = LINE;
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(LM, y - 4);
  ctx.lineTo(COL_R, y - 4);
  ctx.stroke();
  summaryRow("Net at Close", calc.netAtClose, true, calc.netAtClose >= 0 ? "#15803d" : "#b91c1c");
  y += 10;

  const sectionHeader = (title: string) => {
    ctx.fillStyle = NAVY;
    ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 20);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px Arial, Helvetica, sans-serif";
    ctx.fillText(title, LM + 4, y + 11);
    ctx.fillStyle = GOLD;
    ctx.fillRect(LM - 5, y + 17, COL_R - LM + 10, 1);
    y += 24;
  };

  const row = (label: string, value: number, indent = 10) => {
    ctx.fillStyle = MUTED;
    ctx.font = "10.5px Arial, Helvetica, sans-serif";
    ctx.fillText(label, LM + indent, y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#222";
    ctx.fillText(fmt(value), COL_R, y);
    ctx.textAlign = "left";
    y += 16;
  };

  const totalRow = (label: string, value: number) => {
    ctx.strokeStyle = LINE;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(LM + 5, y - 3);
    ctx.lineTo(COL_R, y - 3);
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.font = "bold 10.5px Arial, Helvetica, sans-serif";
    ctx.fillText(label, LM + 10, y + 9);
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), COL_R, y + 9);
    ctx.textAlign = "left";
    y += 22;
  };

  sectionHeader("COMMISSIONS");
  row(`Seller Broker Fee (${inputs.sellerBrokerFee}%)`, calc.sellerCommission);
  const bbLabel =
    inputs.buyerBrokerPaidBy === "seller"
      ? "Seller pays"
      : inputs.buyerBrokerPaidBy === "split"
      ? "Split 50/50"
      : "Buyer pays";
  row(`Buyer Broker Fee (${inputs.buyerBrokerFee}% — ${bbLabel})`, calc.buyerCommSellerPays);
  totalRow("Total Commissions", calc.totalCommission);

  sectionHeader("TITLE FEES");
  row(`Owner's Title Policy${inputs.reissueRate ? " (Reissue Rate)" : ""}`, calc.titlePremium);
  row("Title Search Fee", calc.searchFee);
  row("Closing Fee", calc.closingFee);
  row("Lien Search", calc.lienSearch);
  row("Estoppel Fee", calc.estoppelFee);
  totalRow("Total Title Fees", calc.totalTitleFees);

  sectionHeader("OTHER FEES");
  row("Documentary Stamp Tax (Deed)", calc.docStampAmount);
  row("Recording Fee", calc.recordingFee);
  if (calc.misc > 0) row("Miscellaneous", calc.misc);
  if (calc.concessionDollar > 0) row("Seller Concession", calc.concessionDollar);
  totalRow("Total Other Fees", calc.totalOtherFees + calc.concessionDollar + calc.misc);

  sectionHeader("DEBITS");
  row("Property Tax Proration (~4 mo)", calc.proratedTaxDebit);
  if (calc.loanBalance > 0) row("Mortgage Payoff", calc.loanBalance);
  y += 6;

  // Final grand total box
  ctx.fillStyle = NAVY;
  ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 52);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(LM - 5, y - 3, COL_R - LM + 10, 52);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 11px Arial, Helvetica, sans-serif";
  ctx.fillText("Total Closing Costs", LM + 8, y + 16);
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.totalClosingCosts), COL_R - 8, y + 16);
  ctx.textAlign = "left";
  ctx.fillStyle = GOLD;
  ctx.font = "bold 16px Arial, Helvetica, sans-serif";
  ctx.fillText("NET AT CLOSE", LM + 8, y + 40);
  ctx.textAlign = "right";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#4ade80" : "#fca5a5";
  ctx.fillText(fmt(calc.netAtClose), COL_R - 8, y + 40);
  ctx.textAlign = "left";

  drawFooter(ctx, W, H, countyLabel);

  const page1 = canvas.toDataURL("image/png", 1.0);
  const page2 = drawDisclosurePage(H, W, "Seller Net Sheet", countyLabel);
  openPrintWindow([page1, page2], "MaxLife Realty — Seller Net Sheet");
}

// ═══════════════════════════════════════════════════
// BUYER PDF
// ═══════════════════════════════════════════════════
export function generateBuyerPDF(
  homePrice: number,
  loanType: string,
  calc: BuyerCalcResult,
  inputs: BuyerPdfInputs
) {
  const W = 612;
  const H = 792;
  const canvas = document.createElement("canvas");
  canvas.width = W * 2;
  canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(2, 2);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  const LM = 50;
  const COL_R = W - 50;

  const countyLabel = getCountyConfig(inputs.county ?? DEFAULT_COUNTY).fullLabel;
  drawBrandedHeader(ctx, W, "BUYER ESTIMATE", `Page 1 of 2 — ${countyLabel}`);

  let y = drawEstimateBanner(ctx, W, 110);

  ctx.fillStyle = MUTED;
  ctx.font = "10px Arial, Helvetica, sans-serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, LM, y);
  ctx.textAlign = "right";
  const loanLabel = LOAN_TYPES.find((l) => l.value === loanType)?.label || loanType;
  ctx.fillText(
    `${loanLabel}  |  Loan: ${fmt(calc.loanAmount)}  |  ${inputs.interestRate}% / ${inputs.termYears}yr`,
    COL_R,
    y
  );
  ctx.textAlign = "left";
  y += 22;

  if (inputs.clientName || inputs.propertyAddress) {
    ctx.fillStyle = INK;
    ctx.font = "bold 11px Arial, Helvetica, sans-serif";
    if (inputs.clientName) ctx.fillText(`Prepared for: ${inputs.clientName}`, LM, y);
    if (inputs.propertyAddress) {
      ctx.textAlign = "right";
      ctx.fillText(inputs.propertyAddress, COL_R, y);
      ctx.textAlign = "left";
    }
    y += 18;
  }

  // Hero boxes — two side by side
  const boxW = (COL_R - LM - 10) / 2;

  const drawHero = (x: number, label: string, value: number) => {
    ctx.fillStyle = SOFT_BG;
    ctx.fillRect(x, y - 5, boxW, 62);
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y - 5, boxW, 62);
    ctx.fillStyle = NAVY;
    ctx.font = "bold 11px Arial, Helvetica, sans-serif";
    ctx.fillText(label, x + 10, y + 14);
    ctx.font = "bold 24px Arial, Helvetica, sans-serif";
    ctx.fillStyle = NAVY;
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), x + boxW - 10, y + 44);
    ctx.textAlign = "left";
  };

  drawHero(LM - 5, "MONTHLY PAYMENT", calc.monthlyTotal);
  drawHero(LM - 5 + boxW + 10, "BRING TO CLOSE", calc.bringToClose);
  y += 82;

  const sectionHeader = (title: string) => {
    ctx.fillStyle = NAVY;
    ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 20);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px Arial, Helvetica, sans-serif";
    ctx.fillText(title, LM + 4, y + 11);
    ctx.fillStyle = GOLD;
    ctx.fillRect(LM - 5, y + 17, COL_R - LM + 10, 1);
    y += 24;
  };
  const row = (label: string, value: number, indent = 10) => {
    ctx.fillStyle = MUTED;
    ctx.font = "10.5px Arial, Helvetica, sans-serif";
    ctx.fillText(label, LM + indent, y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#222";
    ctx.fillText(fmt(value), COL_R, y);
    ctx.textAlign = "left";
    y += 15;
  };
  const totalRow = (label: string, value: number) => {
    ctx.strokeStyle = LINE;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(LM + 5, y - 3);
    ctx.lineTo(COL_R, y - 3);
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.font = "bold 10.5px Arial, Helvetica, sans-serif";
    ctx.fillText(label, LM + 10, y + 9);
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), COL_R, y + 9);
    ctx.textAlign = "left";
    y += 20;
  };

  sectionHeader("MONTHLY PAYMENT BREAKDOWN");
  row("Principal & Interest", calc.monthlyPI);
  row("Hazard Insurance", calc.monthlyInsurance);
  row("Property Tax", calc.monthlyTax);
  if (calc.monthlyHOA > 0) row("HOA", calc.monthlyHOA);
  totalRow("Total Monthly", calc.monthlyTotal);

  sectionHeader("PREPAID COSTS");
  row(`Hazard Insurance (${calc.cc.prepaid.monthsInsurance} mo)`, calc.prepaidInsurance);
  row(`Property Tax (${calc.cc.prepaid.monthsTaxes} mo)`, calc.prepaidTax);
  row(`Prepaid Interest (${calc.cc.prepaid.daysInterest} days)`, calc.prepaidInterest);
  totalRow("Total Prepaid", calc.totalPrepaid);

  sectionHeader("TITLE FEES");
  if (calc.loanTitle > 0) row("Loan Title Policy (simo rate)", calc.loanTitle);
  if (calc.searchFee > 0) row("Title Search Fee", calc.searchFee);
  row("Closing Fee", calc.cc.titleFees.closingFee);
  if (calc.cc.titleFees.taxServiceFee > 0) row("Tax Service Fee", calc.cc.titleFees.taxServiceFee);
  if (calc.cc.titleFees.floodCert > 0) row("Flood Cert.", calc.cc.titleFees.floodCert);
  if (calc.cc.titleFees.titleEndorsement81 > 0) row("Title Endorsement (8.1)", calc.cc.titleFees.titleEndorsement81);
  totalRow("Total Title Fees", calc.totalTitleFees);

  sectionHeader("LENDER FEES");
  if (calc.originationFee > 0) row(`Origination Fee (${calc.cc.lenderFees.originationPct}%)`, calc.originationFee);
  if (calc.cc.lenderFees.appraisal > 0) row("Appraisal", calc.cc.lenderFees.appraisal);
  if (calc.cc.lenderFees.underwriting > 0) row("Underwriting", calc.cc.lenderFees.underwriting);
  if (calc.cc.lenderFees.creditReport > 0) row("Credit Report", calc.cc.lenderFees.creditReport);
  if (calc.cc.lenderFees.survey > 0) row("Survey", calc.cc.lenderFees.survey);
  if (calc.cc.lenderFees.termiteInspection > 0) row("Termite Inspection", calc.cc.lenderFees.termiteInspection);
  totalRow("Total Lender Fees", calc.totalLenderFees);

  sectionHeader("OTHER FEES");
  if (calc.docStampAmount > 0) row("Doc Stamps (Notes)", calc.docStampAmount);
  if (calc.intangibleAmount > 0) row("Intangible Tax", calc.intangibleAmount);
  if (calc.proratedTaxAmount > 0) row("Prorated Tax", calc.proratedTaxAmount);
  row("Recording Fees", calc.recordingFees);
  if (calc.specialFee > 0) row(calc.specialFeeLabel, calc.specialFee);
  if (calc.brokerDollar > 0) row("Buyer Broker Fee", calc.brokerDollar);
  if (calc.concessionDollar > 0) row("Seller Concession (credit)", -calc.concessionDollar);
  totalRow("Total Other", calc.totalOtherFees + calc.specialFee + calc.brokerDollar - calc.concessionDollar);

  y += 4;
  // Final grand total box
  ctx.fillStyle = NAVY;
  ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 38);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(LM - 5, y - 3, COL_R - LM + 10, 38);
  ctx.fillStyle = GOLD;
  ctx.font = "bold 14px Arial, Helvetica, sans-serif";
  ctx.fillText("BRING TO CLOSE", LM + 8, y + 24);
  ctx.textAlign = "right";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(fmt(calc.bringToClose), COL_R - 8, y + 24);
  ctx.textAlign = "left";

  drawFooter(ctx, W, H, countyLabel);

  const page1 = canvas.toDataURL("image/png", 1.0);
  const page2 = drawDisclosurePage(H, W, "Buyer Estimate", countyLabel);
  openPrintWindow([page1, page2], "MaxLife Realty — Buyer Estimate");
}
