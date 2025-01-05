import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'responder-formulario',
    loadChildren: () => import('./pages/responder-formulario/responder-formulario.routes').then((m) => m.routes),
  },
];
