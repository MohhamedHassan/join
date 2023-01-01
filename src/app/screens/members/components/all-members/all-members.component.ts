import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit {
  members:any
  showpopup=false
  constructor(public membersservice:MembersService) { }

  ngOnInit(): void {
    this.membersservice.getAllMembers()
    this.membersservice.members.subscribe(
      (res:any)=>{
        this.members=res
      }
    )
  }
  child_photo(item:any) {
    if(item?.child_photo&&item?.child_photo!='https://app.join.com.kw/public/child_image') return item?.child_photo
    else {
      if(item?.gender=="GIRL") return "assets/images/girl.png"
      else if(item?.gender=="BOY") return "assets/images/boy.png"
    }
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
