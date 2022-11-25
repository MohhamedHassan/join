import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CartOneComponent } from './components/cart-one/cart-one.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ClupCardComponent } from './components/clup-card/clup-card.component';
import { LaodingComponent } from './components/laoding/laoding.component';
import { NgxStarRatingModule } from 'ngx-star-rating'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CategoriesListComponent,
    CartOneComponent,
    SharedHeaderComponent,
    ClupCardComponent,
    LaodingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SwiperModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  exports:[
    SwiperModule,
    SharedHeaderComponent,
    CategoriesListComponent,
    TranslateModule,
    CartOneComponent,
    ClupCardComponent,
    HttpClientModule,
    LaodingComponent,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}