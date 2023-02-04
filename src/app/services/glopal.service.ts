import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GlopalService {
  hideNavbarAndFooter = new BehaviorSubject(false)
  apiUrlOne:string='https://app.join.com.kw/api/v1/'
  apiUrlTwo:string='https://app.join.com.kw/api/v2/'

  //   apiUrlOne:string='https://code-pirates.com/join/api/v1/'
  //  apiUrlTwo:string='https://code-pirates.com/join/api/v2/'
  constructor() { }

}
