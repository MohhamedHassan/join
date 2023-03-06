import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { HomeService } from 'src/app/screens/home/services/home.service';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { Options } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';
import { NgxStarsComponent } from 'ngx-stars';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild(NgxStarsComponent)
  starsComponent: NgxStarsComponent;
  interst:any=[]
  areas:any=[]
  members:any=[]
  rate:any = 0
  value: number = 0;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 60
  };
  value2: number = 0;
  highValue2: number = 3000;
  options2: Options = {
    floor: 0,
    ceil: 3000
  };
  @Output() closefilterpopup = new EventEmitter()
  constructor(public homeService:HomeService,
    private router:Router,
    public membersservice:MembersService,
    public authService:AuthService) { }
    ratingDisplay: number;
  
    onRatingSet(rating: number): void {
     
 
      if(this.rate==0.5&&rating==0.5) {
        this.rate=0
        this.starsComponent.setRating(0);
      } else {
        this.rate = rating;
      }
    }
  ngOnInit(): void {
    // if(!!localStorage.getItem('joinToken')) {
    //   this.membersservice.getAllMembers()
    // }
    //this.homeService.getIntersts()
    // this.authService.getAllAreas()
    this.homeService.intersts.subscribe(
      res => {
        this.interst=res
        this.interst.forEach((element:any) => {
          if(element?.sub_interests?.length) {
            element?.sub_interests.map((item:any) => {
              item.selected=false
            })
          }
        });
      }
    )
    this.authService.areas.subscribe(
       (res:any) =>  {
          if(res) {
            this.areas=res
            this.areas.forEach((element:any) => {
              if(element?.areas?.length) {
                element?.areas.map((item:any) => {
                  item.selected=false
                })
              }
            });
          }
       }
    )
    this.membersservice.members.subscribe(
      (res:any) =>  {
         if(res)  {
          this.members=res
          this.members.forEach((element:any) => {
              element.selected=false
          });
         }
      }
   )
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  doneFilter() {
    let body:any =  [    
        {
            interests_id:[],
            child_id:[],
            area_id:[],
            age_from:this.value,
            age_to:this.highValue,
            price_from:this.value2,
            price_to:this.highValue2,
            rating:this.rate
          }
      ]
    this.interst.forEach((element:any) => {
        element.sub_interests.forEach((item:any) => {
            if(item?.selected) body[0].interests_id.push(item?.sub_interests_id)
        });
    });
    this.areas.forEach((element:any) => {
      element.areas.forEach((item:any) => {
          if(item?.selected) body[0].area_id.push(item?.id)
      });
  });
  this.members.forEach((element:any) => {
    if(element?.selected) body[0].child_id.push(element?.child_id)
});
    this.closefilterpopup.emit(true)
   this.router.navigate(['/search/-1/-1'],{queryParams : {filterbody:JSON.stringify(body)}})
  }
}
