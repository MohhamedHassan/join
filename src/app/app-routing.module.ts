import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:() => import('src/app/screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:() => import('src/app/screens/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'store',
    loadChildren:() => import('src/app/screens/store/store.module').then(m => m.StoreModule)
  },
  {
    path:'details',
    loadChildren:() => import('src/app/screens/details-page/details-page.module').then(m => m.DetailsPageModule)
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
