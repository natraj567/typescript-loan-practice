import { loans } from "./loanData";
import type{ Loan } from "./loanData";

function getActiveApplications(loans:Loan[]): Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.status !== 'Rejected' && loan.status !== 'Pending';
    });
}

const result = getActiveApplications(loans);
console.log(result);
export{};