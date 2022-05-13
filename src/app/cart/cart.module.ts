import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {CartComponent} from "./cart.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorPipeModule} from "../pipes/error-pipe/error-pipe.module";

const routes: Route[] = [
  {
    path: "",
    component: CartComponent,
  }
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ErrorPipeModule,
  ],
  exports: [RouterModule],
})
export class CartModule {}

