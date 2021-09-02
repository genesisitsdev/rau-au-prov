import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProdutoPageRoutingModule } from './menu-produto-routing.module';

import { MenuProdutoPage } from './menu-produto.page';
import { NavBarComponentModule } from 'src/app/core/component/nav-bar/nav-bar.component.module';
import { ProdutoModule } from 'src/app/Components/produto/produto.module';
import { BanerModule } from 'src/app/Components/banner/baner.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProdutoPageRoutingModule,
    NavBarComponentModule,
    ProdutoModule,
    BanerModule
  ],
  declarations: [
    MenuProdutoPage,
  ],
  exports: [
    MenuProdutoPage
  ]
})
export class MenuProdutoPageModule {}
