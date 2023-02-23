import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { TopSlider } from '../../models/top-slider';
import { HomeService } from '../../services/home.service';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-slider-one',
  templateUrl: './slider-one.component.html',
  styleUrls: ['./slider-one.component.scss']
})
export class SliderOneComponent implements OnInit {
  sliderContent: any[]=[];
  constructor(
    private homeService:HomeService
    ) { }

  ngOnInit(): void {
    this.sliderContent=[]
    if(!!localStorage.getItem("joinToken")) {
      this.homeService.getTopSliderUser().subscribe(
        (res) => {
          this.makeData(res)
        }
      )
    }  else  {
      this.homeService.getTopSliderGuest().subscribe(
        (res) => {
          this.makeData(res)
        }
      )
    }
  }
makeData(res) {

  if(Array.isArray(res?.store)) {
    this.sliderContent=[...this.sliderContent,...res?.store]
  }
  if(Array.isArray(res?.payload)) {
     this.sliderContent=[...this.sliderContent,...res?.payload]
   }
}
checkRouting(item):any {
  if(item?.product_id) return `/product/${item?.product_id}`
  else if(item?.activity_id) return `/activity/${item?.activity_id}`
  else if(item?.club_id) return `/clup/${item?.club_id}`
  else if(item?.interests_id) return `/interests/${item?.interests_id}`
}
get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
