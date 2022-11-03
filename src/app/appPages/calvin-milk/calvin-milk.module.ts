import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalvinMilkRoutingModule } from './calvin-milk-routing.module';
import { CalvinMilkComponent } from './calvin-milk.component';


@NgModule({
  declarations: [
    CalvinMilkComponent
  ],
  imports: [
    CommonModule,
    CalvinMilkRoutingModule
  ]
})
export class CalvinMilkModule { }
