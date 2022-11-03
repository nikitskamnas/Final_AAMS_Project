import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UhfTagReportRoutingModule } from './uhf-tag-report-routing.module';
import { UhfTagReportComponent } from './uhf-tag-report.component';


@NgModule({
  declarations: [
    UhfTagReportComponent
  ],
  imports: [
    CommonModule,
    UhfTagReportRoutingModule
  ]
})
export class UhfTagReportModule { }
