import { Component, Input } from '@angular/core';
import { FeedbackService } from '../Services/feedback.service';
import { Review } from '../Services/review.service';

@Component({
  selector: 'app-performance',
  standalone: false,
  
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css'
})
export class PerformanceComponent {

  @Input()message: string = '';   // To display the review message after the button is clicked
  
  goodCount: number = 0;
  averageCount: number = 0;
  poorCount: number = 0;
  performanceMessage: string = '';

  constructor(private reviewService:Review) {}

  ngOnInit(): void {
    // Optionally, you can initialize stats when the component loads
    this.showReviewStats();
  }

  // Fetch and display stats and performance message when button is clicked
  showReviewStats(): void {
    const stats = this.reviewService.getReviewStats();
    this.goodCount = stats.goodCount;
    this.averageCount = stats.averageCount;
    this.poorCount = stats.poorCount;
    this.performanceMessage = this.reviewService.getPerformanceMessage();
  }
}
