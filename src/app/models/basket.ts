import { Product } from "./product";

export interface Basket {
  products?:[
    {
      product: Product,
      quantity: number,
    }
  ]
  quantity: number,
  total: number,
  shipping: number,
}
