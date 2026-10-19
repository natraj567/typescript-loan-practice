import { loans } from "./loanData";
import type { Loan } from "./loanData";

function getLoansByCities(loans:Loan[]):Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.city === 'Mumbai' || loan.city === 'Hyderabad';
    });
}

const result = getLoansByCities(loans);
console.log(result);