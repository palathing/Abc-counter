import { Injectable } from '@angular/core';

@Injectable()
export class Review{

    // reviewMessage: string = ''; // Holds the message to display
    message:string='';
    // customer_reaction:string = '';
    private feedbackData: string[] = []; // To store feedback (e.g., 'Good', 'Average', 'Poor')

    private feedbackDataKey: string = 'feedbackData'; // Key to store feedback data in localStorage

    constructor() {
        // Load feedback data from localStorage when the service is initialized
        this.loadFeedbackData();
        }
    // Method to set the review message based on the button clicked
    setReview(review: string): void {
        // this.customer_reaction=review;
        console.log(review)
        switch (review) {
            case 'poor':
                this.message = 'We are sorry to hear that you had a poor experience.';
                break;
            case 'Average':
                this.message = 'Thank you for your feedback! We’ll strive to do better.';
                break;
            case 'Good':
                this.message = 'We are thrilled to know you had a great experience!';
                break;
            default:
            // this.reviewMessage = '';
                this.message='';
        }
        this.logFeedback(review);
            
    }

    // Store feedback in localStorage
    private logFeedback(feedback: string): void {
    this.feedbackData.push(feedback);
    this.saveFeedbackData();
  }
    

    // Load feedback data from localStorage
    private loadFeedbackData() {

    if (typeof window !== 'undefined' && window.localStorage) {
        const storedFeedback = localStorage.getItem('feedbackData');
        if (storedFeedback) {
        this.feedbackData = JSON.parse(storedFeedback);
        }
    }
    }


    private saveFeedbackData() {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('feedbackData', JSON.stringify(this.feedbackData));
    } 
    }


    // Log the feedback for an order
    // logFeedback(order: string, feedback: string) {
    // this.feedbackData.push(feedback); // Add new feedback to the data
    // this.saveFeedbackData(); // Save the updated feedback data to localStorage
    // }

    // Get the feedback data (for later use)
    getFeedbackData(): string[] {
    return this.feedbackData;
    }

    // Calculate review statistics: counts of 'Good', 'Average', and 'Poor'
    getReviewStats() {
    let goodCount = 0;
    let averageCount = 0;
    let poorCount = 0;

    this.feedbackData.forEach((feedback) => {
        if (feedback === 'Good') goodCount++;
        else if (feedback === 'Average') averageCount++;
        else if (feedback === 'Poor') poorCount++;
    });

    return {
        goodCount,
        averageCount,
        poorCount,
    };
    }

    // Determine the overall performance message based on reviews
    getPerformanceMessage(): string {
    const stats = this.getReviewStats();
    if (stats.goodCount > stats.poorCount) {
        return 'Excellent performance! Keep it up!';
    } else if (stats.poorCount > stats.goodCount) {
        return 'Needs improvement in some areas.';
    } else {
        return 'Decent performance, but could be better.';
    }
    }


}