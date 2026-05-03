// Pure deal analyzer math — no React, no DOM dependencies
// ── Math helpers ─────────────────────────────────────────────────────
function calcMonthlyPayment(principal, annualRate, years) {
    if (principal <= 0 || annualRate <= 0 || years <= 0)
        return 0;
    const r = annualRate / 12;
    const n = years * 12;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}
function calcLoanBalance(principal, annualRate, totalYears, afterYears) {
    if (principal <= 0 || annualRate <= 0 || totalYears <= 0)
        return 0;
    const r = annualRate / 12;
    const n = totalYears * 12;
    const k = afterYears * 12;
    const pmt = calcMonthlyPayment(principal, annualRate, totalYears);
    return principal * Math.pow(1 + r, k) - pmt * ((Math.pow(1 + r, k) - 1) / r);
}
function calcIRR(cashFlows, guess = 0.1) {
    let rate = guess;
    for (let iter = 0; iter < 200; iter++) {
        let npv = 0, dnpv = 0;
        for (let t = 0; t < cashFlows.length; t++) {
            const d = Math.pow(1 + rate, t);
            npv += cashFlows[t] / d;
            dnpv -= t * cashFlows[t] / (d * (1 + rate));
        }
        if (Math.abs(dnpv) < 1e-12)
            break;
        const newRate = rate - npv / dnpv;
        if (Math.abs(newRate - rate) < 1e-9)
            return newRate;
        rate = newRate;
    }
    return rate;
}
// ── Scoring ──────────────────────────────────────────────────────────
function scoreIRR(irr) {
    if (irr >= 0.15)
        return { stars: 5, grade: "excellent", label: "Exceptional return" };
    if (irr >= 0.12)
        return { stars: 4, grade: "excellent", label: "Strong return" };
    if (irr >= 0.09)
        return { stars: 3, grade: "good", label: "Solid return" };
    if (irr >= 0.06)
        return { stars: 2, grade: "fair", label: "Below target" };
    return { stars: 1, grade: "fail", label: "Insufficient return" };
}
function scoreDSCR(dscr) {
    if (dscr >= 1.5)
        return { stars: 5, grade: "excellent", label: "Very strong coverage" };
    if (dscr >= 1.35)
        return { stars: 4, grade: "good", label: "Strong coverage" };
    if (dscr >= 1.25)
        return { stars: 3, grade: "good", label: "Meets lender minimum" };
    if (dscr >= 1.10)
        return { stars: 2, grade: "marginal", label: "Below lender minimum" };
    return { stars: 1, grade: "fail", label: "Negative cash flow risk" };
}
function scoreCoC(coc) {
    if (coc >= 0.10)
        return { stars: 5, grade: "excellent", label: "Excellent cash yield" };
    if (coc >= 0.08)
        return { stars: 4, grade: "good", label: "Strong cash yield" };
    if (coc >= 0.05)
        return { stars: 3, grade: "good", label: "Acceptable cash yield" };
    if (coc >= 0.02)
        return { stars: 2, grade: "fair", label: "Low cash yield" };
    return { stars: 1, grade: "fail", label: "Near zero cash flow" };
}
function scoreEM(em) {
    if (em >= 3.0)
        return { stars: 5, grade: "excellent", label: "Exceptional wealth creation" };
    if (em >= 2.0)
        return { stars: 4, grade: "excellent", label: "Doubled your equity" };
    if (em >= 1.5)
        return { stars: 3, grade: "good", label: "Solid equity growth" };
    if (em >= 1.2)
        return { stars: 2, grade: "fair", label: "Modest equity growth" };
    return { stars: 1, grade: "fail", label: "Minimal or negative return" };
}
function overallGrade(irr, dscr, coc, em) {
    const avg = (scoreIRR(irr).stars + scoreDSCR(dscr).stars + scoreCoC(coc).stars + scoreEM(em).stars) / 4;
    if (avg >= 4.5)
        return "A+";
    if (avg >= 4.0)
        return "A";
    if (avg >= 3.5)
        return "A-";
    if (avg >= 3.0)
        return "B+";
    if (avg >= 2.5)
        return "B";
    if (avg >= 2.0)
        return "B-";
    if (avg >= 1.5)
        return "C";
    return "D";
}
// ── Main calculation ─────────────────────────────────────────────────
export function analyzeDeal(raw) {
    const price = raw.purchasePrice;
    if (!price || price <= 0)
        return { error: "purchasePrice is required and must be > 0" };
    const holdYrs = Math.max(1, Math.round(raw.holdPeriod ?? 10));
    const rateAnn = (raw.interestRate ?? 6.75) / 100;
    const downPct = (raw.downPaymentPct ?? 25) / 100;
    const amortYrs = raw.amortization ?? 30;
    const vacRate = (raw.vacancyRate ?? 0) / 100;
    const rentGrowth = (raw.rentGrowth ?? 2.0) / 100;
    const exitSpread = (raw.exitCapSpread ?? 0.5) / 100;
    const origFee = (raw.loanOrigFee ?? 1.0) / 100;
    const closingCosts = raw.closingCosts ?? 15000;
    const units = Math.max(1, Math.round(raw.units ?? 1));
    // Year 1 gross potential rent
    let gpr;
    if (raw.assetType === "NNN") {
        gpr = raw.annualRent ?? 0;
    }
    else {
        gpr = (raw.monthlyRentPerUnit ?? 0) * 12 * units;
    }
    if (gpr <= 0)
        return { error: "Annual rent / monthly rent per unit is required and must be > 0" };
    const egi1 = gpr * (1 - vacRate);
    // Operating expenses
    let opex1;
    if (raw.assetType === "NNN") {
        opex1 = 0;
    }
    else if (raw.opexRatio) {
        opex1 = egi1 * (raw.opexRatio / 100);
    }
    else {
        opex1 =
            (raw.propertyTaxes ?? 0) +
                (raw.insurance ?? 0) +
                (raw.repairs ?? 0) +
                egi1 * ((raw.mgmtPct ?? 8) / 100);
    }
    const noi1 = egi1 - opex1;
    const entranceCap = noi1 / price;
    const exitCap = entranceCap + exitSpread;
    // Financing
    const loanAmount = price * (1 - downPct);
    const downPayment = price * downPct;
    const totalEquity = downPayment + closingCosts + loanAmount * origFee;
    const monthlyPmt = calcMonthlyPayment(loanAmount, rateAnn, amortYrs);
    const annualDS = monthlyPmt * 12;
    // Year 1 cash flow
    const cf1 = noi1 - annualDS;
    const dscr = annualDS > 0 ? noi1 / annualDS : 0;
    const coc1 = totalEquity > 0 ? cf1 / totalEquity : 0;
    const yoc = noi1 / price;
    // Year-by-year projection
    const irfCashFlows = [-totalEquity];
    const yearlyData = [];
    let totalNOI = 0, totalCF = 0, cumCF = 0;
    let finalResult = null;
    for (let yr = 1; yr <= holdYrs; yr++) {
        const noiYr = noi1 * Math.pow(1 + rentGrowth, yr - 1);
        const cfYr = noiYr - annualDS;
        totalNOI += noiYr;
        totalCF += cfYr;
        cumCF += cfYr;
        const loanBal = Math.max(0, calcLoanBalance(loanAmount, rateAnn, amortYrs, yr));
        const paydown = loanAmount - loanBal;
        const exitNOIYr = noi1 * Math.pow(1 + rentGrowth, yr);
        const appreciatedValue = exitCap > 0 ? exitNOIYr / exitCap : price;
        const appreciation = Math.max(0, appreciatedValue - price);
        const equityBuildup = paydown + cumCF + appreciation;
        yearlyData.push({
            year: yr,
            noi: noiYr,
            debtService: annualDS,
            cashFlow: cfYr,
            cumulativeCF: cumCF,
            loanBalance: loanBal,
            equityBuildup,
            appreciation,
            loanPaydown: paydown,
        });
        if (yr < holdYrs) {
            irfCashFlows.push(cfYr);
        }
        else {
            const exitNOI = noi1 * Math.pow(1 + rentGrowth, holdYrs);
            const exitValue = exitCap > 0 ? exitNOI / exitCap : 0;
            const sellingCosts = exitValue * 0.03;
            const loanPayoff = calcLoanBalance(loanAmount, rateAnn, amortYrs, holdYrs);
            const netSaleProceeds = exitValue - sellingCosts - Math.max(0, loanPayoff);
            irfCashFlows.push(cfYr + netSaleProceeds);
            const totalReturn = totalCF + netSaleProceeds;
            const em = totalEquity > 0 ? totalReturn / totalEquity : 0;
            const avgCoC = totalEquity > 0 ? (totalCF / holdYrs) / totalEquity : 0;
            let irr = 0;
            try {
                irr = calcIRR(irfCashFlows);
            }
            catch {
                irr = 0;
            }
            if (!isFinite(irr) || isNaN(irr))
                irr = 0;
            // Suggested offer backed into 1.25x DSCR
            const maxADS = noi1 / 1.25;
            const maxMonthly = maxADS / 12;
            let suggestedLoan = 0;
            if (rateAnn > 0 && amortYrs > 0) {
                const r = rateAnn / 12;
                const n = amortYrs * 12;
                suggestedLoan = maxMonthly * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
            }
            const suggestedPrice = suggestedLoan / (1 - downPct);
            const discount = price > 0 ? (price - suggestedPrice) / price : 0;
            const sugDown = suggestedPrice * downPct;
            const sugLoan = suggestedPrice * (1 - downPct);
            const sugEquity = sugDown + closingCosts + sugLoan * origFee;
            const sugMonthlyPmt = calcMonthlyPayment(sugLoan, rateAnn, amortYrs);
            const sugADS = sugMonthlyPmt * 12;
            const sugDSCR = sugADS > 0 ? noi1 / sugADS : 0;
            const sugCap = suggestedPrice > 0 ? noi1 / suggestedPrice : 0;
            const sugCF1 = noi1 - sugADS;
            const sugCoC1 = sugEquity > 0 ? sugCF1 / sugEquity : 0;
            finalResult = {
                assetType: raw.assetType,
                purchasePrice: price,
                grossPotentialRent: gpr,
                effectiveGrossIncome: egi1,
                operatingExpenses: opex1,
                noi: noi1,
                entranceCap,
                exitCap,
                yieldOnCost: yoc,
                loanAmount,
                downPayment,
                totalEquityInvested: totalEquity,
                monthlyPayment: monthlyPmt,
                annualDebtService: annualDS,
                dscr,
                yearOneCashFlow: cf1,
                yearOneCashOnCash: coc1,
                holdYears: holdYrs,
                totalNOI,
                totalCashFlow: totalCF,
                avgCashOnCash: avgCoC,
                exitNOI,
                exitValue,
                sellingCosts,
                loanPayoff,
                netSaleProceeds,
                totalReturn,
                irr,
                equityMultiple: em,
                grade: overallGrade(irr, dscr, avgCoC, em),
                scores: {
                    irr: scoreIRR(irr),
                    dscr: scoreDSCR(dscr),
                    coc: scoreCoC(avgCoC),
                    em: scoreEM(em),
                },
                suggestedOfferPrice: suggestedPrice,
                discountFromAsk: discount,
                suggestedMetrics: {
                    price: suggestedPrice,
                    downPayment: sugDown,
                    loanAmount: sugLoan,
                    equity: sugEquity,
                    monthlyPayment: sugMonthlyPmt,
                    annualDebtService: sugADS,
                    dscr: sugDSCR,
                    entranceCap: sugCap,
                    cashOnCash: sugCoC1,
                    cashFlow: sugCF1,
                },
                yearlyData,
            };
        }
    }
    return finalResult ?? { error: "Calculation failed — check inputs" };
}
