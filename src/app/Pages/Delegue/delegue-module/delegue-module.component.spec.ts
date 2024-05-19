import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegueModuleComponent } from './delegue-module.component';

describe('DelegueHomeComponent', () => {
  let component: DelegueModuleComponent;
  let fixture: ComponentFixture<DelegueModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelegueModuleComponent]
    });
    fixture = TestBed.createComponent(DelegueModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
