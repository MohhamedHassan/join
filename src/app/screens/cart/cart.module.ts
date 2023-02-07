import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartBookNowComponent } from './components/cart-book-now/cart-book-now.component';
import { MembersModule } from '../members/members.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartBookNowComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MembersModule
  ]
})
export class CartModule { }
