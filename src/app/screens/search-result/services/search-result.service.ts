import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getSearchResult(str:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}search`,{str}).pipe(
      map((value:any) => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }
  filter(body:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}getFiltersWeb`,body).pipe(
      map((value:any) => {
        if(Array.isArray(value.payload)) {
          return value.payload
        } else {
          return []
        }
      })
    )
  }
}
