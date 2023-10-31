import { Component } from '@angular/core';
import { Basket } from 'app/models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  listaDeProdutos: Basket[] = []
}
