import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapPageComponent} from './map-page/map-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
