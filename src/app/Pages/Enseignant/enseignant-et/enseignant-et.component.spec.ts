import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantETComponent } from './enseignant-et.component';

describe('EnseignantETComponent', () => {
  let component: EnseignantETComponent;
  let fixture: ComponentFixture<EnseignantETComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantETComponent]
    });
    fixture = TestBed.createComponent(EnseignantETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
