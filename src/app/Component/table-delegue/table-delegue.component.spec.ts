import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDelegueComponent } from './table-delegue.component';

describe('TableDelegueComponent', () => {
  let component: TableDelegueComponent;
  let fixture: ComponentFixture<TableDelegueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDelegueComponent]
    });
    fixture = TestBed.createComponent(TableDelegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
