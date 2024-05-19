import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantETComponent } from './etudiant-e-t.component';

describe('EtudiantHomeComponent', () => {
  let component: EtudiantETComponent;
  let fixture: ComponentFixture<EtudiantETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantETComponent]
    });
    fixture = TestBed.createComponent(EtudiantETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
