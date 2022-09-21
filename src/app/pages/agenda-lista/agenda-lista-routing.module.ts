import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaListaPage } from './agenda-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaListaPageRoutingModule {}
