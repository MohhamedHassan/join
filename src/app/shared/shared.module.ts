import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ToastrModule } from 'ngx-toastr';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { TofixednumberPipe } from '../pips/tofixednumber.pipe';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    CategoriesListComponent,
    CartOneComponent,
    SharedHeaderComponent,
    ClupCardComponent,
    LaodingComponent,
    PhoneNumberComponent,
    TofixednumberPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccordionModule.forRoot() ,
    RouterModule,
    SwiperModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
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
    FormsModule,
    NgxIntlTelInputModule,
    ToastrModule,
    PhoneNumberComponent,
    TofixednumberPipe,
    AccordionModule,
    BsDatepickerModule
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}