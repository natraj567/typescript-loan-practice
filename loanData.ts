type Loan = {
    loanId: number;
    customerName: string;
    amount: number;
    status: string;
    creditScore: number;
    city: string;
    overdueDays: number;
    tenureMonths: number;
    loanType: string;
};

const loans: Loan[] = [
    {
        loanId: 101, customerName: "Asha",
        amount: 250000, status: "Approved",
        creditScore: 710, city: "Pune",
        overdueDays: 0, tenureMonths: 24, loanType: "Personal"
    },
    {
        loanId: 102, customerName: "Bharat",
        amount: 450000, status: "Pending",
        creditScore: 680, city: "Mumbai",
        overdueDays: 12, tenureMonths: 36, loanType: "Vehicle"
    },
    {
        loanId: 103, customerName: "Charu",
        amount: 800000, status: "Approved",
        creditScore: 790, city: "Nagpur",
        overdueDays: 0, tenureMonths: 60, loanType: "Home"
    },
    {
        loanId: 104, customerName: "Dev",
        amount: 150000, status: "Rejected",
        creditScore: 590, city: "Pune",
        overdueDays: 45, tenureMonths: 12, loanType: "Personal"
    },
    {
        loanId: 105, customerName: "Esha",
        amount: 600000, status: "Approved",
        creditScore: 740, city: "Mumbai",
        overdueDays: 5, tenureMonths: 48, loanType: "Business"
    },
    {
        loanId: 106, customerName: "Farhan",
        amount: 350000, status: "Pending",
        creditScore: 720, city: "Pune",
        overdueDays: 0, tenureMonths: 24, loanType: "Vehicle"
    },
    {
        loanId: 107, customerName: "Gita",
        amount: 950000, status: "Approved",
        creditScore: 810, city: "Hyderabad",
        overdueDays: 0, tenureMonths: 72, loanType: "Home"
    },
    {
        loanId: 108, customerName: "Hari",
        amount: 500000, status: "Rejected",
        creditScore: 660, city: "Nagpur",
        overdueDays: 20, tenureMonths: 36, loanType: "Business"
    },
    {
        loanId: 109, customerName: "Isha",
        amount: 275000, status: "Approved",
        creditScore: 700, city: "Hyderabad",
        overdueDays: 0, tenureMonths: 18, loanType: "Personal"
    },
    {
        loanId: 110, customerName: "Jay",
        amount: 420000, status: "Pending",
        creditScore: 750, city: "Mumbai",
        overdueDays: 0, tenureMonths: 30, loanType: "Vehicle"
    }
];

export type { Loan };
export { loans };