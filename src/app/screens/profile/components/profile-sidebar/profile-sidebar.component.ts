import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/screens/auth/services/auth.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  @Output() chosenTab = new EventEmitter()
  openedTab=1
  email=''
  name=''
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userProfile.subscribe((res:any)=>{
      this.name=`${res?.fname} ${res?.lname}`
      this.email=res?.email
    })
  }
emitToParent(tab:number) {
  this.openedTab=tab
  this.chosenTab.emit(tab)
}
}
