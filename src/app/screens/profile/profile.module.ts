import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { ChangePasswodComponent } from './components/change-passwod/change-passwod.component';


@NgModule({
  declarations: [
    ProfileLayoutComponent,
    ProfileDataComponent,
    ProfileSidebarComponent,
    MyAddressesComponent,
    ChangePasswodComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
