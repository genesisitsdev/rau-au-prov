import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PedidoRoutingModule } from './pedido-routing.module';

import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { ProdutoResumoModule } from 'src/app/Components/produto-resumo/produto.resumo.module';
import { PedidoComponent } from './pedido.component';

@NgModule({
  declarations: [
    PedidoModule.rootComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PedidoRoutingModule,
    NavBarComponentModule,
    ProdutoResumoModule
  ],
  exports: [
    PedidoModule.rootComponent
  ]
})
export class PedidoModule {
  static rootComponent = PedidoComponent
}
