import { Component, OnInit } from "@angular/core";
import { Product } from "app/models/product";
import { ProductsService } from "app/services/products.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]> = new Observable<Product[]>();
  /*
  Para carregar o array de produtos:
  *ngFor="let product of products$ | async"
  */

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
