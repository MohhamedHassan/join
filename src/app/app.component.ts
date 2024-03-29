import { Component } from '@angular/core';
import { AuthService } from './screens/auth/services/auth.service';
import { HomeService } from './screens/home/services/home.service';
import { MembersService } from './screens/members/services/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsInlineValue = new Date();
 
  constructor(
    private membersservice:MembersService,
    private homeService:HomeService,
    private authService:AuthService) {

  }
  ngOnInit(): void {
   
if(!!localStorage.getItem('joinToken')) {
      this.membersservice.getAllMembers()
      this.authService.getUserProfile()
      this.homeService.getClupsUser()
    } else {
      this.homeService.getClupsGuest()
    }
    this.authService.getAllAreas()
    this.homeService.getIntersts()

  }
  onActivate(event) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }
}
