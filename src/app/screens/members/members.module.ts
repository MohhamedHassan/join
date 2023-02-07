import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { AddMembersComponent } from './components/add-members/add-members.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    AllMembersComponent,
    AddMembersComponent,
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SharedModule
  ],
  exports: [
    AddMembersComponent
  ]
})
export class MembersModule { }
