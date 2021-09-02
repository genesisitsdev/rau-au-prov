import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import { NavBarComponent } from '../../core/component/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoriaPageRoutingModule,
  ],
  declarations: [CategoriaPage, NavBarComponent],
  exports: [NavBarComponent]
})

export class CategoriaPageModule {}
