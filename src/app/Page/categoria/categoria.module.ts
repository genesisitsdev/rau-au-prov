import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoriaPageRoutingModule,
    CoreModule
  ],
  declarations: [CategoriaPage]
})

export class CategoriaPageModule {}
