import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CarrinhoPage } from './carrinho.page';
import { NavBarComponent } from '../../core/component/nav-bar/nav-bar.component';
import { ProdutoResumoComponent } from 'src/app/Components/produto-resumo/produto.resumo.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CarrinhoPageRoutingModule,
  ],
  declarations: [
    CarrinhoPage,
    NavBarComponent,
    ProdutoResumoComponent
  ],
  exports: [
    NavBarComponent,
    ProdutoResumoComponent
  ]
})

export class CarrinhoPageModule {}
