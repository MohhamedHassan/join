import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { ClupDetailsService, clup_details } from '../../services/clup-details.service';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-clup-activities-slider',
  templateUrl: './clup-activities-slider.component.html',
  styleUrls: ['./clup-activities-slider.component.scss']
})
export class ClupActivitiesSliderComponent implements OnInit {
  @Input() clupid:string=''
  activities:any[]=[]
  swpieroptions: any = {
    slidesPerView: 3,
    spaceBetween: "50",
    pagination: false,
    navigation: "true",
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  
  }
  favoriteLoading=false
  constructor(private clupsService:ClupDetailsService) { }

  ngOnInit(): void {
    if(!!localStorage.getItem("joinToken")) {
      this.clupsService.getClupActivitiesForUser(this.clupid).subscribe(
        res => this.activities=res
      )
    }
    else {
      this.clupsService.getClupActivitiesForGuest(this.clupid).subscribe(
        res => this.activities=res
      )
    }
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  favoriteLoadingStatus(event:boolean) {
    this.favoriteLoading=event
  }
  changeFavStatus(index:any) {
    this.activities[index].favorite =   this.activities[index].favorite == 'FAVORITE' ? '' : 'FAVORITE' 
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
