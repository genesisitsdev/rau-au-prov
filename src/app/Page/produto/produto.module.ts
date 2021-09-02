import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProdutoPageRoutingModule } from './produto-routing.module';
import { ProdutoDetalheModule } from 'src/app/Components/produto-detalhe/produto.detalhe.module';
import { ProdutoModule } from 'src/app/Components/produto/produto.module';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { ProdutoPage } from './produto.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProdutoPageRoutingModule,
    ProdutoDetalheModule,
    ProdutoModule,
    NavBarComponentModule
  ],
  declarations: [
    ProdutoPage,
  ],
  exports: [ProdutoPage]
})
export class ProdutoPageModule {}
