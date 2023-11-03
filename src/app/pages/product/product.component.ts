import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "app/models/product";
import { BasketService } from "app/services/basket/basket.service";
import { ProductsService } from "app/services/products.service";
import { BreadcrumbService } from "xng-breadcrumb";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product!: Product;
  id!: number;

  btnAddToCart = "Adicionar a sacola";
  btnBuy = "Comprar agora";
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private breadcrumbService: BreadcrumbService,
    private basketService: BasketService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.breadcrumbService.set("/", "Home");
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
        this.breadcrumbService.set(`product/${id}`, this.product.name);
      },
      () => this.router.navigate(['/'])
    );
  }

  addToBuy() {
    this.basketService.addProductToBasket(this.product);
    this.router.navigate(['/basket']);
  }

  addToCart(){
    this.btnAddToCart = "Adicionado a sacola!";
    this.basketService.addProductToBasket(this.product);
    setTimeout(() => {
      this.btnAddToCart = "Adicionar a sacola";
    }, 2000);
  }

}
