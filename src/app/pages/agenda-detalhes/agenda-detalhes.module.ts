import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDetalhesPageRoutingModule } from './agenda-detalhes-routing.module';

import { AgendaDetalhesPage } from './agenda-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDetalhesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgendaDetalhesPage]
})
export class AgendaDetalhesPageModule {}
