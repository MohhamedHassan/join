import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activities } from '../../models/activities';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-activities',
  templateUrl: './home-activities.component.html',
  styleUrls: ['./home-activities.component.scss']
})
export class HomeActivitiesComponent implements OnInit {
  activities:Activities[]=[]
  page:number=1
  favoriteLoading=false
  subscription:Subscription
  showLess=false
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.subscription= this.homeService.activities.subscribe((res) => {
      if(Array.isArray(res)) {
        this.activities=[...this.activities,...res]
      }
      if(this.page>1&&res?.length==0) {
        this.page=0
        this.showLess=true
      }
    })
  }
showMore() {
  this.page+=1
  if(this.showLess) {
    this.activities=[]
    window.scroll(0,0)
  }
  this.showLess=false
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
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.homeService.activities.next([])
 if(this.subscription)this.subscription.unsubscribe() 

}
}
