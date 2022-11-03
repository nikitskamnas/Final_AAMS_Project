import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CattlePrecautionRoutingModule } from './cattle-precaution-routing.module';
import { CattlePrecautionComponent } from './cattle-precaution.component';


@NgModule({
  declarations: [
    CattlePrecautionComponent
  ],
  imports: [
    CommonModule,
    CattlePrecautionRoutingModule
  ]
})
export class CattlePrecautionModule { }
