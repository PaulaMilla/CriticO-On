import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontentComponent } from './allcontent.component';

describe('AllcontentComponent', () => {
  let component: AllcontentComponent;
  let fixture: ComponentFixture<AllcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
