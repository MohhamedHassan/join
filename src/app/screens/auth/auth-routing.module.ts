import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { SiginupComponent } from './components/siginup/siginup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {
    path:"",
    component:AuthParentComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"signup",
        component:SiginupComponent
      },
      {
        path:"forget_password",
        component:ForgetPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
