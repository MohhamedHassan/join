import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/screens/home/services/home.service';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {
  step:number=1
  intersts:any
  selectedGender:any
  memberImg:any
  imgUrl:any='assets/images/useravatar.png'
  memberForm:FormGroup=new FormGroup({})
  submited=false
  addMemberLoading=false
  update=false
  openedInterst=-1
  moveToFinishStep=false
  @Input() patchToEdit:any
  @Output() closePopUp = new EventEmitter()
  constructor(private homeService:HomeService,
    private toastr:ToastrService,
    private memberService:MembersService,
    private fb:FormBuilder) { }
    ngOnChanges(changes:any): void {
      if(changes?.patchToEdit?.currentValue?.edit) {
        this.update=true
        console.log(changes?.patchToEdit?.currentValue)
        let item = changes?.patchToEdit?.currentValue
        this.selectedGender= item?.gender
        if(!item?.child_photo||item?.child_photo=='https://app.join.com.kw/public/child_image') {
          this.imgUrl='assets/images/useravatar.png' 
        } else {
          this.imgUrl=item?.child_photo
        }
        this.returnform()
        this.memberForm.patchValue({
          name:changes?.patchToEdit?.currentValue?.child_name,
          dob:changes?.patchToEdit?.currentValue?.child_dob
        })
        console.log(item?.child_name)
        console.log(this.memberForm.value)
      }
    }
isLastStepValid() {
  this.intersts.forEach(element => {
    if(Array.isArray(element?.sub_interests) && element?.sub_interests?.length) {
      if(element?.sub_interests.some(item => item.selected==true)) this.moveToFinishStep=true
   }
  });
}
  ngOnInit(): void {
    this.returnform()
    this.homeService.intersts.subscribe((res) => {
      if(Array.isArray(res)) {
        this.intersts=res
        this.intersts.forEach(element => {
          console.log(Array.isArray(element?.sub_interests) , element?.sub_interests?.length)
          if(Array.isArray(element?.sub_interests) && element?.sub_interests?.length) {
             element?.sub_interests.forEach(item => {
                item.selected=true
             });
          }
          
        });
      }
      console.log(this.intersts)
    })

  }
  returnform() {
    this.memberForm=this.fb.group({
      name:['',Validators.required],
      dob:['',Validators.required]
    })
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
  selectGEnderDone() {
    if(this.selectedGender) this.step=2
    if(this.patchToEdit?.edit) {
      this.memberForm.patchValue({
        name:this.patchToEdit?.child_name,
        dob:this.patchToEdit?.child_dob
      })
    }
  }
  submitMemberForm(value:any) {
    this.submited=true 
    if(this.memberForm.valid) {
      this.step=3
      this.isLastStepValid();
    }
  }





createMember() {
  this.isLastStepValid()
    if(this.moveToFinishStep) {
      let memberFormData = new FormData()
      let chosemdate=this.memberForm.get('dob')?.value
      var diff_ms = Date.now() - new Date(chosemdate).getTime();
      var age_dt = new Date(diff_ms); 
      let ag= Math.abs(age_dt.getUTCFullYear() - 1970)
      memberFormData.append('gender',this.selectedGender)
      memberFormData.append('name',this.memberForm.get('name')?.value)
      memberFormData.append('dob',this.memberForm.get('dob')?.value)
      memberFormData.append('age',JSON.stringify(ag))
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
      this.addMemberLoading=true 
      if(this.update) {
        memberFormData.append('child_id',this.patchToEdit?.child_id)
        this.memberService.updateMember(memberFormData).subscribe(
          (res:any)=> {
            if(res?.code==1) {
              this.memberService.getAllMembers()
              this.addMemberLoading=false
              this.toastr.success(res?.message)
              this.closePopUp.emit(true)
            } else {
              this.addMemberLoading=false
            }
          }, err=> {
            this.addMemberLoading=false 
          }
        )
      } else {
        this.memberService.addMember(memberFormData).subscribe(
          (res:any)=> {
            if(res?.code==1) {
              this.memberService.getAllMembers()
              this.addMemberLoading=false
              this.toastr.success(res?.message)
              this.closePopUp.emit(true)
            } else {
              this.addMemberLoading=false
            }
          }, err=> {
            this.addMemberLoading=false 
          }
        )
      }

    }

}

returnSelectedSubInteristsLength(item:any[]) {
  return item.filter(i => i.selected).length
}
}
