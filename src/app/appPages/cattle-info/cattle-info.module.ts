import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CattleInfoRoutingModule } from './cattle-info-routing.module';
import { CattleInfoComponent } from './cattle-info.component';


@NgModule({
  declarations: [
    CattleInfoComponent
  ],
  imports: [
    CommonModule,
    CattleInfoRoutingModule
  ]
})
export class CattleInfoModule { }
