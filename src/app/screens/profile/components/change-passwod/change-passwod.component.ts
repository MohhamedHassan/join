import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/screens/auth/services/auth.service';

@Component({
  selector: 'app-change-passwod',
  templateUrl: './change-passwod.component.html',
  styleUrls: ['./change-passwod.component.scss']
})
export class ChangePasswodComponent implements OnInit {
  changePasswordForm:FormGroup = new FormGroup({})
  submited=false
  loading=false
  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.changePasswordForm=this.fb.group({
      mobile:['',Validators.required],
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    })
    this.authService.userProfile.subscribe((res:any)=>{
      console.log(res)
      this.changePasswordForm.patchValue({
        mobile:res?.mobile
      })
    })
  }
  changePassword(value:any) {
    this.submited=true
    if(this.changePasswordForm.valid &&
      this.changePasswordForm.controls['confirm_password']?.value == this.changePasswordForm.controls['password']?.value ) {
      this.loading=true
      this.authService.resetPassword(value).subscribe(
        res => {
          this.loading=false
          if(res?.code==1) {
            this.toastr.success(res?.message);
            this.submited=false
            this.changePasswordForm.reset()
            this.changePasswordForm.patchValue(
              {
                old_password:'',
                password:'',
                confirm_password:'',
              }
            )
            this.changePasswordForm.reset()
          } else {
          }
        }
      )
    } else {
      console.log(this.changePasswordForm)
    }
   }
}
