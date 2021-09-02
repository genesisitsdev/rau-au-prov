import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoRoutingModule } from './pedido-routing.module';

import { PedidoComponent } from './pedido.component';

@NgModule({
  declarations: [
    PedidoModule.rootComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ],
  exports: [
    PedidoModule.rootComponent
  ]
})
export class PedidoModule {
  static rootComponent = PedidoComponent
}
