import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { SliderItemComponent } from './home/slider/slider-item/slider-item.component';
import { BrandsComponent } from './home/brands/brands.component';
import { CategoryPanelComponent } from './home/category-panel/category-panel.component';
import { CategoryPanelItemComponent } from './home/category-panel/category-panel-item/category-panel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    SliderComponent,
    SliderItemComponent,
    BrandsComponent,
    CategoryPanelComponent,
    CategoryPanelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
