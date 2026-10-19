import { loans } from "./loanData";
import type { Loan } from "./loanData";

function getOverdueLoans(loans:Loan[]):Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.overdueDays>0;
    })
}

const result = getOverdueLoans(loans);
console.log(result);
export{};