import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';
import {map} from 'rxjs'
export interface clup_details {
  banner?:string;
  logo?:string;
  name?:string;
  activity_count:string;
  review:review[];
  gallery:{photo_name:string}[];
  location_count:string;
  description:string;
  id:string
}
export interface review {
created_at:string;
review_desc:string;
review_rating:string;
user_name:string
}
@Injectable({
  providedIn: 'root'
})
export class ClupDetailsService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getClupDetailsForGuest(id:string) {
    return this.http.post<{payload:clup_details}>(`${this.glopalService.apiUrlOne}getClubDetailsWeb`,{
      club_id:id
    }).pipe(
      map(value => value.payload)
    )
  }
  getClupDetailsForUser(id:string) {
    return this.http.post<{payload:clup_details}>(`${this.glopalService.apiUrlOne}user/getClubDetails`,{
      club_id:id
    }).pipe(
      map(value => value.payload)
    )
  }
  getClupActivitiesForUser(clupIdLstring:string) {
      return this.http.post<{payload:any}>(`${this.glopalService.apiUrlOne}user/getActivityListByClub`,{
        club_id:clupIdLstring
      }).pipe(
        map(value => value.payload)
      )
  }
  getClupActivitiesForGuest(clupIdLstring:string) {
    return this.http.post<{payload:any}>(`${this.glopalService.apiUrlOne}getActivityListByClubWeb`,{
      club_id:clupIdLstring
    }).pipe(
      map(value => value.payload)
    )
  }
}
