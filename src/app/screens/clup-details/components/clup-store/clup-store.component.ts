import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { Navigation,Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-clup-store',
  templateUrl: './clup-store.component.html',
  styleUrls: ['./clup-store.component.scss']
})
export class ClupStoreComponent implements OnInit {
  @Input() store:any[] = []
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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  
  }
  constructor() { }

  ngOnInit(): void {
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
