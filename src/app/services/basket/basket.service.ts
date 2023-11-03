import { Injectable } from '@angular/core';
import { Basket } from 'app/models/basket';
import { Product } from 'app/models/product';
import { environment } from 'environments/environment';
import * as jose from 'jose';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  private basket: Basket;

  private _quantity = new BehaviorSubject<number>(0);
  quantity$ = this._quantity.asObservable();

  constructor() {

    this.basket = {
      products: [],
      shipping: 0,
      total: [],
    };

    this.getTotalItemsInBasket().then(total => {
      this._quantity.next(total);
    });
  }

  private secret = new TextEncoder().encode(
    environment.jwt_secret
  );

  private async generateBasket(): Promise<void> {
    const token = await new jose.SignJWT({basket: this.basket}).setProtectedHeader({alg: 'HS256'}).setIssuedAt().setExpirationTime('3h').sign(this.secret);
    localStorage.setItem('basket', token);
  }

  async getBasket(): Promise<Basket> {
    const token = localStorage.getItem('basket');
    if (!token) {
      await this.generateBasket();
    } else {
      try {
        const { payload } = await jose.jwtVerify(token, this.secret);
        this.basket = payload['basket'] as Basket;
        await this.generateBasket();
      } catch (error) {
        await this.generateBasket();
      }
    }
    return this.basket;
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

    this._quantity.next(this._quantity.value + 1);

    await this.generateBasket();

    await this.generatePaymentMethods();
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

      await this.generateBasket();

      await this.generatePaymentMethods();
    }
  }

  async getTotalBasket(): Promise<number> {
    await this.getBasket();
    let total = 0;
    this.basket.products?.forEach((product) => {
      product.product.prices?.forEach((price) => {
        total += price.value * product.quantity;
      });
    });
    return total;
  }

  async generatePaymentMethods(): Promise<void> {
    await this.getBasket();
    const paymentMethods: { type: string; value: number; installment?: number }[] = [];

    this.basket.products?.forEach((product) => {
      product.product.prices?.forEach((price) => {
        const paymentMethod = paymentMethods.find((p) => p.type === price.type);

        if (paymentMethod) {
          paymentMethod.value += price.value * product.quantity;

          if (price.installment && (!paymentMethod.installment || paymentMethod.installment > price.installment)) {
            paymentMethod.installment = price.installment;
          }
        } else {
          paymentMethods.push({
            type: price.type,
            value: price.value * product.quantity,
            installment: price.installment
          });
        }
      });
    });

    this.basket.total = paymentMethods;

    await this.generateBasket();
  }

  async getTotalItemsInBasket(): Promise<number>{
    await this.getBasket();
    let total = 0;
    this.basket.products?.forEach((product) => {
      total += product.quantity;
    });
    return total;
  }

  async getProducts(): Promise<Product[]> {
    await this.getBasket();
    return this.basket.products?.map((p) => p.product) ?? [];
  }
}
