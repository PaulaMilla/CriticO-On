import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpageComponent } from './reviewpage.component';

describe('ReviewpageComponent', () => {
  let component: ReviewpageComponent;
  let fixture: ComponentFixture<ReviewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
