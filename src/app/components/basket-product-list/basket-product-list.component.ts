import { ProductsService } from 'app/services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'app/models/product';
import { Basket } from 'app/models/basket';
import { BasketService } from 'app/services/basket/basket.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-basket-product-list',
  templateUrl: './basket-product-list.component.html',
  styleUrls: ['./basket-product-list.component.css']
})
export class BasketProductListComponent implements OnInit{
  @Output() changeProductQuantity: EventEmitter<void> = new EventEmitter<void>();
  basket!: Basket;

  constructor(private service: BasketService){
  }

  ngOnInit(): void {
    this.service.getBasket().then(basket => {
      this.basket = basket;
    });
  }

  increment(product: Product){
    const basketProduct = this.basket.products?.find(p => p.product?.id === product.id);
    if (basketProduct) {
      basketProduct.quantity++;
    }
    this.service.addProductToBasket(product);
    this.changeProductQuantity.emit();
  }

  decrement(product: Product){
    const basketProduct = this.basket.products?.find(p => p.product?.id === product.id);
    if (basketProduct && basketProduct.quantity > 1) {
      basketProduct.quantity--;
      this.service.removeProductFromBasket(product);
    }
    this.changeProductQuantity.emit();
  }

  remove(product: Product){
    this.service.deleteProductFromBasket(product);
    window.location.reload();
    this.changeProductQuantity.emit();
  }

}
