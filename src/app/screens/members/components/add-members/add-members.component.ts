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
  selectedInterist=-1
  subInterst:any[]=[]
  selectedSubInterists:any[]=[]
  addMemberLoading=false
  update=false
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
        this.selectedSubInterists=item?.child_interest
        console.log(item?.child_name)
        console.log(this.memberForm.value)
      }
    }

  ngOnInit(): void {
    this.returnform()
    this.homeService.intersts.subscribe((res) => {
      if(Array.isArray(res)) {
        this.intersts=res
        console.log(this.intersts)
      }
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
    }
  }


selectInters(item:any,index:any) {
  this.selectedInterist=index
  this.subInterst=item?.sub_interests
  this.selectedSubInterists=[]
  item?.sub_interests.forEach(element => {
    let obj = {
      interests_id:element?.sub_interests_id
    }
    this.selectedSubInterists.push(obj)
  });
  console.log(this.selectedSubInterists)
  this.subInterst.map(item => {
    item.selected = true
  })
}
interstNext() {
  if(this.selectedInterist!=-1) {
    this.step=4
  }
}
selectSubInterist(id:any,index:any) {
  if(this.subInterst[index].selected) {
    let deleted = this.selectedSubInterists.findIndex(i => i.interests_id==id)
    this.selectedSubInterists.splice(deleted,1)
  } else {
    let obj = {
      interests_id:id
    }
    this.selectedSubInterists.push(obj)
  }
  console.log(this.selectedSubInterists)
  this.subInterst[index].selected = this.subInterst[index]?.selected ? false : true 
}
createMember() {
    if(this.selectedSubInterists.length) {
      let memberFormData = new FormData()
      let chosemdate=this.memberForm.get('dob')?.value
      var diff_ms = Date.now() - new Date(chosemdate).getTime();
      var age_dt = new Date(diff_ms); 
      let ag= Math.abs(age_dt.getUTCFullYear() - 1970)
      memberFormData.append('gender',this.selectedGender)
      memberFormData.append('name',this.memberForm.get('name')?.value)
      memberFormData.append('dob',this.memberForm.get('dob')?.value)
      memberFormData.append('age',JSON.stringify(ag))
      memberFormData.append('interests_id',JSON.stringify(this.selectedSubInterists))
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
              console.log(this.selectedSubInterists)
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
resetSteps() {
  this.step=1
  this.selectedGender=''
  this.memberImg=null
  this.imgUrl='assets/images/useravatar.png'
  this.memberForm.reset()
  this.submited=false
  this.selectedInterist=-1
  this.subInterst=[]
  this.selectedSubInterists=[]
  this.addMemberLoading=false
}
}
