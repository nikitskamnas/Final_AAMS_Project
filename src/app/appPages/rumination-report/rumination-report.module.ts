import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuminationReportRoutingModule } from './rumination-report-routing.module';
import { RuminationReportComponent } from './rumination-report.component';


@NgModule({
  declarations: [
    RuminationReportComponent
  ],
  imports: [
    CommonModule,
    RuminationReportRoutingModule
  ]
})
export class RuminationReportModule { }
