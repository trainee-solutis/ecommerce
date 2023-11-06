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
  };

  ngOnInit(): void {
    this.updateBasket();
  }

  updateBasket(){
    this.service.getBasket().then(basket => {
      this.basket = basket;
      this.loaded = true;
    });
  }
  generateInstallments(): number {
    const quantity = this.basket.total[2].installment;

    const result = quantity ? this.basket.total[2].value / quantity : 0;
    return parseFloat(result.toFixed(2))

  }
}
