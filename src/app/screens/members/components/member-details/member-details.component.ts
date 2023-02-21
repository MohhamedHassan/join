import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/screens/home/services/home.service';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  memberImg:any
  imgUrl:any='assets/images/useravatar.png'
  moveToFinishStep=false
  showDeleteMemberpopup=false
  memberDetails:any
  loading=true
  deleteLoading=false
  updateUserInfo=false
  editMemberPopup=false
  patchtoedit:any
  intersts:any[]=[]
  openedInterst=-1
  updateMemberLoading=false
  memberForm:FormGroup
  submited=false
  memberid
  constructor(private activatedRoute:ActivatedRoute,
    public homeService:HomeService,
    private toastr:ToastrService,
    private router:Router,
    private fb:FormBuilder,
    public membersservice:MembersService) { }

  ngOnInit(): void {
    this.memberForm=this.fb.group({
      name:['',Validators.required],
      last_name:['',Validators.required],
      dob:['',Validators.required]
    })
    this.activatedRoute.params.subscribe(
      (params:any) => {
        this.memberid=params?.id
        this.membersservice.members.subscribe(
          (res:any[])=>{
            this.loading=true
            if(res) {
              this.memberDetails= res.find(item => {
                return  item?.child_id==params?.id
               })
               this.homeService.intersts.subscribe((res) => {
                if(Array.isArray(res)) {
                  this.intersts=res
                  this.intersts.forEach(element => {
                    console.log(Array.isArray(element?.sub_interests) , element?.sub_interests?.length)
                    if(Array.isArray(element?.sub_interests) && element?.sub_interests?.length) {
                       element?.sub_interests.forEach(item => {
                          item.selected=false
                          if(this.memberDetails?.child_interests?.length) {
                            this.memberDetails?.child_interests.forEach(element => {
                                if(item?.sub_interests_id==element?.interests_id) item.selected=true
                            });
                          }

                       });
                    }
                    
                  });
                }
                console.log(this.intersts)
              })
               this.loading=false
               this.patchtoedit = {
                edit:true,
                ...this.memberDetails
               }
               console.log(this.memberDetails)
            }
          }
        )
      }
    )

  }
  patchform() {
    this.memberForm.patchValue({
      name:this.memberDetails.child_name.slice(0,this.memberDetails.child_name.indexOf(',')).trim(),
      last_name:this.memberDetails.child_name.slice(this.memberDetails.child_name.indexOf(',')+1).trim(),
      dob:this.memberDetails.child_dob
    })
    this.updateUserInfo=true
  }
  submitMemberForm(value) {
    this.submited=true
    console.log(this.memberForm)
    if(this.memberForm?.valid) {
      this.memberDetails.child_dob=this.memberForm.value.dob
      this.memberDetails.child_name=`${this.memberForm.get('name')?.value} , ${this.memberForm.get('last_name')?.value}`
      this.updateMember()
    }
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
  returnSelectedSubInteristsLength(item:any[]) {
    return item.filter(i => i.selected).length
  }
  isLastStepValid() {
    this.intersts.forEach(element => {
      if(Array.isArray(element?.sub_interests) && element?.sub_interests?.length) {
        if(element?.sub_interests.some(item => item.selected==true)) this.moveToFinishStep=true
     }
    });
  }
  updateMember() {
    this.isLastStepValid()
    if(this.moveToFinishStep) {
      this.updateMemberLoading=true
      let memberFormData = new FormData()
      let chosemdate=this.memberDetails?.child_dob
      var diff_ms = Date.now() - new Date(chosemdate).getTime();
      var age_dt = new Date(diff_ms); 
      let ag= Math.abs(age_dt.getUTCFullYear() - 1970)
      memberFormData.append('gender',this.memberDetails?.gender)
      memberFormData.append('name',this.memberDetails?.child_name)
      memberFormData.append('dob',this.memberDetails?.child_dob)
      memberFormData.append('age',JSON.stringify(ag))
      this.memberDetails.child_age=ag
      let selectedSubInterists:any[] = []
      this.intersts.forEach(element => {
        if(Array.isArray(element?.sub_interests) && element?.sub_interests?.length) {
           element?.sub_interests.forEach(item => {
              if(item?.selected) selectedSubInterists.push({interests_id:String(item?.sub_interests_id)})
           });
        }
        
      });
      memberFormData.append('interests_id',JSON.stringify(selectedSubInterists))
      if(this.memberImg) {
        memberFormData.append('photo',this.memberImg)
      }
      this.updateMemberLoading=true 
      if(true) {
        console.log('sdfgh,.')
        memberFormData.append('child_id',this.memberDetails?.child_id)
        this.membersservice.updateMember(memberFormData).subscribe(
          (res:any)=> {
            if(res?.code==1) {
              this.updateMemberLoading=false
              if(localStorage.getItem('lang')=='ar') {
                this.toastr.success("تم التعديل بنجاح")
              } else  {
                this.toastr.success('Updated Successfully')
              }
              this.membersservice.getAllMembers()
              window.scroll(0,0)
              this.updateUserInfo=false
              this.openedInterst=-1
            } else {
              this.updateMemberLoading=false
            }
          }, err=> {
            this.updateMemberLoading=false 
          }
        )
      }


    } else {
      if(localStorage.getItem('lang')=='ar') {
        this.toastr.error("قم بأختيار الاهتمام")
      } else  {
        this.toastr.error('Interest is required')
      }
      
      this.updateUserInfo=false
      this.openedInterst=-1
    }
  }
  selectMemberImg(event:any) {
    this.memberImg = event?.target?.files[0]
     let reader = new FileReader();
     reader.onload = () => {
       this.imgUrl = reader.result;
     };
   
   if(event?.target?.files[0]){
     reader.readAsDataURL(this.memberImg);
   } else {
    this.imgUrl='assets/images/useravatar.png'
    this.memberImg=null
   }
 }
 replaceComma(name:string) {
  return name.replace(',',' ')
 }
}
