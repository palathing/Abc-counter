import { Component, OnInit } from '@angular/core';
import { Review } from '../Services/review.service';
// import { FeedbackService } from '../services/feedback.service';
@Component({
  selector: 'app-review',
  standalone: false,
  
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',

  

})
export class ReviewComponent implements OnInit {

  message: string = ''; 

  isSubmitted: boolean = true; 

  constructor(private reviewService:Review){}


  getReview(review:string): void{
    // this.isSubmitted = false; // Hide buttons after clicking
    this.reviewService.setReview(review);
    this.message=this.reviewService.message;

    this.isSubmitted=true;
  }

  
  ngOnInit(){
    this.message=this.reviewService.message;
  }
  showPerformance: boolean = true;

  perf:boolean=true;
  performance(){
    this.perf=false;
  }
  /**
   * Toggles the display of the performance component.
   */
 

}
