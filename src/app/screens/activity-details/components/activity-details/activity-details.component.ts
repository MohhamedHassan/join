import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActivitiesService, activity_details } from '../../services/activities.service';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { FavoriteService } from 'src/app/services/favorite.service';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  sharePopup=false
  members:any[]=[]
  markers=[]
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
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
  favLoading=false
  activityId
  constructor(private activatedRoute:ActivatedRoute,
    private foavoriteService:FavoriteService,
    private membersservice:MembersService,
    private toastr:ToastrService,
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
        this.activityId=params?.id
        this.loading=true
        if(!!localStorage.getItem("joinToken")) return this.activitiesService.getActivityDetailsForUser(params?.id)
        else return this.activitiesService.getActivityDetailsForGuest(params?.id)
      })
    ).subscribe(
       res => {
        if(true) {
          if(res?.status=="INACTIVE") {
            this.toastr.error(localStorage.getItem('lang') == 'ar' ? 'هذا النشاط غير متوفر في جوين حاليا' : 'This activity is not currently available in Join');
            this.router.navigate(['/'])
          } else {
            this.activity_details=res
            if(this.activity_details?.location?.length) {
              this.center = {
                lat: Number(this.activity_details?.location[0]?.branch?.latitude),
                lng: Number(this.activity_details?.location[0]?.branch?.longitude)
              };
    
              this.activity_details?.location.forEach(i =>  {
                this.markers.push({
                  position: {
                    lat: Number(i?.branch?.latitude),
                    lng: Number(i?.branch?.longitude)
                  },
                  options: { animation: google.maps.Animation.BOUNCE }
                })
              })
              this.activity_details.selectedLocation=this.activity_details.location[0]
              let today = new Date()
              let from = new Date(this.activity_details.location[0]?.from_date)
              this.activity_details.selectedDate=today>from ? today : from
              if(this.activity_details.selectedLocation?.dates_times?.length) {
                this.activity_details.selectedTime= this.activity_details.selectedLocation?.dates_times[0]?.sessions[0]
              }
            }
            if(!!localStorage.getItem("joinToken")) {
              this.membersservice.members.subscribe(
                (res:any) =>  {
                   if(res)  {
                    this.members=res
                    console.log(this.members)
                   }
                }
             )
            }
            this.loading=false
          }
        }

        console.log(res)
       } , err =>  {
        this.toastr.error(localStorage.getItem('lang') == 'ar' ? 'هذا النشاط غير متوفر في جوين حاليا' : 'This activity is not currently available in Join');
        this.router.navigate(['/'])
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
isLogin():boolean {
  return !!localStorage.getItem("joinToken")
}
addActivityToFavorite() {
  this.favLoading=true
  this.foavoriteService.addActivityToFavorite(this.activityId).subscribe(
    (res:any) => {
      if(res?.code==1) {
        this.activity_details.favorite = this.activity_details.favorite=='FAVORITE' ? 'UNFAVORITE' : 'FAVORITE'
        this.favLoading=false
      }
    }
  )
}

}
