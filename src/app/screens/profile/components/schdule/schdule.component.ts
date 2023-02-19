import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SchduleService } from '../../services/schdule.service';
@Component({
  selector: 'app-schdule',
  templateUrl: './schdule.component.html',
  styleUrls: ['./schdule.component.scss']
})
export class SchduleComponent implements OnInit {
  loading=true
  selectedItems:any[]=[]
constructor(private datePipe:DatePipe,
  private schduleService:SchduleService) {}
  today=-1
  schdule:any[]=[]
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
 ngOnInit(): void {
  this.getToday()
  this.getDaysFromLeftToRight()
  this.getDaysFromRightToLeft()
  this.ifTodayEqual6()
  this.schduleService.getActivitySchedule().subscribe(
    res => {
      if(res?.code) {
        this.schdule=res?.payload
        if(this.schdule?.length) {
          this.week.map(item =>  {
              this.schdule.forEach(i => {
                if(item?.date==i?.date) item.haveEvent=true
              })
          })
        }
      }
      this.loading=false
    }
  )
  console.log(this.week)
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
  console.log(7-(this.today+1))
  if(this.today>=0&&this.today!=6) {
    for (let i=0; i<(7-(this.today+1));i++) {
      console.log('heelo')
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
 }
}
