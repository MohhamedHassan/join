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
  getStoreTabs(store_id:any) { 
    if(store_id=='0') {
      return this.http.get<{payload:{data:Tabs[]}}>(`${this.glopalService.apiUrlTwo}categories`)
    } else {
      return this.http.get<{payload:{data:Tabs[]}}>(`${this.glopalService.apiUrlTwo}categories?store_id=${store_id}`)
    }

  }
  getCategoryById(categoryId:string,page:number,store_id:any) {
  
    if(store_id=='0') {
      return this.http.get<{payload:{data:Product[]}}>(`${this.glopalService.apiUrlTwo}category/${categoryId}/products`,{
        params:{page}
      }).pipe(
        map(value => value?.payload?.data)
      )
    } else {
      return this.http.get<{payload:{data:Product[]}}>(`${this.glopalService.apiUrlTwo}category/${categoryId}/products?store_id=${store_id}`,{
        params:{page}
      }).pipe(
        map(value => value?.payload?.data)
      )
    }
  }
  getProductDetails(id:any) {
    return this.http.get<any>(`${this.glopalService.apiUrlTwo}product/${id}`).pipe(
      map(response => ({
        code: response.code,
        payload: response.payload
    }))
    )
  }
}
