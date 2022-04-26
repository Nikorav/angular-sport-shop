import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {SliderComponent} from "./slider/slider.component";
import {SliderItemComponent} from "./slider/slider-item/slider-item.component";
import {BrandsComponent} from "./brands/brands.component";
import {CategoryPanelComponent} from "./category-panel/category-panel.component";
import {CategoryPanelItemComponent} from "./category-panel/category-panel-item/category-panel-item.component";
import {QuickAccessPanelComponent} from "./quick-access-panel/quick-access-panel.component";
import {
  QuickAccessPanelItemComponent
} from "./quick-access-panel/quick-access-panel-item/quick-access-panel-item.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule(
  {
    declarations: [
      HomePageComponent,
      SliderComponent,
      SliderItemComponent,
      BrandsComponent,
      CategoryPanelComponent,
      CategoryPanelItemComponent,
      QuickAccessPanelComponent,
      QuickAccessPanelItemComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class HomePageModule {

}
