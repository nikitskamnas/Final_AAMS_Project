import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './appPages/login/login.component';
import { RegisterComponent } from './appPages/register/register.component';
import { HeaderComponent } from './appPages/header/header.component';
import { CommonpageComponent } from './appPages/commonpage/commonpage.component';
import { SidenavComponent } from './appPages/sidenav/sidenav.component';
import { CattleInfoService } from './appServices/cattle-info.service';
import {  HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './appPages/dashboard/dashboard.module';
import { DairyFarmModule } from './appPages/dairy-farm/dairy-farm.module';
import { CattleInfoModule } from './appPages/cattle-info/cattle-info.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CommonpageComponent,
    SidenavComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    DairyFarmModule,
    CattleInfoModule
   
  ],
  providers: [CattleInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
