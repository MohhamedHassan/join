import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
    promotions_page_Banner() {
      return this.http.post<any>(`${this.glopalService.apiUrlOne}promotions_page_Banner`,{})
    }
  
}
