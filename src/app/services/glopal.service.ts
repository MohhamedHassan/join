import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GlopalService {
  hideNavbarAndFooter = new BehaviorSubject(false)
  constructor() { }
}
