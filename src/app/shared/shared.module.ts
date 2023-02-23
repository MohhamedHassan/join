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
import { StringToNumberPipe } from '../pips/string-to-number.pipe';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxStarsModule } from 'ngx-stars';
import { GoogleMapsModule } from '@angular/google-maps';
import { ImgsDirective } from './directives/imgs.directive'
import { CalendarModule } from 'primeng/calendar';
import { ShareComponent } from './components/share/share.component';
import { MemberDefaultImgDirective } from './directives/member-default-img.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MapComponent } from './components/map/map.component';
import { ReplaceCommaPipe } from './pips/replace-comma.pipe';
@NgModule({
  declarations: [
    CategoriesListComponent,
    CartOneComponent,
    SharedHeaderComponent,
    ClupCardComponent,
    LaodingComponent,
    PhoneNumberComponent,
    TofixednumberPipe,
    StringToNumberPipe,
    ImgsDirective,
    ShareComponent,
    MemberDefaultImgDirective,
    MapComponent,
    ReplaceCommaPipe
  ],
  imports: [
    BsDropdownModule,
    GoogleMapsModule,
    NgxStarsModule,
    CommonModule,
    HttpClientModule,
    RatingModule.forRoot(),
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
    }),
    CalendarModule
  ],
  exports:[
    BsDropdownModule,
    CalendarModule,
    GoogleMapsModule,
    NgxStarsModule,
    RatingModule,
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
    BsDatepickerModule,
    StringToNumberPipe,
    ImgsDirective,
    ShareComponent,
    MemberDefaultImgDirective,
    MapComponent,
    ReplaceCommaPipe
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}