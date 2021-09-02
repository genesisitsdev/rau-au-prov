import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProdutoComponent } from './produto.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ProdutoModule.rootComponent
  ],
  exports: [
    ProdutoModule.rootComponent
  ]
})
export class ProdutoModule {
  static rootComponent = ProdutoComponent
}
