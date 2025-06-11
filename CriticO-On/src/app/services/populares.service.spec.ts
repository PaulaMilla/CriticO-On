import { TestBed } from '@angular/core/testing';

import { PopularesService } from './populares.service';

describe('PopularesService', () => {
  let service: PopularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
