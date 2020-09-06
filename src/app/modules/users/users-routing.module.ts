// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
 {
    path: '',
    canActivate: [AuthGuard],
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
