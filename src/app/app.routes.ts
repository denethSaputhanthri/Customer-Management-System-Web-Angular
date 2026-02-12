import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Home } from './page/home/home';


export const routes: Routes = [
    {
        path:"home",
        component:Home
    },
    {
        path:"dashboard",
        component:Dashboard
    },
];
