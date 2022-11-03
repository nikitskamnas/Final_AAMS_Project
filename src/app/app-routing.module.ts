import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonpageComponent } from './appPages/commonpage/commonpage.component';
import { LoginComponent } from './appPages/login/login.component';
import { RegisterComponent } from './appPages/register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cattle-info',component:CommonpageComponent,children:[
    { path: 'dashboard', loadChildren: () => import('./appPages/dashboard/dashboard.module').then(m => m.DashboardModule)  },
    { path: 'precaution', loadChildren: () => import('./appPages/cattle-precaution/cattle-precaution.module').then(m => m.CattlePrecautionModule) },
    { path: 'device-report', loadChildren: () => import('./appPages/device-report/device-report.module').then(m => m.DeviceReportModule) },
    { path: 'calvinmilkproduct', loadChildren: () => import('./appPages/calvin-milk/calvin-milk.module').then(m => m.CalvinMilkModule) },
    { path: 'dairyfarm', loadChildren: () => import('./appPages/dairy-farm/dairy-farm.module').then(m => m.DairyFarmModule) },
    { path: 'cattleinfo', loadChildren: () => import('./appPages/cattle-info/cattle-info.module').then(m => m.CattleInfoModule) },
    { path: 'healthreport', loadChildren: () => import('./appPages/health-report/health-report.module').then(m => m.HealthReportModule) },
    { path: 'diseaserepoart', loadChildren: () => import('./appPages/disease-report/disease-report.module').then(m => m.DiseaseReportModule) },
    { path: 'ruminationrepoart', loadChildren: () => import('./appPages/rumination-report/rumination-report.module').then(m => m.RuminationReportModule) },
    { path: 'uhftagrepoart', loadChildren: () => import('./appPages/uhf-tag-report/uhf-tag-report.module').then(m => m.UhfTagReportModule) },
    { path: 'bandrepoart', loadChildren: () => import('./appPages/band-report/band-report.module').then(m => m.BandReportModule) },
  ]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
