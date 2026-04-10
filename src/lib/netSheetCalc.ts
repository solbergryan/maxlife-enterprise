// ═══════════════════════════════════════════════════════
// Florida / Brevard County Closing Cost Calculation Engine
// Ported from net_sheet_calculator/net-sheet-package
// ═══════════════════════════════════════════════════════

export const FL_DOC_STAMP_DEED = 0.70;
export const FL_DOC_STAMP_NOTE = 0.35;
export const FL_INTANGIBLE_TAX = 0.20;
export const FL_TITLE_BASE_PER_1K = 5.75;
export const FL_TITLE_EXCESS_PER_1K = 5.00;

export function calcOwnerTitlePremium(price: number): number {
  if (price <= 0) return 0;
  if (price <= 100000) return (price / 1000) * FL_TITLE_BASE_PER_1K;
  return 100 * FL_TITLE_BASE_PER_1K + ((price - 100000) / 1000) * FL_TITLE_EXCESS_PER_1K;
}

export function calcLoanTitlePremium(loanAmt: number, _price: number): number {
  if (loanAmt <= 0) return 0;
  const loanAsOwner = calcOwnerTitlePremium(loanAmt);
  return Math.round(loanAsOwner * 0.25 * 100) / 100;
}

export function calcTitleSearchFee(price: number): number {
  return Math.round(calcOwnerTitlePremium(price) * 0.25 * 100) / 100;
}

export const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export const LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
  { value: "conv2nd", label: "Conv 2nd" },
  { value: "ownerFinance", label: "Owner Finance" },
] as const;

export const BUYER_LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
] as const;

export const PAID_BY_OPTIONS = [
  { value: "seller", label: "Seller" },
  { value: "buyer", label: "Buyer" },
  { value: "split", label: "Split" },
] as const;

export type PaidBy = "seller" | "buyer" | "split";
export type BuyerLoanType = "conventional" | "fha" | "va" | "allCash" | "usda";

interface BuyerDefault {
  prepaid: { monthsInsurance: number; monthsTaxes: number; daysInterest: number };
  titleFees: { closingFee: number; taxServiceFee: number; floodCert: number; titleEndorsement81: number };
  lenderFees: { originationPct: number; termiteInspection: number; underwriting: number; appraisal: number; creditReport: number; survey: number };
  otherFees: { recordingDeed: number; recordingMortgage: number };
  docStamps: boolean;
  intangibleTax: boolean;
  proratedTax: boolean;
  upfrontMIP?: number;
  vaFundingFee?: number;
  usdaGuaranteeFee?: number;
}

export const BUYER_DEFAULTS: Record<BuyerLoanType, BuyerDefault> = {
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

export const SELLER_DEFAULTS = {
  titleFees: { closingFee: 450, lienSearch: 125, estoppelFee: 350 },
  otherFees: { recordingFee: 18.50 },
};

export interface SellerCalcInput {
  salesPrice: number;
  sellerBrokerFee: number;
  buyerBrokerFee: number;
  buyerBrokerPaidBy: PaidBy;
  sellerConcession: number;
  sellerConcessionIsPct: boolean;
  misc: number;
  reTax: number;
  reTaxIsPct: boolean;
  loanBalance: number;
  reissueRate: boolean;
}

export interface SellerCalcResult {
  sellerCommission: number;
  buyerCommSellerPays: number;
  totalCommission: number;
  titlePremium: number;
  searchFee: number;
  closingFee: number;
  lienSearch: number;
  estoppelFee: number;
  totalTitleFees: number;
  docStampAmount: number;
  recordingFee: number;
  totalOtherFees: number;
  annualTax: number;
  proratedTaxDebit: number;
  concessionDollar: number;
  misc: number;
  totalClosingCosts: number;
  netAtClose: number;
  loanBalance: number;
}

export function calcSeller(i: SellerCalcInput): SellerCalcResult | null {
  if (i.salesPrice <= 0) return null;

  const sellerCommission = i.salesPrice * (i.sellerBrokerFee / 100);
  const buyerCommission = i.salesPrice * (i.buyerBrokerFee / 100);
  const buyerCommSellerPays =
    i.buyerBrokerPaidBy === "seller" ? buyerCommission
    : i.buyerBrokerPaidBy === "split" ? buyerCommission / 2 : 0;
  const totalCommission = sellerCommission + buyerCommSellerPays;

  let titlePremium = calcOwnerTitlePremium(i.salesPrice);
  if (i.reissueRate) titlePremium *= 0.70;
  const searchFee = calcTitleSearchFee(i.salesPrice);
  const { closingFee, lienSearch, estoppelFee } = SELLER_DEFAULTS.titleFees;
  const totalTitleFees = titlePremium + searchFee + closingFee + lienSearch + estoppelFee;

  const docStampAmount = Math.ceil(i.salesPrice / 100) * FL_DOC_STAMP_DEED;
  const recordingFee = SELLER_DEFAULTS.otherFees.recordingFee;
  const totalOtherFees = docStampAmount + recordingFee;

  const annualTax = i.reTaxIsPct ? i.salesPrice * (i.reTax / 100) : i.reTax;
  const proratedTaxDebit = (annualTax / 12) * 4;
  const concessionDollar = i.sellerConcessionIsPct ? i.salesPrice * (i.sellerConcession / 100) : i.sellerConcession;
  const totalClosingCosts = totalTitleFees + totalOtherFees + totalCommission + concessionDollar + i.misc;
  const netAtClose = i.salesPrice - i.loanBalance - proratedTaxDebit - totalClosingCosts;

  return {
    sellerCommission, buyerCommSellerPays, totalCommission,
    titlePremium, searchFee, closingFee, lienSearch, estoppelFee, totalTitleFees,
    docStampAmount, recordingFee, totalOtherFees,
    annualTax, proratedTaxDebit, concessionDollar, misc: i.misc,
    totalClosingCosts, netAtClose, loanBalance: i.loanBalance,
  };
}

export interface BuyerCalcInput {
  homePrice: number;
  downPmt: number;
  downPmtIsPct: boolean;
  interestRate: number;
  termYears: number;
  loanType: BuyerLoanType;
  buyerBrokerFee: number;
  buyerBrokerIsPct: boolean;
  sellerConcession: number;
  sellerConcessionIsPct: boolean;
  hazardIns: number;
  hazardInsIsPct: boolean;
  reTax: number;
  reTaxIsPct: boolean;
  hoaMonthly: number;
}

export interface BuyerCalcResult {
  loanAmount: number;
  downDollar: number;
  monthlyPI: number;
  monthlyInsurance: number;
  monthlyTax: number;
  monthlyHOA: number;
  monthlyTotal: number;
  prepaidInsurance: number;
  prepaidTax: number;
  prepaidInterest: number;
  totalPrepaid: number;
  ownerTitle: number;
  loanTitle: number;
  searchFee: number;
  titleEndForm9: number;
  titleEndForm92: number;
  titleFeeFixed: number;
  totalTitleFees: number;
  originationFee: number;
  lenderFeeFixed: number;
  totalLenderFees: number;
  docStampAmount: number;
  intangibleAmount: number;
  proratedTaxAmount: number;
  recordingFees: number;
  totalOtherFees: number;
  specialFee: number;
  specialFeeLabel: string;
  brokerDollar: number;
  concessionDollar: number;
  totalClosingCosts: number;
  bringToClose: number;
  cc: BuyerDefault;
}

export function calcBuyer(i: BuyerCalcInput): BuyerCalcResult | null {
  if (i.homePrice <= 0) return null;
  const cc = BUYER_DEFAULTS[i.loanType] || BUYER_DEFAULTS.conventional;

  const downDollar = i.downPmtIsPct ? i.homePrice * (i.downPmt / 100) : i.downPmt;
  const loanAmount = Math.max(i.homePrice - downDollar, 0);
  const isAllCash = i.loanType === "allCash";

  const monthlyRate = i.interestRate / 100 / 12;
  const numPayments = i.termYears * 12;
  let monthlyPI = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    monthlyPI =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const annualInsurance = i.hazardInsIsPct ? i.homePrice * (i.hazardIns / 100) : i.hazardIns;
  const annualTax = i.reTaxIsPct ? i.homePrice * (i.reTax / 100) : i.reTax;
  const monthlyInsurance = annualInsurance / 12;
  const monthlyTax = annualTax / 12;
  const monthlyHOA = i.hoaMonthly;

  const prepaidInsurance = monthlyInsurance * cc.prepaid.monthsInsurance;
  const prepaidTax = monthlyTax * cc.prepaid.monthsTaxes;
  const dailyInterest = loanAmount > 0 ? (loanAmount * (i.interestRate / 100)) / 365 : 0;
  const prepaidInterest = dailyInterest * cc.prepaid.daysInterest;
  const totalPrepaid = prepaidInsurance + prepaidTax + prepaidInterest;

  const ownerTitle = calcOwnerTitlePremium(i.homePrice);
  const loanTitle = isAllCash ? 0 : calcLoanTitlePremium(loanAmount, i.homePrice);
  const searchFee = ownerTitle > 0 ? Math.round(ownerTitle * 0.25) : 0;
  const titleEndForm9 = ownerTitle > 0 ? 25 : 0;
  const titleEndForm92 = ownerTitle > 0 ? 25 : 0;
  const titleFeeFixed =
    cc.titleFees.closingFee + cc.titleFees.taxServiceFee + cc.titleFees.floodCert + cc.titleFees.titleEndorsement81;
  const totalTitleFees = loanTitle + titleFeeFixed + titleEndForm9 + titleEndForm92 + searchFee;

  const originationFee = loanAmount * (cc.lenderFees.originationPct / 100);
  const lenderFeeFixed =
    cc.lenderFees.termiteInspection + cc.lenderFees.underwriting + cc.lenderFees.appraisal +
    cc.lenderFees.creditReport + cc.lenderFees.survey;
  const totalLenderFees = originationFee + lenderFeeFixed;

  const docStampAmount = cc.docStamps ? Math.ceil(loanAmount / 100) * FL_DOC_STAMP_NOTE : 0;
  const intangibleAmount = cc.intangibleTax ? Math.ceil(loanAmount / 100) * FL_INTANGIBLE_TAX : 0;
  const proratedTaxAmount = cc.proratedTax ? monthlyTax * 2 : 0;
  const recordingFees = cc.otherFees.recordingDeed + cc.otherFees.recordingMortgage;
  const totalOtherFees = docStampAmount + intangibleAmount + proratedTaxAmount + recordingFees;

  let specialFee = 0;
  let specialFeeLabel = "";
  if (cc.upfrontMIP) { specialFee = loanAmount * (cc.upfrontMIP / 100); specialFeeLabel = "Upfront MIP (FHA)"; }
  if (cc.vaFundingFee) { specialFee = loanAmount * (cc.vaFundingFee / 100); specialFeeLabel = "VA Funding Fee"; }
  if (cc.usdaGuaranteeFee) { specialFee = loanAmount * (cc.usdaGuaranteeFee / 100); specialFeeLabel = "USDA Guarantee Fee"; }

  const brokerDollar = i.buyerBrokerIsPct ? i.homePrice * (i.buyerBrokerFee / 100) : i.buyerBrokerFee;
  const concessionDollar = i.sellerConcessionIsPct ? i.homePrice * (i.sellerConcession / 100) : i.sellerConcession;
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
