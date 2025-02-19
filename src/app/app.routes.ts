import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./casorio/telaidentificacao/telaidentificacao.component').then(m => m.TelaidentificacaoComponent),
    }
];
