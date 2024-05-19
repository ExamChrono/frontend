import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDelegueComponent } from './navbar-delegue.component';

describe('NavbarDelegueComponent', () => {
  let component: NavbarDelegueComponent;
  let fixture: ComponentFixture<NavbarDelegueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDelegueComponent]
    });
    fixture = TestBed.createComponent(NavbarDelegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
