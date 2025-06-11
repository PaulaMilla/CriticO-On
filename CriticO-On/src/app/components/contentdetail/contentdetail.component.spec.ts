import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdetailComponent } from './contentdetail.component';

describe('ContentdetailComponent', () => {
  let component: ContentdetailComponent;
  let fixture: ComponentFixture<ContentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
