// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Module
import { PostsRoutingModule } from './posts-routing.module';

// Component
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
