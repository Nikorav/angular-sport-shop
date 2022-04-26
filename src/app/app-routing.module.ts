import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "main",
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth-module').then(module => module.AuthModule),
  },
  {
    path: "main",
    loadChildren: () => import("./main/main.module").then(module => module.MainModule),
  },
  {
    path: "**",
    redirectTo: "main",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
