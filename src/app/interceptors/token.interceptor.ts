import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token 
    if (request?.url.includes('myfatoorah')) {
       token = request.clone({
        setHeaders: {
          'Authorization':'Bearer  DRjVRnni2MCYQJy44lbbSZ3w9ITefFLwm38jtmerLYY8FZFIo_dWERd7pjKrKpXN_oRZzK9A-SByEBDACYqQeEr90JE_pEY0FjdxtuXnCFPKD9ljbXukGsAbV3zt-Uk924y8wb7vp_kbh-djTA-pK1fKOUi-SxO4TX1dYyhAIUCSUTeW2boCSPdaesHNj6IEWGEqSQsgM2SHpHn0sqyjACRfzjkS34cKvcaLXFWfCmSmn8PoeU5y3UkHrjgT2DTlOqc12kpn2Kxbk6xKE3j0LI19iCG4EEbLVoPBeaiocCO9t0FSTen012i2QM8NoJNY4oUMdVqTZxJkGBREJegjv0ni1WYenfNbLJtMMWnsnLQpa7gMoH9bGAz19Ndjc0fPSOJBe6PNmiHeVf7HCBXh2IuX5doJ_BUW72CWS5QPwL8GEucgyj75djeOEjDkSYaNtgNmoef6OveMvb9hE0CeAhctVrHj1n_bts6fs9ZcwRFEbiH0Kh6iZK8saLtB5pLGvEayz_W0IXr5ZVXc8uDiu2XawD-Dvylb-7iv5Eoap6o42hmJm4R9sHLYg1kl1lgoSyE1gWia42ZOMN3EkvqFak160fZoWqSnKjbgOZNTRMiakRsyHS2NgGduuVbXNqFLWHRVwbYe9gKdpjEhg6MCMYHxcfwUQL0e1bQMBxyR7xgI68ff',

        }
      })
    } else {
       token = request.clone({
        setHeaders: {
          'auth-token': `${localStorage.getItem('joinToken')}`,
          'Lang':localStorage.getItem('lang')||'en'
        }
      })
    }
    return next.handle(token)
  }
}
