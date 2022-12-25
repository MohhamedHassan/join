import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-footer-cart',
  templateUrl: './reusable-footer-cart.component.html',
  styleUrls: ['./reusable-footer-cart.component.scss']
})
export class ReusableFooterCartComponent implements OnInit {
  @Input() h2:string=''
  @Input() p:string=''
  @Input() src:string=''
  @Input() li!:string[]
  constructor() { }

  ngOnInit(): void {
  }

}
