import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function findLoanById(loans:Loan[], loanID:number): Loan | undefined{
    return loans.find(function(loan:Loan):boolean{
       return loan.loanId===loanID;
    });
}

const result = findLoanById(loans,101);
console.log(result);
export{};