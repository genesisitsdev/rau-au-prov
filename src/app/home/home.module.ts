import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProdutoComponent } from '../Components/produto/produto.component'
import { MenuComponent } from '../Components/menu/menu.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    ProdutoComponent,
    MenuComponent],
  exports: [
    ProdutoComponent,
    MenuComponent
  ]
})
export class HomePageModule {}
