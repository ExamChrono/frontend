import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFiliereComponent } from './admin-filiere.component';

describe('AdminFiliereComponent', () => {
  let component: AdminFiliereComponent;
  let fixture: ComponentFixture<AdminFiliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFiliereComponent]
    });
    fixture = TestBed.createComponent(AdminFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
