import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargasPageRoutingModule } from './cargas-routing.module';

import { CargasPage } from './cargas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargasPageRoutingModule
  ],
  declarations: [CargasPage]
})
export class CargasPageModule {}
