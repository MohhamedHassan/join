"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[410],{6269:(d,r,i)=>{i.r(r),i.d(r,{AuthModule:()=>Z});var s=i(9808),l=i(9426),t=i(7587),u=i(4965),a=i(669);const c=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"",component:(()=>{class n{constructor(e){this.glopalService=e}ngOnInit(){this.glopalService.hideNavbarAndFooter.next(!0)}ngOnDestroy(){this.glopalService.hideNavbarAndFooter.next(!1)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth-parent"]],decls:18,vars:6,consts:[[1,"auth",2,"overflow-x","hidden"],[1,"row"],[1,"col-lg-6"],[1,"authBG",2,"background-image","url('assets/images/bg.jpg')"],[2,"position","relative","z-index","111"],[1,"mb-4"],["src","assets/images/mainlogo.png","alt","join"],[1,"d-flex","flex-column","flex-md-row"],["routerLink","/auth/login"],[1,"m-2"],["routerLink","/auth/signup"],[1,"auth-right-side",2,"min-height","100vh"]],template:function(e,p){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7)(8,"a",8),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"span",9),t.TgZ(12,"a",10),t._uU(13),t.ALo(14,"translate"),t.qZA()()()()(),t.TgZ(15,"div",2)(16,"div",11),t._UZ(17,"router-outlet"),t.qZA()()()()),2&e&&(t.xp6(9),t.hij(" ",t.lcZ(10,2,"signin")," "),t.xp6(4),t.hij(" ",t.lcZ(14,4,"signup")," "))},directives:[l.yS,l.lC],pipes:[a.X$],styles:[""]}),n})(),children:[{path:"login",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:35,vars:21,consts:[[1,"login","p-4"],[1,"mb-4"],[1,"form-group","phonNumberParent"],["value","+966","readonly","",1,"countrycode"],["type","text",3,"placeholder"],[1,"form-group"],["type","password",3,"placeholder"],[1,"mb-3"],[1,"mx-2"],["routerLink","/",1,"asAGuest"],[1,"mb-2","fw-bold"],[1,"p-0","m-0","list-unstyled","d-flex","login-ways"],["src","assets/images/google.png","alt","join"]],template:function(e,p){1&e&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",1),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"form")(8,"div",2),t._UZ(9,"input",3)(10,"input",4),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",5),t._UZ(13,"input",6),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",7)(16,"button"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"span",8),t.TgZ(20,"a",9),t._uU(21),t.ALo(22,"translate"),t.qZA()(),t.TgZ(23,"p",10),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"ul",11)(27,"li"),t._UZ(28,"img",12),t.qZA(),t._UZ(29,"span",8),t.TgZ(30,"li"),t._UZ(31,"img",12),t.qZA(),t._UZ(32,"span",8),t.TgZ(33,"li"),t._UZ(34,"img",12),t.qZA()()()()),2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,7,"Be_Part_Of_The_Adventure")," "),t.xp6(3),t.Oqu(t.lcZ(6,9,"insert_your_phone_number")),t.xp6(5),t.s9C("placeholder",t.lcZ(11,11,"phone_number")),t.xp6(3),t.s9C("placeholder",t.lcZ(14,13,"password")),t.xp6(4),t.Oqu(t.lcZ(18,15,"signin")),t.xp6(4),t.hij(" ",t.lcZ(22,17,"Countinu_As_Guest")," "),t.xp6(3),t.hij(" ",t.lcZ(25,19,"Or_Login_With")," "))},directives:[l.yS],pipes:[a.X$],styles:[""]}),n})()},{path:"signup",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-siginup"]],decls:27,vars:24,consts:[[1,"signup","p-4"],[1,"mb-4"],[1,"form-group"],["type","text",3,"placeholder"],[1,"form-group","phonNumberParent"],["value","+966","readonly","",1,"countrycode"],["type","email",3,"placeholder"],[1,"mb-2"],["routerLink","/auth/login"]],template:function(e,p){1&e&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",1),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"form")(8,"div",2),t._UZ(9,"input",3),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",4),t._UZ(12,"input",5)(13,"input",3),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",2),t._UZ(16,"input",6),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"button",7),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.ALo(23,"translate"),t.TgZ(24,"a",8),t._uU(25),t.ALo(26,"translate"),t.qZA()()()()),2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,8,"Be_Part_Of_The_Adventure")," "),t.xp6(3),t.Oqu(t.lcZ(6,10,"insert_your_phone_number")),t.xp6(4),t.s9C("placeholder",t.lcZ(10,12,"Full_Name")),t.xp6(4),t.s9C("placeholder",t.lcZ(14,14,"phone_number")),t.xp6(3),t.s9C("placeholder",t.lcZ(17,16,"email")),t.xp6(3),t.Oqu(t.lcZ(20,18,"signup")),t.xp6(3),t.hij(" ",t.lcZ(23,20,"Already_have_account")," "),t.xp6(3),t.Oqu(t.lcZ(26,22,"signin")))},directives:[l.yS],pipes:[a.X$],styles:[""]}),n})()}]}];let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(c)],l.Bz]}),n})();var m=i(4466);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,g,m.m]]}),n})()}}]);