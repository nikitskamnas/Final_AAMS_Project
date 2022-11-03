import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuminationReportComponent } from './rumination-report.component';

const routes: Routes = [{ path: '', component: RuminationReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuminationReportRoutingModule { }
