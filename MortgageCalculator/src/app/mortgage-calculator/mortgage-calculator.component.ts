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
  monthlyPayment: number | null = null;
  mortgageReady: boolean = false;
  errorMessage: string = '';
  submitted: boolean = false;

  calculateMortgage() {
    if (this.validateInputs()) {
      const principal = this.borrowingAmount;
      const annualInterestRate = 0.05; 
      const monthlyInterestRate = annualInterestRate / 12;
      const numberOfPayments = this.repaymentPeriod * 12;

      this.monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      this.mortgageReady = this.isMortgageReady();
      this.submitted = true;
    }
  }

  validateInputs(): boolean {
    if (this.borrowingAmount <= 0 || this.purchasePrice <= 0 || this.repaymentPeriod <= 0 || this.totalHouseholdIncome <= 0 || this.depositAmount < 0 || this.additionalFunding < 0) {
      this.errorMessage = 'Please fill in all required fields with valid values.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  isMortgageReady(): boolean {
    const debtToIncomeRatio = this.borrowingAmount / this.totalHouseholdIncome;
    return debtToIncomeRatio < 4; 
  }
}
