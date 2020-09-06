// Angular
import { Routes } from '@angular/router';

// Components
import { LogInComponent } from '../Authentication/log-in/log-in.component';

// Module
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../core/guards/auth.guard';

export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: LogInComponent,
            }
        ]
    }
] 


@NgModule({
    imports: [RouterModule.forChild(AuthenticationRoutes)],
    exports: [RouterModule]
})


export class AuthenticationRoutingModule { }
