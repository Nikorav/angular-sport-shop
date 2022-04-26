import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {ProductDetailsComponent} from "./product-details.component";

const routes: Route[] = [
  {
    path: "",
    component: ProductDetailsComponent,
  }
];

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, ProductDetailsComponent],
})
export class ProductDetailsModule {}
