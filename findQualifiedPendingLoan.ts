import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function findQualifiedPendingLoan(loans:Loan[]): Loan | undefined {
    return loans.find(function(loan:Loan):boolean{
        return loan.status === 'Pending' && loan.creditScore>=700 && loan.overdueDays===0;
    });
    
}

const result = findQualifiedPendingLoan(loans);
console.log(result);
export{};