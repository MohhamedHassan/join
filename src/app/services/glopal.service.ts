import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GlopalService {
  hideNavbarAndFooter = new BehaviorSubject(false)
  apiUrlOne:string='https://app.join.com.kw/api/v1/'
  apiUrlTwo:string='https://app.join.com.kw/api/v2/'
  constructor() { }
}
