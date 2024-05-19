import { TestBed } from '@angular/core/testing';

import { SurveilleService } from './surveille.service';

describe('SurveilleService', () => {
  let service: SurveilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
