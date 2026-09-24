import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Guincho 24 Horas em Praia Grande | Bloopu Guincho Express'
      },
      {
        path: 'servicos',
        loadComponent: () => import('./pages/services/services-page.component').then(m => m.ServicesPageComponent),
        title: 'Serviços de Guincho 24h em Praia Grande'
      },
      {
        path: 'servicos/:id',
        loadComponent: () => import('./pages/services/service-detail.component').then(m => m.ServiceDetailComponent),
        title: 'Detalhes do Serviço | Bloopu Guincho Express'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
