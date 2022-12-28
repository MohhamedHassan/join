import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import  firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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
  areas:any[]=[]
  showVerificationpopup=false
  verifiedCodeControl:any = new FormControl('',Validators.required)
  captchaVerifier:any
  verificationId:any
  verifyoading=false
  counterId=1
  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private toastr:ToastrService
    ) { }
    getOtp() {
if(!this.intervalLoading) {
  this.loading=true
  this.counterId+=1
  let child = document.createElement('div')
  child.setAttribute('id',`captchaid${this.counterId}`)
  document.body.appendChild(child)
  this.captchaVerifier = new firebase.auth.RecaptchaVerifier(`captchaid${this.counterId}`,{size:'invisible'})
  firebase.auth().signInWithPhoneNumber(this.signupForm.value?.mobile?.e164Number,this.captchaVerifier).then((res) => {
    console.log(res)
    this.showVerificationpopup=true
    this.verificationId = res?.verificationId
    this.loading=false
    this.counterToEnable()
  }).catch((err) => {
    this.toastr.error(err?.message||'Something wnt wrong')  
    this.loading=false

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
    this.authService.getAllAreas()
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
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.pattern(/.com$/)]],
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
    this.submited=true
    console.log(this.signupForm.value)
    if(this.signupForm.valid&&!this.intervalLoading) {
      this.getOtp()
    } 
    if(this.intervalLoading) {
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
          console.log(res)
          this.verifyoading=false
          let frmdata = new FormData()
          let value = this.signupForm.value
          console.log(value.mobile)
          frmdata.append('fname',value.fname)
          frmdata.append('lname',value.lname)       
          frmdata.append('dob',value.dob)
          frmdata.append('password',value.password) 
          frmdata.append('device_type','W')
          frmdata.append('area_id',value.area_id) 
          frmdata.append('gender',value.gender) 
          frmdata.append('email',value.email)
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
                      localStorage.setItem('joinToken',res?.payload?.auth_token)
                      this.authService.getUserProfile()
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
        this.toastr.error(err?.message||'Something wnt wrong') 
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
}
