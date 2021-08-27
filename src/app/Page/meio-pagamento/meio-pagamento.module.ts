import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeioPagamentoPageRoutingModule } from './meio-pagamento-routing.module';

import { MeioPagamentoPage } from './meio-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeioPagamentoPageRoutingModule
  ],
  declarations: [MeioPagamentoPage]
})
export class MeioPagamentoPageModule {}
