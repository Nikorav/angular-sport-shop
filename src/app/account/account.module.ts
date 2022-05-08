import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Route[] = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "profile",
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule),
      },
    ]
  }
]

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AccountModule {}
