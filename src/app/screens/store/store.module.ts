import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store/store.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreCardComponent } from './components/store-card/store-card.component';


@NgModule({
  declarations: [
    StoreComponent,
    StoreCardComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
