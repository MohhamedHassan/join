import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHistoryComponent } from './components/all-history/all-history.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';

const routes: Routes = [
  {
    path:'',
    component:AllHistoryComponent
  },
  {
    path:'order_details/:id',
    component:HistoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
