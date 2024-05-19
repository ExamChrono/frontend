import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPassExamComponent } from './admin-pass-exam.component';

describe('AdminPassExamComponent', () => {
  let component: AdminPassExamComponent;
  let fixture: ComponentFixture<AdminPassExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPassExamComponent]
    });
    fixture = TestBed.createComponent(AdminPassExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
