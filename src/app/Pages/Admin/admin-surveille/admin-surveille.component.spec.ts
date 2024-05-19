import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSurveilleComponent } from './admin-surveille.component';

describe('AdminSurveilleComponent', () => {
  let component: AdminSurveilleComponent;
  let fixture: ComponentFixture<AdminSurveilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSurveilleComponent]
    });
    fixture = TestBed.createComponent(AdminSurveilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
