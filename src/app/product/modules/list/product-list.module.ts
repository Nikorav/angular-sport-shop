import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list.component";

const routes: Route[] = [
  {
    path: "",
    component: ProductListComponent,
  }
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProductListModule {
}
