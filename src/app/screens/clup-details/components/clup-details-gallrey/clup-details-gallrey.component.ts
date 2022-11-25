import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { Navigation,Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-clup-details-gallrey',
  templateUrl: './clup-details-gallrey.component.html',
  styleUrls: ['./clup-details-gallrey.component.scss']
})
export class ClupDetailsGallreyComponent implements OnInit {
  @Input() gallrey:{photo_name:string}[] = []
  swpieroptions: any = {
    slidesPerView: 3,
    spaceBetween: "50",
    pagination: false,
    navigation: "true",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
