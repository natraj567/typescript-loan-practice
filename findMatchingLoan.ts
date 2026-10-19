import {loans} from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function findMatchingLoan(loans:Loan[], loanType:string, minAmount:number, maxAmount:number): Loan | undefined{
    return loans.find(function(loan:Loan):boolean{
        return loan.loanType === loanType && loan.amount>=minAmount && loan.amount<=maxAmount;
    });
}

const result = findMatchingLoan(loans,'Vehicle', 300000, 500000);
console.log(result);
export{};