import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasheetComponent } from './datasheet.component';

describe('DatasheetComponent', () => {
  let component: DatasheetComponent;
  let fixture: ComponentFixture<DatasheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatasheetComponent]
    });
    fixture = TestBed.createComponent(DatasheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
