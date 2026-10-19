import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function printAboveAverageLoans(loans: Loan[]): void {

    let totalLoanAmount: number = 0;
    let totalNumberOfLoans: number = 0;
    let averageLoanAmount: number = 0;

    for (const loan of loans) {
        totalLoanAmount += loan.amount
    }
    totalNumberOfLoans = loans.length;
    averageLoanAmount = totalLoanAmount / totalNumberOfLoans;

    loans.forEach(function (loan: Loan) {
        if (loan.amount > averageLoanAmount) {
            console.log(`CustomerName : ${loan.customerName}, Amount : ${loan.amount}`)
        }
    })
}
printAboveAverageLoans(loans);