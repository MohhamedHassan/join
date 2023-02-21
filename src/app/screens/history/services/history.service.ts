import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getHistory() {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}getBookingHistory`,{}).pipe(
      map(value => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }
  rate(body) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/review`,body)
  }
}
