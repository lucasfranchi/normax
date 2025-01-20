import { Routes } from '@angular/router';
import { ResponderFormularioComponent } from './responder-formulario.component';
import {ApresentacaoMaquinaComponent} from "./forms/apresentacao-maquina/apresentacao-maquina.component";
import {CategoriaSegurancaComponent} from "./forms/categoria-seguranca/categoria-seguranca.component";

export const routes: Routes = [
  {
    path: '',
    component: ResponderFormularioComponent,
    children: [
      {
        path: 'apreciacao-risco',
        loadComponent: () =>
          import('./forms/apreciacao-risco/apreciacao-risco.component').then((m) => m.ApreciacaoRiscoComponent),
      },
      {
        path: 'apresentacao-maquina',
        loadComponent: () =>
          import('./forms/apresentacao-maquina/apresentacao-maquina.component').then((m) => m.ApresentacaoMaquinaComponent),
      },
      {
        path: 'categoria-seguranca',
        loadComponent: () =>
          import('./forms/categoria-seguranca/categoria-seguranca.component').then((m) => m.CategoriaSegurancaComponent),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./forms/form-list/form-list.component').then((m) => m.FormListComponent),
      },
      {
        path: '',
        redirectTo: '/responder-formulario/apresentacao-maquina',
        pathMatch: 'full',
      },
    ],
  }
];
