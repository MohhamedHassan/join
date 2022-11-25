import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = request.clone({
      setHeaders: {
        'auth-token': `${localStorage.getItem('joinToken')}`,
        'Lang':localStorage.getItem('lang')||'en'
      }
    })
    return next.handle(token)
  }
}
