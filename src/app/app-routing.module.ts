import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutJoinComponent } from './components/about-join/about-join.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { TermsComponent } from './components/terms/terms.component';
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
    path:'search/:str/:page',
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
    loadChildren:() => import('src/app/screens/history/history.module').then(m => m.HistoryModule)
  },
  {
    path:'members',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/members/members.module').then(m => m.MembersModule)
  },
  {
    path:'contact',
    loadChildren:() => import('src/app/screens/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'notifications',
    canActivate:[NotUserGuard],
    loadChildren:() => import('src/app/screens/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path:'promotion',
    loadChildren:() => import('src/app/screens/promotions/promotions.module').then(m => m.PromotionsModule)
  },
  {
    path:'cart',
    loadChildren:() => import('src/app/screens/cart/cart.module').then(m => m.CartModule)
  },
  {
    path:'about',
    component:AboutJoinComponent
  },
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'payment_suuccess',
    component:PaymentSuccessComponent
  },
  {
    path:'payment_failed',
    component:PaymentFailedComponent
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
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
