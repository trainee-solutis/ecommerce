import { Component, Input, OnInit} from "@angular/core";
import { Product } from "app/models/product";

@Component({
  selector: "app-product-slider-card",
  templateUrl: "./product-slider-card.component.html",
  styleUrls: ["./product-slider-card.component.css"]
})
export class ProductSliderCardComponent implements OnInit {

  @Input() product? : Product;
  priceWithDiscounts = "0";

  ngOnInit(): void {
    this.getPriceWithDiscount();
  }


  private getPriceWithDiscount() {
    const price = this.product?.price ?? 0;
    const discount = this.product?.discount ?? 0;
    this.priceWithDiscounts = (price - (price * discount / 100)).toLocaleString("pt-BR", {minimumFractionDigits: 2});
  }

  checkValidDiscount(): boolean {
    return !!this.product?.discount;
  }

  getRateStar(filed?: boolean): Array<number> {
    let rate = this.product?.rate ?? 0;
    if(rate>5){
      rate=5;
    }
    return filed ? new Array(rate) : new Array(5 - rate);
  }
}
