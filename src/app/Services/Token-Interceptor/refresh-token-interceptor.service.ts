import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthService } from './../Auth/auth.service';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { catchError, delay, finalize, map, retryWhen, switchMap, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptorService implements HttpInterceptor{

  constructor(
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController) { }


    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      this.loadingCtrl.getTop().then((hasLoading) => {
        if (!hasLoading) {
          this.loadingCtrl.create({
            spinner: 'circular',
            translucent: true,
          }).then(loading => loading.present());

        }
      });

      return next.handle(request).pipe(
      // eslint-disable-next-line arrow-body-style
      catchError(err => {
        if(err instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>err).status) {
            case 401:
              return this.handle401Error(request, next);
            default:
              return throwError(err);

            //  case
          }
        } else {
          return throwError(err);
        }
      }),
      retryWhen(err => {
        let retries = 1;
        return err.pipe(
          delay(1000),
          tap(() => {
            this.presentToast(retries);
          }),
          map(error => {
            if (retries++ === 3){
              console.log(error.error);
              // this.loadingCtrl.dismiss();
              if(retries === 3) {
                localStorage.removeItem('token');
                this.navCtrl.navigateRoot('login');
              }
              throw error;
            }
            return error;
          })
        )
      }),
      catchError(err => {
        console.log('error:', err);
        this.presentAlert(err.error.error);
        return EMPTY;
      }),

      finalize(() => {
        this.loadingCtrl.getTop().then((hasLoading) => {
          if (hasLoading) {
            this.loadingCtrl.dismiss();
          }
        });

      })

      );
    }

    async presentToast(rettryCount) {
      const toast = await this.toastCtrl.create({
        message: `Retry: ${rettryCount}/3`,
        duration: 1000,
      });
      toast.present();
    }

    async presentAlert(msg) {
      const alert = await this.alertCtrl.create({
        header: 'Oops',
        message: msg,
        buttons: ['OK']
      });

      await alert.present();
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      console.log('Deve dar o Refresh do Acsse_Token');
      return this.auth.refreshAccessToken().pipe(
        switchMap(res => {
          console.log('No SwitcMap: ', res)
          //store the token

          const token = res['access_token'];
          localStorage.setItem('token', token);
          request = request.clone({
            setHeaders: {
              'Authorization': `Bearer ${token}
            }
          });
          return next.handle(request);
        })
      )

    }
}
