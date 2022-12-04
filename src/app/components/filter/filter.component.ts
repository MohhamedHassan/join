import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { HomeService } from 'src/app/screens/home/services/home.service';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  interst:any=[]
  areas:any=[]
  members:any=[]
  rate:any = 0
  value: number = 40;
  highValue: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  value2: number = 40;
  highValue2: number = 0;
  options2: Options = {
    floor: 0,
    ceil: 100
  };
  constructor(private homeService:HomeService,
    private membersservice:MembersService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.homeService.intersts.subscribe(
      res => this.interst=res
    )
    this.authService.areas.subscribe(
       (res:any) =>  {
          if(res)  this.areas=res
       }
    )
    this.membersservice.members.subscribe(
      (res:any) =>  {
         if(res)  this.members=res
      }
   )
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
}
