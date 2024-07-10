import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  // Set up the test environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MortgageCalculatorComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  });
  // Test case to check if the app component is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Assert that the component instance is created
    expect(app).toBeTruthy();
  });
});
