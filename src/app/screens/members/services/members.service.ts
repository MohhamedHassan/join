import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { GlopalService } from 'src/app/services/glopal.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members:any=new BehaviorSubject(null)
  membersLoading=false
  constructor(private http:HttpClient,
    private glopalService:GlopalService) { }

  getAllMembers() {
    this.membersLoading=true
    return this.http.post<{
      payload:{
      child_data:any
    }}>(`${this.glopalService.apiUrlOne}user/userChildDetails`,{}).pipe(
      map(value => value?.payload?.child_data)
    ).subscribe(
      (res:any)=> {
        if(Array.isArray(res))this.members.next(res)
        else this.members.next([])
        this.membersLoading=false
      }
    )
  }
  addMember(formData:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}user/addChild`,formData)
  }
  updateMember(formData:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}user/updateChild`,formData)
  }
  deleteMember(child_id:any) {
    return this.http.post(`${this.glopalService.apiUrlOne}user/removeChild`,{child_id})
  }
}
