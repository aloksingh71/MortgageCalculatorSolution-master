import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  borrowingAmount: number = 0;
  purchasePrice: number = 0;
  repaymentPeriod: number = 0;
  totalHouseholdIncome: number = 0;
  depositAmount: number = 0;
  additionalFunding: number = 0;

  displayedBorrowingAmount: number = 0;
  displayedPurchasePrice: number = 0;
  displayedRepaymentPeriod: number = 0;
  displayedTotalHouseholdIncome: number = 0;
  displayedDepositAmount: number = 0;
  displayedAdditionalFunding: number = 0;

  monthlyPayment: number | null = null;
  mortgageReady: boolean = false;
  errorMessage: string = '';
  submitted: boolean = false;

  // Method to calculate the mortgage
  calculateMortgage() {
    if (this.validateInputs()) { // Validate inputs before calculation
      this.displayedBorrowingAmount = this.borrowingAmount;
      this.displayedPurchasePrice = this.purchasePrice;
      this.displayedRepaymentPeriod = this.repaymentPeriod;
      this.displayedTotalHouseholdIncome = this.totalHouseholdIncome;
      this.displayedDepositAmount = this.depositAmount;
      this.displayedAdditionalFunding = this.additionalFunding;

      const principal = this.borrowingAmount;
      const annualInterestRate = 0.05; 
      const monthlyInterestRate = annualInterestRate / 12;
      const numberOfPayments = this.repaymentPeriod * 12;

      // Calculate the monthly payment
      this.monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      this.mortgageReady = this.isMortgageReady();
      this.submitted = true;
    }
  }

  // Method to validate the input fields
  validateInputs(): boolean {
    if (this.borrowingAmount <= 0 || this.purchasePrice <= 0 || this.repaymentPeriod <= 0 || this.totalHouseholdIncome <= 0 || this.depositAmount < 0 || this.additionalFunding < 0) {
      this.errorMessage = 'Please fill in all required fields with valid values.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  // Method to check if the mortgage is ready based on debt-to-income ratio
  isMortgageReady(): boolean {
    const debtToIncomeRatio = this.borrowingAmount / this.totalHouseholdIncome;
    return debtToIncomeRatio < 4; 
  }

  // Method to handle the "Go Back" button click
  goBack() {
    this.submitted = false;
    this.monthlyPayment = null; 
    this.errorMessage = ''; 
  }
}
