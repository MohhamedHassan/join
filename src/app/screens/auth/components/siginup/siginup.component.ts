import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import  firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'src/app/screens/notifications/services/notifications.service';
import { MembersService } from 'src/app/screens/members/services/members.service';
@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.scss']
})
export class SiginupComponent implements OnInit {
  intervalLoading=false
  counter=60
  setIntervalVariable:any
  signupForm:FormGroup= new FormGroup({})
  submited:boolean=false
  loading:boolean=false
  counterId=1
  areas:any[]=[]
  showVerificationpopup=false
  verifiedCodeControl:any = new FormControl('',[Validators.required,Validators.pattern(/^\d{6}$/)])
  captchaVerifier:any
  verificationId:any
  verifyoading=false
  hideEmailAndPassword=false
  constructor(private fb:FormBuilder,
    private router:Router,
    private notficationsService:NotificationsService,
    private membersservice:MembersService,
    private activatedRoute:ActivatedRoute,
    private authService:AuthService,
    private toastr:ToastrService
    ) { }
    getOtp() {
if(!this.intervalLoading) {
  this.loading=true
  this.counterId+=1
  let child = document.createElement('div')
  child.setAttribute('id',`captchaid${this.counterId}`)
  child.setAttribute('class','d-none')
  document.body.appendChild(child)
  this.captchaVerifier = new firebase.auth.RecaptchaVerifier(`captchaid${this.counterId}`,{size:'invisible'})
  firebase.auth().signInWithPhoneNumber(this.signupForm.value?.mobile?.e164Number,this.captchaVerifier).then((res) => {

    this.showVerificationpopup=true
    this.verificationId = res?.verificationId
    this.loading=false
    this.counterToEnable()
  }).catch((err) => {
    if(err?.message=='reCAPTCHA has already been rendered in this element') {
      this.getOtp()
    } else {
      this.toastr.error(err?.message || 'Something wnt wrong')
      this.loading = false
    }

  })
}
     }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBspMnWz9iq5Evt11YwGkcEPqghHyIGwuo",
      authDomain: "joinapp-515e6.firebaseapp.com",
      databaseURL: "https://joinapp-515e6.firebaseio.com",
      projectId: "joinapp-515e6",
      storageBucket: "joinapp-515e6.appspot.com",
      messagingSenderId: "794053292456",
      appId: "1:794053292456:web:36878b6a9a02cff3"
    })
    this.returnsignupForm()
    //this.authService.getAllAreas()
      this.authService.areas.subscribe(
        (res:any) => {
          this.areas=res
        }
      )
    this.activatedRoute.queryParamMap.subscribe(
      (res:any) =>  {
        if(res?.params?.type) {
          this.signupForm.get('password').clearValidators();
          this.signupForm.get('password').updateValueAndValidity();
          this.signupForm.get('email').clearValidators();
          this.signupForm.get('email').updateValueAndValidity();
          this.hideEmailAndPassword=true
          this.signupForm.patchValue({
            fname:res?.params?.given_name,
            lname:res?.params?.family_name,
            email:res?.params?.email ? res?.params?.email : 'user@gmail.com',
            password:'-',
            confirm_email:res?.params?.email ? res?.params?.email : 'user@gmail.com',
            confirm_password:'-',
          })
          if(res?.params?.type==1) {
            this.signupForm.patchValue({
              google_id:res?.params?.id
           
            })        
          } else if(res?.params?.type==2) {
            this.signupForm.patchValue({
              facebook_id:res?.params?.id
            })
          } 
        } else {
          this.signupForm.get('password').setValidators([Validators.required]);
          this.signupForm.get('password').updateValueAndValidity();
          this.signupForm.get('email').setValidators([Validators.required,Validators.email,,Validators.pattern(/.com$/)]);
          this.signupForm.get('email').updateValueAndValidity();
          this.hideEmailAndPassword=false
        }
      }
    )
  }

  returnsignupForm() {
    return this.signupForm = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      mobile:['',Validators.required],
      dob:['',Validators.required],
      password:[''],
      device_type:['W'],
      area_id:['',Validators.required],
      gender:['',Validators.required],
      email:[''],
      confirm_email:[''],
      confirm_password:[''],
      device_token:['_'],
      facebook_id:[''],
      google_id:['']
    })
  }
  dateInputType(value:any) {
    if(!value.value) {
      value.type='text'
      value.blur()
    }

  }
  signUp(formValue:any) {
    this.submited=true
    if(this.signupForm.valid&&!this.intervalLoading&&
      this.signupForm.get('password').value==this.signupForm.get('confirm_password').value &&
      this.signupForm.get('email').value==this.signupForm.get('confirm_email').value
      ) {
      this.getOtp()
    } 
    if(this.signupForm.valid&&this.intervalLoading&&
      this.signupForm.get('password').value==this.signupForm.get('confirm_password').value &&
      this.signupForm.get('email').value==this.signupForm.get('confirm_email').value) {
      this.showVerificationpopup=true 
    }

  }
  get lang() {return localStorage.getItem('lang')||'en'}
  verifyCode() {
    if(this.verificationId) {
      this.verifyoading=true
      let credentials  = firebase.auth.PhoneAuthProvider.credential(
        this.verificationId,
        this.verifiedCodeControl?.value
      )
      firebase.auth().signInWithCredential(credentials).then(
        res =>  {
          this.verifyoading=false
          let frmdata = new FormData()
          let value = this.signupForm.value
          frmdata.append('fname',value.fname)
          frmdata.append('lname',value.lname)       
          frmdata.append('dob',value.dob)
          frmdata.append('password',value.password) 
          frmdata.append('device_type','W')
          frmdata.append('area_id',value.area_id) 
          frmdata.append('gender',value.gender) 
          frmdata.append('email',value.email)
          if(value?.google_id)  frmdata.append('google_id',value.google_id)
          if(value?.facebook_id)  frmdata.append('facebook_id',value.facebook_id)
          frmdata.append('device_token','_') 
          let mobile = this.signupForm.get('mobile')?.value.e164Number.replace(this.signupForm.get('mobile')?.value.dialCode,'')
          frmdata.append('mobile',mobile) 
          this.authService.signupu(frmdata).subscribe(
            (res:any) => {
              if(res?.code==1) {
                this.authService.logIn({
                  mobile:mobile,
                  password:value.password
                }).subscribe(
                  res => {
                    this.loading=false
                    if(res?.code==1) {
                      this.toastr.success(localStorage.getItem('lang')=='ar'?'تم انشاء حسابك بنجاج':'Account successfully created');
                      localStorage.removeItem('joincart')
                      localStorage.setItem('joinToken',res?.payload?.auth_token)
                      this.authService.getUserProfile()
                  //    this.notficationsService.getNotifications()
                      this.membersservice.getAllMembers()
                      this.router.navigate(['/'])
                      window.location.reload();
                    } else {
                    }
                  }
                )
              } else {
                this.showVerificationpopup=false
              }
            }
          )
        }
      ).catch((err) => {
        if(err?.message=='Firebase: The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user. (auth/invalid-verification-code).') {
          this.toastr.error(localStorage.getItem('lang')=='ar' ? 'هذا الرمز  غير صحيح' : 'Invalid Code') 
        } else {
          this.toastr.error(err?.message||'Something wnt wrong') 
        }
        this.verifyoading=false 
      })
    }
  }
  counterToEnable() {
    if(!this.intervalLoading) {
      this.counter=60
      this.intervalLoading=true
     this.setIntervalVariable = setInterval(() => {
        this.counter-=1
        if(this.counter==0) {
          this.counter=60
          clearInterval(this.setIntervalVariable)
          this.intervalLoading=false
        }
      },1000)
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
