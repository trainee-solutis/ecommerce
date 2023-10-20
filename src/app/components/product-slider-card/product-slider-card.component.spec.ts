import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderCardComponent } from './product-slider-card.component';

describe('ProductSliderCardComponent', () => {
  let component: ProductSliderCardComponent;
  let fixture: ComponentFixture<ProductSliderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderCardComponent]
    });
    fixture = TestBed.createComponent(ProductSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
