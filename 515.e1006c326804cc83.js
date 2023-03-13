"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[515],{7515:(v,r,n)=>{n.r(r),n.d(r,{NotificationsModule:()=>A});var a=n(9808),c=n(2094),i=n(5e3),u=n(3904),l=n(8968),g=n(4299),m=n(3631),p=n(8274),h=n(8995);function _(o,e){1&o&&(i.TgZ(0,"div",7),i._UZ(1,"app-laoding"),i.qZA())}function x(o,e){1&o&&(i.TgZ(0,"h2",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&o&&(i.xp6(1),i.hij(" ",i.lcZ(2,1,"notifications")," "))}function b(o,e){if(1&o){const t=i.EpF();i.TgZ(0,"ul",22)(1,"li",23)(2,"a",24),i.NdJ("click",function(){i.CHM(t);const d=i.oxw().$implicit,f=i.oxw(2);return f.showDeleteNotificationsPopup=null==d?null:d.id,f.deleteNotification()}),i._uU(3),i.ALo(4,"translate"),i.qZA()()()}2&o&&(i.xp6(3),i.hij(" ",i.lcZ(4,1,"dismiss")," "))}function N(o,e){if(1&o){const t=i.EpF();i.TgZ(0,"li",11)(1,"a",12),i.NdJ("click",function(){const f=i.CHM(t).$implicit;return i.oxw(2).checkRoute(f)}),i.TgZ(2,"span",13),i._UZ(3,"i",14),i.qZA(),i.TgZ(4,"div")(5,"p",15),i._uU(6),i.qZA(),i.TgZ(7,"p",16),i._uU(8),i.qZA()()(),i.TgZ(9,"div",17)(10,"button",18),i._UZ(11,"i",19)(12,"span",20),i.qZA(),i.YNc(13,b,5,3,"ul",21),i.qZA()()}if(2&o){const t=e.$implicit;i.xp6(6),i.hij(" ",null==t?null:t.title," "),i.xp6(2),i.hij(" ",null==t?null:t.message," ")}}function y(o,e){if(1&o&&(i.TgZ(0,"ul",9),i.YNc(1,N,14,2,"li",10),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.notifications)}}function Z(o,e){1&o&&(i.TgZ(0,"p",25),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&o&&(i.xp6(1),i.hij(" ",i.lcZ(2,1,"no_data")," "))}const T=[{path:"",component:(()=>{class o{constructor(t,s,d){this.notificationsService=t,this.router=s,this.toastr=d,this.notifications=[],this.showDeleteNotificationsPopup=-1,this.deleteLoading=!1}ngOnInit(){this.notificationsService.getNotifications(),this.subscriber=this.notificationsService.notification.subscribe(t=>{t&&(this.notifications=t,this.notifications.reverse())})}deleteNotification(){this.deleteLoading=!0,this.notificationsService.deleteNotification(this.showDeleteNotificationsPopup).subscribe(t=>{1==(null==t?void 0:t.code)&&(this.notificationsService.getNotifications(),this.toastr.success(null==t?void 0:t.message),this.showDeleteNotificationsPopup=-1),this.deleteLoading=!1})}get lang(){return localStorage.getItem("lang")||"en"}checkRoute(t){this.router.navigate((null==t?void 0:t.action_id)&&(null==t?void 0:t.message_type)?"user_notification"==(null==t?void 0:t.message_type)?[`/history/action_id/${null==t?void 0:t.action_id}`]:"bulk_notification"==(null==t?void 0:t.message_type)?["/"]:"activity"==(null==t?void 0:t.message_type)?[`/activity/${null==t?void 0:t.action_id}`]:"club"==(null==t?void 0:t.message_type)?[`/clup/${null==t?void 0:t.action_id}`]:"categories"==(null==t?void 0:t.message_type)?["/activities"]:["/"]:["/"])}ngOnDestroy(){this.subscriber&&this.subscriber.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(u.T),i.Y36(c.F0),i.Y36(l._W))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-notifications"]],decls:8,vars:4,consts:[[1,"activities-page","mb-5","mrginBottom",2,"min-height","100vh"],["header","notifications"],[1,"container"],["class","col-md-12",4,"ngIf"],["style","font-size: 25px;","class","mb-4",4,"ngIf"],["class","list-unstyled p-0 m-0",4,"ngIf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[1,"col-md-12"],[1,"mb-4",2,"font-size","25px"],[1,"list-unstyled","p-0","m-0"],["style","border: 1px solid #dddddd;\n            padding:20px 10px;\n            border-radius: 10px;\n            align-items: start;","class","mb-4 d-flex  justify-content-between ",4,"ngFor","ngForOf"],[1,"mb-4","d-flex","justify-content-between",2,"border","1px solid #dddddd","padding","20px 10px","border-radius","10px","align-items","start"],[1,"d-flex",2,"max-width","85%","display","block","color","black","cursor","pointer",3,"click"],[1,"d-block","mx-2"],[1,"fa-solid","fa-bell","maincolor"],[1,"maincolor","mb-1"],[1,"m-0"],["dropdown","",1,"btn-group"],["id","button-basic","dropdownToggle","","type","button","aria-controls","dropdown-basic",2,"background-color","transparent","border","none"],[1,"fa-solid","fa-ellipsis"],[1,"caret"],["id","dropdown-basic","class","dropdown-menu cstm not","role","menu","aria-labelledby","button-basic",4,"dropdownMenu"],["id","dropdown-basic","role","menu","aria-labelledby","button-basic",1,"dropdown-menu","cstm","not"],["role","menuitem"],[1,"dropdown-item",3,"click"],[1,"text-secondary","fw-bold","text-center"]],template:function(t,s){1&t&&(i.TgZ(0,"section",0),i._UZ(1,"app-shared-header",1),i.TgZ(2,"div",2)(3,"section"),i.YNc(4,_,2,0,"div",3),i.YNc(5,x,3,3,"h2",4),i.YNc(6,y,2,1,"ul",5),i.YNc(7,Z,3,3,"p",6),i.qZA()()()),2&t&&(i.xp6(4),i.Q6J("ngIf",s.notificationsService.loading),i.xp6(1),i.Q6J("ngIf",!s.notificationsService.loading),i.xp6(1),i.Q6J("ngIf",!s.notificationsService.loading),i.xp6(1),i.Q6J("ngIf",!(null!=s.notifications&&s.notifications.length||s.notificationsService.loading)))},directives:[g.Q,a.O5,m.X,a.sg,p.TO,p.Mq,p.Hz],pipes:[h.X$],styles:[""]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),o})();var w=n(5675);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[a.ez,C,w.m]]}),o})()},3631:(v,r,n)=>{n.d(r,{X:()=>c});var a=n(5e3);let c=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-laoding"]],decls:6,vars:0,consts:[[2,"height","50vh","display","flex","justify-content","center","align-items","center"],[1,"lds-ring"]],template:function(l,g){1&l&&(a.TgZ(0,"div",0)(1,"div",1),a._UZ(2,"div")(3,"div")(4,"div")(5,"div"),a.qZA()())},styles:[""]}),i})()}}]);