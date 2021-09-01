import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CarrinhoPage } from './carrinho.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    NavBarComponentModule
  ],
  declarations: [CarrinhoPage]
})

export class CarrinhoPageModule {}
