import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // private feedbackData: { order: string, feedback: string }[] = [];

  // private reviewStats = {
  //   good: 0,
  //   average: 0,
  //   poor: 0
  // };

  // constructor() { 
  //   // Load data from local storage if available
  //   // this.loadFeedbackData();

  //   // Load data from local storage if available and in the browser environment
  //   if (typeof window !== 'undefined') {
  //     this.loadFeedbackData();
  //   }
  // }

  //  // Load feedback data and stats from local storage
  //  private loadFeedbackData() {
  //   const storedFeedback = localStorage.getItem('feedbackData');
  //   const storedStats = localStorage.getItem('reviewStats');

  //   if (storedFeedback) {
  //     this.feedbackData = JSON.parse(storedFeedback);
  //   }

  //   if (storedStats) {
  //     this.reviewStats = JSON.parse(storedStats);
  //   }
  // }

  // // Method to log feedback for a specific order
  // logFeedback(order: string, feedback: string): void {
  //   this.feedbackData.push({ order, feedback });

  //   // Update review stats based on the feedback
  //   if (feedback.toLowerCase() === 'good') {
  //     this.reviewStats.good++;
  //   } else if (feedback.toLowerCase() === 'average') {
  //     this.reviewStats.average++;
  //   } else if (feedback.toLowerCase() === 'poor') {
  //     this.reviewStats.poor++;
  //   }

  //   // Save updated data to local storage if in browser environment
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('feedbackData', JSON.stringify(this.feedbackData));
  //     localStorage.setItem('reviewStats', JSON.stringify(this.reviewStats));
  //   }
  // }

  // // Method to retrieve the feedback data
  // getFeedbackData(): { order: string, feedback: string }[] {
  //   return this.feedbackData;
  // }

  // // Method to calculate and return review stats
  // getReviewStats(): { good: number, average: number, poor: number } {
  //   return this.reviewStats;
  // }

  // // Method to calculate overall performance message based on review stats
  // getPerformanceMessage(): string {
  //   const totalReviews = this.reviewStats.good + this.reviewStats.average + this.reviewStats.poor;

  //   if (totalReviews === 0) {
  //     return 'No reviews yet.';
  //   }


  //   const performanceScore = (this.reviewStats.good / totalReviews) * 100;

  //   if (performanceScore >= 75) {
  //     return 'Great performance! Keep up the good work!';
  //   } else if (performanceScore >= 50) {
  //     return 'Good performance, but there is room for improvement.';
  //   } else {
  //     return 'Performance needs improvement. Please take feedback seriously.';
  //   }
  // }





  }
