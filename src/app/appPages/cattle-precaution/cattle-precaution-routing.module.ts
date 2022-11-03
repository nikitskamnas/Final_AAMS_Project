import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattlePrecautionComponent } from './cattle-precaution.component';

const routes: Routes = [{ path: '', component: CattlePrecautionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CattlePrecautionRoutingModule { }
