import { TestBed } from '@angular/core/testing';

import { DelegueService } from './delegue.service';

describe('DelegueService', () => {
  let service: DelegueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
