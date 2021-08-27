import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';



@Injectable({
  providedIn: 'root'
})
export class GeolocalizacaoService {

  public minhaPosicao;

  constructor(private http:HttpClient,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,) { }

  buscarPosicao(){

    return this.geolocation.getCurrentPosition();
    // .then((resp) => {
    //   // resp.coords.latitude;
    //   // resp.coords.longitude;

    //   // this.minhaPosicao = {
    //   //                       lat: resp.coords.latitude,
    //   //                       long: resp.coords.longitude
    //   //                     };
    //   // alert(this.lat +' / ' + this.long);
    //   // this.irParaMinhaPosicaao();
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

    }

    geoCode(lat, long, options) {
      return this.nativeGeocoder.reverseGeocode(lat, long, options);
    }

    locationTolllbarHome(id) {
      // console.log('id Usuario => ', id);
      return this.http.get(`${environment.urlBase}/auth/endereco/${id}`);
    }

}
