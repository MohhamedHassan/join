import { Component, OnInit } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerCart:any[]=[
    {
      h2:'Assured_Purchase',
      p:'Provide_genuine',
      img:'assets/images/car.53532650.svg',
      li:['100%_genuine_products','Deliver_items_at_door','Free_return_products']
    },
    {
      h2:'Easy_To_Buy_Return',
      p:'Single_click_buy_return_products',
      img:'assets/images/money.2faef535.svg',
      li:['Same_day_delivery_available','Click_to_return_products','Quick_support_links_available']
    },
    {
      h2:'Secure_Payments',
      p:'Accepts_all_credit_debit_cards',
      img:'assets/images/visa.daa9ad19.svg',
      li:['payment_security','Confirmation_authentity','Delivery_items_at_door']
    }
  ]
  hideFooter:boolean=false
  constructor(    private glopalService:GlopalService) { }

  ngOnInit(): void {
    this.footerCart.length=3
    this.glopalService.hideNavbarAndFooter.subscribe(
      res=> {
        this.hideFooter=res
      }
    )
  }
  islogin() {
    return !!localStorage.getItem('joinToken')
  }

}
