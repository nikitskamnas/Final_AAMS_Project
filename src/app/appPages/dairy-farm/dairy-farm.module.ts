import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DairyFarmRoutingModule } from './dairy-farm-routing.module';
import { DairyFarmComponent } from './dairy-farm.component';


@NgModule({
  declarations: [
    DairyFarmComponent
  ],
  imports: [
    CommonModule,
    DairyFarmRoutingModule
  ]
})
export class DairyFarmModule { }
