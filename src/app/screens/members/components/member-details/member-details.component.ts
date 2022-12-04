import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  showDeleteMemberpopup=false
  memberDetails:any
  loading=true
  deleteLoading=false
  editMemberPopup=false
  patchtoedit:any
  constructor(private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    public membersservice:MembersService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params:any) => {
        this.membersservice.members.subscribe(
          (res:any[])=>{
            this.loading=true
            if(res) {
              this.memberDetails= res.find(item => {
                return  item?.child_id==params?.id
               })
               this.loading=false
               this.patchtoedit = {
                edit:true,
                ...this.memberDetails
               }
               console.log(this.patchtoedit)
            }
          }
        )
      }
    )

  }
  child_photo() {
    if(this.memberDetails?.child_photo&&this.memberDetails?.child_photo!='https://app.join.com.kw/public/child_image') return this.memberDetails?.child_photo
    else {
      if(this.memberDetails?.gender=="GIRL") return "assets/images/girl.png"
      else if(this.memberDetails?.gender=="BOY") return "assets/images/boy.png"
    }
  }
  deleteMember() {
    this.deleteLoading=true
    this.membersservice.deleteMember(this.memberDetails?.child_id).subscribe(
      (res:any) => {
        if(res?.code==1) {
          this.toastr.success(res?.message);
          this.membersservice.getAllMembers()
          this.router.navigate(['/members'])
        } else {
          this.deleteLoading=false
        }
      }
    )
  }
  get lang() {return localStorage.getItem('lang')||'en'}
}
