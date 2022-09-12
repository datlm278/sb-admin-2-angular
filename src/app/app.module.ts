import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { ColorsComponent } from './component/colors/colors.component';
import { BordersComponent } from './component/borders/borders.component';
import { AnimationComponent } from './component/animation/animation.component';
import { OtherComponent } from './component/other/other.component';
import { TablesComponent } from './component/tables/tables.component';
import { ChartsComponent } from './component/charts/charts.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { BlankPageComponent } from './component/blank-page/blank-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    CardComponent,
    ColorsComponent,
    BordersComponent,
    AnimationComponent,
    OtherComponent,
    TablesComponent,
    ChartsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ErrorPageComponent,
    BlankPageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
