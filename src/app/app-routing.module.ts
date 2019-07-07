import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapPageComponent} from './map-page/map-page.component';
import {BuildersPageComponent} from './builders-page/builders-page.component';
import {BuilderPageComponent} from './builder-page/builder-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MapPageComponent },
  { path: 'builders', component: BuildersPageComponent },
  { path: 'builder', component: BuilderPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
