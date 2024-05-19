import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupeComponent } from './admin-groupe.component';

describe('AdminGroupeComponent', () => {
  let component: AdminGroupeComponent;
  let fixture: ComponentFixture<AdminGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGroupeComponent]
    });
    fixture = TestBed.createComponent(AdminGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
