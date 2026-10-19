import { loans } from "./loanData";
import type { Loan } from "./loanData";

function printOverdueWarnings(loans: Loan): void {
    if (loans.overdueDays > 0) {
        console.log(`${loans.customerName} - ${loans.overdueDays} overdue days`);
    }
}

loans.forEach(function(loan:Loan){
    printOverdueWarnings(loan);
})

export{};