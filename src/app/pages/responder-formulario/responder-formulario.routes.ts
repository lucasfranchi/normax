import { Routes } from '@angular/router';
import { ResponderFormularioComponent } from './responder-formulario.component';

export const routes: Routes = [
  {
    path: '',
    component: ResponderFormularioComponent,
    children: [
      {
        path: 'apreciacao-risco',
        loadComponent: () =>
          import('./forms/apreciacao-risco/apreciacao-risco.component').then(
            (m) => m.ApreciacaoRiscoComponent
          ),
      },
      {
        path: 'apresentacao-maquina',
        loadComponent: () =>
          import(
            './forms/apresentacao-maquina/apresentacao-maquina.component'
          ).then((m) => m.ApresentacaoMaquinaComponent),
      },
      {
        path: 'categoria-seguranca',
        loadComponent: () =>
          import(
            './forms/categoria-seguranca/categoria-seguranca.component'
          ).then((m) => m.CategoriaSegurancaComponent),
      },
      {
        path: 'limites-maquina',
        loadComponent: () =>
          import('./forms/limites-maquina/limites-maquina.component').then(
            (m) => m.LimitesMaquinaComponent
          ),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./forms/form-list/form-list.component').then(
            (m) => m.FormListComponent
          ),
      },
      {
        path: '',
        redirectTo: '/responder-formulario/apresentacao-maquina',
        pathMatch: 'full',
      },
    ],
  },
];
