import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSurveilleComponent } from './table-surveille.component';

describe('TableSurveilleComponent', () => {
  let component: TableSurveilleComponent;
  let fixture: ComponentFixture<TableSurveilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSurveilleComponent]
    });
    fixture = TestBed.createComponent(TableSurveilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
