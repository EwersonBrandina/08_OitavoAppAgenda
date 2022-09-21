import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'agenda-lista',
    loadChildren: () => import('./pages/agenda-lista/agenda-lista.module').then( m => m.AgendaListaPageModule)
  },
  {
    path: 'agenda-detalhes/:id',
    loadChildren: () => import('./pages/agenda-detalhes/agenda-detalhes.module').then( m => m.AgendaDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
