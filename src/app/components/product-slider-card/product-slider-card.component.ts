import { Component, Input, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-slider-card',
  templateUrl: './product-slider-card.component.html',
  styleUrls: ['./product-slider-card.component.css']
})
export class ProductSliderCardComponent implements OnInit {
  
  @Input() product? : Product 
  priceWithDiscounts = 0;
  
  ngOnInit(): void {
    this.product = {
      id:2,
      name:"Gloves",
      description:"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      rate: 3,
      image: "https://picsum.photos/400",
      price: 213.00,
      discount: 11,
      tecnicalDescription:{
        brand: "Berge, Schumm and Schroeder",
        model: "quod",
        color: "purple",
        material: "Metal",
        dimensions: "176cm X 6cm",
        weight: "143 gramas",
        warranty: 13
      }
    }
    this.getPriceWithDiscount();
  }


  private getPriceWithDiscount() {
    const price = this.product?.price ?? 0;
    const discount = this.product?.discount ?? 0;
    this.priceWithDiscounts = price - (price * discount / 100);
  }

  checkValidDiscount(): boolean {
    return !!this.product?.discount;
  }
  
  getRateStar(filed?: boolean): Array<number> {
    let rate = this.product?.rate ?? 0;
    if(rate>5){
      rate=5
    } 
    return filed ? new Array(rate) : new Array(5 - rate);
  }
}
