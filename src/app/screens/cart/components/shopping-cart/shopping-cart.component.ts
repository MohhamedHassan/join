import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartitems:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.cartitems.length=6
  }

}
