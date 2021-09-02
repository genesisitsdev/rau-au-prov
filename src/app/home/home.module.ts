import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProdutoModule } from '../Components/produto/produto.module';
import { MenuComponent } from '../Components/menu/menu.component'
import { MenuCategoriasComponent } from '../Components/menu-categorias/menu.categorias.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProdutoModule
  ],
  declarations: [
    HomePage,
    MenuComponent,
    MenuCategoriasComponent
  ],
  exports: [
    MenuComponent,
    MenuCategoriasComponent
  ]
})
export class HomePageModule {}
