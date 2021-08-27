import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPetPageRoutingModule } from './menu-pet-routing.module';

import { MenuPetPage } from './menu-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPetPageRoutingModule
  ],
  declarations: [MenuPetPage]
})
export class MenuPetPageModule {}
