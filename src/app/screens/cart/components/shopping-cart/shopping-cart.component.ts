import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartitems:any[]=[]
  showDeleteCArtitem=-1
  constructor(private router:Router) { }

  ngOnInit(): void {
    let cart = localStorage.getItem('joincart')
    if(cart)  {
      this.cartitems=JSON.parse(cart)
    }
    console.log(this.cartitems)
  }
  deleteCartItem() {
    this.cartitems.splice(this.showDeleteCArtitem,1)
    localStorage.setItem('joincart',JSON.stringify(this.cartitems))
    this.showDeleteCArtitem=-1
  }
  routeToDetailsPage(item:any) {
    if(item?.cstmtype==2) {
        this.router.navigate([`/product/${item?.id}`])
    } else if (item?.cstmtype==1)  {
      this.router.navigate([`/activity/${item?.id}`])
    }
  }
  plusone(index:any) {
    if(this.cartitems[index]?.countToBuy<this.cartitems[index]?.qty) {
      this.cartitems[index].countToBuy+=1
      localStorage.setItem('joincart',JSON.stringify(this.cartitems))
    }
  }
  minusone(index:any) {
    if(this.cartitems[index]?.countToBuy==1) {
      this.showDeleteCArtitem=index
    } else  {
      if(this.cartitems[index]?.countToBuy>0) {
        this.cartitems[index].countToBuy-=1
        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
      } 
    }

  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
