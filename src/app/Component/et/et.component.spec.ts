import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETComponent } from './et.component';

describe('ETComponent', () => {
  let component: ETComponent;
  let fixture: ComponentFixture<ETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ETComponent]
    });
    fixture = TestBed.createComponent(ETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
