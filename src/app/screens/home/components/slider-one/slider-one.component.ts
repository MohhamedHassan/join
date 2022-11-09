import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-slider-one',
  templateUrl: './slider-one.component.html',
  styleUrls: ['./slider-one.component.scss']
})
export class SliderOneComponent implements OnInit {
  images:any[]=[
    'https://app.join.com.kw/public/promo_banner/promo-banner-1662390062.jpg',
    'https://app.join.com.kw/public/promo_banner/promo-banner-1666694758.jpg',
    "https://app.join.com.kw/public/promo_banner/promo-banner-1667492945.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
