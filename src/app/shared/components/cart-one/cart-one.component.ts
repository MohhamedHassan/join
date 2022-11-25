import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.scss']
})
export class CartOneComponent implements OnInit {
  @Input() imgSrc:string=''
  @Input() price:string=''
  @Input() title:string=''
  @Input() age_from:string=''
  @Input() age_to:string=''
  @Input() interests_name:string=''
  @Input() location_count:string=''
  @Input() detailsPageRoute:string=''
  constructor() { }
  get lang() {return localStorage.getItem('lang') || 'en'}
  ngOnInit(): void {
  }

}
