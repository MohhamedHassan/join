import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  cartitems:any[]=[]
  total=0
  shipingCharge=0
  promocode=''
  constructor(
    private cartService:CartService,
    private router:Router,
  ) { }

  ngOnInit(): void {
        let cart = localStorage.getItem('joincart')
        let cart2 
    if(cart)  {
      cart2=JSON.parse(cart)
    }
    if(cart2?.length) {
      this.cartitems = this.cartitems.filter(i => i.invoice_id)
    }
    if(this.cartitems?.length) {
      this.cartService.get_details(this.cartitems[0]?.invoice_id).subscribe(
        (res:any) =>  {
          console.log(res)
          if(res?.status=='Pending') {
            this.router.navigate(['/'])
          } else if(res?.status=='Paid') {
            
          }
        }
      )
    }
    console.log(this.cartitems)
  }

}
