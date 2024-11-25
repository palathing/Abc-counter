import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OrderInquiryComponent } from './order-inquiry/order-inquiry.component';
import { BeverageSelectionComponent } from './beverage-selection/beverage-selection.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewComponent } from './review/review.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OrderInquiryComponent,
    BeverageSelectionComponent,
    OrderPlacementComponent,
    OrderSummaryComponent,
    ReviewComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
