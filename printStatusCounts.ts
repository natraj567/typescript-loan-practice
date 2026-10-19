import { loans } from "./loanData";
import type { Loan } from "./loanData";

function printStatusCounts(loans: Loan[]): void {
    let approvedCount: number = 0;
    let pendingCount: number = 0;
    let rejectedCount: number = 0;

    loans.forEach(function (loan: Loan): void {
        if (loan.status === 'Approved') {
            approvedCount++;
        } else if (loan.status === 'Pending') {
            pendingCount++;
        } else {
            rejectedCount++;
        }
    });

    console.log(`Approved: ${approvedCount}`);
    console.log(`Pending: ${pendingCount}`);
    console.log(`Rejected: ${rejectedCount}`);
}

printStatusCounts(loans);