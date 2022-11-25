import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActivitiesService, activity_details } from '../../services/activities.service';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { DomSanitizer } from '@angular/platform-browser';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  loading:boolean=true
  activity_details!: activity_details
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
  constructor(private activatedRoute:ActivatedRoute,
    private _sanitizer:DomSanitizer,
    private activitiesService:ActivitiesService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
        if(!!localStorage.getItem("joinToken")) return this.activitiesService.getActivityDetailsForUser(params?.id)
        else return this.activitiesService.getActivityDetailsForGuest(params?.id)
      })
    ).subscribe(
       res => {
        this.loading=false
        this.activity_details=res
       }
    )
  }

}
