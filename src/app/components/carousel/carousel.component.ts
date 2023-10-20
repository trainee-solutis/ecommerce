import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, FormsModule],
  providers: [NgbCarouselConfig],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  ngOnInit(): void {
  }
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);


	constructor(config: NgbCarouselConfig) {
		config.interval = 3000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.showNavigationArrows = false;
	}
}
