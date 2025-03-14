import { CurrencyPipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // Code with signal directive
  results = input<{ 
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest:  number;
    totalAmountInvested: number; 
  }[]>();
}
