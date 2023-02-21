import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { AllHistoryComponent } from './components/all-history/all-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { SubmitRateComponent } from './components/submit-rate/submit-rate.component';


@NgModule({
  declarations: [
    AllHistoryComponent,
    HistoryDetailsComponent,
    SubmitRateComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
