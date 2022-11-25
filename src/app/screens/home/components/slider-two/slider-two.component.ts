import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { Popular } from '../../models/popular';
import { HomeService } from '../../services/home.service';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.component.html',
  styleUrls: ['./slider-two.component.scss']
})
export class SliderTwoComponent implements OnInit {
popular:Popular[]=[]
bottomSliderLoading:boolean=true
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

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
      this.homeService.getPopular().subscribe(
        res=> {
          this.popular=res
          this.bottomSliderLoading=false
        }
      )
  }
  get  lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
