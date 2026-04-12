import { useState, useMemo, useCallback, useRef } from "react";

// ─── Florida / Brevard County Rate Tables ───
const FL_DOC_STAMP_DEED = 0.70;
const FL_TITLE_BASE_RATE_PER_1K = 5.75;
const FL_TITLE_EXCESS_RATE_PER_1K = 5.00;

function calcOwnerTitlePremium(price) {
  if (price <= 0) return 0;
  if (price <= 100000) return price / 1000 * FL_TITLE_BASE_RATE_PER_1K;
  return 100 * FL_TITLE_BASE_RATE_PER_1K + (price - 100000) / 1000 * FL_TITLE_EXCESS_RATE_PER_1K;
}
function calcTitleSearchFee(price) {
  return Math.round(calcOwnerTitlePremium(price) * 0.25 * 100) / 100;
}

const SELLER_CC = {
  titleFees: { closingFee: 450, lienSearch: 125, estoppelFee: 350 },
  otherFees: { recordingFee: 18.50 },
};

const LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
  { value: "conv2nd", label: "Conv 2nd" },
  { value: "ownerFinance", label: "Owner Finance" },
];
const PAID_BY = [
  { value: "seller", label: "Seller" },
  { value: "buyer", label: "Buyer" },
  { value: "split", label: "Split" },
];

const fmt = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

// ─── Input Components ───
function CurrencyInput({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">$</span>
        <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800" placeholder={placeholder || "0"}
          value={value === 0 ? "" : value.toLocaleString()}
          onChange={(e) => { const r = e.target.value.replace(/[^0-9.]/g, ""); onChange(r === "" ? 0 : parseFloat(r)); }} />
      </div>
    </div>
  );
}

function PctOrDollarInput({ label, value, isPct, onValueChange, onModeChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <button onClick={() => onModeChange(true)} className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 ${isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}>%</button>
        <button onClick={() => onModeChange(false)} className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 ${!isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}>$</button>
        <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800"
          value={value === 0 ? "" : value}
          onChange={(e) => { const r = e.target.value.replace(/[^0-9.]/g, ""); onValueChange(r === "" ? 0 : parseFloat(r)); }} />
      </div>
    </div>
  );
}

function PctInputWithPaidBy({ label, value, onValueChange, paidBy, onPaidByChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
          <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">%</span>
          <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800"
            value={value === 0 ? "" : value}
            onChange={(e) => { const r = e.target.value.replace(/[^0-9.]/g, ""); onValueChange(r === "" ? 0 : parseFloat(r)); }} />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-sm" value={paidBy} onChange={(e) => onPaidByChange(e.target.value)}>
          {PAID_BY.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    </div>
  );
}

// ─── Donut Chart ───
function DonutChart({ data, size = 200 }) {
  const total = data.reduce((s, d) => s + Math.abs(d.value), 0);
  if (total === 0) return null;
  const cx = size / 2, cy = size / 2, r = size * 0.38, sw = size * 0.18;
  let cum = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.filter(d => d.value > 0).map((d, i) => {
        const pct = d.value / total;
        const da = 2 * Math.PI * r;
        const doff = da * (1 - pct);
        const rot = cum * 360 - 90;
        cum += pct;
        return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={sw} strokeDasharray={da} strokeDashoffset={doff} transform={`rotate(${rot} ${cx} ${cy})`} style={{ transition: "all 0.5s ease" }} />;
      })}
      <circle cx={cx} cy={cy} r={r - sw / 2 + 1} fill="white" />
    </svg>
  );
}

function DetailSection({ title, items }) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-2 border-b border-gray-200 pb-1">{title}</h4>
      {items.map((it, i) => (
        <div key={i} className="flex justify-between py-1 text-sm">
          <span className="text-gray-600">{it.label}</span>
          <span className={`font-medium ${it.value < 0 ? "text-red-500" : "text-gray-800"}`}>{typeof it.value === "number" ? fmt(it.value) : it.value}</span>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════
// PDF GENERATION (canvas-based, no external library)
// ═══════════════════════════════════════════════════
function generatePDF(salesPrice, loanType, calc, inputs) {
  const W = 612, H = 792; // Letter size in points
  const canvas = document.createElement("canvas");
  canvas.width = W * 2; canvas.height = H * 2;
  const ctx = canvas.getContext("2d");
  ctx.scale(2, 2); // retina
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, W, H);

  let y = 0;
  const LM = 50, RM = W - 50;
  const COL_R = RM;

  // ─── Header bar ───
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

  // ─── Date & Loan Type ───
  ctx.fillStyle = "#666";
  ctx.font = "10px Helvetica, Arial, sans-serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, LM, y);
  ctx.textAlign = "right";
  ctx.fillText(`Loan Type: ${LOAN_TYPES.find(l => l.value === loanType)?.label || loanType}`, COL_R, y);
  ctx.textAlign = "left";
  y += 25;

  // ─── Net at Close hero ───
  ctx.fillStyle = "#f0fdf4";
  ctx.fillRect(LM - 10, y - 5, RM - LM + 20, 55);
  ctx.strokeStyle = "#22c55e";
  ctx.lineWidth = 1;
  ctx.strokeRect(LM - 10, y - 5, RM - LM + 20, 55);
  ctx.fillStyle = "#15803d";
  ctx.font = "bold 14px Helvetica, Arial, sans-serif";
  ctx.fillText("NET AT CLOSE", LM, y + 18);
  ctx.font = "bold 28px Helvetica, Arial, sans-serif";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#15803d" : "#dc2626";
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.netAtClose), COL_R, y + 40);
  ctx.textAlign = "left";
  y += 75;

  // ─── Summary section ───
  function drawSummaryRow(label, value, bold, color) {
    ctx.fillStyle = color || "#333";
    ctx.font = bold ? "bold 12px Helvetica, Arial, sans-serif" : "12px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM, y);
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), COL_R, y);
    ctx.textAlign = "left";
    y += 20;
  }

  ctx.fillStyle = "#333";
  ctx.font = "bold 13px Helvetica, Arial, sans-serif";
  ctx.fillText("SUMMARY", LM, y); y += 18;
  ctx.strokeStyle = "#ddd"; ctx.lineWidth = 0.5;
  ctx.beginPath(); ctx.moveTo(LM, y - 5); ctx.lineTo(COL_R, y - 5); ctx.stroke();

  drawSummaryRow("Sales Price", salesPrice, true, "#111");
  drawSummaryRow("Mortgage Payoff", -calc.loanBalance, false, calc.loanBalance > 0 ? "#dc2626" : "#666");
  drawSummaryRow("Property Tax Debit", -calc.proratedTaxDebit, false, "#dc2626");
  drawSummaryRow("Total Closing Costs", -calc.totalClosingCosts, false, "#dc2626");
  ctx.beginPath(); ctx.moveTo(LM, y - 3); ctx.lineTo(COL_R, y - 3); ctx.stroke();
  drawSummaryRow("Net at Close", calc.netAtClose, true, calc.netAtClose >= 0 ? "#15803d" : "#dc2626");
  y += 10;

  // ─── Section helper ───
  function drawSectionHeader(title) {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(LM - 5, y - 3, RM - LM + 10, 20);
    ctx.fillStyle = "#1e40af";
    ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(title, LM, y + 12);
    y += 25;
  }
  function drawRow(label, value, indent) {
    ctx.fillStyle = "#555";
    ctx.font = "11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + (indent || 0), y);
    ctx.textAlign = "right";
    ctx.fillStyle = "#222";
    ctx.fillText(typeof value === "number" ? fmt(value) : value, COL_R, y);
    ctx.textAlign = "left";
    y += 17;
  }
  function drawTotalRow(label, value) {
    ctx.beginPath(); ctx.moveTo(LM, y - 4); ctx.lineTo(COL_R, y - 4); ctx.stroke();
    ctx.fillStyle = "#111";
    ctx.font = "bold 11px Helvetica, Arial, sans-serif";
    ctx.fillText(label, LM + 10, y + 8);
    ctx.textAlign = "right";
    ctx.fillText(fmt(value), COL_R, y + 8);
    ctx.textAlign = "left";
    y += 22;
  }

  // ─── Commissions ───
  drawSectionHeader("COMMISSIONS");
  drawRow(`Seller Broker Fee (${inputs.sellerBrokerFee}%)`, calc.sellerCommission, 10);
  const bbLabel = inputs.buyerBrokerPaidBy === "seller" ? "Seller pays" : inputs.buyerBrokerPaidBy === "split" ? "Split 50/50" : "Buyer pays";
  drawRow(`Buyer Broker Fee (${inputs.buyerBrokerFee}% - ${bbLabel})`, calc.buyerCommSellerPays, 10);
  drawTotalRow("Total Commissions", calc.totalCommission);

  // ─── Title Fees ───
  drawSectionHeader("TITLE FEES");
  drawRow(`Owner's Title Policy${inputs.reissueRate ? " (Reissue)" : ""}`, calc.titlePremium, 10);
  drawRow("Title Search Fee", calc.searchFee, 10);
  drawRow("Closing Fee", calc.closingFee, 10);
  drawRow("Lien Search", calc.lienSearch, 10);
  drawRow("Estoppel Fee", calc.estoppelFee, 10);
  drawTotalRow("Total Title Fees", calc.totalTitleFees);

  // ─── Other Fees ───
  drawSectionHeader("OTHER FEES");
  drawRow("Documentary Stamp Tax (Deed)", calc.docStampAmount, 10);
  drawRow("Recording Fee", calc.recordingFee, 10);
  if (calc.misc > 0) drawRow("Misc.", calc.misc, 10);
  if (calc.concessionDollar > 0) drawRow("Seller Concession", calc.concessionDollar, 10);
  drawTotalRow("Total Other Fees", calc.totalOtherFees + calc.concessionDollar + calc.misc);

  // ─── Debits ───
  drawSectionHeader("DEBITS");
  drawRow("Property Tax Proration (~4 mo)", calc.proratedTaxDebit, 10);
  if (calc.loanBalance > 0) drawRow("Mortgage Payoff", calc.loanBalance, 10);
  y += 5;

  // ─── Grand Total ───
  ctx.fillStyle = "#f0fdf4";
  ctx.fillRect(LM - 5, y - 3, RM - LM + 10, 45);
  ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 1;
  ctx.strokeRect(LM - 5, y - 3, RM - LM + 10, 45);
  ctx.fillStyle = "#111";
  ctx.font = "bold 12px Helvetica, Arial, sans-serif";
  ctx.fillText("Total Closing Costs", LM + 5, y + 15);
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.totalClosingCosts), COL_R - 5, y + 15);
  ctx.textAlign = "left";
  ctx.fillStyle = calc.netAtClose >= 0 ? "#15803d" : "#dc2626";
  ctx.font = "bold 16px Helvetica, Arial, sans-serif";
  ctx.fillText("NET AT CLOSE", LM + 5, y + 36);
  ctx.textAlign = "right";
  ctx.fillText(fmt(calc.netAtClose), COL_R - 5, y + 36);
  ctx.textAlign = "left";
  y += 60;

  // ─── Footer ───
  ctx.fillStyle = "#aaa";
  ctx.font = "9px Helvetica, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("This is an estimate only. Actual figures may vary. Brevard County, FL rates applied.", W / 2, H - 30);
  ctx.fillText("Generated " + new Date().toLocaleString(), W / 2, H - 18);
  ctx.textAlign = "left";

  // ─── Convert to PDF via data URL ───
  const imgData = canvas.toDataURL("image/png", 1.0);

  // Create a minimal PDF manually using the image
  // We'll use a print-friendly approach: open image in new window and trigger print
  const printWin = window.open("", "_blank");
  if (printWin) {
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Seller Net Sheet</title>
        <style>
          @page { size: letter; margin: 0; }
          body { margin: 0; padding: 0; display: flex; justify-content: center; }
          img { width: 100%; max-width: 612px; height: auto; }
          @media print {
            body { margin: 0; }
            img { width: 100%; page-break-after: avoid; }
          }
        </style>
      </head>
      <body>
        <img src="${imgData}" />
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 300);
          };
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  }
}

// ═══════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════
export default function SellerNetSheetApp() {
  const [loanType, setLoanType] = useState("conventional");
  const [salesPrice, setSalesPrice] = useState(0);
  const [sellerBrokerFee, setSellerBrokerFee] = useState(3);
  const [buyerBrokerFee, setBuyerBrokerFee] = useState(3);
  const [buyerBrokerPaidBy, setBuyerBrokerPaidBy] = useState("seller");
  const [sellerConcession, setSellerConcession] = useState(0);
  const [sellerConcessionIsPct, setSellerConcessionIsPct] = useState(true);
  const [misc, setMisc] = useState(0);
  const [reTax, setReTax] = useState(1);
  const [reTaxIsPct, setReTaxIsPct] = useState(true);
  const [loanBalance, setLoanBalance] = useState(0);
  const [reissueRate, setReissueRate] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [computed, setComputed] = useState(false);

  const calc = useMemo(() => {
    if (salesPrice <= 0) return null;
    const sellerCommission = salesPrice * (sellerBrokerFee / 100);
    let buyerCommission = salesPrice * (buyerBrokerFee / 100);
    let buyerCommSellerPays = buyerBrokerPaidBy === "seller" ? buyerCommission : buyerBrokerPaidBy === "split" ? buyerCommission / 2 : 0;
    const totalCommission = sellerCommission + buyerCommSellerPays;

    let titlePremium = calcOwnerTitlePremium(salesPrice);
    if (reissueRate) titlePremium *= 0.70;
    const searchFee = calcTitleSearchFee(salesPrice);
    const closingFee = SELLER_CC.titleFees.closingFee;
    const lienSearch = SELLER_CC.titleFees.lienSearch;
    const estoppelFee = SELLER_CC.titleFees.estoppelFee;
    const totalTitleFees = titlePremium + searchFee + closingFee + lienSearch + estoppelFee;

    const docStampAmount = Math.ceil(salesPrice / 100) * FL_DOC_STAMP_DEED;
    const recordingFee = SELLER_CC.otherFees.recordingFee;
    const totalOtherFees = docStampAmount + recordingFee;

    const annualTax = reTaxIsPct ? salesPrice * (reTax / 100) : reTax;
    const proratedTaxDebit = annualTax / 12 * 4;
    const concessionDollar = sellerConcessionIsPct ? salesPrice * (sellerConcession / 100) : sellerConcession;
    const totalClosingCosts = totalTitleFees + totalOtherFees + totalCommission + concessionDollar + misc;
    const netAtClose = salesPrice - loanBalance - proratedTaxDebit - totalClosingCosts;

    return {
      sellerCommission, buyerCommSellerPays, totalCommission,
      titlePremium, searchFee, closingFee, lienSearch, estoppelFee, totalTitleFees,
      docStampAmount, recordingFee, totalOtherFees,
      annualTax, proratedTaxDebit, concessionDollar, misc,
      totalClosingCosts, netAtClose, loanBalance,
    };
  }, [salesPrice, sellerBrokerFee, buyerBrokerFee, buyerBrokerPaidBy, sellerConcession, sellerConcessionIsPct, misc, reTax, reTaxIsPct, loanBalance, reissueRate, loanType]);

  const handleCompute = () => setComputed(true);

  const handlePDF = useCallback(() => {
    if (!calc) return;
    generatePDF(salesPrice, loanType, calc, { sellerBrokerFee, buyerBrokerFee, buyerBrokerPaidBy, reissueRate });
  }, [calc, salesPrice, loanType, sellerBrokerFee, buyerBrokerFee, buyerBrokerPaidBy, reissueRate]);

  const COLORS = ["#FDB415", "#80c342", "#5E81C1", "#d00000", "#BF6A00", "#53f400"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="bg-gradient-to-r from-red-400 to-orange-300 h-1.5"></div>
      <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-lg">S</div>
          <div>
            <span className="text-xl font-bold text-gray-800">Seller Net Sheet</span>
            <span className="ml-2 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">PRO</span>
          </div>
        </div>
        <span className="text-sm text-gray-400">Brevard County, FL</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* ─── FORM ─── */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Seller Net Sheet</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Loan Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800" value={loanType} onChange={(e) => { setLoanType(e.target.value); setComputed(false); }}>
                {LOAN_TYPES.map(lt => <option key={lt.value} value={lt.value}>{lt.label}</option>)}
              </select>
            </div>
            <CurrencyInput label="Sales Price" value={salesPrice} onChange={(v) => { setSalesPrice(v); setComputed(false); }} placeholder="Required" />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Seller Broker Fee</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">%</span>
                <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800" value={sellerBrokerFee} onChange={(e) => { setSellerBrokerFee(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0); setComputed(false); }} />
              </div>
            </div>
            <PctInputWithPaidBy label="Buyer Broker Fee" value={buyerBrokerFee} onValueChange={(v) => { setBuyerBrokerFee(v); setComputed(false); }} paidBy={buyerBrokerPaidBy} onPaidByChange={(v) => { setBuyerBrokerPaidBy(v); setComputed(false); }} />
            <PctOrDollarInput label="Seller Concession" value={sellerConcession} isPct={sellerConcessionIsPct} onValueChange={(v) => { setSellerConcession(v); setComputed(false); }} onModeChange={(p) => setSellerConcessionIsPct(p)} />
            <CurrencyInput label="Misc." value={misc} onChange={(v) => { setMisc(v); setComputed(false); }} />
            <PctOrDollarInput label="RE Tax" value={reTax} isPct={reTaxIsPct} onValueChange={(v) => { setReTax(v); setComputed(false); }} onModeChange={(p) => setReTaxIsPct(p)} />
            <CurrencyInput label="Seller Loan Balance" value={loanBalance} onChange={(v) => { setLoanBalance(v); setComputed(false); }} />
            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600">Reissue Rate</label>
              <button onClick={() => { setReissueRate(!reissueRate); setComputed(false); }}
                className={`relative w-12 h-6 rounded-full transition-colors ${reissueRate ? "bg-blue-500" : "bg-gray-300"}`}>
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${reissueRate ? "translate-x-6" : "translate-x-0.5"}`}></span>
              </button>
            </div>
            <button onClick={handleCompute} disabled={salesPrice <= 0}
              className="w-full mt-4 py-3 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed">
              COMPUTE
            </button>
          </div>
        </div>

        {/* ─── RESULTS ─── */}
        <div className="flex-1 min-w-0">
          {(!computed || !calc) ? (
            <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
              <p className="text-gray-400 text-lg">Enter a sales price and hit <span className="font-bold text-green-500">COMPUTE</span></p>
            </div>
          ) : (
            <>
              {/* Net at Close */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-700">Net at Close</h3>
                  <button onClick={handlePDF}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-colors border border-red-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                    Download PDF
                  </button>
                </div>
                <p className={`text-4xl font-bold mb-6 ${calc.netAtClose >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {fmt(calc.netAtClose)}
                </p>
                <div className="flex items-center gap-6">
                  <DonutChart data={[
                    { value: calc.totalCommission, color: COLORS[0] },
                    { value: calc.totalTitleFees, color: COLORS[1] },
                    { value: calc.totalOtherFees, color: COLORS[2] },
                    { value: calc.proratedTaxDebit, color: COLORS[3] },
                    { value: calc.loanBalance, color: COLORS[4] },
                    { value: Math.max(calc.netAtClose, 0), color: COLORS[5] },
                  ]} size={180} />
                  <div className="flex-1 space-y-2">
                    {[
                      { label: "Sales Price", value: salesPrice, color: null },
                      { label: "Loan Payoff", value: -calc.loanBalance, color: COLORS[4] },
                      { label: "Property Tax Debit", value: -calc.proratedTaxDebit, color: COLORS[3] },
                      { label: "Total Closing Costs", value: -calc.totalClosingCosts, color: COLORS[2] },
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        {it.color ? <span className="w-3 h-3 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: it.color }}></span> : <span className="w-3 h-3 inline-block flex-shrink-0"></span>}
                        <span className="text-gray-600 flex-1">{it.label}</span>
                        <span className={`font-semibold ${it.value < 0 ? "text-red-500" : "text-gray-800"}`}>{fmt(it.value)}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 pt-2 flex items-center gap-2 text-sm">
                      <span className="w-3 h-3 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: COLORS[5] }}></span>
                      <span className="text-gray-700 font-bold flex-1">Net at Close</span>
                      <span className={`font-bold ${calc.netAtClose >= 0 ? "text-green-600" : "text-red-500"}`}>{fmt(calc.netAtClose)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setShowDetail(!showDetail)}
                className="w-full py-3 bg-white rounded-xl shadow text-green-600 font-semibold hover:bg-green-50 transition-colors mb-4">
                {showDetail ? "Hide" : "Show"} Detailed Closing Costs
              </button>

              {showDetail && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Closing Costs</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    Loan Type: <span className="font-semibold text-gray-700">{LOAN_TYPES.find(l => l.value === loanType)?.label}</span>
                    {reissueRate && <span className="ml-2 text-blue-600 font-semibold">(Reissue Rate Applied)</span>}
                  </div>
                  <DetailSection title="Commissions" items={[
                    { label: `Seller Broker Fee (${sellerBrokerFee}%)`, value: calc.sellerCommission },
                    { label: `Buyer Broker Fee (${buyerBrokerFee}% - ${buyerBrokerPaidBy === "seller" ? "Seller pays" : buyerBrokerPaidBy === "split" ? "Split 50/50" : "Buyer pays"})`, value: calc.buyerCommSellerPays },
                  ]} />
                  <DetailSection title="Title Fees" items={[
                    { label: `Owner's Title Policy${reissueRate ? " (Reissue)" : ""}`, value: calc.titlePremium },
                    { label: "Title Search Fee", value: calc.searchFee },
                    { label: "Closing Fee", value: calc.closingFee },
                    { label: "Lien Search", value: calc.lienSearch },
                    { label: "Estoppel Fee", value: calc.estoppelFee },
                  ]} />
                  <DetailSection title="Other Fees" items={[
                    { label: "Documentary Stamp Tax (Deed)", value: calc.docStampAmount },
                    { label: "Recording Fee", value: calc.recordingFee },
                    ...(calc.misc > 0 ? [{ label: "Misc.", value: calc.misc }] : []),
                    ...(calc.concessionDollar > 0 ? [{ label: "Seller Concession", value: calc.concessionDollar }] : []),
                  ]} />
                  <DetailSection title="Debits" items={[
                    { label: "Property Tax Proration (~4 mo)", value: calc.proratedTaxDebit },
                    ...(calc.loanBalance > 0 ? [{ label: "Mortgage Payoff", value: calc.loanBalance }] : []),
                  ]} />
                  <div className="border-t-2 border-gray-300 pt-3 mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Total Closing Costs</span>
                      <span className="font-semibold text-gray-800">{fmt(calc.totalClosingCosts)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2">
                      <span className="text-gray-700">Net at Close</span>
                      <span className={calc.netAtClose >= 0 ? "text-green-600" : "text-red-500"}>{fmt(calc.netAtClose)}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <footer className="text-center text-xs text-gray-400 py-6">Seller Net Sheet Calculator — Brevard County, FL — Rates are estimates only.</footer>
    </div>
  );
}
