import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { StoreService } from 'src/app/screens/store/services/store.service';
import { GlopalService } from 'src/app/services/glopal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  openNavbar:boolean=false
  currentLang:string=''
  hidenave:boolean=false
  userName=''
  filterPopup=false
  userdata:any=null
  categories:any = []
  constructor(
    private authService:AuthService,
    private storeSerive:StoreService,
    private glopalService:GlopalService,
    private router:Router,
    public  translateService:TranslateService){
    this.currentLang=localStorage.getItem('lang') || 'en'
    this.translateService.use(this.currentLang)
    if(this.currentLang=='ar') {
      document.body.classList.add("custom-rtl")
    }
    else  {
      document.body.classList.remove("custom-rtl")
    }
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  selectLang(lang:string) {
    location.reload()
    this.translateService.use(lang)
    if(lang=='ar') {
     document.body.classList.add("custom-rtl")
    }
    else  {
     document.body.classList.remove("custom-rtl")
    }
   localStorage.setItem('lang',lang)
 
  }
  get  lang() {
   return localStorage.getItem('lang') || 'en'
 }

  ngOnInit(): void {
    this.storeSerive.getStoreTabs().subscribe( 
      value => this.categories = value?.payload?.data
    )
    if(!!localStorage.getItem('joinToken')) {
      this.userName.toUpperCase()
     // this.authService.getUserProfile()

    }
    this.authService.userProfile.subscribe((res:any)=>{
      if(res) {
        let fn = ''
        let ln = ''
        if(res?.fname) fn = res?.fname.slice(0,1)
        if(res?.lname) ln = res?.lname.slice(0,1)
        this.userName = `${fn}${ln}`
        this.userdata=res
      }
    })

    this.glopalService.hideNavbarAndFooter.subscribe(
      res=> {
        this.hidenave=res
      }
    )
  }
  inputSearch(value:string) {
    if(value.trim().length>0) {
      this.router.navigate([`/search/${value}`])
    }
  }
get cartitemsCount() {
  let cart:any = localStorage.getItem('joincart')
  if(cart)  {
      cart=JSON.parse(cart)
  } else {
    cart = []
  }
  return cart?.length
}
logout() {
  localStorage.removeItem('joincart')
  localStorage.removeItem('joinToken')
  this.router.navigate(['/'])
}
}
