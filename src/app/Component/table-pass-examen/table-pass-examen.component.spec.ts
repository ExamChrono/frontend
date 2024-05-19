import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePassExamenComponent } from './table-pass-examen.component';

describe('TablePassExamenComponent', () => {
  let component: TablePassExamenComponent;
  let fixture: ComponentFixture<TablePassExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePassExamenComponent]
    });
    fixture = TestBed.createComponent(TablePassExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
