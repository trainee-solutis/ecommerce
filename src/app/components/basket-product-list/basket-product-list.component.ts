import { ProductsService } from 'app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';


@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent implements OnInit{



  basket: Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(basket => {
      this.basket = basket;
      console.log(this.basket);
    });
  }


  constructor(private productsService: ProductsService){

  }

  value: number = 1;

  increment(){
    this.value++;
  }

  decrement(){
    if(this.value > 1){
      this.value--;
    }
  }

}
