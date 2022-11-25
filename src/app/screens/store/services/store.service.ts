import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';
import { map } from 'rxjs';
import { Tabs } from 'src/app/models/tabs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private glopalService:GlopalService,
    private http:HttpClient) { }
  getStoreTabs() {  
    return this.http.get<{payload:{data:Tabs[]}}>(`${this.glopalService.apiUrlTwo}categories`)
  }
  getCategoryById(categoryId:string) {
    return this.http.get<{payload:{data:Product[]}}>(`${this.glopalService.apiUrlTwo}category/${categoryId}/products`).pipe(
      map(value => value?.payload?.data)
    )
  }
}
