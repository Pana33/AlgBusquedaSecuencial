import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"",redirectTo:"algSecuencial",pathMatch:"full"},
    {path:"algSecuencial",loadComponent: () => import("./pages/alg-secuencial/alg-secuencial.component").then(c => c.AlgSecuencialComponent)},
    {path:"**",redirectTo:"algSecuencial",pathMatch:"full"},
];
