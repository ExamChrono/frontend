import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSurveilleComponent } from './validation-surveille.component';

describe('ValidationSurveilleComponent', () => {
  let component: ValidationSurveilleComponent;
  let fixture: ComponentFixture<ValidationSurveilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationSurveilleComponent]
    });
    fixture = TestBed.createComponent(ValidationSurveilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
