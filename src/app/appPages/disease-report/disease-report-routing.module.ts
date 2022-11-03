import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiseaseReportComponent } from './disease-report.component';

const routes: Routes = [{ path: '', component: DiseaseReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseaseReportRoutingModule { }
