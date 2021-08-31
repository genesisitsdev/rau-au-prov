import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SubCategoriaPageRoutingModule } from './subcategoria-routing.module';

import { SubCategoriaPage } from './subcategoria.page';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SubCategoriaPageRoutingModule,
    NavBarComponentModule
  ],
  declarations: [SubCategoriaPage]
})

export class SubCategoriaPageModule {}
