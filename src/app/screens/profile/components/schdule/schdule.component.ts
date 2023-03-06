import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SchduleService } from '../../services/schdule.service';
@Component({
  selector: 'app-schdule',
  templateUrl: './schdule.component.html',
  styleUrls: ['./schdule.component.scss']
})
export class SchduleComponent implements OnInit {
  latitude
  longitude
  loading=true
  selectedItems:any[]=[]
  childData:any[]=[]
  today=-1
  schdule:any[]=[]
  activityId=-1
  map=false
 week:any[] = [
  {
    dayname:'m',
    daynumber:1
  },
  {
    dayname:'t',
    daynumber:2
  },
  {
    dayname:'w',
    daynumber:3
  },
  {
    dayname:'t',
    daynumber:4
  },
  {
    dayname:'f',
    daynumber:5
  },
  {
    dayname:'s',
    daynumber:6
  },
  {
    dayname:'s',
    daynumber:0
  }
 ] 
constructor(private datePipe:DatePipe,
  private schduleService:SchduleService) {}

 ngOnInit(): void {
  this.getToday()
  this.getDaysFromLeftToRight()
  this.getDaysFromRightToLeft()
  this.ifTodayEqual6()
  this.schduleService.getActivitySchedule().subscribe(
    res => {
      if(res?.code) {
        this.schdule=res?.payload
        this.childData=res?.childData
        if(this.schdule?.length) {
          this.week.map(item =>  {
              this.schdule.forEach(i => {
                if(item?.date==i?.date) item.haveEvent=true
              })
          })
          this.selectItem(this.week[this.today]?.date)
        }
      }
      this.loading=false
    }
  )
 }
 getToday() {
  const today = new Date()
  this.week.map((item,index) =>  {
    if(item.daynumber==today.getDay())  {
      item.day=today.getDate()
      item.date= this.datePipe.transform(today, 'yyy-MM-dd')
      this.today=index
    }
  })
 }
 getDaysFromLeftToRight() {
  if(this.today>=0&&this.today!=6) {
    for (let i=0; i<(7-(this.today+1));i++) {
      const today = new Date()
      const tomorow = new Date()
      tomorow.setDate(today.getDate() + (i+1))
      this.week[this.today+(i+1)].day = tomorow.getDate()
      this.week[this.today+(i+1)].date = this.datePipe.transform(tomorow, 'yyy-MM-dd')
    } 
  }
 }
 getDaysFromRightToLeft() {
  if(this.today>0&&this.today!=6) {
    let count = 0
    for (let i=this.today-1; i>-1;i--) {
      
      const today = new Date()
      const yesterday = new Date()
      yesterday.setDate(today.getDate() - ++count)
      this.week[i].day = yesterday.getDate()
      this.week[i].date = this.datePipe.transform(yesterday, 'yyy-MM-dd')
    } 
  }
 }
 ifTodayEqual6() {
  if(this.today==6) {
    let count = 0
    for (let i=5; i>-1;i--) {
      const today = new Date()
      const yesterday = new Date()
      yesterday.setDate(today.getDate() - ++count)
      this.week[i].day = yesterday.getDate()
      this.week[i].date = this.datePipe.transform(yesterday, 'yyy-MM-dd')
    } 
 }

}
get lang() {
  return  localStorage.getItem('lang') || 'en'
 }
 selectItem(date:any) {
  this.selectedItems = this.schdule.filter(i => i?.date==date)
  if(this.selectedItems?.length) {
    this.selectedItems.forEach(one => {
       one.selectedChild = []
      if(Array.isArray(one?.times) &&one?.times?.length && one?.times[0]?.child?.length) {
        let set = new Set(one.times[0].child)
       
        set.forEach(child=> {
          this.childData.forEach(i=> {
              if(child==i?.child_id) one.selectedChild.push(i)
          })
        })
    }
    })
  }
 }
 returnConvertedDate(time:string,index:number) {
  let split = time.split('-')
  let times = split[index].split(':');
  let dateTime = new Date();
  dateTime.setHours(parseInt(times[0]));
  dateTime.setMinutes(parseInt(times[1]));
  dateTime.setSeconds(parseInt(times[2]));
  return dateTime
 }
 showMap(item) {
  if(item?.times?.length) {
    this.latitude= item?.times[0]?.branch?.latitude
    this.longitude=item?.times[0]?.branch?.longitude
    this.map=true
  }
 }
}
