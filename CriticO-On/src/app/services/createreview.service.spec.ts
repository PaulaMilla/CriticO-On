import { TestBed } from '@angular/core/testing';

import { CreatereviewService } from './createreview.service';

describe('CreatereviewService', () => {
  let service: CreatereviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatereviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
