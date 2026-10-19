import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function findOverdue(loans:Loan[]): Loan |undefined{
    return loans.find(function(loan:Loan):boolean{
        return loan.overdueDays > 10;
    });
}

const result = findOverdue(loans);
console.log(result);

export{};