import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoEnderecoPage } from './geo-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: GeoEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoEnderecoPageRoutingModule {}
