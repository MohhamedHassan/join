"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[515],{7515:(S,l,s)=>{s.r(l),s.d(l,{NotificationsModule:()=>y});var c=s(9808),f=s(2094),t=s(5e3),p=s(3904),r=s(8968),u=s(4299),g=s(3631),m=s(8995);function h(i,n){1&i&&(t.TgZ(0,"div",16),t._UZ(1,"app-laoding"),t.qZA())}function N(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"li",19)(1,"span",20)(2,"i",21),t.NdJ("click",function(){const d=t.CHM(o).$implicit;return t.oxw(2).showDeleteNotificationsPopup=null==d?null:d.id}),t.qZA()(),t._uU(3),t.qZA()}if(2&i){const o=n.$implicit;t.xp6(3),t.hij(" ",null==o?null:o.title," ")}}function x(i,n){if(1&i&&(t.TgZ(0,"ul",17),t.YNc(1,N,4,1,"li",18),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.notifications)}}function v(i,n){1&i&&(t.TgZ(0,"p",22),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"no_data")," "))}function Z(i,n){1&i&&t._UZ(0,"i",23)}const C=function(i,n){return{"d-flex":i,"d-none":n}},T=function(i,n){return{left:i,right:n}},_=[{path:"",component:(()=>{class i{constructor(o,e){this.notificationsService=o,this.toastr=e,this.notifications=[],this.showDeleteNotificationsPopup=-1,this.deleteLoading=!1}ngOnInit(){this.notificationsService.getNotifications(),this.notificationsService.notification.subscribe(o=>{o&&(this.notifications=o)})}deleteNotification(){this.deleteLoading=!0,this.notificationsService.deleteNotification(this.showDeleteNotificationsPopup).subscribe(o=>{1==(null==o?void 0:o.code)&&(this.notificationsService.getNotifications(),this.toastr.success(null==o?void 0:o.message),this.showDeleteNotificationsPopup=-1),this.deleteLoading=!1})}get lang(){return localStorage.getItem("lang")||"en"}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(p.T),t.Y36(r._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-notifications"]],decls:26,vars:24,consts:[[1,"activities-page","mb-5","mrginBottom",2,"min-height","100vh"],["header","notifications"],[1,"container"],["class","col-md-12",4,"ngIf"],[1,"mb-4",2,"font-size","25px"],["class","list-unstyled p-0 m-0",4,"ngIf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[1,"cstmpopup",3,"ngClass"],[1,"content","small"],[1,"fa-solid","fa-x",3,"ngStyle","click"],[2,"font-weight","400","font-size","20px","line-height","30px"],[1,"mt-4"],[1,"btn","btn-danger",3,"click"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],[1,"mx-2"],[1,"btn","btn-warning",3,"click"],[1,"col-md-12"],[1,"list-unstyled","p-0","m-0"],["style","border: 1px solid #dddddd;\n            padding: 40px 20px;\n            border-radius: 10px;","class","mb-4 d-flex",4,"ngFor","ngForOf"],[1,"mb-4","d-flex",2,"border","1px solid #dddddd","padding","40px 20px","border-radius","10px"],[1,"d-block","mx-2"],[1,"fa-solid","fa-trash","text-danger",2,"cursor","pointer",3,"click"],[1,"text-secondary","fw-bold","text-center"],[1,"fas","fa-circle-notch","fa-spin"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0),t._UZ(1,"app-shared-header",1),t.TgZ(2,"div",2)(3,"section"),t.YNc(4,h,2,0,"div",3),t.TgZ(5,"h2",4),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.YNc(8,x,2,1,"ul",5),t.YNc(9,v,3,3,"p",6),t.qZA()()(),t.TgZ(10,"div",7)(11,"div",8)(12,"i",9),t.NdJ("click",function(){return e.showDeleteNotificationsPopup=-1}),t.qZA(),t.TgZ(13,"div",2)(14,"h2",10),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"div",11)(18,"button",12),t.NdJ("click",function(){return e.deleteNotification()}),t._uU(19),t.ALo(20,"translate"),t.YNc(21,Z,1,0,"i",13),t.qZA(),t._UZ(22,"span",14),t.TgZ(23,"button",15),t.NdJ("click",function(){return e.showDeleteNotificationsPopup=-1}),t._uU(24),t.ALo(25,"translate"),t.qZA()()()()()),2&o&&(t.xp6(4),t.Q6J("ngIf",e.notificationsService.loading),t.xp6(2),t.hij(" ",t.lcZ(7,10,"notifications")," "),t.xp6(2),t.Q6J("ngIf",!e.notificationsService.loading),t.xp6(1),t.Q6J("ngIf",!(null!=e.notifications&&e.notifications.length||e.notificationsService.loading)),t.xp6(1),t.Q6J("ngClass",t.WLB(18,C,-1!=e.showDeleteNotificationsPopup,-1==e.showDeleteNotificationsPopup)),t.xp6(2),t.Q6J("ngStyle",t.WLB(21,T,"ar"==e.lang?"20px":"auto","ar"==e.lang?"auto":"20px")),t.xp6(3),t.Oqu(t.lcZ(16,12,"deletenotitification")),t.xp6(4),t.hij(" ",t.lcZ(20,14,"delete")," "),t.xp6(2),t.Q6J("ngIf",e.deleteLoading),t.xp6(3),t.hij(" ",t.lcZ(25,16,"cancel")," "))},directives:[u.Q,c.O5,g.X,c.sg,c.mk,c.PC],pipes:[m.X$],styles:[""]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.Bz.forChild(_)],f.Bz]}),i})();var b=s(4466);let y=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,A,b.m]]}),i})()}}]);