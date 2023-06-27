import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  sharePopup=false
  links = [
    {
      icon:'fa-brands fa-whatsapp',
      text:'contactus',
      link:'https://api.whatsapp.com/send/?phone=96592294872&text&type=phone_number&app_absent=0'
    },
    {
      icon:'fa-brands fa-instagram',
      text:'@JoinKW',
      link:'https://www.instagram.com/join.kw/'
    },
    {
      icon:'fa-brands fa-apple',
      text:'App Store',
      link:'https://apps.apple.com/eg/app/join-%D8%AC%D9%88%D9%8A%D9%86/id1464036538'
    },
    {
      icon:'fa-brands fa-google-play',
      text:'Google Play',
      link:'https://play.google.com/store/apps/details?id=com.joinkw'
    }
  ]
  constructor() { }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
  ngOnInit(): void {
   
  }

}
