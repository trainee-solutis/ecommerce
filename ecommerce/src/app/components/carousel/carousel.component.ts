import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

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
		config.interval = 6000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.showNavigationArrows = false;
	}










  // timerSubs!: Subscription;

  // @Input() images: string[] = [];

  // private _indexActiveImage: number = 0;
  // get indexActiveImage(){
  //   return this._indexActiveImage;
  // }

  // set indexActiveImage(value: number) {
  //   this._indexActiveImage = value < this.images.length ? value : 0;
  // }

  // ngOnInit(): void {
  //   this.startTimer();
  // }

  // ngOnDestroy(): void {
  //   this.stopTimer();
  // }

  // startTimer(): void {
  //   this.timerSubs = timer(5000).subscribe(() => {
  //     this.activeImage(
  //       this.indexActiveImage + 1
  //     )
  //   });
  // }

  // stopTimer(): void {
  //   this.timerSubs?.unsubscribe();
  // }

  // activeImage(index: number): void {
  //   this.indexActiveImage = index;
  //   this.startTimer();
  // }

}
