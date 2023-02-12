import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { StoreService } from 'src/app/screens/store/services/store.service';
import { GlopalService } from 'src/app/services/glopal.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  sliderContent
  openNavbar:boolean=false
  currentLang:string=''
  hidenave:boolean=false
  userName=''
  filterPopup=false
  userdata:any=null
  categories:any = []
  showpopUpFirstTime=true
  showPopup=false
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
pagetype=-1
  ngOnInit(): void {
    

    this. router.events.subscribe((val:any) => {
      // see also 
      if(val instanceof NavigationEnd)  {
        console.log(val)
        if(val?.url=='/activites') this.pagetype=2
        if(val?.url=='/store') this.pagetype=3
        if(val?.url!='/auth/login' && val?.url!='/auth/sginup' 
        && val?.url!='/payment_suuccess' 
        && val?.url!='/payment_failed' 
        && this.showpopUpFirstTime) {
          this.getsliderContent()
          this.showpopUpFirstTime=false
          
          console.log(this.showPopup,this.showpopUpFirstTime)
        }
      }
  });
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
      this.router.navigate([`/search/${value}/${this.pagetype}`])
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
  location.reload()
}
getsliderContent() {
  this.authService.getpopupbannerdata().subscribe(
    res =>  {
      this.showPopup=true
      this.sliderContent=res?.data
    }
  )
}
checkRouting(item):any {
  if(item?.type=='product') return `/product/${item?.id}`
  else if(item?.type=='activity') return `/activity/${item?.id}`
  else if(item?.type=='club') return `/clup/${item?.id}`
  else if(item?.type=='interest') return `/interests/${item?.id}`
}
}
