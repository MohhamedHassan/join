import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/cart'],{queryParams : {type:1}})
  }

}
