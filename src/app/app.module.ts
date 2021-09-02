import { HttpRequest } from '@angular/common/http';
import { SplashScreenPageModule } from './Page/splash-screen/splash-screen.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
// import { NgxMaskModule } from 'ngx-mask';

import { AuthService } from './Services/Auth/auth.service';
import { TokenInterceptorService } from './Services/Token-Interceptor/token-interceptor.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            SplashScreenPageModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule
            // NgxMaskModule.forRoot({
            //   dropSpecialCharacters: true
            // }),
          ],
  providers: [
                Geolocation,
                NativeGeocoder,
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: HTTP_INTERCEPTORS , useClass: TokenInterceptorService, multi: true},
              AuthService,
              TokenInterceptorService,
              SQLite,
              SQLitePorter
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
