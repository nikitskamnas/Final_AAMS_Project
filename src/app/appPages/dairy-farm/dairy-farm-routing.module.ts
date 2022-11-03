import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyFarmComponent } from './dairy-farm.component';

const routes: Routes = [{ path: '', component: DairyFarmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DairyFarmRoutingModule { }
