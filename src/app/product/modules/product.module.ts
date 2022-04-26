import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {ProductComponent} from "./product.component";

const routes: Route[] = [
  {
    path: "",
    component: ProductComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "list",
      },
      {
        path: "list",
        loadChildren: () => import("./list/product-list.module").then(module => module.ProductListModule)
      },
      {
        path: ":productId",
        loadChildren: () => import("./details/product-details.module").then(module => module.ProductDetailsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductModule {

}
