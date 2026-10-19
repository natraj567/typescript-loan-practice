import { loans } from "./loanData";
import type { Loan } from "./loanData";

function getLowRiskLoans(loans:Loan[]): Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.creditScore>=700 && loan.overdueDays === 0 && loan.tenureMonths>=24;
    });
}

const result = getLowRiskLoans(loans);
console.log(result);