import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGroupeComponent } from './table-groupe.component';

describe('TableGroupeComponent', () => {
  let component: TableGroupeComponent;
  let fixture: ComponentFixture<TableGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGroupeComponent]
    });
    fixture = TestBed.createComponent(TableGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
