"use strict";(self.webpackChunkjoin=self.webpackChunkjoin||[]).push([[998],{8998:(J,d,a)=>{a.r(d),a.d(d,{SearchResultModule:()=>F});var c=a(9808),s=a(2094),e=a(5e3),p=a(4004),h=a(520),g=a(4965);let f=(()=>{class n{constructor(t,o){this.http=t,this.glopalService=o}getSearchResult(t){return this.http.post(`${this.glopalService.apiUrlOne}search`,{str:t}).pipe((0,p.U)(o=>Array.isArray(o.payload)?o.payload:[]))}filter(t){return this.http.post(`${this.glopalService.apiUrlOne}getFiltersWeb`,t).pipe((0,p.U)(o=>Array.isArray(o.payload)?o.payload:[]))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.eN),e.LFG(g.W))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=a(4299),m=a(3631),S=a(8995);function R(n,r){1&n&&e._UZ(0,"app-shared-header",4)}function y(n,r){1&n&&e._UZ(0,"app-laoding")}function x(n,r){if(1&n&&(e.TgZ(0,"div",8)(1,"article",9)(2,"div",10),e._UZ(3,"img",11),e.qZA(),e.TgZ(4,"div",12)(5,"h2",13)(6,"a",14)(7,"span",15),e._uU(8),e.qZA()()()()()()),2&n){const t=r.$implicit,o=e.oxw(2);e.xp6(3),e.Q6J("src",null==t?null:t.banner,e.LSH),e.xp6(3),e.Q6J("routerLink",o.routeToDEtailsPage(t)),e.xp6(2),e.hij(" ",(null==t?null:t.title)||(null==t?null:t.name)," ")}}function T(n,r){1&n&&(e.TgZ(0,"p",16),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"no_data"),"\n"))}function C(n,r){if(1&n&&(e.TgZ(0,"div",5),e.YNc(1,x,9,3,"div",6),e.YNc(2,T,3,3,"p",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.searchResult),e.xp6(1),e.Q6J("ngIf",!(null!=t.searchResult&&t.searchResult.length))}}const A=[{path:"",component:(()=>{class n{constructor(t,o,l){this.activatedRoute=t,this.serachService=o,this.router=l,this.loading=!0,this.searchResult=[]}ngOnInit(){this.activatedRoute.params.subscribe(t=>{-1==(null==t?void 0:t.str)?(this.loading=!0,this.activatedRoute.queryParamMap.subscribe(o=>{if(console.log(o),o.params.filterbody){let l=JSON.parse(o.params.filterbody)[0],i=new FormData;i.append("interests_id",l.interests_id.toString()),i.append("child_id",l.child_id.toString()),i.append("area_id",l.area_id.toString()),i.append("age_from",l.age_from),i.append("age_to",l.age_to),i.append("price_from",l.price_from),i.append("price_to",l.price_to),i.append("rating",l.rating),this.serachService.filter(i).subscribe(u=>{this.searchResult=u,this.searchResult.map(Y=>{Y.type="ACTIVITY"}),this.loading=!1,console.log(u)})}})):(this.loading=!0,this.serachService.getSearchResult(null==t?void 0:t.str).subscribe(o=>{this.searchResult=o,this.loading=!1,console.log(o)}))})}routeToDEtailsPage(t){return"ACTIVITY"==(null==t?void 0:t.type)?`/activity/${null==t?void 0:t.id}`:"CLUB"==(null==t?void 0:t.type)?`/clup/${null==t?void 0:t.id}`:"/notfound"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.gz),e.Y36(f),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-search-result"]],decls:4,vars:3,consts:[["header","search_result",4,"ngIf"],[1,"container","my-5",2,"min-height","100vh"],[4,"ngIf"],["class","row",4,"ngIf"],["header","search_result"],[1,"row"],["class","col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],["class","text-secondary fw-bold text-center",4,"ngIf"],[1,"col-md-4","col-lg-3","mb-4"],[1,"clup-cart","glopal-cart","position-relative"],[1,"imgPart"],["alt","join",3,"src"],[1,"detasils","px-3","py-4"],[1,"text-center","clup-card",2,"font-weight","400","padding","10px 0","margin","0"],[3,"routerLink"],[1,"d-block"],[1,"text-secondary","fw-bold","text-center"]],template:function(t,o){1&t&&(e.YNc(0,R,1,0,"app-shared-header",0),e.TgZ(1,"section",1),e.YNc(2,y,1,0,"app-laoding",2),e.YNc(3,C,3,2,"div",3),e.qZA()),2&t&&(e.Q6J("ngIf",!o.loading),e.xp6(2),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading))},directives:[c.O5,v.Q,m.X,c.sg,s.yS],pipes:[S.X$],styles:[""]}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),n})();var Z=a(4466);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,I,Z.m]]}),n})()}}]);