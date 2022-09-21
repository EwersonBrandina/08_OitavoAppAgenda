import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDetalhesPage } from './agenda-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDetalhesPageRoutingModule {}
