import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhoesPageRoutingModule } from './caminhoes-routing.module';

import { CaminhoesPage } from './caminhoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhoesPageRoutingModule
  ],
  declarations: [CaminhoesPage]
})
export class CaminhoesPageModule {}
