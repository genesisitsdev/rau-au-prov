import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarrinhoResumoComponent } from "./carrinho.resumo.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CarrinhoResumoModule.rootCompoent],
  exports: [CarrinhoResumoModule.rootCompoent]
})

export class CarrinhoResumoModule {
  static rootCompoent = CarrinhoResumoComponent
}
