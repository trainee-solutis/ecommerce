import { Input } from '@angular/core';
import { shop } from './../../models/shop';
import {Component} from '@angular/core';
import { productsShop } from 'app/models/productsShop';


@Component({
  selector: 'app-buy-history',
  templateUrl: './buy-history.component.html',
  styleUrls: ['./buy-history.component.css']
})
export class BuyHistoryComponent  {

  COMPRAS: shop[] = [COMPRA1, COMPRA2]
}

const PRODUTOS_COMPRA1: productsShop[] = [
  {idProduct: 1, name: 'Hydrogen', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 2, name: 'Helium', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 3, name: 'Lithium', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 4, name: 'Hydrogen', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 5, name: 'Helium', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 6, name: 'Lithium', price: 238.85, shipping: new Date('2023-11-10')},
];

const PRODUTOS_COMPRA2: productsShop[] = [
  {idProduct: 4, name: 'Beryllium', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 5, name: 'Boron', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 6, name: 'Carbon', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 7, name: 'Hydrogen', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 8, name: 'Helium', price: 238.85, shipping: new Date('2023-11-10')},
  {idProduct: 9, name: 'Lithium', price: 238.85, shipping: new Date('2023-11-10')},
];


const COMPRA1: shop =  {
  idShop: 1,
  idUser: 1,
  arrayCompras: PRODUTOS_COMPRA1
}

const COMPRA2: shop =  {
  idShop: 2,
  idUser: 1,
  arrayCompras: PRODUTOS_COMPRA2
}






