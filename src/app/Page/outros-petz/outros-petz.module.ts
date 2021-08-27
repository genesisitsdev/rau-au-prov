import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrosPetzPageRoutingModule } from './outros-petz-routing.module';

import { OutrosPetzPage } from './outros-petz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrosPetzPageRoutingModule
  ],
  declarations: [OutrosPetzPage]
})
export class OutrosPetzPageModule {}
