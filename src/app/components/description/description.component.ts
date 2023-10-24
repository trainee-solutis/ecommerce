import { Input, OnInit, Component } from "@angular/core";
import { Product } from "app/models/product";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css", "../../pages/product/product.component.css"]
})
export class DescriptionComponent implements OnInit {

  @Input() product: Product | undefined;
  constructor() {

  }

  ngOnInit(): void {

  }
}
