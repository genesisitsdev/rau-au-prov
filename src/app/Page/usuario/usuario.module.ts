import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';
// import { NgxMaskModule } from 'ngx-mask';

import { UsuarioPage } from './usuario.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    BrMaskerModule
    // NgxMaskModule.forChild(),
  ],
  exports:[UsuarioPage],
  declarations: [UsuarioPage]
})
export class UsuarioPageModule {}
