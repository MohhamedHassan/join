"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[744],{7744:(To,C,c)=>{c.r(C),c.d(C,{AuthModule:()=>Co});var _=c(9808),h=c(2094),o=c(5e3),P=c(4965),T=c(9619),w=c(8995);let q=(()=>{class i{constructor(e){this.glopalService=e}ngOnInit(){this.glopalService.hideNavbarAndFooter.next(!0)}ngOnDestroy(){this.glopalService.hideNavbarAndFooter.next(!1)}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(P.W))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-auth-parent"]],decls:18,vars:6,consts:[[1,"auth",2,"overflow-x","hidden"],[1,"row"],[1,"col-lg-6"],[1,"authBG",2,"background-image","url('assets/images/bg.jpg')"],[2,"position","relative","z-index","111"],[1,"mb-4"],["appImgs","","src","assets/images/mainlogo.png","alt","join"],[1,"d-flex","flex-column","flex-md-row"],["routerLink","/auth/login"],[1,"m-2"],["routerLink","/auth/signup"],[1,"auth-right-side",2,"min-height","100vh"]],template:function(e,n){1&e&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"img",6),o.qZA(),o.TgZ(7,"div",7)(8,"a",8),o._uU(9),o.ALo(10,"translate"),o.qZA(),o._UZ(11,"span",9),o.TgZ(12,"a",10),o._uU(13),o.ALo(14,"translate"),o.qZA()()()()(),o.TgZ(15,"div",2)(16,"div",11),o._UZ(17,"router-outlet"),o.qZA()()()()),2&e&&(o.xp6(9),o.hij(" ",o.lcZ(10,2,"signin")," "),o.xp6(4),o.hij(" ",o.lcZ(14,4,"signup")," "))},directives:[T.x,h.yS,h.lC],pipes:[w.X$],styles:[""]}),i})();var s=c(3075),f=c(127),y=(c(2731),c(8937)),b=c(5089),F=c(8968),A=c(9919),x=c(9109);function J(i,l){1&i&&(o.TgZ(0,"p",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"validphone")," "))}function U(i,l){1&i&&o._UZ(0,"i",11)}function N(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"form",4),o.NdJ("ngSubmit",function(){return o.CHM(e),o.oxw().submitStepOne()}),o.TgZ(1,"div",5),o._UZ(2,"app-phone-number",6),o.YNc(3,J,3,3,"p",7),o.qZA(),o.TgZ(4,"button",8),o._uU(5),o.ALo(6,"translate"),o.YNc(7,U,1,0,"i",9),o.qZA()()}if(2&i){const e=o.oxw();o.Q6J("formGroup",e.forgetPasswordForm),o.xp6(2),o.Q6J("inputname",e.forgetPasswordForm.get("mobile")),o.xp6(1),o.Q6J("ngIf",null!=(null==e.forgetPasswordForm.controls.mobile?null:e.forgetPasswordForm.controls.mobile.errors)&&e.forgetPasswordForm.controls.mobile.touched||null!=(null==e.forgetPasswordForm.controls.mobile?null:e.forgetPasswordForm.controls.mobile.errors)&&e.submited),o.xp6(1),o.Q6J("disabled",e.loading),o.xp6(1),o.hij(" ",o.lcZ(6,6,"next")," "),o.xp6(2),o.Q6J("ngIf",e.loading)}}function k(i,l){1&i&&o._UZ(0,"i",11)}function j(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"p",18),o.NdJ("click",function(){return o.CHM(e),o.oxw(2).getOtp()}),o._uU(1),o.ALo(2,"translate"),o.qZA()}2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Didnt_receive_the_code")," "))}function Y(i,l){if(1&i&&(o.TgZ(0,"p",19),o._uU(1),o.qZA()),2&i){const e=o.oxw(2);o.xp6(1),o.hij(" ",e.counter," ")}}function Q(i,l){1&i&&o._UZ(0,"i",11)}function O(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"div")(1,"h2",12),o._uU(2),o.ALo(3,"translate"),o.TgZ(4,"bdi"),o._uU(5),o.qZA()(),o.TgZ(6,"div")(7,"input",13),o.NdJ("keypress",function(t){return o.CHM(e),o.oxw().numberOnly(t)}),o.ALo(8,"translate"),o.qZA(),o.TgZ(9,"button",14),o.NdJ("click",function(){return o.CHM(e),o.oxw().verifyCode()}),o._uU(10),o.ALo(11,"translate"),o.YNc(12,k,1,0,"i",9),o.qZA(),o.TgZ(13,"div",15),o.YNc(14,j,3,3,"p",16),o.YNc(15,Y,2,1,"p",17),o.YNc(16,Q,1,0,"i",9),o.qZA()()()}if(2&i){const e=o.oxw();o.xp6(2),o.hij(" ",o.lcZ(3,10,"please_enter_the_verification_code")," "),o.xp6(3),o.hij(" ",null==e.forgetPasswordForm.value||null==e.forgetPasswordForm.value.mobile?null:e.forgetPasswordForm.value.mobile.e164Number,""),o.xp6(2),o.s9C("placeholder",o.lcZ(8,12,"code")),o.Q6J("formControl",e.verifiedCodeControl),o.xp6(2),o.Q6J("disabled",null!=(null==e.verifiedCodeControl?null:e.verifiedCodeControl.errors)||e.verifyoading),o.xp6(1),o.hij(" ",o.lcZ(11,14,"verify")," "),o.xp6(2),o.Q6J("ngIf",e.verifyoading),o.xp6(2),o.Q6J("ngIf",!e.loading&&!e.intervalLoading),o.xp6(1),o.Q6J("ngIf",e.intervalLoading),o.xp6(1),o.Q6J("ngIf",e.loading)}}function M(i,l){1&i&&(o.TgZ(0,"p",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function E(i,l){1&i&&(o.TgZ(0,"p",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"password_mismatch")," "))}function V(i,l){1&i&&o._UZ(0,"i",11)}function B(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"form",4),o.NdJ("ngSubmit",function(){return o.CHM(e),o.oxw().submitStepThree()}),o.TgZ(1,"div",5),o._UZ(2,"input",20),o.ALo(3,"translate"),o.YNc(4,M,3,3,"p",7),o.qZA(),o.TgZ(5,"div",5),o._UZ(6,"input",21),o.ALo(7,"translate"),o.YNc(8,E,3,3,"p",7),o.qZA(),o.TgZ(9,"button",8),o._uU(10),o.ALo(11,"translate"),o.YNc(12,V,1,0,"i",9),o.qZA()()}if(2&i){const e=o.oxw();o.Q6J("formGroup",e.newPasswordForm),o.xp6(2),o.s9C("placeholder",o.lcZ(3,8,"password")),o.xp6(2),o.Q6J("ngIf",null!=(null==e.newPasswordForm.controls.password?null:e.newPasswordForm.controls.password.errors)&&e.newPasswordForm.controls.password.touched||null!=(null==e.newPasswordForm.controls.password?null:e.newPasswordForm.controls.password.errors)&&e.submited2),o.xp6(2),o.s9C("placeholder",o.lcZ(7,10,"confirmpassword")),o.xp6(2),o.Q6J("ngIf",(null==e.newPasswordForm.controls.password?null:e.newPasswordForm.controls.password.value)!=(null==e.newPasswordForm.controls.confirm_password?null:e.newPasswordForm.controls.confirm_password.value)&&e.newPasswordForm.controls.confirm_password.touched||(null==e.newPasswordForm.controls.password?null:e.newPasswordForm.controls.password.value)!=(null==e.newPasswordForm.controls.confirm_password?null:e.newPasswordForm.controls.confirm_password.value)&&e.submited2),o.xp6(1),o.Q6J("disabled",e.stepThreeLoading),o.xp6(1),o.hij(" ",o.lcZ(11,12,"confirm")," "),o.xp6(2),o.Q6J("ngIf",e.stepThreeLoading)}}let I=(()=>{class i{constructor(e,n,t,r){this.fb=e,this.router=n,this.authService=t,this.toastr=r,this.closePopup=new o.vpe,this.stepThreeLoading=!1,this.submited=!1,this.submited2=!1,this.step=1,this.intervalLoading=!1,this.counter=60,this.loading=!1,this.counterId=1,this.verifiedCodeControl=new s.NI("",[s.kI.required,s.kI.pattern(/^\d{6}$/)]),this.verifyoading=!1}ngOnInit(){f.Z.initializeApp({apiKey:"AIzaSyBspMnWz9iq5Evt11YwGkcEPqghHyIGwuo",authDomain:"joinapp-515e6.firebaseapp.com",databaseURL:"https://joinapp-515e6.firebaseio.com",projectId:"joinapp-515e6",storageBucket:"joinapp-515e6.appspot.com",messagingSenderId:"794053292456",appId:"1:794053292456:web:36878b6a9a02cff3"}),this.forgetPasswordForm=this.fb.group({mobile:["",s.kI.required]}),this.newPasswordForm=this.fb.group({password:["",s.kI.required],confirm_password:[""]})}submitStepOne(){this.submited=!0,this.forgetPasswordForm.valid&&this.getOtp()}getOtp(){var e,n;if(!this.intervalLoading){this.loading=!0,this.counterId+=1;let t=document.createElement("div");t.setAttribute("id",`captchaid${this.counterId}`),t.setAttribute("class","d-none"),document.body.appendChild(t),this.captchaVerifier=new f.Z.auth.RecaptchaVerifier(`captchaid${this.counterId}`,{size:"invisible"}),f.Z.auth().signInWithPhoneNumber(null===(n=null===(e=this.forgetPasswordForm.value)||void 0===e?void 0:e.mobile)||void 0===n?void 0:n.e164Number,this.captchaVerifier).then(r=>{this.step=2,this.verificationId=null==r?void 0:r.verificationId,this.loading=!1,this.counterToEnable()}).catch(r=>{"reCAPTCHA has already been rendered in this element"==(null==r?void 0:r.message)?this.getOtp():(this.toastr.error((null==r?void 0:r.message)||"Something wnt wrong"),this.loading=!1)})}}counterToEnable(){this.intervalLoading||(this.counter=60,this.intervalLoading=!0,this.setIntervalVariable=setInterval(()=>{this.counter-=1,0==this.counter&&(this.counter=60,clearInterval(this.setIntervalVariable),this.intervalLoading=!1)},1e3))}verifyCode(){var e;if(this.verificationId){this.verifyoading=!0;let n=f.Z.auth.PhoneAuthProvider.credential(this.verificationId,null===(e=this.verifiedCodeControl)||void 0===e?void 0:e.value);f.Z.auth().signInWithCredential(n).then(t=>{this.verifyoading=!1,this.step=3}).catch(t=>{this.toastr.error("Firebase: The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user. (auth/invalid-verification-code)."==(null==t?void 0:t.message)?"ar"==localStorage.getItem("lang")?"\u0647\u0630\u0627 \u0627\u0644\u0631\u0645\u0632  \u063a\u064a\u0631 \u0635\u062d\u064a\u062d":"Invalid Code":(null==t?void 0:t.message)||"Something wnt wrong"),this.verifyoading=!1})}}submitStepThree(){var e,n;if(this.submited2=!0,this.newPasswordForm.valid&&this.newPasswordForm.get("password").value==this.newPasswordForm.get("confirm_password").value){this.stepThreeLoading=!0;let t=null===(e=this.forgetPasswordForm.get("mobile"))||void 0===e?void 0:e.value.e164Number.replace(null===(n=this.forgetPasswordForm.get("mobile"))||void 0===n?void 0:n.value.dialCode,"");this.authService.sendForgetPasswordToken(t).subscribe(r=>{var p;1==(null==r?void 0:r.code)?this.authService.verifyOtpForgot({mobile:t,otp:null===(p=null==r?void 0:r.payload)||void 0===p?void 0:p.otp,new_password:this.newPasswordForm.get("password").value}).subscribe(a=>{1==(null==a?void 0:a.code)&&(this.router.navigate(["/auth/login"]),this.toastr.success(null==a?void 0:a.message))}):this.stepThreeLoading=!1})}}test(e){var n;if(null===(n=null==e?void 0:e.value)||void 0===n?void 0:n.length){let r=String(e.value).replace("e","");e.value=r}}numberOnly(e){const n=e.which?e.which:e.keyCode;return!(n>31&&(n<48||n>57))}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(s.qu),o.Y36(h.F0),o.Y36(b.e),o.Y36(F._W))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-forget-password"]],outputs:{closePopup:"closePopup"},decls:10,vars:9,consts:[[1,"login","p-4"],[1,"mb-4"],["class","login",3,"formGroup","ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"login",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],[3,"inputname"],["class","my-2 text-danger",4,"ngIf"],[1,"orangebtn",3,"disabled"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],[1,"my-2","text-danger"],[1,"fas","fa-circle-notch","fa-spin"],[1,"mb-0","mt-2",2,"font-weight","400","font-size","20px","line-height","30px"],["onKeyPress","if(this.value.length==6) return false","min","0",1,"form-control","my-3",3,"formControl","placeholder","keypress"],[1,"orangebtn",3,"disabled","click"],[1,"text-center"],["style","cursor: pointer;","class","my text-primary",3,"click",4,"ngIf"],["class","text-primary my-2",4,"ngIf"],[1,"my","text-primary",2,"cursor","pointer",3,"click"],[1,"text-primary","my-2"],["formControlName","password","type","password",3,"placeholder"],["formControlName","confirm_password","type","password",3,"placeholder"]],template:function(e,n){1&e&&(o.TgZ(0,"section",0)(1,"h1"),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"p",1),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.YNc(7,N,8,8,"form",2),o.YNc(8,O,17,16,"div",3),o.YNc(9,B,13,14,"form",2),o.qZA()),2&e&&(o.xp6(2),o.hij(" ",o.lcZ(3,5,"Be_Part_Of_The_Adventure")," "),o.xp6(3),o.Oqu(o.lcZ(6,7,"insert_your_phone_number")),o.xp6(2),o.Q6J("ngIf",1==n.step),o.xp6(1),o.Q6J("ngIf",2==n.step),o.xp6(1),o.Q6J("ngIf",3==n.step))},directives:[_.O5,s._Y,s.JL,s.sg,A.r,s.Fj,s.JJ,s.oH,x.mh,s.u],pipes:[w.X$],styles:[""]}),i})();var H=c(5867),G=c(3385),L=c(3904),S=c(1408);function z(i,l){1&i&&(o.TgZ(0,"p",20),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"validphone")," "))}function W(i,l){1&i&&(o.TgZ(0,"p",20),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function $(i,l){1&i&&o._UZ(0,"i",21)}const R=function(i,l){return{"d-flex":i,"d-none":l}},D=function(i,l){return{left:i,right:l}};function X(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"div",22)(1,"div",23)(2,"i",24),o.NdJ("click",function(){return o.CHM(e),o.oxw().showpopup=!1}),o.qZA(),o.TgZ(3,"div",25)(4,"h2",26),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"app-forget-password",27),o.NdJ("closePopup",function(){return o.CHM(e),o.oxw().showpopup=!1}),o.qZA()()()()}if(2&i){const e=o.oxw();o.Q6J("ngClass",o.WLB(5,R,e.showpopup,!e.showpopup)),o.xp6(2),o.Q6J("ngStyle",o.WLB(8,D,"ar"==e.lang?"20px":"auto","ar"==e.lang?"auto":"20px")),o.xp6(3),o.hij(" ",o.lcZ(6,3,"forget_password")," ")}}function oo(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function eo(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function io(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"validphone")," "))}function no(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function to(i,l){if(1&i&&(o.TgZ(0,"option",27),o._uU(1),o.qZA()),2&i){const e=l.$implicit;o.Q6J("value",null==e?null:e.id),o.xp6(1),o.Oqu(null==e?null:e.name)}}function lo(i,l){if(1&i&&(o.TgZ(0,"optgroup",25),o.YNc(1,to,2,2,"option",26),o.qZA()),2&i){const e=l.$implicit;o.Q6J("label",null==e?null:e.gov),o.xp6(1),o.Q6J("ngForOf",null==e?null:e.areas)}}function ro(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function so(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function ao(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"validemail")," "))}function po(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"email_mismatch")," "))}function uo(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"required")," "))}function co(i,l){1&i&&(o.TgZ(0,"p",24),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"password_mismatch")," "))}function mo(i,l){if(1&i&&(o.ynx(0),o.TgZ(1,"div",3)(2,"div",4),o._UZ(3,"input",28),o.ALo(4,"translate"),o.YNc(5,ao,3,3,"p",6),o.qZA()(),o.TgZ(6,"div",3)(7,"div",4),o._UZ(8,"input",29),o.ALo(9,"translate"),o.YNc(10,po,3,3,"p",6),o.qZA()(),o.TgZ(11,"div",3)(12,"div",4),o._UZ(13,"input",30),o.ALo(14,"translate"),o.YNc(15,uo,3,3,"p",6),o.qZA()(),o.TgZ(16,"div",3)(17,"div",4),o._UZ(18,"input",31),o.ALo(19,"translate"),o.YNc(20,co,3,3,"p",6),o.qZA()(),o.BQk()),2&i){const e=o.oxw();o.xp6(3),o.s9C("placeholder",o.lcZ(4,8,"email")),o.xp6(2),o.Q6J("ngIf",null!=(null==e.signupForm.controls.email?null:e.signupForm.controls.email.errors)&&e.signupForm.controls.email.touched||null!=(null==e.signupForm.controls.email?null:e.signupForm.controls.email.errors)&&e.submited),o.xp6(3),o.s9C("placeholder",o.lcZ(9,10,"confirm_email")),o.xp6(2),o.Q6J("ngIf",(null==e.signupForm.controls.email?null:e.signupForm.controls.email.value)!=(null==e.signupForm.controls.confirm_email?null:e.signupForm.controls.confirm_email.value)&&e.signupForm.controls.confirm_email.touched||(null==e.signupForm.controls.email?null:e.signupForm.controls.email.value)!=(null==e.signupForm.controls.confirm_email?null:e.signupForm.controls.confirm_email.value)&&e.submited),o.xp6(3),o.s9C("placeholder",o.lcZ(14,12,"password")),o.xp6(2),o.Q6J("ngIf",null!=(null==e.signupForm.controls.password?null:e.signupForm.controls.password.errors)&&e.signupForm.controls.password.touched||null!=(null==e.signupForm.controls.password?null:e.signupForm.controls.password.errors)&&e.submited),o.xp6(3),o.s9C("placeholder",o.lcZ(19,14,"confirm_password")),o.xp6(2),o.Q6J("ngIf",(null==e.signupForm.controls.password?null:e.signupForm.controls.password.value)!=(null==e.signupForm.controls.confirm_password?null:e.signupForm.controls.confirm_password.value)&&e.signupForm.controls.confirm_password.touched||(null==e.signupForm.controls.password?null:e.signupForm.controls.password.value)!=(null==e.signupForm.controls.confirm_password?null:e.signupForm.controls.confirm_password.value)&&e.submited)}}function go(i,l){1&i&&o._UZ(0,"i",32)}function ho(i,l){1&i&&o._UZ(0,"i",32)}function fo(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"p",42),o.NdJ("click",function(){return o.CHM(e),o.oxw(2).getOtp()}),o._uU(1),o.ALo(2,"translate"),o.qZA()}2&i&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Didnt_receive_the_code")," "))}function _o(i,l){if(1&i&&(o.TgZ(0,"p",43),o._uU(1),o.qZA()),2&i){const e=o.oxw(2);o.xp6(1),o.hij(" ",e.counter," ")}}function vo(i,l){1&i&&o._UZ(0,"i",32)}const Zo=function(i,l){return{"d-flex":i,"d-none":l}},wo=function(i,l){return{left:i,right:l}};function bo(i,l){if(1&i){const e=o.EpF();o.TgZ(0,"div",33)(1,"div",34)(2,"i",35),o.NdJ("click",function(){return o.CHM(e),o.oxw().showVerificationpopup=!1}),o.qZA(),o.TgZ(3,"div",36)(4,"h2",37),o._uU(5),o.ALo(6,"translate"),o.TgZ(7,"bdi"),o._uU(8),o.qZA()(),o.TgZ(9,"div")(10,"input",38),o.NdJ("keypress",function(t){return o.CHM(e),o.oxw().numberOnly(t)}),o.ALo(11,"translate"),o.qZA(),o.TgZ(12,"button",39),o.NdJ("click",function(){return o.CHM(e),o.oxw().verifyCode()}),o._uU(13),o.ALo(14,"translate"),o.YNc(15,ho,1,0,"i",21),o.qZA(),o.YNc(16,fo,3,3,"p",40),o.YNc(17,_o,2,1,"p",41),o.YNc(18,vo,1,0,"i",21),o.qZA()()()()}if(2&i){const e=o.oxw();o.Q6J("ngClass",o.WLB(18,Zo,e.showVerificationpopup,!e.showVerificationpopup)),o.xp6(2),o.Q6J("ngStyle",o.WLB(21,wo,"ar"==e.lang?"20px":"auto","ar"==e.lang?"auto":"20px")),o.xp6(3),o.hij(" ",o.lcZ(6,12,"please_enter_the_verification_code")," "),o.xp6(3),o.Oqu(null==e.signupForm.value||null==e.signupForm.value.mobile?null:e.signupForm.value.mobile.e164Number),o.xp6(2),o.s9C("placeholder",o.lcZ(11,14,"code")),o.Q6J("formControl",e.verifiedCodeControl),o.xp6(2),o.Q6J("disabled",null!=(null==e.verifiedCodeControl?null:e.verifiedCodeControl.errors)||e.verifyoading),o.xp6(1),o.hij(" ",o.lcZ(14,16,"verify")," "),o.xp6(2),o.Q6J("ngIf",e.verifyoading),o.xp6(1),o.Q6J("ngIf",!e.loading&&!e.intervalLoading),o.xp6(1),o.Q6J("ngIf",e.intervalLoading),o.xp6(1),o.Q6J("ngIf",e.loading)}}const Fo=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"",component:q,children:[{path:"login",component:(()=>{class i{constructor(e,n,t,r,p,a,u){this.authService=e,this.angularFireAuth=n,this.notficationsService=t,this.membersservice=r,this.router=p,this.toastr=a,this.fb=u,this.showpopup=!1,this.loginForm=new s.cw({}),this.submited=!1,this.loading=!1}ngOnInit(){this.app=(0,H.ZF)({apiKey:"AIzaSyBspMnWz9iq5Evt11YwGkcEPqghHyIGwuo",authDomain:"joinapp-515e6.firebaseapp.com",databaseURL:"https://joinapp-515e6.firebaseio.com",projectId:"joinapp-515e6",storageBucket:"joinapp-515e6.appspot.com",messagingSenderId:"794053292456",appId:"1:794053292456:web:36878b6a9a02cff3"}),this.loginForm=this.fb.group({mobile:["",s.kI.required],password:["",s.kI.required]})}login(e){var n,t;if(this.submited=!0,this.loginForm.valid){let r={password:null==e?void 0:e.password,mobile:null===(n=null==e?void 0:e.mobile)||void 0===n?void 0:n.e164Number.replace(null===(t=null==e?void 0:e.mobile)||void 0===t?void 0:t.dialCode,"")};this.loading=!0,this.authService.logIn(r).subscribe(p=>{var a;this.loading=!1,1==(null==p?void 0:p.code)?(localStorage.removeItem("joincart"),localStorage.setItem("joinToken",null===(a=null==p?void 0:p.payload)||void 0===a?void 0:a.auth_token),this.notficationsService.getNotifications(),this.membersservice.getAllMembers(),this.authService.getUserProfile(),this.router.navigate(["/"])):this.toastr.error(null==p?void 0:p.message,"",{timeOut:7e3})})}}get lang(){return localStorage.getItem("lang")||"en"}GoogleAuth(){return this.AuthLogin(new y.hJ,1)}facebookAuth(){return this.AuthLogin(new y._O,2)}AuthLogin(e,n){return this.angularFireAuth.signInWithPopup(e).then(t=>{var r,p,a,u;this.loading=!0;let d=null===(r=null==t?void 0:t.additionalUserInfo)||void 0===r?void 0:r.profile,v=null===(u=null===(a=null===(p=null==t?void 0:t.user)||void 0===p?void 0:p.multiFactor)||void 0===a?void 0:a.user)||void 0===u?void 0:u.email,m={};1==n?m.google_id=null==d?void 0:d.id:2==n&&(m.facebook_id=null==d?void 0:d.id),this.authService.logIn(m).subscribe(g=>{var Z;this.loading=!1,1==(null==g?void 0:g.code)?(localStorage.removeItem("joincart"),localStorage.setItem("joinToken",null===(Z=null==g?void 0:g.payload)||void 0===Z?void 0:Z.auth_token),this.authService.getUserProfile(),this.membersservice.getAllMembers(),this.router.navigate(["/"])):this.router.navigate(["/auth/signup"],{queryParams:{id:null==d?void 0:d.id,family_name:null==d?void 0:d.family_name,given_name:null==d?void 0:d.given_name,email:v||"user@gmail.com",type:n}})})}).catch(t=>{})}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(b.e),o.Y36(G.zQ),o.Y36(L.T),o.Y36(S.Z),o.Y36(h.F0),o.Y36(F._W),o.Y36(s.qu))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-login"]],decls:37,vars:28,consts:[[1,"login","p-4"],[1,"mb-4"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],[3,"inputname"],["class","my-2 text-danger",4,"ngIf"],["formControlName","password","type","password",3,"placeholder"],["routerLink","/auth/forget_password",1,"my-2","d-block","text-dark",2,"cursor","pointer"],[1,"mb-3","d-flex","flex-column","flex-md-row"],[3,"disabled"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],[1,"m-2"],["routerLink","/",1,"asAGuest","text-center"],[1,"mb-2","fw-bold"],[1,"p-0","m-0","list-unstyled","d-flex","login-ways"],[3,"click"],["appImgs","","src","assets/images/google.png","alt","join"],[1,"mx-2"],["appImgs","","src","assets/images/facebook.png","alt","join",2,"background-color","#425EAB"],["class","cstmpopup",3,"ngClass",4,"ngIf"],[1,"my-2","text-danger"],[1,"fas","fa-circle-notch","fa-spin"],[1,"cstmpopup",3,"ngClass"],[1,"content","add-member",2,"min-height","70vh"],[1,"fa-solid","fa-x",3,"ngStyle","click"],[1,""],[2,"font-weight","400","font-size","20px","line-height","30px"],[3,"closePopup"]],template:function(e,n){1&e&&(o.TgZ(0,"section",0)(1,"h1"),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"p",1),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"form",2),o.NdJ("ngSubmit",function(){return n.login(n.loginForm.value)}),o.TgZ(8,"div",3),o._UZ(9,"app-phone-number",4),o.YNc(10,z,3,3,"p",5),o.qZA(),o.TgZ(11,"div",3),o._UZ(12,"input",6),o.ALo(13,"translate"),o.YNc(14,W,3,3,"p",5),o.TgZ(15,"a",7),o._uU(16),o.ALo(17,"translate"),o.qZA()(),o.TgZ(18,"div",8)(19,"button",9),o._uU(20),o.ALo(21,"translate"),o.YNc(22,$,1,0,"i",10),o.qZA(),o._UZ(23,"span",11),o.TgZ(24,"a",12),o._uU(25),o.ALo(26,"translate"),o.qZA()(),o.TgZ(27,"p",13),o._uU(28),o.ALo(29,"translate"),o.qZA(),o.TgZ(30,"ul",14)(31,"li",15),o.NdJ("click",function(){return n.GoogleAuth()}),o._UZ(32,"img",16),o.qZA(),o._UZ(33,"span",17),o.TgZ(34,"li",15),o.NdJ("click",function(){return n.facebookAuth()}),o._UZ(35,"img",18),o.qZA()()()(),o.YNc(36,X,8,11,"div",19)),2&e&&(o.xp6(2),o.hij(" ",o.lcZ(3,14,"Be_Part_Of_The_Adventure")," "),o.xp6(3),o.Oqu(o.lcZ(6,16,"insert_your_phone_number")),o.xp6(2),o.Q6J("formGroup",n.loginForm),o.xp6(2),o.Q6J("inputname",n.loginForm.get("mobile")),o.xp6(1),o.Q6J("ngIf",null!=(null==n.loginForm.controls.mobile?null:n.loginForm.controls.mobile.errors)&&n.loginForm.controls.mobile.touched||null!=(null==n.loginForm.controls.mobile?null:n.loginForm.controls.mobile.errors)&&n.submited),o.xp6(2),o.s9C("placeholder",o.lcZ(13,18,"password")),o.xp6(2),o.Q6J("ngIf",null!=(null==n.loginForm.controls.password?null:n.loginForm.controls.password.errors)&&n.loginForm.controls.password.touched||null!=(null==n.loginForm.controls.password?null:n.loginForm.controls.password.errors)&&n.submited),o.xp6(2),o.hij(" ",o.lcZ(17,20,"forget_password")," "),o.xp6(3),o.Q6J("disabled",n.loading),o.xp6(1),o.hij("",o.lcZ(21,22,"signin")," "),o.xp6(2),o.Q6J("ngIf",n.loading),o.xp6(3),o.hij(" ",o.lcZ(26,24,"Countinu_As_Guest")," "),o.xp6(3),o.hij(" ",o.lcZ(29,26,"Or_Login_With")," "),o.xp6(8),o.Q6J("ngIf",n.showpopup))},directives:[s._Y,s.JL,s.sg,A.r,_.O5,s.Fj,s.JJ,s.u,x.mh,h.yS,T.x,_.mk,_.PC,I],pipes:[w.X$],styles:[".iti{width:100%!important}"]}),i})()},{path:"signup",component:(()=>{class i{constructor(e,n,t,r,p,a,u){this.fb=e,this.router=n,this.notficationsService=t,this.membersservice=r,this.activatedRoute=p,this.authService=a,this.toastr=u,this.intervalLoading=!1,this.counter=60,this.signupForm=new s.cw({}),this.submited=!1,this.loading=!1,this.counterId=1,this.areas=[],this.showVerificationpopup=!1,this.verifiedCodeControl=new s.NI("",[s.kI.required,s.kI.pattern(/^\d{6}$/)]),this.verifyoading=!1,this.hideEmailAndPassword=!1}getOtp(){var e,n;if(!this.intervalLoading){this.loading=!0,this.counterId+=1;let t=document.createElement("div");t.setAttribute("id",`captchaid${this.counterId}`),t.setAttribute("class","d-none"),document.body.appendChild(t),this.captchaVerifier=new f.Z.auth.RecaptchaVerifier(`captchaid${this.counterId}`,{size:"invisible"}),f.Z.auth().signInWithPhoneNumber(null===(n=null===(e=this.signupForm.value)||void 0===e?void 0:e.mobile)||void 0===n?void 0:n.e164Number,this.captchaVerifier).then(r=>{this.showVerificationpopup=!0,this.verificationId=null==r?void 0:r.verificationId,this.loading=!1,this.counterToEnable()}).catch(r=>{"reCAPTCHA has already been rendered in this element"==(null==r?void 0:r.message)?this.getOtp():(this.toastr.error((null==r?void 0:r.message)||"Something wnt wrong"),this.loading=!1)})}}ngOnInit(){f.Z.initializeApp({apiKey:"AIzaSyBspMnWz9iq5Evt11YwGkcEPqghHyIGwuo",authDomain:"joinapp-515e6.firebaseapp.com",databaseURL:"https://joinapp-515e6.firebaseio.com",projectId:"joinapp-515e6",storageBucket:"joinapp-515e6.appspot.com",messagingSenderId:"794053292456",appId:"1:794053292456:web:36878b6a9a02cff3"}),this.returnsignupForm(),this.authService.areas.subscribe(e=>{this.areas=e}),this.activatedRoute.queryParamMap.subscribe(e=>{var n,t,r,p,a,u,d,v,m,g,Z;(null===(n=null==e?void 0:e.params)||void 0===n?void 0:n.type)?(this.signupForm.get("password").clearValidators(),this.signupForm.get("password").updateValueAndValidity(),this.signupForm.get("email").clearValidators(),this.signupForm.get("email").updateValueAndValidity(),this.hideEmailAndPassword=!0,this.signupForm.patchValue({fname:null===(t=null==e?void 0:e.params)||void 0===t?void 0:t.given_name,lname:null===(r=null==e?void 0:e.params)||void 0===r?void 0:r.family_name,email:(null===(p=null==e?void 0:e.params)||void 0===p?void 0:p.email)?null===(a=null==e?void 0:e.params)||void 0===a?void 0:a.email:"user@gmail.com",password:"-",confirm_email:(null===(u=null==e?void 0:e.params)||void 0===u?void 0:u.email)?null===(d=null==e?void 0:e.params)||void 0===d?void 0:d.email:"user@gmail.com",confirm_password:"-"}),1==(null===(v=null==e?void 0:e.params)||void 0===v?void 0:v.type)?this.signupForm.patchValue({google_id:null===(m=null==e?void 0:e.params)||void 0===m?void 0:m.id}):2==(null===(g=null==e?void 0:e.params)||void 0===g?void 0:g.type)&&this.signupForm.patchValue({facebook_id:null===(Z=null==e?void 0:e.params)||void 0===Z?void 0:Z.id})):(this.signupForm.get("password").setValidators([s.kI.required]),this.signupForm.get("password").updateValueAndValidity(),this.signupForm.get("email").setValidators([s.kI.required,s.kI.email,,s.kI.pattern(/.com$/)]),this.signupForm.get("email").updateValueAndValidity(),this.hideEmailAndPassword=!1)})}returnsignupForm(){return this.signupForm=this.fb.group({fname:["",s.kI.required],lname:["",s.kI.required],mobile:["",s.kI.required],dob:["",s.kI.required],password:[""],device_type:["W"],area_id:["",s.kI.required],gender:["",s.kI.required],email:[""],confirm_email:[""],confirm_password:[""],device_token:["_"],facebook_id:[""],google_id:[""]})}dateInputType(e){e.value||(e.type="text",e.blur())}signUp(e){this.submited=!0,this.signupForm.valid&&!this.intervalLoading&&this.signupForm.get("password").value==this.signupForm.get("confirm_password").value&&this.signupForm.get("email").value==this.signupForm.get("confirm_email").value&&this.getOtp(),this.signupForm.valid&&this.intervalLoading&&this.signupForm.get("password").value==this.signupForm.get("confirm_password").value&&this.signupForm.get("email").value==this.signupForm.get("confirm_email").value&&(this.showVerificationpopup=!0)}get lang(){return localStorage.getItem("lang")||"en"}verifyCode(){var e;if(this.verificationId){this.verifyoading=!0;let n=f.Z.auth.PhoneAuthProvider.credential(this.verificationId,null===(e=this.verifiedCodeControl)||void 0===e?void 0:e.value);f.Z.auth().signInWithCredential(n).then(t=>{var r,p;this.verifyoading=!1;let a=new FormData,u=this.signupForm.value;a.append("fname",u.fname),a.append("lname",u.lname),a.append("dob",u.dob),a.append("password",u.password),a.append("device_type","W"),a.append("area_id",u.area_id),a.append("gender",u.gender),a.append("email",u.email),(null==u?void 0:u.google_id)&&a.append("google_id",u.google_id),(null==u?void 0:u.facebook_id)&&a.append("facebook_id",u.facebook_id),a.append("device_token","_");let d=null===(r=this.signupForm.get("mobile"))||void 0===r?void 0:r.value.e164Number.replace(null===(p=this.signupForm.get("mobile"))||void 0===p?void 0:p.value.dialCode,"");a.append("mobile",d),this.authService.signupu(a).subscribe(v=>{1==(null==v?void 0:v.code)?this.authService.logIn({mobile:d,password:u.password}).subscribe(m=>{var g;this.loading=!1,1==(null==m?void 0:m.code)&&(this.toastr.success("ar"==localStorage.getItem("lang")?"\u062a\u0645 \u0627\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628\u0643 \u0628\u0646\u062c\u0627\u062c":"Account successfully created"),localStorage.removeItem("joincart"),localStorage.setItem("joinToken",null===(g=null==m?void 0:m.payload)||void 0===g?void 0:g.auth_token),this.authService.getUserProfile(),this.membersservice.getAllMembers(),this.router.navigate(["/"]),window.location.reload())}):this.showVerificationpopup=!1})}).catch(t=>{this.toastr.error("Firebase: The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user. (auth/invalid-verification-code)."==(null==t?void 0:t.message)?"ar"==localStorage.getItem("lang")?"\u0647\u0630\u0627 \u0627\u0644\u0631\u0645\u0632  \u063a\u064a\u0631 \u0635\u062d\u064a\u062d":"Invalid Code":(null==t?void 0:t.message)||"Something wnt wrong"),this.verifyoading=!1})}}counterToEnable(){this.intervalLoading||(this.counter=60,this.intervalLoading=!0,this.setIntervalVariable=setInterval(()=>{this.counter-=1,0==this.counter&&(this.counter=60,clearInterval(this.setIntervalVariable),this.intervalLoading=!1)},1e3))}numberOnly(e){const n=e.which?e.which:e.keyCode;return!(n>31&&(n<48||n>57))}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(s.qu),o.Y36(h.F0),o.Y36(L.T),o.Y36(S.Z),o.Y36(h.gz),o.Y36(b.e),o.Y36(F._W))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-siginup"]],decls:65,vars:49,consts:[[1,"signup","heightc","p-4"],[1,"mb-4"],[1,"row",3,"formGroup","ngSubmit"],[1,"col-md-6","mb-3"],[1,"form-group"],["formControlName","fname","type","text",3,"placeholder"],["class","my-2 text-danger",4,"ngIf"],["formControlName","lname","type","text",3,"placeholder"],[3,"inputname"],["formControlName","dob","type","text",3,"placeholder","blur","change","focus"],["dobirth",""],["formControlName","area_id",1,"form-select"],["value","","selected",""],[3,"label",4,"ngFor","ngForOf"],["formControlName","gender","aria-label","Default select example",1,"form-select",2,"box-shadow","none"],["selected","","value",""],["value","BOY"],["value","GIRL"],[4,"ngIf"],[1,"col-md-12","mb-3"],[1,"mb-2",3,"disabled"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],["routerLink","/auth/login",1,"sign"],["class","cstmpopup ",3,"ngClass",4,"ngIf"],[1,"my-2","text-danger"],[3,"label"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","email","type","email",3,"placeholder"],["formControlName","confirm_email","type","email",3,"placeholder"],["formControlName","password","type","password",3,"placeholder"],["formControlName","confirm_password","type","password",3,"placeholder"],[1,"fas","fa-circle-notch","fa-spin"],[1,"cstmpopup",3,"ngClass"],[1,"content","small"],[1,"fa-solid","fa-x",3,"ngStyle","click"],[1,"container"],[1,"mb-0","mt-2",2,"font-weight","400","font-size","20px","line-height","30px"],["onKeyPress","if(this.value.length==6) return false","min","0",1,"form-control","my-3",3,"formControl","placeholder","keypress"],[1,"orangebtn",3,"disabled","click"],["style","cursor: pointer;","class","my text-primary",3,"click",4,"ngIf"],["class","text-primary my-2",4,"ngIf"],[1,"my","text-primary",2,"cursor","pointer",3,"click"],[1,"text-primary","my-2"]],template:function(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"section",0)(1,"h1"),o._uU(2),o.ALo(3,"translate"),o.qZA(),o.TgZ(4,"p",1),o._uU(5),o.ALo(6,"translate"),o.qZA(),o.TgZ(7,"form",2),o.NdJ("ngSubmit",function(){return n.signUp(n.signupForm.value)}),o.TgZ(8,"div",3)(9,"div",4),o._UZ(10,"input",5),o.ALo(11,"translate"),o.YNc(12,oo,3,3,"p",6),o.qZA()(),o.TgZ(13,"div",3)(14,"div",4),o._UZ(15,"input",7),o.ALo(16,"translate"),o.YNc(17,eo,3,3,"p",6),o.qZA()(),o.TgZ(18,"div",3)(19,"div",4),o._UZ(20,"app-phone-number",8),o.YNc(21,io,3,3,"p",6),o.qZA()(),o.TgZ(22,"div",3)(23,"div",4)(24,"input",9,10),o.NdJ("blur",function(){o.CHM(t);const p=o.MAs(25);return n.dateInputType(p)})("change",function(){o.CHM(t);const p=o.MAs(25);return n.dateInputType(p)})("focus",function(){return o.CHM(t),o.MAs(25).type="date"}),o.ALo(26,"translate"),o.qZA(),o.YNc(27,no,3,3,"p",6),o.qZA()(),o.TgZ(28,"div",3)(29,"div",4)(30,"select",11)(31,"option",12),o._uU(32),o.ALo(33,"translate"),o.qZA(),o.YNc(34,lo,2,2,"optgroup",13),o.qZA(),o.YNc(35,ro,3,3,"p",6),o.qZA()(),o.TgZ(36,"div",3)(37,"div",4)(38,"select",14)(39,"option",15),o._uU(40),o.ALo(41,"translate"),o.qZA(),o.TgZ(42,"option",16),o._uU(43),o.ALo(44,"translate"),o.qZA(),o.TgZ(45,"option",17),o._uU(46),o.ALo(47,"translate"),o.qZA()(),o.YNc(48,so,3,3,"p",6),o.qZA()(),o.YNc(49,mo,21,16,"ng-container",18),o.TgZ(50,"div",19)(51,"div")(52,"button",20),o._uU(53),o.ALo(54,"translate"),o.YNc(55,go,1,0,"i",21),o.qZA()()(),o.TgZ(56,"div",19)(57,"div")(58,"p"),o._uU(59),o.ALo(60,"translate"),o.TgZ(61,"a",22),o._uU(62),o.ALo(63,"translate"),o.qZA()()()()()(),o.YNc(64,bo,19,24,"div",23)}2&e&&(o.xp6(2),o.hij(" ",o.lcZ(3,25,"Be_Part_Of_The_Adventure")," "),o.xp6(3),o.Oqu(o.lcZ(6,27,"insert_your_phone_number")),o.xp6(2),o.Q6J("formGroup",n.signupForm),o.xp6(3),o.s9C("placeholder",o.lcZ(11,29,"first_name")),o.xp6(2),o.Q6J("ngIf",null!=(null==n.signupForm.controls.fname?null:n.signupForm.controls.fname.errors)&&n.signupForm.controls.fname.touched||null!=(null==n.signupForm.controls.fname?null:n.signupForm.controls.fname.errors)&&n.submited),o.xp6(3),o.s9C("placeholder",o.lcZ(16,31,"last_name")),o.xp6(2),o.Q6J("ngIf",null!=(null==n.signupForm.controls.lname?null:n.signupForm.controls.lname.errors)&&n.signupForm.controls.lname.touched||null!=(null==n.signupForm.controls.lname?null:n.signupForm.controls.lname.errors)&&n.submited),o.xp6(3),o.Q6J("inputname",n.signupForm.get("mobile")),o.xp6(1),o.Q6J("ngIf",null!=(null==n.signupForm.controls.mobile?null:n.signupForm.controls.mobile.errors)&&n.signupForm.controls.mobile.touched||null!=(null==n.signupForm.controls.mobile?null:n.signupForm.controls.mobile.errors)&&n.submited),o.xp6(3),o.s9C("placeholder",o.lcZ(26,33,"dob")),o.xp6(3),o.Q6J("ngIf",null!=(null==n.signupForm.controls.dob?null:n.signupForm.controls.dob.errors)&&n.signupForm.controls.dob.touched||null!=(null==n.signupForm.controls.dob?null:n.signupForm.controls.dob.errors)&&n.submited),o.xp6(5),o.Oqu(o.lcZ(33,35,"area")),o.xp6(2),o.Q6J("ngForOf",n.areas),o.xp6(1),o.Q6J("ngIf",null!=(null==n.signupForm.controls.area_id?null:n.signupForm.controls.area_id.errors)&&n.signupForm.controls.area_id.touched||null!=(null==n.signupForm.controls.area_id?null:n.signupForm.controls.area_id.errors)&&n.submited),o.xp6(5),o.Oqu(o.lcZ(41,37,"gender")),o.xp6(3),o.Oqu(o.lcZ(44,39,"male")),o.xp6(3),o.Oqu(o.lcZ(47,41,"female")),o.xp6(2),o.Q6J("ngIf",null!=(null==n.signupForm.controls.gender?null:n.signupForm.controls.gender.errors)&&n.signupForm.controls.gender.touched||null!=(null==n.signupForm.controls.gender?null:n.signupForm.controls.gender.errors)&&n.submited),o.xp6(1),o.Q6J("ngIf",!n.hideEmailAndPassword),o.xp6(3),o.Q6J("disabled",n.loading),o.xp6(1),o.hij(" ",o.lcZ(54,43,"signup")," "),o.xp6(2),o.Q6J("ngIf",n.loading),o.xp6(4),o.hij(" ",o.lcZ(60,45,"Already_have_account")," "),o.xp6(3),o.Oqu(o.lcZ(63,47,"signin")),o.xp6(2),o.Q6J("ngIf",n.showVerificationpopup))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,x.mh,_.O5,A.r,s.EJ,s.YN,s.Kr,_.sg,h.yS,_.mk,_.PC,s.oH],pipes:[w.X$],styles:[".iti{width:100%!important}@media only screen and (min-width: 992px){.signup.heightc[_ngcontent-%COMP%]{height:100vh;overflow:auto}}@media only screen and (max-width: 992px){.signup.heightc[_ngcontent-%COMP%]{height:auto!important}}"]}),i})()},{path:"forget_password",component:I}]}];let Ao=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[h.Bz.forChild(Fo)],h.Bz]}),i})();var xo=c(5675);let Co=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[_.ez,Ao,xo.m]]}),i})()}}]);