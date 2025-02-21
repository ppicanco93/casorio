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
        path: 'mural-de-mensagens',
        loadComponent: () => import('./casorio/mural-de-mensagens/mural-de-mensagens.component').then(m => m.MuralDeMensagensComponent),
    },
    {
        path: '**',
        redirectTo: '/lista-de-presentes'
    }
];
