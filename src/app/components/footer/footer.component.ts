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
      p:'100%_genuine_products',
      img:'assets/images/car.53532650.svg',
      li:['Deliver_items_at_door','Same_or_next_day_delivery']
    },
    {
      h2:'Easy_To_Buy_Return',
      p:'Quick_support_links_available',
      img:'assets/images/money.2faef535.svg',
      li:['Easy_To_Buy_Return','Free_return_products']
    },
    {
      h2:'Secure_Payments',
      p:'Accepts_all_credit_debit_cards',
      img:'assets/images/visa.daa9ad19.svg',
      li:['Accepts_all_credit_debit_cards','payment_security']
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
