import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.scss']
})
export class CartOneComponent implements OnInit {
  @Input() imgSrc:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
