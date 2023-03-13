import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router:Router,
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
    if(!item?.action_id) {
      this.router.navigate(['/']) // go home
    }
    else {
      if(item?.notification_type=='user_notification')    this.router.navigate([`/history/order_details/${item?.action_id}`]) // go history details 
      else if(item?.notification_type=='bulk_notification') {
        if(item?.message_type=='activity') this.router.navigate([`/activity/${item?.action_id}`])   // go activity  details page
        else if(item?.message_type=='club') this.router.navigate([`/clup/${item?.action_id}`]) // go clup details page
        else if(item?.message_type=='categories') this.router.navigate([`/activities`])  // go activities page
        else  this.router.navigate(['/']) 
      }

    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   if(this.subscriber) this.subscriber.unsubscribe()
  }
}
