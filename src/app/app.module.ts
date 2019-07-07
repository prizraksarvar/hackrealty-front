import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { MapBubbleComponent } from './map-bubble/map-bubble.component';
import { BuildersPageComponent } from './builders-page/builders-page.component';
import { BuilderPageComponent } from './builder-page/builder-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopMenuComponent,
    MapPageComponent,
    MapFilterComponent,
    MapComponent,
    MapBubbleComponent,
    BuildersPageComponent,
    BuilderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
