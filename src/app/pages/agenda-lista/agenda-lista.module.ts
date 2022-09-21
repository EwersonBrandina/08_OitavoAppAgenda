import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaListaPageRoutingModule } from './agenda-lista-routing.module';

import { AgendaListaPage } from './agenda-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaListaPageRoutingModule
  ],
  declarations: [AgendaListaPage]
})
export class AgendaListaPageModule {}
