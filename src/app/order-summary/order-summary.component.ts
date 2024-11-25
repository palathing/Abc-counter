import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: false,
  
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  @Input() cart: { name: string, price: number }[] = [];

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  review:boolean=true;
  getReview(){
    this.review=false;
  }
}
