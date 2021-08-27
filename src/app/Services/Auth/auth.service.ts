import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/Page/login/interfaces/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  retornoToken: any;
  user: any;

  constructor(private http: HttpClient,
    private router: Router,
    private navCtrl: NavController
  ) {


  }


  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: any): Observable<boolean> {
    // console.log(credentials);
    return this.http.post<any>(`${environment.urlBase}/auth/login`, credentials)
      .pipe(
        tap(data => {
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          console.log('token: ' + data.access_token);
        })
      )

  }

  getJwtToken() {

    return localStorage.getItem('token');

  }

  refreshAccessToken() {
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = localStorage.getItem('token');

    return this.http.post(`${environment.urlBase}/auth/refresh`, token);
    // .toPromise()
    // .then(resp => {
    //     this.retornoToken = resp;
    //     console.log(resp);
    //     if (token) {
    //         localStorage.setItem('token', JSON.stringify(resp));
    //       }
    //       return token;

        // .pipe(
        //   tap(data => {
        //     // localStorage.setItem('token', data.data.access_token);
        //     console.log('token: ' + data);
        //   })
        // );
      //  });
  }


  logout(): void {
    this.http.get(`${environment.urlBase}/auth/logout`).subscribe(resp => {
      console.log(resp);
      localStorage.removeItem('token');
      this.navCtrl.navigateRoot('login');
    });
  }

  getUser(): User {
    // if(localStorage.getItem('user')) {
    //   this.user =  JSON.parse(atob(localStorage.getItem('user')));
    //   console.log('Dados do usuário: ', this.user);
    // }
    // return this.user;
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  loginCheck() {
    this.user = this.getUser();
    // if(this)
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.urlBase}/auth/me`).toPromise()
      .then(data => {
        if (data.user) {
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }


  // getRefreshToken() {
  //   // return localStorage.getItem('x-refresh-token');
  //   return this.http.post<any>(`${environment.urlBase}/auth/refresh`, {})
  // }
  // getAccessToken() {
  //   return localStorage.getItem('x-access-token');
  // }


  // getUserId() {
  //   return localStorage.getItem('user-id');
  // }

  // setAccessToken(accessToken: string) {
  //   localStorage.setItem('x-access-token', accessToken)
  // }

  // private setSession(userId: string, accessToken: string, refreshToken: string) {
  //   localStorage.setItem('user-id', userId);
  //   localStorage.setItem('x-access-token', accessToken);
  //   localStorage.setItem('x-refresh-token', refreshToken);
  // }

  // private removeSession() {
  //   localStorage.removeItem('user-id');
  //   localStorage.removeItem('x-access-token');
  //   localStorage.removeItem('x-refresh-token');
  // }


  }

