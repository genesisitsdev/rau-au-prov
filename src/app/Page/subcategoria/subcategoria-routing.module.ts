import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCategoriaPage } from './subcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: SubCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCategoriaPageRoutingModule {}
