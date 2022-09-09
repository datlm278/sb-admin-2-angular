import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {DashboardModule} from "./component/dashboard/dashboard.module";
import {RouterModule} from "@angular/router";
import { ButtonComponent } from './component/button/button.component';
import {ButtonModule} from "./component/button/button.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ButtonModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
