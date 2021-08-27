import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaEnderecoPage } from './mapa-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: MapaEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaEnderecoPageRoutingModule {}
