import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitem:any[]=[]
  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }
  getPromoCode() {
    return this.http.get<{payload:any}>(`${this.glopalService.apiUrlOne}promoCode`).pipe(
      map(value => value.payload)
    )
  }
  checkAvailableSeats(body) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/available_seats_1`,body)
  }
  creatBooking(body) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/createBooking_2`,body)
  }
  paymentRequest(body) {
    return this.http.post<any>(` https://apitest.myfatoorah.com/v2/ExecutePayment`,body)
  }
}
