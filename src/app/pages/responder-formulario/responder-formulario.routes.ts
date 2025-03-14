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
          import('../formularios/nr-12/apreciacao-risco/apreciacao-risco.component').then(
            (m) => m.ApreciacaoRiscoComponent
          ),
      },
      {
        path: 'apresentacao-maquina',
        loadComponent: () =>
          import(
            '../formularios/nr-12/apresentacao-maquina/apresentacao-maquina.component'
          ).then((m) => m.ApresentacaoMaquinaComponent),
      },
      {
        path: 'categoria-seguranca',
        loadComponent: () =>
          import(
            '../formularios/nr-12/categoria-seguranca/categoria-seguranca.component'
          ).then((m) => m.CategoriaSegurancaComponent),
      },
      {
        path: 'limites-maquina',
        loadComponent: () =>
          import('../formularios/nr-12/limites-maquina/limites-maquina.component').then(
            (m) => m.LimitesMaquinaComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../formularios/nr-12/report-list/report-list.component').then(
            (m) => m.ReportListComponent
          ),
      },
      {
        path: 'forms-list',
        loadComponent: () =>
          import('../formularios/nr-12/forms-list/forms-list.component').then(
            (m) => m.FormsListComponent
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
