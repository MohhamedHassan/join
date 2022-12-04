import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notification:any=new BehaviorSubject(null)
  loading=false
  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
    getNotifications() {
      this.loading=true
      return this.http.post<any>(`${this.glopalService.apiUrlOne}getNotificationLog`,{}).pipe(
        map(value => {
          if(Array.isArray(value.payload)) {
            return value.payload
          } else {
            return []
          }
        })
      ).subscribe(
        res =>  {
          this.notification.next(res)
          this.loading=false
        }
      )
    }
    deleteNotification(id:any) {
      return this.http.post<{payload:any[]}>(`${this.glopalService.apiUrlOne}deleteNotification`,{id})
    }
}
