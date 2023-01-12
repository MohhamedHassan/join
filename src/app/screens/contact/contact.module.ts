import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
