import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantComponent } from './admin-etudiant.component';

describe('AdminEtudiantComponent', () => {
  let component: AdminEtudiantComponent;
  let fixture: ComponentFixture<AdminEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
