import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
// import { LoginComponent } from './components/login/login.component';
// import { SiginupComponent } from './components/siginup/siginup.component';
// import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';



@NgModule({
  declarations: [
    // LoginComponent,
    // SiginupComponent,
    // AuthParentComponent,
    // ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
