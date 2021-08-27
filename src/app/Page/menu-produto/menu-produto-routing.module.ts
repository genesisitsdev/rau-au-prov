import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProdutoPage } from './menu-produto.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProdutoPageRoutingModule {}
