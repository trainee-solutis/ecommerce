import { Component } from '@angular/core';
import { Product } from 'app/models/product';
import { BasketService } from 'app/services/basket/basket.service';
import { Basket } from 'app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket: Basket;

  private loaded: boolean = false;

  constructor(private service: BasketService) {

    this.basket = {
      products: [],
      shipping: 0,
      total: [],
    };

    this.service.getBasket().then(basket => {
      this.basket = basket;
    });

  };

  ngOnInit(): void {
    this.service.getBasket().then(basket => {
      this.basket = basket;
      this.loaded = true;
    });
  }
}
