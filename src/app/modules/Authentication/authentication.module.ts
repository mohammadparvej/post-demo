// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Components
import { LogInComponent } from './log-in/log-in.component';

// Routes
import { AuthenticationRoutes } from '../Authentication/authentication.routing';
import { AuthenticationRoutingModule } from './authentication.routing';


@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports: [LogInComponent]
})
export class AuthenticationModule { }
