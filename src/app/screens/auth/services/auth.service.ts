import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';
export interface signup {
  fname:string;
  lname:string;
  mobile:string;
  dob:string;
  password:string;
  device_type:string;
  area_id:string;
}
export interface login {
  mobile?:string;
  password?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  arealoading=false
  addressesLoading=false
  userProfile:any= new BehaviorSubject(null)
  addresses:any= new BehaviorSubject(null)
  areas:any= new BehaviorSubject(null)
  constructor(private glopalService:GlopalService,
    private http:HttpClient) { }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  signupu(formValue:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}signUp`,formValue)
  }
  logIn(formValue:any) {
    return this.http.post<{
      code:number,
      message:string,
      payload:{
        auth_token:string
      }
    }>(`${this.glopalService.apiUrlOne}logIn`,formValue)
  }
  getUserProfile() {
    return this.http.get<{payload:object}>(`${this.glopalService.apiUrlOne}user/getProfile`).pipe(
      map(value => value.payload)
    ).subscribe(res => this.userProfile.next(res))
  }
  updateUserProfile(formvalue:any) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/updateProfile`,formvalue)
  }
  getAllAreas() {
    this.arealoading=true
    return this.http.get<{payload:any[]}>(`${this.glopalService.apiUrlOne}areaList`).pipe(
      map(value => value.payload)
    ).subscribe(
      res=>{
        this.areas.next(res)
        this.arealoading=false
      }
    )
  }
  getAddress(user_id:string) {
    this.addressesLoading=true
    return this.http.post<{payload:any[]}>(`${this.glopalService.apiUrlOne}user/list_address`,{user_id}).pipe(
      map(value => value.payload)
    ).subscribe(res=>{
      this.addresses.next(res); 
      this.addressesLoading=false
    })
  }
  addAddress(formvalue:any) {
    return this.http.post<{payload:any[]}>(`${this.glopalService.apiUrlOne}user/add_address`,formvalue)
  }
  deleteAddress(address_id:any) {
    return this.http.post<{payload:any[]}>(`${this.glopalService.apiUrlOne}user/delete_address`,{address_id})
  }
  updateAddres(formvalue:any) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}user/edit_address`,formvalue)
  }
  resetPassword(formvalue:any) {
    return this.http.post<any>(`${this.glopalService.apiUrlOne}resetPassword`,formvalue)
  }
}
