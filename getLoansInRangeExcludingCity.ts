import { loans } from "./loanData";
import type{ Loan } from "./loanData";

function getLoansInRangeExcludingCity(loans:Loan[], minAmount:number, maxAmount:number, excludeCity:string):Loan[]{
    return loans.filter(function(loan:Loan):boolean{
        return loan.amount>=minAmount && loan.amount<=maxAmount && loan.city !== excludeCity;
    });
}

const result  = getLoansInRangeExcludingCity(loans, 250000, 600000, 'Mumbai');

console.log(result);