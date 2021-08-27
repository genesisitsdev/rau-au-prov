import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProdutoPageRoutingModule } from './menu-produto-routing.module';

import { MenuProdutoPage } from './menu-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProdutoPageRoutingModule
  ],
  declarations: [MenuProdutoPage]
})
export class MenuProdutoPageModule {}
