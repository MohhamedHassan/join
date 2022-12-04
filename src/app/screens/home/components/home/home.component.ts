import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs:Tabs[] = 
  [
    {name_ar:'أنشطة',name_en:'Activities',id:'1'},
    {name_ar:'الاندية',name_en:'Clups',id:'2'},
  // {name:'Events',route:3},
  {name_ar:'الأهتمامات',name_en:'Interests',id:'3'}
]
  chosenTab:number=1

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
  //  localStorage.setItem('joinToken','user_CjA4eqhtP9Ke2re')
    if(!!localStorage.getItem("joinToken")) {
     this.homeService.getClupsUser()
     this.homeService.getActivitiesUser(1)
    }  else  {
      this.homeService.getClupsGuest()
      this.homeService.getActivitiesGuest(1)
    }

  }
  chosenTabFromChild(chosenTab:number) {
    this.chosenTab=chosenTab
  }
  ngOnDestroy(): void {
    this.homeService.activities.next([])
    this.homeService.intersts.next([])
    this.homeService.clups.next([])
    this.homeService.activitiesLoading=false
    this.homeService.ActivitiesRequestComplete=false
  }
}
