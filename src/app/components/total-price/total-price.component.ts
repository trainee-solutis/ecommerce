import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Basket } from 'app/models/basket';
import { BasketService } from 'app/services/basket/basket.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent implements OnInit, OnChanges{
  @Input() basket!: Basket;

  private loaded: boolean = false;

  constructor(private service: BasketService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.service.getBasket().then(basket => {
      this.basket = basket;
      this.loaded = true;
    });
  }

  ngOnInit(): void {
  }

  generateInstallments(): number {
    const quantity = this.basket?.total[2].installment;

    const result = quantity ? this.basket.total[2].value / quantity : 0;
    return parseFloat(result.toFixed(2))

  }
}
