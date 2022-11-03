import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseaseReportRoutingModule } from './disease-report-routing.module';
import { DiseaseReportComponent } from './disease-report.component';


@NgModule({
  declarations: [
    DiseaseReportComponent
  ],
  imports: [
    CommonModule,
    DiseaseReportRoutingModule
  ]
})
export class DiseaseReportModule { }
