import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbCarouselConfig, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { Product } from "app/models/product";
import { ProductsService } from "app/services/products.service";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [NgbCarouselModule, NgIf, FormsModule],
  providers: [NgbCarouselConfig],
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit{

  products!: Array<Product>;
  images: string[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      products.forEach((product) => {
        this.images.push(product.images[0]);
      });
    });

  }


  constructor(private productsService: ProductsService ,config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
  }
}
