import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';


@NgModule({
  declarations: [
    DashboardComponent, DashboardBodyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
