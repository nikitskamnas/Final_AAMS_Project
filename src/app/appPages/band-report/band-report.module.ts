import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandReportRoutingModule } from './band-report-routing.module';
import { BandReportComponent } from './band-report.component';


@NgModule({
  declarations: [
    BandReportComponent
  ],
  imports: [
    CommonModule,
    BandReportRoutingModule
  ]
})
export class BandReportModule { }
