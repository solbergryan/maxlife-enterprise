// ═══════════════════════════════════════════════════════
// Florida / Brevard County Closing Cost Calculation Engine
// ═══════════════════════════════════════════════════════

// ─── FL Rate Tables ───
export const FL_DOC_STAMP_DEED = 0.70;   // per $100 on deed (seller)
export const FL_DOC_STAMP_NOTE = 0.35;   // per $100 on mortgage notes (buyer)
export const FL_INTANGIBLE_TAX = 0.20;   // per $100 on mortgage (buyer)
export const FL_TITLE_BASE_PER_1K = 5.75;  // first $100k
export const FL_TITLE_EXCESS_PER_1K = 5.00; // above $100k

export function calcOwnerTitlePremium(price) {
  if (price <= 0) return 0;
  if (price <= 100000) return price / 1000 * FL_TITLE_BASE_PER_1K;
  return 100 * FL_TITLE_BASE_PER_1K + (price - 100000) / 1000 * FL_TITLE_EXCESS_PER_1K;
}

export function calcLoanTitlePremium(loanAmt, price) {
  if (loanAmt <= 0) return 0;
  const loanAsOwner = calcOwnerTitlePremium(loanAmt);
  return Math.round(loanAsOwner * 0.25 * 100) / 100;
}

export function calcTitleSearchFee(price) {
  return Math.round(calcOwnerTitlePremium(price) * 0.25 * 100) / 100;
}

export const fmt = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

// ─── Loan Types ───
export const LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
  { value: "conv2nd", label: "Conv 2nd" },
  { value: "ownerFinance", label: "Owner Finance" },
];

export const BUYER_LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
];

export const PAID_BY_OPTIONS = [
  { value: "seller", label: "Seller" },
  { value: "buyer", label: "Buyer" },
  { value: "split", label: "Split" },
];

// ─── Default Buyer Closing Costs ───
export const BUYER_DEFAULTS = {
  conventional: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
  },
  fha: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    upfrontMIP: 1.75,
  },
  va: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 0, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    vaFundingFee: 2.15,
  },
  allCash: {
    prepaid: { monthsInsurance: 0, monthsTaxes: 4, daysInterest: 0 },
    titleFees: { closingFee: 225, taxServiceFee: 0, floodCert: 0, titleEndorsement81: 0 },
    lenderFees: { originationPct: 0, termiteInspection: 70, underwriting: 0, appraisal: 0, creditReport: 0, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 0 },
    docStamps: false, intangibleTax: false, proratedTax: true,
  },
  usda: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    usdaGuaranteeFee: 1.0,
  },
};

// ─── Default Seller Closing Costs ───
export const SELLER_DEFAULTS = {
  titleFees: { closingFee: 450, lienSearch: 125, estoppelFee: 350 },
  otherFees: { recordingFee: 18.50 },
};

// ═══════════════════════════════════════════════════════
// SELLER CALCULATION
// ═══════════════════════════════════════════════════════
export function calcSeller({
  salesPrice, sellerBrokerFee, buyerBrokerFee, buyerBrokerPaidBy,
  sellerConcession, sellerConcessionIsPct, misc, reTax, reTaxIsPct,
  loanBalance, reissueRate
}) {
  if (salesPrice <= 0) return null;

  const sellerCommission = salesPrice * (sellerBrokerFee / 100);
  const buyerCommission = salesPrice * (buyerBrokerFee / 100);
  const buyerCommSellerPays = buyerBrokerPaidBy === "seller" ? buyerCommission
    : buyerBrokerPaidBy === "split" ? buyerCommission / 2 : 0;
  const totalCommission = sellerCommission + buyerCommSellerPays;

  let titlePremium = calcOwnerTitlePremium(salesPrice);
  if (reissueRate) titlePremium *= 0.70;
  const searchFee = calcTitleSearchFee(salesPrice);
  const { closingFee, lienSearch, estoppelFee } = SELLER_DEFAULTS.titleFees;
  const totalTitleFees = titlePremium + searchFee + closingFee + lienSearch + estoppelFee;

  const docStampAmount = Math.ceil(salesPrice / 100) * FL_DOC_STAMP_DEED;
  const recordingFee = SELLER_DEFAULTS.otherFees.recordingFee;
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
}

// ═══════════════════════════════════════════════════════
// BUYER CALCULATION
// ═══════════════════════════════════════════════════════
export function calcBuyer({
  homePrice, downPmt, downPmtIsPct, interestRate, termYears, loanType,
  buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct,
  hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly
}) {
  if (homePrice <= 0) return null;
  const cc = BUYER_DEFAULTS[loanType] || BUYER_DEFAULTS.conventional;

  const downDollar = downPmtIsPct ? homePrice * (downPmt / 100) : downPmt;
  const loanAmount = Math.max(homePrice - downDollar, 0);
  const isAllCash = loanType === "allCash";

  const monthlyRate = interestRate / 100 / 12;
  const numPayments = termYears * 12;
  let monthlyPI = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const annualInsurance = hazardInsIsPct ? homePrice * (hazardIns / 100) : hazardIns;
  const annualTax = reTaxIsPct ? homePrice * (reTax / 100) : reTax;
  const monthlyInsurance = annualInsurance / 12;
  const monthlyTax = annualTax / 12;
  const monthlyHOA = hoaMonthly;

  const prepaidInsurance = monthlyInsurance * cc.prepaid.monthsInsurance;
  const prepaidTax = monthlyTax * cc.prepaid.monthsTaxes;
  const dailyInterest = loanAmount > 0 ? (loanAmount * (interestRate / 100)) / 365 : 0;
  const prepaidInterest = dailyInterest * cc.prepaid.daysInterest;
  const totalPrepaid = prepaidInsurance + prepaidTax + prepaidInterest;

  const ownerTitle = calcOwnerTitlePremium(homePrice);
  const loanTitle = isAllCash ? 0 : calcLoanTitlePremium(loanAmount, homePrice);
  const searchFee = ownerTitle > 0 ? Math.round(ownerTitle * 0.25) : 0;
  const titleEndForm9 = ownerTitle > 0 ? 25 : 0;
  const titleEndForm92 = ownerTitle > 0 ? 25 : 0;
  const titleFeeFixed = cc.titleFees.closingFee + cc.titleFees.taxServiceFee + cc.titleFees.floodCert + cc.titleFees.titleEndorsement81;
  const totalTitleFees = loanTitle + titleFeeFixed + titleEndForm9 + titleEndForm92 + searchFee;

  const originationFee = loanAmount * (cc.lenderFees.originationPct / 100);
  const lenderFeeFixed = cc.lenderFees.termiteInspection + cc.lenderFees.underwriting + cc.lenderFees.appraisal + cc.lenderFees.creditReport + cc.lenderFees.survey;
  const totalLenderFees = originationFee + lenderFeeFixed;

  const docStampAmount = cc.docStamps ? Math.ceil(loanAmount / 100) * FL_DOC_STAMP_NOTE : 0;
  const intangibleAmount = cc.intangibleTax ? Math.ceil(loanAmount / 100) * FL_INTANGIBLE_TAX : 0;
  const proratedTaxAmount = cc.proratedTax ? monthlyTax * 2 : 0;
  const recordingFees = cc.otherFees.recordingDeed + cc.otherFees.recordingMortgage;
  const totalOtherFees = docStampAmount + intangibleAmount + proratedTaxAmount + recordingFees;

  let specialFee = 0, specialFeeLabel = "";
  if (cc.upfrontMIP) { specialFee = loanAmount * (cc.upfrontMIP / 100); specialFeeLabel = "Upfront MIP (FHA)"; }
  if (cc.vaFundingFee) { specialFee = loanAmount * (cc.vaFundingFee / 100); specialFeeLabel = "VA Funding Fee"; }
  if (cc.usdaGuaranteeFee) { specialFee = loanAmount * (cc.usdaGuaranteeFee / 100); specialFeeLabel = "USDA Guarantee Fee"; }

  const brokerDollar = buyerBrokerIsPct ? homePrice * (buyerBrokerFee / 100) : buyerBrokerFee;
  const concessionDollar = sellerConcessionIsPct ? homePrice * (sellerConcession / 100) : sellerConcession;
  const totalClosingCosts = totalPrepaid + totalTitleFees + totalLenderFees + totalOtherFees + specialFee + brokerDollar;
  const bringToClose = downDollar + totalClosingCosts - concessionDollar;
  const monthlyTotal = monthlyPI + monthlyInsurance + monthlyTax + monthlyHOA;

  return {
    loanAmount, downDollar, monthlyPI, monthlyInsurance, monthlyTax, monthlyHOA, monthlyTotal,
    prepaidInsurance, prepaidTax, prepaidInterest, totalPrepaid,
    ownerTitle, loanTitle, searchFee, titleEndForm9, titleEndForm92, titleFeeFixed, totalTitleFees,
    originationFee, lenderFeeFixed, totalLenderFees,
    docStampAmount, intangibleAmount, proratedTaxAmount, recordingFees, totalOtherFees,
    specialFee, specialFeeLabel, brokerDollar, concessionDollar,
    totalClosingCosts, bringToClose, cc,
  };
}
