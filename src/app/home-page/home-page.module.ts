import {NgModule} from "@angular/core";
import {HeaderComponent} from "../header/header.component";
import {NavigationComponent} from "../navigation/navigation.component";
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
import {FooterComponent} from "../footer/footer.component";
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
      HeaderComponent,
      NavigationComponent,
      HomePageComponent,
      SliderComponent,
      SliderItemComponent,
      BrandsComponent,
      CategoryPanelComponent,
      CategoryPanelItemComponent,
      QuickAccessPanelComponent,
      QuickAccessPanelItemComponent,
      FooterComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)],
    exports: [RouterModule, HeaderComponent, NavigationComponent, FooterComponent]
  }
)
export class HomePageModule {

}
