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
@NgModule({
  declarations: [
    CategoriesListComponent,
    CartOneComponent,
    SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SwiperModule,
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
    CartOneComponent
  ]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}