import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActivitiesService, activity_details } from '../../services/activities.service';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { DatePipe } from '@angular/common';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  available=0
  complete=false
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
  minDate: any=new Date();
  minDateForMonthlyCase: any=new Date();
  maxDate: any=new Date();
  constructor(private activatedRoute:ActivatedRoute,
    private datePipe:DatePipe,
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
              this.minDateForMonthlyCase=new Date(this.activity_details.location[0]?.from_date)
              let today = new Date()
              let from = new Date(this.activity_details.location[0]?.from_date)
              if(today > from) {
                this.minDate  = new Date()
              } else {
                this.minDate = new Date(this.activity_details.location[0]?.from_date)
               // console.log(this.date)
              }
              this.maxDate = new Date(this.activity_details.location[0]?.to_date)
              if(this.activity_details.selectedLocation?.frequency=="MONTHLY") {
                this.getValidDatesForMonthly()
              } else  if(this.activity_details.selectedLocation?.frequency=="WEEKLY") {
                this.getValidDAtesForWeekly()
               
              } else  if(this.activity_details.selectedLocation?.frequency=="DAILY") {
                this.getValidDateForDAily()          
              } 
              if(this.activity_details.selectedLocation?.dates_times?.length) {
                this.activity_details.selectedTime= this.activity_details.selectedLocation?.dates_times[0]?.sessions[0]
                this.available= this.activity_details.selectedTime?.available_seats
                console.log(this.available)
                if(this.cartitems?.length) {
                  let chosencount = 0
                  for(let i = 0 ; i <this.cartitems?.length;i++) {
                    console.log('one')
                    if(this.cartitems[i]?.id==this.activity_details?.id&&this.cartitems[i]?.cstmtype==1 &&
                      this.cartitems[i]?.selectedTime?.id == this.activity_details.selectedTime?.id
                      ) {
                        console.log('one')
                        if(!!localStorage.getItem('joinToken')) {
                          if(this.activity_details?.hideMembers) chosencount+=1
                          else chosencount+=this.cartitems[i]?.selectedMembers?.length 
                        } else {
                          chosencount+=this.cartitems[i]?.notUserMembersCount
                        }
                       
                    }
                  }
                  this.available = this.available>=chosencount ? this.available-chosencount : 0
                  if(this.available<=0) this.complete=true
                }
            
              }
           
              this.activity_details.cstmtype=1 
              this.activity_details.type=!!localStorage.getItem('joinToken') ? 1 : 0 
              this.activity_details.notUserMembersCount =1
            }
            if(!!localStorage.getItem("joinToken")) {
              this.membersservice.members.subscribe(
                (res:any) =>  {
                   if(res)  {
                    this.members=res
                    let validmembers:any[]=[]
                    this.members.forEach(member =>  {
                      if(Number(member?.child_age)>Number(this.activity_details?.age_to)|| Number(member?.child_age)<Number(this.activity_details?.age_from)) {
                        
                      } else {
                        validmembers.push(member)
                      }
                    })
                    if(validmembers?.length) this.activity_details.selectedMembers= [ validmembers[0]]
                    console.log(this.activity_details.selectedMembers)
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
        if(this.datePipe.transform(event.selectedDate, 'MM-dd-yyy') == this.datePipe.transform(this.cartitems[i]?.selectedDate, 'MM-dd-yyy') &&
          this.cartitems[i]?.selectedTime?.id == event.selectedTime?.id &&
          this.cartitems[i]?.selectedLocation?.id == event.selectedLocation?.id
        ) {
          exist=true
          if(Array.isArray(this.cartitems[i].selectedMembers) && Array.isArray(event.selectedMembers)) {
            event.selectedMembers.forEach(element => {
              let exist = false
              this.cartitems[i].selectedMembers.forEach(item => {
                if(element?.child_id==item?.child_id) exist=true
              });
              if(!exist)   this.cartitems[i].selectedMembers.push(element)
            });
          }
          this.cartitems[i].notUserMembersCount+=event.notUserMembersCount
          break
        }

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
getValidDAtesForWeekly() {
  let length = this.getMonthLength()*8  
  let day = this.minDateForMonthlyCase.setDate(this.minDateForMonthlyCase.getDate() + 7)
  for (let i = 0 ;i<length;i++) {
    day = new Date(day)
    day = day.setDate(day.getDate() + 7)
   if(day > this.minDate && day<this.maxDate) {
    this.activity_details.selectedDate=new Date(day)
     break
   } 

 }
}
getValidDateForDAily() {
  let days_for_activity = this.activity_details?.selectedLocation?.days_for_activity.split(',')
  days_for_activity = days_for_activity.map((element:any) => {
    if(element=='SUNDAY') return element = 0
    else if(element=='MONDAY') return element = 1
    else if(element=='TUESDAY') return element = 2 
    else if(element=='WEDNESDAY') return element = 3
    else if(element=='THURSDAY') return element = 4
    else if(element=='FRIDAY') return element = 5
    else if(element=='SATURDAY') return element = 6
    else return ''
  });
  console.log(this.minDate.getDay(),this.minDate)
  if(days_for_activity.some(i => i==this.minDate.getDay()) ) {
    this.activity_details.selectedDate=this.minDate
  } else {
    let date = this.minDate
    for(let i = 0 ; i < 30 ; i++) {
      date.setDate(this.minDate.getDate() + 1)
      if(days_for_activity.some(i => i==date.getDay()) ) {
        this.activity_details.selectedDate=date
        break
      } 
      console.log(days_for_activity.some(i => i==date.getDay()))
    }
    
  }
 
}
getValidDatesForMonthly() {
  let length = this.getMonthLength()
  for (let i = 0 ;i<length;i++) {
    let dt = this.minDateForMonthlyCase;
    dt.setMonth(dt.getMonth() + 1)
    let final = new Date(dt)
    if(final > this.minDate && final < this.maxDate) {
      this.activity_details.selectedDate=new Date(dt)
      break
    }
  }
}
getMonthLength() {
  const monthDiff = this.maxDate.getMonth() - this.minDateForMonthlyCase.getMonth();
  const yearDiff = this.maxDate.getYear() - this.minDateForMonthlyCase.getYear();
  return monthDiff + yearDiff * 12;
}
}
