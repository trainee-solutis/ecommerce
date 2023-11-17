import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDataPageComponent } from './access-data-page.component';

describe('AccessDataPageComponent', () => {
  let component: AccessDataPageComponent;
  let fixture: ComponentFixture<AccessDataPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessDataPageComponent]
    });
    fixture = TestBed.createComponent(AccessDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
