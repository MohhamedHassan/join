import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

const routes: Routes = [
  {
    path:'',
    component:AllMembersComponent
  },
  {
    path:'details/:id',
    component:MemberDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
