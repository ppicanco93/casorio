import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./casorio/telaidentificacao/telaidentificacao.component').then(m => m.TelaidentificacaoComponent),
    },
    {
        path: 'lista-de-presentes',
        loadComponent: () => import('./casorio/lista-de-presentes/lista-de-presentes.component').then(m => m.ListaDePresentesComponent),
    },
    {
        path: 'confirmacao',
        loadComponent: () => import('./casorio/confirmacao/confirmacao.component').then(m => m.ConfirmacaoComponent),
    },
    {
        path: 'informacoes-evento',
        loadComponent: () => import('./casorio/informacoes-evento/informacoes-evento.component').then(m => m.InformacoesEventoComponent),
    },
    {
        path: '**',
        redirectTo: '/lista-de-presentes'
    }
];
