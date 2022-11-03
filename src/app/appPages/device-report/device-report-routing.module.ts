import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceReportComponent } from './device-report.component';

const routes: Routes = [{ path: '', component: DeviceReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceReportRoutingModule { }
