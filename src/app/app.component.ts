import { Component } from '@angular/core';
import { AuthService } from './screens/auth/services/auth.service';
import { HomeService } from './screens/home/services/home.service';
import { MembersService } from './screens/members/services/members.service';
import { NotificationsService } from './screens/notifications/services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private notficationsService:NotificationsService,
    private membersservice:MembersService,
    private homeService:HomeService,
    private authService:AuthService) {

  }
  ngOnInit(): void {
    if(!!localStorage.getItem('joinToken')) {
      this.notficationsService.getNotifications()
      this.membersservice.getAllMembers()
      this.authService.getUserProfile()
    }
    this.authService.getAllAreas()
    this.homeService.getIntersts()
  }
}
