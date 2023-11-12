import { productsShop } from "./productsShop";

export interface shop {
  idShop: number,
  idUser: number,
  arrayCompras: productsShop[]
}
