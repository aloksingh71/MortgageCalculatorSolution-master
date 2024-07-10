
# Mortgage Calculator Application

## Introduction

The Mortgage Calculator is an Angular application designed to help users determine their monthly mortgage payments based on various input parameters such as borrowing amount, purchase price, repayment period, and household income. The application also evaluates whether the user's financial status is strong enough to be considered mortgage-ready.

## Prerequisites

To run this application, you will need:
- Node.js (which includes npm) - download at https://nodejs.org/en/download/
- Angular CLI: Install via npm with the command `npm install -g @angular/cli`

## Installation

Follow these steps to set up the project:

1. Clone the Repository:
   Clone the repository using the following command:
   `git clone [repository-url]`
   Navigate into the project directory:
   `cd MortgageCalculator`

2. Install Dependencies:
   Inside the project directory, install the necessary npm packages with:
   `npm install`

3. Run the Application:
   Start the development server with:
   `ng serve`
   The application will be available at http://localhost:4200.

## Usage

Navigate to http://localhost:4200 in your web browser. Enter the required fields:
- Borrowing Amount
- Purchase Price
- Repayment Period
- Total Household Income
- Deposit Amount (optional)
- Additional Funding (optional)

Submit the form to see your monthly payment calculation and whether you are mortgage-ready based on the debt-to-income ratio.

## Testing

Run the predefined unit tests to verify application integrity:
`ng test`
These tests ensure that the mortgage calculations are accurate and that the application correctly handles input validation and error messaging.

