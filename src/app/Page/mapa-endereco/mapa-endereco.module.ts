import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { MapaEnderecoPageRoutingModule } from './mapa-endereco-routing.module';

import { GeolocalizacaoService } from './../../Services/Geolocalizacao/geolocalizacao.service';
import { MapaEnderecoPage } from './mapa-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEnderecoPageRoutingModule
  ],
  declarations: [MapaEnderecoPage],
  providers: [
    Geolocation,
    NativeGeocoder,
    GeolocalizacaoService
  ]
})
export class MapaEnderecoPageModule {}
