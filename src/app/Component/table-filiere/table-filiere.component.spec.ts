import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFiliereComponent } from './table-filiere.component';

describe('TableFiliereComponent', () => {
  let component: TableFiliereComponent;
  let fixture: ComponentFixture<TableFiliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFiliereComponent]
    });
    fixture = TestBed.createComponent(TableFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
