import { Product } from "app/models/product";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-image-selector",
  templateUrl: "./image-selector.component.html",
  styleUrls: ["./image-selector.component.css"]
})
export class ImageSelectorComponent implements OnInit{

  @Input() product?: Product;
  images: string[] = [];
  mainImage: string = "";

  ngOnInit(): void {
    if (this.product) {
      for(let i = 0; i < 4; i++){
        this.images.push(this.product.image);
      }
      console.log(this.images);
    }

    this.mainImage = this.images[0];
  }

  constructor() {}

  currentIndex = 0;




  changeMainImage(image: string) {
    this.mainImage = image;
  }


}
