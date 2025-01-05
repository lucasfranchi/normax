import { Routes } from '@angular/router';
import { ResponderFormularioComponent } from './responder-formulario.component';

export const routes: Routes = [
  {
    path: '',
    component: ResponderFormularioComponent,
    children: [
      {
        path: 'sistema-gestao-qualidade',
        loadComponent: () =>
          import('./forms/sistema-gestao-qualidade/sistema-gestao-qualidade.component').then((m) => m.SistemaGestaoQualidadeComponent),
      },
      {
        path: 'identificacoes',
        loadComponent: () =>
          import('./forms/identificacoes/identificacoes.component').then((m) => m.IdentificacoesComponent),
      },
      {
        path: 'apreciacao-risco',
        loadComponent: () =>
          import('./forms/apreciacao-risco/apreciacao-risco.component').then((m) => m.ApreciacaoRiscoComponent),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./forms/form-list/form-list.component').then((m) => m.FormListComponent),
      },
      {
        path: '',
        redirectTo: '/responder-formulario/apreciacao-risco',
        pathMatch: 'full',
      },
    ],
  }
];
