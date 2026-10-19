import { loans } from "./loanData";
import type { Loan } from "./loanData";

function printLoanReceipts(loans:Loan):void{
    console.log(`LoanId: ${loans.loanId}, CustomerName: ${loans.customerName}, LoanType: ${loans.loanType}`)
}

loans.forEach(function(loan:Loan){
    printLoanReceipts(loan);
});

export{};