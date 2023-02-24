import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { Calendar } from 'primeng/calendar';
@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {
  @ViewChild('calendar') calendar?: Calendar;
  showpopup=false
  submited=false
  @Input() location:any
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
  minDate: Date=new Date();
  maxDate: Date=new Date();
  daysDisabled:any[]=[]
  availableTime:any[]=[]
  avialbeMembers=0
  notUserMembersCount=0
  notuserForm:FormGroup
  selectedIds=[]
  date = new Date();
  constructor(public membersservice:MembersService,
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
        console.log(this.members)
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
  let today = new Date()
  let from = new Date(item?.from_date)
  if(today > from) {
    this.minDate  = new Date()
    this.date  = new Date()
    console.log(this.minDate,this.minDate.getMonth())
  } else {
    this.minDate = new Date(item?.from_date)
    this.date = new Date(item?.from_date)
    console.log(this.date)
  }
  this.maxDate = new Date(item?.to_date)
  console.log(this.maxDate)
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
  if(item?.frequency=="WEEKLY") this.daysDisabled=[0,1,2,3,4,6]
}
checkTodayDate(item) {
  let today = new Date()
  let to = new Date(item?.to_date)
  if((this.datePipe.transform(item?.to_date, 'MM-dd-yyy')==this.datePipe.transform(today, 'MM-dd-yyy'))||today<to) return true
  else return false
}
onDateCange(value:any) {
  console.log(value)
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
            this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                this.availableTime.push(element)
            });
        }
    }
    this.availableTime.map(i=>i.checked=false)
  }
  console.log(this.availableTime)
}
selectTime(time:any) {
  time.checked=true
  this.selectedTime=time
  this.avialbeMembers=time?.available_seats
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
  console.log(this.avialbeMembers)
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
    this.patchActivityToParent.emit(selectedData)
  } 
  console.log(this.notuserForm)
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
    console.log(date.month,this.minDate.getMonth(),date.year , this.minDate.getFullYear())
    if (date.year < this.minDate.getFullYear()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.minDate);
      console.log(date.month,this.minDate.getMonth())
    }
    if (date.year > this.maxDate.getFullYear()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.maxDate);
      console.log(this.maxDate)
    }
    if (date.year == this.minDate.getFullYear() && date.month-1 < this.minDate.getMonth()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.minDate);
      console.log(date.month,this.minDate.getMonth())
    }
    if (date.year == this.maxDate.getFullYear() && date.month > this.maxDate.getMonth()) {
      this.calendar.onModelTouched();
      this.date = new Date(this.maxDate);
      console.log(date.month,this.minDate.getMonth())
    }
  }
}
}
