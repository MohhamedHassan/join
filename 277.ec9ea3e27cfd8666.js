"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[277],{3277:(pt,b,l)=>{l.r(b),l.d(b,{ProductDetailsModule:()=>ut});var d=l(9808),_=l(2094),A=l(3900),u=l(8879),t=l(5e3),P=l(8968),J=l(2313),k=l(9863),D=l(3631),U=l(9619),m=l(9485),S=l(4339);const z=function(o,n){return{direction:o,"text-align":n}};function B(o,n){if(1&o&&(t.TgZ(0,"div",3),t._UZ(1,"app-store-card",4),t.qZA()),2&o){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("ngStyle",t.WLB(8,z,"ar"==i.lang?"rtl":"ltr","ar"==i.lang?"right":"left")),t.xp6(1),t.Q6J("discount_percent",null==e?null:e.discount_percent)("id",e.id)("imgSrc",e.image)("name_ar",e.name)("name_en",e.name)("price",e.price)("pre_price",e.pre_price)}}function I(o,n){1&o&&(t.ynx(0),t.YNc(1,B,2,11,"ng-template",2),t.BQk())}u.ZP.use([u.W_,u.tl]);let Q=(()=>{class o{constructor(){this.relatedProducts=[],this.swpieroptions={slidesPerView:3,spaceBetween:"50",pagination:!1,navigation:"true",breakpoints:{0:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:4,spaceBetween:40}}}}ngOnInit(){}get lang(){return localStorage.getItem("lang")||"en"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-related-products"]],inputs:{relatedProducts:"relatedProducts"},decls:2,vars:2,consts:[[1,"mrginBottom",2,"direction","ltr","text-align","right",3,"config"],[4,"ngFor","ngForOf"],["swiperSlide",""],[3,"ngStyle"],[3,"discount_percent","id","imgSrc","name_ar","name_en","price","pre_price"]],template:function(e,i){1&e&&(t.TgZ(0,"swiper",0),t.YNc(1,I,2,0,"ng-container",1),t.qZA()),2&e&&(t.Q6J("config",i.swpieroptions),t.xp6(1),t.Q6J("ngForOf",i.relatedProducts))},directives:[m.nF,d.sg,m.YC,d.PC,S.M],styles:[""]}),o})();var N=l(8995),Y=l(3300);function F(o,n){1&o&&t._UZ(0,"app-laoding")}function q(o,n){if(1&o&&(t.TgZ(0,"div",31),t._UZ(1,"img",32),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.product_details.image,t.LSH)}}function M(o,n){if(1&o&&(t.TgZ(0,"div",36),t._UZ(1,"img",37),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",null==e?null:e.path,t.LSH)}}function L(o,n){1&o&&t.YNc(0,M,2,1,"ng-template",35)}const j=function(){return{delay:1e3,disableOnInteraction:!1}},O=function(){return{clickable:!0}};function H(o,n){if(1&o&&(t.TgZ(0,"div",31)(1,"swiper",33),t.YNc(2,L,1,0,null,34),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("loop",!1)("autoHeight",!0)("allowTouchMove",!0)("autoplay",t.DdM(7,j))("pagination",t.DdM(8,O))("navigation",!0),t.xp6(1),t.Q6J("ngForOf",e.product_details.images)}}function E(o,n){if(1&o&&(t.ynx(0),t._UZ(1,"span",38),t.TgZ(2,"p",39)(3,"del"),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(4),t.AsE(" ",e.product_details.pre_price," ",t.lcZ(5,2,"kwd")," ")}}function R(o,n){if(1&o&&(t.ynx(0),t._UZ(1,"p",40)(2,"hr"),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("innerHTML",e.savedHtml(e.product_details.description),t.oJD)}}function $(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",45),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(3).selectedColor=r}),t._UZ(1,"span"),t.qZA()}if(2&o){const e=n.$implicit,i=t.oxw(3);t.ekj("active",(null==i.selectedColor?null:i.selectedColor.name)==(null==e?null:e.name)),t.xp6(1),t.Udp("background",null==e?null:e.name)}}function W(o,n){if(1&o&&(t.TgZ(0,"div",41)(1,"h2",42),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",43),t.YNc(5,$,2,4,"li",44),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"colors")),t.xp6(3),t.Q6J("ngForOf",null==e.product_details?null:e.product_details.product_colors)}}function V(o,n){1&o&&t._UZ(0,"hr")}function X(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",47),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(3).selectSize(r)}),t._uU(1),t.qZA()}if(2&o){const e=n.$implicit,i=t.oxw(3);t.ekj("active",(null==i.selectedSize?null:i.selectedSize.name)==(null==e?null:e.name)),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function G(o,n){if(1&o&&(t.TgZ(0,"div",41)(1,"h2",42),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",43),t.YNc(5,X,2,3,"li",46),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"sizes")),t.xp6(3),t.Q6J("ngForOf",null==e.product_details?null:e.product_details.product_sizes)}}function K(o,n){if(1&o&&(t.TgZ(0,"div",48)(1,"div"),t._UZ(2,"i",49),t.qZA(),t._UZ(3,"span",50),t.TgZ(4,"div")(5,"p",51),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"p",52),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(6),t.hij(" ",t.lcZ(7,2,"delivery_notes")," "),t.xp6(2),t.Q6J("innerHTML",e.savedHtml(e.product_details.delivery_notes),t.oJD)}}const tt=function(o,n){return{left:o,right:n}};function et(o,n){if(1&o&&(t.TgZ(0,"div",53),t._UZ(1,"img",54),t.TgZ(2,"span",55),t._uU(3),t.qZA()()),2&o){const e=t.oxw(2);t.Q6J("ngStyle",t.WLB(2,tt,"ar"==e.lang?"10px":"auto","ar"==e.lang?"auto":"10px")),t.xp6(3),t.hij(" ",null==e.product_details?null:e.product_details.discount_percent," ")}}function ot(o,n){if(1&o&&(t.ynx(0),t._UZ(1,"span",38),t.TgZ(2,"p",39)(3,"del"),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(4),t.AsE(" ",e.product_details.pre_price," ",t.lcZ(5,2,"kwd")," ")}}function it(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1," | "),t.qZA())}function nt(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"kwd")," "))}function lt(o,n){if(1&o&&(t.TgZ(0,"div")(1,"h2",56),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"app-related-products",57),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"related_product")),t.xp6(2),t.Q6J("relatedProducts",null==e.product_details?null:e.product_details.related_products)}}function ct(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"section",2),t.YNc(1,q,2,1,"div",3),t.YNc(2,H,3,9,"div",3),t.TgZ(3,"div",4)(4,"div",5)(5,"h2",6),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"button",6)(9,"a",7),t._UZ(10,"i",8)(11,"span",9),t._uU(12),t.ALo(13,"translate"),t.qZA()()()(),t._UZ(14,"hr"),t.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"p",14),t._UZ(20,"img",15)(21,"span",9),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.YNc(24,E,6,4,"ng-container",0),t.qZA(),t.YNc(25,R,3,1,"ng-container",0),t.YNc(26,W,6,4,"div",16),t.YNc(27,V,1,0,"hr",0),t.YNc(28,G,6,4,"div",16),t.YNc(29,K,9,4,"div",17),t.qZA()(),t.TgZ(30,"div",18)(31,"div",19),t.YNc(32,et,4,5,"div",20),t.TgZ(33,"p",21),t._uU(34),t.ALo(35,"translate"),t.O4$(),t.TgZ(36,"svg",22),t._UZ(37,"path",23)(38,"path",24),t.qZA()(),t.kcU(),t.TgZ(39,"p",25),t._uU(40),t.qZA(),t.TgZ(41,"div",13)(42,"p",14),t._UZ(43,"img",15)(44,"span",9),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.YNc(47,ot,6,4,"ng-container",0),t.qZA(),t.TgZ(48,"div",26)(49,"i",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().minusone()}),t.qZA(),t.TgZ(50,"span",28),t._uU(51),t.qZA(),t.TgZ(52,"i",29),t.NdJ("click",function(){return t.CHM(e),t.oxw().plusone()}),t.qZA()(),t.TgZ(53,"button",30),t.NdJ("click",function(){return t.CHM(e),t.oxw().addToCart()}),t._uU(54),t.ALo(55,"translate"),t.YNc(56,it,2,0,"span",0),t._uU(57),t.ALo(58,"tofixednumber"),t.YNc(59,nt,3,3,"span",0),t.qZA()()(),t.YNc(60,lt,5,4,"div",0),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.product_details.image&&!e.product_details.images),t.xp6(1),t.Q6J("ngIf",e.product_details.images),t.xp6(4),t.Oqu(e.product_details.name),t.xp6(6),t.hij(" ",t.lcZ(13,24,"share")," "),t.xp6(10),t.AsE(" ",e.product_details.price," ",t.lcZ(23,26,"kwd")," "),t.xp6(2),t.Q6J("ngIf",e.product_details.pre_price!=e.product_details.price),t.xp6(1),t.Q6J("ngIf",e.product_details.description),t.xp6(1),t.Q6J("ngIf",null==e.product_details||null==e.product_details.product_colors?null:e.product_details.product_colors.length),t.xp6(1),t.Q6J("ngIf",(null==e.product_details||null==e.product_details.product_sizes?null:e.product_details.product_sizes.length)&&(null==e.product_details||null==e.product_details.product_colors?null:e.product_details.product_colors.length)),t.xp6(1),t.Q6J("ngIf",null==e.product_details||null==e.product_details.product_sizes?null:e.product_details.product_sizes.length),t.xp6(1),t.Q6J("ngIf",e.product_details.delivery_notes),t.xp6(3),t.Q6J("ngIf",(null==e.product_details?null:e.product_details.discount_percent)&&"0.0 %"!=(null==e.product_details?null:e.product_details.discount_percent)),t.xp6(2),t.hij(" ",t.lcZ(35,28,"special_order")," "),t.xp6(6),t.Oqu(e.product_details.name),t.xp6(5),t.AsE(" ",e.product_details.price," ",t.lcZ(46,30,"kwd")," "),t.xp6(2),t.Q6J("ngIf",e.product_details.pre_price!=e.product_details.price),t.xp6(4),t.hij(" ",e.countToBuy," "),t.xp6(3),t.hij(" ",t.lcZ(55,32,"addtocart")," "),t.xp6(2),t.Q6J("ngIf",e.countToBuy>0),t.xp6(1),t.hij(" ",t.lcZ(58,34,e.product_details.price*e.countToBuy)," "),t.xp6(2),t.Q6J("ngIf",e.countToBuy>0),t.xp6(1),t.Q6J("ngIf",null==e.product_details||null==e.product_details.related_products?null:e.product_details.related_products.length)}}u.ZP.use([u.W_,u.pt]);const rt=[{path:"",component:(()=>{class o{constructor(e,i,c,r,s){this.activatedRoute=e,this.toastr=i,this.router=c,this._sanitizer=r,this.storeService=s,this.selectedColor=null,this.selectedSize=null,this.loading=!0,this.countToBuy=0,this.cartitems=[],this.availableCount=0}savedHtml(e){return this._sanitizer.bypassSecurityTrustHtml(e)}get lang(){return localStorage.getItem("lang")||"en"}ngOnInit(){let e=localStorage.getItem("joincart");e&&(this.cartitems=JSON.parse(e)),console.log(this.cartitems),this.activatedRoute.params.pipe((0,A.w)(i=>(this.loading=!0,this.storeService.getProductDetails(null==i?void 0:i.id)))).subscribe(i=>{var c,r,s,p,a,x,h,f,v,Z,T,w,y,C;if(console.log(i),this.loading=!1,this.product_details=null==i?void 0:i.payload,(null===(r=null===(c=this.product_details)||void 0===c?void 0:c.product_colors)||void 0===r?void 0:r.length)&&(this.selectedColor=null===(s=this.product_details)||void 0===s?void 0:s.product_colors[0]),(null===(a=null===(p=this.product_details)||void 0===p?void 0:p.product_sizes)||void 0===a?void 0:a.length)?(this.availableCount=null===(h=null===(x=this.product_details)||void 0===x?void 0:x.product_sizes[0])||void 0===h?void 0:h.qty,this.selectedSize=null===(f=this.product_details)||void 0===f?void 0:f.product_sizes[0]):this.availableCount=null===(v=this.product_details)||void 0===v?void 0:v.qty,console.log(this.product_details),null===(Z=this.cartitems)||void 0===Z?void 0:Z.length)for(let g=0;g<(null===(T=this.cartitems)||void 0===T?void 0:T.length)&&((null===(w=this.cartitems[g])||void 0===w?void 0:w.id)!=(null===(y=this.product_details)||void 0===y?void 0:y.id)||2!=(null===(C=this.cartitems[g])||void 0===C?void 0:C.cstmtype));g++);this.availableCount>0&&(this.countToBuy=1),0==(null==i?void 0:i.code)&&this.router.navigate(["/"])})}selectSize(e){this.selectedSize=e,this.availableCount=null==e?void 0:e.qty,this.countToBuy>this.availableCount&&(this.countToBuy=1)}addToCart(){var e,i,c,r,s;if(this.availableCount<1)this.toastrError();else if(this.countToBuy>0){let p=!1;if(this.product_details.cstmtype=2,this.product_details.selectedColor=this.selectedColor,this.product_details.selectedSize=this.selectedSize,null===(e=this.cartitems)||void 0===e?void 0:e.length)for(let a=0;a<(null===(i=this.cartitems)||void 0===i?void 0:i.length);a++)if((null===(c=this.cartitems[a])||void 0===c?void 0:c.id)==(null===(r=this.product_details)||void 0===r?void 0:r.id)&&2==(null===(s=this.cartitems[a])||void 0===s?void 0:s.cstmtype)){this.cartitems[a].countToBuy=this.countToBuy,this.cartitems[a].selectedColor=this.selectedColor,this.cartitems[a].selectedSize=this.selectedSize,p=!0;break}p||(this.product_details.countToBuy=this.countToBuy,this.cartitems.push(this.product_details)),localStorage.setItem("joincart",JSON.stringify(this.cartitems)),this.router.navigate(["/cart"])}}plusone(){this.availableCount==this.countToBuy&&this.toastrError(),this.countToBuy<this.availableCount&&(this.countToBuy+=1)}minusone(){this.countToBuy>0&&(this.countToBuy-=1)}toastrError(){"ar"==localStorage.getItem("lang")?this.toastr.error("\u0627\u0646\u062a\u0647\u064a \u0645\u0646 \u0627\u0644\u0645\u062e\u0632\u0646"):this.toastr.error("Out of stock")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.gz),t.Y36(P._W),t.Y36(_.F0),t.Y36(J.H7),t.Y36(k.d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:2,consts:[[4,"ngIf"],["style","min-height: 100vh;","class","details-page",4,"ngIf"],[1,"details-page",2,"min-height","100vh"],["class","cvr",4,"ngIf"],[1,"container"],[1,"header","mt-3","flex-column","flex-md-row","d-flex","justify-content-between","align-items-md-center"],[1,"mb-2"],["target","_blank","href","https://www.facebook.com/sharer.php?u=http://localhost:4200/#/product/85",1,"text-white"],[1,"fa-solid","fa-share"],[1,"mx-1"],[1,"row"],[1,"col-lg-8","mb-4"],[1,"cash"],[1,"d-flex"],[1,"maincolor"],["appImgs","","src","assets/images/cash.svg","alt","Join",2,"width","30px"],["class","my-3 colorsContainer",4,"ngIf"],["style","border: 1px solid #e3e3e3;\n                    border-radius: 5px;\n                    padding: 20px;","class","delivrydetails my-5 d-flex align-items-center",4,"ngIf"],[1,"col-lg-4","mb-4"],[1,"book-now","bg-white","p-3","rounded","position-relative"],["style","width:90px;height:60px;position: absolute;top: 0;",3,"ngStyle",4,"ngIf"],[1,"maincolor",2,"margin-bottom","2px"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-exclamation-circle"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"],[1,"m-0"],[1,"plusminus","my-2","text-center"],[1,"fa-solid","fa-minus",3,"click"],[1,"mx-2","count"],[1,"fa-solid","fa-plus",3,"click"],[1,"w-100","mt-3","book",3,"click"],[1,"cvr"],["appImgs","","alt","Join",3,"src"],[2,"direction","ltr","text-align","right",3,"loop","autoHeight","allowTouchMove","autoplay","pagination","navigation"],[4,"ngFor","ngForOf"],["data-swiper-autoplay","6000","swiperSlide",""],[2,"height","70vh"],["appImgs","","alt","join",3,"src"],[1,"mx-2"],[1,"orangecolor"],[1,"mt-3",3,"innerHTML"],[1,"my-3","colorsContainer"],[1,"mb-3"],[1,"d-flex","flex-wrap","list-unstyled","p-0","m-0"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["style","cursor: pointer;",3,"active","click",4,"ngFor","ngForOf"],[2,"cursor","pointer",3,"click"],[1,"delivrydetails","my-5","d-flex","align-items-center",2,"border","1px solid #e3e3e3","border-radius","5px","padding","20px"],[1,"fa-solid","fa-truck","maincolor",2,"font-size","50px"],[1,"mx-3"],[1,"maincolor","mb-1"],[1,"m-0","delivery_notes",3,"innerHTML"],[2,"width","90px","height","60px","position","absolute","top","0",3,"ngStyle"],["appImgs","","src","assets/images/discount.svg","alt","",2,"width","90px","height","60px","position","absolute","top","0","left","10px"],[2,"color","white","position","absolute","top","0","left","33px","font-size","small"],[1,"my-2"],[3,"relatedProducts"]],template:function(e,i){1&e&&(t.YNc(0,F,1,0,"app-laoding",0),t.YNc(1,ct,61,36,"section",1)),2&e&&(t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",i.product_details&&!i.loading))},directives:[d.O5,D.X,U.x,m.nF,d.sg,m.YC,d.PC,Q],pipes:[N.X$,Y.r],styles:['.country-dropdown{max-width:300px!important}  .swiper-button-next,   .swiper-button-prev{background:#F89416!important;color:#fff!important;border-radius:50%!important;width:40px;height:40px;text-align:center;line-height:40px}  .swiper-button-next:after,   .swiper-button-prev:after{font-size:20px;font-weight:700}  .swiper-pagination-bullet-active{background-color:#f89416!important}  .dropdown-menu.cstm{inset:105% auto auto -270px!important;width:300px;padding:0!important;border-radius:0!important}  .dropdown-menu.store{min-width:400px;inset:100% auto auto -200px!important}  .dropdown-menu.store a:hover{color:#00dcdc!important}  .custom-rtl .dropdown-menu.cstm{inset:105% -270px auto 0!important;width:300px;direction:rtl;text-align:right}  .custom-rtl .dropdown-menu.store{inset:100% -200px auto auto!important;text-align:right;direction:rtl}  .accordion-toggle[aria-expanded=true]:after{font-family:"Font Awesome 5 Free";content:"\\f077";display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;color:#00dcdc;right:1rem;top:1rem}  .card{background-color:transparent;border:1px solid #e7e7e7;box-shadow:0 8px 16px #0000000d;margin-bottom:10px}  .card .btn.btn-link{width:90%;display:flex;justify-content:flex-start;font-size:small;text-align:left}  .card-header{border-bottom:none;background-color:transparent;padding:10px 0}  .accordion-toggle[aria-expanded=false]:after{font-family:"Font Awesome 5 Free";content:"\\f078";color:#00dcdc;display:inline-block;padding-left:3px;vertical-align:middle;font-weight:900;position:absolute;right:1rem;top:1rem}  .btn-link{font-weight:500;color:#000;text-decoration:none}  .btn.focus,   .btn:focus{box-shadow:none}  .btn-link:hover{color:#000;text-decoration:none}  .custom-rtl .accordion-toggle[aria-expanded=false]:after{left:1rem;right:auto}  .custom-rtl .accordion-toggle[aria-expanded=true]:after{left:1rem;right:auto}  .custom-rtl .card .btn.btn-link{text-align:right}  bs-datepicker-container,   bs-daterangepicker-container{z-index:11111111111111111000000}  bs-datepicker-container{top:-50%!important}']}),o})()}];let st=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[_.Bz.forChild(rt)],_.Bz]}),o})();var at=l(4466),dt=l(5718);let ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,st,at.m,dt.StoreModule]]}),o})()}}]);