// Angular
import { NgModule } from '@angular/core';

// Module
import { RouterModule, Routes } from '@angular/router';

// Component
import { PostListComponent } from './post-list/post-list.component';

// Guard
import { AuthGuard } from '../../core/guards/auth.guard';


const routes: Routes = [
 {
    path: '',
    canActivate: [AuthGuard],
    component: PostListComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
