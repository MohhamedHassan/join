import { Component, OnInit } from '@angular/core';
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
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.activities.subscribe((res) => {
      if(Array.isArray(res)) {
        this.activities=[...this.activities,...res]
      }
    })
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
