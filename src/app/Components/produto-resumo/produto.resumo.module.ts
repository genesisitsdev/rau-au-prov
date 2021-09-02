import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProdutoResumoComponent } from './produto.resumo.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ProdutoResumoModule.rootComponent,
  ],
  exports: [
    ProdutoResumoModule.rootComponent,
  ]
})
export class ProdutoResumoModule {
  static rootComponent = ProdutoResumoComponent
}
