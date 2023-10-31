import { Product } from "./product";

export interface Basket {
  products: {
    product: Product,
    quantity: number,
  }[],
  total: number,
  shipping: number,
}
