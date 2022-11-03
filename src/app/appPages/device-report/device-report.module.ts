import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceReportRoutingModule } from './device-report-routing.module';
import { DeviceReportComponent } from './device-report.component';


@NgModule({
  declarations: [
    DeviceReportComponent
  ],
  imports: [
    CommonModule,
    DeviceReportRoutingModule
  ]
})
export class DeviceReportModule { }
