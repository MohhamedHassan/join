import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService, login } from '../../services/auth.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup=new FormGroup({})
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Kuwait];
  submited:boolean=false
  loading:boolean=false
	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
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
      mobile:formValue?.mobile?.e164Number,
    }
    this.loading=true
      this.authService.logIn(value).subscribe(
        res => {
          this.loading=false
          if(res?.code) {
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
