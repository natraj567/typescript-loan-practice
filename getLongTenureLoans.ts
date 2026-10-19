import { loans } from "./loanData";
import type { Loan } from "./loanData";

function getLongTenureLoans(loans:Loan[]):Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.tenureMonths>=36;
    });
}

const result =  getLongTenureLoans(loans);
console.log(result);