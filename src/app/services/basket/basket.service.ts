import { Injectable } from '@angular/core';
import { Basket } from 'app/models/basket';
import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  basket: Basket;

  constructor() {
    this.basket = {
      quantity: 0,
      total: 0,
      shipping: 0,
    };
  }

  private secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f3'
  );

  async generateBasket(): Promise<void> {
    const token = await new jose.SignJWT({basket: this.basket}).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setExpirationTime('2h').sign(this.secret);
    localStorage.setItem('basket', token);
  }

  async getBasket(): Promise<Basket> {
    const token = localStorage.getItem('basket');
    if (token) {
      const {payload} = await jose.jwtVerify(token, this.secret);
      return this.basket = payload['basket'] as Basket;
    } else {
      this.generateBasket();
      return this.getBasket();
    }
  }



}
