import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrosPetzPage } from './outros-petz.page';

const routes: Routes = [
  {
    path: '',
    component: OutrosPetzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrosPetzPageRoutingModule {}
