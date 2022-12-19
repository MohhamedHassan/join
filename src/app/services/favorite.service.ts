import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from './glopal.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  
  addActivityToFavorite(club_activity_id:string) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/favoriteActivity`,{club_activity_id})
  }
  addClupToFavorite(club_id:string) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/favorite`,{club_id})
  }
  GetActivityFavorite() {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/getFavoriteActivities`,{})
  }
  getClupFavorite() {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/getFavoriteClubs`,{})
  }
}
