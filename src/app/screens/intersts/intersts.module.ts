import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterstsRoutingModule } from './intersts-routing.module';
import { InterstsComponent } from './components/intersts/intersts.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InterstsComponent
  ],
  imports: [
    CommonModule,
    InterstsRoutingModule,
    SharedModule
  ]
})
export class InterstsModule { }
