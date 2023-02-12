import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MembersService } from 'src/app/screens/members/services/members.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.scss']
})
export class CartOneComponent implements OnInit {
  @Input() imgSrc:string=''
  @Input() price:string=''
  @Input() title:string=''
  @Input() age_from:string=''
  @Input() age_to:string=''
  @Input() interests_name:string=''
  @Input() location_count:string=''
  @Input() detailsPageRoute:string=''
  @Input() show_heart:boolean=false
  @Input() heartStatus:string=''
  @Input() activityId:string=''
  @Input() categories:any
  @Output() favoriteLoaing = new EventEmitter()
  @Output() changefavStatus = new EventEmitter()
  @Input() activityIndex = -1
  members:any[]=[]
  constructor(private foavoriteService:FavoriteService,
    private membersservice:MembersService) { }
  get lang() {return localStorage.getItem('lang') || 'en'}
  ngOnInit(): void {
    if(!!localStorage.getItem("joinToken")) {
      this.membersservice.members.subscribe(
        (res:any) =>  {
           if(res)  {
            this.members=res
           }
        }
     )
    }
  }
  test(){console.log('test')}
  addActivityToFavorite() {
    this.favoriteLoaing.emit(true)
    this.foavoriteService.addActivityToFavorite(this.activityId).subscribe(
      res => {
        this.favoriteLoaing.emit(false)
        if(res?.code==1) this.changefavStatus.emit(this.activityIndex)
      }
    )
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
}
