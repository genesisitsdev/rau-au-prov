import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CarrinhoPage } from './carrinho.page';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { ProdutoResumoModule } from 'src/app/Components/produto-resumo/produto.resumo.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    NavBarComponentModule,
    ProdutoResumoModule
  ],
  declarations: [
    CarrinhoPage,
  ],
  exports: [
    CarrinhoPage
  ]
})

export class CarrinhoPageModule {}
