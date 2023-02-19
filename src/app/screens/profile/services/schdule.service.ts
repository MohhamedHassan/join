import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class SchduleService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
    getActivitySchedule() {
      return this.http.post<any>(`${this.glopalService.apiUrlOne}getActivitySchedule`,{})
    }
}
