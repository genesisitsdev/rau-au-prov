import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPageRoutingModule } from './produto-routing.module';

import { ProdutoPage } from './produto.page';
import { ProdutoComponent } from '../../Components/produto/produto.component'
import { ProdutoDetalheComponent } from 'src/app/Components/produto-detalhe/produto.detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule
  ],
  declarations: [
    ProdutoPage,
    ProdutoComponent,
    ProdutoDetalheComponent
  ],
  exports: [
    ProdutoComponent,
    ProdutoDetalheComponent
  ]
})
export class ProdutoPageModule {}
