import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activities } from 'src/app/screens/home/models/activities';
import { HomeService } from 'src/app/screens/home/services/home.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities:Activities[]=[]
  page:number=1
  favoriteLoading=false
  subscription:Subscription
  constructor(public homeService:HomeService) { }



  ngOnDestroy(): void {
    this.homeService.activities.next([])
    this.homeService.ActivitiesRequestComplete=false
    if(this.subscription)this.subscription.unsubscribe() 
  }


  ngOnInit(): void {
    if(!!localStorage.getItem("joinToken")) {
      this.homeService.getActivitiesUser(1)
     }  else  {
       this.homeService.getActivitiesGuest(1)
     }
  this.subscription=  this.homeService.activities.subscribe((res) => {
      if(Array.isArray(res)) {
        this.activities=[...this.activities,...res]
      }
    })
  }
  track(index: number) {
    return index
  }
showMore() {
  this.page+=1
  if(!!localStorage.getItem("joinToken")) {
    this.homeService.getActivitiesUser(this.page)
   }  else  {
     this.homeService.getActivitiesGuest(this.page)
   }
}
isLogin():boolean {
  return !!localStorage.getItem("joinToken")
}
favoriteLoadingStatus(event:boolean) {
  this.favoriteLoading=event
}
changeFavStatus(index:any) {
  this.activities[index].favorite =   this.activities[index].favorite == 'FAVORITE' ? '' : 'FAVORITE' 
}

}
