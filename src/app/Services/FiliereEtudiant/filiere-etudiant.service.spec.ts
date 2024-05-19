import { TestBed } from '@angular/core/testing';

import { FiliereEtudiantService } from './filiere-etudiant.service';

describe('FiliereEtudiantService', () => {
  let service: FiliereEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiliereEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
