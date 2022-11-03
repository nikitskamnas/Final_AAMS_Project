import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthReportRoutingModule } from './health-report-routing.module';
import { HealthReportComponent } from './health-report.component';
import { LiveHealthRepoart } from './live-health-repoart/live-health-repoart.component';


@NgModule({
  declarations: [
    HealthReportComponent,
    LiveHealthRepoart
  ],
  imports: [
    CommonModule,
    HealthReportRoutingModule
  ]
})
export class HealthReportModule { }
