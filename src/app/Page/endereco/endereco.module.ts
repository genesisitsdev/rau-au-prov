import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { BrMaskerModule } from 'br-mask';

import { EnderecoPageRoutingModule } from './endereco-routing.module';

import { GeolocalizacaoService } from './../../Services/Geolocalizacao/geolocalizacao.service';
import { EnderecoPage } from './endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnderecoPageRoutingModule,
    BrMaskerModule
  ],
  exports:[EnderecoPage],
  declarations: [EnderecoPage],
  providers: [
    Geolocation,
    GeolocalizacaoService
  ]
})
export class EnderecoPageModule {}
