import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActivitiesService, activity_details } from '../../services/activities.service';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  showDeleteCartActivities=false
  cartitems:any=[]
  showpopup:boolean=false
  loading:boolean=true
  activity_details: any
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
    private router:Router,
    private _sanitizer:DomSanitizer,
    private activitiesService:ActivitiesService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    let cart = localStorage.getItem('joincart')
    if(cart)  {
      this.cartitems=JSON.parse(cart)
    }
    console.log(this.cartitems)
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
        this.loading=true
        if(!!localStorage.getItem("joinToken")) return this.activitiesService.getActivityDetailsForUser(params?.id)
        else return this.activitiesService.getActivityDetailsForGuest(params?.id)
      })
    ).subscribe(
       res => {
        this.activity_details=res
        this.loading=false
       }
    )
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}
selectedDataFromPopup(event) {
  console.log(event)
  console.log(this.activity_details)
  this.activity_details.selectedMembers=event.selectedMembers
  this.activity_details.selectedLocation=event.selectedLocation,
  this.activity_details.selectedDate=event.selectedDate
  this.activity_details.selectedTime=event.selectedTime
  this.activity_details.cstmtype=1 
  this.activity_details.type=event.type
  this.activity_details.notUserMembersCount =event.notUserMembersCount
  let exist =false 
  if(this.cartitems?.length) {
    for(let i = 0 ; i < this.cartitems?.length;i++) {
      if(this.cartitems[i]?.cstmtype==1 && this.cartitems[i]?.id==this.activity_details?.id) {
        exist=true
        this.cartitems[i]=this.activity_details
        break
      }
    }
  }
  if(!exist) {
    this.cartitems.push(this.activity_details)
  }
  localStorage.setItem('joincart',JSON.stringify(this.cartitems))
  this.showpopup=false
  this.router.navigate(['/cart'])
}
checkCartItems() {
  let exist=false
  if(this.cartitems?.length) {
    for(let i = 0 ; i < this.cartitems?.length;i++) {
      if(this.cartitems[i]?.cstmtype==1 && this.cartitems[i]?.club_id!=this.activity_details?.club_id) {
        exist=true
        break
      }
    }
  }
   if(!exist) {
    this.showpopup=true
  } else {
    this.showDeleteCartActivities=true
  }
}
acceptDeleteActivity() {
  this.cartitems = this.cartitems.filter(i => i.cstmtype==2)
  localStorage.setItem('joincart',JSON.stringify(this.cartitems))
  this.showDeleteCartActivities=false
  this.showpopup=true
}
}
