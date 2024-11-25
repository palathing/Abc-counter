import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-inquiry',
  standalone: false,
  
  templateUrl: './order-inquiry.component.html',
  styleUrl: './order-inquiry.component.css'
})
export class OrderInquiryComponent {

  // @Input() customer!:string;
  // @Input() products: any[] = [];

  // selectedProducts: any[] = []; // Array to hold selected products

  // onProductAdded(product: any) {
  //   this.selectedProducts.push(product); // Add the selected product to the order summary
  // }

  @Input() customer: string = '';


}
