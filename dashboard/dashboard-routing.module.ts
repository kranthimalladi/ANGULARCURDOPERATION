import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SlidesComponent } from './slides/slides.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { SlidersComponent } from './sliders/sliders.component';

const routes: Routes = [

  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"slides",
    component:SlidesComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
  path:"sliders",
  component:SlidersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
