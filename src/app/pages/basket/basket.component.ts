import { Component } from '@angular/core';
import { Product } from 'app/models/product';
import { BasketService } from 'app/services/basket/basket.service';
import { loadStripe } from '@stripe/stripe-js'
import { Basket } from 'app/models/basket';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket: Basket;

  private loaded: boolean = false;

  constructor(
    private service: BasketService,
    private http: HttpClient
  ) {

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

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.basket.products
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe(environment.key_stripe);
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
