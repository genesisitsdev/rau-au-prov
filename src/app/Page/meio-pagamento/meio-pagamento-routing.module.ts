import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeioPagamentoPage } from './meio-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: MeioPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeioPagamentoPageRoutingModule {}
