import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BanerComponent } from './baner.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    BanerModule.rootComponent
  ],
  exports: [
    BanerModule.rootComponent
  ]
})
export class BanerModule {
  static rootComponent = BanerComponent
}
