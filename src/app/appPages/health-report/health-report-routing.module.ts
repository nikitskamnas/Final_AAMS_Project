import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthReportComponent } from './health-report.component';
import { LiveHealthRepoart } from './live-health-repoart/live-health-repoart.component';

const routes: Routes = [{ path: '', component: HealthReportComponent },
                         {path:'live-health-repoart',component:LiveHealthRepoart}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthReportRoutingModule { }
