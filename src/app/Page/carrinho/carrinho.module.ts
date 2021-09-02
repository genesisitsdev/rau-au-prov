import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';
import { CarrinhoPage } from './carrinho.page';
import { NavBarComponent } from '../../core/component/nav-bar/nav-bar.component';
import { ProdutoDetalheComponent } from 'src/app/Components/produto-detalhe/produto.detalhe.component';
import { StarRatingComponent } from 'src/app/Components/star-rating/star.rating.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CarrinhoPageRoutingModule,
  ],
  declarations: [
    CarrinhoPage,
    NavBarComponent,
    ProdutoDetalheComponent,
    StarRatingComponent
  ],
  exports: [
    NavBarComponent,
    ProdutoDetalheComponent,
    StarRatingComponent
  ]
})

export class CarrinhoPageModule {}
