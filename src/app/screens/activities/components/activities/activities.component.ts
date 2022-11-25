import { Component, OnInit } from '@angular/core';
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
  constructor(public homeService:HomeService) { }



  ngOnDestroy(): void {
    this.homeService.activities.next([])
    this.homeService.ActivitiesRequestComplete=false
  }


  ngOnInit(): void {
    if(!!localStorage.getItem("joinToken")) {
      this.homeService.getActivitiesUser(1)
     }  else  {
       this.homeService.getActivitiesGuest(1)
     }
    this.homeService.activities.subscribe((res) => {
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

}
