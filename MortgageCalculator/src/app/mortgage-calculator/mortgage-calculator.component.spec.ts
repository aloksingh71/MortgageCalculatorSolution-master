import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;
  // Set up the test environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculatorComponent],
      imports: [FormsModule]
    }).compileComponents();
  });
  // Initialize the component and fixture before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Test case to check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is created
    expect(component).toBeTruthy();
  });
  // Test case to check if the mortgage calculation is correct
  it('should calculate mortgage correctly', () => {
    // Set input values for the mortgage calculation
    component.borrowingAmount = 300000;
    component.purchasePrice = 356000;
    component.repaymentPeriod = 35;
    component.totalHouseholdIncome = 115000;
    component.depositAmount = 41000;
    component.additionalFunding = 15000;
    component.calculateMortgage();

    // Assert the calculated monthly payment
    expect(component.monthlyPayment).toBeCloseTo(1514.06, 2);

    // Assert the mortgage readiness
    expect(component.mortgageReady).toBe(true);
  });

  // Test case to check if the mortgageReady is set to false for high debt-to-income ratio
  it('should set mortgageReady to false for high debt-to-income ratio', () => {
    // Set input values for the mortgage calculation
    component.borrowingAmount = 500000;
    component.purchasePrice = 600000;
    component.repaymentPeriod = 30;
    component.totalHouseholdIncome = 100000;
    component.depositAmount = 50000;
    component.additionalFunding = 20000;
    component.calculateMortgage();

    // Assert the calculated monthly payment
    expect(component.monthlyPayment).toBeTruthy();

    // Assert the mortgage readiness
    expect(component.mortgageReady).toBe(false);
  });
  // Test case to check if the error message is shown for invalid inputs
  it('should show error message for invalid inputs', () => {
    // Set invalid input values
    component.borrowingAmount = -300000;
    component.purchasePrice = 356000;
    component.repaymentPeriod = 35;
    component.totalHouseholdIncome = 115000;
    component.depositAmount = 41000;
    component.additionalFunding = 15000;
    component.calculateMortgage();
    // Assert the error message
    expect(component.errorMessage).toBe('Please fill in all required fields with valid values.');
    expect(component.monthlyPayment).toBeNull();
  });
});
