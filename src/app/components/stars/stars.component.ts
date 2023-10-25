import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-stars",
  standalone: true,
  imports: [NgbRatingModule, NgIf],
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {

  currentRate = 0;
  ratings: number[] = [
    4.2, 3.7, 2.5, 1.8, 4.0, 3.3, 1.9,
    3.6, 2.7, 4.5, 2.2, 3.1, 4.8, 1.4, 5.0, 2.8, 3.9, 4.3,
    1.7, 3.4, 4.1, 2.3, 4.7, 3.8, 2.9, 3.2, 4.6, 1.5, 2.0, 3.0,
    1.6, 4.4, 2.4, 1.3, 4.9, 3.5, 2.1, 1.2,
    4.0, 3.0, 1.0, 2.0, 5.0, 4.5, 3.5, 2.5, 1.5, 3.5, 4.5, 5];
  totalRating = this.ratings.length;
  calcularRating(): number {
    const totalRating = this.ratings.reduce((acc, curr) => acc + curr, 0);
    const averageRating = totalRating / this.ratings.length;
    return Number(averageRating.toFixed(2));
  }
  ngOnInit(): void {
    this.currentRate = this.calcularRating();
  }
}
