import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { Calendar } from 'primeng/calendar';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';
@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {
  monthlyloading=false
  @ViewChild('calendar') calendar?: Calendar;
  showpopup=false
  submited=false
  @Input() location:any
  @Input() activity_id:any
  @Input() ageFrom:any
  @Input() ageTo:any
  @Input() hideMembers:any
  // @Input() selectedLocationFromParent:any
  // @Input() selectedDateFromParent:any
  // @Input() selectedTimeFromParent:any
  @Output() patchActivityToParent = new EventEmitter()
  @Output() sendLocationToParent = new EventEmitter()
  members:any
  selectedLocation:any
  selectedDate=null
  selectedTime=null
  selectedMembers:any[]=[]
  minDate: any=new Date();
  minDateForMonthlyCase: any=new Date();
  maxDate: any=new Date();
  daysDisabled:any[]=[]
  availableTime:any[]=[]
  avialbeMembers=0
  notUserMembersCount=0
  notuserForm:FormGroup
  selectedIds=[]
  date = new Date();
  disabledDates:any[]=[]
  enabledDates:any[]=[]
  complete=false
  constructor(public membersservice:MembersService,
    private cartService:CartService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.notuserForm = this.fb.group({
      name:[''],
      email:[''],
      phone:[''],
      iconfirm:['']
    })
    if(!!localStorage.getItem("joinToken")) {
      this.notuserForm.get('name').clearValidators();
      this.notuserForm.get('name').updateValueAndValidity();
      this.notuserForm.get('email').clearValidators();
      this.notuserForm.get('email').updateValueAndValidity();
      this.notuserForm.get('phone').clearValidators();
      this.notuserForm.get('phone').updateValueAndValidity();
      this.notuserForm.get('iconfirm').clearValidators();
      this.notuserForm.get('iconfirm').updateValueAndValidity();
    } else {
      this.notuserForm.get('name').setValidators([Validators.required]);
      this.notuserForm.get('name').updateValueAndValidity();
      this.notuserForm.get('email').setValidators([Validators.required,Validators.email,Validators.pattern(/.com$/)]);
      this.notuserForm.get('email').updateValueAndValidity();
      this.notuserForm.get('phone').setValidators([Validators.required,
        Validators.pattern(/^[569٥٦٩][\u0660-\u0669]{7}$|^[569٥٦٩]\d{7}$/)]);
      this.notuserForm.get('phone').updateValueAndValidity();
      if(!this.hideMembers) {
        this.notuserForm.get('iconfirm').setValidators([Validators.required]);
        this.notuserForm.get('iconfirm').updateValueAndValidity();
      }
    }
    let notuserData:any = localStorage.getItem('not_user_data')

    if(notuserData) {
      notuserData = JSON.parse(notuserData)
      this.notuserForm.patchValue({
        name:notuserData?.name,
        email:notuserData?.email,
        phone:notuserData?.phone
      })
    }
    this.membersservice.members.subscribe(res =>  {
      if(res) {
        this.members=res
        this.members.map(member => {
          member.selected=false
          member.disabled=false
          this.selectedIds.forEach(item =>  {
            if(item==member?.child_id)   member.selected=true
          })
        })
        let selectedMemberscount = this.members.filter(item => item.selected)
        if(selectedMemberscount?.length==this.avialbeMembers) {
          this.members.map(item =>  {
            if(!item?.selected) item.disabled=true
          })
        } else {
          this.members.map(item =>  {
            if(!item?.selected) item.disabled=false
          })
        }
      }

    })
    // this.selectedLocation=this.selectedLocationFromParent
    // this.selectLocation(this.selectedLocation)
    // this.selectedDate=this.selectedDateFromParent
    // this.date=this.selectedDateFromParent
    // this.selectedTime=this.selectedTimeFromParent
    // this.onDateCange(this.date)
    // this.selectTime(this.selectedTimeFromParent)
  }
selectLocation(item:any) {
  this.minDateForMonthlyCase=new Date(item?.from_date)
  this.selectedDate=null
  this.selectedTime=null
  this.avialbeMembers=0
  if(this.members?.length) {
    this.selectedIds=[]
    this.members.map(member => {
      member.selected=false
      member.disabled=false
    })
  }
  this.selectedLocation=item
  this.daysDisabled=[]
  this.disabledDates=[]
  this.enabledDates=[]
  let today = new Date()
  let from = new Date(item?.from_date)
  if(today > from) {
    this.minDate  = new Date()
    this.date  = new Date()
  } else {
    this.minDate = new Date(item?.from_date)
    this.date = new Date(item?.from_date)
  }
  this.maxDate = new Date(item?.to_date)
  let days = [0,1,2,3,4,5,6]
  let days_for_activity = item?.days_for_activity.split(',')
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
  for (let i  = 0 ; i < days?.length; i++) {
    let exist = false
    for (let j  = 0 ; j < days_for_activity?.length; j++) {
      if(days_for_activity[j]==days[i]) {
        exist = true
      }
    }
    if(!exist) this.daysDisabled.push(days[i])
  }
  if(item?.frequency=="MONTHLY") {
    this.daysDisabled=[]
    this.monthlyloading=true
    setTimeout(() => {
      this.getValidDatesForMonthly()
    }, 0);
  } else  if(item?.frequency=="WEEKLY") {
    this.daysDisabled=[]
     this.monthlyloading=true
    setTimeout(() => {
      this.getValidDAtesForWeekly()
    }, 0);
   
  } 
}

getMonthLength() {
  const monthDiff = this.maxDate.getMonth() - this.minDateForMonthlyCase.getMonth();
  const yearDiff = this.maxDate.getYear() - this.minDateForMonthlyCase.getYear();
  return monthDiff + yearDiff * 12;
}
getValidDAtesForWeekly() {
  this.monthlyloading=true
  let length = this.getMonthLength()*8  
  let day = this.minDateForMonthlyCase.setDate(this.minDateForMonthlyCase.getDate() + 7)
  for (let i = 0 ;i<length;i++) {
    day = new Date(day)
    day = day.setDate(day.getDate() + 7)
   if(day > this.minDate && day<this.maxDate) {
     this.enabledDates.push(new Date(day))
   } 

 }
  this.monthlyloading=false
}

getValidDatesForMonthly() {
  let length = this.getMonthLength()
  for (let i = 0 ;i<length;i++) {
    let dt = this.minDateForMonthlyCase;
    dt.setMonth(dt.getMonth() + 1)
    let final = new Date(dt)
    if(final > this.minDate && final < this.maxDate) {
      this.enabledDates.push(new Date(dt))
    }
  }
  this.monthlyloading=false
}
getInvalidDates() {

  this.monthlyloading=true
  const date = new Date(this.minDate.getTime());
  
  const dates = [];

  while (date <= this.maxDate) {
    let exist = this.enabledDates.some(item => this.datePipe.transform(item, 'MM-dd-yyy') == this.datePipe.transform(date, 'MM-dd-yyy'))
    if(!exist)  this.disabledDates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
 this.monthlyloading=false
}
checkTodayDate(item) {
  let today = new Date()
  let to = new Date(item?.to_date)
  if((this.datePipe.transform(item?.to_date, 'MM-dd-yyy')==this.datePipe.transform(today, 'MM-dd-yyy'))||today<to) return true
  else return false
}
onDateCange(value:any) {
  this.selectedDate=null
  this.selectedTime=null
  this.avialbeMembers=0
  if(this.members?.length) {
    this.selectedIds=[]
    this.members.map(member => {
      member.selected=false
      member.disabled=false
    })
  }
  this.availableTime=[]
  this.selectedDate=value
  if(this.selectedLocation?.dates_times?.length) {
    for (let i = 0 ; i < this.selectedLocation?.dates_times?.length;i++) {
      let from = new Date(this.selectedLocation?.dates_times[i]?.from_date)
      let to = new Date(this.selectedLocation?.dates_times[i]?.to_date)
        if(
          (this.datePipe.transform(from, 'MM-dd-yyy')==this.datePipe.transform(this.selectedDate, 'MM-dd-yyy')) 
          ||
          (this.datePipe.transform(to, 'MM-dd-yyy')==this.datePipe.transform(this.selectedDate, 'MM-dd-yyy'))
          ||
          (this.selectedDate > from && this.selectedDate < to)
          ) {
            let today = new Date()
            let todayTransformed = this.datePipe.transform(today, 'MM-dd-yyy')
            let selectedDateTransformed = this.datePipe.transform(this.selectedDate, 'MM-dd-yyy')
            if(false) {
              console.log('one')
              if(this.selectedLocation?.dates_times[i]?.sessions?.length) {
                this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                    if(Date.parse(`${selectedDateTransformed} ${element?.to_time}`) > Date.parse(String(today)) 
                    ) {
                      this.availableTime.push(element)
                    }
                    
                });
              }
            } else {
              console.log('two')
              this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                this.availableTime.push(element)
            });
            }
          
        }
    }
    this.availableTime.map(i=>{i.checked=false;i.chosencount=0})
    let cart = localStorage.getItem('joincart')
    let cartitems:any[]=[]
    if(cart)  {
      cartitems=JSON.parse(cart)
    }
    if(this.availableTime?.length && cartitems?.length) {
      this.availableTime.forEach(item =>  {
        let chosencount=0
        for(let i = 0 ; i <cartitems?.length;i++) {
          if(cartitems[i]?.id==this.activity_id&&cartitems[i]?.cstmtype==1 &&
            cartitems[i]?.selectedTime?.id == item?.id
            ) {
              if(!!localStorage.getItem('joinToken')) {
                if(this.hideMembers) chosencount+=1
                else chosencount+=cartitems[i]?.selectedMembers?.length 
              } else {
                chosencount+=cartitems[i]?.notUserMembersCount
              }
             
          }
        }
        item.chosencount=chosencount
      })
    }
  }
}
selectTime(time:any,inpt) {
 
  let today = new Date()
  let todayTransformed = this.datePipe.transform(today, 'MM-dd-yyy')
  let selectedDateTransformed = this.datePipe.transform(this.selectedDate, 'MM-dd-yyy')
  this.avialbeMembers=time?.available_seats-time?.chosencount
  
  if(time?.available_seats<="0" ||
  (Date.parse(`${selectedDateTransformed} ${time?.from_time}`) < Date.parse(String(today)) 
  && selectedDateTransformed==todayTransformed)
  ) {
      inpt.checked=false
      time.checked=false
    this.selectedTime=null
    this.complete=true
    if(localStorage.getItem('lang')=='ar') {
      this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
    } else  {
      this.toastr.error('please select another time slot','Invalid Date')
    }
  } else {

    this.complete=false
  time.checked=true
  this.selectedTime=time
  if(this.avialbeMembers>0) {
    this.notUserMembersCount=1
  } else  {
    this.notUserMembersCount=0
  }
  if(this.members?.length) {
    this.selectedIds=[]
    this.members.map(member => {
      member.selected=false
      member.disabled=false
    })
  }
}
}
selectMembers(child_id) { 
  this.selectedIds.push(child_id)
  let selectedMemberscount = this.members.filter(item => item.selected)
  if(selectedMemberscount?.length==this.avialbeMembers) {
    this.members.map(item =>  {
      if(!item?.selected) item.disabled=true
    })
  } else {
    this.members.map(item =>  {
      if(!item?.selected) item.disabled=false
    })
  }
}
confirmAddActivity() {
  this.submited=true
  if(this.members?.length) {
    this.selectedMembers = this.members.filter(item => item.selected)
  }
  let valid = false
  if(!!localStorage.getItem('joinToken') && this.selectedMembers?.length) {
     valid=true
  } else if(this.hideMembers) {
    valid=true
 } else if (!!localStorage.getItem('joinToken')==false&&this.notUserMembersCount>0) {
   valid = true
  }
if(!!localStorage.getItem('joinToken')==false&&this.hideMembers) {
  this.notUserMembersCount=1
}

  if( 
    this.selectedLocation && 
    this.selectedDate && 
    this.selectedTime && 
    this.notuserForm.valid && valid) {

    let selectedData:any = {
      selectedMembers:this.selectedMembers,
      selectedLocation:this.selectedLocation,
      selectedDate:this.selectedDate,
      selectedTime:this.selectedTime,
      notUserMembersCount:this.notUserMembersCount,
      type: !!localStorage.getItem('joinToken') ? 1 : 0 
    }
    localStorage.setItem('not_user_data',JSON.stringify(this.notuserForm.value))
    this.cartService.notuserDataAdded=true
    this.patchActivityToParent.emit(selectedData)
  } 

    if(this.notuserForm.valid && (
      !this.selectedLocation ||
      !this.selectedDate ||
      !this.selectedTime || 
      !this.notuserForm.valid ||
      ! valid
    )) {
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("قم بلمئ جميع البيانات")
      } else  {
        this.toastr.error('Fill in all data')
      }
    }
  
 
}
isLogin():boolean {
  return !!localStorage.getItem("joinToken")
}
plusOne() {
  if(this.notUserMembersCount<this.avialbeMembers) this.notUserMembersCount+=1
}
minusOne() {
  if(this.notUserMembersCount>1) this.notUserMembersCount-=1
}
get lang() {
  return localStorage.getItem('lang') || 'en'
}
checkYear(date: { month: number; year: number }) {
  if (this.calendar) {
    if (date.year < this.minDate.getFullYear()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.minDate);
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
      } else  {
        this.toastr.error('please select another time slot','Invalid Date')
      }
    }
    if (date.year > this.maxDate.getFullYear()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.maxDate);
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
      } else  {
        this.toastr.error('please select another time slot','Invalid Date')
      }
    }
    if (date.year == this.minDate.getFullYear() && date.month-1 < this.minDate.getMonth()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.minDate);
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
      } else  {
        this.toastr.error('please select another time slot','Invalid Date')
      }
    }
    if (date.year == this.maxDate.getFullYear() && date.month > this.maxDate.getMonth()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.maxDate);
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
      } else  {
        this.toastr.error('please select another time slot','Invalid Date')
      }
    }
  }
}
}
