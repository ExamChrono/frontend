import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDelegueModulesComponent } from './table-delegue-modules.component';

describe('DelegueModulesComponent', () => {
  let component: TableDelegueModulesComponent;
  let fixture: ComponentFixture<TableDelegueModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDelegueModulesComponent]
    });
    fixture = TestBed.createComponent(TableDelegueModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
