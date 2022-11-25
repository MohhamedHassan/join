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
}
