import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  searchvalue: string='';
  customer:string = '';
  // Update the searchvalue as the user types
changesearchvalue(eventData: Event){
  this.searchvalue=(<HTMLInputElement>eventData.target).value;
  this.customer = this.searchvalue
}

askOrder:boolean=true;
  getOrder(){
    this.askOrder=false;
  }

  today=Date.now()


}
