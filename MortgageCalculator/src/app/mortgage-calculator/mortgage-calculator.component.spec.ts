import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculatorComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate mortgage correctly', () => {
    component.borrowingAmount = 300000;
    component.purchasePrice = 356000;
    component.repaymentPeriod = 35;
    component.totalHouseholdIncome = 115000;
    component.depositAmount = 41000;
    component.additionalFunding = 15000;
    component.calculateMortgage();

    expect(component.monthlyPayment).toBeCloseTo(1514.06, 2);
    expect(component.mortgageReady).toBe(true);
  });

  it('should set mortgageReady to false for high debt-to-income ratio', () => {
    component.borrowingAmount = 500000;
    component.purchasePrice = 600000;
    component.repaymentPeriod = 30;
    component.totalHouseholdIncome = 100000;
    component.depositAmount = 50000;
    component.additionalFunding = 20000;
    component.calculateMortgage();

    expect(component.monthlyPayment).toBeTruthy();
    expect(component.mortgageReady).toBe(false);
  });

  it('should show error message for invalid inputs', () => {
    component.borrowingAmount = -300000;
    component.purchasePrice = 356000;
    component.repaymentPeriod = 35;
    component.totalHouseholdIncome = 115000;
    component.depositAmount = 41000;
    component.additionalFunding = 15000;
    component.calculateMortgage();

    expect(component.errorMessage).toBe('Please fill in all required fields with valid values.');
    expect(component.monthlyPayment).toBeNull();
  });
});
