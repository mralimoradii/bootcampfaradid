import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"profile",
        pathMatch:"full"
    },
    {
        path:"profile",
        loadChildren:()=> import("./pages/profile/profile.module").then((m)=>m.ProfileModule)
    },
    {
        path:"tariffs",
        loadChildren:()=> import("./pages/tariffs/tariffs.module").then((m)=>m.TariffsModule)
    },
    {
        path:"**",
        redirectTo:"error/404",
        pathMatch:"full"
    }
];
