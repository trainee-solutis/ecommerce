import { NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { Product, Rating } from "app/models/product";

@Component({
  selector: "app-stars",
  standalone: true,
  imports: [NgbRatingModule, NgIf],
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {

  currentRate = 0;
  totalReviews?: number;
  @Input() product?: Product;
  ratings?: Rating[];

  constructor() {
  }

  ngOnInit(): void {
    this.ratings = this.product?.rating;
    this.currentRate = this.calcularRating();
    this.totalReviews = this.ratings?.length ?? 0;
  }

  calcularRating(): number {
    if (!this.ratings || this.ratings.length === 0) {
      return 0;
    }
    const sum = this.ratings.reduce((previous, current) => previous + current.stars, 0);
    const avarage = sum/this.ratings.length;
    return Number(avarage.toFixed(2));
  }
}
