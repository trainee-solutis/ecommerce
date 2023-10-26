import { Component, Input, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "app/models/product";

@Component({
  selector: "app-product-slider-card",
  templateUrl: "./product-slider-card.component.html",
  styleUrls: ["./product-slider-card.component.css"]
})
export class ProductSliderCardComponent implements OnInit {

  @Input() product? : Product;
  pricePix!: number;
  priceDefault!: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.priceDefault = this.product?.prices[0].value ?? 0;
    this.pricePix = this.product?.prices[1].value ?? 0;
  }

  getRateStar(filed?: boolean): Array<number> {
    let rate = this.product?.rate ?? 0;
    if(rate>5){
      rate=5;
    }
    return filed ? new Array(rate) : new Array(5 - rate);
  }

  getInstalment(): string {
    let message = "";
    this.product?.prices.forEach((price) => {
      if (price.type === "cartão de crédito") {
        console.log("entrei");

        message = `ou ${price.installment}x de R$${price.value.toFixed(2)}`;
      }
    });
    return message || "";
  }

  redirectToProduct(): void {
    this.router.navigate(["/product", this.product?.id]);
  }

}
