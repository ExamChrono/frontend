import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantToPassExamenComponent } from './add-etudiant-to-pass-examen.component';

describe('AddEtudiantToPassExamenComponent', () => {
  let component: AddEtudiantToPassExamenComponent;
  let fixture: ComponentFixture<AddEtudiantToPassExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEtudiantToPassExamenComponent]
    });
    fixture = TestBed.createComponent(AddEtudiantToPassExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
