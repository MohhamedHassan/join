import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent implements OnInit {
  @Input() imgSrc:string=''
  @Input() id:string=''
  @Input() price:string=''
  @Input() pre_price:string=''
  @Input() name_ar:string=''
  @Input() name_en:string=''
  constructor() { }

  ngOnInit(): void {
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
