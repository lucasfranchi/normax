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
          import('../sistema-gestao-qualidade/sistema-gestao-qualidade.component').then((m) => m.SistemaGestaoQualidadeComponent),
      },
      {
        path: 'apreciacao-risco',
        loadComponent: () =>
          import('../apreciacao-risco/apreciacao-risco.component').then((m) => m.ApreciacaoRiscoComponent),
      },
      {
        path: '',
        redirectTo: '/responder-formulario/sistema-gestao-qualidade',
        pathMatch: 'full',
      },
    ],
  }
];
