import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { StoreModule } from '../store/store.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    RelatedProductsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule,
    StoreModule
  ]
})
export class ProductDetailsModule { }
