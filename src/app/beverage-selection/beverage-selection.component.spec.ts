import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageSelectionComponent } from './beverage-selection.component';

describe('BeverageSelectionComponent', () => {
  let component: BeverageSelectionComponent;
  let fixture: ComponentFixture<BeverageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeverageSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
