import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {PaymentComponent} from "./payment.component";

const routes: Route[] = [
  {
    path: '',
    component: PaymentComponent,
  }
]

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class PaymentModule {
}
