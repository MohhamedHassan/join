import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { Calendar } from 'primeng/calendar';
@Component({
  selector: 'app-cart-book-now',
  templateUrl: './cart-book-now.component.html',
  styleUrls: ['./cart-book-now.component.scss']
})
export class CartBookNowComponent implements OnInit {
  monthlyloading=false
  @ViewChild('calendar') calendar?: Calendar;
  submited=false
  showpopup=false
  selectedIds=[]
  @Input() selectedActivityToEdit:any
  @Input() ageFrom:any
  @Input() ageTo:any
  @Input() location:any
  @Input() hideMembers:any
  @Output() patchActivityToParent = new EventEmitter()
  members:any
  selectedLocation:any
  selectedDate
  selectedTime=null
  selectedMembers:any[]=[]
  minDate: Date= new Date();;
  maxDate: any= new Date();;
  daysDisabled:any[]=[]
  availableTime:any[]=[]
  avialbeMembers=0
  notUserMembersCount=0
  notuserForm:FormGroup
  patchDate
  first=true
  date = new Date();
  minDateForMonthlyCase: any=new Date();
  disabledDates:any[]=[]
  enabledDates:any[]=[]
  complete=false
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
      this.notuserForm.get('email').setValidators([Validators.required,Validators.email,,Validators.pattern(/.com$/)]);
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
    this.selectedLocation=this.selectedActivityToEdit?.selectedLocation
    this.patchDate=this.datePipe.transform(this.selectedActivityToEdit?.selectedDate, 'MM/dd/yyy')
    this.selectedDate=this.selectedActivityToEdit?.selectedDate
    this.date=new Date(this.selectedActivityToEdit?.selectedDate)
    console.log(this.date)
    this.selectedTime=this.selectedActivityToEdit?.selectedTime
    this.notUserMembersCount=this.selectedActivityToEdit?.notUserMembersCount
    console.log(this.notUserMembersCount)
    let today = new Date()
    let from = new Date(this.selectedActivityToEdit?.selectedLocation?.from_date)
    if(today > from) {
      this.minDate  = new Date()
    } else {
      this.minDate = new Date(this.selectedActivityToEdit?.selectedLocation?.from_date)
    }
    this.maxDate = new Date(this.selectedActivityToEdit?.selectedLocation?.to_date)
    this.minDateForMonthlyCase=new Date(this.selectedActivityToEdit?.selectedLocation?.from_date)
    let days = [0,1,2,3,4,5,6]
    let days_for_activity = this.selectedActivityToEdit?.selectedLocation?.days_for_activity.split(',')
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
    if(this.selectedActivityToEdit?.selectedLocation?.frequency=="MONTHLY") {
      this.daysDisabled=[]
      this.monthlyloading=true
      setTimeout(() => {
        this.getValidDatesForMonthly()
      }, 0);
    } else  if(this.selectedActivityToEdit?.selectedLocation?.frequency=="WEEKLY") {
      this.daysDisabled=[]
       this.monthlyloading=true
      setTimeout(() => {
        this.getValidDAtesForWeekly()
      }, 0);
     
    } 
    this.membersservice.members.subscribe(res =>  {
      if(res) {
        console.log(res)
        this.members=res
        this.members.map(member => {
          member.selected=false
          member.disabled=false
          if(this.selectedActivityToEdit?.selectedMembers?.length) {
            this.selectedActivityToEdit?.selectedMembers.forEach(element => {
              if(element?.child_id==member?.child_id) {
                member.selected=true
              }
            });
          }
          this.selectedIds.forEach(item =>  {
            if(item==member?.child_id)   member.selected=true
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
        })
      }

    })
    if(this.selectedLocation?.dates_times?.length) {
      console.log('where')
      let date = new Date(this.selectedDate) 
      for (let i = 0 ; i < this.selectedLocation?.dates_times?.length;i++) {
        console.log('where')
        let from = new Date(this.selectedLocation?.dates_times[i]?.from_date)
        let to = new Date(this.selectedLocation?.dates_times[i]?.to_date)
          if(
            (this.datePipe.transform(from, 'MM-dd-yyy')==this.datePipe.transform(this.selectedDate, 'MM-dd-yyy')) 
            ||
            (this.datePipe.transform(to, 'MM-dd-yyy')==this.datePipe.transform(this.selectedDate, 'MM-dd-yyy'))
            ||
            (date > from && date < to)
            ) {
              let today = new Date()
              let todayTransformed = this.datePipe.transform(today, 'MM-dd-yyy')
              let selectedDateTransformed = this.datePipe.transform(this.selectedDate, 'MM-dd-yyy')
              if(todayTransformed == selectedDateTransformed) {
                if(this.selectedLocation?.dates_times[i]?.sessions?.length) {
                  this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                      if(Date.parse(`${selectedDateTransformed} ${element?.to_time}`) > Date.parse(String(today)) 
                      ) {
                        this.availableTime.push(element)
                      }
                      
                  });
                }
              } else {
                this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                  this.availableTime.push(element)
              });
              }
          } else {
            console.log(date > from) 
          }
      }
    }
    this.availableTime.map(i=>{
      if(i?.id==this.selectedActivityToEdit?.selectedTime?.id) {
        i.checked=true
      }
      else i.checked=false
      i.chosencount=0
    })
    let cart = localStorage.getItem('joincart')
    let cartitems:any[]=[]
    if(cart)  {
      cartitems=JSON.parse(cart)
    }
    if(this.availableTime?.length && cartitems?.length) {
      console.log('one')
      this.availableTime.forEach(item =>  {
        let chosencount=0
        for(let i = 0 ; i <cartitems?.length;i++) {
          console.log('one')
          if(cartitems[i]?.id==this.selectedActivityToEdit?.id&&cartitems[i]?.cstmtype==1 &&
            cartitems[i]?.selectedTime?.id == item?.id
            ) {
              console.log('one')
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
    console.log(this.availableTime,this.selectedTime)
    let find = this.availableTime.find(i => i?.id == this.selectedTime?.id)
    this.avialbeMembers=this.selectedTime?.available_seats-find?.chosencount
    console.log(this.avialbeMembers)

    console.log(this.selectedDate)

  }


patchRadioInputIncaseMonthlyAndWeekly(item) {
  if((this.datePipe.transform(item, 'MM-dd-yyy')==this.datePipe.transform(this.selectedActivityToEdit?.selectedDate, 'MM-dd-yyy'))) return true
  else return false
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
      if(this.selectedActivityToEdit?.selectedMembers?.length) {
        this.selectedActivityToEdit?.selectedMembers.forEach(element => {
          if(element?.child_id==member?.child_id) {
            member.selected=true
          }
        });
      }
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
  } else {
    this.minDate = new Date(item?.from_date)
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

  console.log(this.minDate,day)
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
checkTodayDate(item) {
  let today = new Date()
  let to = new Date(item?.to_date)
  if((this.datePipe.transform(item?.to_date, 'MM-dd-yyy')==this.datePipe.transform(today, 'MM-dd-yyy'))||today<to) return true
  else return false
}
onDateCange(value:any) {
  this.selectedTime=null
  this.avialbeMembers=0

  this.availableTime=[]
  this.selectedDate=value
 
  if(this.members?.length) {
    this.selectedIds=[]
    this.members.map(member => {
      member.selected=false
      member.disabled=false
      if(this.selectedActivityToEdit?.selectedMembers?.length) {
        this.selectedActivityToEdit?.selectedMembers.forEach(element => {
          if(element?.child_id==member?.child_id) {
            member.selected=true
          }
        });
      }
    })
  }
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
            if(todayTransformed == selectedDateTransformed) {
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
              console.log('one')
              this.selectedLocation?.dates_times[i]?.sessions.forEach(element => {
                this.availableTime.push(element)
            });
            }
        }
    }
    this.availableTime.map(i=>{
      if(i?.id==this.selectedActivityToEdit?.selectedTime?.id) {
        i.checked=true
       // this.selectedTime=this.selectedActivityToEdit?.selectedTime
      }
      else i.checked=false
      i.chosencount=0
    })
    let cart = localStorage.getItem('joincart')
    let cartitems:any[]=[]
    if(cart)  {
      cartitems=JSON.parse(cart)
    }
    if(this.availableTime?.length && cartitems?.length) {
      console.log('one')
      this.availableTime.forEach(item =>  {
        let chosencount=0
        for(let i = 0 ; i <cartitems?.length;i++) {
          console.log('one')
          if(cartitems[i]?.id==this.selectedActivityToEdit?.id&&cartitems[i]?.cstmtype==1 &&
            cartitems[i]?.selectedTime?.id == item?.id
            ) {
              console.log('one')
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
  console.log(this.selectedTime)
}
selectTime(time:any,inpt) {
  this.avialbeMembers=time?.available_seats-time?.chosencount
  if(time?.available_seats=="0") {
    inpt.checked=false
    time.checked=false
  this.selectedTime=null
  this.complete=true
  if(localStorage.getItem('lang')=='ar') {
    this.toastr.error("الرجاء اختيار وقت اخر","تاريخ غير صالح")
  } else  {
    this.toastr.error('please select another time slot','Invalid Date')
    console.log(this.selectedTime)
  }
} else {
  this.complete=false

  time.checked=true
  this.selectedTime=time
  
  if(this.members?.length) {
    this.selectedIds=[]
    this.members.map(member => {
      member.selected=false
      member.disabled=false
      // if(this.selectedActivityToEdit?.selectedMembers?.length) {
      //   this.selectedActivityToEdit?.selectedMembers.forEach(element => {
      //     if(element?.child_id==member?.child_id) {
      //       member.selected=true
      //     }
      //   });
      // }
    })
  }
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
    this.selectedTime   &&
    this.notuserForm.valid && valid) {
    let selectedData = {
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
plusOne() {
  if(this.notUserMembersCount<this.avialbeMembers) this.notUserMembersCount+=1
}
minusOne() {
  if(this.notUserMembersCount>1) this.notUserMembersCount-=1
}
isLogin():boolean {
  return !!localStorage.getItem("joinToken")
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
