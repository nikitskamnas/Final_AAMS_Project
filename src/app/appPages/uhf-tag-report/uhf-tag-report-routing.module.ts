import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhfTagReportComponent } from './uhf-tag-report.component';

const routes: Routes = [{ path: '', component: UhfTagReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UhfTagReportRoutingModule { }
