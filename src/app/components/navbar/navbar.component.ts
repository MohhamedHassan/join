import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  openNavbar:boolean=false
  currentLang:string=''
  hidenave:boolean=false
  constructor(
    private glopalService:GlopalService,
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
    this.glopalService.hideNavbarAndFooter.subscribe(
      res=> {
        this.hidenave=res
      }
    )
  }

}
