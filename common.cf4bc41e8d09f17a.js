"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[592],{3300:(p,u,n)=>{n.d(u,{r:()=>i});var e=n(5e3);let i=(()=>{class s{transform(t){if(console.log(t),t||0==t)return Number(t).toFixed(2)}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=e.Yjl({name:"tofixednumber",type:s,pure:!0}),s})()},6635:(p,u,n)=>{n.d(u,{G:()=>t});var e=n(5e3),i=n(3315),s=n(9808);function m(o,r){if(1&o&&e._UZ(0,"map-marker",2),2&o){const a=r.$implicit;e.Q6J("position",a.position)("options",a.options)}}let t=(()=>{class o{constructor(){this.markers=[],this.options={mapTypeId:"hybrid",zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0,maxZoom:15,minZoom:8}}ngOnInit(){this.center={lat:Number(this.latitude),lng:Number(this.longitude)},this.markers.push({position:{lat:Number(this.latitude),lng:Number(this.longitude)},options:{animation:google.maps.Animation.BOUNCE}})}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-map"]],inputs:{latitude:"latitude",longitude:"longitude"},decls:2,vars:4,consts:[["height","300px","width","100%",3,"zoom","center","options"],[3,"position","options",4,"ngFor","ngForOf"],[3,"position","options"]],template:function(a,l){1&a&&(e.TgZ(0,"google-map",0),e.YNc(1,m,1,2,"map-marker",1),e.qZA()),2&a&&(e.Q6J("zoom",12)("center",l.center)("options",l.options),e.xp6(1),e.Q6J("ngForOf",l.markers))},directives:[i.b6,s.sg,i.O_],styles:[""]}),o})()},9919:(p,u,n)=>{n.d(u,{r:()=>t});var e=n(9109),i=n(5e3),s=n(3075);const m=function(o){return[o]};let t=(()=>{class o{constructor(){this.separateDialCode=!1,this.SearchCountryField=e.wX,this.CountryISO=e.HT,this.PhoneNumberFormat=e.M9,this.preferredCountries=[e.HT.Kuwait],this.formcontrol=!1}ngOnInit(){}get lang(){return localStorage.getItem("lang")||"en"}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-phone-number"]],inputs:{inputname:"inputname",formcontrol:"formcontrol"},decls:1,vars:16,consts:[[3,"formControl","cssClass","preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode","numberFormat","customPlaceholder"]],template:function(a,l){1&a&&i._UZ(0,"ngx-intl-tel-input",0),2&a&&i.Q6J("formControl",l.inputname)("cssClass",l.formcontrol?"custom form-control":"form-control")("preferredCountries",l.preferredCountries)("enableAutoCountrySelect",!0)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",i.VKq(14,m,l.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",l.CountryISO.Kuwait)("maxLength",15)("phoneValidation",!0)("separateDialCode",l.separateDialCode)("numberFormat",l.PhoneNumberFormat.National)("customPlaceholder",l.formcontrol?"ar"==l.lang?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u062c\u062f\u064a\u062f (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)":"New Phone Number (optional)":"ar"==l.lang?"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641":"Phone Number")},directives:[e.FV,s.JJ,s.oH,e.mh],styles:[".iti{width:100%!important}"]}),o})()},6064:(p,u,n)=>{n.d(u,{N:()=>m});var e=n(5e3),i=n(9808);function s(t,o){if(1&t&&(e.TgZ(0,"li",2)(1,"a",3),e._UZ(2,"i",4),e.qZA()()),2&t){const r=o.$implicit;e.xp6(1),e.Q6J("href",null==r?null:r.link,e.LSH),e.xp6(1),e.Tol(null==r?null:r.icon),e.Udp("color",null==r?null:r.color)}}let m=(()=>{class t{constructor(){}ngOnInit(){this.links=[{icon:"fa-brands fa-facebook-f",link:`https://www.facebook.com/sharer/sharer.php?u=${this.link}`,color:"#1877F2"},{icon:"fa-brands fa-twitter",link:`https://twitter.com/intent/tweet?url=${this.link}`,color:"#1DA1F2"},{icon:"fa-brands fa-linkedin",link:`https://www.linkedin.com/sharing/share-offsite/?url=${this.link}`,color:"#0A66C2"},{icon:"fa-brands fa-telegram",link:`https://t.me/share/url?url=${this.link}`,color:"#29A9EB"}]}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-share"]],inputs:{link:"link"},decls:2,vars:1,consts:[[1,"p-0","m-0","list-unstyled","d-flex","flex-wrap","justify-content-center"],["class","mx-2",4,"ngFor","ngForOf"],[1,"mx-2"],["target","_blank",3,"href"],[2,"font-size","30px","color","red"]],template:function(r,a){1&r&&(e.TgZ(0,"ul",0),e.YNc(1,s,3,5,"li",1),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngForOf",a.links))},directives:[i.sg],styles:[""]}),t})()},8937:(p,u,n)=>{n.d(u,{_O:()=>e.N,hJ:()=>e.Q});var e=n(8247);n(2090),n(9681),n(1877),n(4859)},2731:(p,u,n)=>{n(5525)}}]);