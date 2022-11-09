import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation,Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.component.html',
  styleUrls: ['./slider-two.component.scss']
})
export class SliderTwoComponent implements OnInit {
// start swiper carousel options
data:any[]=[
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
  'https://app.join.com.kw/public/club_activity_image/club-1641462874.jpg',
]
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
// end swiper carousel options

  constructor() { }

  ngOnInit(): void {
  }

}
