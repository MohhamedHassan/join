import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClupDetailsComponent } from './components/clup-details/clup-details.component';

const routes: Routes = [
  {
    path:'',
    component:ClupDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClupDetailsRoutingModule { }
