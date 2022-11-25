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
  sliderContent: TopSlider[]=[];
  constructor(
    private homeService:HomeService
    ) { }

  ngOnInit(): void {
    // localStorage.setItem('joinToken','user_9NOQYdF35R4UrTn')
    if(!!localStorage.getItem("joinToken")) {
      this.homeService.getTopSliderUser().subscribe(
        (res:TopSlider[]) => {
          if(Array.isArray(res)) {
            this.sliderContent=res
          }
        }
      )
    }  else  {
      this.homeService.getTopSliderGuest().subscribe(
        (res:TopSlider[]) => {
          if(Array.isArray(res)) {
            this.sliderContent=res
          }
        }
      )
    }
  }

}
