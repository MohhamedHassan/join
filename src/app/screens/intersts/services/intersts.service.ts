import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';
import {map} from 'rxjs'
import { Activities } from '../../home/models/activities';
@Injectable({
  providedIn: 'root'
})
export class InterstsService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
    category_activitiesWeb(interests_id:string) {
      return this.http.post<{payload:Activities[]}>(`${this.glopalService.apiUrlOne}category_activitiesWeb`,{
        interests_id
      }).pipe(
        map(value => value.payload)
      )
    }
    category_activitiesUser(interests_id:string) {
      return this.http.post<{payload:Activities[]}>(`${this.glopalService.apiUrlOne}user/category_activities`,{
        interests_id
      }).pipe(
        map(value => value.payload)
      )
    }
}
