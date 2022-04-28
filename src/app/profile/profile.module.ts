import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";

const routes: Route[] = [
  {
    path: "",
    component: ProfileComponent,
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class ProfileModule {
}
