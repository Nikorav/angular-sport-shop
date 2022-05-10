import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {PaymentComponent} from "./payment.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TextMaskModule} from "angular2-text-mask";

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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TextMaskModule,
  ],
  exports: [RouterModule],
})

export class PaymentModule {
}
