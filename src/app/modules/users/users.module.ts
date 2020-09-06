// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

//  Module
import { CoreModule } from '../../core/core.module';
import { UsersRoutingModule } from './users-routing.module';

// Components
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
