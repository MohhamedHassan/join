"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[5],{8005:(nt,f,r)=>{r.r(f),r.d(f,{HomeModule:()=>ot});var s=r(9808),d=r(2094),t=r(5e3),c=r(2169),l=r(8879),m=r(9485),h=r(9619);function _(o,n){if(1&o&&(t.TgZ(0,"div",6)(1,"a",7),t._UZ(2,"img",8),t.qZA()()),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("routerLink",i.checkRouting(e)),t.xp6(1),t.Q6J("src",(null==e?null:e.photo_name)||(null==e?null:e.image),t.LSH)}}function x(o,n){1&o&&t.YNc(0,_,3,2,"ng-template",5)}const b=function(){return{delay:1e3,disableOnInteraction:!1}},w=function(){return{clickable:!0}};function C(o,n){if(1&o&&(t.TgZ(0,"div",2)(1,"swiper",3),t.YNc(2,x,1,0,null,4),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("loop",!1)("autoHeight",!0)("allowTouchMove",!0)("autoplay",t.DdM(7,b))("pagination",t.DdM(8,w))("navigation",!0),t.xp6(1),t.Q6J("ngForOf",e.sliderContent)}}function T(o,n){1&o&&t._UZ(0,"div",9)}l.ZP.use([l.W_,l.pt]);let y=(()=>{class o{constructor(e){this.homeService=e,this.sliderContent=[]}ngOnInit(){this.sliderContent=[],localStorage.getItem("joinToken")?this.homeService.getTopSliderUser().subscribe(e=>{this.makeData(e)}):this.homeService.getTopSliderGuest().subscribe(e=>{this.makeData(e)})}makeData(e){Array.isArray(null==e?void 0:e.store)&&(this.sliderContent=[...this.sliderContent,...null==e?void 0:e.store]),Array.isArray(null==e?void 0:e.payload)&&(this.sliderContent=[...this.sliderContent,...null==e?void 0:e.payload])}checkRouting(e){return(null==e?void 0:e.product_id)?`/product/${null==e?void 0:e.product_id}`:(null==e?void 0:e.activity_id)?`/activity/${null==e?void 0:e.activity_id}`:(null==e?void 0:e.club_id)?`/clup/${null==e?void 0:e.club_id}`:(null==e?void 0:e.interests_id)?`/interests/${null==e?void 0:e.interests_id}`:void 0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slider-one"]],decls:2,vars:2,consts:[["class","mb-4","style","min-height: 70vh;box-shadow: 0 0 20px rgb(0 0 0 / 25%);",4,"ngIf"],["class","my-2",4,"ngIf"],[1,"mb-4",2,"min-height","70vh","box-shadow","0 0 20px rgb(0 0 0 / 25%)"],[2,"direction","ltr","text-align","right",3,"loop","autoHeight","allowTouchMove","autoplay","pagination","navigation"],[4,"ngFor","ngForOf"],["data-swiper-autoplay","6000","swiperSlide",""],[2,"height","70vh"],[3,"routerLink"],["appImgs","","alt","join",2,"height","70vh","width","100%",3,"src"],[1,"my-2"]],template:function(e,i){1&e&&(t.YNc(0,C,3,9,"div",0),t.YNc(1,T,1,0,"div",1)),2&e&&(t.Q6J("ngIf",null==i.sliderContent?null:i.sliderContent.length),t.xp6(1),t.Q6J("ngIf",!(null!=i.sliderContent&&i.sliderContent.length)))},directives:[s.O5,m.nF,s.sg,m.YC,d.yS,h.x],styles:['.country-dropdown{max-width:300px!important}  .swiper-button-next,   .swiper-button-prev{background:#F89416!important;color:#fff!important;border-radius:50%!important;width:40px;height:40px;text-align:center;line-height:40px}  .swiper-button-next:after,   .swiper-button-prev:after{font-size:20px;font-weight:700}  .swiper-pagination-bullet-active{background-color:#f89416!important}  .dropdown-menu.cstm{inset:105% auto auto -270px!important;width:300px;padding:0!important;border-radius:0!important}  .dropdown-menu.store{min-width:400px;inset:100% auto auto -200px!important}  .dropdown-menu.store a:hover{color:#00dcdc!important}  .custom-rtl .dropdown-menu.cstm{inset:105% -270px auto 0!important;width:300px;direction:rtl;text-align:right}  .custom-rtl .dropdown-menu.store{inset:100% -200px auto auto!important;text-align:right;direction:rtl}  .accordion-toggle[aria-expanded=true]:after{font-family:"Font Awesome 5 Free";content:"\\f077";display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;color:#00dcdc;right:1rem;top:1rem}  .card{background-color:transparent;border:1px solid #e7e7e7;box-shadow:0 8px 16px #0000000d;margin-bottom:10px}  .card .btn.btn-link{width:90%;display:flex;justify-content:flex-start;font-size:small;text-align:left}  .card-header{border-bottom:none;background-color:transparent;padding:10px 0}  .accordion-toggle[aria-expanded=false]:after{font-family:"Font Awesome 5 Free";content:"\\f078";color:#00dcdc;display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;right:1rem;top:1rem}  .btn-link{font-weight:500;color:#000;text-decoration:none}  .btn.focus,   .btn:focus{box-shadow:none}  .btn-link:hover{color:#000;text-decoration:none}  .custom-rtl .accordion-toggle[aria-expanded=false]:after{left:1rem;right:auto}  .custom-rtl .accordion-toggle[aria-expanded=true]:after{left:1rem;right:auto}  .custom-rtl .card .btn.btn-link{text-align:right}  bs-datepicker-container,   bs-daterangepicker-container{z-index:11111111111111111000000}  bs-datepicker-container{top:-50%!important}']}),o})();var S=r(7540),A=r(5749),g=r(3631),u=r(8995);function I(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"app-cart-one",7),t.NdJ("favoriteLoaing",function(a){return t.CHM(e),t.oxw().favoriteLoadingStatus(a)})("changefavStatus",function(a){return t.CHM(e),t.oxw().changeFavStatus(a)}),t.qZA()()}if(2&o){const e=n.$implicit,i=n.index,a=t.oxw();t.xp6(1),t.Q6J("activityIndex",i)("show_heart",a.isLogin())("heartStatus",e.favorite)("detailsPageRoute","/activity/"+e.id)("title",e.title)("age_from",e.age_from)("age_to",e.age_to)("price",e.location[0].price)("interests_name",e.interests_name)("location_count",e.location_count)("activityId",e.id)("categories",e.categories)("imgSrc",e.banner)}}function Z(o,n){1&o&&(t.TgZ(0,"p",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"no_data")," "))}function H(o,n){1&o&&t._UZ(0,"app-laoding")}function F(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"show_more")," "))}function L(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"show_less")," "))}function k(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().showMore()}),t.YNc(3,F,3,3,"span",3),t.YNc(4,L,3,3,"span",3),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",!e.showLess),t.xp6(1),t.Q6J("ngIf",e.showLess)}}function O(o,n){1&o&&(t.TgZ(0,"div",12)(1,"div",13),t._UZ(2,"div")(3,"div")(4,"div")(5,"div"),t.qZA()())}let J=(()=>{class o{constructor(e){this.homeService=e,this.activities=[],this.page=1,this.favoriteLoading=!1,this.showLess=!1}ngOnInit(){this.subscription=this.homeService.activities.subscribe(e=>{Array.isArray(e)&&(this.activities=[...this.activities,...e]),this.page>1&&0==(null==e?void 0:e.length)&&(this.page=0,this.showLess=!0)})}showMore(){this.page+=1,this.showLess&&(this.activities=[],window.scroll(0,0)),this.showLess=!1,localStorage.getItem("joinToken")?this.homeService.getActivitiesUser(this.page):this.homeService.getActivitiesGuest(this.page)}isLogin(){return!!localStorage.getItem("joinToken")}favoriteLoadingStatus(e){this.favoriteLoading=e}changeFavStatus(e){this.activities[e].favorite="FAVORITE"==this.activities[e].favorite?"":"FAVORITE"}ngOnDestroy(){this.homeService.activities.next([]),this.subscription&&this.subscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-activities"]],decls:6,vars:5,consts:[[1,"row"],["class","col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[4,"ngIf"],["class","col-md-12 mb-4",4,"ngIf"],["style","position:fixed;top:0;z-index: 1111;bottom:0;right:0;left:0;display:flex;justify-content: center;align-items: center;background-color: rgba(224, 221, 221, 0.5);",4,"ngIf"],[1,"col-md-4","col-lg-3","mb-4"],[3,"activityIndex","show_heart","heartStatus","detailsPageRoute","title","age_from","age_to","price","interests_name","location_count","activityId","categories","imgSrc","favoriteLoaing","changefavStatus"],[1,"text-secondary","fw-bold","text-center"],[1,"col-md-12","mb-4"],[1,"text-center"],[1,"showMore",3,"click"],[2,"position","fixed","top","0","z-index","1111","bottom","0","right","0","left","0","display","flex","justify-content","center","align-items","center","background-color","rgba(224, 221, 221, 0.5)"],[1,"lds-ring"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,I,2,13,"div",1),t.YNc(2,Z,3,3,"p",2),t.YNc(3,H,1,0,"app-laoding",3),t.YNc(4,k,5,2,"div",4),t.qZA(),t.YNc(5,O,6,0,"div",5)),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.activities),t.xp6(1),t.Q6J("ngIf",!(null!=i.activities&&i.activities.length)&&i.homeService.ActivitiesRequestComplete),t.xp6(1),t.Q6J("ngIf",i.homeService.activitiesLoading),t.xp6(1),t.Q6J("ngIf",(null==i.activities?null:i.activities.length)&&(null==i.activities?null:i.activities.length)>7&&!i.homeService.activitiesLoading),t.xp6(1),t.Q6J("ngIf",i.favoriteLoading))},directives:[s.sg,A.u,s.O5,g.X],pipes:[u.X$],styles:[""]}),o})();var v=r(3697);function Y(o,n){1&o&&t._UZ(0,"app-laoding")}function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"app-clup-card",7),t.NdJ("favoriteLoaing",function(a){return t.CHM(e),t.oxw(2).favoriteLoadingStatus(a)})("changefavStatus",function(a){return t.CHM(e),t.oxw(2).changeFavStatus(a)}),t.qZA()()}if(2&o){const e=n.$implicit,i=n.index,a=t.oxw(2);t.xp6(1),t.Q6J("clupIndex",i)("heartStatus",e.favorite)("clupId",e.id)("show_heart",a.isLogin())("location_count",e.location_count)("route","/clup/"+e.id)("name",e.name)("imgSrc",e.logo)}}function N(o,n){1&o&&(t.TgZ(0,"p",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"no_data")," "))}function U(o,n){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,Q,2,8,"div",4),t.YNc(2,N,3,3,"p",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.clups),t.xp6(1),t.Q6J("ngIf",!(null!=e.clups&&e.clups.length))}}function j(o,n){1&o&&(t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"div")(3,"div")(4,"div")(5,"div"),t.qZA()())}let M=(()=>{class o{constructor(e){this.homeService=e,this.clups=[],this.favoriteLoading=!1}ngOnInit(){this.homeService.clups.subscribe(e=>{Array.isArray(e)&&(this.clups=e)})}isLogin(){return!!localStorage.getItem("joinToken")}favoriteLoadingStatus(e){this.favoriteLoading=e}changeFavStatus(e){this.clups[e].favorite="FAVORITE"==this.clups[e].favorite?"":"FAVORITE"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-clups"]],decls:4,vars:3,consts:[[4,"ngIf","ngIfElse"],["content",""],["style","position:fixed;top:0;z-index: 1111;bottom:0;right:0;left:0;display:flex;justify-content: center;align-items: center;background-color: rgba(224, 221, 221, 0.5);",4,"ngIf"],[1,"row"],["class","col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[1,"col-md-4","col-lg-3","mb-4"],[3,"clupIndex","heartStatus","clupId","show_heart","location_count","route","name","imgSrc","favoriteLoaing","changefavStatus"],[1,"text-secondary","fw-bold","text-center"],[2,"position","fixed","top","0","z-index","1111","bottom","0","right","0","left","0","display","flex","justify-content","center","align-items","center","background-color","rgba(224, 221, 221, 0.5)"],[1,"lds-ring"]],template:function(e,i){if(1&e&&(t.YNc(0,Y,1,0,"app-laoding",0),t.YNc(1,U,3,2,"ng-template",null,1,t.W1O),t.YNc(3,j,6,0,"div",2)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.homeService.clupsLoading)("ngIfElse",a),t.xp6(3),t.Q6J("ngIf",i.favoriteLoading)}},directives:[s.O5,g.X,s.sg,v.D],pipes:[u.X$],styles:[""]}),o})();function z(o,n){1&o&&t._UZ(0,"app-laoding")}function E(o,n){if(1&o&&(t.TgZ(0,"div",5),t._UZ(1,"app-clup-card",6),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("route","/interests/"+e.interests_id)("name",e.name)("imgSrc",e.photo_name)}}function X(o,n){1&o&&(t.TgZ(0,"p",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"no_data")," "))}function q(o,n){if(1&o&&(t.TgZ(0,"div",2),t.YNc(1,E,2,3,"div",3),t.YNc(2,X,3,3,"p",4),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.intersts),t.xp6(1),t.Q6J("ngIf",!(null!=e.intersts&&e.intersts.length))}}let R=(()=>{class o{constructor(e,i){this.homeService=e,this.cd=i,this.intersts=[]}ngOnInit(){this.homeService.intersts.subscribe(e=>{Array.isArray(e)&&(this.cd.detectChanges(),this.intersts=e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-intersts"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["content",""],[1,"row"],["class","col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[1,"col-md-4","col-lg-3","mb-4"],[3,"route","name","imgSrc"],[1,"text-secondary","fw-bold","text-center"]],template:function(e,i){if(1&e&&(t.YNc(0,z,1,0,"app-laoding",0),t.YNc(1,q,3,2,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",!1)("ngIfElse",a)}},directives:[s.O5,g.X,s.sg,v.D],pipes:[u.X$],styles:[""]}),o})();function $(o,n){1&o&&t._UZ(0,"app-laoding")}const B=function(o){return["/activity/",o]},D=function(o,n,e){return{left:o,right:n,direction:e}};function P(o,n){if(1&o&&(t.TgZ(0,"a",7)(1,"div")(2,"div",8),t._UZ(3,"img",9),t.TgZ(4,"p",10)(5,"bdi"),t._uU(6),t.qZA()()()()()),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.Q6J("routerLink",t.VKq(4,B,null==e?null:e.id)),t.xp6(3),t.Q6J("src",e.banner,t.LSH),t.xp6(1),t.Q6J("ngStyle",t.kEZ(6,D,"ar"==i.lang?"auto":"0","ar"==i.lang?"0":"auto","ar"==i.lang?"rtl":"ltr")),t.xp6(2),t.Oqu(e.title)}}function V(o,n){1&o&&(t.ynx(0),t.YNc(1,P,7,10,"ng-template",6),t.BQk())}function W(o,n){if(1&o&&(t.TgZ(0,"h2",2),t._uU(1),t.ALo(2,"translate"),t.qZA(),t._UZ(3,"div",3),t.TgZ(4,"swiper",4),t.YNc(5,V,2,0,"ng-container",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,3,"popular")),t.xp6(3),t.Q6J("config",e.swpieroptions),t.xp6(1),t.Q6J("ngForOf",e.popular)}}l.ZP.use([l.W_,l.tl]);let G=(()=>{class o{constructor(e){this.homeService=e,this.popular=[],this.bottomSliderLoading=!0,this.swpieroptions={slidesPerView:3,spaceBetween:"50",pagination:!1,navigation:"true",breakpoints:{0:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:40}}}}ngOnInit(){this.homeService.getPopular().subscribe(e=>{this.popular=e,this.bottomSliderLoading=!1})}get lang(){return localStorage.getItem("lang")||"en"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slider-two"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["content",""],[1,"mainColorHeading"],[1,"custom-line"],[1,"mrginBottom",2,"direction","ltr","text-align","right",3,"config"],[4,"ngFor","ngForOf"],["swiperSlide",""],[1,"text-dark",3,"routerLink"],[2,"position","relative","height","250px","box-shadow","0 2px 12px 0 rgb(0 0 0 / 10%)","border","1px solid #ebeef5"],["appImgs","","alt","",1,"w-100",2,"height","100%","object-fit","cover",3,"src"],[1,"bg-white","p-3","m-0","text-center",2,"position","absolute","bottom","0","left","0","width","90%","font-size","20px","white-space","nowrap","overflow","hidden","text-overflow","ellipsis",3,"ngStyle"]],template:function(e,i){if(1&e&&(t.YNc(0,$,1,0,"app-laoding",0),t.YNc(1,W,6,5,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.bottomSliderLoading)("ngIfElse",a)}},directives:[s.O5,g.X,m.nF,s.sg,m.YC,d.yS,h.x,s.PC],pipes:[u.X$],styles:['.country-dropdown{max-width:300px!important}  .swiper-button-next,   .swiper-button-prev{background:#F89416!important;color:#fff!important;border-radius:50%!important;width:40px;height:40px;text-align:center;line-height:40px}  .swiper-button-next:after,   .swiper-button-prev:after{font-size:20px;font-weight:700}  .swiper-pagination-bullet-active{background-color:#f89416!important}  .dropdown-menu.cstm{inset:105% auto auto -270px!important;width:300px;padding:0!important;border-radius:0!important}  .dropdown-menu.store{min-width:400px;inset:100% auto auto -200px!important}  .dropdown-menu.store a:hover{color:#00dcdc!important}  .custom-rtl .dropdown-menu.cstm{inset:105% -270px auto 0!important;width:300px;direction:rtl;text-align:right}  .custom-rtl .dropdown-menu.store{inset:100% -200px auto auto!important;text-align:right;direction:rtl}  .accordion-toggle[aria-expanded=true]:after{font-family:"Font Awesome 5 Free";content:"\\f077";display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;color:#00dcdc;right:1rem;top:1rem}  .card{background-color:transparent;border:1px solid #e7e7e7;box-shadow:0 8px 16px #0000000d;margin-bottom:10px}  .card .btn.btn-link{width:90%;display:flex;justify-content:flex-start;font-size:small;text-align:left}  .card-header{border-bottom:none;background-color:transparent;padding:10px 0}  .accordion-toggle[aria-expanded=false]:after{font-family:"Font Awesome 5 Free";content:"\\f078";color:#00dcdc;display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;right:1rem;top:1rem}  .btn-link{font-weight:500;color:#000;text-decoration:none}  .btn.focus,   .btn:focus{box-shadow:none}  .btn-link:hover{color:#000;text-decoration:none}  .custom-rtl .accordion-toggle[aria-expanded=false]:after{left:1rem;right:auto}  .custom-rtl .accordion-toggle[aria-expanded=true]:after{left:1rem;right:auto}  .custom-rtl .card .btn.btn-link{text-align:right}  bs-datepicker-container,   bs-daterangepicker-container{z-index:11111111111111111000000}  bs-datepicker-container{top:-50%!important}']}),o})();const K=[{path:"",component:(()=>{class o{constructor(e){this.homeService=e,this.tabs=[{name_ar:"\u0623\u0646\u0634\u0637\u0629",name_en:"Activities",id:"1"},{name_ar:"\u0627\u0644\u0627\u0646\u062f\u064a\u0629",name_en:"Clubs",id:"2"},{name_ar:"\u0627\u0644\u0623\u0647\u062a\u0645\u0627\u0645\u0627\u062a",name_en:"Interests",id:"3"}],this.chosenTab=1}ngOnInit(){localStorage.getItem("joinToken")?(this.homeService.getClupsUser(),this.homeService.getActivitiesUser(1)):(this.homeService.getClupsGuest(),this.homeService.getActivitiesGuest(1))}chosenTabFromChild(e){this.chosenTab=e}ngOnDestroy(){this.homeService.activitiesLoading=!1,this.homeService.ActivitiesRequestComplete=!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:9,vars:5,consts:[[1,"home"],[1,"container"],[3,"listData","currentid","chosenTab"],[1,"mrginBottom"],[3,"hidden"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"app-slider-one"),t.TgZ(2,"div",1)(3,"app-categories-list",2),t.NdJ("chosenTab",function(p){return i.chosenTabFromChild(p)}),t.qZA(),t.TgZ(4,"section",3),t._UZ(5,"app-home-activities",4)(6,"app-home-clups",4)(7,"app-home-intersts",4),t.qZA(),t._UZ(8,"app-slider-two"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("listData",i.tabs)("currentid",0),t.xp6(2),t.Q6J("hidden",1!=i.chosenTab),t.xp6(1),t.Q6J("hidden",2!=i.chosenTab),t.xp6(1),t.Q6J("hidden",3!=i.chosenTab))},directives:[y,S.D,J,M,R,G],styles:[""]}),o})()}];let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(K)],d.Bz]}),o})();var et=r(4466);let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,tt,et.m]]}),o})()}}]);