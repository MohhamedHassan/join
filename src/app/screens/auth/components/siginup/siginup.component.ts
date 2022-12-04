import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, signup } from '../../services/auth.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { GlopalService } from 'src/app/services/glopal.service';
@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.scss']
})
export class SiginupComponent implements OnInit {
  signupForm:FormGroup= new FormGroup({})
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Kuwait];
  submited:boolean=false
  loading:boolean=false
  areas:any[]=[]
  constructor(private fb:FormBuilder,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.returnsignupForm()
      this.authService.areas.subscribe(
        (res:any) => {
          this.areas=res
        }
      )
  }

  returnsignupForm() {
    return this.signupForm = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      mobile:['',Validators.required],
      dob:['',Validators.required],
      password:['',Validators.required],
      device_type:['W'],
      area_id:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      device_token:['_']
    })
  }
  dateInputType(value:any) {
    if(!value.value) {
      value.type='text'
      value.blur()
    }

  }
  signUp(formValue:any) {
    let x = new FormData()
    for(let i in formValue) x.append(i,formValue[i])
    this.authService.signupu(x).subscribe(
      res => console.log(res)
    )
  }
  get lang() {return localStorage.getItem('lang')||'en'}

}
