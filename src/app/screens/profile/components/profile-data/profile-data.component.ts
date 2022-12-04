import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/screens/auth/services/auth.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  areas:any[]=[]
  profilForm:FormGroup=new FormGroup({})
  submited:boolean=false
  loading:boolean=false
  constructor(private authService:AuthService,
    private toastr:ToastrService,
    private fb:FormBuilder) { }

  ngOnInit(): void {    
    this.returnsignupForm()
    this.authService.userProfile.subscribe((res:any)=>{
      console.log(res)
      this.profilForm.patchValue({
        fname:res?.fname,
        lname:res?.lname,
        mobile:res?.mobile,
        dob:res?.dob,
        area_id:res?.area_id,
        email:res?.email,
      })
    })
    this.authService.areas.subscribe(
      (res:any) => {
        this.areas=res
      }
    )
  }
  returnsignupForm() {
    return this.profilForm = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      mobile:['',Validators.required],
      dob:['',Validators.required],
      area_id:['',Validators.required],
      email:['',[Validators.required,Validators.email]],

    })
  }
  dateInputType(value:any) {
    if(!value.value) {
      value.type='text'
      value.blur()
    }

  }
  updateProfile(formvalue:any) {
    this.submited=true
    if(this.profilForm.valid) {
      this.loading=true
      this.authService.updateUserProfile(formvalue).subscribe(
        res=> {
         
          this.loading=false
          if(res?.code) {
            this.toastr.success(res?.message);
            this.authService.getUserProfile()
          } else {
            
          }
        }
      )
    }
  }
}
