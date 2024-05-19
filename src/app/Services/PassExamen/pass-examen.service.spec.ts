import { TestBed } from '@angular/core/testing';

import { PassExamenService } from './pass-examen.service';

describe('PassExamenService', () => {
  let service: PassExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
