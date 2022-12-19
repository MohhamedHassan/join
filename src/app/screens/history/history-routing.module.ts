import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHistoryComponent } from './components/all-history/all-history.component';

const routes: Routes = [
  {
    path:'',
    component:AllHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
