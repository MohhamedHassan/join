import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';
import { Activities } from '../models/activities';
import { Clups } from '../models/clups';
import { GetActivitiesParams } from '../models/get-activities-params';
import { Intersts } from '../models/intersts';
import { Popular } from '../models/popular';
import { TopSlider } from '../models/top-slider';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  activities:BehaviorSubject<Activities[]> = new BehaviorSubject<Activities[]>([])
  clups:BehaviorSubject<Clups[]> = new BehaviorSubject<Clups[]>([])
  intersts:BehaviorSubject<Intersts[]> = new BehaviorSubject<Intersts[]>([])
  activitiesLoading=true
  clupsLoading=true
  interistsLoading=true
  ActivitiesRequestComplete:boolean=false
  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getTopSliderGuest() {
    return this.http.post<{payload:TopSlider[]}>(`${this.glopalService.apiUrlOne}promoBannerOpen`,{}).pipe(
      map(value => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }
  getTopSliderUser() {
    return this.http.post<{payload:TopSlider[]}>(`${this.glopalService.apiUrlOne}user/promoBanner`,{}).pipe(
      map(value => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }
  getActivitiesGuest(page:number) {
    this.activitiesLoading=true
    this.ActivitiesRequestComplete=false
    let bodyParams:GetActivitiesParams = {
      activity_type:"DATE",
      limit:10,
      page
    }
    return this.http.post<{payload:Activities[]}>(`${this.glopalService.apiUrlOne}getActivityListWeb`,bodyParams).pipe(
      map(value => value.payload)
    ).subscribe(
      res=> {
        if(Array.isArray(res))this.activities.next(res)
        else this.activities.next([])
        this.activitiesLoading=false
        this.ActivitiesRequestComplete=true
      }
    )
  }
  getActivitiesUser(page:number) {
    this.ActivitiesRequestComplete=false
    this.activitiesLoading=true
    let bodyParams:GetActivitiesParams = {
      activity_type:"DATE",
      limit:10,
      page
    }
    return this.http.post<{payload:Activities[]}>(`${this.glopalService.apiUrlOne}user/getActivityList`,bodyParams).pipe(
      map(value => value.payload)
    ).subscribe(
      res=> {
        if(Array.isArray(res))this.activities.next(res)
        else this.activities.next([])
        this.activitiesLoading=false
        this.ActivitiesRequestComplete=true
      }
    )
  }


  getClupsGuest() {
    return this.http.post<{payload:Clups[]}>(`${this.glopalService.apiUrlOne}getClubListWeb`,{}).pipe(
      map(value => value.payload)
    ).subscribe(
      res=> {
        if(Array.isArray(res))this.clups.next(res)
        else this.clups.next([])
        this.clupsLoading=false
      }
    )
  }
  getClupsUser() {
    return this.http.post<{payload:Clups[]}>(`${this.glopalService.apiUrlOne}user/getClubList`,{}).pipe(
      map(value => value.payload)
    ).subscribe(
      res=> {
        if(Array.isArray(res))this.clups.next(res)
        else this.clups.next([])
        this.clupsLoading=false
      }
    )
  }


  getIntersts() {
    return this.http.get<{payload:Intersts[]}>(`${this.glopalService.apiUrlOne}interestsList`).pipe(
      map(value => value.payload)
    ).subscribe(
      res=> {
        if(Array.isArray(res))this.intersts.next(res)
        else this.intersts.next([])
        this.interistsLoading=false
      }
    )
  }
  getPopular() {
    return this.http.get<{payload:Popular[]}>(`${this.glopalService.apiUrlOne}mostSelling`).pipe(
      map(value => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }

}
