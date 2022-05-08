import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {AuthGuard} from "../services/auth.guard";
import {MainComponent} from "./main.component";
import {HeaderComponent} from "../header/header.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {FooterComponent} from "../footer/footer.component";

const routes: Route[] = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: 'home',
        loadChildren: () => import('../home-page/home-page.module').then(module => module.HomePageModule),
      },
      {
        path: 'product',
        loadChildren: () => import("../product/modules/product.module").then(module => module.ProductModule),
      },
      {
        path: "cart",
        loadChildren: () => import("../cart/cart.module").then(module => module.CartModule),
        canActivate: [AuthGuard],
      },
      {
        path: "account",
        loadChildren: () => import("../account/account.module").then(module => module.AccountModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class MainModule {
}
