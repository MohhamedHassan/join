import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ReusableFooterCartComponent } from './components/reusable-footer-cart/reusable-footer-cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ReusableFooterCartComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
    // ,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:ErrorInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}