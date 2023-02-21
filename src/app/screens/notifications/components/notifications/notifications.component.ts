import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications:any[]=[]
  showDeleteNotificationsPopup=-1
  deleteLoading=false
  constructor(public notificationsService:NotificationsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.notificationsService.getNotifications()
    this.notificationsService.notification.subscribe(
      (res:any) =>  {
        if(res) {
          this.notifications=res
          this.notifications.reverse()
        }
      }
    )
  }
  deleteNotification() {
    this.deleteLoading=true
    this.notificationsService.deleteNotification(this.showDeleteNotificationsPopup).subscribe((res:any)=> {
      if(res?.code==1) {
        this.notificationsService.getNotifications()
        this.toastr.success(res?.message);
        this.showDeleteNotificationsPopup=-1
      } 
      this.deleteLoading=false
    })
  }
  get lang() {return localStorage.getItem('lang')||'en'}
  checkRoute(item:any) {
    if(!item?.action_id||!item?.notification_type) return '/'
    else {
      if(item?.notification_type=='user_notification') return `/history/action_id/${item?.action_id}`
      else if(item?.notification_type=='bulk_notification') return `/`
      else if(item?.notification_type=='activity') return `/activity/${item?.action_id}`
      else if(item?.notification_type=='club') return `/clup/${item?.action_id}`
      else if(item?.notification_type=='categories') return `/activities`
      else return '/'
    }
  }
}
