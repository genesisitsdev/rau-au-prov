import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProdutoPageRoutingModule } from './menu-produto-routing.module';

import { MenuProdutoPage } from './menu-produto.page';
import { ProdutoComponent } from "../../Components/produto/produto.component"
import { BanerComponent } from "../../Components/banner/banner.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProdutoPageRoutingModule
  ],
  declarations: [
    MenuProdutoPage,
    ProdutoComponent,
    BanerComponent],
  exports: [
    ProdutoComponent,
    BanerComponent
  ]
})
export class MenuProdutoPageModule {}
