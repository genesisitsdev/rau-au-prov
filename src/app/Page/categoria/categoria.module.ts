import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoriaPageRoutingModule,
    NavBarComponentModule
  ],
  declarations: [CategoriaPage,],
  exports: [CategoriaPage]
})

export class CategoriaPageModule {}
