import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {

  private id: number;
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe((product) => {
      this.product = product;
    });
  }

}
