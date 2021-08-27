import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoEnderecoPageRoutingModule } from './geo-endereco-routing.module';

import { GeoEnderecoPage } from './geo-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoEnderecoPageRoutingModule
  ],
  declarations: [GeoEnderecoPage]
})
export class GeoEnderecoPageModule {}
