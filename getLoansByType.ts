import { loans } from "./loanData";
import type{ Loan } from "./loanData";

function getLoansByType(loans:Loan[], loanType: string):Loan[]{
    return loans.filter(function(loan:Loan):boolean{
       return loan.loanType === loanType;
    });
}

const result = getLoansByType(loans, 'Personal');

console.log(result);
export{};