import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';
export interface activity_details {
  banner:string;
  title:string;
  location:{branch:{area_name:string},price:string}[];
  age_from:string;
  age_to:string;
  description:string;
  club_details: {
    logo:string;
    name:string;
  };
  schedule:string;
  gallery:{photo_name:string}[]
}
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getActivityDetailsForUser(id:number) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/getActivityById`,{
      club_activity_id:id
    }).pipe(
      map(value => value.payload)
    )
  }
  getActivityDetailsForGuest(id:number) {
    return this.http.post<{payload:activity_details}>(`${this.glopalService.apiUrlOne}getActivityByIdWeb`,{club_activity_id:id}).pipe(
      map(value => value.payload)
    )
  }

}
