import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-placement',
  standalone: false,
  
  templateUrl: './order-placement.component.html',
  styleUrl: './order-placement.component.css'
})
export class OrderPlacementComponent {
  @Input() cart: { name: string, price: number }[] = [];

  

  place:boolean=true;
  getOrder(){
    this.place=false;
  }

}
