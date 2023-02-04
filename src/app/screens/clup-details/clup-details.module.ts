import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClupDetailsRoutingModule } from './clup-details-routing.module';
import { ClupDetailsComponent } from './components/clup-details/clup-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClupDetailsGallreyComponent } from './components/clup-details-gallrey/clup-details-gallrey.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ClupActivitiesSliderComponent } from './components/clup-activities-slider/clup-activities-slider.component';
import { ClupStoreComponent } from './components/clup-store/clup-store.component';
import { StoreModule } from '../store/store.module';


@NgModule({
  declarations: [
    ClupDetailsComponent,
    ClupDetailsGallreyComponent,
    ReviewsComponent,
    ClupActivitiesSliderComponent,
    ClupStoreComponent
  ],
  imports: [
    CommonModule,
    ClupDetailsRoutingModule,
    SharedModule,
    StoreModule
  ]
})
export class ClupDetailsModule { }
