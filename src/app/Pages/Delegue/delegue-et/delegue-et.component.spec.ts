import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegueETComponent } from './delegue-et.component';

describe('DelegueETComponent', () => {
  let component: DelegueETComponent;
  let fixture: ComponentFixture<DelegueETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelegueETComponent]
    });
    fixture = TestBed.createComponent(DelegueETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
