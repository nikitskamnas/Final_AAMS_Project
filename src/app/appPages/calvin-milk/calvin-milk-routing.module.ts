import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalvinMilkComponent } from './calvin-milk.component';

const routes: Routes = [{ path: '', component: CalvinMilkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalvinMilkRoutingModule { }
