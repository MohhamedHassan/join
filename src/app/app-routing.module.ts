import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NotUserGuard } from './guards/not-user.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('src/app/screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    canActivate:[UserGuard],
    loadChildren:() => import('src/app/screens/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'store',
    loadChildren:() => import('src/app/screens/store/store.module').then(m => m.StoreModule)
  },
  {
    path:'activities',
    loadChildren:() => import('src/app/screens/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {
    path:'activity/:id',
    loadChildren:() => import('src/app/screens/activity-details/activity-details.module').then(m => m.ActivityDetailsModule)
  },
  {
    path:'interests/:id',
    loadChildren:() => import('src/app/screens/intersts/intersts.module').then(m => m.InterstsModule)
  },
  {
    path:'clup/:id',
    loadChildren:() => import('src/app/screens/clup-details/clup-details.module').then(m => m.ClupDetailsModule)
  },
  {
    path:'product/:id',
    loadChildren:() => import('src/app/screens/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path:'search/:str',
    loadChildren:() => import('src/app/screens/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path:'profile',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'favorite',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/favorit/favorit.module').then(m => m.FavoritModule)
  },
  {
    path:'history',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/history/history.module').then(m => m.HistoryModule)
  },
  {
    path:'members',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/members/members.module').then(m => m.MembersModule)
  },
  {
    path:'notifications',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path:'cart',
    loadChildren:() => import('src/app/screens/cart/cart.module').then(m => m.CartModule)
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
