import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterstsComponent } from './components/intersts/intersts.component';

const routes: Routes = [
  {
    path:'',
    component:InterstsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterstsRoutingModule { }
