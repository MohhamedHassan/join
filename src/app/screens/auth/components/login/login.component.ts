import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService, login } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup=new FormGroup({})
  submited:boolean=false
  loading:boolean=false

  constructor(private authService:AuthService,
    private router:Router,
    private toastr:ToastrService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  login(formValue:any) {
   this.submited=true
   if(this.loginForm.valid) {
    let value = {
      password:formValue?.password,
      mobile:formValue?.mobile?.e164Number.replace(formValue?.mobile?.dialCode,''),
    }
    this.loading=true
      this.authService.logIn(value).subscribe(
        res => {
          this.loading=false
          if(res?.code==1) {
            this.toastr.success(res?.message);
            localStorage.setItem('joinToken',res?.payload?.auth_token)
            this.authService.getUserProfile()
            this.router.navigate(['/'])
          } else {
          }
        }
      )
   }
  }
  get lang() {return localStorage.getItem('lang')||'en'}
}
