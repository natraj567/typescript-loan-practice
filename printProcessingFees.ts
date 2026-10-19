import { loans } from "./loanData";
import type { Loan } from "./loanData";

function printProcessingFees(loans:Loan, feePercentage:number): void{
    const loanAmount:number = loans.amount;
    const percent:number = feePercentage/100;
    const processingFees = loanAmount * percent;
    
    console.log(`${loans.customerName} - `, processingFees);
}

loans.forEach(function(loan:Loan){
    printProcessingFees(loan,2)
})