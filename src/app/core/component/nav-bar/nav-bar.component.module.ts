import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [NavBarComponentModule.rootComponent],
  exports: [NavBarComponentModule.rootComponent],
})
export class NavBarComponentModule {
  static rootComponent = NavBarComponent
}
