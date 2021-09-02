import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StarRatingModule } from '../star-rating/star.rating.module';
import { ProdutoDetalheComponent } from './produto.detalhe.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StarRatingModule,
  ],
  declarations: [
    ProdutoDetalheModule.rootComponent,
  ],
  exports: [
    ProdutoDetalheModule.rootComponent,
  ]
})
export class ProdutoDetalheModule {
  static rootComponent = ProdutoDetalheComponent
}
