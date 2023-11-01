import { Component,Input, OnInit } from "@angular/core";
import { Product } from "app/models/product";


@Component({
  selector: "app-product-slider",
  templateUrl: "./product-slider.component.html",
  styleUrls: ["./product-slider.component.css"]

})

export class ProductSliderComponent implements OnInit {
  @Input() title: string = "";
  @Input() products?: Product[] = [];

  constructor() { }
  ngOnInit(): void {

  }
}
