import { TestBed } from '@angular/core/testing';

import { PassEsamenEtudiantService } from './pass-esamen-etudiant.service';

describe('PassEsamenEtudiantService', () => {
  let service: PassEsamenEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassEsamenEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
