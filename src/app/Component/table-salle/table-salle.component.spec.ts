import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSalleComponent } from './table-salle.component';

describe('TableSalleComponent', () => {
  let component: TableSalleComponent;
  let fixture: ComponentFixture<TableSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSalleComponent]
    });
    fixture = TestBed.createComponent(TableSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
