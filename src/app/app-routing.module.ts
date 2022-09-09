import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./component/dashboard/dashboard-routing.module').then(
        m => m.DashboardRoutingModule
      ),
  },{
    path: 'button',
    loadChildren: () =>
      import('./component/button/button-routing.module').then(
        m => m.ButtonRoutingModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
