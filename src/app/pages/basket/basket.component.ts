import { Component } from '@angular/core';
import { Product } from 'app/models/product';
import { BasketService } from 'app/services/basket/basket.service';
import { Basket } from 'app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  listaDeProdutos: Basket[] = []
  constructor(private service: BasketService) { }

  product: Product = {
    "id": 1,
    "name": "Pants",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "rate": 3,
    "images": [
      "https://source.unsplash.com/random/?Pants,20",
      "https://source.unsplash.com/random/?Pants,19",
      "https://source.unsplash.com/random/?Pants,12",
      "https://source.unsplash.com/random/?Pants,6"
    ],
    "prices": [
      {
        "type": "default",
        "value": 10,
        "discount": 14
      },
      {
        "type": "pix",
        "value": 4174.95
      }
    ],
    "technicalDescription": {
      "brand": "Hilll, Jaskolski and Emmerich",
      "model": "accusamus",
      "color": "grey",
      "dimensions": "Practical Frozen Keyboard",
      "material": "Metal",
      "weight": "1309",
      "warranty": 0
    },
    "rating": [
      {
        "stars": 5,
        "message": "I&#x27;ll navigate the solid state DNS program, that should monitor the DRAM interface!"
      },
      {
        "stars": 2,
        "message": "parsing the capacitor won&#x27;t do anything, we need to input the auxiliary USB bandwidth!"
      },
      {
        "stars": 3,
        "message": "If we copy the system, we can get to the SCSI alarm through the neural SSL bandwidth!"
      }
    ]
  };

  ngOnInit(): void {

    this.service.getProductList().then((basket) => {
      console.log(basket);
    });

  }
}
