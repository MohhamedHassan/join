import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritRoutingModule } from './favorit-routing.module';
import { FavoriteParentComponent } from './components/favorite-parent/favorite-parent.component';
import { FavoriteClupsComponent } from './components/favorite-clups/favorite-clups.component';
import { FavoriteActivitiesComponent } from './components/favorite-activities/favorite-activities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FavoriteParentComponent,
    FavoriteClupsComponent,
    FavoriteActivitiesComponent
  ],
  imports: [
    CommonModule,
    FavoritRoutingModule,
    SharedModule
  ]
})
export class FavoritModule { }
