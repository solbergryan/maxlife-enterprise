// ═══════════════════════════════════════════════════
// PDF Generation via Canvas → Print
// Zero dependencies — works in any browser
// ═══════════════════════════════════════════════════
import { fmt, LOAN_TYPES } from "./calcEngine";

// When `options.skipPrint` is true, the generator returns the PNG data URL
// without opening a print window — used by the "email me this report" flow
// which ships the image to an API route instead of printing it.
export function generateSellerPDF(salesPrice, loanType, calc, inputs, options = {}) {
  const W = 612, H = 792;
  const canvas = document.createElement("canvas");
  canvas.width = W * 2; canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  ctx.scale(2, 2);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, W, H);

  let y = 0;
  const LM = 50, COL_R = W - 50;

  // Header
  ctx.fillStyle = "#1a7a3a";
  ctx.fillRect(0, 0, W, 60);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 22px Helvetica, Arial, sans-serif";
  ctx.fillText("Seller Net Sheet", LM, 40);
  ctx.font = "12px Helvetica, Arial, sans-serif";
  ctx.fillStyle = "#d4f5dd";
  ctx.textAlign = "right";
  ctx.fillText("Brevard County, FL", COL_R, 40);
  ctx.textAlign = "left";
  y = 80;

  ctx.fillStyle = "#666";
  ctx.font = "10px Helvetica, Arial, sans-serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, LM, y);
  ctx.textAlign = "right";
  ctx.fillText(`Loan Type: ${LOAN_TYPES.find(l => l.value === loanType)?.label || loanType}`, COL_R, y);
  ctx.textAlign = "left";
  y += 25;

  // Net hero
  ctx.fillStyle = "#f0fdf4";
  ctx.fillRect(LM - 10, y - 5, COL_R - LM + 20, 55);
  ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 1;
  ctx.strokeRect(LM - 10, y - 5, COL_R - LM + 20, 55);
  ctx.fillStyle = "#15803d";
  ctx.font = "bold 14px Helvetica, Arial, sans-serif";
  ctx.fillText("NET AT CLOSE", LM, y + 18);
  ctx.font = "bold 28px Helvetica, Arial, sans-serif";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#15803d" : "#dc2626";
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.netAtClose), COL_R, y + 40);
  ctx.textAlign = "left";
  y += 75;

  function summaryRow(label, value, bold, color) {
    ctx.fillStyle = color || "#333";
    ctx.font = bold ? "bold 12px Helvetica, Arial, sans-serif" : "12px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM, y);
    ctx.textAlign = "right"; ctx.fillText(fmt(value), COL_R, y); ctx.textAlign = "left";
    y += 20;
  }

  ctx.fillStyle = "#333"; ctx.font = "bold 13px Helvetica, Arial, sans-serif";
  ctx.fillText("SUMMARY", LM, y); y += 18;
  ctx.strokeStyle = "#ddd"; ctx.lineWidth = 0.5;
  ctx.beginPath(); ctx.moveTo(LM, y - 5); ctx.lineTo(COL_R, y - 5); ctx.stroke();

  summaryRow("Sales Price", salesPrice, true, "#111");
  summaryRow("Mortgage Payoff", -calc.loanBalance, false, calc.loanBalance > 0 ? "#dc2626" : "#666");
  summaryRow("Property Tax Debit", -calc.proratedTaxDebit, false, "#dc2626");
  summaryRow("Total Closing Costs", -calc.totalClosingCosts, false, "#dc2626");
  ctx.beginPath(); ctx.moveTo(LM, y - 3); ctx.lineTo(COL_R, y - 3); ctx.stroke();
  summaryRow("Net at Close", calc.netAtClose, true, calc.netAtClose >= 0 ? "#15803d" : "#dc2626");
  y += 10;

  function sectionHeader(title) {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 20);
    ctx.fillStyle = "#1e40af"; ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(title, LM, y + 12); y += 25;
  }
  function row(label, value, indent) {
    ctx.fillStyle = "#555"; ctx.font = "11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + (indent || 0), y);
    ctx.textAlign = "right"; ctx.fillStyle = "#222";
    ctx.fillText(typeof value === "number" ? fmt(value) : value, COL_R, y);
    ctx.textAlign = "left"; y += 17;
  }
  function totalRow(label, value) {
    ctx.beginPath(); ctx.moveTo(LM, y - 4); ctx.lineTo(COL_R, y - 4); ctx.stroke();
    ctx.fillStyle = "#111"; ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + 10, y + 8);
    ctx.textAlign = "right"; ctx.fillText(fmt(value), COL_R, y + 8);
    ctx.textAlign = "left"; y += 22;
  }

  sectionHeader("COMMISSIONS");
  row(`Seller Broker Fee (${inputs.sellerBrokerFee}%)`, calc.sellerCommission, 10);
  const bbLabel = inputs.buyerBrokerPaidBy === "seller" ? "Seller pays" : inputs.buyerBrokerPaidBy === "split" ? "Split 50/50" : "Buyer pays";
  row(`Buyer Broker Fee (${inputs.buyerBrokerFee}% - ${bbLabel})`, calc.buyerCommSellerPays, 10);
  totalRow("Total Commissions", calc.totalCommission);

  sectionHeader("TITLE FEES");
  row(`Owner's Title Policy${inputs.reissueRate ? " (Reissue)" : ""}`, calc.titlePremium, 10);
  row("Title Search Fee", calc.searchFee, 10);
  row("Closing Fee", calc.closingFee, 10);
  row("Lien Search", calc.lienSearch, 10);
  row("Estoppel Fee", calc.estoppelFee, 10);
  totalRow("Total Title Fees", calc.totalTitleFees);

  sectionHeader("OTHER FEES");
  row("Documentary Stamp Tax (Deed)", calc.docStampAmount, 10);
  row("Recording Fee", calc.recordingFee, 10);
  if (calc.misc > 0) row("Misc.", calc.misc, 10);
  if (calc.concessionDollar > 0) row("Seller Concession", calc.concessionDollar, 10);
  totalRow("Total Other Fees", calc.totalOtherFees + calc.concessionDollar + calc.misc);

  sectionHeader("DEBITS");
  row("Property Tax Proration (~4 mo)", calc.proratedTaxDebit, 10);
  if (calc.loanBalance > 0) row("Mortgage Payoff", calc.loanBalance, 10);
  y += 5;

  // Grand total box
  ctx.fillStyle = "#f0fdf4";
  ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 45);
  ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 1;
  ctx.strokeRect(LM - 5, y - 3, COL_R - LM + 10, 45);
  ctx.fillStyle = "#111"; ctx.font = "bold 12px Helvetica, Arial, sans-serif";
  ctx.fillText("Total Closing Costs", LM + 5, y + 15);
  ctx.textAlign = "right"; ctx.fillText(fmt(calc.totalClosingCosts), COL_R - 5, y + 15); ctx.textAlign = "left";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#15803d" : "#dc2626";
  ctx.font = "bold 16px Helvetica, Arial, sans-serif";
  ctx.fillText("NET AT CLOSE", LM + 5, y + 36);
  ctx.textAlign = "right"; ctx.fillText(fmt(calc.netAtClose), COL_R - 5, y + 36); ctx.textAlign = "left";
  y += 60;

  // Footer
  ctx.fillStyle = "#aaa"; ctx.font = "9px Helvetica, Arial, sans-serif"; ctx.textAlign = "center";
  ctx.fillText("This is an estimate only. Actual figures may vary. Brevard County, FL rates applied.", W / 2, H - 30);
  ctx.fillText("Generated " + new Date().toLocaleString(), W / 2, H - 18);
  ctx.textAlign = "left";

  const imgData = canvas.toDataURL("image/png", 1.0);
  if (!options.skipPrint) {
    const printWin = window.open("", "_blank");
    if (printWin) {
      printWin.document.write(`<!DOCTYPE html><html><head><title>Seller Net Sheet</title>
        <style>@page{size:letter;margin:0}body{margin:0;padding:0;display:flex;justify-content:center}
        img{width:100%;max-width:612px;height:auto}@media print{body{margin:0}img{width:100%;page-break-after:avoid}}</style>
        </head><body><img src="${imgData}"/><script>window.onload=function(){setTimeout(function(){window.print()},300)};<\/script></body></html>`);
      printWin.document.close();
    }
  }
  return imgData;
}

export function generateBuyerPDF(homePrice, loanType, calc, inputs, options = {}) {
  const W = 612, H = 792;
  const canvas = document.createElement("canvas");
  canvas.width = W * 2; canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  ctx.scale(2, 2);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, W, H);

  let y = 0;
  const LM = 50, COL_R = W - 50;

  // Header
  ctx.fillStyle = "#1e40af";
  ctx.fillRect(0, 0, W, 60);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 22px Helvetica, Arial, sans-serif";
  ctx.fillText("Buyer Estimate", LM, 40);
  ctx.font = "12px Helvetica, Arial, sans-serif";
  ctx.fillStyle = "#bfdbfe";
  ctx.textAlign = "right";
  ctx.fillText("Brevard County, FL", COL_R, 40);
  ctx.textAlign = "left";
  y = 80;

  ctx.fillStyle = "#666"; ctx.font = "10px Helvetica, Arial, sans-serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, LM, y);
  ctx.textAlign = "right";
  ctx.fillText(`Loan Type: ${LOAN_TYPES.find(l => l.value === loanType)?.label || loanType}   |   Loan Amount: ${fmt(calc.loanAmount)}`, COL_R, y);
  ctx.textAlign = "left";
  y += 25;

  function heroBox(label, value, color) {
    ctx.fillStyle = "#eff6ff";
    ctx.fillRect(LM - 10, y - 5, COL_R - LM + 20, 55);
    ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 1;
    ctx.strokeRect(LM - 10, y - 5, COL_R - LM + 20, 55);
    ctx.fillStyle = "#1e40af"; ctx.font = "bold 14px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM, y + 18);
    ctx.font = "bold 28px Helvetica, Arial, sans-serif";
    ctx.fillStyle = color;
    ctx.textAlign = "right"; ctx.fillText(fmt(value), COL_R, y + 40); ctx.textAlign = "left";
    y += 70;
  }

  heroBox("MONTHLY PAYMENT", calc.monthlyTotal, "#1e40af");

  // Monthly breakdown
  function row(label, value, indent) {
    ctx.fillStyle = "#555"; ctx.font = "11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + (indent || 0), y);
    ctx.textAlign = "right"; ctx.fillStyle = "#222";
    ctx.fillText(fmt(value), COL_R, y); ctx.textAlign = "left"; y += 17;
  }
  function sectionHeader(title) {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 20);
    ctx.fillStyle = "#1e40af"; ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(title, LM, y + 12); y += 25;
  }
  function totalRow(label, value) {
    ctx.strokeStyle = "#ddd"; ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(LM, y - 4); ctx.lineTo(COL_R, y - 4); ctx.stroke();
    ctx.fillStyle = "#111"; ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + 10, y + 8);
    ctx.textAlign = "right"; ctx.fillText(fmt(value), COL_R, y + 8);
    ctx.textAlign = "left"; y += 22;
  }

  sectionHeader("MONTHLY PAYMENT BREAKDOWN");
  row("Principal & Interest", calc.monthlyPI, 10);
  row("Hazard Insurance", calc.monthlyInsurance, 10);
  row("Property Tax", calc.monthlyTax, 10);
  if (calc.monthlyHOA > 0) row("HOA", calc.monthlyHOA, 10);
  totalRow("Total Monthly", calc.monthlyTotal);

  // Bring to close hero
  heroBox("BRING TO CLOSE", calc.bringToClose, "#1e40af");

  sectionHeader("PREPAID COSTS");
  row(`Hazard Insurance (${calc.cc.prepaid.monthsInsurance} mo)`, calc.prepaidInsurance, 10);
  row(`Property Tax (${calc.cc.prepaid.monthsTaxes} mo)`, calc.prepaidTax, 10);
  row(`Prepaid Interest (${calc.cc.prepaid.daysInterest} days)`, calc.prepaidInterest, 10);
  totalRow("Total Prepaid", calc.totalPrepaid);

  sectionHeader("TITLE FEES");
  if (calc.loanTitle > 0) row("Loan Title Policy (simo rate)", calc.loanTitle, 10);
  if (calc.searchFee > 0) row("Title Search Fee", calc.searchFee, 10);
  row("Closing Fee", calc.cc.titleFees.closingFee, 10);
  if (calc.cc.titleFees.taxServiceFee > 0) row("Tax Service Fee", calc.cc.titleFees.taxServiceFee, 10);
  totalRow("Total Title Fees", calc.totalTitleFees);

  sectionHeader("LENDER FEES");
  if (calc.originationFee > 0) row(`Origination Fee (${calc.cc.lenderFees.originationPct}%)`, calc.originationFee, 10);
  if (calc.cc.lenderFees.appraisal > 0) row("Appraisal", calc.cc.lenderFees.appraisal, 10);
  if (calc.cc.lenderFees.underwriting > 0) row("Underwriting", calc.cc.lenderFees.underwriting, 10);
  totalRow("Total Lender Fees", calc.totalLenderFees);

  sectionHeader("OTHER FEES");
  if (calc.docStampAmount > 0) row("Doc Stamps (Notes)", calc.docStampAmount, 10);
  if (calc.intangibleAmount > 0) row("Intangible Tax", calc.intangibleAmount, 10);
  totalRow("Total Other Fees", calc.totalOtherFees);

  // Grand total
  ctx.fillStyle = "#eff6ff";
  ctx.fillRect(LM - 5, y - 3, COL_R - LM + 10, 30);
  ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 1;
  ctx.strokeRect(LM - 5, y - 3, COL_R - LM + 10, 30);
  ctx.fillStyle = "#1e40af"; ctx.font = "bold 13px Helvetica, Arial, sans-serif";
  ctx.fillText("BRING TO CLOSE", LM + 5, y + 19);
  ctx.textAlign = "right"; ctx.fillText(fmt(calc.bringToClose), COL_R - 5, y + 19); ctx.textAlign = "left";

  // Footer
  ctx.fillStyle = "#aaa"; ctx.font = "9px Helvetica, Arial, sans-serif"; ctx.textAlign = "center";
  ctx.fillText("This is an estimate only. Actual figures may vary. Brevard County, FL rates applied.", W / 2, H - 30);
  ctx.fillText("Generated " + new Date().toLocaleString(), W / 2, H - 18);

  const imgData = canvas.toDataURL("image/png", 1.0);
  if (!options.skipPrint) {
    const printWin = window.open("", "_blank");
    if (printWin) {
      printWin.document.write(`<!DOCTYPE html><html><head><title>Buyer Estimate</title>
        <style>@page{size:letter;margin:0}body{margin:0;padding:0;display:flex;justify-content:center}
        img{width:100%;max-width:612px;height:auto}@media print{body{margin:0}img{width:100%;page-break-after:avoid}}</style>
        </head><body><img src="${imgData}"/><script>window.onload=function(){setTimeout(function(){window.print()},300)};<\/script></body></html>`);
      printWin.document.close();
    }
  }
  return imgData;
}
