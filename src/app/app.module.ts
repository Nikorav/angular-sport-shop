import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderComponent } from './home-page/slider/slider.component';
import { SliderItemComponent } from './home-page/slider/slider-item/slider-item.component';
import { BrandsComponent } from './home-page/brands/brands.component';
import { CategoryPanelComponent } from './home-page/category-panel/category-panel.component';
import { CategoryPanelItemComponent } from './home-page/category-panel/category-panel-item/category-panel-item.component';
import { QuickAccessPanelComponent } from './home-page/quick-access-panel/quick-access-panel.component';
import { QuickAccessPanelItemComponent } from './home-page/quick-access-panel/quick-access-panel-item/quick-access-panel-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
