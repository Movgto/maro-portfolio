import { Routes } from '@angular/router';
import homeRoutes from './pages/home/home.routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayoutComponent),
        children: homeRoutes
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent)
    }
];
