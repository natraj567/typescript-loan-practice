import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";
function findLongTenureLoan(loans:Loan[]): Loan |undefined{
return loans.find(function(loan:Loan):boolean{
    return loan.tenureMonths>=60;
});
}

const result = findLongTenureLoan(loans);
console.log(result);
export{};