import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelegueComponent } from './admin-delegue.component';

describe('AdminDelegueComponent', () => {
  let component: AdminDelegueComponent;
  let fixture: ComponentFixture<AdminDelegueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDelegueComponent]
    });
    fixture = TestBed.createComponent(AdminDelegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
