import { Product } from "./product";

export interface Basket {
  products: {
    product: Product,
    quantity: number,
  }[],
  total: { type: string; value: number; installment?: number }[],
  shipping: number,
}
