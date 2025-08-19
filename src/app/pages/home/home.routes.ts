import { Route } from "@angular/router";

const homeRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('../about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('../contact/contact').then(m => m.Contact)
    }
];

export default homeRoutes;
