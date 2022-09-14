import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ButtonComponent} from "./component/button/button.component";
import {CardComponent} from "./component/card/card.component";
import {ColorsComponent} from "./component/colors/colors.component";
import {BordersComponent} from "./component/borders/borders.component";
import {AnimationComponent} from "./component/animation/animation.component";
import {OtherComponent} from "./component/other/other.component";
import {TablesComponent} from "./component/tables/tables.component";
import {ChartsComponent} from "./component/charts/charts.component";
import {ErrorPageComponent} from "./component/error-page/error-page.component";
import {BlankPageComponent} from "./component/blank-page/blank-page.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ForgotPasswordComponent} from "./component/forgot-password/forgot-password.component";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
      {
        path: 'component/button',
        component: ButtonComponent,
        title: 'Buttons'
      },
      {
        path: 'component/card',
        component: CardComponent,
        title: 'Cards'
      },
      {
        path: 'utilities/colors',
        component: ColorsComponent,
        title: 'Colors'
      },
      {
        path: 'utilities/borders',
        component: BordersComponent,
        title: 'Borders'
      },
      {
        path: 'utilities/animations',
        component: AnimationComponent,
        title: 'Animations'
      },
      {
        path: 'utilities/others',
        component: OtherComponent,
        title: 'Others'
      },
      {
        path: 'charts',
        component: ChartsComponent,
        title: 'Charts'
      },
      {
        path: 'tables',
        component: TablesComponent,
        title: 'Tables'
      },
      {
        path: 'pages/404-page',
        component: ErrorPageComponent,
        title: 'Error Pages'
      },
      {
        path: 'pages/blank-page',
        component: BlankPageComponent,
        title: 'Blank Pages'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password'
  },
  {
    path: '**',
    redirectTo: 'pages/404-page',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
