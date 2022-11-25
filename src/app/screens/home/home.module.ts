import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderOneComponent } from './components/slider-one/slider-one.component';
import { SliderTwoComponent } from './components/slider-two/slider-two.component';
import { HomeInterstsComponent } from './components/home-intersts/home-intersts.component';
import { HomeClupsComponent } from './components/home-clups/home-clups.component';
import { HomeActivitiesComponent } from './components/home-activities/home-activities.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderOneComponent,
    SliderTwoComponent,
    HomeInterstsComponent,
    HomeClupsComponent,
    HomeActivitiesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
