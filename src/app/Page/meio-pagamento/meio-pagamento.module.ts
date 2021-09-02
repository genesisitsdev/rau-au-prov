import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeioPagamentoPageRoutingModule } from './meio-pagamento-routing.module';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { ProdutoResumoModule } from 'src/app/Components/produto-resumo/produto.resumo.module';
import { CarrinhoResumoModule } from 'src/app/Components/carrinho-resumo/carrinho.resumo.module';

import { MeioPagamentoPage } from './meio-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeioPagamentoPageRoutingModule,
    NavBarComponentModule,
    ProdutoResumoModule,
    CarrinhoResumoModule
  ],
  declarations: [MeioPagamentoPage]
})
export class MeioPagamentoPageModule {}
