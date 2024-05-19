import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantValidationSurveilleComponent } from './enseignant-validation-surveille.component';

describe('EnseignantHomeComponent', () => {
  let component: EnseignantValidationSurveilleComponent;
  let fixture: ComponentFixture<EnseignantValidationSurveilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantValidationSurveilleComponent]
    });
    fixture = TestBed.createComponent(EnseignantValidationSurveilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
