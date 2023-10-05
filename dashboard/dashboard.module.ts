import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SlidesComponent } from './slides/slides.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule } from '@angular/forms';
import { SlidersComponent } from './sliders/sliders.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SlidesComponent,
    ServiceComponent,
    SlidersComponent,
 
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
