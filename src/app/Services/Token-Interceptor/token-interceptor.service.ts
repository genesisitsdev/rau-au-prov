import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from './../Auth/auth.service';
import { Observable } from 'rxjs';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.urlBase.split('/');
    const token = localStorage.getItem('token');

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }

}
