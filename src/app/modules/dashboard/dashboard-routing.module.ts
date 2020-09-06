// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
 {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
