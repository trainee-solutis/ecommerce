import { Injectable } from '@angular/core';
import { Basket } from 'app/models/basket';
import { Product } from 'app/models/product';
import { environment } from 'environments/environment';
import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  private basket: Basket;

  constructor() {

    this.basket = {
      products: [],
      total: 0,
      shipping: 0,
    };
  }

  private secret = new TextEncoder().encode(
    environment.jwt_secret
  );

  private async generateBasket(): Promise<void> {
    const token = await new jose.SignJWT({basket: this.basket}).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setExpirationTime('2h').sign(this.secret);
    localStorage.setItem('basket', token);
  }

  async getBasket(): Promise<Basket> {
    const token = localStorage.getItem('basket');
    if (!token) {
      this.generateBasket();
      return this.basket;
    }
    const {payload} = await jose.jwtVerify(token, this.secret);
    return this.basket = payload['basket'] as Basket;
  }

  async addProductToBasket(product: Product): Promise<void> {
    await this.getBasket();
    const existProduct = this.basket.products?.find(p => p.product?.id === product.id);
    if (existProduct) {
      existProduct.quantity++;
    } else {
      this.basket.products?.push({
        product,
        quantity: 1,
      });
    }

    this.basket.total += product.prices[0].value;

    await this.generateBasket();
  }

  async removeProductFromBasket(product: Product): Promise<void> {
    await this.getBasket();
    const existProduct = this.basket.products?.find(p => p.product?.id === product.id);
    if (existProduct) {
      if (existProduct.quantity === 1) {
        const index = this.basket.products?.indexOf(existProduct);
        if (index !== undefined && index !== null) {
          this.basket.products?.splice(index, 1);
        }
      } else {
        existProduct.quantity--;
      }
      this.basket.total -= product.prices[0].value;
      await this.generateBasket();
    }
  }

  async getTotalBasket(): Promise<number> {
    await this.getBasket();
    return this.basket.total;
  }

  async getProductList(): Promise<{}> {
    await this.getBasket();
    return this.basket.products;
  }

  async getTotalItemsInBasket(): Promise<number>{
    await this.getBasket();
    let total = 0;
    this.basket.products?.forEach((product) => {
      total += product.quantity;
    });
    return total;
  }

}
