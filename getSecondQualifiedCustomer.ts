import { loans } from './loanData.ts';
import type { Loan } from './loanData.ts';

function getSecondQualifiedCustomer(loans: Loan[]): string | undefined {
    const qualifiedLoans = loans.filter(function (loan: Loan): boolean {
        return loan.status === "Approved" && loan.tenureMonths >= 24;
    });

    const secondLoan = qualifiedLoans[1];

    if(secondLoan===undefined){
        return undefined
    }
    return secondLoan.customerName
}
const result = getSecondQualifiedCustomer(loans);
console.log(result);