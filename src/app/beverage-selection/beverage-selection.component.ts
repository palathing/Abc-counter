import { Component } from '@angular/core';

@Component({
  selector: 'app-beverage-selection',
  standalone: false,
  
  templateUrl: './beverage-selection.component.html',
  styleUrl: './beverage-selection.component.css'
})
export class BeverageSelectionComponent {
  product=[
    {id:1, name:'Lussy', price:150},
    {id:2, name:'Shake', price:170},
    {id:2, name:'Juice', price:100}
  ]

  cart: { name: string, price: number }[] = [];
  addToCart(product: { name: string; price: number }): void {
    this.cart.push(product);
  }
}
