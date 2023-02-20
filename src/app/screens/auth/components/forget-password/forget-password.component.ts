import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  @Output() closePopup = new EventEmitter()
  forgetPasswordForm: FormGroup
  newPasswordForm: FormGroup
  stepThreeLoading=false
  submited = false
  submited2 = false
  step = 1
  intervalLoading = false
  counter = 60
  loading: boolean = false
  counterId = 1
  captchaVerifier: any
  verificationId: any
  setIntervalVariable: any
  verifiedCodeControl:any = new FormControl('',[Validators.required,Validators.pattern(/^\d{6}$/)])
  verifyoading=false
  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private toastr: ToastrService) { }

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
    this.forgetPasswordForm = this.fb.group({
      mobile: ['', Validators.required]
    })
   this.newPasswordForm = this.fb.group({
      password:['',Validators.required],
      confirm_password:['']
    })
  }
  submitStepOne() {
    this.submited = true
    if(this.forgetPasswordForm.valid) this.getOtp()
  }
  getOtp() {
    if (!this.intervalLoading) {
      this.loading = true
      this.counterId += 1
      let child = document.createElement('div')
      child.setAttribute('id', `captchaid${this.counterId}`)
      child.setAttribute('class', 'd-none')
      document.body.appendChild(child)
      this.captchaVerifier = new firebase.auth.RecaptchaVerifier(`captchaid${this.counterId}`, { size: 'invisible' })
      firebase.auth().signInWithPhoneNumber(this.forgetPasswordForm.value?.mobile?.e164Number, this.captchaVerifier).then((res) => {
        console.log(res)
        this.step = 2
        this.verificationId = res?.verificationId
        this.loading = false
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
  // /////////
  counterToEnable() {
    if (!this.intervalLoading) {
      this.counter = 60
      this.intervalLoading = true
      this.setIntervalVariable = setInterval(() => {
        this.counter -= 1
        if (this.counter == 0) {
          this.counter = 60
          clearInterval(this.setIntervalVariable)
          this.intervalLoading = false
        }
      }, 1000)
    }
  }
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
          this.step=3

            }
      ).catch((err) => {
        if(err?.message=='Firebase: The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user. (auth/invalid-verification-code).') {
          this.toastr.error('Invalid Code') 
        } else {
          this.toastr.error(err?.message||'Something wnt wrong') 
        }
        this.verifyoading=false 
      })
    }
  }
  submitStepThree() {
    this.submited2=true
    if(this.newPasswordForm.valid && 
      this.newPasswordForm.get('password').value==this.newPasswordForm.get('confirm_password').value) {
        this.stepThreeLoading=true
        let mobile=this.forgetPasswordForm.get('mobile')?.value.e164Number.replace(this.forgetPasswordForm.get('mobile')?.value.dialCode,'')
        this.authService.sendForgetPasswordToken(mobile).subscribe(
          res1 => {
            if(res1?.code==1) {

            this.authService.verifyOtpForgot({
              mobile:mobile,
              otp:res1?.payload?.otp,
              new_password:this.newPasswordForm.get('password').value
            }).subscribe(res =>  {
              if(res?.code==1) {
                this.closePopup.emit('')
                this.toastr.success(res?.message);
              }
            })

            } else {
              this.stepThreeLoading=false
            }
          }
        )
      }
  }
  test(input) {

    if(input?.value?.length) {
      console.log(input?.value?.length)
      let value = String(input.value)
      let y = value.replace('e','')
      input.value=y
    //  input.value=value.replace('-','')
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
