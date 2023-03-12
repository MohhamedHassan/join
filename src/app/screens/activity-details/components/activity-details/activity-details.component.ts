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
import { HomeService } from 'src/app/screens/home/services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  notUserMembersCount=1
  submited=false
  notuserForm:FormGroup
  notUserPopup=false
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
  interestName=''
  constructor(private activatedRoute:ActivatedRoute,
    private datePipe:DatePipe,
    private foavoriteService:FavoriteService,
    private membersservice:MembersService,
    private toastr:ToastrService,
    private homeService:HomeService,
    private router:Router,
    private _sanitizer:DomSanitizer,
    private cartService: CartService,
    private fb:FormBuilder,
    private activitiesService:ActivitiesService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    this.notuserForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/.com$/)]],
      phone:['',[Validators.required,Validators.pattern(/^[569٥٦٩][\u0660-\u0669]{7}$|^[569٥٦٩]\d{7}$/)]],
      iconfirm:['']
    })

    let notuserData:any = localStorage.getItem('not_user_data')

    if(notuserData) {
      notuserData = JSON.parse(notuserData)
      this.notuserForm.patchValue({
        name:notuserData?.name,
        email:notuserData?.email,
        phone:notuserData?.phone
      })
    }
    let cart = localStorage.getItem('joincart')
    if(cart)  {
      this.cartitems=JSON.parse(cart)
    }
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
            if(!this.activity_details?.hideMembers) {
              this.notuserForm.get('iconfirm').setValidators([Validators.required]);
              this.notuserForm.get('iconfirm').updateValueAndValidity();
            } else {
              this.notuserForm.get('iconfirm').clearValidators();
              this.notuserForm.get('iconfirm').updateValueAndValidity();
            }
            this.activity_details.club_name=res?.club_details?.name
            this.activity_details.club_logo=res?.club_details?.logo
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
                let today = new Date()
                let todayTransformed = this.datePipe.transform(today, 'MM-dd-yyy')
                let selectedDateTransformed = this.datePipe.transform(this.activity_details.selectedDate, 'MM-dd-yyy')
                if(todayTransformed == selectedDateTransformed) {
                  if(this.activity_details.selectedLocation?.dates_times[0]?.sessions?.length) {
                    this.activity_details.selectedLocation?.dates_times[0]?.sessions.forEach(element => {
                        if(Date.parse(`${selectedDateTransformed} ${element?.from_time}`) > Date.parse(String(today)) &&
                        element?.available_seats!="0" &&
                        !this.activity_details.selectedTime
                        ) {
                          this.activity_details.selectedTime= element
                        }
                        
                    });
                  }
               
                } else {
                  if(this.activity_details.selectedLocation?.dates_times[0]?.sessions?.length) {
                    this.activity_details.selectedTime =  this.activity_details.selectedLocation?.dates_times[0]?.sessions.find(element => element?.available_seats>"0" );
                  }
                }
                if(!this.activity_details.selectedTime) {
                  if(this.activity_details.selectedLocation?.dates_times[0]?.sessions.every(item => {
                   return item?.available_seats=="0"
                  })) {
                    if(this.activity_details.selectedLocation?.dates_times[0]?.sessions?.length) {
                      this.activity_details.selectedTime =  this.activity_details.selectedLocation?.dates_times[0]?.sessions[0]
                    }
                  } else {
                    let date = this.minDate.setDate(this.minDate.getDate() + 1)
                    this.minDate= new Date(date) 
                    this.getValidDateForDAily()   
                    if(this.activity_details.selectedLocation?.dates_times[0]?.sessions?.length) {
                      this.activity_details.selectedTime =  this.activity_details.selectedLocation?.dates_times[0]?.sessions.find(element => element?.available_seats>"0" );
                    }
                  }
               }
                this.available= this.activity_details.selectedTime ? this.activity_details.selectedTime?.available_seats : 0
                if(this.available<=0) this.complete=true
                if(this.cartitems?.length) {
                  let chosencount = 0
                  for(let i = 0 ; i <this.cartitems?.length;i++) {
                    if(this.cartitems[i]?.id==this.activity_details?.id&&this.cartitems[i]?.cstmtype==1 &&
                      this.cartitems[i]?.selectedTime?.id == this.activity_details.selectedTime?.id
                      ) {
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
                   }
                }
             )
            }
            this.homeService.intersts.subscribe((res) => {
              if(Array.isArray(res)) {
                this.interestName = res.find(i=>i?.interests_id==this.activity_details?.interests_id)?.name
              }
            })
            this.loading=false
          }
        }
       } , err =>  {
        this.toastr.error(localStorage.getItem('lang') == 'ar' ? 'هذا النشاط غير متوفر في جوين حاليا' : 'This activity is not currently available in Join');
        this.router.navigate(['/'])
       }

    )
    
  }
  plusOne() {
    if(this.notUserMembersCount<this.available) {
      this.notUserMembersCount+=1
      this.activity_details.notUserMembersCount= this.notUserMembersCount
    }
  }
  minusOne() {
    if(this.notUserMembersCount>1) {
      this.notUserMembersCount-=1
      this.activity_details.notUserMembersCount= this.notUserMembersCount
    }
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
checkNotUserData() {
  if(this.isLogin()) {
    this.selectedDataFromPopup(this.activity_details)
  } else {
    if(!this.complete) {
      this.submited=false
      this.notUserPopup=true
    }
  }
}
submitNotuserForm() {
  this.submited=true
  if(this.notuserForm.valid) {
    this.cartService.notuserDataAdded=true
    localStorage.setItem('not_user_data',JSON.stringify(this.notuserForm.value))
    this.selectedDataFromPopup(this.activity_details)
  } 
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
