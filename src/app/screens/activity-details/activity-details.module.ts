import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDetailsRoutingModule } from './activity-details-routing.module';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActivityDetailsComponent
  ],
  imports: [
    CommonModule,
    ActivityDetailsRoutingModule,
    SharedModule 
  ] 
})
export class ActivityDetailsModule { }
