import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function findFirstCityLoan(loans:Loan[], excludeCity: string): Loan | undefined{
    return loans.find(function(loan:Loan):boolean{
        return loan.city!==excludeCity;
    });

}

const result =  findFirstCityLoan(loans, 'Pune');
console.log(result);
export{};