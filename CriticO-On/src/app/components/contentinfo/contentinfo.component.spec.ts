import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentinfoComponent } from './contentinfo.component';

describe('ContentinfoComponent', () => {
  let component: ContentinfoComponent;
  let fixture: ComponentFixture<ContentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
