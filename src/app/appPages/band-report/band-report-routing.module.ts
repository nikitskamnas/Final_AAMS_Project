import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandReportComponent } from './band-report.component';

const routes: Routes = [{ path: '', component: BandReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandReportRoutingModule { }
