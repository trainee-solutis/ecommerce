import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "app/models/product";
import { ProductsService } from "app/services/products.service";
import { BreadcrumbService } from "xng-breadcrumb";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {

  private id: number;
  product!: Product;

  button1 = 'Adicionar a sacola';
  button2 = 'Comprar Agora';


  constructor(private route: ActivatedRoute, private productService: ProductsService, private breadcrumbService: BreadcrumbService) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.breadcrumbService.set("/", "Home");
    this.productService.getProduct(this.id).subscribe((product) => {
      this.product = product;
      this.breadcrumbService.set(`product/${this.id}`, this.product.name);
    });
  }
}
