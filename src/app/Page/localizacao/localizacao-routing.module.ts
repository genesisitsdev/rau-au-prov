import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizacaoPage } from './localizacao.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizacaoPage
  },
  {
    path: 'localizacao',
    loadChildren: () => import('../../Page/localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizacaoPageRoutingModule {}
