import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/lista-de-presentes',
        pathMatch: 'full',
    },
    {
        path: 'lista-de-presentes',
        loadComponent: () => import('./casorio/lista-de-presentes/lista-de-presentes.component').then(m => m.ListaDePresentesComponent),
    },
    {
        path: 'informacoes-evento',
        loadComponent: () => import('./casorio/informacoes-evento/informacoes-evento.component').then(m => m.InformacoesEventoComponent),
    },
    {
        path: 'sobre-nos',
        loadComponent: () => import('./casorio/sobre-nos/sobre-nos.component').then(m => m.SobreNosComponent),
    },
    {
        path: '**',
        redirectTo: '/lista-de-presentes'
    }
];
