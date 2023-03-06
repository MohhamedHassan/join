import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
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
  subscriber:Subscription
  constructor(public notificationsService:NotificationsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.notificationsService.getNotifications()
    this.subscriber =  this.notificationsService.notification.subscribe(
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
    if(!item?.action_id||!item?.message_type) return '/'
    else {
      if(item?.message_type=='user_notification') return `/history/action_id/${item?.action_id}`
      else if(item?.message_type=='bulk_notification') return `/`
      else if(item?.message_type=='activity') return `/activity/${item?.action_id}`
      else if(item?.message_type=='club') return `/clup/${item?.action_id}`
      else if(item?.message_type=='categories') return `/activities`
      else return '/'
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   if(this.subscriber) this.subscriber.unsubscribe()
  }
}
