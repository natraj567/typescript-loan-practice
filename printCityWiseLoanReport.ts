import { loans } from "./loanData.ts";
import type { Loan } from "./loanData.ts";

function printCityWiseLoanReport(loans: Loan[]): void {
    const cities: string[] = [
        "Pune",
        "Mumbai",
        "Nagpur",
        "Hyderabad"
    ];

    // First forEach: loop through cities
    cities.forEach(function (city: string): void {

        console.log(`City: ${city}`);

        // Filter loans for the current city
        const cityLoans = loans.filter(function (loan: Loan) {
            return loan.city === city;
        });

        cityLoans.forEach(function (loan: Loan): void {
            console.log(
                `Customer: ${loan.customerName}, Loan ID: ${loan.loanId}`
            );
        });

    });

}
printCityWiseLoanReport(loans);



