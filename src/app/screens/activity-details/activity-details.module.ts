import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDetailsRoutingModule } from './activity-details-routing.module';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookNowComponent } from './components/book-now/book-now.component';
import { MembersModule } from '../members/members.module';


@NgModule({
  declarations: [
    ActivityDetailsComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    ActivityDetailsRoutingModule,
    SharedModule ,
    MembersModule
  ] 
})
export class ActivityDetailsModule { }
