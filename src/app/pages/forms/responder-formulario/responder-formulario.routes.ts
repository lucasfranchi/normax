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
          import('../apreciacao-risco/apreciacao-risco.component').then((m) => m.ApreciacaoRiscoComponent),
      },
      {
        path: '',
        redirectTo: '/responder-formulario/apreciacao-risco',
        pathMatch: 'full',
      },
    ],
  }
];
